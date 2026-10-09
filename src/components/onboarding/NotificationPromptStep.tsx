/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import StepWrapper from "./StepWrapper";
import { Bell, Flame, Check } from "lucide-react";

interface NotificationPromptStepProps {
  progress: number;
  notificationsEnabled: boolean;
  onToggleNotifications: (enabled: boolean) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function NotificationPromptStep({
  progress,
  notificationsEnabled,
  onToggleNotifications,
  onNext,
  onBack,
}: NotificationPromptStepProps) {
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleChoice = (allow: boolean) => {
    onToggleNotifications(allow);
    setHasInteracted(true);
  };

  return (
    <StepWrapper
      progress={progress}
      onBack={onBack}
      title="Seja lembrado dos seus treinos"
      subtitle="Receba diariamente uma prévia personalizada dos exercícios e metas de carga do dia."
      bottomButton={{
        label: "CONTINUAR",
        onClick: onNext,
      }}
      secondaryBottomAction={
        <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium text-center">
          <Flame className="w-4 h-4 text-orange-400 shrink-0" />
          <span>Quem ativa lembretes treina 3x mais no primeiro mês.</span>
        </div>
      }
    >
      <div className="flex flex-col items-center justify-center my-auto py-6 gap-6">
        {/* Visual Mockup Notification Box */}
        <div className="w-full bg-[#182020] border border-[#253230] rounded-3xl p-6 shadow-2xl flex flex-col items-center text-center relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-[#CDFC39]/15 border border-[#CDFC39]/30 flex items-center justify-center text-[#CDFC39] mb-4 shadow-lg shadow-[#CDFC39]/10">
            <Bell className="w-8 h-8" />
          </div>

          <h3 className="text-lg font-bold text-white leading-snug max-w-xs">
            Permitir que o Titan envie notificações de treino?
          </h3>
          <p className="text-xs text-gray-400 mt-2 max-w-xs">
            Lembretes no horário exato do seu treino, dicas de recuperação e alertas de novos recordes alcançados.
          </p>

          <div className="grid grid-cols-2 gap-3 w-full mt-6">
            <button
              type="button"
              onClick={() => handleChoice(false)}
              className={`py-3 px-4 rounded-xl text-xs font-bold transition-all border ${
                hasInteracted && !notificationsEnabled
                  ? "bg-white/10 text-white border-white/20"
                  : "bg-[#202c2a] text-gray-400 border-white/5 hover:bg-[#283734] hover:text-white"
              }`}
            >
              NÃO AGORA
            </button>

            <button
              type="button"
              onClick={() => handleChoice(true)}
              className={`py-3 px-4 rounded-xl text-xs font-black tracking-wide transition-all shadow-md flex items-center justify-center gap-1.5 ${
                notificationsEnabled
                  ? "bg-[#CDFC39] text-black shadow-[#CDFC39]/30 scale-[1.02]"
                  : "bg-[#CDFC39]/80 hover:bg-[#CDFC39] text-black"
              }`}
            >
              {notificationsEnabled && <Check className="w-4 h-4 stroke-[3]" />}
              <span>PERMITIR</span>
            </button>
          </div>
        </div>
      </div>
    </StepWrapper>
  );
}
