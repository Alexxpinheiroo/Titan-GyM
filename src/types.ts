/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DailyMetrics {
  calories: number;
  activeMinutes: number;
  totalVolumeTons: number;
  weeklyScorePercent: number;
}

export interface Exercise {
  id: string;
  name: string;
  series: number;
  reps: string; // can be "6-8", "8-10", "10-12", "10", "12", "8 passos ida/8 passos volta", "12-15"
  restSeconds: number;
  restDisplay?: string; // e.g. "90/120 segundos", "60 segundos", "60/90 segundos"
  currentLoad: string; // can be "40", "22", "BW+10", "BW"
  targetLoad: string; // can be "45", "26", "BW+15"
  lastLoad: string; // can be "38", "22", "BW+5"
  imgUrl: string;
  muscleGroup: string;
}

export interface WorkoutRoutine {
  id: string;
  divisionId?: "ab" | "abc" | "abcd";
  name: string;
  alias?: string; // e.g. "Push", "Pull", "Legs", "Superior", "Inferior"
  dayOfWeek?: string; // e.g. "Segunda-feira", "Quarta-feira", "Sexta-feira"
  focus: string;
  durationMinutes: number;
  exercises: Exercise[];
}

export interface WorkoutStrategyCard {
  id: string;
  letter: string;
  subtitle: string;
  routineId?: string;
  day?: string;
  pills: string[];
  details: string[];
}

export interface WorkoutStrategyScheduleItem {
  day: string;
  activity: string;
  isRest?: boolean;
}

export interface WorkoutStrategy {
  id: string;
  name: string;
  tag: string;
  frequency?: string;
  description?: string;
  sourceTitle?: string;
  sourceUrl?: string;
  scheduleList?: WorkoutStrategyScheduleItem[];
  cards: WorkoutStrategyCard[];
}

export interface LoadLog {
  id: string;
  exerciseId: string;
  dateStr: string;
  sessionNum: number;
  loadKg: number;
  reps: number;
  notes?: string;
}

export interface OnboardingData {
  gender: string;
  goal: string;
  experience: string;
  currentFrequency: string;
  location: string;
  equipment: string[];
  hasInjuries: boolean;
  injuries: string[];
  focusRegion: string;
  age: number;
  heightCm: number;
  weightKg: number;
  targetWeightKg: number;
  idealDuration: string;
  planMethod: string;
  organization: string;
  frequencyDays: number;
  notificationsEnabled: boolean;
  planSelection?: "annual" | "monthly" | "free";
  completedAt?: string;
}

export interface UserProfile {
  name: string;
  streakDays: number;
  avatarUrl: string;
  onboarding?: OnboardingData;
}
