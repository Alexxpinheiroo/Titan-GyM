/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Flame, Timer, Dumbbell, Play, ChevronRight, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { DailyMetrics, UserProfile, WorkoutRoutine } from "../types";
import { titanTips } from "../data/defaultData";

interface DashboardTabProps {
  metrics: DailyMetrics;
  profile: UserProfile;
  todayRoutine?: WorkoutRoutine;
  onStartTodayWorkout?: () => void;
  onGoToWorkouts?: () => void;
  onSelectFocus?: (focusName: string) => void;
  onQuickStart: () => void;
}

export default function DashboardTab({
  metrics,
  profile,
  todayRoutine,
  onStartTodayWorkout,
  onGoToWorkouts,
  onSelectFocus,
  onQuickStart,
}: DashboardTabProps) {
  const [tipIndex, setTipIndex] = useState(0);

  // Rotate tips on tap
  const handleNextTip = () => {
    setTipIndex((prev) => (prev + 1) % titanTips.length);
  };

  // Convert active minutes to friendly hours/minutes
  const formatActiveTime = (minutes: number) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hrs === 0) return `${mins} min`;
    return `${hrs}h ${mins}m`;
  };

  const handleStart = () => {
    if (onStartTodayWorkout) {
      onStartTodayWorkout();
    } else {
      onQuickStart();
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 sm:px-6 pt-5 pb-28 space-y-6 animate-fade-in font-sans">
      {/* 1. Header & Greeting (Large, readable, welcoming) */}
      <section className="flex justify-between items-center bg-[#182020] border border-[#253230] p-4 sm:p-5 rounded-2xl shadow-sm">
        <div>
          <span className="text-xs uppercase tracking-wider font-bold text-gray-400">
            Bem-vindo de volta
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight font-display mt-0.5">
            Olá, {profile.name}! 👋
          </h1>
        </div>

        {/* Streak Counter with high contrast */}
        <div className="flex items-center gap-2 bg-[#CDFC39]/15 border border-[#CDFC39]/40 px-3.5 py-2 rounded-xl text-[#CDFC39]">
          <Flame className="w-5 h-5 fill-[#CDFC39]" />
          <div className="flex flex-col text-left">
            <span className="text-xs font-black leading-none">{profile.streakDays} Dias</span>
            <span className="text-[10px] text-gray-300 uppercase tracking-tight">Seguidos</span>
          </div>
        </div>
      </section>

      {/* 2. HERO CARD: O TREINO DE HOJE (Ação Principal em 1 Toque) */}
      <section className="bg-gradient-to-br from-[#1c2725] to-[#141b1a] border-2 border-[#CDFC39] rounded-3xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        {/* Glow corner */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#CDFC39]/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="flex items-center justify-between mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CDFC39] text-black text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 fill-black" />
            <span>Treino Recomendado Hoje</span>
          </span>

          {todayRoutine?.durationMinutes && (
            <span className="text-xs text-gray-300 font-semibold flex items-center gap-1 bg-[#111616]/60 px-2.5 py-1 rounded-lg border border-white/5">
              <Timer className="w-3.5 h-3.5 text-[#CDFC39]" />
              <span>~{todayRoutine.durationMinutes} min</span>
            </span>
          )}
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-white font-display tracking-tight leading-tight mb-2">
          {todayRoutine?.name || "Treino do Dia"}
        </h2>

        <p className="text-sm text-gray-300 mb-4 leading-relaxed">
          {todayRoutine?.focus || "Fortalecimento muscular e evolução constante de carga."}
        </p>

        {/* Exercises preview pills */}
        {todayRoutine?.exercises && todayRoutine.exercises.length > 0 && (
          <div className="mb-5 bg-[#111616]/70 border border-[#253230] rounded-xl p-3">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2">
              Exercícios inclusos ({todayRoutine.exercises.length}):
            </span>
            <div className="flex flex-wrap gap-1.5">
              {todayRoutine.exercises.slice(0, 4).map((ex, i) => (
                <span
                  key={ex.id || i}
                  className="text-xs font-medium bg-[#182020] text-gray-200 border border-[#253230] px-2.5 py-1 rounded-lg"
                >
                  {ex.name}
                </span>
              ))}
              {todayRoutine.exercises.length > 4 && (
                <span className="text-xs font-bold text-[#CDFC39] bg-[#CDFC39]/10 px-2 py-1 rounded-lg">
                  +{todayRoutine.exercises.length - 4} outros
                </span>
              )}
            </div>
          </div>
        )}

        {/* MAIN BIG BUTTON (56px touch height, accessible for all users) */}
        <button
          onClick={handleStart}
          className="w-full min-h-[3.5rem] bg-[#CDFC39] hover:bg-[#bbf224] text-black font-black text-base sm:text-lg uppercase tracking-wider rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-[#CDFC39]/25 active:scale-98 transition-all"
          id="btn-start-today-workout"
        >
          <Play className="w-6 h-6 fill-black" />
          <span>INICIAR TREINO AGORA</span>
        </button>

        {/* Choose another routine shortcut */}
        {onGoToWorkouts && (
          <button
            onClick={onGoToWorkouts}
            className="w-full mt-3 text-xs sm:text-sm font-bold text-gray-300 hover:text-white flex items-center justify-center gap-1.5 py-1.5 transition-colors"
          >
            <span>Prefere outro treino? Escolher na lista</span>
            <ArrowRight className="w-4 h-4 text-[#CDFC39]" />
          </button>
        )}
      </section>

      {/* 3. SIMPLIFIED STATS (High contrast, easy metrics without confusing math) */}
      <section className="space-y-3">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider px-1">
          Sua Atividade Recente
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {/* Active time card */}
          <div className="bg-[#182020] border border-[#253230] p-4 rounded-2xl flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-[#CDFC39]/15 flex items-center justify-center text-[#CDFC39] mb-3">
              <Timer className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase">Tempo Ativo</p>
              <p className="text-xl sm:text-2xl font-black text-white mt-0.5">
                {formatActiveTime(metrics.activeMinutes)}
              </p>
            </div>
          </div>

          {/* Calories burned */}
          <div className="bg-[#182020] border border-[#253230] p-4 rounded-2xl flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center text-orange-400 mb-3">
              <Flame className="w-5 h-5 fill-orange-400" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase">Calorias</p>
              <p className="text-xl sm:text-2xl font-black text-white mt-0.5">
                {metrics.calories.toLocaleString()}{" "}
                <span className="text-xs font-normal text-gray-400">kcal</span>
              </p>
            </div>
          </div>

          {/* Accumulated weight volume */}
          <div className="bg-[#182020] border border-[#253230] p-4 rounded-2xl col-span-2 sm:col-span-1 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-[#CDFC39]/15 flex items-center justify-center text-[#CDFC39] mb-3">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase">Peso Levantado</p>
              <p className="text-xl sm:text-2xl font-black text-white mt-0.5">
                {metrics.totalVolumeTons.toFixed(1)}{" "}
                <span className="text-xs font-normal text-gray-400">ton</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAST SHORTCUT: VIEW ROUTINES (Large clickable card) */}
      <section>
        <div
          onClick={onGoToWorkouts || onQuickStart}
          className="bg-[#182020] hover:bg-[#1f2b29] border border-[#253230] hover:border-[#CDFC39]/50 p-4 sm:p-5 rounded-2xl flex items-center justify-between cursor-pointer transition-all active:scale-98 shadow-sm group"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#CDFC39]/15 text-[#CDFC39] flex items-center justify-center shrink-0">
              <Dumbbell className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white group-hover:text-[#CDFC39] transition-colors">
                Todas as Fichas de Treino
              </h4>
              <p className="text-xs text-gray-400">
                Acesse Treino A, B, C, D e veja a lista de exercícios
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#CDFC39] transition-colors" />
        </div>
      </section>

      {/* 5. TITAN TIP (Readable and friendly) */}
      <section>
        <div
          onClick={handleNextTip}
          className="bg-[#182020] border border-[#253230] p-4 sm:p-5 rounded-2xl flex flex-col justify-between cursor-pointer hover:border-[#CDFC39]/30 transition-all shadow-sm"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#CDFC39] flex items-center gap-1.5 uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" /> Dica de Treino
            </span>
            <span className="text-[11px] text-gray-400 hover:text-white">Toque para trocar</span>
          </div>
          <p className="text-sm text-gray-300 italic leading-relaxed">
            "{titanTips[tipIndex]}"
          </p>
        </div>
      </section>
    </div>
  );
}
