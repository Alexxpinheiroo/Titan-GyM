/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { OnboardingState, OnboardingStep } from "./types";
import { OnboardingData } from "../../types";

import WelcomeStep from "./WelcomeStep";
import SingleChoiceStep from "./SingleChoiceStep";
import EquipmentStep from "./EquipmentStep";
import ComparisonPowerStep from "./ComparisonPowerStep";
import InjuriesStep from "./InjuriesStep";
import FocusRegionStep from "./FocusRegionStep";
import AgeStep from "./AgeStep";
import HeightStep from "./HeightStep";
import WeightStep from "./WeightStep";
import TargetWeightStep from "./TargetWeightStep";
import ProjectionStep from "./ProjectionStep";
import FrequencyStep from "./FrequencyStep";
import TestimonialsStep from "./TestimonialsStep";
import NotificationPromptStep from "./NotificationPromptStep";
import MotivationSlideStep from "./MotivationSlideStep";
import SocialProofStep from "./SocialProofStep";
import FitnessScoreStep from "./FitnessScoreStep";
import PlanReadyStep from "./PlanReadyStep";
import PaywallStep from "./PaywallStep";
import { ALL_EQUIPMENT_ITEMS } from "./equipmentData";

import {
  User,
  Heart,
  Compass,
  Zap,
  Flame,
  Target,
  Dumbbell,
  Leaf,
  Rocket,
  Calendar,
  CalendarDays,
  Slash,
  Building2,
  Building,
  Home,
  PersonStanding,
  Sparkles,
  Sliders,
  Clock,
} from "lucide-react";

interface OnboardingFlowProps {
  onFinish: (data: OnboardingData, chosenPlan: "pro" | "free") => void;
  onSkipToApp: () => void;
}

const STEP_ORDER: OnboardingStep[] = [
  "welcome",
  "gender",
  "goal",
  "experience",
  "current_frequency",
  "location",
  "equipment",
  "comparison_power",
  "injuries",
  "focus_region",
  "age",
  "height",
  "weight",
  "target_weight",
  "projection",
  "duration",
  "plan_method",
  "organization",
  "frequency",
  "testimonials",
  "notifications",
  "motivation",
  "social_proof",
  "fitness_score",
  "plan_ready",
  "paywall",
];

