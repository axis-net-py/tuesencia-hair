"use client";

import { useState } from "react";
import Image from "next/image";
import { Maximize2, X, Eye } from "lucide-react";
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
    <section id="lookbook" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0908] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#dfc18c]/15 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#dfc18c] block mb-2">
              PORTAFOLIO EDITORIAL
            </span>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-5xl text-[#f8f6f0] font-normal">
              Lookbook & Creaciones
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase whitespace-nowrap transition-all border ${
                  selectedCategory === cat.id
                    ? "border-[#dfc18c] bg-[#dfc18c]/15 text-[#dfc18c]"
                    : "border-white/10 text-[#9e978e] hover:border-white/30 hover:text-white"
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
              className="group relative h-96 rounded-2xl overflow-hidden border border-white/10 bg-[#121110] cursor-pointer transition-all duration-500 hover:border-[#dfc18c]/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
              data-cursor="VER"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75" />

              {/* Quick view button */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4 text-[#dfc18c]" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#dfc18c] block mb-1">
                  {item.technique}
                </span>
                <h3 className="font-[family-name:var(--font-serif)] text-xl text-white font-medium mb-1">
                  {item.title}
                </h3>
                {item.tone && (
                  <p className="text-xs text-[#9e978e]">Tonalidad: {item.tone}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeImage && (
          <div
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-3 text-[#f8f6f0] hover:text-[#dfc18c] bg-black/50 rounded-full border border-white/20"
            >
              <X className="w-6 h-6" />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-[#dfc18c]/30 bg-[#121110] shadow-[0_25px_80px_rgba(0,0,0,0.9)]"
            >
              <div className="relative h-[65vh] w-full">
                <Image
                  src={activeImage.image}
                  alt={activeImage.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 bg-[#121110] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#dfc18c]">
                    {activeImage.technique}
                  </span>
                  <h3 className="font-[family-name:var(--font-serif)] text-2xl text-white font-medium">
                    {activeImage.title}
                  </h3>
                  {activeImage.tone && (
                    <p className="text-xs text-[#9e978e]">Tonalidad: {activeImage.tone}</p>
                  )}
                </div>

                <a
                  href={`https://wa.me/595986295529?text=${encodeURIComponent(
                    `Hola Camila! Vi este trabajo en el lookbook de la web ("${activeImage.title}") y me encantaría consultar para hacerme algo similar.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#dfc18c] hover:bg-[#f5e4c3] text-[#0a0908] text-xs font-bold tracking-widest uppercase transition-colors"
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
