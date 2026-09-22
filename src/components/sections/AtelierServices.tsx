"use client";

import { useState } from "react";
import { Clock, Droplets, Smile, ArrowUpRight } from "lucide-react";
import { RITUALS } from "@/lib/constants";
import SpotlightCard from "@/components/ui/SpotlightCard";

interface AtelierServicesProps {
  onSelectRitual: (title: string) => void;
}

export default function AtelierServices({ onSelectRitual }: AtelierServicesProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "TODOS LOS RITUALES" },
    { id: "balayage", label: "BALAYAGE COUTURE" },
    { id: "hairspa", label: "SPA & REGENERACIÓN" },
    { id: "visagismo", label: "VISAGISMO & CORTE" },
    { id: "alisado", label: "ALINEAMIENTO SILK" },
    { id: "uñas", label: "ATELIER DE UÑAS" },
  ];

  const filteredRituals =
    activeFilter === "all"
      ? RITUALS
      : RITUALS.filter((r) => r.category === activeFilter);

  return (
    <section id="rituales" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#EADDCF] gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#8C6A32] block mb-2 font-semibold">
              LA CARTA SENSORIAL
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-5xl text-[#1C1815] font-normal">
              Rituais & Experiencias de Atelier
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#524A43] leading-relaxed">
            Cada servicio es concebido como una ceremonia sensorial. Fórmulas de origen
            botánico, precisión técnica y un ambiente pensado para tu sosiego.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase whitespace-nowrap transition-all duration-300 border cursor-pointer ${
                activeFilter === tab.id
                  ? "border-[#1C1815] bg-[#1C1815] text-[#FAF8F5] font-bold shadow-[0_4px_15px_rgba(28,24,21,0.15)]"
                  : "border-[#EADDCF] bg-[#FFFFFF] text-[#524A43] hover:border-[#8C6A32] hover:text-[#1C1815]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Rituals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRituals.map((ritual) => (
            <SpotlightCard
              key={ritual.id}
              className="flex flex-col justify-between h-full group hover:border-[#8C6A32]"
            >
              <div>
                {/* Header & Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#8C6A32] bg-[#FAF2E6] border border-[#D9C8B6] px-2.5 py-1 rounded font-semibold">
                    {ritual.category.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#7E746C] text-xs font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#8C6A32]" />
                    {ritual.sensoryNotes.duracao}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[#1C1815] font-medium mb-2 group-hover:text-[#8C6A32] transition-colors">
                  {ritual.title}
                </h3>

                <p className="text-xs font-serif italic text-[#8C6A32] mb-4">
                  "{ritual.tagline}"
                </p>

                <p className="text-xs text-[#524A43] leading-relaxed mb-6">
                  {ritual.description}
                </p>

                {/* Sensory Experience Box */}
                <div className="space-y-2.5 py-4 px-4 rounded-xl bg-[#FAF8F5] border border-[#EADDCF] mb-6 text-xs">
                  <div className="flex items-start gap-2">
                    <Droplets className="w-3.5 h-3.5 text-[#8C6A32] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C6A32] block font-semibold">
                        Nota Olfativa:
                      </span>
                      <span className="text-[#524A43]">
                        {ritual.sensoryNotes.aroma}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Smile className="w-3.5 h-3.5 text-[#8C6A32] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#8C6A32] block font-semibold">
                        Impacto Visagista:
                      </span>
                      <span className="text-[#524A43]">
                        {ritual.visagismoImpact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <button
                onClick={() => onSelectRitual(ritual.title)}
                className="w-full flex items-center justify-between pt-4 border-t border-[#EADDCF] text-xs font-mono tracking-widest uppercase text-[#8C6A32] hover:text-[#1C1815] font-semibold transition-colors group/btn cursor-pointer"
              >
                <span>CONSULTAR DISPONIBILIDAD</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </button>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
