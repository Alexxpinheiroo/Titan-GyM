/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import StepWrapper from "./StepWrapper";
import { Flame } from "lucide-react";

interface WeightStepProps {
  progress: number;
  weightKg: number;
  heightCm: number;
  unit: "kg" | "lb";
  onChangeWeight: (kg: number) => void;
  onChangeUnit: (unit: "kg" | "lb") => void;
  onNext: () => void;
  onBack: () => void;
}

export default function WeightStep({
  progress,
  weightKg,
  heightCm,
  unit,
  onChangeWeight,
  onChangeUnit,
  onNext,
  onBack,
}: WeightStepProps) {
  // Convert display
  const displayValue = unit === "kg" ? `${weightKg} kg` : `${Math.round(weightKg * 2.20462)} lb`;

  // BMI (IMC) Calculation
  const heightMeters = heightCm / 100;
  const bmi = heightMeters > 0 ? parseFloat((weightKg / (heightMeters * heightMeters)).toFixed(1)) : 22.5;

  let bmiFeedback = "Isso é ótimo! Vamos te ajudar a ficar ainda mais forte e saudável.";
  if (bmi < 18.5) {
    bmiFeedback = "Vamos focar em superávit calórico e ganho de massa magra.";
  } else if (bmi >= 25 && bmi < 30) {
    bmiFeedback = "Excelente ponto de partida para recomposição corporal e ganho de força.";
  } else if (bmi >= 30) {
    bmiFeedback = "Focaremos em queima calórica e preservação de massa magra sem sobrecarregar articulações.";
  }

  return (
    <StepWrapper
      progress={progress}
      onBack={onBack}
      title="Qual o seu peso?"
      subtitle="Utilizado para calcular cargas iniciais relativas e gasto calórico."
      bottomButton={{
        label: "PRÓXIMO",
        onClick: onNext,
      }}
    >
      <div className="flex flex-col items-center justify-center my-auto py-4 gap-5">
        {/* Unit Toggle */}
        <div className="flex bg-[#182020] border border-[#253230] p-1 rounded-xl">
          <button
            type="button"
            onClick={() => onChangeUnit("kg")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              unit === "kg" ? "bg-[#CDFC39] text-black" : "text-gray-400 hover:text-white"
            }`}
          >
            KG
          </button>
          <button
            type="button"
            onClick={() => onChangeUnit("lb")}
            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
              unit === "lb" ? "bg-[#CDFC39] text-black" : "text-gray-400 hover:text-white"
            }`}
          >
            LB
          </button>
        </div>

        {/* Big Value Display */}
        <div className="bg-[#182020] border border-[#253230] rounded-3xl px-8 py-5 flex flex-col items-center shadow-lg w-full max-w-xs">
          <span className="text-5xl font-black font-display text-white tracking-tight">
            {displayValue}
          </span>
        </div>

        {/* Interactive Slider */}
        <div className="w-full max-w-xs flex flex-col gap-2">
          <input
            type="range"
            min={40}
            max={160}
            step={1}
            value={weightKg}
            onChange={(e) => onChangeWeight(Number(e.target.value))}
            className="w-full accent-[#CDFC39] h-2 bg-[#202c2a] rounded-lg appearance-none cursor-pointer"
          />

          <div className="flex justify-between text-[11px] text-gray-500 font-medium px-1">
            <span>50 kg</span>
            <span>70 kg</span>
            <span>90 kg</span>
            <span>110 kg</span>
            <span>130+ kg</span>
          </div>
        </div>

        {/* IMC Live Banner */}
        <div className="w-full bg-[#182020] border border-[#CDFC39]/40 rounded-2xl p-4 flex items-start gap-3 mt-2">
          <div className="w-8 h-8 rounded-xl bg-[#CDFC39]/20 text-[#CDFC39] flex items-center justify-center shrink-0">
            <Flame className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold text-white">
              O seu IMC é de {bmi.toString().replace(".", ",")}.
            </div>
            <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">
              {bmiFeedback}
            </p>
          </div>
        </div>
      </div>
    </StepWrapper>
  );
}
