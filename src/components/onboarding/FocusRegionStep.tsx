/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import StepWrapper from "./StepWrapper";

interface FocusRegionStepProps {
  progress: number;
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const REGIONS = [
  { id: "corpo_inteiro", label: "Corpo Inteiro" },
  { id: "peito", label: "Peito" },
  { id: "costas", label: "Costas" },
  { id: "bracos", label: "Braços" },
  { id: "ombros", label: "Ombros" },
  { id: "pernas", label: "Pernas" },
  { id: "gluteos", label: "Glúteos" },
  { id: "abdomen", label: "Abdômen" },
];

export default function FocusRegionStep({
  progress,
  selectedRegion,
  onSelectRegion,
  onNext,
  onBack,
}: FocusRegionStepProps) {
  return (
    <StepWrapper
      progress={progress}
      onBack={onBack}
      title="Qual região do corpo você quer focar?"
      subtitle="Priorizaremos exercícios compostos e isoladores para esta região."
      bottomButton={{
        label: "PRÓXIMO",
        onClick: onNext,
      }}
    >
      <div className="flex flex-col items-center gap-6 my-auto py-2">
        {/* Anatomical visual mannequin */}
        <div className="relative w-48 h-56 bg-[#182020] border border-[#253230] rounded-3xl p-3 flex items-center justify-center shadow-inner">
          <svg
            viewBox="0 0 100 130"
            className="w-full h-full max-h-48 drop-shadow-md"
            fill="none"
            stroke="currentColor"
          >
            {/* Head */}
            <circle cx="50" cy="14" r="9" className="stroke-gray-600 fill-gray-800" strokeWidth="1.5" />
            {/* Neck & Traps */}
            <path d="M44 23 L56 23 L60 28 L40 28 Z" className="stroke-gray-600 fill-gray-800" strokeWidth="1.2" />
            
            {/* Shoulders */}
            <path
              d="M31 31 C35 27, 40 28, 40 33 C39 37, 33 37, 31 31 Z"
              className={selectedRegion === "ombros" || selectedRegion === "corpo_inteiro" ? "fill-[#CDFC39] stroke-[#e4ff7a]" : "fill-[#253230] stroke-gray-600"}
              strokeWidth="1.2"
            />
            <path
              d="M69 31 C65 27, 60 28, 60 33 C61 37, 67 37, 69 31 Z"
              className={selectedRegion === "ombros" || selectedRegion === "corpo_inteiro" ? "fill-[#CDFC39] stroke-[#e4ff7a]" : "fill-[#253230] stroke-gray-600"}
              strokeWidth="1.2"
            />

            {/* Chest */}
            <path
              d="M40 28 L60 28 L58 42 C54 44, 46 44, 42 42 Z"
              className={selectedRegion === "peito" || selectedRegion === "corpo_inteiro" ? "fill-[#CDFC39] stroke-[#e4ff7a]" : "fill-[#253230] stroke-gray-600"}
              strokeWidth="1.2"
            />

            {/* Abs */}
            <path
              d="M42 43 L58 43 L55 60 C53 62, 47 62, 45 60 Z"
              className={selectedRegion === "abdomen" || selectedRegion === "corpo_inteiro" ? "fill-[#CDFC39] stroke-[#e4ff7a]" : "fill-[#253230] stroke-gray-600"}
              strokeWidth="1.2"
            />

            {/* Arms / Biceps */}
            <path
              d="M31 33 L25 45 C23 48, 25 54, 27 54 L32 42 Z"
              className={selectedRegion === "bracos" || selectedRegion === "corpo_inteiro" ? "fill-[#CDFC39] stroke-[#e4ff7a]" : "fill-[#253230] stroke-gray-600"}
              strokeWidth="1.2"
            />
            <path
              d="M69 33 L75 45 C77 48, 75 54, 73 54 L68 42 Z"
              className={selectedRegion === "bracos" || selectedRegion === "corpo_inteiro" ? "fill-[#CDFC39] stroke-[#e4ff7a]" : "fill-[#253230] stroke-gray-600"}
              strokeWidth="1.2"
            />

            {/* Forearms */}
            <path
              d="M26 54 L22 68 C21 72, 25 73, 26 70 L30 56 Z"
              className={selectedRegion === "bracos" || selectedRegion === "corpo_inteiro" ? "fill-[#CDFC39] stroke-[#e4ff7a]" : "fill-[#253230] stroke-gray-600"}
              strokeWidth="1.2"
            />
            <path
              d="M74 54 L78 68 C79 72, 75 73, 74 70 L70 56 Z"
              className={selectedRegion === "bracos" || selectedRegion === "corpo_inteiro" ? "fill-[#CDFC39] stroke-[#e4ff7a]" : "fill-[#253230] stroke-gray-600"}
              strokeWidth="1.2"
            />

            {/* Glutes / Hips */}
            <path
              d="M41 61 L59 61 L58 72 C55 75, 45 75, 42 72 Z"
              className={selectedRegion === "gluteos" || selectedRegion === "corpo_inteiro" ? "fill-[#CDFC39] stroke-[#e4ff7a]" : "fill-[#253230] stroke-gray-600"}
              strokeWidth="1.2"
            />

            {/* Thighs / Legs */}
            <path
              d="M41 73 L49 73 L47 96 L39 96 Z"
              className={selectedRegion === "pernas" || selectedRegion === "corpo_inteiro" ? "fill-[#CDFC39] stroke-[#e4ff7a]" : "fill-[#253230] stroke-gray-600"}
              strokeWidth="1.2"
            />
            <path
              d="M51 73 L59 73 L61 96 L53 96 Z"
              className={selectedRegion === "pernas" || selectedRegion === "corpo_inteiro" ? "fill-[#CDFC39] stroke-[#e4ff7a]" : "fill-[#253230] stroke-gray-600"}
              strokeWidth="1.2"
            />

            {/* Calves */}
            <path
              d="M40 98 L46 98 L45 118 L41 118 Z"
              className={selectedRegion === "pernas" || selectedRegion === "corpo_inteiro" ? "fill-[#CDFC39] stroke-[#e4ff7a]" : "fill-[#253230] stroke-gray-600"}
              strokeWidth="1.2"
            />
            <path
              d="M54 98 L60 98 L59 118 L55 118 Z"
              className={selectedRegion === "pernas" || selectedRegion === "corpo_inteiro" ? "fill-[#CDFC39] stroke-[#e4ff7a]" : "fill-[#253230] stroke-gray-600"}
              strokeWidth="1.2"
            />
          </svg>

          <div className="absolute bottom-2 right-2 text-[10px] font-bold text-gray-400 bg-black/40 px-2 py-0.5 rounded">
            Foco Ativo
          </div>
        </div>

        {/* Region Pills */}
        <div className="grid grid-cols-2 gap-2.5 w-full">
          {REGIONS.map((r) => {
            const isSelected = selectedRegion === r.id;
            return (
              <button
                key={r.id}
                type="button"
                onClick={() => onSelectRegion(r.id)}
                className={`p-3.5 rounded-xl text-sm font-bold transition-all text-center border ${
                  isSelected
                    ? "bg-[#CDFC39] border-[#CDFC39] text-black shadow-md shadow-[#CDFC39]/20"
                    : "bg-[#182020] border-[#253230] text-gray-300 hover:bg-[#1f2a29] hover:border-gray-500"
                }`}
              >
                {r.label}
              </button>
            );
          })}
        </div>
      </div>
    </StepWrapper>
  );
}
