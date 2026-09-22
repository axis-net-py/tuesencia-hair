import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function ClientVoices() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0e0d0c] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#dfc18c] block mb-2">
            VOCES DEL ATELIER
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-5xl text-[#f8f6f0] font-normal mb-4">
            Testimonios & Experiencias
          </h2>
          <p className="text-xs sm:text-sm text-[#9e978e]">
            Historias reales de clientas que confiaron la salud y luminosidad de su cabello a Tu Esencia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <SpotlightCard
              key={idx}
              className="flex flex-col justify-between p-8 border-white/10 bg-[#141312]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* 5 Stars */}
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#dfc18c] text-[#dfc18c]"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#dfc18c]/30" />
                </div>

                <p className="font-[family-name:var(--font-serif)] italic text-sm sm:text-base text-[#f8f6f0] leading-relaxed mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-sm font-semibold text-white">{t.name}</h4>
                <div className="flex items-center justify-between mt-1 text-[11px] text-[#9e978e]">
                  <span>{t.role} · {t.city}</span>
                  <span className="text-[#dfc18c] font-mono text-[10px]">
                    {t.service}
                  </span>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
