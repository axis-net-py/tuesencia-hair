import { MapPin, Phone, Clock, ArrowUp, Heart } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import LogoMedallion from "@/components/ui/LogoMedallion";
import { SALON_DATA } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070605] border-t border-[#dfc18c]/20 text-[#9e978e] pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-white/10">
          {/* Col 1: Brand & Original Logo */}
          <div className="space-y-4">
            <LogoMedallion size="md" />
            <p className="text-xs text-[#9e978e] leading-relaxed max-w-xs">
              {SALON_DATA.secondaryTagline}
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded bg-[#dfc18c]/10 text-[#dfc18c] text-[11px] font-mono">
                {SALON_DATA.yearsExperience}
              </span>
            </div>
          </div>

          {/* Col 2: Ubicación & Contacto Directo */}
          <div className="space-y-3 text-xs">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-[#dfc18c]">
              UBICACIÓN & CONTACTO
            </h4>
            <p className="flex items-start gap-2 text-[#f8f6f0]">
              <MapPin className="w-4 h-4 text-[#dfc18c] shrink-0 mt-0.5" />
              <span>{SALON_DATA.location}</span>
            </p>
            <p className="flex items-center gap-2 text-[#f8f6f0]">
              <Phone className="w-4 h-4 text-[#dfc18c] shrink-0" />
              <a
                href={SALON_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#dfc18c] transition-colors"
              >
                {SALON_DATA.whatsappNumber}
              </a>
            </p>
            <p className="flex items-center gap-2 text-[#f8f6f0]">
              <InstagramIcon className="w-4 h-4 text-[#dfc18c] shrink-0" />
              <a
                href={SALON_DATA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#dfc18c] transition-colors"
              >
                {SALON_DATA.instagramHandle}
              </a>
            </p>
          </div>

          {/* Col 3: Horarios de Atención */}
          <div className="space-y-3 text-xs">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-[#dfc18c]">
              HORARIOS DE ATELIER
            </h4>
            {SALON_DATA.hours.map((h, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-white font-medium">{h.days}</span>
                <span className="text-[#9e978e]">{h.hours}</span>
              </div>
            ))}
            <p className="text-[11px] text-[#6b655f] italic pt-1">
              * Atención únicamente con reserva previa.
            </p>
          </div>

          {/* Col 4: Acceso Rápido & WhatsApp Directo */}
          <div className="space-y-3 text-xs">
            <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-[#dfc18c]">
              EXPERIENCIA DIGITAL
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#rituales" className="hover:text-[#dfc18c] transition-colors">
                  Carta Sensorial de Rituais
                </a>
              </li>
              <li>
                <a href="#diagnostico" className="hover:text-[#dfc18c] transition-colors">
                  Diagnóstico de Esencia (Quiz)
                </a>
              </li>
              <li>
                <a href="#antes-despues" className="hover:text-[#dfc18c] transition-colors">
                  Transformaciones Antes y Después
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-[#dfc18c] transition-colors">
                  Lookbook de Colecciones
                </a>
              </li>
              <li>
                <a href="#fundadora" className="hover:text-[#dfc18c] transition-colors">
                  Camila Bessing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#6b655f] text-center sm:text-left">
            © {new Date().getFullYear()} {SALON_DATA.name} · {SALON_DATA.subtitle}. Todos los derechos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-[#121110] text-[#9e978e] hover:text-[#dfc18c] hover:border-[#dfc18c]/40 transition-colors"
          >
            <span>VOLVER AL INICIO</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
