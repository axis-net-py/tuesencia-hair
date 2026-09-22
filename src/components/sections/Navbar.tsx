"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Calendar, Sparkles } from "lucide-react";
import LogoMedallion from "@/components/ui/LogoMedallion";
import AmbienceSound from "@/components/audio/AmbienceSound";
import MagneticButton from "@/components/ui/MagneticButton";

interface NavbarProps {
  onOpenBooking: (ritual?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "RITUALES", href: "#rituales" },
    { label: "DIAGNÓSTICO", href: "#diagnostico" },
    { label: "TRANSFORMACIONES", href: "#antes-despues" },
    { label: "LOOKBOOK", href: "#lookbook" },
    { label: "EL ESPACIO", href: "#espacio" },
    { label: "CAMILA BESSING", href: "#fundadora" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#E8D8CD] shadow-[0_4px_25px_rgba(28,24,21,0.05)]"
            : "py-5 bg-[#FAF8F5]/75 backdrop-blur-sm border-b border-[#E8D8CD]/60"
        }`}
      >
        <div className="max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
          {/* Authentic Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <LogoMedallion size={scrolled ? "sm" : "md"} />
          </Link>

          {/* Desktop Navigation Links - No awkward wrapping, balanced spacing */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] xl:text-xs uppercase tracking-[0.16em] font-medium text-[#524A43]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 whitespace-nowrap hover:text-[#B89358] transition-colors duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B89358] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions: Ambience + VIP Booking Button */}
          <div className="hidden md:flex items-center gap-3.5 shrink-0">
            <AmbienceSound />

            <MagneticButton
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-full bg-[#1C1815] hover:bg-[#B89358] text-[#FAF8F5] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-[0_2px_15px_rgba(28,24,21,0.12)] hover:shadow-[0_4px_20px_rgba(184,147,88,0.3)] whitespace-nowrap"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#DFCA9F]" />
                Agendar Cita
              </span>
            </MagneticButton>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <AmbienceSound className="scale-90" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C1815] hover:bg-black/5 rounded-full transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F5]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-center px-8 py-20 animate-in fade-in duration-300">
          <div className="flex justify-center mb-8">
            <LogoMedallion size="lg" />
          </div>

          <div className="flex flex-col items-center gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-[family-name:var(--font-serif)] text-2xl tracking-widest text-[#1C1815] hover:text-[#B89358] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="mt-6 w-full max-w-xs py-3.5 px-6 rounded-full bg-[#1C1815] text-[#FAF8F5] font-semibold text-xs tracking-widest uppercase shadow-[0_4px_20px_rgba(28,24,21,0.15)] flex items-center justify-center gap-2 cursor-pointer hover:bg-[#B89358] transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#DFCA9F]" />
              Agendar Experiencia VIP
            </button>
          </div>
        </div>
      )}
    </>
  );
}
