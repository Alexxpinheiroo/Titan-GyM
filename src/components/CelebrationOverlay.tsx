/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from "react";
import { Trophy, Award } from "lucide-react";

interface CelebrationOverlayProps {
  isVisible: boolean;
  type: "workout" | "milestone";
  message?: string;
  subMessage?: string;
  onClose: () => void;
}

interface ConfettiPiece {
  id: number;
  x: number; // percentage left
  color: string;
  size: number;
  delay: number;
  duration: number;
  rotate: number;
}

export default function CelebrationOverlay({
  isVisible,
  type,
  message = "META BATIDA!",
  subMessage = "+10kg de recorde pessoal",
  onClose,
}: CelebrationOverlayProps) {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (isVisible) {
      const colors = ["#CDFC39", "#e2ff6b", "#bbf224", "#ffffff", "#f0ffb5", "#a3e635"];
      const pieces: ConfettiPiece[] = Array.from({ length: 80 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 6,
        delay: Math.random() * 0.5,
        duration: Math.random() * 2 + 1.5,
        rotate: Math.random() * 360,
      }));
      setConfetti(pieces);

      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    } else {
      setConfetti([]);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm transition-opacity duration-300 pointer-events-none">
      {/* Confetti rain */}
      <div className="absolute inset-0 overflow-hidden select-none pointer-events-none z-10">
        {confetti.map((piece) => (
          <div
            key={piece.id}
            className="absolute rounded-sm animate-confetti-fall"
            style={{
              left: `${piece.x}%`,
              top: `-20px`,
              width: `${piece.size}px`,
              height: `${piece.size}px`,
              backgroundColor: piece.color,
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
              transform: `rotate(${piece.rotate}deg)`,
              opacity: 0.9,
            }}
          />
        ))}
      </div>

      {/* Main card */}
      <div className="bg-[#182020] text-white px-8 py-8 rounded-3xl shadow-2xl flex flex-col items-center gap-3 animate-scale-up text-center max-w-xs pointer-events-auto mx-4 z-20 border-2 border-[#CDFC39] shadow-[#CDFC39]/20">
        <div className="w-16 h-16 rounded-full bg-[#CDFC39]/15 border border-[#CDFC39]/30 flex items-center justify-center mb-1">
          {type === "milestone" ? (
            <Trophy className="w-9 h-9 text-[#CDFC39] animate-bounce" />
          ) : (
            <Award className="w-9 h-9 text-[#CDFC39] animate-pulse" />
          )}
        </div>
        <h2 className="font-display text-3xl font-black tracking-tight uppercase leading-tight text-white">
          {message}
        </h2>
        <p className="text-sm font-semibold tracking-wide uppercase text-gray-300">
          {subMessage}
        </p>
        <div className="mt-3 text-xs bg-[#CDFC39] text-black px-4 py-1.5 rounded-full font-black uppercase tracking-wider shadow-md shadow-[#CDFC39]/25">
          {type === "milestone" ? "Aço Puro! ⚔️" : "Missão Cumprida! 💪"}
        </div>
      </div>
    </div>
  );
}
