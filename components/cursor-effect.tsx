"use client";

import { useEffect } from "react";

export default function CursorEffect() {
  useEffect(() => {
    let cleanup: (() => void) | null = null;

    const initCursor = async () => {
      try {
        // Dynamically import the cursor effects library
        const {
          fairyDustCursor,
          rainbowCursor,
          springyEmojiCursor,
          trailingCursor,
        } = await import("cursor-effects");

        // You can choose from different effects:
        // 1. Rainbow cursor - colorful trailing effect
        const cursorEffect = rainbowCursor({
          length: 20,
          colors: [
            "#ff0000",
            "#ff8800",
            "#ffff00",
            "#88ff00",
            "#00ff00",
            "#00ff88",
            "#00ffff",
            "#0088ff",
            "#0000ff",
            "#8800ff",
            "#ff00ff",
            "#ff0088",
          ],
          size: 3,
        });

        // Store the cleanup function
        cleanup = () => {
          if (cursorEffect && typeof cursorEffect.destroy === "function") {
            cursorEffect.destroy();
          }
        };

        // 2. Fairy dust cursor - sparkly effect
        // cleanup = fairyDustCursor({
        //   colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
        // })

        // 3. Trailing cursor - smooth trailing effect
        // cleanup = trailingCursor({
        //   particles: 15,
        //   rate: 0.4,
        //   baseImageSrc: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHZpZXdCb3g9IjAgMCAxMCAxMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNSIgY3k9IjUiIHI9IjUiIGZpbGw9IiNmZjAwZmYiLz4KPHN2Zz4K'
        // })

        // 4. Springy emoji cursor - fun emoji effect
        // cleanup = springyEmojiCursor({ emoji: ['🌈', '✨', '💫', '⭐', '🎨'] })
      } catch (error) {
        console.error("Failed to load cursor effects:", error);
      }
    };

    initCursor();

    return () => {
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  return null;
}
