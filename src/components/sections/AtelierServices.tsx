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
    <section id="rituales" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-8 border-b border-[#EADDCF] gap-6">
          <div>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#8C6A32] block mb-3 font-bold">
              LA CARTA SENSORIAL
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-6xl text-[#1C1815] font-normal leading-tight">
              Rituais & Experiencias de Atelier
            </h2>
          </div>
          <p className="max-w-lg text-base sm:text-lg text-[#4A433D] leading-relaxed font-normal">
            Cada servicio es concebido como una ceremonia sensorial. Fórmulas de origen
            botánico, precisión técnica y un ambiente pensado para tu sosiego.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono tracking-wider uppercase whitespace-nowrap transition-all duration-300 border cursor-pointer font-semibold ${
                activeFilter === tab.id
                  ? "border-[#1C1815] bg-[#1C1815] text-[#FAF8F5] font-bold shadow-[0_4px_16px_rgba(28,24,21,0.18)]"
                  : "border-[#EADDCF] bg-[#FFFFFF] text-[#4A433D] hover:border-[#8C6A32] hover:text-[#1C1815]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Rituals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredRituals.map((ritual) => (
            <SpotlightCard
              key={ritual.id}
              className="flex flex-col justify-between h-full group hover:border-[#8C6A32] p-7 sm:p-9"
            >
              <div>
                {/* Header & Category Badge */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono tracking-[0.2em] uppercase text-[#8C6A32] bg-[#FAF2E6] border border-[#D9C8B6] px-3 py-1 rounded-full font-bold">
                    {ritual.category.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-2 text-[#524A43] text-xs sm:text-sm font-mono font-semibold">
                    <Clock className="w-4 h-4 text-[#8C6A32]" />
                    {ritual.sensoryNotes.duracao}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl text-[#1C1815] font-bold mb-2 group-hover:text-[#8C6A32] transition-colors leading-tight">
                  {ritual.title}
                </h3>

                <p className="text-sm sm:text-base font-serif italic text-[#8C6A32] mb-4 font-medium">
                  "{ritual.tagline}"
                </p>

                <p className="text-sm sm:text-base text-[#4A433D] leading-relaxed mb-6 font-normal">
                  {ritual.description}
                </p>

                {/* Sensory Experience Box */}
                <div className="space-y-3 py-4 px-5 rounded-2xl bg-[#FAF8F5] border border-[#EADDCF] mb-6">
                  <div className="flex items-start gap-2.5">
                    <Droplets className="w-4 h-4 text-[#8C6A32] shrink-0 mt-1" />
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#8C6A32] block font-bold">
                        Nota Olfativa:
                      </span>
                      <span className="text-sm sm:text-base text-[#1C1815] font-medium">
                        {ritual.sensoryNotes.aroma}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Smile className="w-4 h-4 text-[#8C6A32] shrink-0 mt-1" />
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-[#8C6A32] block font-bold">
                        Impacto Visagista:
                      </span>
                      <span className="text-sm sm:text-base text-[#1C1815] font-medium">
                        {ritual.visagismoImpact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <button
                onClick={() => onSelectRitual(ritual.title)}
                className="w-full flex items-center justify-between pt-5 border-t border-[#EADDCF] text-xs sm:text-sm font-mono tracking-widest uppercase text-[#8C6A32] hover:text-[#1C1815] font-bold transition-colors group/btn cursor-pointer"
              >
                <span>CONSULTAR DISPONIBILIDAD</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
              </button>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
