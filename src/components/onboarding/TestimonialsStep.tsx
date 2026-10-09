/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import StepWrapper from "./StepWrapper";
import { Check, X, Users, Dumbbell } from "lucide-react";

interface TestimonialsStepProps {
  progress: number;
  onNext: () => void;
  onBack: () => void;
}

export default function TestimonialsStep({
  progress,
  onNext,
  onBack,
}: TestimonialsStepProps) {
  return (
    <StepWrapper
      progress={progress}
      onBack={onBack}
      title="Com o Titan, aumente sua força com treinos personalizados"
      subtitle="Desenvolvido com metodologia de sobrecarga progressiva e biomecânica aplicada."
      bottomButton={{
        label: "PRÓXIMO",
        onClick: onNext,
      }}
    >
      <div className="flex flex-col gap-4 my-auto py-2">
        {/* Social Proof Header */}
        <div className="flex items-center justify-center gap-3 py-2 bg-[#182020] border border-[#253230] rounded-2xl">
          <div className="flex -space-x-2 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
              alt="User"
              className="inline-block h-7 w-7 rounded-full ring-2 ring-[#182020] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
              alt="User"
              className="inline-block h-7 w-7 rounded-full ring-2 ring-[#182020] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80"
              alt="User"
              className="inline-block h-7 w-7 rounded-full ring-2 ring-[#182020] object-cover"
            />
          </div>
          <span className="text-xs font-bold text-gray-200">
            +3.500.000 Usuários Titan
          </span>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-2 gap-3">
          {/* Generic plan */}
          <div className="bg-[#182020] border border-[#253230] rounded-2xl p-4 flex flex-col gap-3">
            <div className="flex items-center gap-1.5 pb-2 border-b border-white/5">
              <span className="text-xs font-black text-gray-400 uppercase tracking-wider">
                Outro Plano
              </span>
            </div>

            <div className="flex flex-col gap-2.5 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                <span>Sem progressão calculada</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                <span>Platôs de força frequentes</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                <span>Falta de histórico de marcas</span>
              </div>
            </div>
          </div>

          {/* Titan plan */}
          <div className="bg-[#182020] border border-[#CDFC39] rounded-2xl p-4 flex flex-col gap-3 shadow-lg shadow-[#CDFC39]/10 relative">
            <div className="flex items-center gap-1.5 pb-2 border-b border-[#CDFC39]/30">
              <Dumbbell className="w-3.5 h-3.5 text-[#CDFC39]" />
              <span className="text-xs font-black text-[#CDFC39] uppercase tracking-wider">
                Plano Titan
              </span>
            </div>

            <div className="flex flex-col gap-2.5 text-xs text-white">
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#CDFC39] shrink-0 mt-0.5 stroke-[3]" />
                <span className="font-semibold">Foco em performance real</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#CDFC39] shrink-0 mt-0.5 stroke-[3]" />
                <span className="font-semibold">Progressão constante de peso</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-[#CDFC39] shrink-0 mt-0.5 stroke-[3]" />
                <span className="font-semibold">Mais potência e controle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StepWrapper>
  );
}
