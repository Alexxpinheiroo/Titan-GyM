/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import StepWrapper from "./StepWrapper";
import { Zap, TrendingUp, Sparkles } from "lucide-react";

interface ComparisonPowerStepProps {
  progress: number;
  onNext: () => void;
  onBack: () => void;
}

export default function ComparisonPowerStep({
  progress,
  onNext,
  onBack,
}: ComparisonPowerStepProps) {
  return (
    <StepWrapper
      progress={progress}
      onBack={onBack}
      title="Mais força. Mais potência."
      subtitle="Com progressão inteligente, você evolui nos pesos e aumenta seu desempenho em cada treino."
      bottomButton={{
        label: "PRÓXIMO",
        onClick: onNext,
      }}
    >
      <div className="flex flex-col gap-5 my-auto py-2">
        {/* Comparison Graphic */}
        <div className="bg-[#182020] border border-[#253230] rounded-3xl p-6 relative overflow-hidden">
          <div className="flex items-end justify-around gap-6 h-56 pt-4 pb-2">
            {/* Left: Sem Titan */}
            <div className="flex flex-col items-center flex-1 h-full justify-end">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                Sem Titan
              </span>
              <div className="w-full max-w-[84px] bg-[#242e2c] rounded-2xl h-24 flex flex-col items-center justify-center p-2 border border-white/5">
                <span className="text-xs font-semibold text-gray-400 text-center leading-tight">
                  Força limitada
                </span>
                <span className="text-[10px] text-gray-500 mt-1">Platô</span>
              </div>
            </div>

            {/* Right: Com Titan */}
            <div className="flex flex-col items-center flex-1 h-full justify-end relative">
              <div className="absolute -top-1 px-2.5 py-0.5 rounded-full bg-[#CDFC39] text-black text-[10px] font-black tracking-wider uppercase shadow-lg shadow-[#CDFC39]/30 flex items-center gap-1 animate-pulse">
                <Zap className="w-3 h-3 fill-black" />
                <span>3X MAIS RÁPIDO</span>
              </div>

              <span className="text-xs font-extrabold text-[#CDFC39] uppercase tracking-wider mb-2 mt-6">
                Com Titan
              </span>

              <div className="w-full max-w-[84px] bg-gradient-to-t from-[#84a80e] to-[#CDFC39] rounded-2xl h-44 flex flex-col items-center justify-center p-2 shadow-xl shadow-[#CDFC39]/20 border border-[#e4ff7a]">
                <Sparkles className="w-5 h-5 text-black mb-1" />
                <span className="text-xs font-black text-black text-center leading-tight">
                  3x Mais Força
                </span>
                <span className="text-[10px] font-extrabold text-black/80 mt-1">Progresso Real</span>
              </div>
            </div>
          </div>

          {/* Bottom callout inside card */}
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#CDFC39]/15 flex items-center justify-center text-[#CDFC39] shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <p className="text-xs font-bold text-gray-200 tracking-wide uppercase">
              POTÊNCIA PARA LEVANTAR MAIS E EVOLUIR SEMPRE.
            </p>
          </div>
        </div>

        {/* Feature bullets */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3.5 bg-[#182020] border border-[#253230] rounded-2xl">
            <div className="text-sm font-bold text-white">Sobrecarga Progressiva</div>
            <div className="text-xs text-gray-400 mt-1">Cálculo de cargas semana a semana</div>
          </div>
          <div className="p-3.5 bg-[#182020] border border-[#253230] rounded-2xl">
            <div className="text-sm font-bold text-white">Zero Platô</div>
            <div className="text-xs text-gray-400 mt-1">Variação precisa de estímulos</div>
          </div>
        </div>
      </div>
    </StepWrapper>
  );
}
