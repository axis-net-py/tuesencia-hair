"use client";

import { useState } from "react";
import { Sparkles, Clock, Droplets, Smile, ArrowUpRight } from "lucide-react";
import { RITUALS, Ritual } from "@/lib/constants";
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
    <section id="rituales" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0908] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#dfc18c]/15 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#dfc18c] block mb-2">
              LA CARTA SENSORIAL
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-5xl text-[#f8f6f0] font-normal">
              Rituais & Experiencias de Atelier
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#9e978e] leading-relaxed">
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
              className={`px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase whitespace-nowrap transition-all duration-300 border ${
                activeFilter === tab.id
                  ? "border-[#dfc18c] bg-[#dfc18c] text-[#0a0908] font-bold shadow-[0_0_20px_rgba(223,193,140,0.3)]"
                  : "border-white/10 bg-[#141312] text-[#9e978e] hover:border-[#dfc18c]/40 hover:text-white"
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
              className="flex flex-col justify-between h-full group hover:border-[#dfc18c]/60"
            >
              <div>
                {/* Header & Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#dfc18c] bg-[#dfc18c]/10 px-2.5 py-1 rounded">
                    {ritual.category.toUpperCase()}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#9e978e] text-xs font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#dfc18c]" />
                    {ritual.sensoryNotes.duracao}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-serif)] text-2xl text-white font-medium mb-2 group-hover:text-[#dfc18c] transition-colors">
                  {ritual.title}
                </h3>

                <p className="text-xs font-serif italic text-[#dfc18c]/90 mb-4">
                  "{ritual.tagline}"
                </p>

                <p className="text-xs text-[#9e978e] leading-relaxed mb-6">
                  {ritual.description}
                </p>

                {/* Sensory Experience Box */}
                <div className="space-y-2.5 py-4 px-4 rounded-xl bg-[#171614] border border-white/5 mb-6 text-xs">
                  <div className="flex items-start gap-2">
                    <Droplets className="w-3.5 h-3.5 text-[#dfc18c] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#dfc18c] block">
                        Nota Olfativa:
                      </span>
                      <span className="text-[#c9b9a6]">
                        {ritual.sensoryNotes.aroma}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Smile className="w-3.5 h-3.5 text-[#dfc18c] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#dfc18c] block">
                        Impacto Visagista:
                      </span>
                      <span className="text-[#c9b9a6]">
                        {ritual.visagismoImpact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <button
                onClick={() => onSelectRitual(ritual.title)}
                className="w-full flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono tracking-widest uppercase text-[#dfc18c] hover:text-white transition-colors group/btn"
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
