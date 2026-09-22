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
    sm: { img: 40, container: "w-10 h-10", textClass: "text-sm", subClass: "text-[10.5px]" },
    md: { img: 50, container: "w-12 h-12", textClass: "text-base sm:text-lg", subClass: "text-[11px] sm:text-xs" },
    lg: { img: 76, container: "w-20 h-20", textClass: "text-xl", subClass: "text-xs" },
    xl: { img: 110, container: "w-28 h-28", textClass: "text-2xl", subClass: "text-sm" },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={cn("inline-flex items-center gap-3.5 group select-none", className)}>
      {/* Authentic Original Instagram Logo with soft luxury bezel */}
      <div
        className={cn(
          "relative rounded-full overflow-hidden border-2 border-[#C5A880]/70 bg-[#E8D8CD] shadow-[0_2px_14px_rgba(184,147,88,0.22)] transition-all duration-300 group-hover:scale-105 group-hover:border-[#8C6A32] shrink-0",
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
        <div className="flex flex-col text-left">
          <span
            className={cn(
              "font-[family-name:var(--font-serif)] tracking-[0.2em] text-[#1C1815] font-bold uppercase leading-tight group-hover:text-[#8C6A32] transition-colors duration-200",
              currentSize.textClass
            )}
          >
            TU ESENCIA
          </span>
          <span
            className={cn(
              "tracking-[0.25em] text-[#8C6A32] font-semibold uppercase leading-tight mt-0.5",
              currentSize.subClass
            )}
          >
            ESPACIO DE BELLEZA
          </span>
        </div>
      )}
    </div>
  );
}
