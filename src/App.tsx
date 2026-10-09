/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import BottomNavBar from "./components/BottomNavBar";
import DashboardTab from "./components/DashboardTab";
import WorkoutsTab from "./components/WorkoutsTab";
import ProgressTab from "./components/ProgressTab";
import ProfileTab from "./components/ProfileTab";
import PlansTab from "./components/PlansTab";
import ActiveWorkoutScreen from "./components/ActiveWorkoutScreen";
import CelebrationOverlay from "./components/CelebrationOverlay";
import OnboardingFlow from "./components/onboarding/OnboardingFlow";
import { useTheme } from "./hooks/useTheme";

import {
  defaultProfile,
  defaultMetrics,
  defaultRoutines,
  defaultStrategies,
  defaultLogs,
} from "./data/defaultData";
import { UserProfile, DailyMetrics, WorkoutRoutine, WorkoutStrategy, LoadLog, OnboardingData } from "./types";

export default function App() {
  // Color scheme & theme preference hook (prefers-color-scheme + manual toggle)
  const { theme, resolvedTheme, systemTheme, setTheme, toggleTheme } = useTheme();

  // First-time onboarding status
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState<boolean>(() => {
    return localStorage.getItem("titan_onboarding_completed") === "true";
  });

  // Tab route state
  const [activeTab, setActiveTab] = useState<string>(() => {
    return localStorage.getItem("titan_active_tab") || "home";
  });

  // Global persistent data state
  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem("titan_profile");
    return saved ? JSON.parse(saved) : defaultProfile;
  });

  const [metrics, setMetrics] = useState<DailyMetrics>(() => {
    const saved = localStorage.getItem("titan_metrics");
    return saved ? JSON.parse(saved) : defaultMetrics;
  });

  const [routines, setRoutines] = useState<WorkoutRoutine[]>(() => {
    const saved = localStorage.getItem("titan_routines_v4");
    return saved ? JSON.parse(saved) : defaultRoutines;
  });

  const [strategies, setStrategies] = useState<WorkoutStrategy[]>(() => {
    const saved = localStorage.getItem("titan_strategies_v4");
    return saved ? JSON.parse(saved) : defaultStrategies;
  });

  const [logs, setLogs] = useState<LoadLog[]>(() => {
    const saved = localStorage.getItem("titan_logs_v4");
    return saved ? JSON.parse(saved) : defaultLogs;
  });

  // Active state controls
  const [activeWorkout, setActiveWorkout] = useState<WorkoutRoutine | null>(() => {
    const saved = localStorage.getItem("titan_active_workout");
    return saved ? JSON.parse(saved) : null;
  });

  const [focusFilter, setFocusFilter] = useState<string>("");

  const [currentPlan, setCurrentPlan] = useState<"free" | "pro">(() => {
    return (localStorage.getItem("titan_plan") as "free" | "pro") || "free";
  });

  // Milestone Celebration Overlay states
  const [celebration, setCelebration] = useState<{
    visible: boolean;
    type: "workout" | "milestone";
    message: string;
    subMessage: string;
  }>({
    visible: false,
    type: "milestone",
    message: "",
    subMessage: "",
  });

  // Save states to local storage on modifications
  useEffect(() => {
    localStorage.setItem("titan_active_tab", activeTab);
  }, [activeTab]);

  useEffect(() => {
    localStorage.setItem("titan_profile", JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem("titan_metrics", JSON.stringify(metrics));
  }, [metrics]);

  useEffect(() => {
    localStorage.setItem("titan_routines_v4", JSON.stringify(routines));
  }, [routines]);

  useEffect(() => {
    localStorage.setItem("titan_strategies_v4", JSON.stringify(strategies));
  }, [strategies]);

  useEffect(() => {
    localStorage.setItem("titan_logs_v4", JSON.stringify(logs));
  }, [logs]);

  useEffect(() => {
    if (activeWorkout) {
      localStorage.setItem("titan_active_workout", JSON.stringify(activeWorkout));
    } else {
      localStorage.removeItem("titan_active_workout");
    }
  }, [activeWorkout]);

  useEffect(() => {
    localStorage.setItem("titan_plan", currentPlan);
  }, [currentPlan]);

  // Core resets
  const handleResetData = () => {
    setProfile(defaultProfile);
    setMetrics(defaultMetrics);
    setRoutines(defaultRoutines);
    setStrategies(defaultStrategies);
    setLogs(defaultLogs);
    setActiveWorkout(null);
    setFocusFilter("");
    setCurrentPlan("free");
    setActiveTab("home");
    setHasCompletedOnboarding(false);
    localStorage.clear();
  };

  // Onboarding completion handlers
  const handleFinishOnboarding = (data: OnboardingData, chosenPlan: "pro" | "free") => {
    localStorage.setItem("titan_onboarding_completed", "true");
    localStorage.setItem("titan_onboarding_data", JSON.stringify(data));
    setHasCompletedOnboarding(true);
    setCurrentPlan(chosenPlan);

    // Update user profile with onboarding responses
    setProfile((prev) => ({
      ...prev,
      onboarding: data,
    }));

    // Welcome celebration
    setCelebration({
      visible: true,
      type: "milestone",
      message: "PLANO TITAN CRIADO! 🚀",
      subMessage: `Parabéns! Seu plano de ${data.frequencyDays} dias/semana está pronto para você evoluir.`,
    });
  };

  const handleSkipOnboarding = () => {
    localStorage.setItem("titan_onboarding_completed", "true");
    setHasCompletedOnboarding(true);
  };

  const handleReplayOnboarding = () => {
    setHasCompletedOnboarding(false);
  };

  // Focus filter navigation helper
  const handleSelectFocus = (focusName: string) => {
    setFocusFilter(focusName);
    setActiveTab("workouts");
  };

  const handleClearFocusFilter = () => {
    setFocusFilter("");
  };

  const handleQuickStart = () => {
    // Starts the first workout routine directly
    setActiveWorkout(routines[0]);
  };

  // Workout strategies and records logging
  const handleLogLoad = (exerciseId: string, loadKg: number, reps: number, notes?: string) => {
    const sessionNum = logs.filter(l => l.exerciseId === exerciseId).length + 17;
    const newLog: LoadLog = {
      id: `log-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      exerciseId,
      dateStr: "Hoje",
      sessionNum,
      loadKg,
      reps,
      notes: notes && notes.trim().length > 0 ? notes.trim() : undefined,
    };
    setLogs((prev) => [...prev, newLog]);
  };

  // Update load targets inside routine editor
  const handleUpdateExerciseLoads = (
    routineId: string,
    exerciseId: string,
    current: string,
    target: string
  ) => {
    setRoutines((prevRoutines) =>
      prevRoutines.map((routine) => {
        if (routine.id === routineId) {
          return {
            ...routine,
            exercises: routine.exercises.map((exercise) => {
              if (exercise.id === exerciseId) {
                return {
                  ...exercise,
                  currentLoad: current,
                  targetLoad: target,
                };
              }
              return exercise;
            }),
          };
        }
        return routine;
      })
    );
  };

  // Personal record achieved event
  const handleBeatMilestone = (exerciseName: string, loadKg: number) => {
    setCelebration({
      visible: true,
      type: "milestone",
      message: "META BATIDA! 🏆",
      subMessage: `Novo recorde no ${exerciseName}: ${loadKg}kg!`,
    });
  };

  // Workout completed successfully event
  const handleFinishWorkout = (totalActiveMinutes: number, totalVolumeTons: number) => {
    // Close active training UI
    setActiveWorkout(null);

    // Update global performance aggregates
    setMetrics((prev) => ({
      calories: prev.calories + 380, // Burned calories
      activeMinutes: prev.activeMinutes + totalActiveMinutes,
      totalVolumeTons: parseFloat((prev.totalVolumeTons + totalVolumeTons).toFixed(1)),
      weeklyScorePercent: prev.weeklyScorePercent + 2,
    }));

    // Increment streak days
    setProfile((prev) => ({
      ...prev,
      streakDays: prev.streakDays + 1,
    }));

    // Trigger celebration splash screen
    setCelebration({
      visible: true,
      type: "workout",
      message: "TREINO CONCLUÍDO! 🔥",
      subMessage: `Sensacional! +${totalActiveMinutes} min ativos e ${totalVolumeTons} toneladas levantadas!`,
    });
  };

  // Manual load progress inputs
  const handleAddLogManually = (exerciseId: string, loadKg: number, reps: number) => {
    handleLogLoad(exerciseId, loadKg, reps);

    // Prompt record congratulations
    setCelebration({
      visible: true,
      type: "milestone",
      message: "REGISTRO SALVO! 💪",
      subMessage: `Nova marca de ${loadKg}kg x ${reps} repetições adicionada.`,
    });
  };

  const handleUpdateName = (newName: string) => {
    setProfile((prev) => ({
      ...prev,
      name: newName,
    }));
  };

  const handleSelectPlan = (plan: "free" | "pro") => {
    setCurrentPlan(plan);
    if (plan === "pro") {
      setCelebration({
        visible: true,
        type: "milestone",
        message: "TITAN PRO ATIVADO! 🚀",
        subMessage: "Parabéns! Você acaba de desbloquear todo o poder do Titan PRO!",
      });
    } else {
      setCelebration({
        visible: true,
        type: "milestone",
        message: "PLANO GRATUITO",
        subMessage: "Você voltou para o plano Titan Free com anúncios.",
      });
    }
  };

  if (!hasCompletedOnboarding) {
    return (
      <OnboardingFlow
        onFinish={handleFinishOnboarding}
        onSkipToApp={handleSkipOnboarding}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#111616] text-[#e8f0ef] pb-24 flex flex-col antialiased selection:bg-[#CDFC39]/20 selection:text-white">
      {/* Default Header layout */}
      <Header 
        profile={profile} 
        onResetData={handleResetData} 
        onGoToHome={() => setActiveTab("home")}
        theme={theme}
        resolvedTheme={resolvedTheme}
        systemTheme={systemTheme}
        onSetTheme={setTheme}
        onToggleTheme={toggleTheme}
      />

      {/* Main tab routing controller */}
      <main className="flex-1 w-full relative">
        {activeTab === "home" && (
          <DashboardTab
            metrics={metrics}
            profile={profile}
            onSelectFocus={handleSelectFocus}
            onQuickStart={handleQuickStart}
          />
        )}
        {activeTab === "workouts" && (
          <WorkoutsTab
            strategies={strategies}
            routines={routines}
            onStartWorkout={setActiveWorkout}
            onUpdateExerciseLoads={handleUpdateExerciseLoads}
            activeFocusFilter={focusFilter}
            onClearFocusFilter={handleClearFocusFilter}
            onGoToHome={() => setActiveTab("home")}
          />
        )}
        {activeTab === "plans" && (
          <PlansTab
            currentPlan={currentPlan}
            onSelectPlan={handleSelectPlan}
          />
        )}
        {activeTab === "progress" && (
          <ProgressTab
            logs={logs}
            routines={routines}
            onAddLog={handleAddLogManually}
          />
        )}
        {activeTab === "profile" && (
          <ProfileTab
            profile={profile}
            metrics={metrics}
            onUpdateName={handleUpdateName}
            currentPlan={currentPlan}
            onReplayOnboarding={handleReplayOnboarding}
            theme={theme}
            resolvedTheme={resolvedTheme}
            systemTheme={systemTheme}
            onSetTheme={setTheme}
          />
        )}
      </main>

      {/* Bottom responsive tabs */}
      <BottomNavBar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Active fullscreen training loop overlay */}
      {activeWorkout && (
        <ActiveWorkoutScreen
          routine={activeWorkout}
          onClose={() => setActiveWorkout(null)}
          onFinishWorkout={handleFinishWorkout}
          onLogLoad={handleLogLoad}
          onBeatMilestone={handleBeatMilestone}
          onGoToHome={() => setActiveTab("home")}
        />
      )}

      {/* Trophy / Confetti Splash overlays */}
      <CelebrationOverlay
        isVisible={celebration.visible}
        type={celebration.type}
        message={celebration.message}
        subMessage={celebration.subMessage}
        onClose={() => setCelebration((prev) => ({ ...prev, visible: false }))}
      />
    </div>
  );
}
