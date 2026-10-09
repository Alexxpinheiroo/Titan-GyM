/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import StepWrapper from "./StepWrapper";
import { Dumbbell, Clock, Flame, CheckCircle2 } from "lucide-react";

interface PlanReadyStepProps {
  progress: number;
  frequencyDays: number;
  focusRegion: string;
  onNext: () => void;
  onBack: () => void;
}

export default function PlanReadyStep({
  progress,
  frequencyDays,
  focusRegion,
  onNext,
  onBack,
}: PlanReadyStepProps) {
  const sampleExercises = [
    {
      name: "Supino Inclinado com Halteres",
      muscle: "Peito Superior",
      sets: "4 séries",
      reps: "8-10 reps",
      load: "Início recomendado: 16kg",
    },
    {
      name: "Puxada Frontal na Polia",
      muscle: "Dorsal e Costas",
      sets: "4 séries",
      reps: "10-12 reps",
      load: "Início recomendado: 45kg",
    },
    {
      name: "Desenvolvimento de Ombros",
      muscle: "Deltóides",
      sets: "3 séries",
      reps: "10 reps",
      load: "Início recomendado: 12kg",
    },
  ];

  return (
    <StepWrapper
      progress={progress}
      onBack={onBack}
      title="Seu plano personalizado está pronto!"
      subtitle="Desenvolvido especificamente com a divisão de estímulos ideal para seu objetivo."
      bottomButton={{
        label: "CONTINUAR",
        onClick: onNext,
      }}
    >
      <div className="flex flex-col gap-4 my-auto py-2">
        {/* Quick summary metrics */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-[#182020] border border-[#253230] rounded-2xl p-3 flex flex-col items-center text-center">
            <Dumbbell className="w-5 h-5 text-[#CDFC39] mb-1" />
            <span className="text-base font-extrabold text-white font-display">
              {frequencyDays} Dias
            </span>
            <span className="text-[10px] text-gray-400">Treinos / semana</span>
          </div>

          <div className="bg-[#182020] border border-[#253230] rounded-2xl p-3 flex flex-col items-center text-center">
            <Clock className="w-5 h-5 text-[#CDFC39] mb-1" />
            <span className="text-base font-extrabold text-white font-display">
              45 min
            </span>
            <span className="text-[10px] text-gray-400">Tempo médio</span>
          </div>

          <div className="bg-[#182020] border border-[#253230] rounded-2xl p-3 flex flex-col items-center text-center">
            <Flame className="w-5 h-5 text-orange-400 mb-1" />
            <span className="text-base font-extrabold text-white font-display">
              ~380 kcal
            </span>
            <span className="text-[10px] text-gray-400">Por treino</span>
          </div>
        </div>

        {/* Workout Day 1 Preview */}
        <div className="bg-[#182020] border border-[#253230] rounded-2xl p-4 flex flex-col gap-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#CDFC39] text-black text-[10px] font-black tracking-wider uppercase">
                DIA 1
              </span>
              <span className="text-xs font-bold text-white uppercase tracking-wide">
                Superior & Força
              </span>
            </div>
            <span className="text-[11px] text-[#CDFC39] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Otimizado
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {sampleExercises.map((ex, idx) => (
              <div
                key={idx}
                className="bg-[#202c2a]/80 rounded-xl p-3 flex items-center justify-between gap-3 border border-white/5"
              >
                <div>
                  <div className="text-xs font-bold text-white">{ex.name}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">
                    {ex.muscle} • {ex.sets} • {ex.reps}
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[10px] font-bold text-[#CDFC39] bg-[#CDFC39]/10 px-2 py-1 rounded-lg border border-[#CDFC39]/20 block">
                    {ex.load}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StepWrapper>
  );
}
