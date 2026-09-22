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
    <section id="espacio" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0e0d0c] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#dfc18c] block mb-2">
            EL REFUGIO EN KATUETÉ
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-5xl text-[#f8f6f0] font-normal mb-6">
            Un santuario para desacelerar y reencontrarte
          </h2>
          <p className="text-sm sm:text-base text-[#9e978e] leading-relaxed">
            Tu Esencia fue diseñado para ser más que un lugar donde cortarse el cabello. Es
            una pausa del ruido diario en un entorno cálido, silencioso y multisensorial.
          </p>
        </div>

        {/* 4 Amenities Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <SpotlightCard key={idx} className="p-6 border-white/10 bg-[#141312]">
                <div className="w-10 h-10 rounded-xl bg-[#dfc18c]/15 border border-[#dfc18c]/40 flex items-center justify-center text-[#dfc18c] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-[family-name:var(--font-serif)] text-lg text-white font-medium mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#9e978e] leading-relaxed">
                  {item.desc}
                </p>
              </SpotlightCard>
            );
          })}
        </div>

        {/* 3 Philosophy Pillars */}
        <div className="border-t border-[#dfc18c]/20 pt-16">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#dfc18c]">
              NUESTROS FUNDAMENTOS
            </span>
            <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl text-white font-normal mt-2">
              Los Tres Pilares de Tu Esencia
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PHILOSOPHY_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="relative p-8 rounded-2xl border border-white/10 bg-[#121110] flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-mono text-[#dfc18c]/40 font-bold block mb-4">
                    {pillar.number}
                  </span>
                  <h4 className="font-[family-name:var(--font-serif)] text-xl text-white font-medium mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#9e978e] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 w-8 h-[1px] bg-[#dfc18c]/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
