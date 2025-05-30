"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  setSoundEnabled: (enabled: boolean) => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Load sound preference from localStorage
  useEffect(() => {
    const savedPreference = localStorage.getItem("soundEnabled");
    if (savedPreference !== null) {
      setSoundEnabled(JSON.parse(savedPreference));
    }
  }, []);

  // Save sound preference to localStorage
  useEffect(() => {
    localStorage.setItem("soundEnabled", JSON.stringify(soundEnabled));
  }, [soundEnabled]);

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  return (
    <SoundContext.Provider
      value={{ soundEnabled, toggleSound, setSoundEnabled }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error("useSound must be used within a SoundProvider");
  }
  return context;
}
