import { Leaf, HeartHandshake, Sparkles, Coffee } from "lucide-react";
import { PHILOSOPHY_PILLARS } from "@/lib/constants";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function SanctuaryExperience() {
  const highlights = [
    {
      icon: Leaf,
      title: "Formulaciones Botánicas",
      desc: "Productos de procedencia orgánica, sin sulfatos agresivos ni vapores dañinos.",
    },
    {
      icon: Coffee,
      title: "Infusiones & Té Orgánico",
      desc: "Carta de tés herbales y café de especialidad para que tu estadía sea un retiro.",
    },
    {
      icon: HeartHandshake,
      title: "Atención One-to-One",
      desc: "Atención individualizada sin prisas ni sobreturnos. Tu tiempo es sagrado.",
    },
    {
      icon: Sparkles,
      title: "Lavado Acústico & Relax",
      desc: "Espacio de lavado con iluminación tenue, cromoterapia y masajes capilares.",
    },
  ];

  return (
    <section id="espacio" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#F5EFEB] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#8C6A32] block mb-3 font-bold">
            EL REFUGIO EN KATUETÉ
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-6xl text-[#1C1815] font-normal mb-6">
            Un santuario para desacelerar y reencontrarte
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#4A433D] leading-relaxed font-normal">
            Tu Esencia fue diseñado para ser más que un lugar donde cortarse el cabello. Es
            una pausa del ruido diario en un entorno cálido, silencioso y multisensorial.
          </p>
        </div>

        {/* 4 Amenities Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <SpotlightCard key={idx} className="p-7 sm:p-8 border-[#EADDCF] bg-[#FFFFFF] shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF2E6] border border-[#D9C8B6] flex items-center justify-center text-[#8C6A32] mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl text-[#1C1815] font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#4A433D] leading-relaxed">
                  {item.desc}
                </p>
              </SpotlightCard>
            );
          })}
        </div>

        {/* 3 Philosophy Pillars */}
        <div className="border-t border-[#D9C8B6] pt-18">
          <div className="text-center mb-14">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#8C6A32] font-bold">
              NUESTROS FUNDAMENTOS
            </span>
            <h3 className="font-[family-name:var(--font-serif)] text-3xl sm:text-5xl text-[#1C1815] font-normal mt-2">
              Los Tres Pilares de Tu Esencia
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PHILOSOPHY_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="relative p-8 sm:p-10 rounded-3xl border border-[#EADDCF] bg-[#FFFFFF] shadow-[0_6px_30px_rgba(28,24,21,0.05)] flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl sm:text-5xl font-mono text-[#C5A880] font-bold block mb-4">
                    {pillar.number}
                  </span>
                  <h4 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl text-[#1C1815] font-bold mb-4">
                    {pillar.title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#4A433D] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-8 w-12 h-[3px] bg-[#8C6A32]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
