"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { LOOKBOOK_GALLERY, LookbookItem } from "@/lib/constants";

export default function LookbookGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeImage, setActiveImage] = useState<LookbookItem | null>(null);

  const categories = [
    { id: "all", label: "TODO EL PORTAFOLIO" },
    { id: "balayage", label: "BALAYAGE & BLOND" },
    { id: "cortes", label: "CORTES VISAGISTAS" },
    { id: "hairspa", label: "SPA BOTÁNICO" },
    { id: "uñas", label: "ATELIER DE UÑAS" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? LOOKBOOK_GALLERY
      : LOOKBOOK_GALLERY.filter((item) => item.category === selectedCategory);

  return (
    <section id="lookbook" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-8 border-b border-[#EADDCF] gap-6">
          <div>
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#8C6A32] block mb-3 font-bold">
              PORTAFOLIO EDITORIAL
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-6xl text-[#1C1815] font-normal leading-tight">
              Lookbook & Creaciones
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-3 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-mono tracking-wider uppercase whitespace-nowrap transition-all border cursor-pointer font-semibold ${
                  selectedCategory === cat.id
                    ? "border-[#1C1815] bg-[#1C1815] text-[#FAF8F5] font-bold shadow-xs"
                    : "border-[#EADDCF] bg-[#FFFFFF] text-[#4A433D] hover:border-[#8C6A32] hover:text-[#1C1815]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative h-[420px] rounded-3xl overflow-hidden border border-[#EADDCF] bg-[#FFFFFF] cursor-pointer transition-all duration-500 hover:border-[#8C6A32] shadow-[0_6px_30px_rgba(28,24,21,0.08)] hover:shadow-[0_16px_45px_rgba(140,106,50,0.2)]"
              data-cursor="VER"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Gradient Scrim for readable high-fashion caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1815]/95 via-[#1C1815]/30 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-95" />

              {/* Quick view button */}
              <div className="absolute top-5 right-5 w-11 h-11 rounded-full bg-[#FFFFFF]/90 backdrop-blur-md border border-[#EADDCF] flex items-center justify-center text-[#1C1815] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                <Maximize2 className="w-5 h-5 text-[#8C6A32]" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-left">
                <span className="text-xs font-mono uppercase tracking-widest text-[#DFCA9F] block mb-1.5 font-bold">
                  {item.technique}
                </span>
                <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl text-[#FAF8F5] font-bold mb-1.5 leading-tight">
                  {item.title}
                </h3>
                {item.tone && (
                  <p className="text-sm sm:text-base text-[#D9C8B6] font-medium">Tonalidad: {item.tone}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeImage && (
          <div
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-3 text-white hover:text-[#DFCA9F] bg-black/50 rounded-full border border-white/20 cursor-pointer"
            >
              <X className="w-7 h-7" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden border border-[#D9C8B6] bg-[#FFFFFF] shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
            >
              <div className="relative h-[65vh] w-full">
                <Image
                  src={activeImage.image}
                  alt={activeImage.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-7 sm:p-9 bg-[#FFFFFF] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div>
                  <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#8C6A32] font-bold mb-1 block">
                    {activeImage.technique}
                  </span>
                  <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-4xl text-[#1C1815] font-bold">
                    {activeImage.title}
                  </h3>
                  {activeImage.tone && (
                    <p className="text-sm sm:text-base text-[#524A43] mt-1 font-medium">Tonalidad: {activeImage.tone}</p>
                  )}
                </div>

                <a
                  href={`https://wa.me/595986295529?text=${encodeURIComponent(
                    `Hola Camila! Vi este trabajo en el lookbook de la web ("${activeImage.title}") y me encantaría consultar para hacerme algo similar.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1C1815] hover:bg-[#8C6A32] text-[#FAF8F5] text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                >
                  Quiero este Resultado
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
