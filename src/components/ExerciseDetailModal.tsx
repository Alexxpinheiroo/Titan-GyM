/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  X,
  Play,
  Pause,
  AlertCircle,
  CheckCircle2,
  Dumbbell,
  Layers,
  Sparkles,
  Info
} from "lucide-react";
import { Exercise } from "../types";
import { findExerciseGuide, ExerciseGuide } from "../data/exerciseDatabase";

interface ExerciseDetailModalProps {
  exercise: Exercise;
  onClose: () => void;
}

export default function ExerciseDetailModal({ exercise, onClose }: ExerciseDetailModalProps) {
  // Try to find matching exercise in the 248-exercise database
  const guide: ExerciseGuide | undefined = findExerciseGuide(exercise.name);

  const videoUrl = exercise.videoUrl || guide?.videoUrl;
  const imageUrl = exercise.imgUrl || guide?.imageUrl;
  const instructions = exercise.instructions || guide?.instructions || [];
  const importantTips = exercise.importantTips || guide?.importantTips || [];
  const primaryMuscles = guide?.primaryMuscles || [exercise.muscleGroup];
  const secondaryMuscles = exercise.secondaryMuscles || guide?.secondaryMuscles || [];
  const equipment = exercise.equipment || guide?.equipment || "Academia";
  const category = exercise.category || guide?.category || "Musculação";

  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] bg-[#141b1a] border border-[#253230] rounded-3xl overflow-hidden shadow-2xl flex flex-col text-left font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#253230] bg-[#182020]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#CDFC39]/15 border border-[#CDFC39]/30 flex items-center justify-center text-[#CDFC39]">
              <Info className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-[#CDFC39] block">
                Guia de Execução & Postura
              </span>
              <h3 className="text-lg font-bold text-white leading-tight font-display">
                {exercise.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#131a19] border border-[#253230] text-gray-400 hover:text-white flex items-center justify-center transition-all active:scale-95"
            aria-label="Fechar guia"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5">
          {/* Video or Image Preview */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#111616] border border-[#253230] shadow-inner flex items-center justify-center group">
            {videoUrl ? (
              <>
                <video
                  ref={videoRef}
                  src={videoUrl}
                  poster={imageUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={toggleVideoPlayback}
                  className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity active:scale-90"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
                </button>
              </>
            ) : imageUrl ? (
              <img
                src={imageUrl}
                alt={exercise.name}
                className="w-full h-full object-contain p-2"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-500 gap-2">
                <Dumbbell className="w-8 h-8 text-gray-600" />
                <span className="text-xs">Visualização não disponível</span>
              </div>
            )}

            {/* Badges on Video */}
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 flex-wrap">
              <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-sm text-[#CDFC39] border border-[#CDFC39]/30 text-[10px] font-black uppercase tracking-wider">
                {equipment}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-sm text-gray-300 border border-white/10 text-[10px] font-bold">
                {category}
              </span>
            </div>
          </div>

          {/* Muscle Activation Mapping */}
          <div className="bg-[#182020] border border-[#253230] rounded-2xl p-4 space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#CDFC39]" />
              Ativação Muscular
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {primaryMuscles.map((muscle, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-xl bg-[#CDFC39]/15 border border-[#CDFC39]/30 text-[#CDFC39] text-xs font-bold flex items-center gap-1"
                >
                  <Sparkles className="w-3 h-3" />
                  {muscle} (Primário)
                </span>
              ))}

              {secondaryMuscles.map((muscle, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-xl bg-[#131a19] border border-[#253230] text-gray-300 text-xs font-medium"
                >
                  {muscle}
                </span>
              ))}
            </div>
          </div>

          {/* Step-by-Step Instructions */}
          {instructions.length > 0 && (
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#CDFC39]" />
                Como Executar Corretamente
              </h4>

              <div className="space-y-2">
                {instructions.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-[#182020]/70 border border-[#253230] rounded-xl p-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#CDFC39]/20 text-[#CDFC39] text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Important Posture Tips & Errors */}
          {importantTips.length > 0 && (
            <div className="bg-[#241c14] border border-amber-500/30 rounded-2xl p-4 space-y-2.5">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                Dicas Importantes & Erros a Evitar
              </h4>

              <ul className="space-y-1.5">
                {importantTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0"></span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom Close Button */}
        <div className="p-4 bg-[#182020] border-t border-[#253230]">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-xl bg-[#CDFC39] hover:bg-[#bbf224] text-black font-black text-sm uppercase tracking-wider transition-all active:scale-98 shadow-lg shadow-[#CDFC39]/20"
          >
            Entendido, Voltar ao Treino
          </button>
        </div>
      </div>
    </div>
  );
}
