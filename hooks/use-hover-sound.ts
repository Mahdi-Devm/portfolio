import { useCallback, useState, useEffect } from "react";
import { soundGenerator } from "../lib/sound-generator";
import { audioFileCreator } from "../lib/create-audio-files";
import { useSound } from "../contexts/sound-context";

export type SoundType =
  | "hover"
  | "click"
  | "notification"
  | "skill"
  | "project"
  | "nav";

interface HoverSoundOptions {
  volume?: number;
  soundType?: SoundType;
  frequency?: number;
  duration?: number;
}

export function useHoverSound(options: HoverSoundOptions = {}) {
  const { soundType = "hover", frequency = 800, duration = 0.1 } = options;

  const { soundEnabled } = useSound();
  const [isAudioEnabled, setIsAudioEnabled] = useState(false);
  const [soundUrls, setSoundUrls] = useState<Record<string, string> | null>(
    null
  );

  useEffect(() => {
    // Check if user has interacted with the page (required for audio)
    const enableAudio = () => {
      setIsAudioEnabled(true);
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("keydown", enableAudio);
    };

    document.addEventListener("click", enableAudio);
    document.addEventListener("keydown", enableAudio);

    return () => {
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("keydown", enableAudio);
    };
  }, []);

  // Generate sound URLs on first interaction
  useEffect(() => {
    if (isAudioEnabled && !soundUrls) {
      audioFileCreator
        .createAllSoundFiles()
        .then((urls) => {
          if (urls) {
            setSoundUrls(urls);
          }
        })
        .catch(() => {
          // Fallback to Web Audio API if file generation fails
          console.debug("Using Web Audio API fallback for sounds");
        });
    }
  }, [isAudioEnabled, soundUrls]);

  const playSound = useCallback(() => {
    if (!soundEnabled || !isAudioEnabled) return;

    try {
      // Try to use generated sound files first
      if (soundUrls && soundUrls[soundType]) {
        const audio = new Audio(soundUrls[soundType]);
        audio.volume = 0.3;
        audio.play().catch(() => {
          // Fallback to Web Audio API
          playWebAudioSound();
        });
      } else {
        // Fallback to Web Audio API
        playWebAudioSound();
      }
    } catch (error) {
      console.debug("Sound generation failed:", error);
    }
  }, [soundEnabled, isAudioEnabled, soundType, soundUrls, frequency, duration]);

  const playWebAudioSound = useCallback(() => {
    switch (soundType) {
      case "hover":
        soundGenerator.generateHoverSound(frequency, duration);
        break;
      case "click":
        soundGenerator.generateClickSound();
        break;
      case "notification":
        soundGenerator.generateNotificationSound();
        break;
      case "skill":
        soundGenerator.generateHoverSound(600, 0.15);
        break;
      case "project":
        soundGenerator.generateHoverSound(900, 0.12);
        break;
      case "nav":
        soundGenerator.generateHoverSound(1000, 0.08);
        break;
      default:
        soundGenerator.generateHoverSound(frequency, duration);
    }
  }, [soundType, frequency, duration]);

  const onMouseEnter = useCallback(() => {
    playSound();
  }, [playSound]);

  return {
    onMouseEnter,
    playSound,
    isAudioEnabled,
  };
}
