import Image from "next/image";
import { Sparkles, Award } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { SALON_DATA } from "@/lib/constants";

interface FounderSectionProps {
  onOpenBooking: () => void;
}

export default function FounderSection({ onOpenBooking }: FounderSectionProps) {
  return (
    <section id="fundadora" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[460px] sm:h-[540px] rounded-2xl overflow-hidden border border-[#D9C8B6] shadow-[0_15px_50px_rgba(28,24,21,0.08)]">
              <Image
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80"
                alt="Camila Bessing — Fundadora & Master Stylist en Tu Esencia"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1815]/75 via-transparent to-transparent opacity-80" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#FFFFFF]/95 backdrop-blur-md border border-[#EADDCF] shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-semibold text-[#1C1815]">Camila Bessing</h4>
                    <p className="text-[11px] text-[#8C6A32] font-mono font-medium">
                      {SALON_DATA.founderHandle}
                    </p>
                  </div>
                  <a
                    href="https://www.instagram.com/camilabessing1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#FAF2E6] text-[#8C6A32] hover:bg-[#8C6A32] hover:text-[#FAF8F5] transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Text Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D9C8B6] bg-[#FFFFFF] text-xs font-mono tracking-widest text-[#8C6A32] uppercase font-semibold shadow-xs">
              <Award className="w-3.5 h-3.5" />
              LA VISIÓN DETRÁS DEL ATELIER
            </div>

            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-5xl text-[#1C1815] font-normal leading-tight">
              "No creo en transformar a nadie en otra persona. Creo en revelar la mejor versión de quien ya eres."
            </h2>

            <p className="text-sm sm:text-base text-[#524A43] leading-relaxed">
              Con más de 5 años de trayectoria constante en el rubro de la belleza en
              Katueté, <strong className="text-[#1C1815]">Camila Bessing</strong> fundó{" "}
              <strong className="text-[#1C1815]">Tu Esencia</strong> con una premisa clara:
              ofrecer un espacio íntimo donde cada mecha, cada corte y cada tratamiento
              responda a la anatomía y ritmo de vida de cada clienta.
            </p>

            <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#EADDCF]">
              <div>
                <span className="text-2xl font-mono text-[#8C6A32] font-bold block">
                  5+ Años
                </span>
                <span className="text-xs text-[#7E746C]">
                  Perfeccionando técnicas de colorimetría y salud capilar
                </span>
              </div>
              <div>
                <span className="text-2xl font-mono text-[#8C6A32] font-bold block">
                  100%
                </span>
                <span className="text-xs text-[#7E746C]">
                  Atención dedicada y diagnósticos individualizados
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#1C1815] hover:bg-[#8C6A32] text-[#FAF8F5] text-xs font-bold tracking-widest uppercase transition-all shadow-[0_4px_20px_rgba(28,24,21,0.15)] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#DFCA9F]" />
                Agendar Consulta con Camila
              </button>

              <a
                href={SALON_DATA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#D9C8B6] bg-[#FFFFFF] text-xs font-semibold tracking-wider text-[#1C1815] hover:border-[#8C6A32] hover:bg-[#FAF8F5] transition-colors shadow-xs"
              >
                <InstagramIcon className="w-4 h-4 text-[#8C6A32]" />
                Ver Trabajos en Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
