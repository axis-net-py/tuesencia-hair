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
    <section id="lookbook" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#EADDCF] gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#8C6A32] block mb-2 font-semibold">
              PORTAFOLIO EDITORIAL
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-5xl text-[#1C1815] font-normal">
              Lookbook & Creaciones
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase whitespace-nowrap transition-all border cursor-pointer ${
                  selectedCategory === cat.id
                    ? "border-[#1C1815] bg-[#1C1815] text-[#FAF8F5] font-semibold shadow-xs"
                    : "border-[#EADDCF] bg-[#FFFFFF] text-[#524A43] hover:border-[#8C6A32] hover:text-[#1C1815]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group relative h-96 rounded-2xl overflow-hidden border border-[#EADDCF] bg-[#FFFFFF] cursor-pointer transition-all duration-500 hover:border-[#8C6A32] shadow-[0_4px_25px_rgba(28,24,21,0.06)] hover:shadow-[0_12px_40px_rgba(140,106,50,0.15)]"
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1815]/90 via-[#1C1815]/25 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Quick view button */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FFFFFF]/80 backdrop-blur-md border border-[#EADDCF] flex items-center justify-center text-[#1C1815] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xs">
                <Maximize2 className="w-4 h-4 text-[#8C6A32]" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-5 left-5 right-5 text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#DFCA9F] block mb-1 font-semibold">
                  {item.technique}
                </span>
                <h3 className="font-[family-name:var(--font-serif)] text-xl text-[#FAF8F5] font-medium mb-1">
                  {item.title}
                </h3>
                {item.tone && (
                  <p className="text-xs text-[#D9C8B6]">Tonalidad: {item.tone}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeImage && (
          <div
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-3 text-white hover:text-[#DFCA9F] bg-black/40 rounded-full border border-white/20 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-[#D9C8B6] bg-[#FFFFFF] shadow-[0_25px_80px_rgba(0,0,0,0.5)]"
            >
              <div className="relative h-[65vh] w-full">
                <Image
                  src={activeImage.image}
                  alt={activeImage.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 bg-[#FFFFFF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8C6A32] font-semibold">
                    {activeImage.technique}
                  </span>
                  <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[#1C1815] font-medium">
                    {activeImage.title}
                  </h3>
                  {activeImage.tone && (
                    <p className="text-xs text-[#524A43]">Tonalidad: {activeImage.tone}</p>
                  )}
                </div>

                <a
                  href={`https://wa.me/595986295529?text=${encodeURIComponent(
                    `Hola Camila! Vi este trabajo en el lookbook de la web ("${activeImage.title}") y me encantaría consultar para hacerme algo similar.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1C1815] hover:bg-[#8C6A32] text-[#FAF8F5] text-xs font-bold tracking-widest uppercase transition-colors shadow-xs"
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
