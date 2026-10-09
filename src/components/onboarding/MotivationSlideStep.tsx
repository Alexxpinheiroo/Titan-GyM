/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import StepWrapper from "./StepWrapper";
import { Flame, Shield, Trophy } from "lucide-react";

interface MotivationSlideStepProps {
  progress: number;
  onNext: () => void;
  onBack: () => void;
}

export default function MotivationSlideStep({
  progress,
  onNext,
  onBack,
}: MotivationSlideStepProps) {
  return (
    <StepWrapper
      progress={progress}
      onBack={onBack}
      title="Fique mais forte. Treine com confiança."
      subtitle="Sem adivinhações. Cada série, repetição e quilograma calculados para sua vitória."
      bottomButton={{
        label: "PRÓXIMO",
        onClick: onNext,
      }}
    >
      <div className="flex flex-col gap-4 my-auto py-2">
        {/* Dynamic athlete visual card */}
        <div className="relative rounded-3xl overflow-hidden border border-[#253230] h-64 flex flex-col justify-end p-6 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
            alt="Athlete"
            className="absolute inset-0 w-full h-full object-cover filter contrast-125 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="relative z-10 flex flex-col gap-1">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#CDFC39] bg-black/60 px-2 py-0.5 rounded w-fit border border-[#CDFC39]/40">
              FOCO TOTAL
            </span>
            <h3 className="text-xl font-black text-white font-display uppercase tracking-tight">
              GANHE FORÇA DE VERDADE. SUPERE SEUS LIMITES.
            </h3>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-[#182020] border border-[#253230] rounded-2xl p-3 flex flex-col items-center">
            <Flame className="w-5 h-5 text-orange-400 mb-1" />
            <span className="text-xs font-bold text-white">Intensidade</span>
            <span className="text-[10px] text-gray-400">Na medida</span>
          </div>

          <div className="bg-[#182020] border border-[#253230] rounded-2xl p-3 flex flex-col items-center">
            <Shield className="w-5 h-5 text-[#CDFC39] mb-1" />
            <span className="text-xs font-bold text-white">Segurança</span>
            <span className="text-[10px] text-gray-400">Zero lesões</span>
          </div>

          <div className="bg-[#182020] border border-[#253230] rounded-2xl p-3 flex flex-col items-center">
            <Trophy className="w-5 h-5 text-amber-400 mb-1" />
            <span className="text-xs font-bold text-white">Resultados</span>
            <span className="text-[10px] text-gray-400">Semana a semana</span>
          </div>
        </div>
      </div>
    </StepWrapper>
  );
}
