/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Check, X, ShieldCheck, Sparkles, Tag, Loader2 } from "lucide-react";
import { billingService } from "../../services/billing";
import LegalModal from "../LegalModal";

interface PaywallStepProps {
  selectedPlan: "annual" | "monthly";
  onSelectPlan: (plan: "annual" | "monthly") => void;
  onConfirm: (plan: "annual" | "monthly" | "free") => void;
  onSkip: () => void;
}

export default function PaywallStep({
  selectedPlan,
  onSelectPlan,
  onConfirm,
  onSkip,
}: PaywallStepProps) {
  const [promoOpen, setPromoOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [legalDoc, setLegalDoc] = useState<"privacy" | "terms" | null>(null);

  const VALID_PROMO_CODES = ["TITAN100", "TITANGYM", "WELCOME"];

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (VALID_PROMO_CODES.includes(code)) {
      setPromoApplied(true);
      setStatusMessage("✓ Cupom de desconto aplicado com sucesso!");
    } else {
      setStatusMessage("Código promocional inválido ou expirado.");
    }
  };

  const handlePurchase = async () => {
    setIsProcessing(true);
    setStatusMessage(null);
    try {
      const result = await billingService.purchasePlan(selectedPlan);
      if (result.success) {
        onConfirm(selectedPlan);
      } else if (result.error) {
        setStatusMessage(result.error);
      }
    } catch {
      setStatusMessage("Erro ao processar compra. Tente novamente.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRestore = async () => {
    setIsProcessing(true);
    setStatusMessage("Buscando assinaturas anteriores...");
    try {
      const res = await billingService.restorePurchases();
      if (res.isPro) {
        setStatusMessage("Assinatura restaurada com sucesso! Bem-vindo de volta.");
        setTimeout(() => onConfirm(selectedPlan), 1200);
      } else {
        setStatusMessage("Nenhuma assinatura ativa encontrada para este dispositivo.");
      }
    } catch {
      setStatusMessage("Falha ao restaurar compras.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1414] text-white flex flex-col justify-between max-w-md mx-auto relative px-5 py-5 select-none">
      {/* Top action header: Restore + Close */}
      <header className="flex items-center justify-between pt-1 pb-3">
        <button
          type="button"
          onClick={handleRestore}
          disabled={isProcessing}
          className="text-xs font-semibold text-gray-400 hover:text-white transition-colors flex items-center gap-1.5"
        >
          {isProcessing && <Loader2 className="w-3 h-3 animate-spin text-[#CDFC39]" />}
          <span>Restaurar Compra</span>
        </button>

        <button
          type="button"
          onClick={onSkip}
          aria-label="Pular para o aplicativo"
          className="w-9 h-9 rounded-full bg-[#182020] hover:bg-[#222c2a] flex items-center justify-center text-gray-400 hover:text-white border border-white/5 transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      {/* Main Pitch Content */}
      <div className="flex-1 flex flex-col justify-center py-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CDFC39]/15 border border-[#CDFC39]/30 text-[#CDFC39] text-xs font-black tracking-wider uppercase mb-3 w-fit">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Acesso Titan PRO</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight font-display tracking-tight">
          Tenha acesso ao seu plano personalizado
        </h1>

        {/* Benefits list */}
        <div className="flex flex-col gap-2.5 my-5">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#CDFC39] text-black flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <span className="text-sm font-medium text-gray-200">
              Treine com um plano 100% personalizado
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#CDFC39] text-black flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <span className="text-sm font-medium text-gray-200">
              Orientação de sobrecarga para cada exercício
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#CDFC39] text-black flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <span className="text-sm font-medium text-gray-200">
              Histórico detalhado de recordes e gráficos
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-[#CDFC39] text-black flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
            </div>
            <span className="text-sm font-medium text-gray-200">
              Exercícios novos e variações todos os meses
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col gap-3">
          {/* Annual Plan */}
          <div
            onClick={() => onSelectPlan("annual")}
            className={`p-4 rounded-2xl border cursor-pointer relative transition-all ${
              selectedPlan === "annual"
                ? "bg-[#182020] border-[#CDFC39] shadow-lg shadow-[#CDFC39]/15"
                : "bg-[#182020] border-[#253230] hover:bg-[#1e2827]"
            }`}
          >
            <div className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full bg-[#CDFC39] text-black text-[10px] font-black uppercase tracking-wider shadow-sm">
              58% DE DESCONTO
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-extrabold text-base text-white">Plano Anual</div>
                <div className="text-xs text-gray-400 mt-0.5">
                  12 meses de acesso ilimitado
                </div>
              </div>

              <div className="text-right">
                <div className="text-lg font-black text-[#CDFC39] font-display">
                  R$ 14,99 <span className="text-xs font-normal text-gray-300">/mês</span>
                </div>
                <div className="text-[10px] text-gray-400">R$ 179,90 por ano</div>
              </div>
            </div>
          </div>

          {/* Monthly Plan */}
          <div
            onClick={() => onSelectPlan("monthly")}
            className={`p-4 rounded-2xl border cursor-pointer relative transition-all ${
              selectedPlan === "monthly"
                ? "bg-[#182020] border-[#CDFC39] shadow-lg shadow-[#CDFC39]/15"
                : "bg-[#182020] border-[#253230] hover:bg-[#1e2827]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-extrabold text-base text-white">Plano Mensal</div>
                <div className="text-xs text-gray-400 mt-0.5">
                  Cobrado mês a mês
                </div>
              </div>

              <div className="text-right">
                <div className="text-lg font-black text-white font-display">
                  R$ 39,90 <span className="text-xs font-normal text-gray-300">/mês</span>
                </div>
                <div className="text-[10px] text-gray-400">Cancele quando quiser</div>
              </div>
            </div>
          </div>
        </div>

        {/* Promo code drawer/toggle */}
        <div className="mt-3">
          {!promoOpen ? (
            <button
              type="button"
              onClick={() => setPromoOpen(true)}
              className="text-xs font-bold text-[#CDFC39] flex items-center gap-1.5 hover:underline mx-auto py-1"
            >
              <Tag className="w-3.5 h-3.5" />
              <span>USAR CÓDIGO PROMOCIONAL</span>
            </button>
          ) : (
            <form onSubmit={handleApplyPromo} className="flex gap-2 items-center">
              <input
                type="text"
                placeholder="Código promocional (ex: TITAN100)"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1 bg-[#182020] border border-[#253230] rounded-xl px-3 py-2 text-xs text-white uppercase placeholder-gray-500 focus:outline-none focus:border-[#CDFC39]"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-[#CDFC39] text-black text-xs font-bold shrink-0"
              >
                Aplicar
              </button>
            </form>
          )}

          {promoApplied && (
            <p className="text-xs text-[#CDFC39] font-bold text-center mt-1">
              ✓ Cupom aplicado com sucesso! Desconto ativado.
            </p>
          )}
        </div>
      </div>

      {/* Status or Error Banner */}
      {statusMessage && (
        <div className="bg-[#182020] border border-[#CDFC39]/40 rounded-xl p-2.5 text-center text-xs text-white">
          {statusMessage}
        </div>
      )}

      {/* Bottom Sticky Action */}
      <div className="pt-3 pb-2 flex flex-col gap-2">
        <button
          type="button"
          onClick={handlePurchase}
          disabled={isProcessing}
          className="w-full py-4 px-6 rounded-2xl bg-[#CDFC39] hover:bg-[#bbf224] disabled:opacity-50 text-black font-extrabold text-base tracking-wide shadow-xl shadow-[#CDFC39]/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>PROCESSANDO...</span>
            </>
          ) : (
            <span>CONTINUAR COM PLANO {selectedPlan === "annual" ? "ANUAL" : "MENSAL"}</span>
          )}
        </button>

        <button
          type="button"
          onClick={onSkip}
          className="w-full py-2.5 text-xs text-gray-400 hover:text-white font-semibold transition-colors text-center"
        >
          Continuar com versão gratuita (com limitações)
        </button>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500 text-center">
          <ShieldCheck className="w-3.5 h-3.5 text-[#CDFC39]" />
          <span>7 dias de garantia incondicional • Cancele quando quiser</span>
        </div>

        {/* Legal links — required by Google Play */}
        <div className="flex items-center justify-center gap-3 text-[11px] text-gray-500 pt-1">
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

      {/* Legal Modal */}
      {legalDoc && (
        <LegalModal type={legalDoc} onClose={() => setLegalDoc(null)} />
      )}
    </div>
  );
}
