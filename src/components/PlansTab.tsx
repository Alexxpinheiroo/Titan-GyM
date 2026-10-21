/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Check, X, Star, BarChart2, Award, Share2, EyeOff, Rocket, Trophy, Loader2, RotateCcw, ShieldCheck, Zap } from "lucide-react";
import { billingService } from "../services/billing";
import LegalModal from "./LegalModal";

interface PlansTabProps {
  currentPlan: "free" | "pro";
  onSelectPlan: (plan: "free" | "pro") => void;
}

export default function PlansTab({ currentPlan, onSelectPlan }: PlansTabProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [selectedBillingCycle, setSelectedBillingCycle] = useState<"annual" | "monthly">("annual");
  const [legalDoc, setLegalDoc] = useState<"privacy" | "terms" | null>(null);

  const handleUpgrade = async () => {
    if (currentPlan === "pro") return;
    setIsProcessing(true);
    setFeedback(null);
    try {
      const res = await billingService.purchasePlan(selectedBillingCycle);
      if (res.success) {
        onSelectPlan("pro");
        setFeedback(`🎉 Parabéns! Titan PRO ${selectedBillingCycle === "annual" ? "Anual" : "Mensal"} ativado!`);
      } else if (res.error) {
        setFeedback(res.error);
      }
    } catch {
      setFeedback("Erro ao processar compra. Tente novamente.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRestore = async () => {
    setIsProcessing(true);
    setFeedback("Buscando assinaturas...");
    try {
      const res = await billingService.restorePurchases();
      if (res.isPro) {
        onSelectPlan("pro");
        setFeedback("✓ Assinatura restaurada com sucesso!");
      } else {
        setFeedback("Nenhuma assinatura encontrada nesta conta.");
      }
    } catch {
      setFeedback("Erro ao restaurar compras.");
    } finally {
      setIsProcessing(false);
    }
  };
  const freeBenefits = [
    { text: "Acesso básico à academia", included: true },
    { text: "Planos A/B padrão", included: true },
    { text: "Rastreamento simples", included: true },
    { text: "Contém anúncios", included: false },
  ];

  const proBenefits = [
    { text: "Rotinas exclusivas A/B/C/D", icon: Star, color: "text-[#CDFC39]" },
    { text: "Analytics avançado de carga", icon: BarChart2, color: "text-[#CDFC39]" },
    { text: "Animações de conquista", icon: Trophy, color: "text-[#CDFC39]" },
    { text: "Relatórios compartilháveis", icon: Share2, color: "text-[#CDFC39]" },
    { text: "Experiência sem anúncios", icon: EyeOff, color: "text-[#CDFC39]" },
    { text: "Acesso antecipado a recursos", icon: Rocket, color: "text-[#CDFC39]" },
  ];

  return (
    <div className="w-full max-w-lg mx-auto px-5 pt-6 pb-24 space-y-8 animate-fade-in font-sans">
      {/* Title Header */}
      <section className="text-center space-y-2 py-4">
        <h1 className="text-3xl sm:text-4xl font-extrabold italic tracking-tight text-white font-display uppercase">
          SUPERE SEUS LIMITES
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm max-w-xs mx-auto leading-relaxed">
          Escolha o combustível certo para sua jornada de transformação.
        </p>
      </section>

      {/* Plans List */}
      <div className="space-y-6">
        {/* Plan Titan Free */}
        <div className={`bg-[#182020] border rounded-3xl p-6 relative overflow-hidden transition-all shadow-xl ${
          currentPlan === "free" ? "border-[#CDFC39]/40 shadow-[#CDFC39]/5" : "border-[#253230]"
        }`}>
          {currentPlan === "free" && (
            <div className="absolute top-0 right-0 bg-[#CDFC39] text-black text-[9px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              Ativo
            </div>
          )}

          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-black text-white font-display">Titan Free</h2>
              <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-0.5">
                BASE DE TREINO
              </p>
            </div>
            <div className="text-right">
              <span className="text-3xl font-black text-white font-display">R$0</span>
            </div>
          </div>

          <ul className="space-y-3.5 mb-8">
            {freeBenefits.map((benefit, i) => (
              <li key={i} className={`flex items-center gap-3 text-sm ${benefit.included ? "text-gray-300" : "text-gray-500"}`}>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  benefit.included ? "bg-[#CDFC39]/15 text-[#CDFC39]" : "bg-white/5 text-gray-600"
                }`}>
                  {benefit.included ? (
                    <Check className="w-3 h-3 stroke-[3]" />
                  ) : (
                    <X className="w-3 h-3 stroke-[3]" />
                  )}
                </div>
                <span className={!benefit.included ? "line-through opacity-60" : ""}>{benefit.text}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => onSelectPlan("free")}
            disabled={currentPlan === "free"}
            className={`w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all active:scale-98 ${
              currentPlan === "free"
                ? "border border-[#253230] text-gray-400 bg-white/5 cursor-default"
                : "border border-[#253230] text-white hover:bg-white hover:text-black hover:border-white"
            }`}
          >
            {currentPlan === "free" ? "PLANO ATUAL" : "MANTER GRÁTIS"}
          </button>
        </div>

        {/* Plan Titan PRO */}
        <div className={`bg-[#182020] border-2 rounded-3xl p-6 relative overflow-hidden transition-all shadow-2xl ${
          currentPlan === "pro" 
            ? "border-[#CDFC39] shadow-[#CDFC39]/10" 
            : "border-[#CDFC39]/40 hover:border-[#CDFC39]/70"
        }`}>
          {/* Tag Recomendado */}
          <div className="absolute top-0 right-0 bg-[#CDFC39] text-black text-[9px] font-black px-4 py-1.5 rounded-bl-2xl uppercase tracking-wider shadow-md">
            RECOMENDADO
          </div>

          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-black text-[#CDFC39] font-display">Titan PRO</h2>
              <p className="text-[#CDFC39] text-[10px] uppercase font-bold tracking-widest mt-0.5">
                PERFORMANCE MÁXIMA
              </p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-white font-display">R$29</span>
              <span className="text-gray-400 text-xs font-medium">/mês</span>
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {proBenefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <li key={i} className="flex items-center gap-3 text-sm text-gray-200">
                  <div className="w-5 h-5 rounded-lg bg-[#CDFC39]/15 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-[#CDFC39]" />
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </li>
              );
            })}
          </ul>

          <button
            onClick={handleUpgrade}
            disabled={isProcessing || currentPlan === "pro"}
            className={`w-full py-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all active:scale-98 shadow-lg flex items-center justify-center gap-2 ${
              currentPlan === "pro"
                ? "bg-[#CDFC39]/20 text-[#CDFC39] border border-[#CDFC39]/40 cursor-default"
                : "bg-[#CDFC39] text-black hover:bg-[#bbf224] hover:shadow-[#CDFC39]/25"
            }`}
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>PROCESSANDO...</span>
              </>
            ) : currentPlan === "pro" ? (
              "VOCÊ É PRO 🔥"
            ) : (
              "SEJA PRO AGORA"
            )}
          </button>
        </div>
      </div>

      {/* Billing cycle toggle — Annual vs Monthly */}
      {currentPlan !== "pro" && (
        <div className="bg-[#182020] border border-[#253230] rounded-2xl p-1.5 flex gap-1.5">
          <button
            onClick={() => setSelectedBillingCycle("annual")}
            className={`flex-1 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              selectedBillingCycle === "annual"
                ? "bg-[#CDFC39] text-black shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Anual — R$14,99/mês
            <span className="block text-[9px] font-bold opacity-70 mt-0.5">R$179,90/ano · -58%</span>
          </button>
          <button
            onClick={() => setSelectedBillingCycle("monthly")}
            className={`flex-1 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
              selectedBillingCycle === "monthly"
                ? "bg-[#CDFC39] text-black shadow-md"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Mensal — R$39,90
            <span className="block text-[9px] font-bold opacity-70 mt-0.5">Cancele quando quiser</span>
          </button>
        </div>
      )}

      {/* Feedback banner */}
      {feedback && (
        <div className="bg-[#182020] border border-[#CDFC39]/40 rounded-2xl p-3 text-center text-xs text-[#CDFC39] font-bold">
          {feedback}
        </div>
      )}

      {/* Restore Purchases & Google Play Guarantee */}
      <div className="flex flex-col items-center gap-2 pt-1 text-center">
        <button
          onClick={handleRestore}
          disabled={isProcessing}
          className="text-xs font-bold text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors py-1"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Restaurar Assinatura Existente</span>
        </button>

        <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
          <ShieldCheck className="w-3.5 h-3.5 text-[#CDFC39]" />
          <span>Faturamento seguro via Google Play • Cancele a qualquer momento</span>
        </div>

        <div className="flex items-center justify-center gap-4 text-[11px] text-gray-500 pt-1">
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
      </div>

      {/* Bottom Gym Banner Card — local asset */}
      <section className="relative h-48 rounded-3xl overflow-hidden group shadow-xl border border-[#253230] bg-[#111616]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65 transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('/store_assets/splash_vertical_1080x1920.png')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111616] via-[#111616]/45 to-transparent" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end text-left">
          <h3 className="text-xl font-black text-white font-display tracking-tight leading-none uppercase">
            TREINE COMO UM TITÃ
          </h3>
          <p className="text-xs text-[#CDFC39] font-extrabold uppercase tracking-widest mt-1.5">
            JUNTE-SE À ELITE HOJE.
          </p>
        </div>
      </section>

      {legalDoc && <LegalModal type={legalDoc} onClose={() => setLegalDoc(null)} />}
    </div>
  );
}
