/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Titan-GyM Legal Documents Modal
 * Política de Privacidade e Termos de Uso — Obrigatório para publicação na Google Play Store
 */

import React from "react";
import { X, Shield, FileText } from "lucide-react";

type LegalDocType = "privacy" | "terms";

interface LegalModalProps {
  type: LegalDocType;
  onClose: () => void;
}

const privacyContent = `POLÍTICA DE PRIVACIDADE — TITAN-GYM

Última atualização: Outubro de 2026

A Titan-GyM está comprometida com a proteção da sua privacidade. Esta Política descreve como coletamos, usamos e protegemos suas informações pessoais.

1. INFORMAÇÕES QUE COLETAMOS

Dados fornecidos por você:
- Nome de usuário (apelido ou nome de preferência)
- Endereço de e-mail (caso crie uma conta)
- Dados de saúde: peso, altura, peso-alvo, frequência de treinos, lesões e objetivos
- Registros de treino: exercícios, cargas levantadas e repetições

Dados coletados automaticamente:
- Progresso de treino e histórico de atividades
- Preferências do aplicativo (tema claro/escuro)
- Dados de assinatura (via RevenueCat / Google Play Billing)

2. COMO USAMOS SUAS INFORMAÇÕES

Usamos suas informações para:
- Personalizar planos de treino com base no seu perfil
- Salvar e sincronizar seu progresso entre dispositivos
- Processar pagamentos de assinatura (via Google Play)
- Melhorar a experiência do aplicativo

3. ARMAZENAMENTO E SEGURANÇA

Seus dados são armazenados localmente no seu dispositivo e, opcionalmente, sincronizados na nuvem via Supabase com criptografia em trânsito (TLS/HTTPS) e em repouso. Utilizamos Row Level Security (RLS) garantindo que apenas você acesse seus dados.

4. COMPARTILHAMENTO DE DADOS

Não vendemos ou compartilhamos seus dados pessoais, exceto com:
- Supabase (banco de dados seguro)
- RevenueCat (processamento de assinaturas)
- Google Play Billing (pagamentos)

5. SEUS DIREITOS (LGPD)

De acordo com a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a:
- Acessar, corrigir e excluir seus dados pessoais
- Portabilidade dos seus dados
- Revogar consentimento a qualquer momento

Para exercer seus direitos: suporte@titangym.app

6. CONTATO

Para dúvidas sobre privacidade: suporte@titangym.app`;

const termsContent = `TERMOS DE USO — TITAN-GYM

Última atualização: Outubro de 2026

Ao usar o Titan-GyM, você concorda com os seguintes Termos de Uso.

1. ACEITAÇÃO DOS TERMOS

O uso do Titan-GyM constitui aceitação integral destes termos.

2. PLANOS E ASSINATURAS

Plano Gratuito (Titan Free): disponível sem custo com funcionalidades básicas.

Plano PRO (Titan PRO):
- Mensalidade: R$ 39,90/mês
- Anualidade: R$ 179,90/ano (equivalente a R$ 14,99/mês — 58% de desconto)
- Processado pelo Google Play Billing
- Renovação automática até o cancelamento
- Cancele pela Google Play Store a qualquer momento

Período de Teste:
- Plano Anual: 7 dias gratuitos
- Plano Mensal: 3 dias gratuitos
- Sem cobrança durante o período de teste

3. AVISO MÉDICO IMPORTANTE

O Titan-GyM fornece informações gerais sobre exercícios físicos. NÃO é um serviço médico. Sempre consulte um profissional de saúde antes de iniciar um programa de exercícios, especialmente se tiver condições médicas preexistentes, lesões ou dúvidas.

4. RESPONSABILIDADES

O usuário é responsável pelo uso seguro das informações de treino. O Titan-GyM não se responsabiliza por lesões físicas decorrentes do uso incorreto dos planos.

5. REEMBOLSOS

Seguimos a política de reembolso do Google Play. Solicitações em: play.google.com/store/account/subscriptions

6. CONTATO

Para dúvidas: suporte@titangym.app`;

export default function LegalModal({ type, onClose }: LegalModalProps) {
  const isPrivacy = type === "privacy";
  const Icon = isPrivacy ? Shield : FileText;
  const title = isPrivacy ? "Política de Privacidade" : "Termos de Uso";
  const content = isPrivacy ? privacyContent : termsContent;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Sheet */}
      <div className="relative w-full sm:max-w-lg bg-[#141c1b] border border-[#253230] rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col max-h-[90vh] sm:max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#253230] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#CDFC39]/15 flex items-center justify-center">
              <Icon className="w-4 h-4 text-[#CDFC39]" />
            </div>
            <h2 className="text-base font-black text-white">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content — scrollable */}
        <div className="overflow-y-auto flex-1 px-6 py-5">
          <pre className="text-xs text-gray-300 leading-relaxed whitespace-pre-wrap font-sans">
            {content}
          </pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#253230] shrink-0">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-2xl bg-[#CDFC39] hover:bg-[#bbf224] text-black text-xs font-black uppercase tracking-wider transition-all active:scale-98 shadow-md"
          >
            Entendi e Aceito
          </button>
        </div>
      </div>
    </div>
  );
}
