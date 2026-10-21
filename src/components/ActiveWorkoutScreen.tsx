/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Plus,
  Check,
  Lock,
  FastForward,
  Dumbbell,
  Timer,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Flame,
  Volume2,
  VolumeX,
  Info,
  FileText,
  Edit3,
  MessageSquare
} from "lucide-react";
import { WorkoutRoutine, Exercise } from "../types";
import { Haptics, NotificationType, ImpactStyle } from "@capacitor/haptics";
import ExerciseDetailModal from "./ExerciseDetailModal";

interface ActiveWorkoutScreenProps {
  routine: WorkoutRoutine;
  onClose: () => void;
  onFinishWorkout: (totalActiveMinutes: number, totalVolumeTons: number) => void;
  onLogLoad: (exerciseId: string, loadKg: number, reps: number, notes?: string) => void;
  onBeatMilestone: (exerciseName: string, loadKg: number) => void;
  onGoToHome?: () => void;
}

interface RestContextInfo {
  reason: "exercise_completed" | "set_completed";
  completedName: string;
  nextExerciseName: string;
  nextSetNumber: number;
  nextSetTotal: number;
  nextTargetLoad: string;
  nextReps: string;
}

export default function ActiveWorkoutScreen({
  routine,
  onClose,
  onFinishWorkout,
  onLogLoad,
  onBeatMilestone,
  onGoToHome,
}: ActiveWorkoutScreenProps) {
  // Current position in workout
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [currentSetIndex, setCurrentSetIndex] = useState(0); // 0-indexed set number

  // Track completed sets count for each exercise ID
  const [completedSetsByExercise, setCompletedSetsByExercise] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    routine.exercises.forEach((ex) => {
      initial[ex.id] = 0;
    });
    return initial;
  });

  const currentExercise = routine.exercises[currentExerciseIndex] || routine.exercises[0];
  const totalSets = currentExercise.series;

  // Active workout time tracking
  const [workoutSeconds, setWorkoutSeconds] = useState(0);
  const [showFinishConfirm, setShowFinishConfirm] = useState(false);

  // Automatic Rest Timer states
  const [autoRestEnabled, setAutoRestEnabled] = useState(true);
  const [timeLeft, setTimeLeft] = useState(currentExercise.restSeconds);
  const [totalRestTime, setTotalRestTime] = useState(currentExercise.restSeconds);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isResting, setIsResting] = useState(false);
  const [restContext, setRestContext] = useState<RestContextInfo | null>(null);

  // Exercise Guide modal state
  const [showGuideModal, setShowGuideModal] = useState(false);

  // Sound effects preference
  const [soundEnabled, setSoundEnabled] = useState<boolean>(() => {
    try {
      return localStorage.getItem("titan_sound_enabled") !== "false";
    } catch {
      return true;
    }
  });

  const toggleSound = () => {
    setSoundEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem("titan_sound_enabled", String(next));
      } catch {}
      return next;
    });
  };

  // Interactive set customization (load / reps)
  const [setLoad, setSetLoad] = useState<number>(() => {
    const raw = currentExercise.currentLoad.replace(/[^\d.]/g, "");
    return raw ? parseFloat(raw) : 40;
  });
  const [setReps, setSetReps] = useState<number>(() => {
    const numMatch = currentExercise.reps.match(/\d+/);
    return numMatch ? parseInt(numMatch[0]) : 10;
  });

  // Exercise sensation & difficulty notes per exercise ID
  const [exerciseNotes, setExerciseNotes] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem("titan_workout_notes");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [editingNoteExerciseId, setEditingNoteExerciseId] = useState<string | null>(null);
  const [showNotesInput, setShowNotesInput] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("titan_workout_notes", JSON.stringify(exerciseNotes));
    } catch {
      // ignore storage quota errors
    }
  }, [exerciseNotes]);

  const currentNote = exerciseNotes[currentExercise.id] || "";

  const handleUpdateNote = (exerciseId: string, text: string) => {
    setExerciseNotes((prev) => ({
      ...prev,
      [exerciseId]: text,
    }));
  };

  const handleAppendTagToNote = (exerciseId: string, tag: string) => {
    setExerciseNotes((prev) => {
      const existing = prev[exerciseId] || "";
      if (existing.includes(tag)) return prev;
      const updated = existing.trim() ? `${existing.trim()}, ${tag}` : tag;
      return {
        ...prev,
        [exerciseId]: updated,
      };
    });
  };

  // SVG circular properties for rest countdown ring
  const radius = 110;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius; // 691.15
  const strokeDashoffset = isResting && totalRestTime > 0
    ? circumference - (timeLeft / totalRestTime) * circumference
    : circumference;

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const workoutTimerRef = useRef<NodeJS.Timeout | null>(null);
  const restTargetTimestampRef = useRef<number | null>(null);
  const workoutStartTimestampRef = useRef<number>(Date.now());
  const shortBeepAudioRef = useRef<HTMLAudioElement | null>(null);
  const fullBeepAudioRef = useRef<HTMLAudioElement | null>(null);
  const lastBeepSecondRef = useRef<number | null>(null);

  // Preload audio files for zero-latency playback
  useEffect(() => {
    try {
      const shortBeep = new Audio("/sounds/short-beep.mp3");
      const fullBeep = new Audio("/sounds/beep.mp3");
      shortBeep.preload = "auto";
      fullBeep.preload = "auto";
      shortBeepAudioRef.current = shortBeep;
      fullBeepAudioRef.current = fullBeep;
    } catch {}
  }, []);

  const [quitConfirmType, setQuitConfirmType] = useState<"prev" | "home" | "quit" | null>(null);

  // Screen Wake Lock API to prevent phone display from sleeping during an active training session
  useEffect(() => {
    let wakeLockSentinel: any = null;

    async function requestWakeLock() {
      if ("wakeLock" in navigator) {
        try {
          wakeLockSentinel = await (navigator as any).wakeLock.request("screen");
        } catch {
          // Wake lock unavailable or denied
        }
      }
    }

    requestWakeLock();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        requestWakeLock();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (wakeLockSentinel) {
        wakeLockSentinel.release().catch(() => {});
      }
    };
  }, []);

  // Countdown short beep (3, 2, 1)
  const playCountdownBeep = () => {
    if (!soundEnabled) return;
    try {
      if (shortBeepAudioRef.current) {
        shortBeepAudioRef.current.currentTime = 0;
        shortBeepAudioRef.current.play().catch(() => {});
      }
      try {
        Haptics.impact({ style: ImpactStyle.Light });
      } catch {
        if (navigator.vibrate) navigator.vibrate(40);
      }
    } catch {}
  };

  // Sound chime synthesizer fallback
  const playSynthesizedChime = () => {
    try {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtxClass) return;
      const ctx = new AudioCtxClass();
      
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      gain1.gain.setValueAtTime(0.12, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc1.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 0.25);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.frequency.setValueAtTime(880, ctx.currentTime + 0.2); // A5
      gain2.gain.setValueAtTime(0.15, ctx.currentTime + 0.2);
      gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.55);
      osc2.start(ctx.currentTime + 0.2);
      osc2.stop(ctx.currentTime + 0.55);
    } catch {}
  };

  // Sound chime with native haptic motor feedback
  const playRestCompleteChime = () => {
    try {
      try {
        Haptics.notification({ type: NotificationType.Success });
      } catch {
        if (navigator.vibrate) {
          navigator.vibrate([200, 100, 200]);
        }
      }

      if (soundEnabled) {
        if (fullBeepAudioRef.current) {
          fullBeepAudioRef.current.currentTime = 0;
          fullBeepAudioRef.current.play().catch(() => {
            playSynthesizedChime();
          });
        } else {
          playSynthesizedChime();
        }
      }
    } catch {
      if (soundEnabled) playSynthesizedChime();
    }
  };

  // Sync load / reps when changing exercise
  useEffect(() => {
    if (currentExercise) {
      const rawLoad = currentExercise.currentLoad.replace(/[^\d.]/g, "");
      setSetLoad(rawLoad ? parseFloat(rawLoad) : 40);

      const numMatch = currentExercise.reps.match(/\d+/);
      setSetReps(numMatch ? parseInt(numMatch[0]) : 10);

      // Only update default rest times if not currently resting
      if (!isResting) {
        setTimeLeft(currentExercise.restSeconds);
        setTotalRestTime(currentExercise.restSeconds);
      }
    }
  }, [currentExerciseIndex]);

  // Workout duration timer (drift-free using Date.now())
  useEffect(() => {
    workoutStartTimestampRef.current = Date.now() - workoutSeconds * 1000;
    workoutTimerRef.current = setInterval(() => {
      const elapsed = Math.max(0, Math.floor((Date.now() - workoutStartTimestampRef.current) / 1000));
      setWorkoutSeconds(elapsed);
    }, 1000);

    return () => {
      if (workoutTimerRef.current) clearInterval(workoutTimerRef.current);
    };
  }, []);

  // Automatic rest countdown timer (resilient to screen lock / app switching via target timestamp)
  useEffect(() => {
    if (isResting && isTimerRunning) {
      restTargetTimestampRef.current = Date.now() + timeLeft * 1000;

      const tick = () => {
        if (!restTargetTimestampRef.current) return;
        const diff = Math.ceil((restTargetTimestampRef.current - Date.now()) / 1000);
        if (diff <= 0) {
          if (timerRef.current) clearInterval(timerRef.current);
          setTimeLeft(0);
          setIsTimerRunning(false);
          setIsResting(false);
          restTargetTimestampRef.current = null;
          lastBeepSecondRef.current = null;
          playRestCompleteChime();
        } else {
          // Play countdown short beep on seconds 3, 2, 1
          if (diff <= 3 && diff >= 1 && lastBeepSecondRef.current !== diff) {
            lastBeepSecondRef.current = diff;
            playCountdownBeep();
          }
          setTimeLeft(diff);
        }
      };

      timerRef.current = setInterval(tick, 1000);

      // Instantly re-synchronize timer when user returns from another app (e.g. Spotify)
      const handleVisibilityChange = () => {
        if (document.visibilityState === "visible") {
          tick();
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      return () => {
        if (timerRef.current) clearInterval(timerRef.current);
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    } else {
      restTargetTimestampRef.current = null;
      lastBeepSecondRef.current = null;
    }
  }, [isResting, isTimerRunning]);

  // Format workout time
  const formatWorkoutTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Format timer rest display
  const formatRestTime = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Timer controls
  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  const resetTimer = () => {
    setTimeLeft(totalRestTime);
    restTargetTimestampRef.current = Date.now() + totalRestTime * 1000;
    setIsTimerRunning(true);
  };

  const addTime = (seconds: number = 30) => {
    if (restTargetTimestampRef.current) {
      restTargetTimestampRef.current += seconds * 1000;
    }
    setTimeLeft((prev) => prev + seconds);
    setTotalRestTime((prev) => Math.max(prev, prev + seconds));
  };

  const subtractTime = (seconds: number = 15) => {
    setTimeLeft((prev) => {
      const updated = Math.max(5, prev - seconds);
      if (restTargetTimestampRef.current) {
        restTargetTimestampRef.current = Date.now() + updated * 1000;
      }
      return updated;
    });
  };

  const setCustomRestDuration = (seconds: number) => {
    setTimeLeft(seconds);
    setTotalRestTime(seconds);
    setIsTimerRunning(true);
  };

  const skipRest = () => {
    setIsResting(false);
    setIsTimerRunning(false);
    setRestContext(null);
  };

  const selectExerciseManually = (idx: number) => {
    setCurrentExerciseIndex(idx);
    const targetEx = routine.exercises[idx];
    const completed = completedSetsByExercise[targetEx.id] || 0;
    const nextSetIdx = completed >= targetEx.series ? targetEx.series - 1 : completed;
    setCurrentSetIndex(nextSetIdx);
    setIsResting(false);
    setIsTimerRunning(false);
    setRestContext(null);
  };

  // Trigger automatic rest countdown
  const startAutoRest = (
    restSeconds: number,
    context: RestContextInfo
  ) => {
    if (!autoRestEnabled) {
      setIsResting(false);
      setIsTimerRunning(false);
      setRestContext(null);
      return;
    }

    setTimeLeft(restSeconds);
    setTotalRestTime(restSeconds);
    setRestContext(context);
    setIsResting(true);
    setIsTimerRunning(true);
  };

  // Complete an entire exercise directly (e.g., mark all sets as done)
  const handleCompleteEntireExercise = (targetIndex: number = currentExerciseIndex) => {
    const targetEx = routine.exercises[targetIndex];
    if (!targetEx) return;

    // Log remaining sets with current load and exercise note
    const currentCompleted = completedSetsByExercise[targetEx.id] || 0;
    const noteForExercise = exerciseNotes[targetEx.id];
    for (let i = currentCompleted; i < targetEx.series; i++) {
      onLogLoad(targetEx.id, setLoad, setReps, noteForExercise);
    }

    // Check milestone
    const targetVal = parseFloat(targetEx.targetLoad.replace(/[^\d.]/g, ""));
    if (!isNaN(targetVal) && setLoad >= targetVal) {
      onBeatMilestone(targetEx.name, setLoad);
    }

    // Mark all sets of this exercise as completed
    const updatedCompleted = {
      ...completedSetsByExercise,
      [targetEx.id]: targetEx.series,
    };
    setCompletedSetsByExercise(updatedCompleted);

    // Find next unfinished exercise (circular search)
    let nextUnfinishedIdx = -1;
    for (let i = 1; i <= routine.exercises.length; i++) {
      const checkIdx = (targetIndex + i) % routine.exercises.length;
      const ex = routine.exercises[checkIdx];
      const completed = updatedCompleted[ex.id] || 0;
      if (completed < ex.series) {
        nextUnfinishedIdx = checkIdx;
        break;
      }
    }

    if (nextUnfinishedIdx === -1) {
      // Workout Finished! All exercises completed!
      finishWorkoutCalculation();
    } else {
      const nextEx = routine.exercises[nextUnfinishedIdx];
      const nextCompletedSets = updatedCompleted[nextEx.id] || 0;

      setCurrentExerciseIndex(nextUnfinishedIdx);
      setCurrentSetIndex(nextCompletedSets);

      // Start automatic rest timer for next exercise's first series
      startAutoRest(targetEx.restSeconds || 90, {
        reason: "exercise_completed",
        completedName: targetEx.name,
        nextExerciseName: nextEx.name,
        nextSetNumber: nextCompletedSets + 1,
        nextSetTotal: nextEx.series,
        nextTargetLoad: nextEx.targetLoad,
        nextReps: nextEx.reps,
      });
    }
  };

  // Log single set completion
  const handleConcluirSet = () => {
    // Log the load details with notes on sensation/difficulties
    onLogLoad(currentExercise.id, setLoad, setReps, exerciseNotes[currentExercise.id]);

    // Check if we beat our target load
    const targetVal = parseFloat(currentExercise.targetLoad.replace(/[^\d.]/g, ""));
    if (!isNaN(targetVal) && setLoad >= targetVal) {
      onBeatMilestone(currentExercise.name, setLoad);
    }

    // Update completed sets count
    const nextCompleted = (completedSetsByExercise[currentExercise.id] || 0) + 1;
    const updatedCompleted = {
      ...completedSetsByExercise,
      [currentExercise.id]: nextCompleted,
    };
    setCompletedSetsByExercise(updatedCompleted);

    // Check if this was the last set of the exercise
    const isLastSetOfExercise = currentSetIndex >= totalSets - 1;

    if (isLastSetOfExercise) {
      // Find the next unfinished exercise dynamically
      let nextUnfinishedIdx = -1;
      for (let i = 1; i <= routine.exercises.length; i++) {
        const checkIdx = (currentExerciseIndex + i) % routine.exercises.length;
        const ex = routine.exercises[checkIdx];
        const completed = updatedCompleted[ex.id] || 0;
        if (completed < ex.series) {
          nextUnfinishedIdx = checkIdx;
          break;
        }
      }

      if (nextUnfinishedIdx === -1) {
        // Workout Finished! All exercises completed!
        finishWorkoutCalculation();
      } else {
        const nextEx = routine.exercises[nextUnfinishedIdx];
        const nextCompletedSets = updatedCompleted[nextEx.id] || 0;

        setCurrentExerciseIndex(nextUnfinishedIdx);
        setCurrentSetIndex(nextCompletedSets);

        // Auto-rest between different exercises
        startAutoRest(currentExercise.restSeconds || 90, {
          reason: "exercise_completed",
          completedName: currentExercise.name,
          nextExerciseName: nextEx.name,
          nextSetNumber: nextCompletedSets + 1,
          nextSetTotal: nextEx.series,
          nextTargetLoad: nextEx.targetLoad,
          nextReps: nextEx.reps,
        });
      }
    } else {
      // Move to next set in the same exercise
      const nextSetNum = currentSetIndex + 1;
      setCurrentSetIndex(nextSetNum);

      // Auto-rest between sets of the same exercise
      startAutoRest(currentExercise.restSeconds || 60, {
        reason: "set_completed",
        completedName: `${currentExercise.name} - Série ${currentSetIndex + 1}`,
        nextExerciseName: currentExercise.name,
        nextSetNumber: nextSetNum + 1,
        nextSetTotal: totalSets,
        nextTargetLoad: currentExercise.targetLoad,
        nextReps: currentExercise.reps,
      });
    }
  };

  const finishWorkoutCalculation = () => {
    try {
      localStorage.removeItem("titan_workout_notes");
    } catch {
      // ignore
    }
    const activeMins = Math.max(1, Math.round(workoutSeconds / 60));
    const volumeTons =
      parseFloat(
        (
          0.005 *
          routine.exercises.reduce((acc, curr) => {
            const lVal = parseFloat(curr.currentLoad.replace(/[^\d]/g, "")) || 30;
            return acc + lVal * curr.series * 10;
          }, 0)
        ).toFixed(1)
      ) || 12.5;

    onFinishWorkout(activeMins, volumeTons);
  };

  const handleForceFinish = () => {
    setShowFinishConfirm(true);
  };

  const handleConfirmFinish = () => {
    setShowFinishConfirm(false);
    finishWorkoutCalculation();
  };

  const handleQuitWorkout = () => {
    setQuitConfirmType("quit");
  };

  const handleConfirmCancel = () => {
    try {
      localStorage.removeItem("titan_workout_notes");
    } catch {
      // ignore
    }
    onClose();
    if (quitConfirmType === "home" && onGoToHome) {
      onGoToHome();
    }
    setQuitConfirmType(null);
  };

  // Helper info about what's coming up next
  const upcomingExerciseName = restContext ? restContext.nextExerciseName : currentExercise.name;
  const upcomingSetNumber = restContext ? restContext.nextSetNumber : currentSetIndex + 1;
  const upcomingSetTotal = restContext ? restContext.nextSetTotal : totalSets;
  const upcomingLoad = restContext ? restContext.nextTargetLoad : currentExercise.targetLoad;
  const upcomingReps = restContext ? restContext.nextReps : currentExercise.reps;

  return (
    <div className="fixed inset-0 bg-[#111616] text-[#e2e2e2] z-40 overflow-y-auto pb-safe flex flex-col font-sans animate-slide-up">
      {/* Top Header */}
      <header className="sticky top-0 bg-[#111616]/95 backdrop-blur-md border-b border-[#253230] flex items-center justify-between px-4 py-3 pt-safe z-30 w-full min-h-[4rem]">
        {/* Left: Cancel Workout */}
        <button
          onClick={handleQuitWorkout}
          className="bg-[#182020] hover:bg-red-500/15 border border-[#253230] hover:border-red-500/30 text-gray-400 hover:text-red-400 px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 flex items-center gap-1.5"
          id="btn-quit-workout"
          title="Sair e cancelar treino"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
          <span className="hidden sm:inline">Cancelar</span>
        </button>

        {/* Center: Live Timer and Routine Title */}
        <div className="flex flex-col items-center">
          <span className="text-[10px] text-[#CDFC39] font-black uppercase tracking-wider max-w-[150px] sm:max-w-xs truncate font-display">
            {routine.name}
          </span>
          <span className="text-sm font-mono font-black text-white flex items-center gap-1.5 mt-0.5">
            <span className="w-2 h-2 rounded-full bg-[#CDFC39] animate-pulse"></span>
            {formatWorkoutTime(workoutSeconds)}
          </span>
        </div>

        {/* Right: Save / Finish Workout */}
        <button
          onClick={handleForceFinish}
          className="bg-[#CDFC39] hover:bg-[#bbf224] text-black px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-[#CDFC39]/25 flex items-center gap-1"
          id="btn-finish-workout"
          title="Finalizar e salvar treino"
        >
          <Check className="w-4 h-4 stroke-[3]" />
          <span>Finalizar</span>
        </button>
      </header>

      <main className="flex-1 px-4 sm:px-6 pt-5 max-w-lg mx-auto w-full space-y-6">
        {/* Current Exercise Details & Status */}
        <section className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#CDFC39]/15 text-[#CDFC39] border border-[#CDFC39]/30">
              {isResting ? "EM DESCANSO" : "EXERCÍCIO EM ANDAMENTO"}
            </span>

            {/* Quick Auto-Rest toggle switch */}
            <button
              onClick={() => setAutoRestEnabled(!autoRestEnabled)}
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border transition-all flex items-center gap-1 ${
                autoRestEnabled
                  ? "bg-[#182020] text-gray-300 border-[#253230] hover:border-[#CDFC39]/50"
                  : "bg-red-500/10 text-red-400 border-red-500/20"
              }`}
              title={autoRestEnabled ? "Descanso automático ativado" : "Descanso automático desativado"}
            >
              <Timer className="w-3 h-3 text-[#CDFC39]" />
              <span>Auto-descanso: {autoRestEnabled ? "ON" : "OFF"}</span>
            </button>

            {/* Sound toggle button */}
            <button
              onClick={toggleSound}
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border transition-all flex items-center gap-1 ${
                soundEnabled
                  ? "bg-[#182020] text-[#CDFC39] border-[#CDFC39]/40"
                  : "bg-[#182020] text-gray-400 border-[#253230]"
              }`}
              title={soundEnabled ? "Som ativado (Beeps 3-2-1)" : "Som desativado"}
            >
              {soundEnabled ? <Volume2 className="w-3 h-3 text-[#CDFC39]" /> : <VolumeX className="w-3 h-3" />}
              <span>{soundEnabled ? "Som ON" : "Mudo"}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2">
            <h1 className="text-2xl font-bold text-white leading-tight font-display">
              {currentExercise.name}
            </h1>
            <button
              onClick={() => setShowGuideModal(true)}
              className="p-1.5 rounded-xl bg-[#182020] hover:bg-[#253230] text-[#CDFC39] border border-[#253230] hover:border-[#CDFC39]/40 transition-all active:scale-95 flex items-center gap-1"
              title="Ver vídeo, postura e instruções deste exercício"
            >
              <Info className="w-4 h-4" />
              <span className="text-[10px] font-black uppercase hidden sm:inline">Guia</span>
            </button>
          </div>

          <div className="flex justify-center items-center gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-[#182020] border border-[#253230] text-[11px] font-bold text-gray-300 tracking-wider">
              {currentExercise.muscleGroup}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#182020] border border-[#CDFC39]/40 text-[11px] font-bold text-[#CDFC39]">
              SÉRIE {currentSetIndex + 1}/{totalSets}
            </span>
            <span className="text-xs text-gray-400">
              Descanso sugerido: {currentExercise.restDisplay || `${currentExercise.restSeconds}s`}
            </span>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* AUTOMATIC REST TIMER SECTION / EXERCISE STATE */}
        {/* ========================================================================= */}
        <section className="relative flex flex-col items-center justify-center py-2">
          {isResting ? (
            /* ================= ACTIVE AUTOMATIC REST VIEW ================= */
            <div className="w-full bg-[#182020] border border-[#253230] rounded-3xl p-6 shadow-2xl flex flex-col items-center relative overflow-hidden animate-fade-in">
              {/* Yellow-Green Glow accent line */}
              <div className="absolute top-0 left-0 h-1 bg-[#CDFC39] w-full"></div>

              {/* Status Header Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#CDFC39] animate-ping"></span>
                <span className="text-xs font-black text-[#CDFC39] uppercase tracking-widest">
                  {restContext?.reason === "exercise_completed"
                    ? "Exercício Concluído! Descanso Automático"
                    : "Série Concluída! Descanso Automático"}
                </span>
              </div>

              {/* Circular SVG Countdown Timer */}
              <div className="relative w-56 h-56 flex items-center justify-center my-2">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    className="text-[#131a19]"
                    cx="112"
                    cy="112"
                    fill="transparent"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                  />
                  <circle
                    className="text-[#CDFC39] transition-all duration-300"
                    cx="112"
                    cy="112"
                    fill="transparent"
                    r={radius}
                    stroke="currentColor"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    strokeWidth={strokeWidth}
                  />
                </svg>

                <div className="flex flex-col items-center bg-[#131a19] rounded-full p-8 w-44 h-44 justify-center border border-[#253230] shadow-inner">
                  <span className="text-4xl font-mono font-black text-white tracking-tight">
                    {formatRestTime(timeLeft)}
                  </span>
                  <span className="text-[10px] text-[#CDFC39] font-bold uppercase tracking-wider mt-1">
                    Tempo Restante
                  </span>
                </div>
              </div>

              {/* Next Series Announcement Card */}
              <div className="w-full bg-[#131a19] border border-[#253230] rounded-2xl p-4 my-4 space-y-1.5 text-center">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block">
                  Próxima Série em {timeLeft}s
                </span>
                <h4 className="text-base font-black text-white leading-tight">
                  {upcomingExerciseName}
                </h4>
                <div className="flex justify-center items-center gap-2 text-xs">
                  <span className="text-[#CDFC39] font-bold bg-[#CDFC39]/10 px-2 py-0.5 rounded-md border border-[#CDFC39]/20">
                    Série {upcomingSetNumber}/{upcomingSetTotal}
                  </span>
                  <span className="text-gray-300 font-mono">
                    Meta: {upcomingLoad}kg x {upcomingReps}
                  </span>
                </div>
              </div>

              {/* Quick Rest Adjustments & Controls */}
              <div className="flex items-center gap-3 mb-4">
                <button
                  onClick={() => subtractTime(15)}
                  className="px-3 py-2 rounded-xl border border-[#253230] bg-[#131a19] hover:bg-[#1f2a29] text-xs font-bold text-gray-300 active:scale-95 transition-all"
                  title="Subtrair 15 segundos"
                >
                  -15s
                </button>

                <button
                  onClick={resetTimer}
                  className="w-10 h-10 rounded-xl border border-[#253230] bg-[#131a19] flex items-center justify-center hover:bg-[#1f2a29] active:scale-95 transition-all text-gray-300"
                  title="Reiniciar tempo deste descanso"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={toggleTimer}
                  className="w-12 h-12 rounded-xl bg-[#CDFC39] text-black flex items-center justify-center shadow-lg shadow-[#CDFC39]/20 active:scale-90 transition-all hover:bg-[#bbf224]"
                  title={isTimerRunning ? "Pausar descanso" : "Continuar descanso"}
                >
                  {isTimerRunning ? (
                    <Pause className="w-5 h-5 fill-black" />
                  ) : (
                    <Play className="w-5 h-5 fill-black ml-0.5" />
                  )}
                </button>

                <button
                  onClick={() => addTime(30)}
                  className="px-3 py-2 rounded-xl border border-[#253230] bg-[#131a19] hover:bg-[#1f2a29] text-xs font-bold text-gray-300 active:scale-95 transition-all"
                  title="Adicionar 30 segundos"
                >
                  +30s
                </button>
              </div>

              {/* Preset Chips (45s, 60s, 90s, 120s) */}
              <div className="flex items-center gap-1.5 mb-4 flex-wrap justify-center">
                {[45, 60, 90, 120].map((sec) => (
                  <button
                    key={sec}
                    onClick={() => setCustomRestDuration(sec)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold transition-all ${
                      totalRestTime === sec
                        ? "bg-[#CDFC39]/20 text-[#CDFC39] border border-[#CDFC39]/40"
                        : "bg-[#131a19] text-gray-400 border border-[#253230] hover:text-white"
                    }`}
                  >
                    {sec}s
                  </button>
                ))}
              </div>

              {/* Sensation / Difficulty note input while resting */}
              <div className="w-full bg-[#131a19] border border-[#253230] rounded-2xl p-3.5 space-y-2 text-left mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#CDFC39]" />
                    <span>Sensações do Exercício ({currentExercise.name})</span>
                  </span>
                  {currentNote && (
                    <span className="text-[10px] text-[#CDFC39] font-semibold bg-[#CDFC39]/10 border border-[#CDFC39]/30 px-1.5 py-0.5 rounded flex items-center gap-1">
                      <Check className="w-2.5 h-2.5" /> Salva no log
                    </span>
                  )}
                </div>
                <textarea
                  rows={2}
                  value={currentNote}
                  onChange={(e) => handleUpdateNote(currentExercise.id, e.target.value)}
                  placeholder="Como foi a última série? (ex: bom pump, falha na 8ª rep, dor articular...)"
                  className="w-full bg-[#182020] border border-[#253230] rounded-xl p-2.5 text-xs text-white placeholder:text-gray-500 focus:border-[#CDFC39] focus:outline-none resize-none transition-colors"
                />
                <div className="flex items-center gap-1.5 flex-wrap">
                  {["🔥 Bom pump", "⚡ Falha", "🟢 Carga leve", "⚠️ Desconforto", "🎯 Boa cadência"].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleAppendTagToNote(currentExercise.id, tag)}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#182020] hover:bg-[#253230] text-gray-300 border border-[#253230] active:scale-95 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Skip Rest and Start Next Set Immediately CTA */}
              <button
                onClick={skipRest}
                className="w-full py-3.5 bg-[#CDFC39] hover:bg-[#bbf224] text-black font-black text-sm uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#CDFC39]/20 active:scale-95 transition-all"
                id="btn-skip-rest"
              >
                <FastForward className="w-4 h-4 fill-black" />
                <span>Pular Descanso & Iniciar Série {upcomingSetNumber}</span>
              </button>
            </div>
          ) : (
            /* ================= ACTIVE EXERCISE SET ENTRY VIEW (High-accessibility) ================= */
            <div className="bg-[#182020] border-2 border-[#CDFC39]/50 rounded-3xl p-5 sm:p-6 w-full max-w-md flex flex-col gap-4 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 bg-[#CDFC39] w-full"></div>

              <div className="flex justify-between items-center pb-1 border-b border-[#253230]">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#CDFC39] text-black font-black text-sm flex items-center justify-center font-display">
                    {currentSetIndex + 1}
                  </span>
                  <span className="text-sm font-black text-white uppercase tracking-wider">
                    Série {currentSetIndex + 1} de {totalSets}
                  </span>
                </div>
                <div className="text-xs text-gray-300 bg-[#131a19] border border-[#253230] px-3 py-1 rounded-lg">
                  <span className="text-[#CDFC39] font-bold">Meta: </span>
                  <span className="font-bold">{currentExercise.targetLoad}kg x {currentExercise.reps}</span>
                </div>
              </div>

              {/* Load input (56px touch buttons) */}
              <div className="flex justify-between items-center bg-[#131a19] p-3.5 sm:p-4 rounded-2xl border border-[#253230]">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Peso / Carga</span>
                  <span className="text-3xl font-mono font-black text-white mt-0.5">
                    {setLoad} <span className="text-base font-sans font-bold text-[#CDFC39]">kg</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSetLoad((prev) => Math.max(0, prev - 2))}
                    className="w-14 h-14 bg-[#1f2a29] border border-[#253230] hover:bg-[#CDFC39] hover:text-black rounded-2xl flex items-center justify-center font-black text-3xl text-white transition-all active:scale-90 shadow-sm"
                    aria-label="Diminuir carga"
                  >
                    -
                  </button>
                  <button
                    onClick={() => setSetLoad((prev) => prev + 2)}
                    className="w-14 h-14 bg-[#1f2a29] border border-[#253230] hover:bg-[#CDFC39] hover:text-black rounded-2xl flex items-center justify-center font-black text-3xl text-white transition-all active:scale-90 shadow-sm"
                    aria-label="Aumentar carga"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Reps input (56px touch buttons) */}
              <div className="flex justify-between items-center bg-[#131a19] p-3.5 sm:p-4 rounded-2xl border border-[#253230]">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Repetições</span>
                  <span className="text-3xl font-mono font-black text-white mt-0.5">
                    {setReps} <span className="text-base font-sans font-bold text-gray-400">reps</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSetReps((prev) => Math.max(1, prev - 1))}
                    className="w-14 h-14 bg-[#1f2a29] border border-[#253230] hover:bg-[#CDFC39] hover:text-black rounded-2xl flex items-center justify-center font-black text-3xl text-white transition-all active:scale-90 shadow-sm"
                    aria-label="Diminuir repetições"
                  >
                    -
                  </button>
                  <button
                    onClick={() => setSetReps((prev) => prev + 1)}
                    className="w-14 h-14 bg-[#1f2a29] border border-[#253230] hover:bg-[#CDFC39] hover:text-black rounded-2xl flex items-center justify-center font-black text-3xl text-white transition-all active:scale-90 shadow-sm"
                    aria-label="Aumentar repetições"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* BIG CONCLUIR SÉRIE PRIMARY CTA */}
              <button
                onClick={handleConcluirSet}
                className="w-full min-h-[3.75rem] bg-[#CDFC39] hover:bg-[#bbf224] text-black font-black text-base uppercase tracking-wider rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-[#CDFC39]/25 active:scale-98 transition-all"
                id="btn-complete-set"
              >
                <Check className="w-6 h-6 stroke-[3]" />
                <span>CONCLUIR SÉRIE {currentSetIndex + 1} DE {totalSets}</span>
              </button>

              {/* Collapsible optional notes */}
              <div className="pt-0.5">
                <button
                  type="button"
                  onClick={() => setShowNotesInput(!showNotesInput)}
                  className="w-full text-xs text-gray-400 hover:text-white flex items-center justify-center gap-1.5 py-1 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-[#CDFC39]" />
                  <span>{showNotesInput ? "Ocultar anotação" : "Adicionar anotação da série (opcional)"}</span>
                </button>

                {showNotesInput && (
                  <div className="bg-[#131a19] p-3 rounded-2xl border border-[#253230] space-y-2 mt-2">
                    <textarea
                      id={`notes-input-${currentExercise.id}`}
                      rows={2}
                      value={currentNote}
                      onChange={(e) => handleUpdateNote(currentExercise.id, e.target.value)}
                      placeholder="Anote sensações, esforço ou ajustes..."
                      className="w-full bg-[#182020] border border-[#253230] rounded-xl p-2.5 text-xs text-white placeholder:text-gray-500 focus:border-[#CDFC39] focus:outline-none resize-none transition-colors"
                    />
                  </div>
                )}
              </div>

              {/* Direct "Complete Exercise" option */}
              <button
                onClick={() => handleCompleteEntireExercise(currentExerciseIndex)}
                className="w-full text-xs text-gray-400 hover:text-white py-1 flex items-center justify-center gap-1.5 transition-colors"
                title="Pular direto para o próximo exercício marcando todas as séries como feitas"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#CDFC39]" />
                <span>Marcar restante deste exercício como concluído</span>
              </button>
            </div>
          )}
        </section>

        {/* Set completion log list */}
        <section className="space-y-3">
          <div className="flex justify-between items-end mb-2">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Dumbbell className="w-4 h-4 text-[#CDFC39]" /> Progresso das Séries
            </h2>
            <span className="text-xs text-gray-400">
              Total: {totalSets} séries
            </span>
          </div>

          <div className="space-y-2.5">
            {isResting && (
              <div className="p-4 rounded-2xl bg-[#182020]/60 border border-dashed border-[#CDFC39]/30 text-center text-xs text-gray-300 flex items-center justify-center gap-2 py-5 shadow-sm">
                <Timer className="w-4 h-4 text-[#CDFC39] animate-pulse" />
                <span>
                  Descanso automático ativo! Restam <strong>{formatRestTime(timeLeft)}</strong> para a <strong>Série {upcomingSetNumber}</strong>.
                </span>
              </div>
            )}

            {/* Previously completed sets in this session */}
            {Array.from({ length: currentSetIndex }).map((_, i) => (
              <div
                key={`completed-set-${i}`}
                className="p-3.5 rounded-xl bg-[#182020]/70 border border-[#253230] flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#CDFC39]/15 text-[#CDFC39] flex items-center justify-center font-bold text-xs border border-[#CDFC39]/30">
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Série {i + 1} Concluída</p>
                    <p className="text-[11px] text-gray-400 font-mono">Registrado com sucesso</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#CDFC39]">Feito</span>
              </div>
            ))}

            {/* Upcoming items previews */}
            {Array.from({ length: totalSets }).map((_, i) => {
              if (i <= currentSetIndex) return null; // already handled or current

              return (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-[#182020]/40 border border-[#253230] flex items-center justify-between opacity-60"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#131a19] flex items-center justify-center text-gray-400 font-bold font-mono text-xs border border-[#253230]">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-300">
                        Série {i + 1}
                      </p>
                      <p className="text-[11px] text-gray-400 font-mono">
                        Meta: {currentExercise.targetLoad} kg • {currentExercise.reps} reps
                      </p>
                    </div>
                  </div>
                  <Lock className="w-3.5 h-3.5 text-gray-400" />
                </div>
              );
            })}
          </div>
        </section>

        {/* Exercises list summary with direct completion buttons */}
        <section className="bg-[#182020] border border-[#253230] rounded-2xl p-4 shadow-lg space-y-3">
          <div className="flex justify-between items-center">
            <h3 className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-1.5">
              <Dumbbell className="w-3.5 h-3.5 text-[#CDFC39]" /> Lista de Exercícios da Ficha
            </h3>
            <span className="text-[10px] text-gray-400">
              {routine.exercises.length} movimentos
            </span>
          </div>

          <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
            {routine.exercises.map((ex, idx) => {
              const isCurrent = idx === currentExerciseIndex;
              const completedSets = completedSetsByExercise[ex.id] || 0;
              const isFinished = completedSets >= ex.series;
              const noteForThisEx = exerciseNotes[ex.id];
              const isEditingThisNote = editingNoteExerciseId === ex.id;

              return (
                <div
                  key={ex.id}
                  className={`w-full flex flex-col p-3 rounded-xl text-xs transition-all border gap-2 ${
                    isCurrent
                      ? "bg-[#CDFC39]/15 border-[#CDFC39]/40 text-white font-bold"
                      : isFinished
                      ? "bg-[#131a19]/40 border-[#253230] text-gray-400"
                      : "bg-[#131a19] border-[#253230] hover:border-[#CDFC39]/30 text-gray-300"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <button
                      onClick={() => selectExerciseManually(idx)}
                      className="flex items-center gap-2.5 flex-1 text-left min-w-0"
                    >
                      <div
                        className={`w-6 h-6 rounded-lg flex items-center justify-center font-mono font-black text-[11px] shrink-0 ${
                          isCurrent
                            ? "bg-[#CDFC39]/25 text-[#CDFC39]"
                            : isFinished
                            ? "bg-[#CDFC39]/20 text-[#CDFC39]"
                            : "bg-[#1f2a29] text-gray-400"
                        }`}
                      >
                        {isFinished ? "✓" : idx + 1}
                      </div>

                      <div className="min-w-0">
                        <span className={`block truncate ${isFinished ? "line-through opacity-60" : ""}`}>
                          {ex.name}
                        </span>
                        <span className="text-[10px] text-gray-400 block font-normal">
                          {completedSets}/{ex.series} séries • {ex.restDisplay || `${ex.restSeconds}s`} descanso
                        </span>
                      </div>
                    </button>

                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      {/* Note button */}
                      <button
                        type="button"
                        onClick={() => setEditingNoteExerciseId(isEditingThisNote ? null : ex.id)}
                        className={`p-1.5 rounded-lg border transition-all ${
                          noteForThisEx
                            ? "bg-[#CDFC39]/20 border-[#CDFC39]/40 text-[#CDFC39]"
                            : "bg-[#1f2a29] border-[#253230] text-gray-400 hover:text-white"
                        }`}
                        title={noteForThisEx ? "Ver ou editar nota" : "Anotar sensações/dificuldade"}
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>

                      {isFinished ? (
                        <span className="px-2 py-0.5 rounded bg-[#CDFC39]/15 text-[#CDFC39] font-sans font-black uppercase text-[9px] border border-[#CDFC39]/30">
                          Concluído
                        </span>
                      ) : (
                        <button
                          onClick={() => handleCompleteEntireExercise(idx)}
                          className="px-2 py-1 rounded bg-[#1f2a29] hover:bg-[#CDFC39] text-gray-300 hover:text-black font-bold text-[10px] transition-all flex items-center gap-1 border border-[#253230] active:scale-95"
                          title="Concluir exercício e iniciar descanso automático"
                        >
                          <Check className="w-3 h-3" /> Concluir
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Note preview badge if filled and not in edit mode */}
                  {noteForThisEx && !isEditingThisNote && (
                    <div
                      onClick={() => setEditingNoteExerciseId(ex.id)}
                      className="cursor-pointer text-[11px] text-gray-300 bg-[#182020] border border-[#253230] hover:border-[#CDFC39]/30 rounded-lg px-2.5 py-1 flex items-center gap-1.5 transition-colors"
                    >
                      <FileText className="w-3 h-3 text-[#CDFC39] shrink-0" />
                      <span className="truncate italic text-gray-300">&ldquo;{noteForThisEx}&rdquo;</span>
                    </div>
                  )}

                  {/* Inline Note Editor */}
                  {isEditingThisNote && (
                    <div className="bg-[#182020] border border-[#CDFC39]/30 rounded-xl p-2.5 space-y-2 animate-fade-in mt-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase text-gray-400 flex items-center gap-1">
                          <FileText className="w-3 h-3 text-[#CDFC39]" />
                          <span>Sensações & Dificuldades</span>
                        </span>
                        <button
                          type="button"
                          onClick={() => setEditingNoteExerciseId(null)}
                          className="text-[10px] text-gray-400 hover:text-white px-2 py-0.5 bg-[#131a19] rounded-md border border-[#253230]"
                        >
                          Concluir
                        </button>
                      </div>
                      <textarea
                        rows={2}
                        value={noteForThisEx || ""}
                        onChange={(e) => handleUpdateNote(ex.id, e.target.value)}
                        placeholder="Ex: Falha concêntrica, ombro estalou, carga leve..."
                        className="w-full bg-[#131a19] border border-[#253230] rounded-lg p-2 text-xs text-white placeholder:text-gray-500 focus:border-[#CDFC39] focus:outline-none resize-none font-normal"
                      />
                      <div className="flex items-center gap-1 flex-wrap">
                        {["🔥 Bom pump", "⚡ Falha", "🟢 Carga leve", "⚠️ Desconforto"].map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            onClick={() => handleAppendTagToNote(ex.id, tag)}
                            className="text-[9px] px-1.5 py-0.5 rounded bg-[#131a19] hover:bg-[#253230] text-gray-300 border border-[#253230] active:scale-95 transition-colors"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Bottom padding */}
        <div className="h-10" />
      </main>

      {/* Floating Sticky Rest Banner if user is resting and scrolling */}
      {isResting && (
        <div className="fixed bottom-3 left-0 w-full px-4 flex justify-center z-40 animate-slide-up pointer-events-none">
          <div className="pointer-events-auto bg-[#182020] border border-[#CDFC39]/50 shadow-2xl rounded-2xl px-4 py-3 flex items-center justify-between gap-4 max-w-md w-full backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#CDFC39]/15 flex items-center justify-center border border-[#CDFC39]/30">
                <Timer className="w-4 h-4 text-[#CDFC39] animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-black text-white font-mono block">
                  Descanso: {formatRestTime(timeLeft)}
                </span>
                <span className="text-[10px] text-gray-400 block truncate max-w-[170px] sm:max-w-xs">
                  Próxima: Série {upcomingSetNumber} de {upcomingExerciseName}
                </span>
              </div>
            </div>

            <button
              onClick={skipRest}
              className="bg-[#CDFC39] hover:bg-[#bbf224] text-black px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all active:scale-95 shadow-md flex items-center gap-1 shrink-0"
            >
              <FastForward className="w-3 h-3 fill-black" />
              <span>Iniciar</span>
            </button>
          </div>
        </div>
      )}

      {/* Custom Confirmation Modal for Canceling Workout */}
      {quitConfirmType !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-5 z-50 animate-fade-in pointer-events-auto">
          <div className="bg-[#182020] border border-[#253230] rounded-3xl p-6 w-full max-w-sm space-y-6 shadow-2xl text-center">
            <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <X className="w-8 h-8 stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-white uppercase tracking-tight">Cancelar Treino?</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {quitConfirmType === "prev"
                  ? "Deseja voltar para a página anterior? Seu progresso nesta sessão de treino será cancelado."
                  : quitConfirmType === "home"
                  ? "Deseja voltar para a página inicial? Seu progresso nesta sessão de treino será cancelado."
                  : "Deseja sair do treino? Seu progresso nesta sessão será cancelado."}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setQuitConfirmType(null)}
                className="flex-1 bg-[#1f2a29] hover:bg-[#253230] text-gray-300 hover:text-white py-3 rounded-xl text-xs font-bold transition-all border border-[#253230] active:scale-95"
              >
                Voltar ao Treino
              </button>
              <button
                onClick={handleConfirmCancel}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl text-xs font-bold transition-all active:scale-95 shadow-lg shadow-red-600/10"
              >
                Sim, Sair
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Finish Confirmation Modal */}
      {showFinishConfirm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-5 z-50 animate-fade-in pointer-events-auto">
          <div className="bg-[#182020] border border-[#253230] rounded-3xl p-6 w-full max-w-sm space-y-6 shadow-2xl text-center">
            <div className="w-16 h-16 bg-[#CDFC39]/15 text-[#CDFC39] rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-white uppercase tracking-tight">Finalizar Treino?</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Deseja salvar e concluir este treino agora? O tempo de treino ({formatWorkoutTime(workoutSeconds)}) e os sets concluídos serão salvos no seu progresso.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowFinishConfirm(false)}
                className="flex-1 bg-[#1f2a29] hover:bg-[#253230] text-gray-300 hover:text-white py-3 rounded-xl text-xs font-bold transition-all border border-[#253230] active:scale-95"
              >
                Continuar Treino
              </button>
              <button
                onClick={handleConfirmFinish}
                id="btn-confirm-finish-workout"
                className="flex-1 bg-[#CDFC39] hover:bg-[#bbf224] text-black py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all active:scale-95 shadow-lg shadow-[#CDFC39]/25"
              >
                Sim, Concluir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Exercise Detail / Guide Modal */}
      {showGuideModal && (
        <ExerciseDetailModal
          exercise={currentExercise}
          onClose={() => setShowGuideModal(false)}
        />
      )}
    </div>
  );
}
