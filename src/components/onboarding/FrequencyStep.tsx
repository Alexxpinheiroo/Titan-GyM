/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import StepWrapper from "./StepWrapper";
import { Plus, Minus, Calendar, Sparkles } from "lucide-react";

interface FrequencyStepProps {
  progress: number;
  frequencyDays: number;
  userGoal: string;
  userExperience: string;
  onChangeFrequency: (days: number) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function FrequencyStep({
  progress,
  frequencyDays,
  userGoal,
  userExperience,
  onChangeFrequency,
  onNext,
  onBack,
}: FrequencyStepProps) {
  return (
    <StepWrapper
      progress={progress}
      onBack={onBack}
      title="Com que frequência você gostaria de treinar?"
      subtitle="Vamos calibrar o volume semanal e a divisão de treinos (Split) ideal para seu cronograma."
      bottomButton={{
        label: "PRÓXIMO",
        onClick: onNext,
      }}
    >
      <div className="flex flex-col items-center justify-center my-auto py-4 gap-6">
        {/* Stepper Card */}
        <div className="flex items-center gap-6 bg-[#182020] border border-[#253230] rounded-3xl p-6 shadow-lg">
          <button
            type="button"
            onClick={() => onChangeFrequency(Math.max(2, frequencyDays - 1))}
            className="w-14 h-14 rounded-2xl bg-[#202c2a] hover:bg-[#283734] active:scale-95 text-white flex items-center justify-center transition-all border border-white/5"
            aria-label="Diminuir dias"
          >
            <Minus className="w-6 h-6 text-gray-300" />
          </button>

          <div className="flex flex-col items-center justify-center min-w-[140px]">
            <span className="text-6xl font-black font-display text-white tracking-tight">
              {frequencyDays}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#CDFC39] font-bold mt-1">
              Dias por semana
            </span>
          </div>

          <button
            type="button"
            onClick={() => onChangeFrequency(Math.min(6, frequencyDays + 1))}
            className="w-14 h-14 rounded-2xl bg-[#202c2a] hover:bg-[#283734] active:scale-95 text-white flex items-center justify-center transition-all border border-white/5"
            aria-label="Aumentar dias"
          >
            <Plus className="w-6 h-6 text-gray-300" />
          </button>
        </div>

        {/* Days visualization */}
        <div className="flex gap-2">
          {["S", "T", "Q", "Q", "S", "S", "D"].map((d, i) => (
            <div
              key={i}
              className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                i < frequencyDays
                  ? "bg-[#CDFC39] text-black shadow-sm shadow-[#CDFC39]/20"
                  : "bg-[#182020] text-gray-500 border border-white/5"
              }`}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Recommendation Box */}
        <div className="w-full bg-[#182020] border border-[#CDFC39]/30 rounded-2xl p-4 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-[#CDFC39] shrink-0 mt-0.5" />
            <p className="text-xs text-gray-200 leading-relaxed">
              O Titan recomenda <strong className="text-white">{frequencyDays} dias de treino por semana</strong> com base no seu perfil, promovendo o descanso muscular ótimo de 48-72h.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1 border-t border-[#CDFC39]/20">
            <span className="px-2.5 py-1 rounded-full bg-black/40 text-[11px] font-bold text-gray-300 border border-white/10 capitalize">
              {userExperience || "Intermediário"}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-black/40 text-[11px] font-bold text-gray-300 border border-white/10 capitalize">
              {userGoal || "Ficar mais forte"}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#CDFC39]/20 text-[11px] font-bold text-[#CDFC39] border border-[#CDFC39]/30">
              ✦ Recomendado
            </span>
          </div>
        </div>
      </div>
    </StepWrapper>
  );
}
