/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Home, Dumbbell, Award, TrendingUp, User } from "lucide-react";

interface BottomNavBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function BottomNavBar({ activeTab, onTabChange }: BottomNavBarProps) {
  const navItems = [
    { id: "home", label: "Início", icon: Home },
    { id: "workouts", label: "Treinos", icon: Dumbbell },
    { id: "plans", label: "Planos", icon: Award },
    { id: "progress", label: "Progresso", icon: TrendingUp },
    { id: "profile", label: "Perfil", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-40 bg-[#131a19]/95 backdrop-blur-lg border-t border-[#253230] flex justify-around items-center px-4 pt-2 pb-safe min-h-20 shadow-2xl">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={`flex flex-col items-center justify-center transition-all duration-150 active:scale-95 relative ${
              isActive
                ? "bg-[#CDFC39] text-black rounded-full px-5 py-2 font-extrabold flex-row gap-2 shadow-lg shadow-[#CDFC39]/20"
                : "text-gray-400 hover:text-white px-3 py-1.5"
            }`}
            id={`nav-tab-${item.id}`}
          >
            <Icon className={`w-5 h-5 ${isActive ? "stroke-[2.5]" : ""}`} />
            <span className={`text-xs tracking-tight ${isActive ? "block font-extrabold" : "block mt-1 font-medium"}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
