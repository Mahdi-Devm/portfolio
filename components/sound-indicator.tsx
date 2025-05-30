"use client";

import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useSound } from "../contexts/sound-context";

export function SoundIndicator() {
  const { soundEnabled } = useSound();
  const [showIndicator, setShowIndicator] = useState(false);

  useEffect(() => {
    // Show indicator for a few seconds when sound state changes
    setShowIndicator(true);
    const timer = setTimeout(() => {
      setShowIndicator(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [soundEnabled]);

  if (!showIndicator) return null;

  return (
    <div className="fixed top-20 right-4 z-40 bg-background/95 backdrop-blur border border-border rounded-lg p-3 shadow-lg animate-in slide-in-from-right-full fade-in">
      <div className="flex items-center gap-2">
        {soundEnabled ? (
          <Volume2 className="h-4 w-4 text-green-500" />
        ) : (
          <VolumeX className="h-4 w-4 text-red-500" />
        )}
        <span className="text-sm font-medium">
          {soundEnabled ? "Sounds Enabled" : "Sounds Disabled"}
        </span>
      </div>
    </div>
  );
}
