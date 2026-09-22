import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function ClientVoices() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#F5EFEB] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#8C6A32] block mb-3 font-bold">
            VOCES DEL ATELIER
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-6xl text-[#1C1815] font-normal mb-5">
            Testimonios & Experiencias
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#4A433D] font-normal">
            Historias reales de clientas que confiaron la salud y luminosidad de su cabello a Tu Esencia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((t, idx) => (
            <SpotlightCard
              key={idx}
              className="flex flex-col justify-between p-8 sm:p-10 border-[#EADDCF] bg-[#FFFFFF] shadow-[0_6px_30px_rgba(28,24,21,0.06)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* 5 Stars */}
                  <div className="flex gap-1.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#B89358] text-[#B89358]"
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#C5A880]/50" />
                </div>

                <p className="font-[family-name:var(--font-serif)] italic text-base sm:text-lg md:text-xl text-[#1C1815] leading-relaxed mb-8">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-5 border-t border-[#EADDCF]">
                <h4 className="text-base sm:text-lg font-bold text-[#1C1815]">{t.name}</h4>
                <div className="flex items-center justify-between mt-1 text-xs sm:text-sm text-[#7E746C] font-medium">
                  <span>{t.role} · {t.city}</span>
                  <span className="text-[#8C6A32] font-mono text-xs sm:text-sm font-bold">
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
