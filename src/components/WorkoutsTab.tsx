/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  Dumbbell,
  Clock,
  ArrowLeft,
  Home,
  Play,
  Check,
  Target,
  ChevronRight,
  Flame,
  ListFilter,
  Info
} from "lucide-react";
import { WorkoutRoutine, WorkoutStrategy, Exercise } from "../types";
import ExerciseDetailModal from "./ExerciseDetailModal";

interface WorkoutsTabProps {
  strategies: WorkoutStrategy[];
  routines: WorkoutRoutine[];
  onStartWorkout: (routine: WorkoutRoutine) => void;
  onUpdateExerciseLoads: (routineId: string, exerciseId: string, current: string, target: string) => void;
  activeFocusFilter: string;
  onClearFocusFilter: () => void;
  onGoToHome: () => void;
}

export default function WorkoutsTab({
  strategies,
  routines,
  onStartWorkout,
  onUpdateExerciseLoads,
  activeFocusFilter,
  onClearFocusFilter,
  onGoToHome,
}: WorkoutsTabProps) {
  const [selectedRoutine, setSelectedRoutine] = useState<WorkoutRoutine | null>(null);
  const [selectedDivisionFilter, setSelectedDivisionFilter] = useState<string>("all");
  const [selectedGuideExercise, setSelectedGuideExercise] = useState<Exercise | null>(null);

  // Pre-select if arrived via filter
  React.useEffect(() => {
    if (activeFocusFilter) {
      const match = routines.find((r) => r.focus.toLowerCase().includes(activeFocusFilter.toLowerCase())) || routines[0];
      if (match) {
        setSelectedRoutine(match);
      }
    }
  }, [activeFocusFilter, routines]);

  const handleBackToOverview = () => {
    setSelectedRoutine(null);
    onClearFocusFilter();
  };

  // Filter routines based on selected division
  const filteredRoutines = routines.filter((routine) => {
    if (selectedDivisionFilter === "all") return true;
    return routine.divisionId === selectedDivisionFilter;
  });

  // ==========================================
  // VIEW 1: DETALHE DA FICHA SELECIONADA
  // ==========================================
  if (selectedRoutine) {
    return (
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-5 pb-36 space-y-5 animate-fade-in font-sans">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between bg-[#182020] p-3 sm:p-4 rounded-2xl border border-[#253230]">
          <button
            onClick={handleBackToOverview}
            className="bg-[#131a19] hover:bg-[#253230] text-gray-200 hover:text-white flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 border border-[#253230]"
            id="btn-back-to-routines"
          >
            <ArrowLeft className="w-4 h-4 text-[#CDFC39]" />
            <span>Voltar para Fichas</span>
          </button>

          <span className="text-xs sm:text-sm font-bold text-[#CDFC39] bg-[#CDFC39]/15 border border-[#CDFC39]/30 px-3 py-1.5 rounded-xl">
            {selectedRoutine.exercises.length} Exercícios
          </span>
        </div>

        {/* Hero Card of the Selected Routine */}
        <section className="bg-gradient-to-br from-[#1c2725] to-[#141b1a] border border-[#253230] rounded-3xl p-5 sm:p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-2">
            {selectedRoutine.dayOfWeek && (
              <span className="px-2.5 py-1 bg-[#CDFC39] text-black font-black text-xs rounded-lg uppercase tracking-wide">
                {selectedRoutine.dayOfWeek}
              </span>
            )}
            {selectedRoutine.alias && (
              <span className="px-2.5 py-1 bg-[#131a19] border border-[#253230] text-gray-200 font-bold text-xs rounded-lg uppercase">
                {selectedRoutine.alias}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white font-display leading-tight mb-2">
            {selectedRoutine.name}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-300 mt-2">
            <span className="flex items-center gap-1.5">
              <Dumbbell className="w-4 h-4 text-[#CDFC39]" />
              <span>Foco: <strong>{selectedRoutine.focus}</strong></span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#CDFC39]" />
              <span>Duração: <strong>~{selectedRoutine.durationMinutes} min</strong></span>
            </span>
          </div>
        </section>

        {/* Top Start Button */}
        <button
          onClick={() => onStartWorkout(selectedRoutine)}
          className="w-full min-h-[3.5rem] bg-[#CDFC39] hover:bg-[#bbf224] text-black font-black text-base uppercase tracking-wider rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-[#CDFC39]/20 active:scale-98 transition-all"
          id="btn-start-routine-top"
        >
          <Play className="w-5 h-5 fill-black" />
          <span>INICIAR ESTE TREINO AGORA</span>
        </button>

        {/* Exercises List (Clear, readable and numbered) */}
        <section className="space-y-3">
          <div className="flex justify-between items-center px-1">
            <h2 className="text-sm font-bold text-gray-300 uppercase tracking-wider flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#CDFC39]" /> Exercícios Deste Treino
            </h2>
            <span className="text-xs text-gray-400">
              {selectedRoutine.exercises.length} no total
            </span>
          </div>

          <div className="space-y-3">
            {selectedRoutine.exercises.map((exercise, idx) => (
              <div
                key={exercise.id}
                className="bg-[#182020] border border-[#253230] hover:border-[#CDFC39]/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center transition-all shadow-sm"
              >
                {/* Index badge & exercise image */}
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <span className="w-7 h-7 rounded-full bg-[#131a19] border border-[#253230] text-gray-300 text-sm font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>

                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-[#253230] bg-[#111616]">
                    <img
                      className="w-full h-full object-cover"
                      alt={exercise.name}
                      src={exercise.imgUrl}
                    />
                  </div>

                  <div className="flex-1 sm:hidden">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] bg-[#CDFC39]/15 text-[#CDFC39] font-bold px-2 py-0.5 rounded uppercase">
                        {exercise.muscleGroup}
                      </span>
                      <button
                        onClick={() => setSelectedGuideExercise(exercise)}
                        className="px-2 py-0.5 rounded-lg bg-[#131a19] text-[#CDFC39] border border-[#253230] text-[10px] font-bold flex items-center gap-1 active:scale-95 transition-all"
                      >
                        <Info className="w-3 h-3" />
                        <span>Guia</span>
                      </button>
                    </div>
                    <h3 className="text-base font-bold text-white leading-tight mt-1">
                      {exercise.name}
                    </h3>
                  </div>
                </div>

                {/* Details and recommended loads */}
                <div className="flex-1 w-full space-y-3">
                  <div className="hidden sm:flex justify-between items-center">
                    <h3 className="text-base font-bold text-white leading-tight">
                      {exercise.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedGuideExercise(exercise)}
                        className="px-2.5 py-1 rounded-xl bg-[#131a19] hover:bg-[#1f2a29] text-[#CDFC39] border border-[#253230] hover:border-[#CDFC39]/40 text-xs font-bold flex items-center gap-1 active:scale-95 transition-all"
                        title="Ver vídeo demonstrativo e postura"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Guia & Postura</span>
                      </button>
                      <span className="text-xs bg-[#CDFC39]/15 text-[#CDFC39] font-bold px-2.5 py-0.5 rounded-full border border-[#CDFC39]/30 uppercase">
                        {exercise.muscleGroup}
                      </span>
                    </div>
                  </div>

                  {/* Sets, Reps, Rest Pills */}
                  <div className="grid grid-cols-3 gap-2 bg-[#131a19] p-3 rounded-xl border border-[#253230] text-center">
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase font-bold block">Séries</span>
                      <span className="text-sm font-black text-[#CDFC39]">{exercise.series}</span>
                    </div>
                    <div className="border-x border-[#253230]">
                      <span className="text-[10px] text-gray-400 uppercase font-bold block">Repetições</span>
                      <span className="text-sm font-black text-white">{exercise.reps}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase font-bold block">Descanso</span>
                      <span className="text-sm font-black text-gray-300">
                        {exercise.restDisplay || `${exercise.restSeconds}s`}
                      </span>
                    </div>
                  </div>

                  {/* Load targets */}
                  <div className="flex items-center justify-between bg-[#131a19]/60 px-3 py-2 rounded-xl border border-[#253230]/70 text-xs">
                    <span className="text-gray-400 font-medium">Carga Sugerida:</span>
                    <span className="font-bold text-white font-mono text-sm">
                      {exercise.currentLoad}{exercise.currentLoad.includes("BW") ? "" : " kg"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Sticky Action Bar */}
        <div className="fixed bottom-20 left-0 w-full px-4 sm:px-6 flex justify-center z-30 pointer-events-none pb-safe">
          <button
            onClick={() => onStartWorkout(selectedRoutine)}
            className="pointer-events-auto w-full max-w-md min-h-[3.5rem] bg-[#CDFC39] hover:bg-[#bbf224] text-black font-black text-base uppercase tracking-wider rounded-2xl flex items-center justify-center gap-3 shadow-2xl active:scale-98 transition-all shadow-[#CDFC39]/30"
            id="btn-start-routine-bottom"
          >
            <Play className="w-5 h-5 fill-black" />
            <span>COMEÇAR ESTE TREINO</span>
          </button>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: LISTA DE FICHAS DE TREINO (A, B, C, D)
  // ==========================================
  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-5 pb-28 space-y-6 animate-fade-in font-sans">
      {/* Page Header */}
      <section className="bg-[#182020] border border-[#253230] p-5 rounded-3xl shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-black text-white font-display leading-tight">
          Suas Fichas de Treino 🏋️
        </h1>
        <p className="text-sm text-gray-300 mt-1">
          Toque em qualquer ficha para ver os exercícios ou começar imediatamente.
        </p>
      </section>

      {/* Division Quick Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {[
          { id: "all", label: "Todas as Fichas" },
          { id: "abc", label: "Treino ABC" },
          { id: "ab", label: "Treino AB" },
          { id: "abcd", label: "Treino ABCD" },
        ].map((tab) => {
          const isActive = selectedDivisionFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedDivisionFilter(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap active:scale-95 border ${
                isActive
                  ? "bg-[#CDFC39] text-black border-[#CDFC39] shadow-md shadow-[#CDFC39]/20"
                  : "bg-[#182020] text-gray-300 border-[#253230] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Routine Cards List (High accessibility, big tap targets) */}
      <div className="space-y-4">
        {filteredRoutines.map((routine) => {
          const letter = routine.name.includes("Treino A")
            ? "A"
            : routine.name.includes("Treino B")
            ? "B"
            : routine.name.includes("Treino C")
            ? "C"
            : routine.name.includes("Treino D")
            ? "D"
            : "T";

          return (
            <div
              key={routine.id}
              className="bg-[#182020] border border-[#253230] hover:border-[#CDFC39]/50 rounded-3xl p-5 sm:p-6 transition-all shadow-md group space-y-4"
            >
              {/* Header row: Letter badge + Title + Stats */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#CDFC39]/15 border border-[#CDFC39]/30 text-[#CDFC39] flex items-center justify-center font-black text-2xl font-display shrink-0">
                  {letter}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    {routine.dayOfWeek && (
                      <span className="text-[10px] bg-[#CDFC39]/15 text-[#CDFC39] font-bold px-2 py-0.5 rounded uppercase">
                        {routine.dayOfWeek}
                      </span>
                    )}
                    <span className="text-xs text-gray-400">
                      {routine.exercises.length} exercícios • ~{routine.durationMinutes} min
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-white leading-tight font-display">
                    {routine.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1">
                    {routine.focus}
                  </p>
                </div>
              </div>

              {/* Exercise Preview Pill Badges */}
              <div className="bg-[#131a19] p-3 rounded-xl border border-[#253230]">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
                  Alguns exercícios:
                </span>
                <p className="text-xs sm:text-sm text-gray-200 line-clamp-1">
                  {routine.exercises.slice(0, 4).map((e) => e.name).join(" • ")}
                  {routine.exercises.length > 4 ? ` e mais ${routine.exercises.length - 4}...` : ""}
                </p>
              </div>

              {/* Action Buttons: "Ver Detalhes" and "Iniciar Agora" */}
              <div className="flex items-center gap-3 pt-1">
                <button
                  onClick={() => setSelectedRoutine(routine)}
                  className="flex-1 min-h-[3rem] bg-[#131a19] hover:bg-[#253230] border border-[#253230] text-gray-200 hover:text-white font-bold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                >
                  <span>Ver Exercícios</span>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>

                <button
                  onClick={() => onStartWorkout(routine)}
                  className="flex-1 min-h-[3rem] bg-[#CDFC39] hover:bg-[#bbf224] text-black font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#CDFC39]/20 active:scale-95 transition-all"
                >
                  <Play className="w-4 h-4 fill-black" />
                  <span>Iniciar</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Exercise Detail Modal */}
      {selectedGuideExercise && (
        <ExerciseDetailModal
          exercise={selectedGuideExercise}
          onClose={() => setSelectedGuideExercise(null)}
        />
      )}
    </div>
  );
}
