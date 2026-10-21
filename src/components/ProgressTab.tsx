/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { TrendingUp, Plus, Target, ChevronRight, BarChart2, PlusCircle, Check, X, FileText } from "lucide-react";
import { LoadLog, WorkoutRoutine } from "../types";

interface ProgressTabProps {
  logs: LoadLog[];
  routines: WorkoutRoutine[];
  onAddLog: (exerciseId: string, loadKg: number, reps: number, notes?: string) => void;
}

export default function ProgressTab({ logs, routines, onAddLog }: ProgressTabProps) {
  // Collect all unique exercises from routines
  const availableExercises = routines.reduce((acc: { id: string; name: string }[], routine) => {
    routine.exercises.forEach((ex) => {
      if (!acc.some((item) => item.id === ex.id)) {
        acc.push({ id: ex.id, name: ex.name });
      }
    });
    return acc;
  }, []);

  const [activeExerciseId, setActiveExerciseId] = useState(
    availableExercises[0]?.id || "supino-reto-abc"
  );

  React.useEffect(() => {
    if (availableExercises.length > 0 && !availableExercises.some(ex => ex.id === activeExerciseId)) {
      setActiveExerciseId(availableExercises[0].id);
    }
  }, [availableExercises, activeExerciseId]);
  const [showLogModal, setShowLogModal] = useState(false);
  const [showExerciseDropdown, setShowExerciseDropdown] = useState(false);

  // New log form state
  const [newLoad, setNewLoad] = useState("");
  const [newReps, setNewReps] = useState("10");
  const [newNotes, setNewNotes] = useState("");
  const [logError, setLogError] = useState<string | null>(null);

  const activeExerciseName =
    availableExercises.find((ex) => ex.id === activeExerciseId)?.name || "Exercício";

  // Filter logs for this exercise
  const exerciseLogs = logs
    .filter((log) => log.exerciseId === activeExerciseId)
    .sort((a, b) => {
      // Sort by sessionNum to keep timeline correct
      return a.sessionNum - b.sessionNum;
    });

  // Calculate statistics cleanly
  const hasLogs = exerciseLogs.length > 0;
  const initialLoad = hasLogs ? exerciseLogs[0].loadKg : 0;
  const currentLoad = hasLogs ? exerciseLogs[exerciseLogs.length - 1].loadKg : 0;
  const evolution = hasLogs ? currentLoad - initialLoad : 0;
  const evolutionPercent = hasLogs && initialLoad > 0 
    ? (((currentLoad - initialLoad) / initialLoad) * 100).toFixed(0) 
    : "0";

  // Calculate coordinates for SVG chart
  const paddingX = 40;
  const paddingY = 30;
  const chartWidth = 400;
  const chartHeight = 180;

  const pointsCount = exerciseLogs.length;

  let pointsPath = "";
  let areaPath = "";
  const svgPoints: { cx: number; cy: number; log: LoadLog }[] = [];

  if (pointsCount > 1) {
    const minLoad = Math.min(...exerciseLogs.map((l) => l.loadKg)) - 5;
    const maxLoad = Math.max(...exerciseLogs.map((l) => l.loadKg)) + 5;
    const loadRange = Math.max(1, maxLoad - minLoad);

    exerciseLogs.forEach((log, idx) => {
      const x = paddingX + (idx / (pointsCount - 1)) * (chartWidth - 2 * paddingX);
      const y =
        chartHeight -
        paddingY -
        ((log.loadKg - minLoad) / loadRange) * (chartHeight - 2 * paddingY);

      svgPoints.push({ cx: x, cy: y, log });

      if (idx === 0) {
        pointsPath = `M${x},${y}`;
        areaPath = `M${x},${chartHeight - paddingY} L${x},${y}`;
      } else {
        pointsPath += ` L${x},${y}`;
        areaPath += ` L${x},${y}`;
      }

      if (idx === pointsCount - 1) {
        areaPath += ` L${x},${chartHeight - paddingY} Z`;
      }
    });
  }

  const handleSaveLog = (e: React.FormEvent) => {
    e.preventDefault();
    setLogError(null);
    const parsedLoad = parseFloat(newLoad);
    const parsedReps = parseInt(newReps);

    if (isNaN(parsedLoad) || parsedLoad <= 0) {
      setLogError("Por favor, digite um valor de carga válido maior que zero.");
      return;
    }

    onAddLog(activeExerciseId, parsedLoad, parsedReps, newNotes.trim() || undefined);
    setNewLoad("");
    setNewNotes("");
    setLogError(null);
    setShowLogModal(false);
  };

  return (
    <div className="w-full max-w-lg mx-auto px-5 pt-6 pb-24 space-y-6 animate-fade-in font-sans">
      {/* Selection Header */}
      <section className="relative">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-gray-400 text-xs uppercase tracking-wider font-bold">
              Evolução de Carga
            </span>
            <h2 className="text-2xl font-bold text-white leading-tight mt-1">
              {activeExerciseName}
            </h2>
          </div>
          <button
            onClick={() => setShowExerciseDropdown(!showExerciseDropdown)}
            className="flex items-center gap-1.5 text-xs font-bold text-[#CDFC39] bg-[#182020] border border-[#253230] px-3.5 py-2 rounded-xl active:scale-95 transition-all shadow-md hover:border-[#CDFC39]/40"
          >
            <span>Mudar</span>
            <TrendingUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Dropdown list of exercises */}
        {showExerciseDropdown && (
          <div className="absolute right-0 top-16 bg-[#182020] border border-[#253230] rounded-2xl w-64 py-2 shadow-2xl z-30 max-h-60 overflow-y-auto">
            {availableExercises.map((ex) => (
              <button
                key={ex.id}
                onClick={() => {
                  setActiveExerciseId(ex.id);
                  setShowExerciseDropdown(false);
                }}
                className={`w-full text-left px-4 py-2 text-xs font-semibold flex items-center justify-between ${
                  ex.id === activeExerciseId ? "text-[#CDFC39] bg-[#CDFC39]/10 font-bold" : "text-gray-300 hover:bg-[#1f2a29]"
                }`}
              >
                <span>{ex.name}</span>
                {ex.id === activeExerciseId && <Check className="w-3.5 h-3.5" />}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* SVG Progression Chart */}
      <section className="bg-[#182020] border border-[#253230] rounded-3xl p-5 shadow-lg relative overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <span className="text-gray-400 text-[10px] uppercase tracking-wider font-bold">
              Carga Máxima
            </span>
            <span className="text-3xl font-sans font-black text-[#CDFC39] tracking-tight mt-0.5">
              {hasLogs ? currentLoad : "--"}
              {hasLogs && <small className="text-lg font-normal text-gray-400 ml-0.5">kg</small>}
            </span>
          </div>
          <div className="text-right">
            {hasLogs ? (
              <span className="bg-[#CDFC39]/15 text-[#CDFC39] border border-[#CDFC39]/30 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider">
                {evolution >= 0 ? `+${evolutionPercent}%` : `${evolutionPercent}%`} Evolução
              </span>
            ) : (
              <span className="bg-[#1f2a29] text-gray-400 border border-[#253230] px-2.5 py-1 rounded-md text-[10px] font-semibold uppercase tracking-wider">
                Sem registros
              </span>
            )}
          </div>
        </div>

        {/* Graphic view container */}
        <div className="h-56 relative w-full flex flex-col justify-end">
          {pointsCount > 1 ? (
            <svg className="w-full h-full" viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
              <defs>
                <linearGradient id="chart-area-gradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#CDFC39" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#CDFC39" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line className="stroke-white/5 stroke-1" x1="0" x2={chartWidth} y1={50} y2={50} />
              <line className="stroke-white/5 stroke-1" x1="0" x2={chartWidth} y1={100} y2={100} />
              <line className="stroke-white/5 stroke-1" x1="0" x2={chartWidth} y1={150} y2={150} />

              {/* Filled Area */}
              <path className="fill-[url(#chart-area-gradient)] transition-all" d={areaPath} />

              {/* Connected Line */}
              <path
                className="stroke-[#CDFC39] stroke-[4] fill-none stroke-linecap-round stroke-linejoin-round transition-all"
                style={{ filter: "drop-shadow(0 0 6px rgba(205, 252, 57, 0.45))" }}
                d={pointsPath}
              />

              {/* Data Interactive Dots */}
              {svgPoints.map((pt, idx) => {
                const isLatest = idx === svgPoints.length - 1;
                return (
                  <g key={pt.log.id} className="group/dot cursor-pointer">
                    <circle
                      cx={pt.cx}
                      cy={pt.cy}
                      r={isLatest ? 7 : 4.5}
                      className="fill-[#CDFC39] stroke-[#182020] stroke-2 group-hover/dot:r-8 transition-all"
                    />
                    <title>{`${pt.log.dateStr}: ${pt.log.loadKg}kg (${pt.log.reps} reps)`}</title>
                  </g>
                );
              })}
            </svg>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500 text-xs italic">
              Não há dados de progressão suficientes para desenhar o gráfico. Adicione mais registros!
            </div>
          )}

          {/* Timeline axis labels */}
          <div className="flex justify-between mt-2 pt-2 border-t border-[#253230] text-[9px] text-gray-400 font-bold uppercase tracking-wider">
            {exerciseLogs.length > 0 ? (
              <>
                <span>{exerciseLogs[0].dateStr}</span>
                {exerciseLogs.length > 2 && (
                  <span>{exerciseLogs[Math.floor(exerciseLogs.length / 2)].dateStr}</span>
                )}
                <span>Hoje</span>
              </>
            ) : (
              <span>Nenhum log</span>
            )}
          </div>
        </div>
      </section>

      {/* Stats Summary Section */}
      <section className="grid grid-cols-3 gap-3">
        <div className="bg-[#182020] p-3.5 rounded-2xl border border-[#253230] text-center">
          <span className="text-[9px] text-gray-400 font-bold uppercase block mb-0.5">Inicial</span>
          <span className="text-lg font-bold font-sans text-white">
            {initialLoad}
            <span className="text-xs text-gray-400 ml-0.5">kg</span>
          </span>
        </div>
        <div className="bg-[#182020] p-3.5 rounded-2xl border border-[#CDFC39]/40 text-center">
          <span className="text-[9px] text-[#CDFC39] font-bold uppercase block mb-0.5">Atual</span>
          <span className="text-lg font-bold font-sans text-white">
            {currentLoad}
            <span className="text-xs text-gray-400 ml-0.5">kg</span>
          </span>
        </div>
        <div className="bg-[#182020] p-3.5 rounded-2xl border border-[#253230] text-center">
          <span className="text-[9px] text-gray-400 font-bold uppercase block mb-0.5">Evolução</span>
          <span className="text-lg font-bold font-sans text-[#CDFC39]">
            +{evolution}
            <span className="text-xs ml-0.5">kg</span>
          </span>
        </div>
      </section>

      {/* Recents Records Log list */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold text-white uppercase tracking-widest border-l-4 border-l-[#CDFC39] pl-2.5">
          Registros Recentes
        </h3>
        
        <div className="space-y-2">
          {exerciseLogs
            .slice()
            .reverse()
            .map((log) => (
              <div
                key={log.id}
                className="flex flex-col bg-[#182020] p-4 rounded-xl border border-[#253230] hover:bg-[#1f2a29] transition-colors group shadow-sm gap-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">{log.dateStr}</span>
                    <span className="text-[10px] text-gray-400">Sessão #{log.sessionNum}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-[#CDFC39] font-sans font-black text-sm">
                        {log.loadKg} kg
                      </div>
                      <div className="text-gray-400 text-xs">{log.reps} reps</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-[#CDFC39] transition-colors" />
                  </div>
                </div>

                {log.notes && (
                  <div className="text-xs text-gray-300 bg-[#131a19] border border-[#253230] rounded-lg px-2.5 py-1.5 flex items-start gap-2">
                    <FileText className="w-3.5 h-3.5 text-[#CDFC39] shrink-0 mt-0.5" />
                    <span className="leading-relaxed italic text-gray-200 font-medium">
                      &ldquo;{log.notes}&rdquo;
                    </span>
                  </div>
                )}
              </div>
            ))}
        </div>
      </section>

      {/* CTA action button */}
      <button
        onClick={() => setShowLogModal(true)}
        className="w-full h-14 bg-[#CDFC39] text-black hover:bg-[#bbf224] rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-[#CDFC39]/25"
      >
        <PlusCircle className="w-5 h-5" />
        <span>Novo Registro</span>
      </button>

      {/* Interactive load logging modal */}
      {showLogModal && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-[#182020] border border-[#253230] rounded-3xl w-full max-w-xs overflow-hidden shadow-2xl animate-scale-up">
            <div className="p-5 border-b border-[#253230] flex justify-between items-center bg-[#1f2a29]">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Novo Registro
              </h3>
              <button
                onClick={() => setShowLogModal(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSaveLog} className="p-5 space-y-4">
              <div className="text-center pb-2">
                <span className="text-xs text-gray-400 uppercase font-semibold">Exercício</span>
                <p className="text-md font-bold text-white">{activeExerciseName}</p>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-400 font-bold uppercase">Carga (kg)</label>
                <input
                  type="number"
                  step="0.5"
                  required
                  placeholder="Ex: 46"
                  value={newLoad}
                  onChange={(e) => setNewLoad(e.target.value)}
                  className="w-full bg-[#131a19] border border-[#253230] rounded-xl p-3 text-sm text-white font-mono font-bold text-center focus:border-[#CDFC39] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-400 font-bold uppercase">Repetições</label>
                <input
                  type="number"
                  required
                  min="1"
                  placeholder="Ex: 8"
                  value={newReps}
                  onChange={(e) => setNewReps(e.target.value)}
                  className="w-full bg-[#131a19] border border-[#253230] rounded-xl p-3 text-sm text-white font-mono font-bold text-center focus:border-[#CDFC39] focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-gray-400 font-bold uppercase flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#CDFC39]" />
                  <span>Sensações / Dificuldades (Opcional)</span>
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Falha na 8ª rep, bom pump, ombro estável..."
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  className="w-full bg-[#131a19] border border-[#253230] rounded-xl p-2.5 text-xs text-white placeholder:text-gray-500 focus:border-[#CDFC39] focus:outline-none resize-none"
                />
              </div>

              {logError && (
                <div className="p-2.5 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-lg text-center">
                  {logError}
                </div>
              )}

              <button
                type="submit"
                className="w-full h-12 bg-[#CDFC39] text-black font-bold uppercase text-xs tracking-wider rounded-xl hover:bg-[#bbf224] transition-colors active:scale-95 shadow-md shadow-[#CDFC39]/25"
              >
                Confirmar Registro
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
