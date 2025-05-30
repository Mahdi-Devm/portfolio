"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    document.addEventListener("mousemove", updateMousePosition);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Custom cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate(${mousePosition.x - 20}px, ${
            mousePosition.y - 20
          }px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          className={`w-10 h-10 rounded-full border-2 border-white transition-all duration-300 ${
            isHovering ? "scale-150 bg-white/20" : "scale-100"
          }`}
          style={{
            background: isHovering
              ? "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%)"
              : "transparent",
            boxShadow: isHovering
              ? "0 0 20px rgba(255,255,255,0.5), inset 0 0 20px rgba(255,255,255,0.2)"
              : "0 0 10px rgba(255,255,255,0.3)",
          }}
        />
      </div>

      {/* Trailing dots */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${
            mousePosition.y - 4
          }px)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-80" />
      </div>

      <div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          transform: `translate(${mousePosition.x - 2}px, ${
            mousePosition.y - 2
          }px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <div className="w-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-60" />
      </div>
    </>
  );
}
