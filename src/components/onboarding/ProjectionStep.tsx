/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from "react";
import StepWrapper from "./StepWrapper";
import { Sparkles, Calendar, ArrowUpRight, ArrowDownRight } from "lucide-react";

interface ProjectionStepProps {
  progress: number;
  currentWeightKg: number;
  targetWeightKg: number;
  onNext: () => void;
  onBack: () => void;
}

export default function ProjectionStep({
  progress,
  currentWeightKg,
  targetWeightKg,
  onNext,
  onBack,
}: ProjectionStepProps) {
  // Compute projected target date (~8-12 weeks from today)
  const targetDateFormatted = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 75); // ~2.5 months
    return d.toLocaleDateString("pt-BR", { day: "numeric", month: "long" });
  }, []);

  const isGaining = targetWeightKg > currentWeightKg;
  const isLosing = targetWeightKg < currentWeightKg;

  // Generate SVG curve points
  // Width 300, Height 140
  // Start: (20, Y1), Control: (150, Ymid), End: (280, Y2)
  const startY = isGaining ? 110 : isLosing ? 35 : 70;
  const endY = isGaining ? 35 : isLosing ? 110 : 70;
  const controlX = 150;
  const controlY = isGaining ? 65 : isLosing ? 80 : 70;

  const pathD = `M 30 ${startY} Q ${controlX} ${controlY} 270 ${endY}`;
  const fillD = `M 30 ${startY} Q ${controlX} ${controlY} 270 ${endY} L 270 135 L 30 135 Z`;

  return (
    <StepWrapper
      progress={progress}
      onBack={onBack}
      title={`Prevemos que você alcançará ${targetWeightKg} kg até ${targetDateFormatted}`}
      subtitle="Com adesão de 85%+ ao plano de treinos e sobrecarga progressiva."
      bottomButton={{
        label: "PRÓXIMO",
        onClick: onNext,
      }}
    >
      <div className="flex flex-col gap-4 my-auto py-2">
        {/* Projection Chart Container */}
        <div className="bg-[#182020] border border-[#253230] rounded-3xl p-5 shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400">
              <Calendar className="w-3.5 h-3.5 text-[#CDFC39]" />
              <span>Projeção de 10 Semanas</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-black text-[#CDFC39] bg-[#CDFC39]/15 px-2.5 py-1 rounded-full border border-[#CDFC39]/30">
              {isGaining ? (
                <>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>Hipertrofia</span>
                </>
              ) : isLosing ? (
                <>
                  <ArrowDownRight className="w-3.5 h-3.5" />
                  <span>Definição</span>
                </>
              ) : (
                <span>Manutenção</span>
              )}
            </div>
          </div>

          {/* SVG Graph */}
          <div className="relative w-full h-44 my-2">
            <svg viewBox="0 0 300 140" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#CDFC39" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#CDFC39" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="30" y1="35" x2="270" y2="35" stroke="#253230" strokeDasharray="3 3" />
              <line x1="30" y1="70" x2="270" y2="70" stroke="#253230" strokeDasharray="3 3" />
              <line x1="30" y1="110" x2="270" y2="110" stroke="#253230" strokeDasharray="3 3" />

              {/* Area Fill */}
              <path d={fillD} fill="url(#curveGradient)" />

              {/* Curve Stroke */}
              <path d={pathD} fill="none" stroke="#CDFC39" strokeWidth="3.5" strokeLinecap="round" />

              {/* Start Point */}
              <circle cx="30" cy={startY} r="5" fill="#182020" stroke="#CDFC39" strokeWidth="3" />

              {/* End Point / Pulse */}
              <circle cx="270" cy={endY} r="9" fill="#CDFC39" fillOpacity="0.25" className="animate-ping" />
              <circle cx="270" cy={endY} r="6" fill="#CDFC39" stroke="#ffffff" strokeWidth="2.5" />

              {/* Labels on chart */}
              <text x="30" y={startY > 70 ? startY - 12 : startY + 20} fill="#9ca3af" fontSize="10" fontWeight="bold" textAnchor="middle">
                {currentWeightKg} kg
              </text>
              <text x="270" y={endY > 70 ? endY - 12 : endY + 20} fill="#CDFC39" fontSize="12" fontWeight="900" textAnchor="middle">
                {targetWeightKg} kg ★
              </text>
            </svg>
          </div>

          {/* Time axis */}
          <div className="flex justify-between text-[11px] text-gray-500 font-semibold px-4 pt-1 border-t border-white/5">
            <span>Hoje</span>
            <span>Semana 4</span>
            <span>Semana 8</span>
            <span className="text-[#CDFC39] font-bold">Meta</span>
          </div>
        </div>

        {/* Insight Box */}
        <div className="bg-[#182020] border border-[#CDFC39]/30 rounded-2xl p-4 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-[#CDFC39] shrink-0 mt-0.5" />
          <p className="text-xs text-gray-200 leading-relaxed">
            Progresso sólido pela frente! Ganhar massa muscular magra aumenta a taxa metabólica basal, melhora a sensibilidade à insulina e proporciona máxima densidade física.
          </p>
        </div>
      </div>
    </StepWrapper>
  );
}
