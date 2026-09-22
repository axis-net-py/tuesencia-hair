"use client";

import { useState } from "react";
import { X, Calendar, Clock, Sparkles, MessageCircle } from "lucide-react";
import { SALON_DATA, RITUALS } from "@/lib/constants";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRitual?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  preselectedRitual,
}: BookingModalProps) {
  const [name, setName] = useState("");
  const [selectedRitual, setSelectedRitual] = useState(
    preselectedRitual || RITUALS[0].title
  );
  const [preferredDay, setPreferredDay] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [hairNotes, setHairNotes] = useState("");

  if (!isOpen) return null;

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNumber = SALON_DATA.whatsappNumber.replace(/\D/g, "");

    const text = `Hola Camila y equipo de *TU ESENCIA* ✨\n\nQuisiera agendar una cita exclusiva en el salón:\n\n👤 *Nombre:* ${name || "Cliente"}\n💇‍♀️ *Servicio/Ritual:* ${selectedRitual}\n📅 *Preferencia de Día:* ${preferredDay || "Lo antes posible"}\n⏰ *Horario sugerido:* ${preferredTime || "Por la tarde"}${hairNotes ? `\n📝 *Detalles de mi cabello:* ${hairNotes}` : ""}\n\n¿Tienen disponibilidad? ¡Muchas gracias!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${cleanNumber}?text=${encoded}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-3xl border-2 border-[#D9C8B6] bg-[#FFFFFF] p-7 sm:p-9 text-[#1C1815] shadow-[0_25px_80px_rgba(28,24,21,0.25)] z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full p-2.5 text-[#7E746C] hover:bg-black/5 hover:text-[#1C1815] transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#8C6A32]" />
          <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#8C6A32] font-bold">
            CONCIERGE VIP
          </span>
        </div>

        <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-4xl text-[#1C1815] font-bold mb-1.5">
          Reserva tu Experiencia
        </h3>
        <p className="text-sm sm:text-base text-[#524A43] mb-7 font-normal">
          Atención personalizada con Camila Bessing en nuestro espacio en Katueté.
        </p>

        <form onSubmit={handleSendWhatsApp} className="space-y-5">
          <div>
            <label className="block text-xs sm:text-sm uppercase tracking-wider text-[#1C1815] mb-2 font-bold">
              Tu Nombre Completo
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: María González"
              className="w-full rounded-xl border border-[#EADDCF] bg-[#FAF8F5] px-4 py-3 text-base text-[#1C1815] placeholder-[#9E958C] focus:border-[#8C6A32] focus:bg-[#FFFFFF] focus:outline-none transition-colors font-medium"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm uppercase tracking-wider text-[#1C1815] mb-2 font-bold">
              Ritual o Servicio Deseado
            </label>
            <select
              value={selectedRitual}
              onChange={(e) => setSelectedRitual(e.target.value)}
              className="w-full rounded-xl border border-[#EADDCF] bg-[#FAF8F5] px-4 py-3 text-base text-[#1C1815] focus:border-[#8C6A32] focus:bg-[#FFFFFF] focus:outline-none transition-colors font-medium"
            >
              {RITUALS.map((r) => (
                <option key={r.id} value={r.title}>
                  {r.title} ({r.sensoryNotes.duracao})
                </option>
              ))}
              <option value="Consulta & Diagnóstico Personalizado">
                Consulta & Diagnóstico Presencial
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs sm:text-sm uppercase tracking-wider text-[#1C1815] mb-2 flex items-center gap-1.5 font-bold">
                <Calendar className="w-4 h-4 text-[#8C6A32]" />
                Día Preferido
              </label>
              <input
                type="text"
                value={preferredDay}
                onChange={(e) => setPreferredDay(e.target.value)}
                placeholder="Ej: Este Viernes o Sábado"
                className="w-full rounded-xl border border-[#EADDCF] bg-[#FAF8F5] px-4 py-3 text-base text-[#1C1815] placeholder-[#9E958C] focus:border-[#8C6A32] focus:bg-[#FFFFFF] focus:outline-none transition-colors font-medium"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm uppercase tracking-wider text-[#1C1815] mb-2 flex items-center gap-1.5 font-bold">
                <Clock className="w-4 h-4 text-[#8C6A32]" />
                Turno
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full rounded-xl border border-[#EADDCF] bg-[#FAF8F5] px-4 py-3 text-base text-[#1C1815] focus:border-[#8C6A32] focus:bg-[#FFFFFF] focus:outline-none transition-colors font-medium"
              >
                <option value="Mañana (08:30 - 12:00)">Mañana (08:30 - 12:00)</option>
                <option value="Tarde (13:30 - 18:30)">Tarde (13:30 - 18:30)</option>
                <option value="Cualquier horario">Cualquier horario</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs sm:text-sm uppercase tracking-wider text-[#1C1815] mb-2 font-bold">
              ¿Algún detalle de tu cabello? (Opcional)
            </label>
            <textarea
              rows={3}
              value={hairNotes}
              onChange={(e) => setHairNotes(e.target.value)}
              placeholder="Ej: Tengo restos de decoloración / cabello fino..."
              className="w-full rounded-xl border border-[#EADDCF] bg-[#FAF8F5] px-4 py-2.5 text-base text-[#1C1815] placeholder-[#9E958C] focus:border-[#8C6A32] focus:bg-[#FFFFFF] focus:outline-none transition-colors font-medium"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 rounded-full bg-[#1C1815] hover:bg-[#8C6A32] text-[#FAF8F5] py-4 px-7 font-bold text-sm sm:text-base tracking-widest uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(28,24,21,0.2)] cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current text-[#DFCA9F]" />
              Solicitar Turno por WhatsApp
            </button>
          </div>

          <p className="text-xs sm:text-sm text-center text-[#7E746C] font-medium">
            Directo con {SALON_DATA.founder} al {SALON_DATA.whatsappNumber}
          </p>
        </form>
      </div>
    </div>
  );
}
