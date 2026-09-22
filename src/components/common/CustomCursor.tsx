"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element with custom cursor label
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("[data-cursor]");
      if (interactiveEl) {
        const text = interactiveEl.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else if (target.closest("button, a, input, [role='button']")) {
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-[#dfc18c] mix-blend-difference"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          width: isHovered ? 0 : 6,
          height: isHovered ? 0 : 6,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
      />

      {/* Dynamic outer ring / label bubble */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] flex items-center justify-center rounded-full border border-[#dfc18c]/60 backdrop-blur-[2px]"
        animate={{
          x: mousePosition.x - (cursorText ? 40 : isHovered ? 24 : 16),
          y: mousePosition.y - (cursorText ? 40 : isHovered ? 24 : 16),
          width: cursorText ? 80 : isHovered ? 48 : 32,
          height: cursorText ? 80 : isHovered ? 48 : 32,
          backgroundColor: cursorText
            ? "rgba(223, 193, 140, 0.9)"
            : isHovered
            ? "rgba(223, 193, 140, 0.15)"
            : "rgba(223, 193, 140, 0.05)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {cursorText && (
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#0a0908] select-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}
