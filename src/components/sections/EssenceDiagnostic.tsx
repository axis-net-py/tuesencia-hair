"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Sparkles,
  ArrowRight,
  RotateCcw,
  MessageCircle,
  CheckCircle2,
  HelpCircle,
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
      // Trigger elegant celebration confetti
      try {
        confetti({
          particleCount: 70,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#dfc18c", "#f5e4c3", "#c88a58", "#ffffff"],
        });
      } catch (_) {}
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStepIndex(0);
    setIsCompleted(false);
  };

  // Generate tailored WhatsApp message with diagnostic results
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
    <section id="diagnostico" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0e0d0c] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse,rgba(223,193,140,0.07)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#dfc18c]/30 bg-[#141312] text-xs font-mono tracking-widest text-[#dfc18c] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#dfc18c]" />
            CONSULTORÍA INTERACTIVA DIGITAL
          </div>

          <h2 className="font-[family-name:var(--font-serif)] text-3xl sm:text-5xl text-[#f8f6f0] font-normal mb-4">
            Diagnóstico de Esencia
          </h2>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#9e978e] font-light">
            En menos de 60 segundos descubre el ritual y tratamiento diseñado exactamente
            para el momento de tu cabello y la energía que deseas reflejar.
          </p>
        </div>

        {/* Diagnostic Card Container */}
        <SpotlightCard className="border-[#dfc18c]/25 bg-[#141312]/90 backdrop-blur-xl p-6 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {!isCompleted ? (
            <div>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center text-xs font-mono uppercase tracking-widest text-[#9e978e] mb-2">
                  <span>Paso {currentStepIndex + 1} de {DIAGNOSTIC_STEPS.length}</span>
                  <span className="text-[#dfc18c]">
                    {Math.round(((currentStepIndex + 1) / DIAGNOSTIC_STEPS.length) * 100)}% Completado
                  </span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#dfc18c] to-[#f5e4c3] transition-all duration-500 rounded-full"
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
                  <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl text-white font-medium mb-1">
                    {currentStep.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9e978e] mb-6">
                    {currentStep.subtitle}
                  </p>

                  {/* Options Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {currentStep.options.map((option) => {
                      const isSelected = answers[currentStep.id]?.id === option.id;
                      return (
                        <button
                          key={option.id}
                          onClick={() => handleSelectOption(option)}
                          className={`text-left p-5 rounded-xl border transition-all duration-300 relative group cursor-pointer ${
                            isSelected
                              ? "border-[#dfc18c] bg-[#dfc18c]/15 shadow-[0_0_25px_rgba(223,193,140,0.2)]"
                              : "border-white/10 bg-[#1a1816]/70 hover:border-[#dfc18c]/50 hover:bg-[#201e1b]"
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-sm sm:text-base font-semibold text-[#f8f6f0] group-hover:text-[#dfc18c] transition-colors">
                              {option.title}
                            </h4>
                            <span
                              className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs transition-colors ${
                                isSelected
                                  ? "border-[#dfc18c] bg-[#dfc18c] text-black"
                                  : "border-white/20 text-transparent group-hover:border-[#dfc18c]"
                              }`}
                            >
                              ✓
                            </span>
                          </div>
                          <p className="text-xs text-[#9e978e] leading-relaxed">
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
              className="text-center py-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#dfc18c]/20 border border-[#dfc18c] flex items-center justify-center mx-auto mb-4 text-[#dfc18c]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#dfc18c]">
                RECETA DE BELLEZA EXCLUSIVA
              </span>

              <h3 className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl text-white font-normal mt-2 mb-4">
                Tu Protocolo Personalizado
              </h3>

              <div className="max-w-xl mx-auto rounded-xl border border-[#dfc18c]/30 bg-[#1b1917] p-6 text-left mb-8">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#9e978e] uppercase tracking-wider block">
                      Ritual Recomendado:
                    </span>
                    <span className="text-lg font-semibold text-[#dfc18c]">
                      {answers[1]?.recommendedRitual || "Balayage Haute Couture + Spa Botánico"}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#dfc18c]/20 text-[#dfc18c] text-xs font-mono">
                    Atelier Katueté
                  </span>
                </div>

                <div className="space-y-2 text-xs text-[#c9b9a6]">
                  <p>
                    <strong className="text-white">Estilo & Energía:</strong>{" "}
                    {answers[1]?.title}
                  </p>
                  <p>
                    <strong className="text-white">Diagnóstico de Hebra:</strong>{" "}
                    {answers[2]?.title}
                  </p>
                  <p>
                    <strong className="text-white">Prioridad Inmediata:</strong>{" "}
                    {answers[3]?.title}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#dfc18c] hover:bg-[#f5e4c3] text-[#0a0908] font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_30px_rgba(223,193,140,0.4)]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  Agendar Mi Protocolo por WhatsApp
                </a>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs tracking-wider uppercase text-[#9e978e] hover:text-white transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
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
