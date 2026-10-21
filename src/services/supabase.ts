/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Titan-GyM Supabase Service
 * Gerencia autenticação, sincronização em nuvem e persistência de dados.
 * Opera no padrão Local-First: caso offline ou sem credenciais, usa localStorage de forma transparente.
 */

import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { UserProfile, LoadLog, DailyMetrics } from "../types";

const SUPABASE_URL = (import.meta as any).env?.VITE_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = Boolean(
  SUPABASE_URL && 
  SUPABASE_ANON_KEY && 
  SUPABASE_URL !== "https://your-project.supabase.co"
);

// Cria o cliente apenas se as variáveis estiverem preenchidas
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;

/**
 * Interface de Sessão do Usuário
 */
export interface TitanUser {
  id: string;
  email?: string;
  name?: string;
  isPro: boolean;
}

/**
 * Autenticação do Usuário
 */
export const authService = {
  async getCurrentUser(): Promise<TitanUser | null> {
    if (!supabase) {
      // Fallback local
      const savedUser = localStorage.getItem("titan_user_session");
      return savedUser ? JSON.parse(savedUser) : null;
    }

    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user) return null;

      // Buscar status pro no perfil
      const { data: profile } = await supabase
        .from("user_profiles")
        .select("is_pro, name")
        .eq("id", user.id)
        .single();

      return {
        id: user.id,
        email: user.email,
        name: profile?.name || user.user_metadata?.name || "Guerreiro",
        isPro: profile?.is_pro || false,
      };
    } catch {
      return null;
    }
  },

  async signInWithEmail(email: string, password: string) {
    if (!supabase) {
      // Mock local
      const mockUser: TitanUser = { id: "local-user", email, name: email.split("@")[0], isPro: false };
      localStorage.setItem("titan_user_session", JSON.stringify(mockUser));
      return { user: mockUser, error: null };
    }

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    return { user: data.user, error };
  },

  async signUpWithEmail(email: string, password: string, name: string) {
    if (!supabase) {
      const mockUser: TitanUser = { id: "local-user", email, name, isPro: false };
      localStorage.setItem("titan_user_session", JSON.stringify(mockUser));
      return { user: mockUser, error: null };
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { name } },
    });

    if (data.user && !error) {
      await supabase.from("user_profiles").upsert({
        id: data.user.id,
        name,
        email,
        updated_at: new Date().toISOString(),
      });
    }

    return { user: data.user, error };
  },

  async signOut() {
    localStorage.removeItem("titan_user_session");
    if (supabase) {
      await supabase.auth.signOut();
    }
  },
};

/**
 * Sincronização de Dados de Treino (Local-First Sync)
 */
export const syncService = {
  // Sincroniza o Perfil do Usuário
  async syncProfile(profile: UserProfile): Promise<void> {
    localStorage.setItem("titan_profile", JSON.stringify(profile));
    if (!supabase) return;

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      await supabase.from("user_profiles").upsert({
        id: user.id,
        name: profile.name,
        streak_days: profile.streakDays,
        avatar_url: profile.avatarUrl,
        updated_at: new Date().toISOString(),
      });
    } catch {
      // Modo offline - falha silenciosa para não travar o app
    }
  },

  // Sincroniza Métricas Diárias
  async syncMetrics(metrics: DailyMetrics): Promise<void> {
    localStorage.setItem("titan_metrics", JSON.stringify(metrics));
    if (!supabase) return;

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      await supabase.from("user_metrics").upsert({
        user_id: user.id,
        calories: metrics.calories,
        active_minutes: metrics.activeMinutes,
        total_volume_tons: metrics.totalVolumeTons,
        weekly_score_percent: metrics.weeklyScorePercent,
        updated_at: new Date().toISOString(),
      });
    } catch {}
  },

  // Sincroniza Logs de Carga
  async saveLoadLog(log: LoadLog): Promise<void> {
    // 1. Salvar no localStorage primeiro
    const localLogsStr = localStorage.getItem("titan_logs_v4");
    const localLogs: LoadLog[] = localLogsStr ? JSON.parse(localLogsStr) : [];
    localLogs.unshift(log);
    localStorage.setItem("titan_logs_v4", JSON.stringify(localLogs));

    // 2. Se conectado ao Supabase, salvar na nuvem
    if (!supabase) return;

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      await supabase.from("workout_logs").insert({
        id: log.id,
        user_id: user.id,
        exercise_id: log.exerciseId,
        date_str: log.dateStr,
        session_num: log.sessionNum,
        load_kg: log.loadKg,
        reps: log.reps,
        notes: log.notes || null,
        created_at: new Date().toISOString(),
      });
    } catch {}
  },
};
