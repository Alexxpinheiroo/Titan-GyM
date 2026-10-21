/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Settings, RefreshCw, X, Award, Flame, Zap, Sun, Moon, Monitor } from "lucide-react";
import { UserProfile } from "../types";
import { ThemeMode, ResolvedTheme } from "../hooks/useTheme";

interface HeaderProps {
  profile: UserProfile;
  onResetData: () => void;
  onGoToHome?: () => void;
  theme?: ThemeMode;
  resolvedTheme?: ResolvedTheme;
  systemTheme?: ResolvedTheme;
  onSetTheme?: (theme: ThemeMode) => void;
  onToggleTheme?: () => void;
}

export default function Header({
  profile,
  onResetData,
  onGoToHome,
  theme = "system",
  resolvedTheme = "dark",
  systemTheme = "dark",
  onSetTheme,
  onToggleTheme,
}: HeaderProps) {
  const [showSettings, setShowSettings] = useState(false);
  const [confirmReset, setConfirmReset] = useState(false);

  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-[#111616]/95 backdrop-blur-md border-b border-[#253230] flex justify-between items-center px-4 sm:px-6 pt-safe min-h-16 transition-colors">
        <div 
          onClick={onGoToHome}
          className="flex items-center gap-3 cursor-pointer group hover:opacity-90 select-none"
          title="Ir para o Início"
          id="header-logo-container"
        >
          <img
            alt="Titan Gym Logo"
            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform rounded-xl"
            src="/icon-192.png"
          />
          <span className="font-sans text-[22px] sm:text-[24px] font-black tracking-tighter text-white group-hover:text-[#CDFC39] transition-colors">
            TITAN GYM
          </span>
        </div>

        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Quick theme toggle button */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className="w-9 h-9 rounded-xl bg-[#182020] border border-[#253230] hover:border-[#CDFC39]/50 flex items-center justify-center text-gray-300 hover:text-white transition-all active:scale-95 shadow-sm"
              title={`Alternar tema (Atual: ${theme === "system" ? `Sistema - ${resolvedTheme}` : theme}). Clique para alternar.`}
              id="btn-quick-theme-toggle"
            >
              {resolvedTheme === "dark" ? (
                <Moon className="w-4 h-4 text-[#CDFC39]" />
              ) : (
                <Sun className="w-4 h-4 text-amber-500" />
              )}
            </button>
          )}

          {/* Settings button */}
          <button
            onClick={() => setShowSettings(true)}
            className="w-9 h-9 rounded-xl bg-[#182020] border border-[#253230] hover:border-[#CDFC39]/50 flex items-center justify-center text-gray-400 hover:text-[#CDFC39] transition-all active:scale-95 shadow-sm"
            title="Configurações & Tema"
            id="btn-settings"
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* Profile Avatar */}
          <div className="w-8 h-8 rounded-full bg-[#182020] overflow-hidden border-2 border-[#CDFC39] shrink-0">
            <img
              className="w-full h-full object-cover"
              alt="Avatar do Usuário"
              src={profile.avatarUrl}
            />
          </div>
        </div>
      </header>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-[#182020] border border-[#253230] rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-[#253230] flex justify-between items-center bg-[#1f2b29]">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Settings className="w-4 h-4 text-[#CDFC39]" /> Configurações do Titan
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-5 space-y-5">
              {/* User greeting */}
              <div className="bg-[#131a19] border border-[#253230] p-3.5 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#CDFC39] shrink-0">
                  <img src={profile.avatarUrl} alt="User" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Olá, {profile.name}!</h4>
                  <p className="text-xs text-[#CDFC39] font-semibold">Atleta Nível Titan</p>
                </div>
              </div>

              {/* Theme Preference Selector */}
              {onSetTheme && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label className="text-xs text-gray-400 uppercase font-bold tracking-widest">
                      Aparência & Tema
                    </label>
                    <span className="text-[10px] text-gray-400 font-mono">
                      prefers-color-scheme
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 bg-[#131a19] p-1.5 rounded-2xl border border-[#253230]">
                    <button
                      onClick={() => onSetTheme("dark")}
                      className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-xs font-bold transition-all ${
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
                      className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-xs font-bold transition-all ${
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
                      className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-xs font-bold transition-all ${
                        theme === "system"
                          ? "bg-[#CDFC39] text-black shadow-md shadow-[#CDFC39]/20"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <Monitor className="w-4 h-4 mb-1" />
                      <span>Sistema</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-gray-400 px-1 leading-relaxed">
                    {theme === "system"
                      ? `Detectando automaticamente o sistema (${systemTheme === "dark" ? "Modo Escuro" : "Modo Claro"}).`
                      : theme === "light"
                      ? "Tema Claro opcional ativado, mantendo a identidade e contraste Titan."
                      : "Tema Escuro clássico Titan Gym ativado."}
                  </p>
                </div>
              )}

              {/* Reset App State */}
              <div className="space-y-2 pt-2 border-t border-[#253230]">
                <label className="text-xs text-gray-400 uppercase font-bold tracking-widest block">
                  Restaurar App
                </label>
                {confirmReset ? (
                  <div className="space-y-2 bg-[#131a19] p-3 rounded-xl border border-red-500/30">
                    <p className="text-xs text-red-400">
                      Tem certeza? Todos os registros e treinos salvos serão redefinidos.
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setConfirmReset(false)}
                        className="flex-1 bg-[#253230] hover:bg-[#324341] text-gray-300 py-2 rounded-lg text-xs font-bold"
                      >
                        Cancelar
                      </button>
                      <button
                        onClick={() => {
                          onResetData();
                          setConfirmReset(false);
                          setShowSettings(false);
                        }}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-xs font-bold"
                      >
                        Confirmar
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setConfirmReset(true)}
                    className="w-full bg-[#131a19] hover:bg-[#CDFC39] hover:text-black border border-[#253230] transition-all p-3 rounded-xl flex items-center justify-center gap-2 text-xs text-gray-300 hover:border-[#CDFC39] font-semibold"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Restaurar Dados Originais
                  </button>
                )}
              </div>

              <div className="border-t border-[#253230] pt-3 text-center">
                <p className="text-[10px] text-gray-500 font-mono">
                  TITAN GYM • PREFERS-COLOR-SCHEME SYSTEM
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
