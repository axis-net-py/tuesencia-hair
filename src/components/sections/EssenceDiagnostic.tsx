"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Sparkles,
  RotateCcw,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { DIAGNOSTIC_STEPS, SALON_DATA } from "@/lib/constants";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function EssenceDiagnostic() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: any }>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentStep = DIAGNOSTIC_STEPS[currentStepIndex];

  const handleSelectOption = (option: any) => {
    const updated = { ...answers, [currentStep.id]: option };
    setAnswers(updated);

    if (currentStepIndex < DIAGNOSTIC_STEPS.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    } else {
      setIsCompleted(true);
      try {
        confetti({
          particleCount: 75,
          spread: 85,
          origin: { y: 0.6 },
          colors: ["#B89358", "#DFCA9F", "#C5A880", "#1C1815"],
        });
      } catch (_) {}
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStepIndex(0);
    setIsCompleted(false);
  };

  const generateWhatsAppLink = () => {
    const mood = answers[1]?.title || "Personalizado";
    const texture = answers[2]?.title || "Natural";
    const priority = answers[3]?.title || "Transformación";
    const ritual = answers[1]?.recommendedRitual || "Balayage & Spa Capilar";

    const text = `Hola Camila ✨ Realicé el *Diagnóstico de Esencia* en la web y este es mi perfil:\n\n✨ *Mi Estilo Deseado:* ${mood}\n💆‍♀️ *Textura de mi Cabello:* ${texture}\n🎯 *Mi Prioridad:* ${priority}\n🌿 *Ritual Sugerido por el test:* ${ritual}\n\n¿Podemos agendar una cita o evaluación presencial en Katueté? ¡Muchas gracias!`;

    const cleanNumber = SALON_DATA.whatsappNumber.replace(/\D/g, "");
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="diagnostico" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#F5EFEB] relative overflow-hidden">
      {/* Decorative ambient subtle warmth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(223,193,140,0.22)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D9C8B6] bg-[#FFFFFF] text-xs sm:text-sm font-mono tracking-widest text-[#8C6A32] uppercase mb-4 shadow-xs font-bold">
            <Sparkles className="w-4 h-4 text-[#8C6A32]" />
            CONSULTORÍA INTERACTIVA DIGITAL
          </div>

          <h2 className="font-[family-name:var(--font-serif)] text-4xl sm:text-6xl text-[#1C1815] font-normal mb-5">
            Diagnóstico de Esencia
          </h2>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#4A433D] font-normal leading-relaxed">
            En menos de 60 segundos descubre el ritual y tratamiento diseñado exactamente
            para el momento de tu cabello y la energía que deseas reflejar.
          </p>
        </div>

        {/* Diagnostic Card Container */}
        <SpotlightCard className="border-[#EADDCF] bg-[#FFFFFF] p-6 sm:p-12 shadow-[0_12px_45px_rgba(28,24,21,0.07)]">
          {!isCompleted ? (
            <div>
              {/* Progress bar */}
              <div className="mb-10">
                <div className="flex justify-between items-center text-xs sm:text-sm font-mono uppercase tracking-widest text-[#524A43] mb-3 font-semibold">
                  <span>Paso {currentStepIndex + 1} de {DIAGNOSTIC_STEPS.length}</span>
                  <span className="text-[#8C6A32] font-bold">
                    {Math.round(((currentStepIndex + 1) / DIAGNOSTIC_STEPS.length) * 100)}% Completado
                  </span>
                </div>
                <div className="w-full h-2 bg-[#EADDCF] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#B89358] to-[#8C6A32] transition-all duration-500 rounded-full"
                    style={{
                      width: `${((currentStepIndex + 1) / DIAGNOSTIC_STEPS.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Step Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-4xl text-[#1C1815] font-semibold mb-2">
                    {currentStep.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#7E746C] mb-8 font-medium">
                    {currentStep.subtitle}
                  </p>

                  {/* Options Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {currentStep.options.map((option) => {
                      const isSelected = answers[currentStep.id]?.id === option.id;
                      return (
                        <button
                          key={option.id}
                          onClick={() => handleSelectOption(option)}
                          className={`text-left p-6 rounded-2xl border-2 transition-all duration-300 relative group cursor-pointer ${
                            isSelected
                              ? "border-[#8C6A32] bg-[#FAF2E6] shadow-[0_6px_25px_rgba(184,147,88,0.2)]"
                              : "border-[#EADDCF] bg-[#FAF8F5] hover:border-[#8C6A32]/70 hover:bg-[#FFFFFF]"
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2.5">
                            <h4 className="text-base sm:text-xl font-bold text-[#1C1815] group-hover:text-[#8C6A32] transition-colors leading-snug">
                              {option.title}
                            </h4>
                            <span
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-colors shrink-0 ml-2 ${
                                isSelected
                                  ? "border-[#8C6A32] bg-[#8C6A32] text-white"
                                  : "border-[#D9C8B6] text-transparent group-hover:border-[#8C6A32]"
                              }`}
                            >
                              ✓
                            </span>
                          </div>
                          <p className="text-sm sm:text-base text-[#4A433D] leading-relaxed">
                            {option.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ) : (
            /* Results Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-6"
            >
              <div className="w-20 h-20 rounded-full bg-[#FAF2E6] border-2 border-[#8C6A32] flex items-center justify-center mx-auto mb-5 text-[#8C6A32]">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#8C6A32] font-bold">
                RECETA DE BELLEZA EXCLUSIVA
              </span>

              <h3 className="font-[family-name:var(--font-serif)] text-3xl sm:text-5xl text-[#1C1815] font-normal mt-2 mb-6">
                Tu Protocolo Personalizado
              </h3>

              <div className="max-w-xl mx-auto rounded-2xl border-2 border-[#D9C8B6] bg-[#FAF8F5] p-7 text-left mb-8 shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#EADDCF] mb-5 gap-3">
                  <div>
                    <span className="text-xs font-mono text-[#7E746C] uppercase tracking-wider block font-semibold mb-1">
                      Ritual Recomendado:
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-[#8C6A32]">
                      {answers[1]?.recommendedRitual || "Balayage Haute Couture + Spa Botánico"}
                    </span>
                  </div>
                  <span className="self-start sm:self-auto px-3 py-1.5 rounded-full bg-[#FAF2E6] text-[#8C6A32] border border-[#D9C8B6] text-xs sm:text-sm font-mono font-bold">
                    Atelier Katueté
                  </span>
                </div>

                <div className="space-y-3 text-sm sm:text-base text-[#4A433D]">
                  <p>
                    <strong className="text-[#1C1815] font-bold">Estilo & Energía:</strong>{" "}
                    {answers[1]?.title}
                  </p>
                  <p>
                    <strong className="text-[#1C1815] font-bold">Diagnóstico de Hebra:</strong>{" "}
                    {answers[2]?.title}
                  </p>
                  <p>
                    <strong className="text-[#1C1815] font-bold">Prioridad Inmediata:</strong>{" "}
                    {answers[3]?.title}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4.5 rounded-full bg-[#1C1815] hover:bg-[#8C6A32] text-[#FAF8F5] font-bold text-sm sm:text-base tracking-widest uppercase transition-all duration-300 shadow-[0_6px_25px_rgba(28,24,21,0.2)] cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current text-[#DFCA9F]" />
                  Agendar Mi Protocolo por WhatsApp
                </a>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-[#524A43] hover:text-[#1C1815] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  Repetir Diagnóstico
                </button>
              </div>
            </motion.div>
          )}
        </SpotlightCard>
      </div>
    </section>
  );
}
