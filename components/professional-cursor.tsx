"use client";

import { useEffect, useState } from "react";

export default function ProfessionalCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Add event listeners
    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, [data-cursor-hover]'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
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

        body {
          cursor: none !important;
        }
      `}</style>

      {/* Main cursor dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          transform: `translate(${mousePosition.x - 6}px, ${
            mousePosition.y - 6
          }px)`,
          transition: "transform 0.05s ease-out",
        }}
      >
        <div
          className={`w-3 h-3 rounded-full transition-all duration-200 ${
            isClicking
              ? "scale-75 bg-blue-600"
              : "scale-100 bg-gradient-to-r from-blue-500 to-purple-600"
          }`}
          style={{
            boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
          }}
        />
      </div>

      {/* Cursor ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          transform: `translate(${mousePosition.x - 20}px, ${
            mousePosition.y - 20
          }px)`,
          transition:
            "transform 0.1s ease-out, width 0.2s ease-out, height 0.2s ease-out",
        }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            isHovering
              ? "w-16 h-16 border-blue-400 border-2"
              : "w-10 h-10 border-gray-400 border-opacity-50 border"
          }`}
          style={{
            background: isHovering
              ? "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)"
              : "transparent",
            boxShadow: isHovering ? "0 0 20px rgba(59, 130, 246, 0.3)" : "none",
          }}
        />
      </div>

      {/* Trailing particles */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{
          transform: `translate(${mousePosition.x - 2}px, ${
            mousePosition.y - 2
          }px)`,
          transition: "transform 0.15s ease-out",
        }}
      >
        <div
          className="w-1 h-1 rounded-full bg-blue-400 opacity-60"
          style={{
            boxShadow: "0 0 6px rgba(59, 130, 246, 0.4)",
          }}
        />
      </div>

      <div
        className="fixed top-0 left-0 pointer-events-none z-[9996]"
        style={{
          transform: `translate(${mousePosition.x - 1}px, ${
            mousePosition.y - 1
          }px)`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <div
          className="w-0.5 h-0.5 rounded-full bg-purple-400 opacity-40"
          style={{
            boxShadow: "0 0 4px rgba(147, 51, 234, 0.3)",
          }}
        />
      </div>
    </>
  );
}
