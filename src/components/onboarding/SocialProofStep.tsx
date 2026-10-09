/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import StepWrapper from "./StepWrapper";
import { Star, Award, CheckCircle } from "lucide-react";

interface SocialProofStepProps {
  progress: number;
  onNext: () => void;
  onBack: () => void;
}

export default function SocialProofStep({
  progress,
  onNext,
  onBack,
}: SocialProofStepProps) {
  const testimonials = [
    {
      name: "Lucas Silva",
      role: "Atleta Titan • 8 meses de app",
      text: "Ganhei 6kg de massa magra e dobrei meu supino em 4 meses. A sobrecarga progressiva automática não te deixa estagnar!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
    },
    {
      name: "Mariana Costa",
      role: "Atleta Titan • 6 meses de app",
      text: "A clareza dos treinos e o registro rápido facilitam tudo na academia cheia. Meus resultados nunca foram tão rápidos!",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    },
  ];

  return (
    <StepWrapper
      progress={progress}
      onBack={onBack}
      title="O Titan é feito para te ajudar a alcançar seus objetivos"
      subtitle="Junte-se a milhares de atletas que transformaram sua rotina e físico."
      bottomButton={{
        label: "PRÓXIMO",
        onClick: onNext,
      }}
    >
      <div className="flex flex-col gap-4 my-auto py-2">
        {/* Rating Banner */}
        <div className="bg-[#182020] border border-[#253230] rounded-3xl p-5 flex flex-col items-center text-center shadow-lg">
          <div className="flex items-center gap-1.5 text-amber-400 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>

          <div className="flex items-baseline gap-1.5 mt-1">
            <span className="text-4xl font-black font-display text-white">4.8</span>
            <span className="text-sm font-bold text-gray-400">/ 5.0</span>
          </div>

          <span className="text-[11px] font-bold text-[#CDFC39] uppercase tracking-widest mt-1">
            +20.000 AVALIAÇÕES REAIS NA LOJA
          </span>
        </div>

        {/* Testimonials List */}
        <div className="flex flex-col gap-3">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#182020] border border-[#253230] rounded-2xl p-4 flex flex-col gap-2.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover ring-1 ring-[#CDFC39]/30"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-sm text-white">{t.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-[#CDFC39]" />
                    </div>
                    <span className="text-[10px] text-gray-400">{t.role}</span>
                  </div>
                </div>

                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-xs text-gray-300 italic leading-relaxed">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </StepWrapper>
  );
}
