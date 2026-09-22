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

      const target = e.target as HTMLElement;
      const interactiveEl = target.closest("[data-cursor]");
      if (interactiveEl) {
        const text = interactiveEl.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
      } else if (target.closest("button, a, input, select, textarea, [role='button']")) {
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
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-[#8C6A32]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          width: isHovered ? 0 : 6,
          height: isHovered ? 0 : 6,
          opacity: isHovered ? 0 : 0.8,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
      />

      {/* Dynamic outer ring / label bubble */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] flex items-center justify-center rounded-full border border-[#8C6A32]/40 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (cursorText ? 42 : isHovered ? 24 : 16),
          y: mousePosition.y - (cursorText ? 42 : isHovered ? 24 : 16),
          width: cursorText ? 84 : isHovered ? 48 : 32,
          height: cursorText ? 84 : isHovered ? 48 : 32,
          backgroundColor: cursorText
            ? "rgba(28, 24, 21, 0.92)"
            : isHovered
            ? "rgba(184, 147, 88, 0.12)"
            : "rgba(184, 147, 88, 0.04)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {cursorText && (
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#FAF8F5] select-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}
