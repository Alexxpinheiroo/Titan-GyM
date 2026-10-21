/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Titan Gym Uncaught Application Error:", error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleResetLocal = () => {
    try {
      localStorage.removeItem("titan_active_workout");
      localStorage.removeItem("titan_active_tab");
      window.location.reload();
    } catch {
      window.location.reload();
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#111616] text-[#e8f0ef] flex flex-col items-center justify-center p-6 text-center select-none font-sans">
          <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-5 text-red-400">
            <AlertTriangle className="w-8 h-8 stroke-[2.5]" />
          </div>

          <h1 className="text-2xl font-black text-white font-display tracking-tight mb-2">
            OPS! ALGO INESPERADO OCORREU
          </h1>

          <p className="text-gray-400 text-sm max-w-sm mb-6 leading-relaxed">
            Ocorreu uma falha temporária. Seus dados de treino estão salvos em segurança no seu dispositivo.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
            <button
              onClick={this.handleReload}
              className="w-full bg-[#CDFC39] text-black font-extrabold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-[#CDFC39]/20"
            >
              <RefreshCw className="w-4 h-4 stroke-[2.5]" />
              <span>Tentar Novamente</span>
            </button>

            <button
              onClick={this.handleResetLocal}
              className="w-full bg-[#182020] hover:bg-[#222c2a] border border-[#253230] text-gray-300 font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all"
            >
              Recuperar Sessão
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
