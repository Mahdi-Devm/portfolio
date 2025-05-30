import type { Metadata } from "next";
import "./globals.css";
import ProfessionalCursor from "../components/professional-cursor";
import { ThemeProvider } from "../components/theme-provider";
import { LanguageProvider } from "../contexts/language-context";
import { SoundProvider } from "../contexts/sound-context";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Portfolio - Professional Developer",
  description: "Professional portfolio with dark/light mode support",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          <SoundProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <ProfessionalCursor />
              {children}
              <Toaster />
            </ThemeProvider>
          </SoundProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
