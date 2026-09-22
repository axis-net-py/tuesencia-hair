"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowDownRight, Compass, ShieldCheck } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#FAF8F5]">
      {/* Editorial subtle warm champagne ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(223,193,140,0.3)_0%,rgba(250,248,245,0)_70%)] pointer-events-none blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(232,216,205,0.4)_0%,rgba(250,248,245,0)_70%)] pointer-events-none blur-3xl" />

      {/* Top status pills - Highly readable */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 mb-6 sm:mb-8"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D9C8B6] bg-[#FFFFFF] text-xs sm:text-sm font-mono tracking-widest text-[#8C6A32] uppercase font-bold shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#8C6A32] animate-ping" />
          ATELIER EN KATUETÉ, PARAGUAY 🇵🇾
        </span>

        <span className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D9C8B6] bg-[#FFFFFF] text-xs sm:text-sm font-mono tracking-widest text-[#4A433D] uppercase font-bold shadow-xs">
          <ShieldCheck className="w-4 h-4 text-[#8C6A32]" />
          5 AÑOS DE EXCELENCIA
        </span>
      </motion.div>

      {/* Haute Couture Main Headline */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg font-mono tracking-[0.3em] text-[#8C6A32] uppercase mb-4 font-bold"
        >
          ESPACIO DE BELLEZA & VISAGISMO · CAMILA BESSING
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-[family-name:var(--font-serif)] text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[1.04] font-normal text-[#1C1815] mb-8"
        >
          La belleza no se impone,{" "}
          <span className="italic font-light text-shimmer block sm:inline">tu esencia se revela.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-[#4A433D] font-normal leading-relaxed mb-12"
        >
          Lejos de los salones convencionales y las tendencias pasajeras. En{" "}
          <strong className="text-[#1C1815] font-bold">Tu Esencia</strong> diseñamos
          arquitectura capilar personalizada, balayage de alta costura y terapias botánicas
          concebidas para armonizar con tu propia identidad.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="#diagnostico"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4.5 rounded-full bg-[#1C1815] hover:bg-[#8C6A32] text-[#FAF8F5] font-bold text-sm sm:text-base tracking-[0.16em] uppercase transition-all duration-300 shadow-[0_6px_25px_rgba(28,24,21,0.18)] hover:shadow-[0_8px_30px_rgba(140,106,50,0.35)] cursor-pointer"
          >
            <Compass className="w-5 h-5 text-[#DFCA9F]" />
            Descubrir Mi Diagnóstico (60s)
          </a>

          <MagneticButton
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4.5 rounded-full border-2 border-[#C5A880] bg-[#FFFFFF] hover:bg-[#F5EFEB] text-[#1C1815] font-bold text-sm sm:text-base tracking-[0.16em] uppercase transition-all duration-300 shadow-xs cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#8C6A32]" />
            Agendar con Camila
          </MagneticButton>
        </motion.div>
      </div>

      {/* Floating editorial image preview strip */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="mt-16 sm:mt-20 w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 relative z-10"
      >
        {[
          {
            title: "Balayage Couture",
            tag: "Luz Tridimensional",
            img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=700&q=80",
          },
          {
            title: "Visagismo de Corte",
            tag: "Geometría Orgánica",
            img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=700&q=80",
          },
          {
            title: "Alquimia Spa",
            tag: "Ozonoterapia Capilar",
            img: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=700&q=80",
          },
          {
            title: "Manicura Rusa",
            tag: "Atelier de Uñas",
            img: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=700&q=80",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="group relative h-52 sm:h-72 rounded-2xl overflow-hidden border border-[#EADDCF] bg-[#FFFFFF] transition-all duration-500 hover:border-[#8C6A32] shadow-[0_6px_25px_rgba(28,24,21,0.08)] hover:shadow-[0_10px_35px_rgba(184,147,88,0.18)]"
            data-cursor="DESCUBRIR"
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {/* Scrim for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1815]/95 via-[#1C1815]/35 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-[#DFCA9F] block mb-1 font-semibold">
                {item.tag}
              </span>
              <h4 className="font-[family-name:var(--font-serif)] text-base sm:text-lg text-[#FAF8F5] font-semibold leading-tight">
                {item.title}
              </h4>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Bottom scroll down hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-14 flex flex-col items-center gap-2.5 text-center"
      >
        <span className="text-xs sm:text-sm font-mono tracking-[0.25em] uppercase text-[#7E746C] font-semibold">
          DESLIZA PARA CONOCER NUESTRA ESENCIA
        </span>
        <ArrowDownRight className="w-5 h-5 text-[#8C6A32] animate-bounce" />
      </motion.div>
    </section>
  );
}
