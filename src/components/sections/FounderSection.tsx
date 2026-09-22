import Image from "next/image";
import { Sparkles, Award } from "lucide-react";
import InstagramIcon from "@/components/ui/InstagramIcon";
import { SALON_DATA } from "@/lib/constants";

interface FounderSectionProps {
  onOpenBooking: () => void;
}

export default function FounderSection({ onOpenBooking }: FounderSectionProps) {
  return (
    <section id="fundadora" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[480px] sm:h-[580px] rounded-3xl overflow-hidden border-2 border-[#D9C8B6] shadow-[0_20px_60px_rgba(28,24,21,0.12)]">
              <Image
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80"
                alt="Camila Bessing — Fundadora & Master Stylist en Tu Esencia"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1815]/80 via-transparent to-transparent opacity-85" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#FFFFFF]/95 backdrop-blur-md border border-[#EADDCF] shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-[#1C1815]">Camila Bessing</h4>
                    <p className="text-xs sm:text-sm text-[#8C6A32] font-mono font-semibold">
                      {SALON_DATA.founderHandle}
                    </p>
                  </div>
                  <a
                    href="https://www.instagram.com/camilabessing1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#FAF2E6] text-[#8C6A32] hover:bg-[#8C6A32] hover:text-[#FAF8F5] transition-colors"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Text Story Column */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D9C8B6] bg-[#FFFFFF] text-xs sm:text-sm font-mono tracking-widest text-[#8C6A32] uppercase font-bold shadow-xs">
              <Award className="w-4 h-4" />
              LA VISIÓN DETRÁS DEL ATELIER
            </div>

            <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-5xl md:text-6xl text-[#1C1815] font-normal leading-[1.12]">
              "No creo en transformar a nadie en otra persona. Creo en revelar la mejor versión de quien ya eres."
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-[#4A433D] leading-relaxed font-normal">
              Con más de 5 años de trayectoria constante en el rubro de la belleza en
              Katueté, <strong className="text-[#1C1815] font-bold">Camila Bessing</strong> fundó{" "}
              <strong className="text-[#1C1815] font-bold">Tu Esencia</strong> con una premisa clara:
              ofrecer un espacio íntimo donde cada mecha, cada corte y cada tratamiento
              responda a la anatomía y ritmo de vida de cada clienta.
            </p>

            <div className="grid grid-cols-2 gap-6 py-5 border-y border-[#EADDCF]">
              <div>
                <span className="text-3xl sm:text-4xl font-mono text-[#8C6A32] font-bold block mb-1">
                  5+ Años
                </span>
                <span className="text-xs sm:text-sm text-[#524A43] font-medium">
                  Perfeccionando técnicas de colorimetría y salud capilar
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-mono text-[#8C6A32] font-bold block mb-1">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-[#524A43] font-medium">
                  Atención dedicada y diagnósticos individualizados
                </span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-4.5 rounded-full bg-[#1C1815] hover:bg-[#8C6A32] text-[#FAF8F5] text-xs sm:text-sm font-bold tracking-widest uppercase transition-all shadow-[0_4px_20px_rgba(28,24,21,0.18)] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#DFCA9F]" />
                Agendar Consulta con Camila
              </button>

              <a
                href={SALON_DATA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4.5 rounded-full border border-[#D9C8B6] bg-[#FFFFFF] text-xs sm:text-sm font-bold tracking-wider text-[#1C1815] hover:border-[#8C6A32] hover:bg-[#FAF8F5] transition-colors shadow-xs"
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
