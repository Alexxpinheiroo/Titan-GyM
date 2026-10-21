/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { X, Mail, Lock, User, Loader2, CheckCircle2, AlertCircle, Cloud } from "lucide-react";
import { authService, TitanUser } from "../services/supabase";

interface AuthModalProps {
  onClose: () => void;
  onSuccess: (user: TitanUser) => void;
}

export default function AuthModal({ onClose, onSuccess }: AuthModalProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!email || !password) {
      setErrorMsg("Preencha todos os campos obrigatórios.");
      return;
    }

    setLoading(true);

    try {
      if (isSignUp) {
        const { user, error } = await authService.signUpWithEmail(email, password, name || "Guerreiro");
        if (error) {
          setErrorMsg(error.message || "Erro ao cadastrar. Tente novamente.");
        } else if (user) {
          onSuccess({
            id: user.id,
            email: user.email,
            name: name || "Guerreiro",
            isPro: false,
          });
          onClose();
        }
      } else {
        const { user, error } = await authService.signInWithEmail(email, password);
        if (error) {
          setErrorMsg(error.message || "E-mail ou senha incorretos.");
        } else if (user) {
          const uAny = user as any;
          onSuccess({
            id: user.id,
            email: user.email,
            name: uAny.name || uAny.user_metadata?.name || email.split("@")[0],
            isPro: Boolean(uAny.isPro),
          });
          onClose();
        }
      }
    } catch {
      setErrorMsg("Ocorreu um erro inesperado ao conectar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in font-sans"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm bg-[#141b1a] border border-[#253230] rounded-3xl p-6 shadow-2xl flex flex-col space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#CDFC39]/15 border border-[#CDFC39]/30 flex items-center justify-center text-[#CDFC39]">
              <Cloud className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display">
                {isSignUp ? "Criar Conta Titan" : "Entrar na Conta"}
              </h3>
              <p className="text-[10px] text-gray-400">
                Backup e sincronização na nuvem
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#182020] border border-[#253230] text-gray-400 hover:text-white flex items-center justify-center transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Error notification */}
        {errorMsg && (
          <div className="bg-red-500/15 border border-red-500/30 rounded-xl p-3 text-xs text-red-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {isSignUp && (
            <div className="space-y-1">
              <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                Nome ou Apelido
              </label>
              <div className="relative flex items-center">
                <User className="w-4 h-4 text-gray-500 absolute left-3" />
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#182020] border border-[#253230] rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#CDFC39]"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
              E-mail
            </label>
            <div className="relative flex items-center">
              <Mail className="w-4 h-4 text-gray-500 absolute left-3" />
              <input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#182020] border border-[#253230] rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#CDFC39]"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
              Senha
            </label>
            <div className="relative flex items-center">
              <Lock className="w-4 h-4 text-gray-500 absolute left-3" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full bg-[#182020] border border-[#253230] rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#CDFC39]"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#CDFC39] hover:bg-[#bbf224] text-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#CDFC39]/20 flex items-center justify-center gap-2 mt-2 active:scale-98"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>CONECTANDO...</span>
              </>
            ) : isSignUp ? (
              <span>CRIAR CONTA & SINCRONIZAR</span>
            ) : (
              <span>ENTRAR NA CONTA</span>
            )}
          </button>
        </form>

        {/* Toggle Sign Up / Sign In */}
        <div className="text-center pt-2 border-t border-[#253230]">
          <button
            type="button"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setErrorMsg(null);
            }}
            className="text-xs text-gray-400 hover:text-[#CDFC39] transition-colors"
          >
            {isSignUp
              ? "Já tem uma conta? Clique para entrar"
              : "Ainda não tem conta? Clique para cadastrar"}
          </button>
        </div>
      </div>
    </div>
  );
}
