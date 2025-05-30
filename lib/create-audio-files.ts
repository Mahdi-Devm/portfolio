// Utility to create and save audio files for hover effects
export class AudioFileCreator {
  private audioContext: AudioContext | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      this.audioContext = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
    }
  }

  // Create a hover sound and return as blob
  async createHoverSoundBlob(
    frequency: number = 800,
    duration: number = 0.1
  ): Promise<Blob> {
    if (!this.audioContext) throw new Error("AudioContext not available");

    const sampleRate = this.audioContext.sampleRate;
    const length = sampleRate * duration;
    const buffer = this.audioContext.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate;
      const envelope = Math.exp(-t * 10); // Exponential decay
      data[i] = Math.sin(2 * Math.PI * frequency * t) * envelope * 0.1;
    }

    return this.bufferToWav(buffer);
  }

  // Create a click sound and return as blob
  async createClickSoundBlob(): Promise<Blob> {
    if (!this.audioContext) throw new Error("AudioContext not available");

    const sampleRate = this.audioContext.sampleRate;
    const duration = 0.1;
    const length = sampleRate * duration;
    const buffer = this.audioContext.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate;
      const frequency = 1000 * Math.exp(-t * 10); // Frequency sweep
      const envelope = Math.exp(-t * 20);
      data[i] = Math.sin(2 * Math.PI * frequency * t) * envelope * 0.2;
    }

    return this.bufferToWav(buffer);
  }

  // Create a notification sound and return as blob
  async createNotificationSoundBlob(): Promise<Blob> {
    if (!this.audioContext) throw new Error("AudioContext not available");

    const sampleRate = this.audioContext.sampleRate;
    const duration = 0.3;
    const length = sampleRate * duration;
    const buffer = this.audioContext.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate;
      const envelope = Math.exp(-t * 3);
      const freq1 = 523.25; // C5
      const freq2 = 659.25; // E5
      data[i] =
        (Math.sin(2 * Math.PI * freq1 * t) +
          Math.sin(2 * Math.PI * freq2 * t)) *
        envelope *
        0.05;
    }

    return this.bufferToWav(buffer);
  }

  // Convert AudioBuffer to WAV blob
  private bufferToWav(buffer: AudioBuffer): Blob {
    const length = buffer.length;
    const arrayBuffer = new ArrayBuffer(44 + length * 2);
    const view = new DataView(arrayBuffer);

    // WAV header
    const writeString = (offset: number, string: string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };

    writeString(0, "RIFF");
    view.setUint32(4, 36 + length * 2, true);
    writeString(8, "WAVE");
    writeString(12, "fmt ");
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true);
    view.setUint32(24, buffer.sampleRate, true);
    view.setUint32(28, buffer.sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(36, "data");
    view.setUint32(40, length * 2, true);

    // Convert float samples to 16-bit PCM
    const data = buffer.getChannelData(0);
    let offset = 44;
    for (let i = 0; i < length; i++) {
      const sample = Math.max(-1, Math.min(1, data[i]));
      view.setInt16(offset, sample * 0x7fff, true);
      offset += 2;
    }

    return new Blob([arrayBuffer], { type: "audio/wav" });
  }

  // Download a blob as file
  downloadBlob(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Create all sound files
  async createAllSoundFiles() {
    try {
      const hoverBlob = await this.createHoverSoundBlob(800, 0.1);
      const clickBlob = await this.createClickSoundBlob();
      const notificationBlob = await this.createNotificationSoundBlob();
      const skillBlob = await this.createHoverSoundBlob(600, 0.15);
      const projectBlob = await this.createHoverSoundBlob(900, 0.12);
      const navBlob = await this.createHoverSoundBlob(1000, 0.08);

      // Create URLs for the blobs
      const sounds = {
        hover: URL.createObjectURL(hoverBlob),
        click: URL.createObjectURL(clickBlob),
        notification: URL.createObjectURL(notificationBlob),
        skill: URL.createObjectURL(skillBlob),
        project: URL.createObjectURL(projectBlob),
        nav: URL.createObjectURL(navBlob),
      };

      return sounds;
    } catch (error) {
      console.error("Error creating sound files:", error);
      return null;
    }
  }
}

export const audioFileCreator = new AudioFileCreator();
