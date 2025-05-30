"use client";

import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { useSound } from "../contexts/sound-context";

export function SoundToggle() {
  const { soundEnabled, toggleSound } = useSound();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSound}
      className="relative"
      title={soundEnabled ? "Disable sounds" : "Enable sounds"}
    >
      {soundEnabled ? (
        <Volume2 className="h-4 w-4" />
      ) : (
        <VolumeX className="h-4 w-4" />
      )}
    </Button>
  );
}
