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
      setScrolled(window.scrollY > 40);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-[#0a0908]/85 backdrop-blur-xl border-b border-[#dfc18c]/15 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Authentic Logo */}
          <Link href="/" className="flex items-center">
            <LogoMedallion size={scrolled ? "sm" : "md"} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-[0.2em] font-medium text-[#c9b9a6]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 hover:text-[#dfc18c] transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#dfc18c] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions: Ambience + VIP Booking Button */}
          <div className="hidden md:flex items-center gap-4">
            <AmbienceSound />

            <MagneticButton
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 rounded-full border border-[#dfc18c]/50 bg-[#dfc18c]/10 hover:bg-[#dfc18c] text-[#dfc18c] hover:text-[#0a0908] text-xs font-semibold tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(223,193,140,0.15)] hover:shadow-[0_0_25px_rgba(223,193,140,0.4)]"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" />
                Agendar Cita
              </span>
            </MagneticButton>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <AmbienceSound className="scale-90" />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#dfc18c] hover:bg-white/5 rounded-full"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0908]/95 backdrop-blur-2xl lg:hidden flex flex-col justify-center px-8 py-20 animate-in fade-in duration-300">
          <div className="flex justify-center mb-8">
            <LogoMedallion size="lg" />
          </div>

          <div className="flex flex-col items-center gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-[family-name:var(--font-serif)] text-2xl tracking-widest text-[#f8f6f0] hover:text-[#dfc18c] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="mt-6 w-full max-w-xs py-3.5 px-6 rounded-full bg-[#dfc18c] text-[#0a0908] font-semibold text-xs tracking-widest uppercase shadow-[0_0_25px_rgba(223,193,140,0.3)] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Agendar Experiencia VIP
            </button>
          </div>
        </div>
      )}
    </>
  );
}
