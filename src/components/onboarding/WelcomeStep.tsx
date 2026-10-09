/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Dumbbell, ShieldCheck, Zap } from "lucide-react";

interface WelcomeStepProps {
  onStart: () => void;
  onAlreadyHaveAccount: () => void;
}

export default function WelcomeStep({ onStart, onAlreadyHaveAccount }: WelcomeStepProps) {
  return (
    <div className="min-h-screen bg-[#0d1212] text-white flex flex-col justify-between max-w-md mx-auto relative overflow-hidden px-6 py-8 select-none">
      {/* Background ambient lighting and imagery */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1212] via-[#0d1212]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1212]/70 via-transparent to-[#0d1212]" />

      {/* Top Brand Header */}
      <div className="relative z-10 pt-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-[#CDFC39]/15 border border-[#CDFC39]/30 flex items-center justify-center text-[#CDFC39] shadow-lg shadow-[#CDFC39]/10">
            <Dumbbell className="w-5 h-5" />
          </div>
          <div>
            <span className="font-display font-black text-xl tracking-wider text-white">TITAN</span>
            <span className="ml-1 text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#CDFC39] text-black tracking-widest uppercase">GYM</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-[#CDFC39] font-medium px-2.5 py-1 rounded-full bg-[#182020] border border-[#CDFC39]/20">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Método Comprovado</span>
        </div>
      </div>

      {/* Center Hero Message */}
      <div className="relative z-10 my-auto py-10 flex flex-col">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#CDFC39] tracking-widest uppercase mb-3">
          <Zap className="w-4 h-4 fill-[#CDFC39]" />
          <span>Progressão Real de Carga</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-display tracking-tight">
          Veja resultados mensuráveis semana a semana.
        </h1>

        <p className="text-gray-300 text-base mt-4 leading-relaxed max-w-sm">
          Acompanhe seus recordes, evolução de cargas e histórico completo de exercícios para superar seus limites a cada treino.
        </p>

        {/* Quick highlight metrics */}
        <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-white/10">
          <div>
            <div className="text-xl font-black text-white font-display">+3x</div>
            <div className="text-[11px] text-gray-400 font-medium leading-tight mt-0.5">Mais força e volume</div>
          </div>
          <div>
            <div className="text-xl font-black text-[#CDFC39] font-display">100%</div>
            <div className="text-[11px] text-gray-400 font-medium leading-tight mt-0.5">Adaptado a você</div>
          </div>
          <div>
            <div className="text-xl font-black text-white font-display">4.8 ★</div>
            <div className="text-[11px] text-gray-400 font-medium leading-tight mt-0.5">+20 mil atletas</div>
          </div>
        </div>
      </div>

      {/* Bottom Action Area */}
      <div className="relative z-10 flex flex-col gap-3 pt-4">
        <button
          type="button"
          onClick={onStart}
          className="w-full py-4 px-6 rounded-2xl bg-[#CDFC39] hover:bg-[#bbf224] text-black font-extrabold text-lg tracking-wide shadow-xl shadow-[#CDFC39]/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          <span>COMEÇAR</span>
        </button>

        <button
          type="button"
          onClick={onAlreadyHaveAccount}
          className="w-full py-3.5 px-6 rounded-2xl bg-[#1a2322]/80 hover:bg-[#202b29] text-gray-200 hover:text-white font-bold text-sm tracking-wider uppercase border border-white/10 active:scale-[0.98] transition-all"
        >
          EU JÁ TENHO UMA CONTA
        </button>

        <p className="text-[11px] text-gray-400 text-center mt-2">
          Leva menos de 2 minutos para montar seu plano ideal.
        </p>
      </div>
    </div>
  );
}
