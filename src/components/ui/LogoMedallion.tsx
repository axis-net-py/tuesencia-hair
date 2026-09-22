import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoMedallionProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

export default function LogoMedallion({
  size = "md",
  showText = true,
  className,
}: LogoMedallionProps) {
  const sizeMap = {
    sm: { img: 36, container: "w-9 h-9", textClass: "text-xs" },
    md: { img: 46, container: "w-11 h-11", textClass: "text-sm" },
    lg: { img: 72, container: "w-18 h-18", textClass: "text-base" },
    xl: { img: 104, container: "w-26 h-26", textClass: "text-lg" },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={cn("inline-flex items-center gap-3 group select-none", className)}>
      {/* Authentic Original Instagram Logo with soft luxury bezel */}
      <div
        className={cn(
          "relative rounded-full overflow-hidden border border-[#C5A880]/60 bg-[#E8D8CD] shadow-[0_2px_12px_rgba(184,147,88,0.18)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#8C6A32]",
          currentSize.container
        )}
      >
        <Image
          src="/tuesencia-logo.jpg"
          alt="Tu Esencia - Espacio de Belleza (Logo Original)"
          width={currentSize.img}
          height={currentSize.img}
          className="object-cover w-full h-full scale-[1.08] transition-transform duration-500 group-hover:scale-115"
          priority
        />
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/5 pointer-events-none" />
      </div>

      {showText && (
        <div className="flex flex-col text-left leading-none">
          <span className="font-[family-name:var(--font-serif)] tracking-[0.22em] text-[#1C1815] font-semibold uppercase leading-tight group-hover:text-[#8C6A32] transition-colors duration-200">
            TU ESENCIA
          </span>
          <span className="text-[9.5px] sm:text-[10px] tracking-[0.28em] text-[#8C6A32] font-semibold uppercase leading-tight mt-0.5">
            ESPACIO DE BELLEZA
          </span>
        </div>
      )}
    </div>
  );
}
