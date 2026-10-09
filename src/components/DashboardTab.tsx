/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Flame, Timer, Dumbbell, TrendingUp, Award, ChevronRight, Play, Plus } from "lucide-react";
import { DailyMetrics, UserProfile } from "../types";
import { titanTips, weeklyVolumeData } from "../data/defaultData";

interface DashboardTabProps {
  metrics: DailyMetrics;
  profile: UserProfile;
  onSelectFocus: (focusName: string) => void;
  onQuickStart: () => void;
}

export default function DashboardTab({
  metrics,
  profile,
  onSelectFocus,
  onQuickStart,
}: DashboardTabProps) {
  const [tipIndex, setTipIndex] = useState(0);

  // Rotate tips
  const handleNextTip = () => {
    setTipIndex((prev) => (prev + 1) % titanTips.length);
  };

  // Convert minutes to active display
  const formatActiveTime = (minutes: number) => {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hrs}h ${mins}m`;
  };

  const focusCards = [
    {
      id: "focus-hipertrofia",
      title: "Hipertrofia",
      tag: "Build Mass",
      desc: "Foco em volume e tensão mecânica para ganho de massa.",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh0KG2Ov9XOfb0xwOyG3s1Y4JYyeg-tsyPHk3MjvnRYV0wQcX24h6cRjERt6tnoUgK449lhHNPeaHoTd9mRdBvTyxtPaPHPfWCHie6O8pjaStLHTdReIeUKbVybw2cQOWRQcda8ju-68seg_RtYSM6JQPHtxCOk9AAY8axMXkmlG4SEoJAA2FfLiXXYYHfsUTE24opJ07s8AUm6rPcqn98y9I37ugaAZCY_wuEMwIQfH-yR2F1TRa2",
    },
    {
      id: "focus-perda-peso",
      title: "Perda de Peso",
      tag: "Burn Fat",
      desc: "Circuitos de alta intensidade para queima calórica máxima.",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAH2MClgytoHmxHnTh_XYbXhDU6oyEoa21vblqHgLa0BPkLy9FinJqkIgZAlyy80hAIpg5NZ6c9oEDjJN9nJzKpfQa4h24lMHWCHoIMSMQB_TpKwdGTbGK7jP12WEOnMENRJVuKCsokqglADulOHQ0IE1dZwwSQF3CyOAYWL7KZpf37WwsxqKpsAax8b-yJUXx30p9EoRVfZTEQ9omyQAwj95ll3DkafOrSIL1c2xxOryZvTcgkS169",
    },
    {
      id: "focus-definicao",
      title: "Definição",
      tag: "Aesthetics",
      desc: "Equilíbrio entre força e resistência para lapidar o físico.",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqjOEvvLPi4XNqZhCrhHNeKXfdIrM_bAMMXKTLzEs9TZlxZJIDwvybu9Nf4iRHBvNRhUpUW5iibFO9RfJKczidNqBf7AR-e6hL57GfF-f05yXPoe5VjLZP8M3YSWGIG9_Gm622BRNds8x_4Vx7zXxhV-BMIQCKi4_AvBrz8-KeWjv8l3d-rnFMVKfbeUrb0AT7USXK5gS1jdSpZJASfywgUaak3rhFheo7yXH6y7ppAIulKnXDQ3eX",
    },
    {
      id: "focus-forca",
      title: "Força",
      tag: "Power",
      desc: "Baixas repetições e cargas extremas para força bruta.",
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2wn3vDV0aGYObI_CM9OYrh1SdwB8Ntn8--Dmrq-g91zrs0tP-21YwFOtp4runZL4h_pv-f7R61HNVMC7810VyyjbqIWZDxAte9uBwdQXxqlOz3p2ZKFNWMPQio9YO28Enn_niVBq8Pz5EsMOhS-5yXHwGUBFZHBgCAyoqkmEsI-_2DgPqwA9ncyoeGJdpxYhSWpKF7QHvsi9BkTVtpQPo5sQE01QQ-WEdf_rYDXLihXvmnGlUQ7r",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-5 pt-6 pb-24 space-y-8 animate-fade-in">
      {/* Welcome Section */}
      <section className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold font-sans text-white leading-tight">
            Olá, {profile.name}.
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Sua jornada para o topo continua hoje. Vamos superar limites?
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-[#CDFC39]/15 px-3 py-1.5 rounded-full border border-[#CDFC39]/30 text-[#CDFC39] text-xs font-bold shadow-md">
          <Flame className="w-4 h-4 fill-[#CDFC39]" />
          <span>Racha de {profile.streakDays} Dias!</span>
        </div>
      </section>

      {/* Activity Overview (Bento style grid) */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Calories Card */}
        <div className="bg-[#182020] p-4 rounded-2xl border border-[#253230] flex flex-col gap-3 group hover:border-[#CDFC39]/40 transition-all shadow-md">
          <div className="w-9 h-9 rounded-xl bg-orange-500/10 flex items-center justify-center">
            <Flame className="w-5 h-5 text-orange-400 fill-orange-400" />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              Calorias
            </p>
            <p className="text-xl font-bold font-sans text-white mt-0.5">
              {metrics.calories.toLocaleString()}{" "}
              <span className="text-xs font-normal text-gray-400">kcal</span>
            </p>
          </div>
        </div>

        {/* Active Time Card */}
        <div className="bg-[#182020] p-4 rounded-2xl border border-[#253230] flex flex-col gap-3 group hover:border-[#CDFC39]/40 transition-all shadow-md">
          <div className="w-9 h-9 rounded-xl bg-[#CDFC39]/10 flex items-center justify-center">
            <Timer className="w-5 h-5 text-[#CDFC39]" />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              Tempo Ativo
            </p>
            <p className="text-xl font-bold font-sans text-white mt-0.5">
              {formatActiveTime(metrics.activeMinutes)}
            </p>
          </div>
        </div>

        {/* Volume Total Card */}
        <div className="bg-[#182020] p-4 rounded-2xl border border-[#253230] flex flex-col gap-3 group hover:border-[#CDFC39]/40 transition-all shadow-md">
          <div className="w-9 h-9 rounded-xl bg-[#CDFC39]/10 flex items-center justify-center">
            <Dumbbell className="w-5 h-5 text-[#CDFC39]" />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              Volume Total
            </p>
            <p className="text-xl font-bold font-sans text-white mt-0.5">
              {metrics.totalVolumeTons.toFixed(1)}{" "}
              <span className="text-xs font-normal text-gray-400">tons</span>
            </p>
          </div>
        </div>

        {/* Weekly Score Card */}
        <div className="bg-[#182020] p-4 rounded-2xl border border-[#253230] border-l-4 border-l-[#CDFC39] flex flex-col gap-3 group hover:border-[#CDFC39]/40 transition-all shadow-md">
          <div className="w-9 h-9 rounded-xl bg-[#CDFC39]/10 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-[#CDFC39]" />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold text-[#CDFC39]">
              Score Semanal
            </p>
            <p className="text-xl font-bold font-sans text-[#CDFC39] mt-0.5">
              +{metrics.weeklyScorePercent}%
            </p>
          </div>
        </div>
      </section>

      {/* Focus Selection Section */}
      <section>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-lg font-bold font-sans text-white uppercase tracking-wider">
            Qual o foco hoje?
          </h2>
          <button
            onClick={() => onSelectFocus("Hipertrofia")}
            className="text-xs font-bold text-[#CDFC39] hover:underline flex items-center gap-0.5"
          >
            Ver todos <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {focusCards.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectFocus(card.title)}
              className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer bento-card border border-[#253230] bg-[#182020] transition-all hover:scale-[1.02] hover:border-[#CDFC39]/40 shadow-lg"
            >
              {/* Background Cover Image with Zoom Effect */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url('${card.imgUrl}')` }}
              ></div>

              {/* Gradient Mask Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111616] via-[#111616]/40 to-transparent"></div>

              {/* Text Area */}
              <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col justify-end">
                <span className="text-[10px] text-[#CDFC39] font-black uppercase tracking-widest mb-0.5">
                  {card.tag}
                </span>
                <h3 className="text-lg font-bold text-white mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {card.desc}
                </p>

                {/* Instant Play Button */}
                <div className="mt-3 self-start flex items-center justify-center w-8 h-8 rounded-full bg-[#CDFC39] text-black opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 shadow-md shadow-[#CDFC39]/25">
                  <Play className="w-4 h-4 fill-black text-black ml-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Section with Volume Bar Chart & Titan Tips */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Bar Chart Container */}
        <div className="lg:col-span-2 bg-[#182020] border border-[#253230] rounded-2xl p-5 shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-md font-bold font-sans text-white uppercase tracking-wider">
              Volume Semanal
            </h3>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#CDFC39]"></span>
              <span className="text-xs text-gray-400">Atividade Atual</span>
            </div>
          </div>

          {/* Interactive HTML Bar Chart */}
          <div className="h-44 flex items-end justify-between gap-3 mt-2">
            {weeklyVolumeData.labels.map((day, idx) => {
              const prevVal = weeklyVolumeData.prevWeek[idx];
              const curVal = weeklyVolumeData.currentWeek[idx];
              const isToday = idx === weeklyVolumeData.currentDayIndex;

              return (
                <div key={`day-${idx}-${day}`} className="flex-1 flex flex-col items-center h-full group cursor-pointer">
                  <div className="flex-grow flex items-end w-full gap-1 min-h-[120px]">
                    {/* Previous Week Bar */}
                    <div
                      className="w-1/2 bg-gray-700/30 group-hover:bg-gray-700/50 rounded-t-sm transition-all"
                      style={{ height: `${prevVal}%` }}
                      title={`Volume anterior: ${prevVal}%`}
                    ></div>
                    {/* Current Week Bar */}
                    <div
                      className={`w-1/2 rounded-t-sm transition-all ${
                        isToday
                          ? "bg-[#CDFC39] shadow-lg shadow-[#CDFC39]/20"
                          : "bg-gray-600 group-hover:bg-gray-500"
                      }`}
                      style={{ height: `${curVal}%` }}
                      title={`Volume atual: ${curVal}%`}
                    ></div>
                  </div>
                  <span className={`text-[10px] font-bold mt-2 ${isToday ? "text-[#CDFC39]" : "text-gray-500"}`}>
                    {day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Rotating Tips Box */}
        <div
          onClick={handleNextTip}
          className="bg-[#182020] border border-[#253230] rounded-2xl p-5 shadow-lg flex flex-col justify-between cursor-pointer group hover:border-[#CDFC39]/40 transition-all relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-3 text-[10px] text-[#CDFC39] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
            DICA #0{tipIndex + 1}
          </div>
          <div>
            <h3 className="text-[#CDFC39] text-sm font-black italic tracking-wider mb-3">
              TITAN TIP
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed italic transition-all">
              "{titanTips[tipIndex]}"
            </p>
          </div>
          <div className="mt-4 pt-4 border-t border-[#253230] flex items-center gap-2.5 text-[#CDFC39]">
            <Award className="w-5 h-5 fill-[#CDFC39]/15" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Próxima recomendação
            </span>
          </div>
        </div>
      </section>

      {/* Floating Action Button for Quick Workout launch */}
      <button
        onClick={onQuickStart}
        className="fixed right-6 bottom-24 w-14 h-14 bg-[#CDFC39] text-black rounded-2xl flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all z-30 shadow-[#CDFC39]/25 hover:bg-[#bbf224]"
        title="Iniciar Treino Rápido"
        id="fab-quick-start"
      >
        <Plus className="w-8 h-8 stroke-[3]" />
      </button>
    </div>
  );
}
