/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import StepWrapper from "./StepWrapper";
import { Plus, Minus } from "lucide-react";

interface AgeStepProps {
  progress: number;
  age: number;
  onChangeAge: (age: number) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function AgeStep({
  progress,
  age,
  onChangeAge,
  onNext,
  onBack,
}: AgeStepProps) {
  const quickAges = [20, 25, 30, 35, 40, 50];

  return (
    <StepWrapper
      progress={progress}
      onBack={onBack}
      title="Qual a sua idade?"
      subtitle="A idade ajuda a calibrar o volume de treino e a recuperação metabólica."
      bottomButton={{
        label: "PRÓXIMO",
        onClick: onNext,
      }}
    >
      <div className="flex flex-col items-center justify-center my-auto py-6 gap-6">
        {/* Big Age Display with Steppers */}
        <div className="flex items-center gap-6 bg-[#182020] border border-[#253230] rounded-3xl p-6 shadow-lg">
          <button
            type="button"
            onClick={() => onChangeAge(Math.max(14, age - 1))}
            className="w-14 h-14 rounded-2xl bg-[#202c2a] hover:bg-[#283734] active:scale-95 text-white flex items-center justify-center transition-all border border-white/5"
            aria-label="Diminuir idade"
          >
            <Minus className="w-6 h-6 text-gray-300" />
          </button>

          <div className="flex flex-col items-center justify-center min-w-[120px]">
            <span className="text-6xl font-black font-display text-white tracking-tight">
              {age}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#CDFC39] font-bold mt-1">
              anos
            </span>
          </div>

          <button
            type="button"
            onClick={() => onChangeAge(Math.min(99, age + 1))}
            className="w-14 h-14 rounded-2xl bg-[#202c2a] hover:bg-[#283734] active:scale-95 text-white flex items-center justify-center transition-all border border-white/5"
            aria-label="Aumentar idade"
          >
            <Plus className="w-6 h-6 text-gray-300" />
          </button>
        </div>

        {/* Quick select pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {quickAges.map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => onChangeAge(val)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                age === val
                  ? "bg-[#CDFC39] text-black"
                  : "bg-[#1f2827] text-gray-400 hover:text-white border border-white/5"
              }`}
            >
              {val} anos
            </button>
          ))}
        </div>
      </div>
    </StepWrapper>
  );
}
