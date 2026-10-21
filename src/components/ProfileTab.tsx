/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { User, Award, Zap, Flame, ShieldAlert, BarChart, Settings, Check, Sun, Moon, Monitor, Cloud, LogOut } from "lucide-react";
import { UserProfile, DailyMetrics } from "../types";
import { ThemeMode, ResolvedTheme } from "../hooks/useTheme";
import { authService, TitanUser } from "../services/supabase";
import AuthModal from "./AuthModal";
import LegalModal from "./LegalModal";

interface ProfileTabProps {
  profile: UserProfile;
  metrics: DailyMetrics;
  onUpdateName: (newName: string) => void;
  currentPlan?: "free" | "pro";
  onReplayOnboarding?: () => void;
  theme?: ThemeMode;
  resolvedTheme?: ResolvedTheme;
  systemTheme?: ResolvedTheme;
  onSetTheme?: (theme: ThemeMode) => void;
}

export default function ProfileTab({
  profile,
  metrics,
  onUpdateName,
  currentPlan = "free",
  onReplayOnboarding,
  theme = "system",
  resolvedTheme = "dark",
  systemTheme = "dark",
  onSetTheme,
}: ProfileTabProps) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(profile.name);
  const [currentUser, setCurrentUser] = useState<TitanUser | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [legalDoc, setLegalDoc] = useState<"privacy" | "terms" | null>(null);

  useEffect(() => {
    authService.getCurrentUser().then(setCurrentUser);
  }, []);

  const achievements = [
    { id: "ach-1", title: "Foco Titan", desc: "Mantenha uma racha de 10+ dias", unlocked: profile.streakDays >= 10, icon: Flame, color: "text-orange-400" },
    { id: "ach-2", title: "Gigante do Volume", desc: "Levante um volume acumulado superior a 10 toneladas", unlocked: metrics.totalVolumeTons >= 10, icon: Zap, color: "text-[#CDFC39]" },
    { id: "ach-3", title: "Fiel ao Templo", desc: "Complete seu primeiro treino", unlocked: metrics.activeMinutes > 0, icon: Award, color: "text-[#CDFC39]" },
  ];

  const userLevel = Math.max(1, Math.floor((metrics.activeMinutes / 60) + (profile.streakDays * 0.5) + (metrics.totalVolumeTons * 0.2)));

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempName.trim()) {
      onUpdateName(tempName.trim());
      setIsEditingName(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto px-5 pt-6 pb-24 space-y-6 animate-fade-in font-sans">
      {/* Profile Card Header */}
      <section className="bg-[#182020] border border-[#253230] rounded-3xl p-6 flex flex-col items-center text-center shadow-lg relative overflow-hidden">
        {/* Profile background yellow-green circle glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#CDFC39] opacity-10 rounded-full filter blur-xl"></div>

        <div className="w-24 h-24 rounded-full bg-[#111616] overflow-hidden border-4 border-[#CDFC39] shadow-xl relative group">
          <img
            className="w-full h-full object-cover"
            alt="User large bio"
            src={profile.avatarUrl}
          />
        </div>

        <div className="mt-4 w-full">
          {isEditingName ? (
            <form onSubmit={handleSaveName} className="flex gap-2 justify-center max-w-xs mx-auto">
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                className="bg-[#131a19] border border-[#253230] rounded-xl px-3 py-1.5 text-sm text-white font-bold text-center focus:border-[#CDFC39] focus:outline-none flex-grow"
                autoFocus
              />
              <button
                type="submit"
                className="bg-[#CDFC39] text-black p-2 rounded-xl active:scale-95 transition-all shadow-md shadow-[#CDFC39]/25"
              >
                <Check className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-xl font-black text-white font-display">{profile.name}</h2>
              <button
                onClick={() => setIsEditingName(true)}
                className="text-xs text-gray-500 hover:text-[#CDFC39] transition-colors"
              >
                (editar)
              </button>
            </div>
          )}
          <p className="text-xs font-semibold uppercase tracking-wider mt-1.5 flex items-center justify-center gap-1.5">
            {currentPlan === "pro" ? (
              <span className="bg-[#CDFC39] text-black px-2 py-0.5 rounded text-[10px] font-black">
                TITAN PRO 🔥
              </span>
            ) : (
              <span className="bg-[#1f2a29] text-gray-400 px-2 py-0.5 rounded text-[10px] font-bold border border-[#253230]">
                TITAN FREE
              </span>
            )}
            <span className="text-gray-400">• Nível {userLevel}</span>
          </p>
        </div>

        {/* Dynamic streak box */}
        <div className="mt-5 bg-[#131a19] border border-[#253230] rounded-2xl px-6 py-3 flex items-center gap-3">
          <Flame className="w-6 h-6 text-orange-400 fill-orange-400 animate-pulse" />
          <div className="text-left">
            <span className="text-[10px] text-gray-400 font-bold uppercase block leading-none">
              Consistência
            </span>
            <span className="text-lg font-bold text-white font-sans">
              {profile.streakDays} Dias Seguidos
            </span>
          </div>
        </div>
      </section>

      {/* Level stats */}
      <section className="bg-[#182020] border border-[#253230] rounded-3xl p-5 shadow-lg space-y-4">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider">
          Performance Acumulada
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#131a19] p-3 rounded-2xl border border-[#253230] flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#CDFC39]/15 flex items-center justify-center text-[#CDFC39]">
              <BarChart className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[8px] text-gray-400 uppercase font-bold block">Treino Total</span>
              <span className="text-xs font-bold text-white">{Math.round(metrics.activeMinutes / 60)}h Ativas</span>
            </div>
          </div>

          <div className="bg-[#131a19] p-3 rounded-2xl border border-[#253230] flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#CDFC39]/15 flex items-center justify-center text-[#CDFC39]">
              <Zap className="w-4 h-4 fill-[#CDFC39]/20" />
            </div>
            <div>
              <span className="text-[8px] text-gray-400 uppercase font-bold block">Peso Total</span>
              <span className="text-xs font-bold text-white">{metrics.totalVolumeTons} Tons</span>
            </div>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold text-white uppercase tracking-widest border-l-4 border-l-[#CDFC39] pl-2.5">
          Conquistas Desbloqueadas
        </h3>

        <div className="space-y-2">
          {achievements.map((ach) => {
            const Icon = ach.icon;
            return (
              <div
                key={ach.id}
                className={`p-4 rounded-2xl border flex items-center gap-4 transition-all shadow-sm ${
                  ach.unlocked
                    ? "bg-[#182020] border-[#253230]"
                    : "bg-[#182020]/40 border-dashed border-[#253230] opacity-50"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    ach.unlocked ? "bg-white/5" : "bg-[#131a19]"
                  }`}
                >
                  <Icon className={`w-6 h-6 ${ach.unlocked ? ach.color : "text-gray-600"}`} />
                </div>
                <div className="flex-grow">
                  <h4 className={`text-sm font-bold ${ach.unlocked ? "text-white" : "text-gray-500"}`}>
                    {ach.title}
                  </h4>
                  <p className="text-xs text-gray-400">{ach.desc}</p>
                </div>
                {ach.unlocked && (
                  <span className="text-[10px] bg-[#CDFC39]/15 border border-[#CDFC39]/30 text-[#CDFC39] font-black uppercase tracking-wider px-2 py-0.5 rounded">
                    CONQUISTADO
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Workout Profile & Onboarding Settings */}
      <section className="bg-[#182020] border border-[#253230] rounded-3xl p-5 shadow-lg space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider">
            Perfil de Treino & Inscrição
          </h3>
          {profile.onboarding && (
            <span className="text-[10px] text-[#CDFC39] font-black uppercase px-2 py-0.5 rounded bg-[#CDFC39]/15 border border-[#CDFC39]/30">
              CALIBRADO
            </span>
          )}
        </div>

        {profile.onboarding ? (
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <div className="p-3 bg-[#131a19] rounded-xl border border-[#253230]">
              <span className="text-[10px] text-gray-400 uppercase font-bold block">Objetivo</span>
              <span className="text-xs font-bold text-white capitalize">{profile.onboarding.goal}</span>
            </div>
            <div className="p-3 bg-[#131a19] rounded-xl border border-[#253230]">
              <span className="text-[10px] text-gray-400 uppercase font-bold block">Frequência</span>
              <span className="text-xs font-bold text-[#CDFC39]">{profile.onboarding.frequencyDays} Dias / semana</span>
            </div>
            <div className="p-3 bg-[#131a19] rounded-xl border border-[#253230]">
              <span className="text-[10px] text-gray-400 uppercase font-bold block">Foco Corporal</span>
              <span className="text-xs font-bold text-white capitalize">{profile.onboarding.focusRegion.replace("_", " ")}</span>
            </div>
            <div className="p-3 bg-[#131a19] rounded-xl border border-[#253230]">
              <span className="text-[10px] text-gray-400 uppercase font-bold block">Peso / Meta</span>
              <span className="text-xs font-bold text-white">{profile.onboarding.weightKg}kg → {profile.onboarding.targetWeightKg}kg</span>
            </div>
          </div>
        ) : (
          <p className="text-xs text-gray-400 leading-relaxed">
            Personalize suas preferências, lesões ativas, equipamentos disponíveis e metas de peso.
          </p>
        )}

        {onReplayOnboarding && (
          <button
            type="button"
            onClick={onReplayOnboarding}
            className="w-full mt-2 py-3 px-4 rounded-xl bg-[#1f2a29] hover:bg-[#253230] text-xs font-bold text-gray-200 hover:text-white border border-[#253230] transition-all flex items-center justify-center gap-2"
          >
            <span>Refazer Inscrição / Questionário Inicial</span>
          </button>
        )}
      </section>

      {/* Theme and Appearance Settings */}
      {onSetTheme && (
        <section className="bg-[#182020] border border-[#253230] rounded-3xl p-5 shadow-lg space-y-3.5">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Settings className="w-4 h-4 text-[#CDFC39]" /> Aparência & Preferência de Tema
            </h3>
            <span className="text-[10px] text-gray-400 font-mono">prefers-color-scheme</span>
          </div>

          <div className="grid grid-cols-3 gap-2 bg-[#131a19] p-1.5 rounded-2xl border border-[#253230]">
            <button
              onClick={() => onSetTheme("dark")}
              className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                theme === "dark"
                  ? "bg-[#CDFC39] text-black shadow-md shadow-[#CDFC39]/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Moon className="w-4 h-4 mb-1" />
              <span>Escuro</span>
            </button>

            <button
              onClick={() => onSetTheme("light")}
              className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                theme === "light"
                  ? "bg-[#CDFC39] text-black shadow-md shadow-[#CDFC39]/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Sun className="w-4 h-4 mb-1" />
              <span>Claro</span>
            </button>

            <button
              onClick={() => onSetTheme("system")}
              className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-xl text-xs font-bold transition-all ${
                theme === "system"
                  ? "bg-[#CDFC39] text-black shadow-md shadow-[#CDFC39]/20"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <Monitor className="w-4 h-4 mb-1" />
              <span>Sistema</span>
            </button>
          </div>

          <div className="p-3 bg-[#131a19] rounded-xl border border-[#253230] text-xs text-gray-400 space-y-1">
            <p className="font-medium text-gray-300">
              Estado atual:{" "}
              <strong className="text-[#CDFC39]">
                {theme === "system"
                  ? `Automático (Detectado: ${systemTheme === "dark" ? "Escuro" : "Claro"})`
                  : theme === "light"
                  ? "Modo Claro Ativo"
                  : "Modo Escuro Ativo"}
              </strong>
            </p>
            <p className="text-[11px] leading-relaxed text-gray-400">
              Quando definido como &quot;Sistema&quot;, o app responde instantaneamente às mudanças de modo claro/escuro do seu dispositivo ou navegador.
            </p>
          </div>
        </section>
      )}

      {/* Cloud Account & Backup */}
      <section className="bg-[#182020] border border-[#253230] rounded-3xl p-5 shadow-lg space-y-3.5">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Cloud className="w-4 h-4 text-[#CDFC39]" /> Sincronização & Conta na Nuvem
          </h3>
          <span className="text-[10px] text-[#CDFC39] font-mono bg-[#CDFC39]/15 border border-[#CDFC39]/30 px-2 py-0.5 rounded-full font-bold">
            Supabase
          </span>
        </div>

        {currentUser ? (
          <div className="bg-[#131a19] border border-[#253230] rounded-2xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block">
                  Conta Conectada
                </span>
                <span className="text-sm font-bold text-white">{currentUser.email}</span>
              </div>
              <span className="flex items-center gap-1 text-[11px] text-[#CDFC39] bg-[#CDFC39]/15 px-2.5 py-1 rounded-lg border border-[#CDFC39]/30 font-bold">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                Ativo
              </span>
            </div>

            <button
              onClick={async () => {
                await authService.signOut();
                setCurrentUser(null);
              }}
              className="w-full py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sair da Conta</span>
            </button>
          </div>
        ) : (
          <div className="bg-[#131a19] border border-[#253230] rounded-2xl p-4 space-y-3">
            <p className="text-xs text-gray-300 leading-relaxed">
              Crie ou conecte sua conta para fazer backup automático dos seus treinos, cargas e recordes pessoais na nuvem.
            </p>

            <button
              onClick={() => setShowAuthModal(true)}
              className="w-full py-3 rounded-xl bg-[#CDFC39] hover:bg-[#bbf224] text-black text-xs font-black uppercase tracking-wider transition-all shadow-md shadow-[#CDFC39]/20 flex items-center justify-center gap-2 active:scale-95"
            >
              <Cloud className="w-4 h-4" />
              <span>Entrar ou Criar Conta</span>
            </button>
          </div>
        )}
      </section>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onSuccess={(u) => {
            setCurrentUser(u);
            if (u.name) onUpdateName(u.name);
          }}
        />
      )}

      {/* Legal section */}
      <section className="pt-2 pb-2">
        <div className="flex items-center justify-center gap-4 text-[11px] text-gray-500">
          <button
            type="button"
            onClick={() => setLegalDoc("privacy")}
            className="underline hover:text-gray-300 transition-colors"
          >
            Política de Privacidade
          </button>
          <span>•</span>
          <button
            type="button"
            onClick={() => setLegalDoc("terms")}
            className="underline hover:text-gray-300 transition-colors"
          >
            Termos de Uso
          </button>
        </div>
        <p className="text-center text-[10px] text-gray-600 mt-2">
          Titan-GyM v1.0.0 • suporte@titangym.app
        </p>
      </section>

      {/* Legal Modal */}
      {legalDoc && (
        <LegalModal type={legalDoc} onClose={() => setLegalDoc(null)} />
      )}
    </div>
  );
}
