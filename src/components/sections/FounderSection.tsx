import Image from "next/image";
import { Sparkles, Award, Heart } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { SALON_DATA } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";

interface FounderSectionProps {
  onOpenBooking: () => void;
}

export default function FounderSection({ onOpenBooking }: FounderSectionProps) {
  return (
    <section id="fundadora" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0908] relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[460px] sm:h-[540px] rounded-2xl overflow-hidden border border-[#dfc18c]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              <Image
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80"
                alt="Camila Bessing — Fundadora & Master Stylist en Tu Esencia"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-transparent to-transparent opacity-80" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#141312]/90 backdrop-blur-md border border-[#dfc18c]/30">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-white">Camila Bessing</h4>
                    <p className="text-[11px] text-[#dfc18c] font-mono">
                      {SALON_DATA.founderHandle}
                    </p>
                  </div>
                  <a
                    href="https://www.instagram.com/camilabessing1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/10 text-white hover:text-[#dfc18c] transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Text Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#dfc18c]/30 bg-[#141312] text-xs font-mono tracking-widest text-[#dfc18c] uppercase">
              <Award className="w-3.5 h-3.5" />
              LA VISIÓN DETRÁS DEL ATELIER
            </div>

            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-5xl text-[#f8f6f0] font-normal leading-tight">
              "No creo en transformar a nadie en otra persona. Creo en revelar la mejor versión de quien ya eres."
            </h2>

            <p className="text-sm sm:text-base text-[#9e978e] leading-relaxed">
              Con más de 5 años de trayectoria constante en el rubro de la belleza en
              Katueté, <strong className="text-white">Camila Bessing</strong> fundó{" "}
              <strong className="text-white">Tu Esencia</strong> con una premisa clara:
              ofrecer un espacio íntimo donde cada mecha, cada corte y cada tratamiento
              responda a la anatomía y ritmo de vida de cada clienta.
            </p>

            <div className="grid grid-cols-2 gap-4 py-2 border-y border-white/10">
              <div>
                <span className="text-2xl font-mono text-[#dfc18c] font-bold block">
                  5+ Años
                </span>
                <span className="text-xs text-[#9e978e]">
                  Perfeccionando técnicas de colorimetría y salud capilar
                </span>
              </div>
              <div>
                <span className="text-2xl font-mono text-[#dfc18c] font-bold block">
                  100%
                </span>
                <span className="text-xs text-[#9e978e]">
                  Atención dedicada y diagnósticos individualizados
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#dfc18c] hover:bg-[#f5e4c3] text-[#0a0908] text-xs font-bold tracking-widest uppercase transition-all shadow-[0_0_25px_rgba(223,193,140,0.3)] cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                Agendar Consulta con Camila
              </button>

              <a
                href={SALON_DATA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/5 text-xs font-semibold tracking-wider text-white hover:border-[#dfc18c] transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-[#dfc18c]" />
                Ver Trabajos en Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