export default function OnboardingFlow({ onFinish, onSkipToApp }: OnboardingFlowProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Form State
  const [state, setState] = useState<OnboardingState>({
    gender: "masculino",
    goal: "musculos",
    experience: "intermediario",
    currentFrequency: "regularmente",
    location: "comercial",
    equipment: ["Halteres", "Barra olímpica", "Banco Reto", "Polia", "Hack Machine"],
    hasInjuries: false,
    injuries: [],
    focusRegion: "corpo_inteiro",
    age: 28,
    heightCm: 175,
    heightUnit: "cm",
    weightKg: 74,
    weightUnit: "kg",
    targetWeightKg: 78,
    targetWeightUnit: "kg",
    idealDuration: "medio",
    planMethod: "smart",
    organization: "equilibrado",
    frequencyDays: 4,
    notificationsEnabled: true,
    planSelection: "annual",
    userName: "Guerreiro",
  });

  const currentStep = STEP_ORDER[currentStepIndex];
  // Calculate progress relative to total question steps (excluding welcome)
  const progress = Math.min(1, Math.max(0.04, currentStepIndex / (STEP_ORDER.length - 1)));

  const shouldSkipEquipment = state.location === "comercial" || state.location === "corpo";

  const handleNext = () => {
    const nextIdx = currentStepIndex + 1;
    if (nextIdx >= STEP_ORDER.length) return;

    // Smart skip: If gym is commercial or bodyweight, skip the detailed equipment checklist
    if (currentStep === "location" && shouldSkipEquipment) {
      const compPowerIdx = STEP_ORDER.indexOf("comparison_power");
      if (compPowerIdx !== -1) {
        setCurrentStepIndex(compPowerIdx);
        return;
      }
    }

    setCurrentStepIndex(nextIdx);
  };

  const handleBack = () => {
    if (currentStepIndex <= 0) return;

    // Smart skip backwards: If gym is commercial or bodyweight, skip back to location
    if (currentStep === "comparison_power" && shouldSkipEquipment) {
      const locationIdx = STEP_ORDER.indexOf("location");
      if (locationIdx !== -1) {
        setCurrentStepIndex(locationIdx);
        return;
      }
    }

    setCurrentStepIndex((prev) => prev - 1);
  };

  const finalizeOnboarding = (chosenPlan: "pro" | "free") => {
    const onboardingData: OnboardingData = {
      gender: state.gender,
      goal: state.goal,
      experience: state.experience,
      currentFrequency: state.currentFrequency,
      location: state.location,
      equipment: state.equipment,
      hasInjuries: state.hasInjuries,
      injuries: state.injuries,
      focusRegion: state.focusRegion,
      age: state.age,
      heightCm: state.heightCm,
      weightKg: state.weightKg,
      targetWeightKg: state.targetWeightKg,
      idealDuration: state.idealDuration,
      planMethod: state.planMethod,
      organization: state.organization,
      frequencyDays: state.frequencyDays,
      notificationsEnabled: state.notificationsEnabled,
      planSelection: chosenPlan === "pro" ? state.planSelection : "free",
      completedAt: new Date().toISOString(),
    };

    onFinish(onboardingData, chosenPlan);
  };

  return (
    <div className="w-full min-h-screen bg-[#0e1414]">
      {/* 0. Welcome */}
      {currentStep === "welcome" && (
        <WelcomeStep
          onStart={handleNext}
          onAlreadyHaveAccount={onSkipToApp}
        />
      )}

      {/* 1. Gender */}
      {currentStep === "gender" && (
        <SingleChoiceStep
          progress={progress}
          title="Qual gênero você se identifica?"
          subtitle="Seu gênero nos ajuda a calibrar referências de força e taxas metabólicas."
          selectedValue={state.gender}
          onSelect={(id) => setState((prev) => ({ ...prev, gender: id as any }))}
          onNext={handleNext}
          onBack={handleBack}
          footerText="Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade."
          options={[
            {
              id: "masculino",
              title: "Masculino",
              icon: <User className="w-6 h-6" />,
            },
            {
              id: "feminino",
              title: "Feminino",
              icon: <Heart className="w-6 h-6" />,
            },
            {
              id: "outro",
              title: "Outro",
              icon: <Compass className="w-6 h-6" />,
            },
          ]}
        />
      )}

      {/* 2. Goal */}
      {currentStep === "goal" && (
        <SingleChoiceStep
          progress={progress}
          title="Qual é o seu objetivo atual?"
          subtitle="Adaptaremos a periodização de cargas e a faixa de repetições ideais."
          selectedValue={state.goal}
          onSelect={(id) => setState((prev) => ({ ...prev, goal: id }))}
          onNext={handleNext}
          onBack={handleBack}
          options={[
            {
              id: "musculos",
              title: "Ganhar Músculos",
              subtitle: "Hipertrofia máxima e ganho consistente de volume muscular.",
              icon: <Dumbbell className="w-6 h-6" />,
            },
            {
              id: "forca",
              title: "Ficar Mais Forte",
              subtitle: "Aumento expressivo nas marcas de 1RM e potência pura.",
              icon: <Zap className="w-6 h-6" />,
            },
            {
              id: "definir",
              title: "Definir o Corpo",
              subtitle: "Perda de gordura com máxima retenção de massa magra.",
              icon: <Flame className="w-6 h-6" />,
            },
            {
              id: "condicionamento",
              title: "Melhorar Condicionamento",
              subtitle: "Saúde cardiovascular, mobilidade e resistência muscular.",
              icon: <Target className="w-6 h-6" />,
            },
          ]}
        />
      )}

      {/* 3. Strength Experience */}
      {currentStep === "experience" && (
        <SingleChoiceStep
          progress={progress}
          title="Qual é a sua experiência com treino de força?"
          subtitle="Para determinar a taxa segura de sobrecarga semanal."
          selectedValue={state.experience}
          onSelect={(id) => setState((prev) => ({ ...prev, experience: id }))}
          onNext={handleNext}
          onBack={handleBack}
          options={[
            {
              id: "iniciante",
              title: "Iniciante",
              subtitle: "Menos de 1 ano de treino",
              icon: <Leaf className="w-6 h-6" />,
            },
            {
              id: "intermediario",
              title: "Intermediário",
              subtitle: "1 a 2 anos de treino consistente",
              icon: <Zap className="w-6 h-6" />,
            },
            {
              id: "avancado",
              title: "Avançado",
              subtitle: "2 a 4 anos de treino",
              icon: <Flame className="w-6 h-6" />,
            },
            {
              id: "especialista",
              title: "Especialista",
              subtitle: "Mais de 4 anos de treino",
              icon: <Rocket className="w-6 h-6" />,
            },
          ]}
        />
      )}

      {/* 4. Current Frequency */}
      {currentStep === "current_frequency" && (
        <SingleChoiceStep
          progress={progress}
          title="Com que frequência você treina atualmente?"
          subtitle="Avaliamos seu nível recente de ativação neuromuscular."
          selectedValue={state.currentFrequency}
          onSelect={(id) => setState((prev) => ({ ...prev, currentFrequency: id }))}
          onNext={handleNext}
          onBack={handleBack}
          options={[
            {
              id: "regularmente",
              title: "Regularmente",
              subtitle: "Pelo menos 2 a 5 vezes por semana",
              icon: <Calendar className="w-6 h-6" />,
            },
            {
              id: "inconsistentemente",
              title: "Inconsistentemente",
              subtitle: "Algumas semanas sim e outras não",
              icon: <CalendarDays className="w-6 h-6" />,
            },
            {
              id: "nunca",
              title: "Nunca ou Parado",
              subtitle: "Estou há mais de 6 meses sem treinar",
              icon: <Slash className="w-6 h-6" />,
            },
          ]}
        />
      )}

      {/* 5. Location */}
      {currentStep === "location" && (
        <SingleChoiceStep
          progress={progress}
          title="Onde você treina atualmente?"
          subtitle="Filtraremos os exercícios para o maquinário disponível no seu espaço."
          selectedValue={state.location}
          onSelect={(id) => {
            let nextEquipment = state.equipment;
            if (id === "comercial") {
              nextEquipment = ALL_EQUIPMENT_ITEMS;
            } else if (id === "corpo") {
              nextEquipment = ["Peso Corporal", "Barra fixa"];
            } else if (state.equipment.length === 0 || state.equipment.length === ALL_EQUIPMENT_ITEMS.length) {
              nextEquipment = ["Halteres", "Banco Reto", "Polia", "Anilha"];
            }
            setState((prev) => ({
              ...prev,
              location: id,
              equipment: nextEquipment,
            }));
          }}
          onNext={handleNext}
          onBack={handleBack}
          options={[
            {
              id: "comercial",
              title: "Academia Comercial",
              subtitle: "Totalmente equipada (Smart Fit, BlueFit, etc.) – Pula lista de máquinas",
              icon: <Building2 className="w-6 h-6" />,
            },
            {
              id: "pequena",
              title: "Academia Pequena / Condomínio",
              subtitle: "Pesos livres e máquinas essenciais",
              icon: <Building className="w-6 h-6" />,
            },
            {
              id: "casa",
              title: "Academia em Casa (Home Gym)",
              subtitle: "Halteres e equipamentos mínimos",
              icon: <Home className="w-6 h-6" />,
            },
            {
              id: "corpo",
              title: "Peso Corporal / Calistenia",
              subtitle: "Apenas peso do corpo e barras – Sem máquinas",
              icon: <PersonStanding className="w-6 h-6" />,
            },
          ]}
        />
      )}

      {/* 6. Equipment */}
      {currentStep === "equipment" && (
        <EquipmentStep
          progress={progress}
          selectedEquipment={state.equipment}
          onChange={(items) => setState((prev) => ({ ...prev, equipment: items }))}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {/* 7. Comparison Power */}
      {currentStep === "comparison_power" && (
        <ComparisonPowerStep
          progress={progress}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {/* 8. Injuries */}
      {currentStep === "injuries" && (
        <InjuriesStep
          progress={progress}
          hasInjuries={state.hasInjuries}
          selectedInjuries={state.injuries}
          onToggleHasInjuries={(has) => setState((prev) => ({ ...prev, hasInjuries: has }))}
          onToggleInjuryArea={(area) => {
            setState((prev) => ({
              ...prev,
              injuries: prev.injuries.includes(area)
                ? prev.injuries.filter((a) => a !== area)
                : [...prev.injuries, area],
            }));
          }}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {/* 9. Focus Region */}
      {currentStep === "focus_region" && (
        <FocusRegionStep
          progress={progress}
          selectedRegion={state.focusRegion}
          onSelectRegion={(reg) => setState((prev) => ({ ...prev, focusRegion: reg }))}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {/* 10. Age */}
      {currentStep === "age" && (
        <AgeStep
          progress={progress}
          age={state.age}
          onChangeAge={(val) => setState((prev) => ({ ...prev, age: val }))}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {/* 11. Height */}
      {currentStep === "height" && (
        <HeightStep
          progress={progress}
          heightCm={state.heightCm}
          unit={state.heightUnit}
          onChangeHeight={(val) => setState((prev) => ({ ...prev, heightCm: val }))}
          onChangeUnit={(u) => setState((prev) => ({ ...prev, heightUnit: u }))}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {/* 12. Weight */}
      {currentStep === "weight" && (
        <WeightStep
          progress={progress}
          weightKg={state.weightKg}
          heightCm={state.heightCm}
          unit={state.weightUnit}
          onChangeWeight={(val) => setState((prev) => ({ ...prev, weightKg: val }))}
          onChangeUnit={(u) => setState((prev) => ({ ...prev, weightUnit: u }))}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {/* 13. Target Weight */}
      {currentStep === "target_weight" && (
        <TargetWeightStep
          progress={progress}
          currentWeightKg={state.weightKg}
          targetWeightKg={state.targetWeightKg}
          unit={state.targetWeightUnit}
          onChangeTargetWeight={(val) => setState((prev) => ({ ...prev, targetWeightKg: val }))}
          onChangeUnit={(u) => setState((prev) => ({ ...prev, targetWeightUnit: u }))}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {/* 14. Projection */}
      {currentStep === "projection" && (
        <ProjectionStep
          progress={progress}
          currentWeightKg={state.weightKg}
          targetWeightKg={state.targetWeightKg}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {/* 15. Ideal Duration */}
      {currentStep === "duration" && (
        <SingleChoiceStep
          progress={progress}
          title="Qual é o tempo ideal de treino pra você?"
          subtitle="Montaremos o número de séries e tempos de descanso exatos para caber na sua rotina."
          selectedValue={state.idealDuration}
          onSelect={(id) => setState((prev) => ({ ...prev, idealDuration: id }))}
          onNext={handleNext}
          onBack={handleBack}
          options={[
            {
              id: "rapido",
              title: "Rápido",
              subtitle: "Até 20 minutos de alta intensidade",
              icon: <Clock className="w-6 h-6" />,
            },
            {
              id: "curto",
              title: "Curto",
              subtitle: "20 a 40 minutos",
              icon: <Clock className="w-6 h-6" />,
            },
            {
              id: "medio",
              title: "Médio",
              subtitle: "40 a 60 minutos",
              badge: "RECOMENDADO",
              icon: <Clock className="w-6 h-6" />,
            },
            {
              id: "longo",
              title: "Longo",
              subtitle: "60+ minutos com pausas amplas",
              icon: <Clock className="w-6 h-6" />,
            },
          ]}
        />
      )}

      {/* 16. Plan Method */}
      {currentStep === "plan_method" && (
        <SingleChoiceStep
          progress={progress}
          title="Como você deseja configurar seus treinos?"
          subtitle="Isso pode ser alterado a qualquer momento."
          selectedValue={state.planMethod}
          onSelect={(id) => setState((prev) => ({ ...prev, planMethod: id }))}
          onNext={handleNext}
          onBack={handleBack}
          footerText="👥 Mais de 2,5 milhões de planos gerados pelo Titan."
          options={[
            {
              id: "smart",
              title: "Plano Inteligente",
              subtitle: "Plano personalizado com sobrecarga progressiva calculada pela IA.",
              badge: "RECOMENDADO",
              icon: <Sparkles className="w-6 h-6" />,
            },
            {
              id: "custom",
              title: "Plano Criado por Você",
              subtitle: "Crie, organize e registre seus próprios treinos livremente.",
              icon: <Sliders className="w-6 h-6" />,
            },
          ]}
        />
      )}

      {/* 17. Organization */}
      {currentStep === "organization" && (
        <SingleChoiceStep
          progress={progress}
          title="Como você quer organizar seus treinos?"
          subtitle="A estrutura da rotina semanal para manter motivação e adesão."
          selectedValue={state.organization}
          onSelect={(id) => setState((prev) => ({ ...prev, organization: id }))}
          onNext={handleNext}
          onBack={handleBack}
          options={[
            {
              id: "equilibrado",
              title: "Equilibrado",
              subtitle: "Variedade moderada com estrutura consistente.",
              badge: "RECOMENDADO",
              icon: <Target className="w-6 h-6" />,
            },
            {
              id: "variado",
              title: "Variado",
              subtitle: "Alta variedade para manter os treinos novos e desafiadores.",
              icon: <Sparkles className="w-6 h-6" />,
            },
            {
              id: "fixo",
              title: "Fixo",
              subtitle: "Mesma estrutura toda semana. Ideal para criar hábitos sólidos.",
              icon: <Calendar className="w-6 h-6" />,
            },
          ]}
        />
      )}

      {/* 18. Frequency */}
      {currentStep === "frequency" && (
        <FrequencyStep
          progress={progress}
          frequencyDays={state.frequencyDays}
          userGoal={state.goal}
          userExperience={state.experience}
          onChangeFrequency={(val) => setState((prev) => ({ ...prev, frequencyDays: val }))}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {/* 19. Testimonials & Comparison */}
      {currentStep === "testimonials" && (
        <TestimonialsStep
          progress={progress}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {/* 20. Notifications */}
      {currentStep === "notifications" && (
        <NotificationPromptStep
          progress={progress}
          notificationsEnabled={state.notificationsEnabled}
          onToggleNotifications={(val) => setState((prev) => ({ ...prev, notificationsEnabled: val }))}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {/* 21. Motivation Slide */}
      {currentStep === "motivation" && (
        <MotivationSlideStep
          progress={progress}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {/* 22. Social Proof & Ratings */}
      {currentStep === "social_proof" && (
        <SocialProofStep
          progress={progress}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {/* 23. Fitness Score */}
      {currentStep === "fitness_score" && (
        <FitnessScoreStep
          progress={progress}
          userExperience={state.experience}
          userGoal={state.goal}
          frequencyDays={state.frequencyDays}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {/* 24. Plan Ready */}
      {currentStep === "plan_ready" && (
        <PlanReadyStep
          progress={progress}
          frequencyDays={state.frequencyDays}
          focusRegion={state.focusRegion}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {/* 25. Paywall / Access */}
      {currentStep === "paywall" && (
        <PaywallStep
          selectedPlan={state.planSelection}
          onSelectPlan={(p) => setState((prev) => ({ ...prev, planSelection: p }))}
          onConfirm={(p) => finalizeOnboarding(p === "free" ? "free" : "pro")}
          onSkip={() => finalizeOnboarding("free")}
        />
      )}
    </div>
  );
}
