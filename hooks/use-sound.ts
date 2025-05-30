import { useCallback, useRef, useEffect } from "react";

interface SoundOptions {
  volume?: number;
  playbackRate?: number;
  enabled?: boolean;
}

export function useSound(soundUrl: string, options: SoundOptions = {}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { volume = 0.3, playbackRate = 1, enabled = true } = options;

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(soundUrl);
      audioRef.current.volume = volume;
      audioRef.current.playbackRate = playbackRate;
      audioRef.current.preload = "auto";
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [soundUrl, volume, playbackRate]);

  const play = useCallback(() => {
    if (!enabled || !audioRef.current) return;

    try {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((error) => {
        // Silently handle autoplay restrictions
        console.debug("Audio play failed:", error);
      });
    } catch (error) {
      console.debug("Audio play error:", error);
    }
  }, [enabled]);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, []);

  return { play, stop };
}

// Hook for hover sound effects
export function useHoverSound(soundUrl: string, options: SoundOptions = {}) {
  const { play } = useSound(soundUrl, options);

  const onMouseEnter = useCallback(() => {
    play();
  }, [play]);

  return { onMouseEnter };
}
