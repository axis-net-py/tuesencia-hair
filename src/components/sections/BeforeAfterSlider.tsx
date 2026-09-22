"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles, MoveHorizontal, CheckCircle2 } from "lucide-react";

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
    <section id="antes-despues" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0e0d0c] relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#dfc18c] block mb-2">
            METAMORFOSIS VISUAL
          </span>
          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-5xl text-[#f8f6f0] font-normal mb-4">
            Transformaciones Reales
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#9e978e]">
            Desliza para revelar la transición de una fibra castigada y apagada hacia una
            iluminación tridimensional con salud molecular intacta.
          </p>
        </div>

        {/* Interactive Comparison Stage */}
        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden border border-[#dfc18c]/30 shadow-[0_25px_70px_rgba(0,0,0,0.8)] select-none">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[380px] sm:h-[520px] md:h-[580px] cursor-ew-resize overflow-hidden"
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
              <div className="absolute bottom-6 right-6 z-10 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#dfc18c]/50 text-xs font-mono tracking-widest text-[#dfc18c] uppercase">
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
                <div className="absolute bottom-6 left-6 z-10 px-4 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono tracking-widest text-[#9e978e] uppercase">
                  ANTES · TONO OPACO & DESHIDRATADO
                </div>
              </div>
            </div>

            {/* Draggable Divider Line & Knob */}
            <div
              className="absolute top-0 bottom-0 z-20 w-0.5 bg-gradient-to-b from-transparent via-[#dfc18c] to-transparent shadow-[0_0_15px_rgba(223,193,140,0.8)] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0a0908] border-2 border-[#dfc18c] flex items-center justify-center text-[#dfc18c] shadow-[0_0_20px_rgba(223,193,140,0.6)]">
                <MoveHorizontal className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Technical Transformation Details */}
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-xl border border-white/10 bg-[#141312]">
            <span className="text-[10px] font-mono uppercase text-[#dfc18c] tracking-widest block mb-1">
              PROTOCOLO APLICADO
            </span>
            <p className="text-xs font-semibold text-white">
              Babylights Micro-costura + Plex de Protección
            </p>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-[#141312]">
            <span className="text-[10px] font-mono uppercase text-[#dfc18c] tracking-widest block mb-1">
              TIEMPO DE EJECUCIÓN
            </span>
            <p className="text-xs font-semibold text-white">
              3 Horas y 45 Minutos
            </p>
          </div>

          <div className="p-4 rounded-xl border border-white/10 bg-[#141312]">
            <span className="text-[10px] font-mono uppercase text-[#dfc18c] tracking-widest block mb-1">
              MASTER COLORISTA
            </span>
            <p className="text-xs font-semibold text-white">
              Camila Bessing (Katueté, PY)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
