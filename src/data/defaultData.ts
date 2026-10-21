/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserProfile, DailyMetrics, WorkoutRoutine, WorkoutStrategy, LoadLog } from "../types";

export const defaultProfile: UserProfile = {
  name: "Guerreiro",
  streakDays: 0,
  avatarUrl: "/icon-192.png",
};

export const defaultMetrics: DailyMetrics = {
  calories: 0,
  activeMinutes: 0,
  totalVolumeTons: 0,
  weeklyScorePercent: 0,
};

export const defaultRoutines: WorkoutRoutine[] = [
  // ==========================================
  // 1. DIVISÃO ABC (Push / Pull / Legs) - HIPERTROFIA.ORG
  // ==========================================
  {
    id: "abc-push",
    divisionId: "abc",
    name: "Treino A - Push (Peito, Tríceps e Ombros)",
    alias: "Push",
    dayOfWeek: "Segunda-feira",
    focus: "Hipertrofia - Peito, Tríceps e Ombros",
    durationMinutes: 60,
    exercises: [
      {
        id: "supino-reto-abc",
        name: "Supino reto com barra",
        series: 3,
        reps: "6-8",
        restSeconds: 90,
        restDisplay: "90/120 segundos",
        currentLoad: "50",
        targetLoad: "55",
        lastLoad: "48",
        muscleGroup: "PEITO",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvGTG6f9piJfvE09Hxfl-GceHP761b42HRWb9kDHvHAJdIu9_-fabLkGRrVmz2PU_APCvKpvmwyadLJM0YwTTgMHXJPMRdYmwyNEj2WGdegXqsCJr2bwJ9_c-IWeao1ra6-jGM74sOf2EwC_3b9ITrAuzLd_6chzqy421bKaKsZPgm9xUtrPfDfTrTWa-4gkCfWaKHoQM7ZIP5bcQftkM249qI9PhLGwdrEHDNZ8cUGo8r8TBG7iDs"
      },
      {
        id: "supino-inc-abc",
        name: "Supino inclinado com halteres",
        series: 3,
        reps: "8-10",
        restSeconds: 90,
        restDisplay: "90/120 segundos",
        currentLoad: "22",
        targetLoad: "24",
        lastLoad: "20",
        muscleGroup: "PEITO",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvfVXnt2lLwVNtabx4dPRr85eTZqkluGjww8N7LKqs2t5W95-3suGTRgOvrdLpM62Vx1e8AtsnIUcyCJTHcZf6D3FvtL64hknlz8o5Saw3j-C1iSDVEXVoLpfOMFyKYs9VstUI25ZuKK62nisepah-z95DtFlxBSVRXA8JXYCY0s9hK7aJ1KpbPwSr7gk5AnI2U8YuPBpOIox1q7Xt4uQw2S6sQejzD8ndnpAFcjjQcN9zhhgQDQju"
      },
      {
        id: "crucifixo-polia-abc",
        name: "Crucifixo na polia",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "15",
        targetLoad: "17.5",
        lastLoad: "15",
        muscleGroup: "PEITO",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCorJdqiXdrkD_XEl_Vsq9oUhw7a6VdOYIygSDKOeocqguLR_zAKyxGOAA7q0mfCff3iRGhpBKqp-lV9URbHJhigAqlVpheSA-dZw24dzLZ3HyXNDws5YhoRhW0t81oZ1-xgWBgEsOsP_EJjet_K13UhKY08xukXLKK-uaacv1tH_pj5r7T-g-cVDq845m0WoQmSImps4OlcydVg4eDVRyedFQopP-OJUifm7eabQ9ryeq9n-mG8hj2"
      },
      {
        id: "desenvolvimento-halteres-abc",
        name: "Desenvolvimento com halteres",
        series: 3,
        reps: "6-8",
        restSeconds: 75,
        restDisplay: "60/90 segundos",
        currentLoad: "16",
        targetLoad: "18",
        lastLoad: "14",
        muscleGroup: "OMBROS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvfVXnt2lLwVNtabx4dPRr85eTZqkluGjww8N7LKqs2t5W95-3suGTRgOvrdLpM62Vx1e8AtsnIUcyCJTHcZf6D3FvtL64hknlz8o5Saw3j-C1iSDVEXVoLpfOMFyKYs9VstUI25ZuKK62nisepah-z95DtFlxBSVRXA8JXYCY0s9hK7aJ1KpbPwSr7gk5AnI2U8YuPBpOIox1q7Xt4uQw2S6sQejzD8ndnpAFcjjQcN9zhhgQDQju"
      },
      {
        id: "elevacao-lateral-polia-abc",
        name: "Elevação lateral na polia",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "8",
        targetLoad: "10",
        lastLoad: "7",
        muscleGroup: "OMBROS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvfVXnt2lLwVNtabx4dPRr85eTZqkluGjww8N7LKqs2t5W95-3suGTRgOvrdLpM62Vx1e8AtsnIUcyCJTHcZf6D3FvtL64hknlz8o5Saw3j-C1iSDVEXVoLpfOMFyKYs9VstUI25ZuKK62nisepah-z95DtFlxBSVRXA8JXYCY0s9hK7aJ1KpbPwSr7gk5AnI2U8YuPBpOIox1q7Xt4uQw2S6sQejzD8ndnpAFcjjQcN9zhhgQDQju"
      },
      {
        id: "triceps-corda-abc",
        name: "Tríceps corda",
        series: 3,
        reps: "10",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "20",
        targetLoad: "22.5",
        lastLoad: "17.5",
        muscleGroup: "TRICEPS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCorJdqiXdrkD_XEl_Vsq9oUhw7a6VdOYIygSDKOeocqguLR_zAKyxGOAA7q0mfCff3iRGhpBKqp-lV9URbHJhigAqlVpheSA-dZw24dzLZ3HyXNDws5YhoRhW0t81oZ1-xgWBgEsOsP_EJjet_K13UhKY08xukXLKK-uaacv1tH_pj5r7T-g-cVDq845m0WoQmSImps4OlcydVg4eDVRyedFQopP-OJUifm7eabQ9ryeq9n-mG8hj2"
      },
      {
        id: "rosca-francesa-abc",
        name: "Rosca francesa",
        series: 3,
        reps: "12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "14",
        targetLoad: "16",
        lastLoad: "12",
        muscleGroup: "TRICEPS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCorJdqiXdrkD_XEl_Vsq9oUhw7a6VdOYIygSDKOeocqguLR_zAKyxGOAA7q0mfCff3iRGhpBKqp-lV9URbHJhigAqlVpheSA-dZw24dzLZ3HyXNDws5YhoRhW0t81oZ1-xgWBgEsOsP_EJjet_K13UhKY08xukXLKK-uaacv1tH_pj5r7T-g-cVDq845m0WoQmSImps4OlcydVg4eDVRyedFQopP-OJUifm7eabQ9ryeq9n-mG8hj2"
      }
    ]
  },
  {
    id: "abc-pull",
    divisionId: "abc",
    name: "Treino B - Pull (Costas, Bíceps e Trapézio)",
    alias: "Pull",
    dayOfWeek: "Quarta-feira",
    focus: "Hipertrofia - Costas, Bíceps e Trapézio",
    durationMinutes: 60,
    exercises: [
      {
        id: "barra-fixa-abc",
        name: "Barra fixa",
        series: 3,
        reps: "6-8",
        restSeconds: 90,
        restDisplay: "90/120 segundos",
        currentLoad: "BW",
        targetLoad: "BW+5",
        lastLoad: "BW",
        muscleGroup: "COSTAS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2wn3vDV0aGYObI_CM9OYrh1SdwB8Ntn8--Dmrq-g91zrs0tP-21YwFOtp4runZL4h_pv-f7R61HNVMC7810VyyjbqIWZDxAte9uBwdQXxqlOz3p2ZKFNWMPQio9YO28Enn_niVBq8Pz5EsMOhS-5yXHwGUBFZHBgCAyoqkmEsI-_2DgPqwA9ncyoeGJdpxYhSWpKF7QHvsi9BkTVtpQPo5sQE01QQ-WEdf_rYDXLihXvmnGlUQ7r"
      },
      {
        id: "remada-curvada-abc",
        name: "Remada curvada",
        series: 3,
        reps: "8-10",
        restSeconds: 90,
        restDisplay: "90/120 segundos",
        currentLoad: "50",
        targetLoad: "55",
        lastLoad: "45",
        muscleGroup: "COSTAS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2wn3vDV0aGYObI_CM9OYrh1SdwB8Ntn8--Dmrq-g91zrs0tP-21YwFOtp4runZL4h_pv-f7R61HNVMC7810VyyjbqIWZDxAte9uBwdQXxqlOz3p2ZKFNWMPQio9YO28Enn_niVBq8Pz5EsMOhS-5yXHwGUBFZHBgCAyoqkmEsI-_2DgPqwA9ncyoeGJdpxYhSWpKF7QHvsi9BkTVtpQPo5sQE01QQ-WEdf_rYDXLihXvmnGlUQ7r"
      },
      {
        id: "pull-down-abc",
        name: "Pull down",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "35",
        targetLoad: "40",
        lastLoad: "30",
        muscleGroup: "COSTAS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2wn3vDV0aGYObI_CM9OYrh1SdwB8Ntn8--Dmrq-g91zrs0tP-21YwFOtp4runZL4h_pv-f7R61HNVMC7810VyyjbqIWZDxAte9uBwdQXxqlOz3p2ZKFNWMPQio9YO28Enn_niVBq8Pz5EsMOhS-5yXHwGUBFZHBgCAyoqkmEsI-_2DgPqwA9ncyoeGJdpxYhSWpKF7QHvsi9BkTVtpQPo5sQE01QQ-WEdf_rYDXLihXvmnGlUQ7r"
      },
      {
        id: "encolhimento-barra-abc",
        name: "Encolhimento com barra",
        series: 3,
        reps: "6-8",
        restSeconds: 75,
        restDisplay: "60/90 segundos",
        currentLoad: "60",
        targetLoad: "70",
        lastLoad: "55",
        muscleGroup: "TRAPÉZIO",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2wn3vDV0aGYObI_CM9OYrh1SdwB8Ntn8--Dmrq-g91zrs0tP-21YwFOtp4runZL4h_pv-f7R61HNVMC7810VyyjbqIWZDxAte9uBwdQXxqlOz3p2ZKFNWMPQio9YO28Enn_niVBq8Pz5EsMOhS-5yXHwGUBFZHBgCAyoqkmEsI-_2DgPqwA9ncyoeGJdpxYhSWpKF7QHvsi9BkTVtpQPo5sQE01QQ-WEdf_rYDXLihXvmnGlUQ7r"
      },
      {
        id: "crucifixo-invertido-abc",
        name: "Crucifixo invertido na polia",
        series: 3,
        reps: "10",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "12",
        targetLoad: "15",
        lastLoad: "10",
        muscleGroup: "OMBROS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvfVXnt2lLwVNtabx4dPRr85eTZqkluGjww8N7LKqs2t5W95-3suGTRgOvrdLpM62Vx1e8AtsnIUcyCJTHcZf6D3FvtL64hknlz8o5Saw3j-C1iSDVEXVoLpfOMFyKYs9VstUI25ZuKK62nisepah-z95DtFlxBSVRXA8JXYCY0s9hK7aJ1KpbPwSr7gk5AnI2U8YuPBpOIox1q7Xt4uQw2S6sQejzD8ndnpAFcjjQcN9zhhgQDQju"
      },
      {
        id: "rosca-direta-abc",
        name: "Rosca direta",
        series: 3,
        reps: "10",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "14",
        targetLoad: "16",
        lastLoad: "12",
        muscleGroup: "BICEPS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCorJdqiXdrkD_XEl_Vsq9oUhw7a6VdOYIygSDKOeocqguLR_zAKyxGOAA7q0mfCff3iRGhpBKqp-lV9URbHJhigAqlVpheSA-dZw24dzLZ3HyXNDws5YhoRhW0t81oZ1-xgWBgEsOsP_EJjet_K13UhKY08xukXLKK-uaacv1tH_pj5r7T-g-cVDq845m0WoQmSImps4OlcydVg4eDVRyedFQopP-OJUifm7eabQ9ryeq9n-mG8hj2"
      },
      {
        id: "rosca-inversa-abc",
        name: "Rosca inversa",
        series: 3,
        reps: "12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "10",
        targetLoad: "12",
        lastLoad: "8",
        muscleGroup: "ANTEBRAÇO",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCorJdqiXdrkD_XEl_Vsq9oUhw7a6VdOYIygSDKOeocqguLR_zAKyxGOAA7q0mfCff3iRGhpBKqp-lV9URbHJhigAqlVpheSA-dZw24dzLZ3HyXNDws5YhoRhW0t81oZ1-xgWBgEsOsP_EJjet_K13UhKY08xukXLKK-uaacv1tH_pj5r7T-g-cVDq845m0WoQmSImps4OlcydVg4eDVRyedFQopP-OJUifm7eabQ9ryeq9n-mG8hj2"
      }
    ]
  },
  {
    id: "abc-legs",
    divisionId: "abc",
    name: "Treino C - Legs (Pernas e Panturrilhas)",
    alias: "Legs",
    dayOfWeek: "Sexta-feira",
    focus: "Hipertrofia - Membros Inferiores",
    durationMinutes: 65,
    exercises: [
      {
        id: "agachamento-abc",
        name: "Agachamento livre",
        series: 3,
        reps: "6-8",
        restSeconds: 90,
        restDisplay: "90/120 segundos",
        currentLoad: "70",
        targetLoad: "80",
        lastLoad: "65",
        muscleGroup: "PERNAS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      },
      {
        id: "leg-press-abc",
        name: "Leg press",
        series: 3,
        reps: "8-10",
        restSeconds: 90,
        restDisplay: "90/120 segundos",
        currentLoad: "160",
        targetLoad: "180",
        lastLoad: "150",
        muscleGroup: "PERNAS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      },
      {
        id: "stiff-abc",
        name: "Stiff",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "45",
        targetLoad: "50",
        lastLoad: "40",
        muscleGroup: "POSTERIOR",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2wn3vDV0aGYObI_CM9OYrh1SdwB8Ntn8--Dmrq-g91zrs0tP-21YwFOtp4runZL4h_pv-f7R61HNVMC7810VyyjbqIWZDxAte9uBwdQXxqlOz3p2ZKFNWMPQio9YO28Enn_niVBq8Pz5EsMOhS-5yXHwGUBFZHBgCAyoqkmEsI-_2DgPqwA9ncyoeGJdpxYhSWpKF7QHvsi9BkTVtpQPo5sQE01QQ-WEdf_rYDXLihXvmnGlUQ7r"
      },
      {
        id: "passada-abc",
        name: "Passada",
        series: 3,
        reps: "8 passos ida/8 passos volta",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "14",
        targetLoad: "16",
        lastLoad: "12",
        muscleGroup: "PERNAS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      },
      {
        id: "mesa-flexora-abc",
        name: "Mesa flexora",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "35",
        targetLoad: "40",
        lastLoad: "30",
        muscleGroup: "POSTERIOR",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      },
      {
        id: "cadeira-extensora-abc",
        name: "Cadeira extensora",
        series: 3,
        reps: "10",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "50",
        targetLoad: "55",
        lastLoad: "45",
        muscleGroup: "QUADRÍCEPS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      },
      {
        id: "panturrilhas-pe-abc",
        name: "Panturrilhas em pé",
        series: 3,
        reps: "12-15",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "60",
        targetLoad: "70",
        lastLoad: "50",
        muscleGroup: "PANTURRILHA",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      },
      {
        id: "panturrilhas-sentado-abc",
        name: "Panturrilhas sentado",
        series: 3,
        reps: "12-15",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "35",
        targetLoad: "40",
        lastLoad: "30",
        muscleGroup: "PANTURRILHA",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      }
    ]
  },

  // ==========================================
  // 2. DIVISÃO AB (Superior / Inferior - Upper / Lower)
  // ==========================================
  {
    id: "ab-superior",
    divisionId: "ab",
    name: "Treino A - Superior (Upper Body)",
    alias: "Superior",
    dayOfWeek: "Segunda e Quinta",
    focus: "Hipertrofia Geral - Tronco e Membros Superiores",
    durationMinutes: 55,
    exercises: [
      {
        id: "supino-reto-ab",
        name: "Supino Reto com Barra",
        series: 3,
        reps: "6-8",
        restSeconds: 90,
        restDisplay: "90/120 segundos",
        currentLoad: "45",
        targetLoad: "50",
        lastLoad: "40",
        muscleGroup: "PEITO",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvGTG6f9piJfvE09Hxfl-GceHP761b42HRWb9kDHvHAJdIu9_-fabLkGRrVmz2PU_APCvKpvmwyadLJM0YwTTgMHXJPMRdYmwyNEj2WGdegXqsCJr2bwJ9_c-IWeao1ra6-jGM74sOf2EwC_3b9ITrAuzLd_6chzqy421bKaKsZPgm9xUtrPfDfTrTWa-4gkCfWaKHoQM7ZIP5bcQftkM249qI9PhLGwdrEHDNZ8cUGo8r8TBG7iDs"
      },
      {
        id: "puxada-alta-ab",
        name: "Puxada Alta na Polia",
        series: 3,
        reps: "8-10",
        restSeconds: 90,
        restDisplay: "90/120 segundos",
        currentLoad: "45",
        targetLoad: "50",
        lastLoad: "40",
        muscleGroup: "COSTAS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2wn3vDV0aGYObI_CM9OYrh1SdwB8Ntn8--Dmrq-g91zrs0tP-21YwFOtp4runZL4h_pv-f7R61HNVMC7810VyyjbqIWZDxAte9uBwdQXxqlOz3p2ZKFNWMPQio9YO28Enn_niVBq8Pz5EsMOhS-5yXHwGUBFZHBgCAyoqkmEsI-_2DgPqwA9ncyoeGJdpxYhSWpKF7QHvsi9BkTVtpQPo5sQE01QQ-WEdf_rYDXLihXvmnGlUQ7r"
      },
      {
        id: "remada-curvada-ab",
        name: "Remada Curvada com Barra",
        series: 3,
        reps: "8-10",
        restSeconds: 90,
        restDisplay: "90/120 segundos",
        currentLoad: "45",
        targetLoad: "50",
        lastLoad: "40",
        muscleGroup: "COSTAS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2wn3vDV0aGYObI_CM9OYrh1SdwB8Ntn8--Dmrq-g91zrs0tP-21YwFOtp4runZL4h_pv-f7R61HNVMC7810VyyjbqIWZDxAte9uBwdQXxqlOz3p2ZKFNWMPQio9YO28Enn_niVBq8Pz5EsMOhS-5yXHwGUBFZHBgCAyoqkmEsI-_2DgPqwA9ncyoeGJdpxYhSWpKF7QHvsi9BkTVtpQPo5sQE01QQ-WEdf_rYDXLihXvmnGlUQ7r"
      },
      {
        id: "desenvolvimento-ab",
        name: "Desenvolvimento com Halteres",
        series: 3,
        reps: "8-10",
        restSeconds: 75,
        restDisplay: "60/90 segundos",
        currentLoad: "14",
        targetLoad: "16",
        lastLoad: "12",
        muscleGroup: "OMBROS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvfVXnt2lLwVNtabx4dPRr85eTZqkluGjww8N7LKqs2t5W95-3suGTRgOvrdLpM62Vx1e8AtsnIUcyCJTHcZf6D3FvtL64hknlz8o5Saw3j-C1iSDVEXVoLpfOMFyKYs9VstUI25ZuKK62nisepah-z95DtFlxBSVRXA8JXYCY0s9hK7aJ1KpbPwSr7gk5AnI2U8YuPBpOIox1q7Xt4uQw2S6sQejzD8ndnpAFcjjQcN9zhhgQDQju"
      },
      {
        id: "elevacao-lateral-ab",
        name: "Elevação Lateral na Polia",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "8",
        targetLoad: "10",
        lastLoad: "7",
        muscleGroup: "OMBROS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvfVXnt2lLwVNtabx4dPRr85eTZqkluGjww8N7LKqs2t5W95-3suGTRgOvrdLpM62Vx1e8AtsnIUcyCJTHcZf6D3FvtL64hknlz8o5Saw3j-C1iSDVEXVoLpfOMFyKYs9VstUI25ZuKK62nisepah-z95DtFlxBSVRXA8JXYCY0s9hK7aJ1KpbPwSr7gk5AnI2U8YuPBpOIox1q7Xt4uQw2S6sQejzD8ndnpAFcjjQcN9zhhgQDQju"
      },
      {
        id: "rosca-direta-ab",
        name: "Rosca Direta com Barra",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "12",
        targetLoad: "14",
        lastLoad: "10",
        muscleGroup: "BICEPS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCorJdqiXdrkD_XEl_Vsq9oUhw7a6VdOYIygSDKOeocqguLR_zAKyxGOAA7q0mfCff3iRGhpBKqp-lV9URbHJhigAqlVpheSA-dZw24dzLZ3HyXNDws5YhoRhW0t81oZ1-xgWBgEsOsP_EJjet_K13UhKY08xukXLKK-uaacv1tH_pj5r7T-g-cVDq845m0WoQmSImps4OlcydVg4eDVRyedFQopP-OJUifm7eabQ9ryeq9n-mG8hj2"
      },
      {
        id: "triceps-corda-ab",
        name: "Tríceps Corda na Polia",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "17.5",
        targetLoad: "20",
        lastLoad: "15",
        muscleGroup: "TRICEPS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCorJdqiXdrkD_XEl_Vsq9oUhw7a6VdOYIygSDKOeocqguLR_zAKyxGOAA7q0mfCff3iRGhpBKqp-lV9URbHJhigAqlVpheSA-dZw24dzLZ3HyXNDws5YhoRhW0t81oZ1-xgWBgEsOsP_EJjet_K13UhKY08xukXLKK-uaacv1tH_pj5r7T-g-cVDq845m0WoQmSImps4OlcydVg4eDVRyedFQopP-OJUifm7eabQ9ryeq9n-mG8hj2"
      }
    ]
  },
  {
    id: "ab-inferior",
    divisionId: "ab",
    name: "Treino B - Inferior (Lower Body & Core)",
    alias: "Inferior",
    dayOfWeek: "Terça e Sexta",
    focus: "Hipertrofia Geral - Quadríceps, Isquiotibiais e Core",
    durationMinutes: 50,
    exercises: [
      {
        id: "agachamento-ab",
        name: "Agachamento Livre",
        series: 3,
        reps: "6-8",
        restSeconds: 90,
        restDisplay: "90/120 segundos",
        currentLoad: "60",
        targetLoad: "70",
        lastLoad: "55",
        muscleGroup: "PERNAS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      },
      {
        id: "legpress-ab",
        name: "Leg Press 45º",
        series: 3,
        reps: "8-10",
        restSeconds: 90,
        restDisplay: "90/120 segundos",
        currentLoad: "150",
        targetLoad: "170",
        lastLoad: "140",
        muscleGroup: "PERNAS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      },
      {
        id: "stiff-ab",
        name: "Stiff com Halteres ou Barra",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "40",
        targetLoad: "45",
        lastLoad: "35",
        muscleGroup: "POSTERIOR",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2wn3vDV0aGYObI_CM9OYrh1SdwB8Ntn8--Dmrq-g91zrs0tP-21YwFOtp4runZL4h_pv-f7R61HNVMC7810VyyjbqIWZDxAte9uBwdQXxqlOz3p2ZKFNWMPQio9YO28Enn_niVBq8Pz5EsMOhS-5yXHwGUBFZHBgCAyoqkmEsI-_2DgPqwA9ncyoeGJdpxYhSWpKF7QHvsi9BkTVtpQPo5sQE01QQ-WEdf_rYDXLihXvmnGlUQ7r"
      },
      {
        id: "extensora-ab",
        name: "Cadeira Extensora",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "45",
        targetLoad: "50",
        lastLoad: "40",
        muscleGroup: "QUADRÍCEPS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      },
      {
        id: "flexora-ab",
        name: "Mesa Flexora",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "30",
        targetLoad: "35",
        lastLoad: "25",
        muscleGroup: "POSTERIOR",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      },
      {
        id: "panturrilha-ab",
        name: "Panturrilhas em Pé",
        series: 4,
        reps: "12-15",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "50",
        targetLoad: "60",
        lastLoad: "45",
        muscleGroup: "PANTURRILHA",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      },
      {
        id: "abdominal-polia-ab",
        name: "Abdominal na Polia",
        series: 3,
        reps: "15",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "35",
        targetLoad: "40",
        lastLoad: "30",
        muscleGroup: "ABDÔMEN",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCorJdqiXdrkD_XEl_Vsq9oUhw7a6VdOYIygSDKOeocqguLR_zAKyxGOAA7q0mfCff3iRGhpBKqp-lV9URbHJhigAqlVpheSA-dZw24dzLZ3HyXNDws5YhoRhW0t81oZ1-xgWBgEsOsP_EJjet_K13UhKY08xukXLKK-uaacv1tH_pj5r7T-g-cVDq845m0WoQmSImps4OlcydVg4eDVRyedFQopP-OJUifm7eabQ9ryeq9n-mG8hj2"
      }
    ]
  },

  // ==========================================
  // 3. DIVISÃO ABCD (4 Dias - Clássico Hipertrofia)
  // ==========================================
  {
    id: "abcd-peitotriceps",
    divisionId: "abcd",
    name: "Treino A - Peito e Tríceps",
    alias: "Peito & Tríceps",
    dayOfWeek: "Segunda-feira",
    focus: "Hipertrofia - Peitoral e Tríceps com Volume Isolado",
    durationMinutes: 55,
    exercises: [
      {
        id: "supino-reto-abcd",
        name: "Supino reto com barra",
        series: 4,
        reps: "6-8",
        restSeconds: 90,
        restDisplay: "90/120 segundos",
        currentLoad: "55",
        targetLoad: "60",
        lastLoad: "50",
        muscleGroup: "PEITO",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvGTG6f9piJfvE09Hxfl-GceHP761b42HRWb9kDHvHAJdIu9_-fabLkGRrVmz2PU_APCvKpvmwyadLJM0YwTTgMHXJPMRdYmwyNEj2WGdegXqsCJr2bwJ9_c-IWeao1ra6-jGM74sOf2EwC_3b9ITrAuzLd_6chzqy421bKaKsZPgm9xUtrPfDfTrTWa-4gkCfWaKHoQM7ZIP5bcQftkM249qI9PhLGwdrEHDNZ8cUGo8r8TBG7iDs"
      },
      {
        id: "supino-inc-abcd",
        name: "Supino inclinado com halteres",
        series: 3,
        reps: "8-10",
        restSeconds: 90,
        restDisplay: "90/120 segundos",
        currentLoad: "24",
        targetLoad: "26",
        lastLoad: "22",
        muscleGroup: "PEITO",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvfVXnt2lLwVNtabx4dPRr85eTZqkluGjww8N7LKqs2t5W95-3suGTRgOvrdLpM62Vx1e8AtsnIUcyCJTHcZf6D3FvtL64hknlz8o5Saw3j-C1iSDVEXVoLpfOMFyKYs9VstUI25ZuKK62nisepah-z95DtFlxBSVRXA8JXYCY0s9hK7aJ1KpbPwSr7gk5AnI2U8YuPBpOIox1q7Xt4uQw2S6sQejzD8ndnpAFcjjQcN9zhhgQDQju"
      },
      {
        id: "crucifixo-polia-abcd",
        name: "Crucifixo na polia",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "15",
        targetLoad: "17.5",
        lastLoad: "12.5",
        muscleGroup: "PEITO",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCorJdqiXdrkD_XEl_Vsq9oUhw7a6VdOYIygSDKOeocqguLR_zAKyxGOAA7q0mfCff3iRGhpBKqp-lV9URbHJhigAqlVpheSA-dZw24dzLZ3HyXNDws5YhoRhW0t81oZ1-xgWBgEsOsP_EJjet_K13UhKY08xukXLKK-uaacv1tH_pj5r7T-g-cVDq845m0WoQmSImps4OlcydVg4eDVRyedFQopP-OJUifm7eabQ9ryeq9n-mG8hj2"
      },
      {
        id: "voador-abcd",
        name: "Voador (Pec Deck)",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "45",
        targetLoad: "50",
        lastLoad: "40",
        muscleGroup: "PEITO",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCorJdqiXdrkD_XEl_Vsq9oUhw7a6VdOYIygSDKOeocqguLR_zAKyxGOAA7q0mfCff3iRGhpBKqp-lV9URbHJhigAqlVpheSA-dZw24dzLZ3HyXNDws5YhoRhW0t81oZ1-xgWBgEsOsP_EJjet_K13UhKY08xukXLKK-uaacv1tH_pj5r7T-g-cVDq845m0WoQmSImps4OlcydVg4eDVRyedFQopP-OJUifm7eabQ9ryeq9n-mG8hj2"
      },
      {
        id: "triceps-corda-abcd",
        name: "Tríceps corda",
        series: 3,
        reps: "10",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "22.5",
        targetLoad: "25",
        lastLoad: "20",
        muscleGroup: "TRICEPS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCorJdqiXdrkD_XEl_Vsq9oUhw7a6VdOYIygSDKOeocqguLR_zAKyxGOAA7q0mfCff3iRGhpBKqp-lV9URbHJhigAqlVpheSA-dZw24dzLZ3HyXNDws5YhoRhW0t81oZ1-xgWBgEsOsP_EJjet_K13UhKY08xukXLKK-uaacv1tH_pj5r7T-g-cVDq845m0WoQmSImps4OlcydVg4eDVRyedFQopP-OJUifm7eabQ9ryeq9n-mG8hj2"
      },
      {
        id: "rosca-francesa-abcd",
        name: "Rosca francesa",
        series: 3,
        reps: "12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "16",
        targetLoad: "18",
        lastLoad: "14",
        muscleGroup: "TRICEPS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCorJdqiXdrkD_XEl_Vsq9oUhw7a6VdOYIygSDKOeocqguLR_zAKyxGOAA7q0mfCff3iRGhpBKqp-lV9URbHJhigAqlVpheSA-dZw24dzLZ3HyXNDws5YhoRhW0t81oZ1-xgWBgEsOsP_EJjet_K13UhKY08xukXLKK-uaacv1tH_pj5r7T-g-cVDq845m0WoQmSImps4OlcydVg4eDVRyedFQopP-OJUifm7eabQ9ryeq9n-mG8hj2"
      }
    ]
  },
  {
    id: "abcd-costasbiceps",
    divisionId: "abcd",
    name: "Treino B - Costas e Bíceps",
    alias: "Costas & Bíceps",
    dayOfWeek: "Terça-feira",
    focus: "Hipertrofia - Dorsais, Bíceps e Antebraço",
    durationMinutes: 55,
    exercises: [
      {
        id: "barra-fixa-abcd",
        name: "Barra fixa ou Puxada alta",
        series: 4,
        reps: "6-8",
        restSeconds: 90,
        restDisplay: "90/120 segundos",
        currentLoad: "55",
        targetLoad: "60",
        lastLoad: "50",
        muscleGroup: "COSTAS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2wn3vDV0aGYObI_CM9OYrh1SdwB8Ntn8--Dmrq-g91zrs0tP-21YwFOtp4runZL4h_pv-f7R61HNVMC7810VyyjbqIWZDxAte9uBwdQXxqlOz3p2ZKFNWMPQio9YO28Enn_niVBq8Pz5EsMOhS-5yXHwGUBFZHBgCAyoqkmEsI-_2DgPqwA9ncyoeGJdpxYhSWpKF7QHvsi9BkTVtpQPo5sQE01QQ-WEdf_rYDXLihXvmnGlUQ7r"
      },
      {
        id: "remada-curvada-abcd",
        name: "Remada curvada com barra",
        series: 3,
        reps: "8-10",
        restSeconds: 90,
        restDisplay: "90/120 segundos",
        currentLoad: "50",
        targetLoad: "55",
        lastLoad: "45",
        muscleGroup: "COSTAS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2wn3vDV0aGYObI_CM9OYrh1SdwB8Ntn8--Dmrq-g91zrs0tP-21YwFOtp4runZL4h_pv-f7R61HNVMC7810VyyjbqIWZDxAte9uBwdQXxqlOz3p2ZKFNWMPQio9YO28Enn_niVBq8Pz5EsMOhS-5yXHwGUBFZHBgCAyoqkmEsI-_2DgPqwA9ncyoeGJdpxYhSWpKF7QHvsi9BkTVtpQPo5sQE01QQ-WEdf_rYDXLihXvmnGlUQ7r"
      },
      {
        id: "pull-down-abcd",
        name: "Pull down na polia",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "35",
        targetLoad: "40",
        lastLoad: "30",
        muscleGroup: "COSTAS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2wn3vDV0aGYObI_CM9OYrh1SdwB8Ntn8--Dmrq-g91zrs0tP-21YwFOtp4runZL4h_pv-f7R61HNVMC7810VyyjbqIWZDxAte9uBwdQXxqlOz3p2ZKFNWMPQio9YO28Enn_niVBq8Pz5EsMOhS-5yXHwGUBFZHBgCAyoqkmEsI-_2DgPqwA9ncyoeGJdpxYhSWpKF7QHvsi9BkTVtpQPo5sQE01QQ-WEdf_rYDXLihXvmnGlUQ7r"
      },
      {
        id: "remada-serrote-abcd",
        name: "Remada serrote unilateral",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "24",
        targetLoad: "26",
        lastLoad: "22",
        muscleGroup: "COSTAS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2wn3vDV0aGYObI_CM9OYrh1SdwB8Ntn8--Dmrq-g91zrs0tP-21YwFOtp4runZL4h_pv-f7R61HNVMC7810VyyjbqIWZDxAte9uBwdQXxqlOz3p2ZKFNWMPQio9YO28Enn_niVBq8Pz5EsMOhS-5yXHwGUBFZHBgCAyoqkmEsI-_2DgPqwA9ncyoeGJdpxYhSWpKF7QHvsi9BkTVtpQPo5sQE01QQ-WEdf_rYDXLihXvmnGlUQ7r"
      },
      {
        id: "rosca-direta-abcd",
        name: "Rosca direta com barra",
        series: 3,
        reps: "10",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "14",
        targetLoad: "16",
        lastLoad: "12",
        muscleGroup: "BICEPS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCorJdqiXdrkD_XEl_Vsq9oUhw7a6VdOYIygSDKOeocqguLR_zAKyxGOAA7q0mfCff3iRGhpBKqp-lV9URbHJhigAqlVpheSA-dZw24dzLZ3HyXNDws5YhoRhW0t81oZ1-xgWBgEsOsP_EJjet_K13UhKY08xukXLKK-uaacv1tH_pj5r7T-g-cVDq845m0WoQmSImps4OlcydVg4eDVRyedFQopP-OJUifm7eabQ9ryeq9n-mG8hj2"
      },
      {
        id: "rosca-martelo-abcd",
        name: "Rosca martelo",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "12",
        targetLoad: "14",
        lastLoad: "10",
        muscleGroup: "BICEPS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCorJdqiXdrkD_XEl_Vsq9oUhw7a6VdOYIygSDKOeocqguLR_zAKyxGOAA7q0mfCff3iRGhpBKqp-lV9URbHJhigAqlVpheSA-dZw24dzLZ3HyXNDws5YhoRhW0t81oZ1-xgWBgEsOsP_EJjet_K13UhKY08xukXLKK-uaacv1tH_pj5r7T-g-cVDq845m0WoQmSImps4OlcydVg4eDVRyedFQopP-OJUifm7eabQ9ryeq9n-mG8hj2"
      },
      {
        id: "rosca-inversa-abcd",
        name: "Rosca inversa",
        series: 3,
        reps: "12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "10",
        targetLoad: "12",
        lastLoad: "8",
        muscleGroup: "ANTEBRAÇO",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCorJdqiXdrkD_XEl_Vsq9oUhw7a6VdOYIygSDKOeocqguLR_zAKyxGOAA7q0mfCff3iRGhpBKqp-lV9URbHJhigAqlVpheSA-dZw24dzLZ3HyXNDws5YhoRhW0t81oZ1-xgWBgEsOsP_EJjet_K13UhKY08xukXLKK-uaacv1tH_pj5r7T-g-cVDq845m0WoQmSImps4OlcydVg4eDVRyedFQopP-OJUifm7eabQ9ryeq9n-mG8hj2"
      }
    ]
  },
  {
    id: "abcd-pernas",
    divisionId: "abcd",
    name: "Treino C - Pernas e Panturrilhas",
    alias: "Pernas",
    dayOfWeek: "Quinta-feira",
    focus: "Hipertrofia - Pernas Completo e Panturrilhas",
    durationMinutes: 65,
    exercises: [
      {
        id: "agachamento-abcd",
        name: "Agachamento livre",
        series: 4,
        reps: "6-8",
        restSeconds: 90,
        restDisplay: "90/120 segundos",
        currentLoad: "75",
        targetLoad: "85",
        lastLoad: "70",
        muscleGroup: "PERNAS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      },
      {
        id: "leg-press-abcd",
        name: "Leg press 45º",
        series: 3,
        reps: "8-10",
        restSeconds: 90,
        restDisplay: "90/120 segundos",
        currentLoad: "180",
        targetLoad: "200",
        lastLoad: "170",
        muscleGroup: "PERNAS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      },
      {
        id: "stiff-abcd",
        name: "Stiff",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "50",
        targetLoad: "55",
        lastLoad: "45",
        muscleGroup: "POSTERIOR",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2wn3vDV0aGYObI_CM9OYrh1SdwB8Ntn8--Dmrq-g91zrs0tP-21YwFOtp4runZL4h_pv-f7R61HNVMC7810VyyjbqIWZDxAte9uBwdQXxqlOz3p2ZKFNWMPQio9YO28Enn_niVBq8Pz5EsMOhS-5yXHwGUBFZHBgCAyoqkmEsI-_2DgPqwA9ncyoeGJdpxYhSWpKF7QHvsi9BkTVtpQPo5sQE01QQ-WEdf_rYDXLihXvmnGlUQ7r"
      },
      {
        id: "passada-abcd",
        name: "Passada",
        series: 3,
        reps: "8 passos ida/8 passos volta",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "16",
        targetLoad: "18",
        lastLoad: "14",
        muscleGroup: "PERNAS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      },
      {
        id: "cadeira-extensora-abcd",
        name: "Cadeira extensora",
        series: 3,
        reps: "10",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "55",
        targetLoad: "60",
        lastLoad: "50",
        muscleGroup: "QUADRÍCEPS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      },
      {
        id: "mesa-flexora-abcd",
        name: "Mesa flexora",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "40",
        targetLoad: "45",
        lastLoad: "35",
        muscleGroup: "POSTERIOR",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      },
      {
        id: "panturrilhas-pe-abcd",
        name: "Panturrilhas em pé",
        series: 3,
        reps: "12-15",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "65",
        targetLoad: "75",
        lastLoad: "55",
        muscleGroup: "PANTURRILHA",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      },
      {
        id: "panturrilhas-sentado-abcd",
        name: "Panturrilhas sentado",
        series: 3,
        reps: "12-15",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "40",
        targetLoad: "45",
        lastLoad: "35",
        muscleGroup: "PANTURRILHA",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4tQfHxAvXICG2PgtQBahHMkPz6NfjuUGT8pMMQo-Yae5e-IXkV7BxcqYC2e2XTp0FhLk-KE77V7RgXhCybrFmZwcghSWU2z7g0r-QiKUXx4w1XgFB1wZi-xlcrTsDB2ZiBkI03X8y05sj-ouDjn_Yx2AZzDNMt4Y7FbeVwmVQq4abALvGQJZ68cQ4KsQAxH2VeYz08qtEf_uk9YLGqmQ15viQ2VgVqLzeF8881woQ4BB-K1kaVqgm"
      }
    ]
  },
  {
    id: "abcd-ombrostrapezio",
    divisionId: "abcd",
    name: "Treino D - Ombros, Trapézio e Abdômen",
    alias: "Ombros & Abdômen",
    dayOfWeek: "Sexta-feira",
    focus: "Hipertrofia - Deltoides 3D, Trapézio e Estabilidade Abdominal",
    durationMinutes: 55,
    exercises: [
      {
        id: "desenvolvimento-halteres-abcd",
        name: "Desenvolvimento com halteres",
        series: 4,
        reps: "6-8",
        restSeconds: 75,
        restDisplay: "60/90 segundos",
        currentLoad: "18",
        targetLoad: "20",
        lastLoad: "16",
        muscleGroup: "OMBROS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvfVXnt2lLwVNtabx4dPRr85eTZqkluGjww8N7LKqs2t5W95-3suGTRgOvrdLpM62Vx1e8AtsnIUcyCJTHcZf6D3FvtL64hknlz8o5Saw3j-C1iSDVEXVoLpfOMFyKYs9VstUI25ZuKK62nisepah-z95DtFlxBSVRXA8JXYCY0s9hK7aJ1KpbPwSr7gk5AnI2U8YuPBpOIox1q7Xt4uQw2S6sQejzD8ndnpAFcjjQcN9zhhgQDQju"
      },
      {
        id: "elevacao-lateral-polia-abcd",
        name: "Elevação lateral na polia",
        series: 4,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "10",
        targetLoad: "12",
        lastLoad: "8",
        muscleGroup: "OMBROS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvfVXnt2lLwVNtabx4dPRr85eTZqkluGjww8N7LKqs2t5W95-3suGTRgOvrdLpM62Vx1e8AtsnIUcyCJTHcZf6D3FvtL64hknlz8o5Saw3j-C1iSDVEXVoLpfOMFyKYs9VstUI25ZuKK62nisepah-z95DtFlxBSVRXA8JXYCY0s9hK7aJ1KpbPwSr7gk5AnI2U8YuPBpOIox1q7Xt4uQw2S6sQejzD8ndnpAFcjjQcN9zhhgQDQju"
      },
      {
        id: "crucifixo-invertido-abcd",
        name: "Crucifixo invertido na polia",
        series: 3,
        reps: "10-12",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "12.5",
        targetLoad: "15",
        lastLoad: "10",
        muscleGroup: "OMBROS",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvfVXnt2lLwVNtabx4dPRr85eTZqkluGjww8N7LKqs2t5W95-3suGTRgOvrdLpM62Vx1e8AtsnIUcyCJTHcZf6D3FvtL64hknlz8o5Saw3j-C1iSDVEXVoLpfOMFyKYs9VstUI25ZuKK62nisepah-z95DtFlxBSVRXA8JXYCY0s9hK7aJ1KpbPwSr7gk5AnI2U8YuPBpOIox1q7Xt4uQw2S6sQejzD8ndnpAFcjjQcN9zhhgQDQju"
      },
      {
        id: "encolhimento-barra-abcd",
        name: "Encolhimento com barra",
        series: 4,
        reps: "6-8",
        restSeconds: 75,
        restDisplay: "60/90 segundos",
        currentLoad: "65",
        targetLoad: "75",
        lastLoad: "60",
        muscleGroup: "TRAPÉZIO",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ2wn3vDV0aGYObI_CM9OYrh1SdwB8Ntn8--Dmrq-g91zrs0tP-21YwFOtp4runZL4h_pv-f7R61HNVMC7810VyyjbqIWZDxAte9uBwdQXxqlOz3p2ZKFNWMPQio9YO28Enn_niVBq8Pz5EsMOhS-5yXHwGUBFZHBgCAyoqkmEsI-_2DgPqwA9ncyoeGJdpxYhSWpKF7QHvsi9BkTVtpQPo5sQE01QQ-WEdf_rYDXLihXvmnGlUQ7r"
      },
      {
        id: "abdominal-polia-abcd",
        name: "Abdominal na polia",
        series: 3,
        reps: "15",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "40",
        targetLoad: "45",
        lastLoad: "35",
        muscleGroup: "ABDÔMEN",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCorJdqiXdrkD_XEl_Vsq9oUhw7a6VdOYIygSDKOeocqguLR_zAKyxGOAA7q0mfCff3iRGhpBKqp-lV9URbHJhigAqlVpheSA-dZw24dzLZ3HyXNDws5YhoRhW0t81oZ1-xgWBgEsOsP_EJjet_K13UhKY08xukXLKK-uaacv1tH_pj5r7T-g-cVDq845m0WoQmSImps4OlcydVg4eDVRyedFQopP-OJUifm7eabQ9ryeq9n-mG8hj2"
      },
      {
        id: "prancha-abcd",
        name: "Prancha isométrica",
        series: 3,
        reps: "60s",
        restSeconds: 60,
        restDisplay: "60 segundos",
        currentLoad: "BW",
        targetLoad: "BW",
        lastLoad: "BW",
        muscleGroup: "CORE",
        imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCorJdqiXdrkD_XEl_Vsq9oUhw7a6VdOYIygSDKOeocqguLR_zAKyxGOAA7q0mfCff3iRGhpBKqp-lV9URbHJhigAqlVpheSA-dZw24dzLZ3HyXNDws5YhoRhW0t81oZ1-xgWBgEsOsP_EJjet_K13UhKY08xukXLKK-uaacv1tH_pj5r7T-g-cVDq845m0WoQmSImps4OlcydVg4eDVRyedFQopP-OJUifm7eabQ9ryeq9n-mG8hj2"
      }
    ]
  }
];

export const defaultStrategies: WorkoutStrategy[] = [
  // ==========================================
  // ABC Division - Push / Pull / Legs (Hipertrofia.org)
  // ==========================================
  {
    id: "abc",
    name: "Divisão ABC (Push / Pull / Legs)",
    tag: "Hipertrofia Clássico (3 Dias)",
    frequency: "Segunda, Quarta e Sexta",
    description: "Ficha clássica para hipertrofia com divisão Push/Pull/Legs e dias de descanso intercalados para máxima recuperação muscular e síntese proteica.",
    sourceTitle: "Ficha de treino ABC para hipertrofia (Hipertrofia.org)",
    sourceUrl: "https://www.hipertrofia.org/blog/2018/12/17/treino-abc/",
    scheduleList: [
      { day: "Segunda", activity: "Treino A - Push (Peito, Tríceps e Ombros)", isRest: false },
      { day: "Terça", activity: "Descanso e Recuperação", isRest: true },
      { day: "Quarta", activity: "Treino B - Pull (Costas, Bíceps e Trapézio)", isRest: false },
      { day: "Quinta", activity: "Descanso e Recuperação", isRest: true },
      { day: "Sexta", activity: "Treino C - Legs (Pernas e Panturrilhas)", isRest: false },
      { day: "Sábado", activity: "Descanso", isRest: true },
      { day: "Domingo", activity: "Descanso", isRest: true }
    ],
    cards: [
      {
        id: "abc-a",
        letter: "A",
        subtitle: "Push (Peito, Tríceps e Ombros)",
        routineId: "abc-push",
        day: "Segunda-feira",
        pills: ["Peito", "Ombros", "Tríceps"],
        details: [
          "Supino reto com barra (3x 6-8 | 90-120s)",
          "Supino inclinado c/ halteres (3x 8-10 | 90-120s)",
          "Crucifixo na polia (3x 10-12 | 60s)",
          "Desenvolvimento c/ halteres (3x 6-8 | 60-90s)",
          "Elevação lateral na polia (3x 10-12 | 60s)",
          "Tríceps corda (3x 10 | 60s)",
          "Rosca francesa (3x 12 | 60s)"
        ]
      },
      {
        id: "abc-b",
        letter: "B",
        subtitle: "Pull (Costas, Bíceps e Trapézio)",
        routineId: "abc-pull",
        day: "Quarta-feira",
        pills: ["Costas", "Bíceps", "Trapézio"],
        details: [
          "Barra fixa (3x 6-8 | 90-120s)",
          "Remada curvada (3x 8-10 | 90-120s)",
          "Pull down (3x 10-12 | 60s)",
          "Encolhimento c/ barra (3x 6-8 | 60-90s)",
          "Crucifixo invertido polia (3x 10 | 60s)",
          "Rosca direta (3x 10 | 60s)",
          "Rosca inversa (3x 12 | 60s)"
        ]
      },
      {
        id: "abc-c",
        letter: "C",
        subtitle: "Legs (Pernas e Panturrilhas)",
        routineId: "abc-legs",
        day: "Sexta-feira",
        pills: ["Quadríceps", "Posterior", "Panturrilhas"],
        details: [
          "Agachamento livre (3x 6-8 | 90-120s)",
          "Leg press (3x 8-10 | 90-120s)",
          "Stiff (3x 10-12 | 60s)",
          "Passada (3x 8 passos ida/volta | 60s)",
          "Mesa flexora (3x 10-12 | 60s)",
          "Cadeira extensora (3x 10 | 60s)",
          "Panturrilhas em pé e sentado (3x 12-15 | 60s)"
        ]
      }
    ]
  },

  // ==========================================
  // AB Division - Upper / Lower
  // ==========================================
  {
    id: "ab",
    name: "Divisão AB (Upper / Lower)",
    tag: "Hipertrofia & Força (2 a 4 Dias)",
    frequency: "2 a 4 dias por semana",
    description: "Divisão de alta frequência que separa o corpo entre tronco superior e membros inferiores. Ideal para estímulo balanceado e alta síntese proteica.",
    sourceTitle: "Rotina AB Upper/Lower para Hipertrofia",
    scheduleList: [
      { day: "Segunda", activity: "Treino A - Superior (Upper)", isRest: false },
      { day: "Terça", activity: "Treino B - Inferior (Lower)", isRest: false },
      { day: "Quarta", activity: "Descanso", isRest: true },
      { day: "Quinta", activity: "Treino A - Superior (Upper)", isRest: false },
      { day: "Sexta", activity: "Treino B - Inferior (Lower)", isRest: false },
      { day: "Sábado", activity: "Descanso", isRest: true },
      { day: "Domingo", activity: "Descanso", isRest: true }
    ],
    cards: [
      {
        id: "ab-a",
        letter: "A",
        subtitle: "Superior (Upper Body)",
        routineId: "ab-superior",
        day: "Segunda & Quinta",
        pills: ["Peito", "Costas", "Ombros", "Braços"],
        details: [
          "Supino reto com barra (3x 6-8 | 90-120s)",
          "Puxada alta na polia (3x 8-10 | 90-120s)",
          "Remada curvada barra (3x 8-10 | 90-120s)",
          "Desenvolvimento halteres (3x 8-10 | 60-90s)",
          "Elevação lateral na polia (3x 10-12 | 60s)",
          "Rosca direta com barra (3x 10-12 | 60s)",
          "Tríceps corda na polia (3x 10-12 | 60s)"
        ]
      },
      {
        id: "ab-b",
        letter: "B",
        subtitle: "Inferior (Lower Body & Core)",
        routineId: "ab-inferior",
        day: "Terça & Sexta",
        pills: ["Quadríceps", "Posterior", "Panturrilhas", "Abdômen"],
        details: [
          "Agachamento livre (3x 6-8 | 90-120s)",
          "Leg press 45º (3x 8-10 | 90-120s)",
          "Stiff com halteres (3x 10-12 | 60s)",
          "Cadeira extensora (3x 10-12 | 60s)",
          "Mesa flexora (3x 10-12 | 60s)",
          "Panturrilhas em pé (4x 12-15 | 60s)",
          "Abdominal na polia (3x 15 | 60s)"
        ]
      }
    ]
  },

  // ==========================================
  // ABCD Division - 4 Dias Hipertrofia
  // ==========================================
  {
    id: "abcd",
    name: "Divisão ABCD (4 Dias de Hipertrofia)",
    tag: "Volume & Foco Isolado (4 Dias)",
    frequency: "Segunda, Terça, Quinta e Sexta",
    description: "Divisão de 4 dias onde cada grupamento principal recebe atenção dedicada com maior volume por sessão e tempo adequado de supercompensação.",
    sourceTitle: "Rotina ABCD para Hipertrofia Muscular Avançada",
    scheduleList: [
      { day: "Segunda", activity: "Treino A - Peito e Tríceps", isRest: false },
      { day: "Terça", activity: "Treino B - Costas e Bíceps", isRest: false },
      { day: "Quarta", activity: "Descanso", isRest: true },
      { day: "Quinta", activity: "Treino C - Pernas e Panturrilhas", isRest: false },
      { day: "Sexta", activity: "Treino D - Ombros, Trapézio e Abdômen", isRest: false },
      { day: "Sábado", activity: "Descanso", isRest: true },
      { day: "Domingo", activity: "Descanso", isRest: true }
    ],
    cards: [
      {
        id: "abcd-a",
        letter: "A",
        subtitle: "Peito e Tríceps",
        routineId: "abcd-peitotriceps",
        day: "Segunda-feira",
        pills: ["Peito", "Tríceps"],
        details: [
          "Supino reto com barra (4x 6-8 | 90-120s)",
          "Supino inclinado c/ halteres (3x 8-10 | 90-120s)",
          "Crucifixo na polia (3x 10-12 | 60s)",
          "Voador Pec Deck (3x 10-12 | 60s)",
          "Tríceps corda (3x 10 | 60s)",
          "Rosca francesa (3x 12 | 60s)"
        ]
      },
      {
        id: "abcd-b",
        letter: "B",
        subtitle: "Costas e Bíceps",
        routineId: "abcd-costasbiceps",
        day: "Terça-feira",
        pills: ["Costas", "Bíceps", "Antebraço"],
        details: [
          "Barra fixa / Puxada (4x 6-8 | 90-120s)",
          "Remada curvada barra (3x 8-10 | 90-120s)",
          "Pull down na polia (3x 10-12 | 60s)",
          "Remada serrote (3x 10-12 | 60s)",
          "Rosca direta barra (3x 10 | 60s)",
          "Rosca martelo (3x 10-12 | 60s)",
          "Rosca inversa (3x 12 | 60s)"
        ]
      },
      {
        id: "abcd-c",
        letter: "C",
        subtitle: "Pernas e Panturrilhas",
        routineId: "abcd-pernas",
        day: "Quinta-feira",
        pills: ["Quadríceps", "Posterior", "Panturrilhas"],
        details: [
          "Agachamento livre (4x 6-8 | 90-120s)",
          "Leg press 45º (3x 8-10 | 90-120s)",
          "Stiff com barra (3x 10-12 | 60s)",
          "Passada (3x 8 passos ida/volta | 60s)",
          "Cadeira extensora (3x 10 | 60s)",
          "Mesa flexora (3x 10-12 | 60s)",
          "Panturrilhas em pé e sentado (3x 12-15 | 60s)"
        ]
      },
      {
        id: "abcd-d",
        letter: "D",
        subtitle: "Ombros, Trapézio e Abdômen",
        routineId: "abcd-ombrostrapezio",
        day: "Sexta-feira",
        pills: ["Ombros", "Trapézio", "Abdômen"],
        details: [
          "Desenvolvimento halteres (4x 6-8 | 60-90s)",
          "Elevação lateral na polia (4x 10-12 | 60s)",
          "Crucifixo invertido polia (3x 10-12 | 60s)",
          "Encolhimento com barra (4x 6-8 | 60-90s)",
          "Abdominal na polia (3x 15 | 60s)",
          "Prancha isométrica (3x 60s | 60s)"
        ]
      }
    ]
  }
];

export const defaultLogs: LoadLog[] = [
  { id: "log-1", exerciseId: "supino-reto-abc", dateStr: "21 Abr", sessionNum: 16, loadKg: 42, reps: 8, notes: "Boa amplitude e cadência controlada" },
  { id: "log-2", exerciseId: "supino-reto-abc", dateStr: "28 Abr", sessionNum: 18, loadKg: 45, reps: 8, notes: "Carga subindo com segurança" },
  { id: "log-3", exerciseId: "supino-reto-abc", dateStr: "05 Mai", sessionNum: 20, loadKg: 48, reps: 7, notes: "Leve queimação na 7ª repetição" },
  { id: "log-4", exerciseId: "supino-reto-abc", dateStr: "12 Mai", sessionNum: 22, loadKg: 50, reps: 8, notes: "Excelente pump e estabilização de escápulas" },
  { id: "log-5", exerciseId: "supino-reto-abc", dateStr: "Hoje", sessionNum: 24, loadKg: 50, reps: 8, notes: "8 reps completas sem ajuda. Pronto para 52kg!" },
  
  { id: "log-6", exerciseId: "supino-inc-abc", dateStr: "21 Abr", sessionNum: 16, loadKg: 18, reps: 10, notes: "Foco no feixe clavicular do peitoral" },
  { id: "log-7", exerciseId: "supino-inc-abc", dateStr: "28 Abr", sessionNum: 18, loadKg: 20, reps: 10 },
  { id: "log-8", exerciseId: "supino-inc-abc", dateStr: "05 Mai", sessionNum: 20, loadKg: 22, reps: 8, notes: "Ombro estável, boa pegada" },
  { id: "log-9", exerciseId: "supino-inc-abc", dateStr: "Hoje", sessionNum: 24, loadKg: 22, reps: 10, notes: "Última rep com falha concêntrica limpa" },

  { id: "log-10", exerciseId: "agachamento-abc", dateStr: "25 Abr", sessionNum: 17, loadKg: 60, reps: 8, notes: "Profundidade abaixo de 90 graus" },
  { id: "log-11", exerciseId: "agachamento-abc", dateStr: "02 Mai", sessionNum: 19, loadKg: 65, reps: 8 },
  { id: "log-12", exerciseId: "agachamento-abc", dateStr: "09 Mai", sessionNum: 21, loadKg: 70, reps: 7, notes: "Cansaço lombar na última série" },
  { id: "log-13", exerciseId: "agachamento-abc", dateStr: "Hoje", sessionNum: 23, loadKg: 70, reps: 8, notes: "Sensação ótima, joelhos firmes" }
];

export const weeklyVolumeData = {
  labels: ["S", "T", "Q", "Q", "S", "S", "D"],
  prevWeek: [40, 60, 55, 80, 70, 45, 20],
  currentWeek: [45, 65, 60, 85, 75, 95, 30],
  currentDayIndex: 5
};

export const titanTips = [
  "No treino ABC (Push/Pull/Legs), os dias de descanso (terça, quinta e fim de semana) são fundamentais para o crescimento muscular.",
  "Descansos de 90 a 120 segundos nos exercícios compostos (como Supino, Barra Fixa e Agachamento) maximizam o recrutamento de fibras do tipo II.",
  "Cadência controlada na fase excêntrica (3 segundos descendo a carga) gera maior microlesão muscular estimulatória.",
  "Mantenha a hidratação ideal durante todo o treino para evitar perda de rendimento e proteger as articulações.",
  "Treinos em divisão AB (Upper/Lower) permitem treinar cada grupo 2x por semana, estimulando a síntese proteica com alta frequência."
];
