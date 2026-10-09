/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ChevronLeft } from "lucide-react";

interface StepWrapperProps {
  progress?: number; // 0 to 1
  canGoBack?: boolean;
  onBack?: () => void;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  bottomButton?: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: "primary" | "secondary";
  };
  secondaryBottomAction?: React.ReactNode;
  hideTopNav?: boolean;
  className?: string;
  contentClassName?: string;
}

export default function StepWrapper({
  progress = 0,
  canGoBack = true,
  onBack,
  title,
  subtitle,
  children,
  bottomButton,
  secondaryBottomAction,
  hideTopNav = false,
  className = "",
  contentClassName = "",
}: StepWrapperProps) {
  return (
    <div className={`min-h-screen bg-[#111616] text-[#e8f0ef] flex flex-col justify-between max-w-md mx-auto relative px-5 py-5 antialiased select-none ${className}`}>
      {/* Top Header & Progress bar */}
      {!hideTopNav && (
        <header className="w-full pt-2 pb-4 flex flex-col gap-3">
          <div className="flex items-center justify-between min-h-[36px]">
            {canGoBack && onBack ? (
              <button
                type="button"
                onClick={onBack}
                aria-label="Voltar"
                className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 active:scale-95 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            ) : (
              <div className="w-10" />
            )}

            <div className="flex-1 px-2">
              <div className="w-full bg-[#202928] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#CDFC39] h-full rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${Math.max(5, Math.min(100, Math.round(progress * 100)))}%` }}
                />
              </div>
            </div>

            <div className="w-10 flex justify-end text-xs font-semibold text-gray-400">
              {Math.round(progress * 100)}%
            </div>
          </div>
        </header>
      )}

      {/* Main Body */}
      <div className="flex-1 flex flex-col w-full">
        {title && (
          <div className="mb-6 pt-1">
            <h1 className="text-2xl sm:text-[28px] font-extrabold text-white leading-tight font-display tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm text-gray-300 mt-2 font-normal leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <div className={`flex-1 flex flex-col ${contentClassName || "justify-center"}`}>
          {children}
        </div>
      </div>

      {/* Sticky Bottom Actions */}
      <div className="w-full pt-6 pb-2 mt-auto flex flex-col gap-3">
        {bottomButton && (
          <button
            type="button"
            disabled={bottomButton.disabled}
            onClick={bottomButton.onClick}
            className={`w-full py-4 px-6 rounded-2xl font-black tracking-wide text-base transition-all duration-150 active:scale-[0.98] shadow-lg flex items-center justify-center gap-2 ${
              bottomButton.variant === "secondary"
                ? "bg-[#202928] text-gray-200 hover:bg-[#2a3635] border border-white/10"
                : bottomButton.disabled
                ? "bg-gray-800 text-gray-500 cursor-not-allowed shadow-none"
                : "bg-[#CDFC39] hover:bg-[#bbf224] text-black font-extrabold shadow-[#CDFC39]/20"
            }`}
          >
            {bottomButton.label}
          </button>
        )}

        {secondaryBottomAction && (
          <div className="w-full flex justify-center">
            {secondaryBottomAction}
          </div>
        )}
      </div>
    </div>
  );
}
