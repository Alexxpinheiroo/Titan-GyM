-- ====================================================================
-- TITAN-GYM: SUPABASE POSTGRESQL DATABASE SCHEMA
-- Execute este script no SQL Editor do seu dashboard Supabase
-- ====================================================================

-- 1. Tabela de Perfis de Usuário
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  name TEXT NOT NULL DEFAULT 'Guerreiro',
  email TEXT,
  avatar_url TEXT,
  streak_days INTEGER DEFAULT 0,
  is_pro BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Tabela de Métricas do Usuário
CREATE TABLE IF NOT EXISTS public.user_metrics (
  user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE PRIMARY KEY,
  calories INTEGER DEFAULT 0,
  active_minutes INTEGER DEFAULT 0,
  total_volume_tons NUMERIC(6, 2) DEFAULT 0,
  weekly_score_percent INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Tabela de Logs de Séries e Cargas (Histórico de Treinos)
CREATE TABLE IF NOT EXISTS public.workout_logs (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  exercise_id TEXT NOT NULL,
  date_str TEXT NOT NULL,
  session_num INTEGER NOT NULL,
  load_kg NUMERIC(6, 2) NOT NULL,
  reps INTEGER NOT NULL,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Tabela de Assinaturas (Sincronizada via RevenueCat Webhook)
CREATE TABLE IF NOT EXISTS public.user_subscriptions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  revenuecat_id TEXT,
  product_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active', -- 'active', 'expired', 'canceled'
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Índices de Performance
CREATE INDEX IF NOT EXISTS idx_workout_logs_user_id ON public.workout_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_workout_logs_exercise ON public.workout_logs(exercise_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_user ON public.user_subscriptions(user_id);

-- Ativação de Row Level Security (RLS)
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_metrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workout_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;

-- Políticas de RLS (Cada usuário acessa apenas seus próprios dados)
CREATE POLICY "Users can view own profile" ON public.user_profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.user_profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.user_profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can view own metrics" ON public.user_metrics
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own workout logs" ON public.workout_logs
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users can view own subscriptions" ON public.user_subscriptions
  FOR SELECT USING (auth.uid() = user_id);
