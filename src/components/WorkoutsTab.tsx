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
  Eye,
  Check,
  Target,
  Calendar,
  Info,
  ExternalLink,
  ChevronRight,
  Flame
} from "lucide-react";
import { WorkoutRoutine, WorkoutStrategy, Exercise } from "../types";

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

  // Filter strategies based on division filter
  const filteredStrategies = strategies.filter((strat) => {
    if (selectedDivisionFilter === "all") return true;
    return strat.id === selectedDivisionFilter;
  });

  // If we came from a home dashboard click, pre-select a routine matching the filtered focus
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

  const handleGoToHome = () => {
    setSelectedRoutine(null);
    onClearFocusFilter();
    onGoToHome();
  };

  const handleSelectRoutineById = (routineId?: string, fallbackName?: string) => {
    if (routineId) {
      const match = routines.find((r) => r.id === routineId);
      if (match) {
        setSelectedRoutine(match);
        return;
      }
    }
    if (fallbackName) {
      const match = routines.find((r) => r.name.toLowerCase().includes(fallbackName.toLowerCase()));
      if (match) {
        setSelectedRoutine(match);
        return;
      }
    }
    setSelectedRoutine(routines[0]);
  };

  // ==========================================
  // VIEW: ROUTINE DETAILS & EDITING
  // ==========================================
  if (selectedRoutine) {
    return (
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 pt-6 pb-36 space-y-6 animate-fade-in font-sans">
        {/* Detail Header navigation */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-stretch sm:items-center bg-[#182020] p-4 rounded-2xl border border-[#253230] shadow-md">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleBackToOverview}
              className="flex-1 sm:flex-initial bg-[#131a19] hover:bg-[#253230] text-gray-300 hover:text-white flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 border border-[#253230]"
              id="btn-back-prev-workouts"
            >
              <ArrowLeft className="w-4 h-4 text-[#CDFC39]" /> Voltar às Rotinas
            </button>

            <button
              onClick={handleGoToHome}
              className="flex-1 sm:flex-initial bg-[#CDFC39]/15 hover:bg-[#CDFC39] text-[#CDFC39] hover:text-black flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all active:scale-95 border border-[#CDFC39]/30"
              id="btn-back-home-workouts"
            >
              <Home className="w-4 h-4" /> Início
            </button>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-center">
            <span className="text-[11px] font-bold text-[#CDFC39] bg-[#CDFC39]/10 px-2.5 py-1 rounded-full border border-[#CDFC39]/20">
              {selectedRoutine.exercises.length} Exercícios
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-[#182020] border border-[#253230] rounded-2xl p-5 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#CDFC39]/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            {selectedRoutine.dayOfWeek && (
              <span className="px-2.5 py-0.5 bg-[#CDFC39] text-black font-black text-[10px] rounded-md uppercase tracking-wider">
                {selectedRoutine.dayOfWeek}
              </span>
            )}
            {selectedRoutine.divisionId && (
              <span className="px-2.5 py-0.5 bg-[#131a19] border border-[#253230] text-gray-300 font-bold text-[10px] rounded-md uppercase tracking-wider">
                Divisão {selectedRoutine.divisionId.toUpperCase()}
              </span>
            )}
            {selectedRoutine.alias && (
              <span className="px-2.5 py-0.5 bg-[#CDFC39]/10 border border-[#CDFC39]/30 text-[#CDFC39] font-bold text-[10px] rounded-md uppercase tracking-wider">
                {selectedRoutine.alias}
              </span>
            )}
          </div>

          <h2 className="text-2xl font-bold text-white mb-2 leading-snug">
            {selectedRoutine.name}
          </h2>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <Dumbbell className="w-4 h-4 text-[#CDFC39]" /> Foco: <strong className="text-gray-200">{selectedRoutine.focus}</strong>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gray-400" /> Duração estimada: <strong className="text-gray-200">{selectedRoutine.durationMinutes} min</strong>
            </span>
          </div>
        </section>

        {/* Quick Info Callout */}
        <div className="bg-[#131a19] border border-[#253230] rounded-xl p-3.5 flex items-start gap-3 text-xs text-gray-400">
          <Info className="w-4 h-4 text-[#CDFC39] shrink-0 mt-0.5" />
          <span>
            Ajuste a <strong>Carga Atual</strong> e sua <strong>Meta</strong> diretamente nos campos abaixo. Suas alterações são salvas automaticamente na memória do aplicativo.
          </span>
        </div>

        {/* Exercises List */}
        <section className="space-y-3.5">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Flame className="w-4 h-4 text-[#CDFC39]" /> Sequência de Execução
            </h3>
            <span className="text-xs text-gray-400">Total: {selectedRoutine.exercises.length} movimentos</span>
          </div>

          {selectedRoutine.exercises.map((exercise, idx) => (
            <div
              key={exercise.id}
              className="bg-[#182020] border border-[#253230] rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center group hover:border-[#CDFC39]/50 transition-all shadow-md"
            >
              {/* Image thumbnail & index badge */}
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <span className="w-6 h-6 rounded-full bg-[#131a19] border border-[#253230] text-gray-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>

                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#253230] bg-[#111616]">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    alt={exercise.name}
                    src={exercise.imgUrl}
                  />
                </div>

                <div className="sm:hidden flex-1">
                  <span className="text-[9px] bg-[#CDFC39]/15 text-[#CDFC39] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">
                    {exercise.muscleGroup}
                  </span>
                  <h4 className="text-sm font-bold text-white leading-tight mt-1">
                    {exercise.name}
                  </h4>
                </div>
              </div>

              {/* Exercise Specs & Custom Load inputs */}
              <div className="flex-grow w-full space-y-2.5">
                <div className="hidden sm:flex justify-between items-center">
                  <h4 className="text-sm font-bold text-white group-hover:text-[#CDFC39] transition-colors leading-tight">
                    {exercise.name}
                  </h4>
                  <span className="text-[10px] bg-[#CDFC39]/15 text-[#CDFC39] font-bold px-2 py-0.5 rounded-full border border-[#CDFC39]/30 uppercase tracking-wider">
                    {exercise.muscleGroup}
                  </span>
                </div>

                {/* Series / Reps / Rest Badges */}
                <div className="grid grid-cols-3 gap-2 bg-[#131a19] p-2.5 rounded-xl border border-[#253230]">
                  <div className="text-center">
                    <span className="text-[9px] text-gray-500 uppercase block font-bold tracking-wider">Séries</span>
                    <span className="text-xs font-bold text-[#CDFC39]">{exercise.series}</span>
                  </div>
                  <div className="text-center border-x border-[#253230]">
                    <span className="text-[9px] text-gray-500 uppercase block font-bold tracking-wider">Reps</span>
                    <span className="text-xs font-bold text-white">{exercise.reps}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-[9px] text-gray-500 uppercase block font-bold tracking-wider">Descanso</span>
                    <span className="text-xs font-bold text-gray-300">
                      {exercise.restDisplay || `${exercise.restSeconds}s`}
                    </span>
                  </div>
                </div>

                {/* Progressive Overload inputs */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div>
                    <span className="text-[9px] text-gray-400 uppercase font-bold block mb-1">Carga Atual</span>
                    <div className="relative">
                      <input
                        type="text"
                        value={exercise.currentLoad}
                        onChange={(e) =>
                          onUpdateExerciseLoads(selectedRoutine.id, exercise.id, e.target.value, exercise.targetLoad)
                        }
                        className="w-full bg-[#131a19] border border-[#253230] rounded-lg px-2 py-1 text-xs text-white font-mono font-bold text-center focus:border-[#CDFC39] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] text-gray-400 uppercase font-bold block mb-1 flex items-center justify-center gap-1">
                      Meta <Target className="w-2.5 h-2.5 text-[#CDFC39]" />
                    </span>
                    <div className="relative">
                      <input
                        type="text"
                        value={exercise.targetLoad}
                        onChange={(e) =>
                          onUpdateExerciseLoads(selectedRoutine.id, exercise.id, exercise.currentLoad, e.target.value)
                        }
                        className="w-full bg-[#131a19] border border-[#CDFC39]/40 rounded-lg px-2 py-1 text-xs text-[#CDFC39] font-mono font-bold text-center focus:border-[#CDFC39] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="text-center flex flex-col justify-center">
                    <span className="text-[9px] text-gray-500 uppercase font-bold block">Último Reg.</span>
                    <span className="text-xs font-mono font-semibold text-gray-400 mt-1">
                      {exercise.lastLoad}{exercise.lastLoad.includes("BW") ? "" : "kg"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Sticky Start Workout Launch Bar */}
        <div className="fixed bottom-24 left-0 w-full px-4 sm:px-6 flex justify-center z-30 pointer-events-none">
          <button
            onClick={() => onStartWorkout(selectedRoutine)}
            className="pointer-events-auto w-full max-w-md h-14 bg-[#CDFC39] hover:bg-[#bbf224] text-black font-extrabold text-base rounded-2xl flex items-center justify-center gap-2 shadow-2xl active:scale-95 transition-all shadow-[#CDFC39]/30"
            id="btn-start-selected-workout"
          >
            <Play className="w-5 h-5 fill-black text-black ml-1" />
            <span>Iniciar {selectedRoutine.name.split("-")[0]} Agora</span>
          </button>
        </div>
      </div>
    );
  }

  // ==========================================
  // VIEW: STRATEGIES & DIVISIONS OVERVIEW (AB, ABC, ABCD)
  // ==========================================
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-28 space-y-8 animate-fade-in font-sans">
      {/* Overview Header and Navigation */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#182020] p-5 sm:p-6 rounded-2xl border border-[#253230] shadow-md">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] bg-[#CDFC39]/15 text-[#CDFC39] border border-[#CDFC39]/30 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
              Metodologia de Hipertrofia
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Fichas e Divisões de Treino</h1>
          <p className="text-gray-400 text-xs sm:text-sm">
            Escolha entre as divisões consagradas <strong>AB</strong>, <strong>ABC</strong> ou <strong>ABCD</strong> para hipertrofia com dias de descanso e progressão de carga estruturados.
          </p>
        </div>

        <button
          onClick={handleGoToHome}
          className="bg-[#CDFC39]/15 hover:bg-[#CDFC39] text-[#CDFC39] hover:text-black flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all active:scale-95 border border-[#CDFC39]/30 shrink-0"
          id="btn-overview-back-home"
        >
          <Home className="w-4 h-4" /> Voltar ao Início
        </button>
      </div>

      {/* Division Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {[
          { id: "all", label: "Todas as Divisões" },
          { id: "abc", label: "Treino ABC (Push / Pull / Legs)" },
          { id: "ab", label: "Treino AB (Upper / Lower)" },
          { id: "abcd", label: "Treino ABCD (4 Dias)" },
        ].map((tab) => {
          const isActive = selectedDivisionFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedDivisionFilter(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 border ${
                isActive
                  ? "bg-[#CDFC39] text-black border-[#CDFC39] shadow-lg shadow-[#CDFC39]/20"
                  : "bg-[#182020] text-gray-300 border-[#253230] hover:border-[#CDFC39]/40 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Render each Strategy / Division Block */}
      <div className="space-y-10">
        {filteredStrategies.map((strat) => (
          <section
            key={strat.id}
            className="bg-[#182020]/60 border border-[#253230] rounded-3xl p-5 sm:p-7 space-y-6 shadow-xl relative overflow-hidden"
          >
            {/* Header with Title & Source Note */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pb-4 border-b border-[#253230]">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#CDFC39]/15 flex items-center justify-center border border-[#CDFC39]/30 text-[#CDFC39]">
                    <Dumbbell className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {strat.name}
                    </h2>
                    <span className="text-xs text-[#CDFC39] font-bold">
                      {strat.tag} • {strat.frequency}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 max-w-3xl leading-relaxed mt-2">
                  {strat.description}
                </p>
              </div>

              {strat.sourceUrl && (
                <a
                  href={strat.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#131a19] hover:bg-[#253230] text-gray-400 hover:text-white text-[11px] font-bold px-3 py-2 rounded-xl border border-[#253230] flex items-center gap-1.5 transition-all shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#CDFC39]" />
                  <span>Artigo no Hipertrofia.org</span>
                </a>
              )}
            </div>

            {/* Weekly Division Schedule Bar */}
            {strat.scheduleList && strat.scheduleList.length > 0 && (
              <div className="bg-[#131a19] border border-[#253230] rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#CDFC39]" /> Divisão Semanal Recomendada
                  </span>
                  <span className="text-[10px] text-gray-400">Exemplo não prescritivo</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                  {strat.scheduleList.map((item, idx) => (
                    <div
                      key={`${item.day}-${idx}`}
                      className={`p-2.5 rounded-xl border flex flex-col justify-between min-h-[72px] transition-all ${
                        item.isRest
                          ? "bg-[#182020]/40 border-[#253230]/50 text-gray-400"
                          : "bg-[#182020] border-[#CDFC39]/30 text-white shadow-sm"
                      }`}
                    >
                      <span className={`text-[10px] font-black uppercase ${item.isRest ? "text-gray-400" : "text-[#CDFC39]"}`}>
                        {item.day}
                      </span>
                      <p className={`text-[11px] font-semibold leading-tight mt-1 ${item.isRest ? "text-gray-400 italic" : "text-gray-200"}`}>
                        {item.activity}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Routine Strategy Cards (A, B, C, D) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {strat.cards.map((card) => {
                const isLegs =
                  card.subtitle.toLowerCase().includes("legs") ||
                  card.subtitle.toLowerCase().includes("pernas") ||
                  card.subtitle.toLowerCase().includes("inferior");

                return (
                  <div
                    key={card.id}
                    className="bg-[#182020] border border-[#253230] rounded-2xl p-5 hover:border-[#CDFC39]/60 transition-all flex flex-col justify-between relative overflow-hidden group shadow-md"
                  >
                    {/* Background tint for legs or accent */}
                    {isLegs && (
                      <div
                        className="absolute inset-0 opacity-10 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 select-none pointer-events-none"
                        style={{
                          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm')`,
                        }}
                      ></div>
                    )}

                    <div className="relative z-10">
                      {/* Top Letter & Day Badge */}
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-4xl font-black text-[#CDFC39] tracking-tighter drop-shadow-md">
                          {card.letter}
                        </span>
                        {card.day && (
                          <span className="text-[10px] bg-[#CDFC39]/15 text-[#CDFC39] border border-[#CDFC39]/30 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                            {card.day}
                          </span>
                        )}
                      </div>

                      {/* Subtitle */}
                      <h3 className="text-base font-bold text-white mb-2 leading-tight">
                        {card.subtitle}
                      </h3>

                      {/* Muscle Pills */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {card.pills.map((pill, pIdx) => (
                          <span
                            key={`${pill}-${pIdx}`}
                            className="bg-[#131a19] border border-[#253230] text-gray-300 text-[9px] font-bold uppercase px-2 py-0.5 rounded-md"
                          >
                            {pill}
                          </span>
                        ))}
                      </div>

                      {/* Exercise Items Preview */}
                      <div className="space-y-1.5 mb-6">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-1">
                          Ficha ({card.details.length} exercícios):
                        </span>
                        {card.details.map((detail, dIdx) => (
                          <div
                            key={`${detail}-${dIdx}`}
                            className="text-xs text-gray-300 flex items-start gap-1.5 leading-snug"
                          >
                            <Check className="w-3.5 h-3.5 text-[#CDFC39] shrink-0 mt-0.5" />
                            <span className="truncate">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions: View routine details & Start button */}
                    <div className="relative z-10 pt-3 border-t border-[#253230] flex gap-2">
                      <button
                        onClick={() => handleSelectRoutineById(card.routineId, card.subtitle)}
                        className="flex-1 py-2.5 bg-[#CDFC39] text-black hover:bg-[#bbf224] transition-all text-xs font-black uppercase tracking-wider rounded-xl active:scale-95 flex items-center justify-center gap-1.5 shadow-md shadow-[#CDFC39]/20"
                      >
                        <Eye className="w-3.5 h-3.5" /> Ver Ficha
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
