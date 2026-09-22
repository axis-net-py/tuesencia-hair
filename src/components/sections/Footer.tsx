import { MapPin, Phone, Clock, ArrowUp } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import LogoMedallion from "@/components/ui/LogoMedallion";
import { SALON_DATA } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F0E8DF] border-t border-[#D9C8B6] text-[#524A43] pt-24 pb-14 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[#D9C8B6]">
          {/* Col 1: Brand & Original Logo */}
          <div className="space-y-4">
            <LogoMedallion size="md" />
            <p className="text-sm sm:text-base text-[#524A43] leading-relaxed max-w-xs font-normal">
              {SALON_DATA.secondaryTagline}
            </p>
            <div className="pt-2">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#FAF8F5] border border-[#D9C8B6] text-[#8C6A32] text-xs sm:text-sm font-mono font-bold">
                {SALON_DATA.yearsExperience}
              </span>
            </div>
          </div>

          {/* Col 2: Ubicación & Contacto Directo */}
          <div className="space-y-3.5 text-sm sm:text-base">
            <h4 className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8C6A32] font-bold">
              UBICACIÓN & CONTACTO
            </h4>
            <p className="flex items-start gap-2.5 text-[#1C1815]">
              <MapPin className="w-5 h-5 text-[#8C6A32] shrink-0 mt-0.5" />
              <span>{SALON_DATA.location}</span>
            </p>
            <p className="flex items-center gap-2.5 text-[#1C1815]">
              <Phone className="w-5 h-5 text-[#8C6A32] shrink-0" />
              <a
                href={SALON_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8C6A32] transition-colors font-semibold"
              >
                {SALON_DATA.whatsappNumber}
              </a>
            </p>
            <p className="flex items-center gap-2.5 text-[#1C1815]">
              <InstagramIcon className="w-5 h-5 text-[#8C6A32] shrink-0" />
              <a
                href={SALON_DATA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#8C6A32] transition-colors font-semibold"
              >
                {SALON_DATA.instagramHandle}
              </a>
            </p>
          </div>

          {/* Col 3: Horarios de Atención */}
          <div className="space-y-3.5 text-sm sm:text-base">
            <h4 className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8C6A32] font-bold">
              HORARIOS DE ATELIER
            </h4>
            {SALON_DATA.hours.map((h, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-[#1C1815] font-bold">{h.days}</span>
                <span className="text-[#524A43] font-medium">{h.hours}</span>
              </div>
            ))}
            <p className="text-xs sm:text-sm text-[#7E746C] italic pt-1">
              * Atención únicamente con reserva previa.
            </p>
          </div>

          {/* Col 4: Acceso Rápido & WhatsApp Directo */}
          <div className="space-y-3.5 text-sm sm:text-base">
            <h4 className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8C6A32] font-bold">
              EXPERIENCIA DIGITAL
            </h4>
            <ul className="space-y-2.5 font-medium">
              <li>
                <a href="#rituales" className="hover:text-[#8C6A32] transition-colors">
                  Carta Sensorial de Rituais
                </a>
              </li>
              <li>
                <a href="#diagnostico" className="hover:text-[#8C6A32] transition-colors">
                  Diagnóstico de Esencia (Quiz)
                </a>
              </li>
              <li>
                <a href="#antes-despues" className="hover:text-[#8C6A32] transition-colors">
                  Transformaciones Antes y Después
                </a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-[#8C6A32] transition-colors">
                  Lookbook de Colecciones
                </a>
              </li>
              <li>
                <a href="#fundadora" className="hover:text-[#8C6A32] transition-colors">
                  Camila Bessing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <p className="text-[#7E746C] text-center sm:text-left font-medium">
            © {new Date().getFullYear()} {SALON_DATA.name} · {SALON_DATA.subtitle}. Todos los derechos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#D9C8B6] bg-[#FFFFFF] text-[#524A43] hover:text-[#1C1815] hover:border-[#8C6A32] transition-colors shadow-xs cursor-pointer font-bold"
          >
            <span>VOLVER AL INICIO</span>
            <ArrowUp className="w-4 h-4 text-[#8C6A32]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
