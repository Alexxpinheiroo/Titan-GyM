/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import StepWrapper from "./StepWrapper";
import { Zap, Target, Award, ArrowRight } from "lucide-react";

interface FitnessScoreStepProps {
  progress: number;
  userExperience: string;
  userGoal: string;
  frequencyDays: number;
  onNext: () => void;
  onBack: () => void;
}

export default function FitnessScoreStep({
  progress,
  userExperience,
  userGoal,
  frequencyDays,
  onNext,
  onBack,
}: FitnessScoreStepProps) {
  const metrics = [
    { label: "Força Muscular", level: "Alto", percent: 78 },
    { label: "Consistência de Treino", level: "Médio", percent: 62 },
    { label: "Capacidade Recuperativa", level: "Alto", percent: 84 },
    { label: "Alinhamento de Metas", level: "Excelente", percent: 90 },
  ];

  return (
    <StepWrapper
      progress={progress}
      onBack={onBack}
      title="Intenção é o que te separa do seu objetivo!"
      subtitle="Calculamos seu índice inicial de aptidão e o potencial de ganho para as próximas 8 semanas."
      bottomButton={{
        label: "CRIAR MEU PLANO",
        onClick: onNext,
      }}
    >
      <div className="flex flex-col gap-4 my-auto py-2">
        {/* Score Card */}
        <div className="bg-[#182020] border border-[#253230] rounded-3xl p-5 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#CDFC39]">
                SCORE INICIAL DE APTIDÃO
              </span>
              <div className="text-3xl font-black font-display text-white mt-0.5">
                63 <span className="text-sm font-semibold text-gray-400">/ 100</span>
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-1 text-xs font-bold text-[#CDFC39]">
                <span>63 Hoje</span>
                <ArrowRight className="w-3.5 h-3.5" />
                <span className="text-[#CDFC39] font-extrabold">92</span>
              </div>
              <span className="text-[10px] text-gray-400">Em 8 semanas</span>
            </div>
          </div>

          <p className="text-xs text-gray-300 my-3 leading-relaxed">
            Você tem excelente base para evolução rápida. Com o controle de progressão Titan, destravaremos seu pico de força.
          </p>

          {/* Metric Bars */}
          <div className="flex flex-col gap-2.5 pt-1">
            {metrics.map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <div className="flex justify-between text-[11px] font-semibold">
                  <span className="text-gray-300">{m.label}</span>
                  <span className="text-[#CDFC39] font-bold">{m.level}</span>
                </div>
                <div className="w-full bg-[#202928] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#CDFC39] h-full rounded-full transition-all duration-500"
                    style={{ width: `${m.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Chips */}
        <div className="bg-[#182020] border border-[#CDFC39]/30 rounded-2xl p-4 flex flex-col gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#CDFC39]">
            CONFIGURAÇÃO DO PLANO
          </span>
          <div className="flex flex-wrap gap-2 mt-1">
            <span className="px-3 py-1 rounded-xl bg-black/40 text-xs font-bold text-white border border-white/10 capitalize">
              Nível: {userExperience || "Intermediário"}
            </span>
            <span className="px-3 py-1 rounded-xl bg-black/40 text-xs font-bold text-white border border-white/10 capitalize">
              Foco: {userGoal || "Hipertrofia"}
            </span>
            <span className="px-3 py-1 rounded-xl bg-black/40 text-xs font-bold text-[#CDFC39] border border-[#CDFC39]/30">
              {frequencyDays} Dias / semana
            </span>
          </div>
        </div>
      </div>
    </StepWrapper>
  );
}
