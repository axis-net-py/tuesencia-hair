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
    md: { img: 48, container: "w-12 h-12", textClass: "text-sm" },
    lg: { img: 72, container: "w-18 h-18", textClass: "text-base" },
    xl: { img: 104, container: "w-26 h-26", textClass: "text-lg" },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={cn("inline-flex items-center gap-3.5 group", className)}>
      {/* Authentic Original Instagram Logo with luxury subtle halo */}
      <div
        className={cn(
          "relative rounded-full overflow-hidden border border-[#dfc18c]/40 bg-[#151413] shadow-[0_0_20px_rgba(223,193,140,0.15)] transition-transform duration-500 group-hover:scale-105 group-hover:border-[#dfc18c]",
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
        <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/20 pointer-events-none" />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-[family-name:var(--font-serif)] tracking-[0.22em] text-[#f8f6f0] font-semibold uppercase leading-tight group-hover:text-[#dfc18c] transition-colors duration-300">
            TU ESENCIA
          </span>
          <span className="text-[10px] tracking-[0.28em] text-[#dfc18c]/80 font-medium uppercase leading-tight">
            ESPACIO DE BELLEZA
          </span>
        </div>
      )}
    </div>
  );
}
