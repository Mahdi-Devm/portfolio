"use client";

import { useState } from "react";
import { Download, Music, Volume2 } from "lucide-react";
import { Button } from "./ui/button";
import { audioFileCreator } from "../lib/create-audio-files";

export function SoundFileGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSounds, setGeneratedSounds] = useState<Record<
    string,
    string
  > | null>(null);

  const generateSounds = async () => {
    setIsGenerating(true);
    try {
      const sounds = await audioFileCreator.createAllSoundFiles();
      setGeneratedSounds(sounds);
    } catch (error) {
      console.error("Error generating sounds:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadSound = async (type: string, filename: string) => {
    try {
      let blob: Blob;

      switch (type) {
        case "hover":
          blob = await audioFileCreator.createHoverSoundBlob(800, 0.1);
          break;
        case "click":
          blob = await audioFileCreator.createClickSoundBlob();
          break;
        case "notification":
          blob = await audioFileCreator.createNotificationSoundBlob();
          break;
        case "skill":
          blob = await audioFileCreator.createHoverSoundBlob(600, 0.15);
          break;
        case "project":
          blob = await audioFileCreator.createHoverSoundBlob(900, 0.12);
          break;
        case "nav":
          blob = await audioFileCreator.createHoverSoundBlob(1000, 0.08);
          break;
        default:
          return;
      }

      audioFileCreator.downloadBlob(blob, filename);
    } catch (error) {
      console.error("Error downloading sound:", error);
    }
  };

  const playPreview = (url: string) => {
    const audio = new Audio(url);
    audio.volume = 0.3;
    audio.play().catch(console.error);
  };

  const soundTypes = [
    {
      type: "hover",
      name: "Hover Sound",
      filename: "hover-sound.wav",
      description: "General hover effect",
    },
    {
      type: "click",
      name: "Click Sound",
      filename: "click-sound.wav",
      description: "Button click effect",
    },
    {
      type: "notification",
      name: "Notification",
      filename: "notification-sound.wav",
      description: "Logo hover effect",
    },
    {
      type: "skill",
      name: "Skill Hover",
      filename: "skill-hover.wav",
      description: "Skill card hover",
    },
    {
      type: "project",
      name: "Project Hover",
      filename: "project-hover.wav",
      description: "Project card hover",
    },
    {
      type: "nav",
      name: "Navigation",
      filename: "nav-hover.wav",
      description: "Navigation link hover",
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-background/95 backdrop-blur border border-border rounded-lg p-4 shadow-lg max-w-sm">
        <div className="flex items-center gap-2 mb-3">
          <Music className="h-4 w-4 text-primary" />
          <h3 className="font-semibold text-sm">Sound Generator</h3>
        </div>

        <p className="text-xs text-muted-foreground mb-3">
          Generate and download sound files for hover effects
        </p>

        <Button
          onClick={generateSounds}
          disabled={isGenerating}
          size="sm"
          className="w-full mb-3"
        >
          {isGenerating ? "Generating..." : "Generate Sounds"}
        </Button>

        {generatedSounds && (
          <div className="space-y-2">
            {soundTypes.map((sound) => (
              <div key={sound.type} className="flex items-center gap-2 text-xs">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => playPreview(generatedSounds[sound.type])}
                  className="p-1 h-6 w-6"
                  title="Preview"
                >
                  <Volume2 className="h-3 w-3" />
                </Button>
                <span className="flex-1 truncate">{sound.name}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => downloadSound(sound.type, sound.filename)}
                  className="p-1 h-6 w-6"
                  title="Download"
                >
                  <Download className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
