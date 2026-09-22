"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AmbienceSound({ className }: { className?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const oscillatorRefs = useRef<OscillatorNode[]>([]);

  const startAmbience = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 2); // very gentle background
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Soft harmonic frequencies (E4, B4, G#4 chord with warm low drone)
      const frequencies = [164.81, 246.94, 329.63, 415.30];
      const oscillators: OscillatorNode[] = [];

      frequencies.forEach((freq) => {
        const osc = ctx.createOscillator();
        const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
        const filter = ctx.createBiquadFilter();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(450, ctx.currentTime);

        if (panner) {
          panner.pan.value = (Math.random() - 0.5) * 0.8;
          osc.connect(filter);
          filter.connect(panner);
          panner.connect(masterGain);
        } else {
          osc.connect(filter);
          filter.connect(masterGain);
        }

        osc.start();
        oscillators.push(osc);
      });

      oscillatorRefs.current = oscillators;
      setIsPlaying(true);
    } catch (e) {
      console.warn("Audio ambient mode not supported:", e);
    }
  };

  const stopAmbience = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1);
      setTimeout(() => {
        oscillatorRefs.current.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch (_) {}
        });
        oscillatorRefs.current = [];
        ctx.close();
        audioCtxRef.current = null;
        setIsPlaying(false);
      }, 1000);
    } else {
      setIsPlaying(false);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbience();
    } else {
      startAmbience();
    }
  };

  useEffect(() => {
    return () => {
      stopAmbience();
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? "Desactivar atmósfera sonora" : "Activar atmósfera sensorial (Audio Spa)"}
      className={cn(
        "relative flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs tracking-wider transition-all duration-300 backdrop-blur-md cursor-pointer select-none whitespace-nowrap",
        isPlaying
          ? "border-[#B89358] bg-[#FAF2E6] text-[#8C6A32] shadow-[0_2px_12px_rgba(184,147,88,0.2)]"
          : "border-[#D9C8B6] bg-[#FFFFFF]/80 text-[#524A43] hover:text-[#1C1815] hover:border-[#B89358]",
        className
      )}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-[#8C6A32] animate-pulse" />
          <span className="hidden xl:inline font-mono text-[10.5px]">SONIDO ATELIER : ON</span>
          <span className="flex gap-0.5 items-end h-2.5">
            <span className="w-0.5 h-full bg-[#8C6A32] animate-bounce" style={{ animationDelay: "0ms" }} />
            <span className="w-0.5 h-2/3 bg-[#8C6A32] animate-bounce" style={{ animationDelay: "150ms" }} />
            <span className="w-0.5 h-3/4 bg-[#8C6A32] animate-bounce" style={{ animationDelay: "300ms" }} />
          </span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-[#7E746C]" />
          <span className="hidden xl:inline font-mono text-[10.5px]">ATMÓSFERA SENSORIAL</span>
        </>
      )}
    </button>
  );
}
