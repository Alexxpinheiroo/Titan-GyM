/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface OnboardingState {
  gender: "masculino" | "feminino" | "outro";
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
  heightUnit: "cm" | "ft";
  weightKg: number;
  weightUnit: "kg" | "lb";
  targetWeightKg: number;
  targetWeightUnit: "kg" | "lb";
  idealDuration: string;
  planMethod: string;
  organization: string;
  frequencyDays: number;
  notificationsEnabled: boolean;
  planSelection: "annual" | "monthly";
  userName: string;
}

export type OnboardingStep =
  | "welcome"
  | "gender"
  | "goal"
  | "experience"
  | "current_frequency"
  | "location"
  | "equipment"
  | "comparison_power"
  | "injuries"
  | "focus_region"
  | "age"
  | "height"
  | "weight"
  | "target_weight"
  | "projection"
  | "duration"
  | "plan_method"
  | "organization"
  | "frequency"
  | "testimonials"
  | "notifications"
  | "motivation"
  | "social_proof"
  | "fitness_score"
  | "plan_ready"
  | "paywall";
