"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="antes-despues" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#F5EFEB] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-14">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#8C6A32] block mb-3 font-bold">
            METAMORFOSIS VISUAL
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-6xl text-[#1C1815] font-normal mb-5">
            Transformaciones Reales
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#4A433D] font-normal leading-relaxed">
            Desliza para revelar la transición de una fibra castigada y apagada hacia una
            iluminación tridimensional con salud molecular intacta.
          </p>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border-2 border-[#D9C8B6] shadow-[0_20px_60px_rgba(28,24,21,0.1)] select-none">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[400px] sm:h-[540px] md:h-[620px] cursor-ew-resize overflow-hidden"
          >
            {/* "DESPUÉS" Image (Full background) */}
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85"
                alt="Después - Balayage Haute Couture y Salud Celular Tu Esencia"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-6 right-6 z-10 px-5 py-2 rounded-full bg-[#1C1815]/90 backdrop-blur-md border border-[#DFCA9F]/70 text-xs sm:text-sm font-mono tracking-widest text-[#FAF8F5] uppercase font-bold">
                DESPUÉS · BALAYAGE HAUTE COUTURE
              </div>
            </div>

            {/* "ANTES" Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full" style={{ width: containerRef.current?.offsetWidth || "100%" }}>
                <Image
                  src="https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=1400&q=85"
                  alt="Antes - Tono opaco y fibra deshidratada"
                  fill
                  className="object-cover filter grayscale contrast-125 brightness-90"
                  priority
                />
                <div className="absolute bottom-6 left-6 z-10 px-5 py-2 rounded-full bg-[#1C1815]/90 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-mono tracking-widest text-[#D9C8B6] uppercase font-bold">
                  ANTES · TONO OPACO & DESHIDRATADO
                </div>
              </div>
            </div>

            {/* Draggable Divider Line & Knob */}
            <div
              className="absolute top-0 bottom-0 z-20 w-1 bg-gradient-to-b from-transparent via-[#8C6A32] to-transparent shadow-[0_0_15px_rgba(140,106,50,0.7)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FAF8F5] border-2 border-[#8C6A32] flex items-center justify-center text-[#8C6A32] shadow-[0_4px_20px_rgba(28,24,21,0.25)]">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Technical Transformation Details */}
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 text-center">
          <div className="p-5 rounded-2xl border border-[#EADDCF] bg-[#FFFFFF] shadow-sm">
            <span className="text-xs font-mono uppercase text-[#8C6A32] tracking-wider block mb-1.5 font-bold">
              PROTOCOLO APLICADO
            </span>
            <p className="text-sm sm:text-base font-bold text-[#1C1815]">
              Babylights Micro-costura + Plex
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#EADDCF] bg-[#FFFFFF] shadow-sm">
            <span className="text-xs font-mono uppercase text-[#8C6A32] tracking-wider block mb-1.5 font-bold">
              TIEMPO DE EJECUCIÓN
            </span>
            <p className="text-sm sm:text-base font-bold text-[#1C1815]">
              3 Horas y 45 Minutos
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-[#EADDCF] bg-[#FFFFFF] shadow-sm">
            <span className="text-xs font-mono uppercase text-[#8C6A32] tracking-wider block mb-1.5 font-bold">
              MASTER COLORISTA
            </span>
            <p className="text-sm sm:text-base font-bold text-[#1C1815]">
              Camila Bessing (Katueté, PY)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
