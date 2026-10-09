/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import StepWrapper from "./StepWrapper";
import { EQUIPMENT_CATEGORIES } from "./equipmentData";
import { EquipmentVectorDrawing, EQUIPMENT_META } from "./EquipmentIllustrations";
import { Search, ChevronDown, ChevronUp, HelpCircle, X, Check, Info } from "lucide-react";

interface EquipmentStepProps {
  progress: number;
  selectedEquipment: string[];
  onChange: (items: string[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function EquipmentStep({
  progress,
  selectedEquipment,
  onChange,
  onNext,
  onBack,
}: EquipmentStepProps) {
  const [search, setSearch] = useState("");
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});
  const [inspectingEquipment, setInspectingEquipment] = useState<string | null>(null);

  const selectedSet = useMemo(() => new Set(selectedEquipment), [selectedEquipment]);

  const toggleItem = (item: string) => {
    if (selectedSet.has(item)) {
      onChange(selectedEquipment.filter((x) => x !== item));
    } else {
      onChange([...selectedEquipment, item]);
    }
  };

  const toggleCategorySelectAll = (categoryItems: string[]) => {
    const allSelected = categoryItems.every((item) => selectedSet.has(item));
    if (allSelected) {
      // Unselect all in this category
      onChange(selectedEquipment.filter((item) => !categoryItems.includes(item)));
    } else {
      // Select all in this category
      const toAdd = categoryItems.filter((item) => !selectedSet.has(item));
      onChange([...selectedEquipment, ...toAdd]);
    }
  };

  const toggleCollapse = (catId: string) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return EQUIPMENT_CATEGORIES;
    const query = search.toLowerCase();
    return EQUIPMENT_CATEGORIES.map((cat) => ({
      ...cat,
      items: cat.items.filter((item) => item.toLowerCase().includes(query)),
    })).filter((cat) => cat.items.length > 0);
  }, [search]);

  const inspectedMeta = inspectingEquipment ? EQUIPMENT_META[inspectingEquipment] : null;
  const isInspectedChecked = inspectingEquipment ? selectedSet.has(inspectingEquipment) : false;

  return (
    <StepWrapper
      progress={progress}
      onBack={onBack}
      contentClassName="justify-start"
      title="Quais equipamentos você tem à disposição?"
      subtitle="Isso pode ser alterado a qualquer momento"
      bottomButton={{
        label: `PRÓXIMO (${selectedEquipment.length} selecionados)`,
        onClick: onNext,
      }}
    >
      <div className="flex flex-col gap-3.5 w-full">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquisar equipamento (ex: banco, halteres, leg)..."
            className="w-full bg-[#182020] border border-[#253230] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#CDFC39] transition-colors"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white bg-white/10 px-2 py-0.5 rounded"
            >
              Limpar
            </button>
          )}
        </div>

        {/* Categories list */}
        <div className="flex flex-col gap-3.5 max-h-[64vh] sm:max-h-[68vh] overflow-y-auto pr-1 pb-8">
          {filteredCategories.map((category) => {
            const isCollapsed = collapsedCategories[category.id] && !search;
            const categorySelectedCount = category.items.filter((i) => selectedSet.has(i)).length;
            const isAllCategorySelected =
              category.items.length > 0 && categorySelectedCount === category.items.length;

            return (
              <div
                key={category.id}
                className="bg-[#182020] rounded-2xl border border-[#253230] overflow-hidden shadow-sm"
              >
                {/* Header */}
                <div className="p-3.5 bg-[#1f2a29] flex items-center justify-between gap-2 border-b border-[#253230]">
                  <button
                    type="button"
                    onClick={() => toggleCollapse(category.id)}
                    className="flex items-center gap-2 text-left font-bold text-sm text-white hover:text-[#CDFC39] transition-colors"
                  >
                    {isCollapsed ? (
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    ) : (
                      <ChevronUp className="w-4 h-4 text-[#CDFC39]" />
                    )}
                    <span>{category.name}</span>
                    <span className="text-[11px] font-semibold text-gray-400 bg-white/5 px-2 py-0.5 rounded-full">
                      {categorySelectedCount}/{category.items.length}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleCategorySelectAll(category.items)}
                    className="text-xs font-semibold text-[#CDFC39] hover:underline px-2 py-1"
                  >
                    {isAllCategorySelected ? "Desmarcar todos" : "Selecionar todos"}
                  </button>
                </div>

                {/* Items - Spaced clean cards with distinct breathing room */}
                {!isCollapsed && (
                  <div className="p-2.5 sm:p-3 flex flex-col gap-2.5 bg-[#131a19]/70">
                    {category.items.map((item) => {
                      const isChecked = selectedSet.has(item);
                      const meta = EQUIPMENT_META[item];

                      return (
                        <div
                          key={item}
                          onClick={() => toggleItem(item)}
                          className={`flex items-center justify-between p-3 rounded-xl border transition-all cursor-pointer group ${
                            isChecked
                              ? "bg-[#182020] border-[#CDFC39]/40 shadow-sm shadow-[#CDFC39]/5 ring-1 ring-[#CDFC39]/20"
                              : "bg-[#182020] border-[#253230] hover:border-[#354644] hover:bg-[#1d2726]"
                          }`}
                        >
                          {/* Left Drawing + Info */}
                          <div className="flex items-center gap-3 flex-1 min-w-0 pr-2">
                            {/* Drawing Thumbnail */}
                            <div
                              onClick={(e) => {
                                e.stopPropagation();
                                setInspectingEquipment(item);
                              }}
                              title="Clique para ampliar o desenho e detalhes"
                              className={`w-[52px] h-[52px] rounded-xl flex items-center justify-center shrink-0 p-1.5 transition-all cursor-pointer ${
                                isChecked
                                  ? "bg-[#182020] border border-[#CDFC39]/50 shadow-sm shadow-[#CDFC39]/15 ring-1 ring-[#CDFC39]/30"
                                  : "bg-[#111716] border border-white/5 group-hover:border-white/15"
                              }`}
                            >
                              <EquipmentVectorDrawing name={item} active={isChecked} />
                            </div>

                            {/* Label and descriptive helper */}
                            <div className="flex-1 min-w-0 flex flex-col justify-center">
                              <div className="flex items-center gap-1.5">
                                <span
                                  className={`text-sm font-bold truncate ${
                                    isChecked ? "text-white" : "text-gray-200"
                                  }`}
                                >
                                  {item}
                                </span>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setInspectingEquipment(item);
                                  }}
                                  className="text-gray-400 hover:text-[#CDFC39] p-0.5 rounded transition-colors shrink-0"
                                  title="Como identificar na academia"
                                >
                                  <HelpCircle className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              {meta?.shortDesc && (
                                <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1 leading-snug font-normal">
                                  {meta.shortDesc}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Switch toggle */}
                          <div
                            className={`w-11 h-6 rounded-full transition-colors relative flex items-center px-0.5 shrink-0 ml-1 ${
                              isChecked ? "bg-[#CDFC39]" : "bg-[#2b3937]"
                            }`}
                          >
                            <div
                              className={`w-5 h-5 rounded-full bg-black shadow-md transform transition-transform ${
                                isChecked ? "translate-x-5" : "translate-x-0"
                              }`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Equipment Educational Detail Modal */}
      {inspectingEquipment && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setInspectingEquipment(null)}
        >
          <div
            className="bg-[#182020] border border-[#253230] rounded-3xl p-5 w-full max-w-sm text-white shadow-2xl relative animate-in fade-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setInspectingEquipment(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Drawing Preview */}
            <div className="w-full h-36 rounded-2xl bg-[#121817] border border-[#253230] flex items-center justify-center p-4 mb-4 relative overflow-hidden">
              <div className="w-28 h-28">
                <EquipmentVectorDrawing name={inspectingEquipment} active={true} />
              </div>
              <span className="absolute bottom-2 right-2.5 text-[10px] text-gray-500 font-medium bg-black/40 px-2 py-0.5 rounded">
                Ilustração Técnica
              </span>
            </div>

            {/* Title & Category */}
            <div className="mb-3">
              <div className="text-[11px] font-bold text-[#CDFC39] uppercase tracking-wider">
                {inspectedMeta?.category || "Equipamento"}
              </div>
              <h3 className="text-lg font-extrabold text-white mt-0.5">
                {inspectingEquipment}
              </h3>
            </div>

            {/* Description */}
            <div className="space-y-3 text-xs">
              <div className="bg-[#121616] p-3 rounded-xl border border-white/5">
                <span className="text-[10px] text-gray-400 uppercase font-bold block mb-1">
                  O que é e função
                </span>
                <p className="text-gray-200 leading-relaxed">
                  {inspectedMeta?.shortDesc}
                </p>
              </div>

              {inspectedMeta?.howToIdentify && (
                <div className="bg-[#121616] p-3 rounded-xl border border-white/5">
                  <div className="flex items-center gap-1.5 text-[10px] text-[#CDFC39] uppercase font-bold mb-1">
                    <Info className="w-3 h-3" />
                    <span>Como identificar na academia</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {inspectedMeta.howToIdentify}
                  </p>
                </div>
              )}

              {inspectedMeta?.muscles && inspectedMeta.muscles.length > 0 && (
                <div>
                  <span className="text-[10px] text-gray-400 uppercase font-bold block mb-1.5">
                    Músculos Principais
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {inspectedMeta.muscles.map((m) => (
                      <span
                        key={m}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white font-medium text-[11px]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Action Toggle inside Modal */}
            <div className="mt-5 pt-3 border-t border-[#253230] flex gap-2">
              <button
                type="button"
                onClick={() => {
                  toggleItem(inspectingEquipment);
                }}
                className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                  isInspectedChecked
                    ? "bg-red-500/15 border border-red-500/30 text-red-400 hover:bg-red-500/25"
                    : "bg-[#CDFC39] text-black hover:bg-[#b8e828] shadow-lg shadow-[#CDFC39]/20"
                }`}
              >
                {isInspectedChecked ? (
                  <>
                    <X className="w-4 h-4" />
                    <span>Remover dos meus equipamentos</span>
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Adicionar aos meus equipamentos</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </StepWrapper>
  );
}
