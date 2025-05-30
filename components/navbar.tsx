"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { SimpleThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { SoundToggle } from "./sound-toggle";
import { useLanguage } from "../contexts/language-context";
import { useHoverSound } from "../hooks/use-hover-sound";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, isRTL } = useLanguage();

  // Sound effects for different elements
  const navLinkSound = useHoverSound({ soundType: "nav" });
  const buttonSound = useHoverSound({ soundType: "click" });
  const logoSound = useHoverSound({ soundType: "notification" });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between h-16 ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          <Link href="/" className="flex-shrink-0">
            <svg
              width="204"
              height="36"
              viewBox="0 0 204 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-48 h-auto"
            >
              <g clipPath="url(#clip0_120_893)">
                <path
                  d="M46.7293 0H4.9712C2.22568 0 0 2.04022 0 4.55696V31.443C0 33.9598 2.22568 36 4.9712 36H46.7293C49.4748 36 51.7005 33.9598 51.7005 31.443V4.55696C51.7005 2.04022 49.4748 0 46.7293 0Z"
                  fill="currentColor"
                  className="text-foreground"
                />
                <path
                  d="M28.3096 9.11499L21.3664 26.7859H23.4594L30.4027 9.11499H28.3096ZM19.3351 11.6637L18.7943 11.9822L10.3914 16.9663L9.94336 17.2282V18.191L10.3605 18.4672L18.7634 23.9044L19.3351 24.2655V22.0496L12.7007 17.7522L19.3351 13.8159V11.6637ZM32.1866 11.6637V13.8159L38.8209 17.7522L32.1866 22.0496V24.2655L32.7582 23.9044L41.1611 18.4672L41.5783 18.191V17.2282L41.1302 16.9663L32.7273 11.9822L32.1866 11.6637Z"
                  fill="currentColor"
                  className="text-background"
                />
                <path
                  d="M64.5597 6.83447V29.2814H61.6445V6.83447H64.5597ZM72.1067 15.2075V23.64C72.1067 24.7484 72.4252 25.6095 73.0623 26.2231C73.6993 26.8367 74.5468 27.1436 75.6049 27.1436C76.9653 27.1436 78.018 26.7328 78.763 25.9114C79.508 25.0899 79.8805 23.9765 79.8805 22.571V15.2075H82.7957V29.2814H79.8805V27.1139H79.8157C79.4054 27.9057 78.736 28.5242 77.8075 28.9696C76.879 29.415 75.864 29.6377 74.7628 29.6377C73.0569 29.6377 71.7018 29.1527 70.6977 28.1828C69.6936 27.2128 69.1916 25.946 69.1916 24.3822V15.2075H72.1067ZM90.116 6.83447V21.324L96.756 15.2075H100.805L93.6141 21.6209L101.388 29.2814H97.2419L90.116 21.9772V29.2814H87.2008V6.83447H90.116Z"
                  fill="currentColor"
                  className="text-foreground"
                />
                <path
                  d="M111.721 14.8512C113.945 14.8512 115.543 15.7222 116.514 17.4641C117.011 16.6327 117.691 15.9894 118.555 15.5341C119.419 15.0789 120.358 14.8512 121.373 14.8512C125.238 14.8512 127.182 16.89 127.203 20.9677V29.2814H124.288V21.2943C124.288 19.9087 124.018 18.9041 123.478 18.2806C122.939 17.6571 122.107 17.3453 120.984 17.3453C119.667 17.3453 118.685 17.7115 118.037 18.4439C117.389 19.1763 117.065 20.1858 117.065 21.4725V29.2814H114.15V21.71C114.15 20.0473 113.891 18.9041 113.372 18.2806C112.854 17.6571 112.034 17.3453 110.911 17.3453C109.702 17.3453 108.735 17.7709 108.012 18.6221C107.288 19.4732 106.927 20.552 106.927 21.8585V29.2814H104.012V15.2075H106.732V17.4047H106.797C107.121 16.7119 107.763 16.1131 108.724 15.6084C109.685 15.1036 110.684 14.8512 111.721 14.8512Z"
                  fill="currentColor"
                  className="text-foreground"
                />
              </g>
              <defs>
                <clipPath id="clip0_120_893">
                  <rect width="204" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center space-x-8 ${
              isRTL ? "space-x-reverse" : ""
            }`}
          >
            <Link
              href="#services"
              className="text-foreground hover:text-primary transition-colors"
              {...navLinkSound}
            >
              {t.nav.services}
            </Link>
            <Link
              href="#works"
              className="text-foreground hover:text-primary transition-colors"
              {...navLinkSound}
            >
              {t.nav.works}
            </Link>
            <Link
              href="#skills"
              className="text-foreground hover:text-primary transition-colors"
              {...navLinkSound}
            >
              {t.nav.skills}
            </Link>
            <Link
              href="#testimonials"
              className="text-foreground hover:text-primary transition-colors"
              {...navLinkSound}
            >
              {t.nav.testimonials}
            </Link>
            <div
              className={`flex items-center space-x-4 ${
                isRTL ? "space-x-reverse" : ""
              }`}
            >
              <LanguageSwitcher />
              <SoundToggle />
              <SimpleThemeToggle />
              <Button {...buttonSound}>{t.nav.contact}</Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden flex items-center space-x-2 ${
              isRTL ? "space-x-reverse" : ""
            }`}
          >
            <LanguageSwitcher />
            <SoundToggle />
            <SimpleThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div
              className={`flex flex-col space-y-4 px-2 pt-2 pb-4 ${
                isRTL ? "items-end" : "items-start"
              }`}
            >
              <Link
                href="#services"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
                {...navLinkSound}
              >
                {t.nav.services}
              </Link>
              <Link
                href="#works"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
                {...navLinkSound}
              >
                {t.nav.works}
              </Link>
              <Link
                href="#skills"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
                {...navLinkSound}
              >
                {t.nav.skills}
              </Link>
              <Link
                href="#testimonials"
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
                {...navLinkSound}
              >
                {t.nav.testimonials}
              </Link>
              <Button className="w-full" {...buttonSound}>
                {t.nav.contact}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
