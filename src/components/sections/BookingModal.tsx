"use client";

import { useState } from "react";
import { X, Calendar, Clock, Sparkles, MessageCircle, Check } from "lucide-react";
import { SALON_DATA, RITUALS } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";

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
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-2xl border border-[#dfc18c]/30 bg-[#141312] p-6 sm:p-8 text-[#f8f6f0] shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full p-2 text-[#9e978e] hover:bg-white/5 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#dfc18c]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#dfc18c] font-semibold">
            CONCIERGE VIP
          </span>
        </div>

        <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl text-white font-medium mb-1">
          Reserva tu Experiencia
        </h3>
        <p className="text-xs sm:text-sm text-[#9e978e] mb-6">
          Atención personalizada con Camila Bessing en nuestro espacio en Katueté.
        </p>

        <form onSubmit={handleSendWhatsApp} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#9e978e] mb-1.5">
              Tu Nombre Completo
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: María González"
              className="w-full rounded-lg border border-[rgba(223,193,140,0.2)] bg-[#1b1917] px-4 py-2.5 text-sm text-[#f8f6f0] placeholder-[#6b655f] focus:border-[#dfc18c] focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#9e978e] mb-1.5">
              Ritual o Servicio Deseado
            </label>
            <select
              value={selectedRitual}
              onChange={(e) => setSelectedRitual(e.target.value)}
              className="w-full rounded-lg border border-[rgba(223,193,140,0.2)] bg-[#1b1917] px-4 py-2.5 text-sm text-[#f8f6f0] focus:border-[#dfc18c] focus:outline-none transition-colors"
            >
              {RITUALS.map((r) => (
                <option key={r.id} value={r.title} className="bg-[#141312] text-white">
                  {r.title} ({r.sensoryNotes.duracao})
                </option>
              ))}
              <option value="Consulta & Diagnóstico Personalizado" className="bg-[#141312] text-white">
                Consulta & Diagnóstico Presencial
              </option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#9e978e] mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#dfc18c]" />
                Día Preferido
              </label>
              <input
                type="text"
                value={preferredDay}
                onChange={(e) => setPreferredDay(e.target.value)}
                placeholder="Ej: Este Viernes o Sábado"
                className="w-full rounded-lg border border-[rgba(223,193,140,0.2)] bg-[#1b1917] px-4 py-2.5 text-sm text-[#f8f6f0] placeholder-[#6b655f] focus:border-[#dfc18c] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#9e978e] mb-1.5 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#dfc18c]" />
                Turno
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full rounded-lg border border-[rgba(223,193,140,0.2)] bg-[#1b1917] px-4 py-2.5 text-sm text-[#f8f6f0] focus:border-[#dfc18c] focus:outline-none transition-colors"
              >
                <option value="Mañana (08:30 - 12:00)">Mañana (08:30 - 12:00)</option>
                <option value="Tarde (13:30 - 18:30)">Tarde (13:30 - 18:30)</option>
                <option value="Cualquier horario">Cualquier horario</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-[#9e978e] mb-1.5">
              ¿Algún detalle de tu cabello? (Opcional)
            </label>
            <textarea
              rows={2}
              value={hairNotes}
              onChange={(e) => setHairNotes(e.target.value)}
              placeholder="Ej: Tengo restos de decoloración / cabello fino..."
              className="w-full rounded-lg border border-[rgba(223,193,140,0.2)] bg-[#1b1917] px-4 py-2 text-sm text-[#f8f6f0] placeholder-[#6b655f] focus:border-[#dfc18c] focus:outline-none transition-colors"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 rounded-full bg-[#dfc18c] hover:bg-[#f5e4c3] text-[#0a0908] py-3.5 px-6 font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(223,193,140,0.3)] hover:shadow-[0_0_35px_rgba(223,193,140,0.5)] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Solicitar Turno por WhatsApp
            </button>
          </div>

          <p className="text-[11px] text-center text-[#6b655f]">
            Directo con {SALON_DATA.founder} al {SALON_DATA.whatsappNumber}
          </p>
        </form>
      </div>
    </div>
  );
}
