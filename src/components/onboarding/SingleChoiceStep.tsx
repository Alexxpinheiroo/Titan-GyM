/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import StepWrapper from "./StepWrapper";
import { Check } from "lucide-react";

export interface OptionItem {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  icon?: React.ReactNode;
}

interface SingleChoiceStepProps {
  progress: number;
  title: string;
  subtitle?: string;
  options: OptionItem[];
  selectedValue: string;
  onSelect: (id: string) => void;
  onNext: () => void;
  onBack: () => void;
  footerText?: string;
  buttonLabel?: string;
  autoAdvance?: boolean;
}

export default function SingleChoiceStep({
  progress,
  title,
  subtitle,
  options,
  selectedValue,
  onSelect,
  onNext,
  onBack,
  footerText,
  buttonLabel = "PRÓXIMO",
  autoAdvance = true,
}: SingleChoiceStepProps) {
  const handleItemClick = (id: string) => {
    onSelect(id);
    if (autoAdvance) {
      // Small timeout so user sees selection ripple/highlight
      setTimeout(() => {
        onNext();
      }, 180);
    }
  };

  return (
    <StepWrapper
      progress={progress}
      onBack={onBack}
      title={title}
      subtitle={subtitle}
      bottomButton={{
        label: buttonLabel,
        onClick: onNext,
        disabled: !selectedValue,
      }}
      secondaryBottomAction={
        footerText ? (
          <p className="text-[11px] text-gray-500 text-center leading-tight">
            {footerText}
          </p>
        ) : undefined
      }
    >
      <div className="flex flex-col gap-3 my-auto py-2">
        {options.map((opt) => {
          const isSelected = selectedValue === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => handleItemClick(opt.id)}
              className={`w-full text-left p-4 rounded-2xl border transition-all duration-150 flex items-center justify-between gap-3 active:scale-[0.99] ${
                isSelected
                  ? "bg-[#182020] border-[#CDFC39] text-white shadow-md shadow-[#CDFC39]/10"
                  : "bg-[#182020] border-[#253230] text-gray-300 hover:bg-[#1f2a29] hover:border-gray-600"
              }`}
            >
              <div className="flex items-center gap-3.5 flex-1 min-w-0">
                {opt.icon && (
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? "bg-[#CDFC39]/20 text-[#CDFC39]"
                        : "bg-[#202c2a] text-gray-400"
                    }`}
                  >
                    {opt.icon}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-base text-white tracking-wide truncate">
                      {opt.title}
                    </span>
                    {opt.badge && (
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-[#CDFC39]/20 text-[#CDFC39] border border-[#CDFC39]/40 shrink-0">
                        {opt.badge}
                      </span>
                    )}
                  </div>
                  {opt.subtitle && (
                    <p className="text-xs text-gray-400 mt-0.5 leading-snug">
                      {opt.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                  isSelected
                    ? "bg-[#CDFC39] border-[#CDFC39] text-black"
                    : "border-gray-600 bg-transparent"
                }`}
              >
                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
              </div>
            </button>
          );
        })}
      </div>
    </StepWrapper>
  );
}
