/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import StepWrapper from "./StepWrapper";
import { CheckCircle2, AlertTriangle, Check } from "lucide-react";

interface InjuriesStepProps {
  progress: number;
  hasInjuries: boolean;
  selectedInjuries: string[];
  onToggleHasInjuries: (has: boolean) => void;
  onToggleInjuryArea: (area: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const INJURY_AREAS = [
  "Ombro",
  "Joelho",
  "Lombar",
  "Cotovelo",
  "Punho",
  "Tornozelo",
  "Cervical",
  "Quadril",
];

export default function InjuriesStep({
  progress,
  hasInjuries,
  selectedInjuries,
  onToggleHasInjuries,
  onToggleInjuryArea,
  onNext,
  onBack,
}: InjuriesStepProps) {
  return (
    <StepWrapper
      progress={progress}
      onBack={onBack}
      title="Você tem alguma lesão ativa?"
      subtitle="Selecione as áreas com dor ou limitação. Vamos adaptar seu plano para evitar sobrecarga."
      bottomButton={{
        label: "PRÓXIMO",
        onClick: onNext,
      }}
    >
      <div className="flex flex-col gap-3 my-auto py-2">
        {/* Option 1: No injuries */}
        <button
          type="button"
          onClick={() => onToggleHasInjuries(false)}
          className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between gap-3 transition-all ${
            !hasInjuries
              ? "bg-[#182020] border-[#CDFC39] text-white shadow-md shadow-[#CDFC39]/10"
              : "bg-[#182020] border-[#253230] text-gray-300 hover:bg-[#1f2a29]"
          }`}
        >
          <div className="flex items-center gap-3.5">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                !hasInjuries
                  ? "bg-[#CDFC39]/20 text-[#CDFC39]"
                  : "bg-[#202c2a] text-gray-400"
              }`}
            >
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-base text-white">Nenhuma lesão ativa</div>
              <div className="text-xs text-gray-400 mt-0.5">Treine com amplitude e intensidade total</div>
            </div>
          </div>

          <div
            className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${
              !hasInjuries
                ? "bg-[#CDFC39] border-[#CDFC39] text-black"
                : "border-gray-600 bg-transparent"
            }`}
          >
            {!hasInjuries && <Check className="w-3.5 h-3.5 stroke-[3]" />}
          </div>
        </button>

        {/* Option 2: Has injuries */}
        <button
          type="button"
          onClick={() => onToggleHasInjuries(true)}
          className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between gap-3 transition-all ${
            hasInjuries
              ? "bg-[#182020] border-[#CDFC39] text-white shadow-md shadow-[#CDFC39]/10"
              : "bg-[#182020] border-[#253230] text-gray-300 hover:bg-[#1f2a29]"
          }`}
        >
          <div className="flex items-center gap-3.5">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                hasInjuries
                  ? "bg-[#CDFC39]/20 text-[#CDFC39]"
                  : "bg-[#202c2a] text-gray-400"
              }`}
            >
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-base text-white">Sim, tenho limitações</div>
              <div className="text-xs text-gray-400 mt-0.5">Selecione as regiões para proteção</div>
            </div>
          </div>

          <div
            className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 ${
              hasInjuries
                ? "bg-[#CDFC39] border-[#CDFC39] text-black"
                : "border-gray-600 bg-transparent"
            }`}
          >
            {hasInjuries && <Check className="w-3.5 h-3.5 stroke-[3]" />}
          </div>
        </button>

        {/* Injury area tags if selected */}
        {hasInjuries && (
          <div className="mt-3 p-4 bg-[#182020] border border-[#253230] rounded-2xl animate-fade-in">
            <span className="text-xs font-bold text-gray-300 uppercase tracking-wider block mb-3">
              Selecione as áreas afetadas:
            </span>
            <div className="flex flex-wrap gap-2">
              {INJURY_AREAS.map((area) => {
                const isSelected = selectedInjuries.includes(area);
                return (
                  <button
                    key={area}
                    type="button"
                    onClick={() => onToggleInjuryArea(area)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      isSelected
                        ? "bg-[#CDFC39] text-black shadow-md shadow-[#CDFC39]/20"
                        : "bg-[#202c2a] text-gray-300 hover:bg-[#283734] border border-white/5"
                    }`}
                  >
                    {area}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </StepWrapper>
  );
}
