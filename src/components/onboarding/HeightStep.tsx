/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import StepWrapper from "./StepWrapper";

interface HeightStepProps {
  progress: number;
  heightCm: number;
  unit: "cm" | "ft";
  onChangeHeight: (cm: number) => void;
  onChangeUnit: (unit: "cm" | "ft") => void;
  onNext: () => void;
  onBack: () => void;
}

export default function HeightStep({
  progress,
  heightCm,
  unit,
  onChangeHeight,
  onChangeUnit,
  onNext,
  onBack,
}: HeightStepProps) {
  // Conversion helper
  const displayValue =
    unit === "cm"
      ? `${heightCm} cm`
      : `${Math.floor(heightCm / 30.48)}' ${Math.round((heightCm % 30.48) / 2.54)}"`;

  return (
    <StepWrapper
      progress={progress}
      onBack={onBack}
      title="Qual a sua altura?"
      subtitle="Utilizado para calcular parâmetros biomecânicos e alavancas musculares."
      bottomButton={{
        label: "PRÓXIMO",
        onClick: onNext,
      }}
    >
      <div className="flex flex-col items-center justify-center my-auto py-6 gap-6">
        {/* Unit Toggle */}
        <div className="flex bg-[#182020] border border-[#253230] p-1 rounded-xl">
          <button
            type="button"
            onClick={() => onChangeUnit("cm")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              unit === "cm" ? "bg-[#CDFC39] text-black" : "text-gray-400 hover:text-white"
            }`}
          >
            CM
          </button>
          <button
            type="button"
            onClick={() => onChangeUnit("ft")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              unit === "ft" ? "bg-[#CDFC39] text-black" : "text-gray-400 hover:text-white"
            }`}
          >
            FT
          </button>
        </div>

        {/* Big Value Display */}
        <div className="bg-[#182020] border border-[#253230] rounded-3xl px-8 py-6 flex flex-col items-center shadow-lg w-full max-w-xs">
          <span className="text-5xl font-black font-display text-white tracking-tight">
            {displayValue}
          </span>
        </div>

        {/* Interactive Slider */}
        <div className="w-full max-w-xs flex flex-col gap-2">
          <input
            type="range"
            min={130}
            max={220}
            step={1}
            value={heightCm}
            onChange={(e) => onChangeHeight(Number(e.target.value))}
            className="w-full accent-[#CDFC39] h-2 bg-[#202c2a] rounded-lg appearance-none cursor-pointer"
          />

          {/* Visual Ruler Ticks */}
          <div className="flex justify-between text-[11px] text-gray-500 font-medium px-1">
            <span>140 cm</span>
            <span>160 cm</span>
            <span className="text-[#CDFC39] font-bold">180 cm</span>
            <span>200 cm</span>
            <span>220 cm</span>
          </div>
        </div>
      </div>
    </StepWrapper>
  );
}
