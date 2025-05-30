# 🎵 Mahdi Baghri's Portfolio

A modern, interactive portfolio website with **hover sound effects** built with Next.js, React, and TypeScript.

## 👨‍💻 About

Frontend Developer with over 2 year of experience in designing and developing attractive and user-friendly websites. Specialized in React and Next.js with attention to detail and commitment to quality.

## ✨ Features

### 🎵 Interactive Sound System

- **Hover Sound Effects** on all interactive elements
- **Different sound types** for different components:
  - Navigation links (high-frequency, short)
  - Project cards (medium frequency)
  - Skill cards (lower frequency, longer)
  - Buttons (click sound)
  - Logo (notification sound)
- **Sound Toggle** in navigation bar
- **Sound Indicator** shows when sounds are enabled/disabled
- **Sound File Generator** to download WAV files
- **Auto-generated sounds** using Web Audio API
- **Fallback system** for browser compatibility

### 🌐 Multi-language Support

- English and Persian (Farsi)
- RTL support for Persian
- Dynamic language switching

### 🎨 Modern Design

- Dark/Light theme toggle
- Responsive design
- Smooth animations
- Professional cursor effects
- Gradient backgrounds

### 📱 Responsive

- Mobile-first design
- Tablet and desktop optimized
- Touch-friendly interactions

## 🛠️ Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Custom components with shadcn/ui
- **Sound:** Web Audio API
- **Icons:** Lucide React
- **Deployment:** Vercel

## 🎵 Sound System Usage

### For Users

1. **Enable/Disable Sounds:** Click the volume icon in the navigation bar
2. **Download Sound Files:** Use the sound generator in the bottom-right corner
3. **Preview Sounds:** Click the play button next to each sound type

### For Developers

```tsx
import { useHoverSound } from "../hooks/use-hover-sound";

// Basic usage
const hoverSound = useHoverSound({ soundType: "hover" });

// Apply to any element
<div {...hoverSound}>Hover over me for sound!</div>;

// Different sound types
const navSound = useHoverSound({ soundType: "nav" });
const buttonSound = useHoverSound({ soundType: "click" });
const skillSound = useHoverSound({ soundType: "skill" });
```

### Sound Types Available

- `hover` - General hover effect
- `click` - Button clicks
- `notification` - Special notifications
- `skill` - Skill card hovers
- `project` - Project card hovers
- `nav` - Navigation link hovers

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/Mahdi-Devm/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js app directory
├── components/            # React components
│   ├── ui/               # UI components
│   ├── sound-*.tsx       # Sound-related components
│   └── *.tsx            # Page components
├── contexts/             # React contexts
│   ├── language-context.tsx
│   └── sound-context.tsx
├── hooks/               # Custom hooks
│   ├── use-hover-sound.ts
│   └── use-sound.ts
├── lib/                # Utilities
│   ├── sound-generator.ts
│   ├── create-audio-files.ts
│   └── i18n.ts
└── public/             # Static assets
    └── sounds/         # Audio files
```

## 🎨 Customization

### Adding New Sounds

1. Create new sound type in `hooks/use-hover-sound.ts`
2. Add sound generation logic in `lib/sound-generator.ts`
3. Update sound file creator in `lib/create-audio-files.ts`

### Adding New Languages

1. Add language type to `lib/i18n.ts`
2. Add translations object
3. Update language switcher component

## 📞 Contact

- **Email:** mahdibaghrichanel@gmail.com
- **Phone:** (+98) 936 853 5209
- **Location:** Isfahan, Iran
- **GitHub:** [@Mahdi-Devm](https://github.com/Mahdi-Devm)
- **Telegram:** [@MB_7_13](https://t.me/MB_7_13)

## 🔗 Live Projects

- [DashStack Dashboard](https://dash-stack-murex.vercel.app)
- [Tarkhineh Restaurant](https://tarkhineh-f6ib.vercel.app)
- [Concepto Portfolio](https://concepto.liara.run)
- [CV Builder](https://cvbuilder.me)

## 📄 License

© 2024 Mahdi Baghri. All rights reserved.

---

**Note:** This portfolio features an innovative sound system that enhances user interaction. Make sure to enable sounds for the full experience! 🎵
