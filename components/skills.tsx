"use client";

import { useState, useEffect, useRef } from "react";
import { CardWrapper } from "./ui/card-wrapper";
import { useLanguage } from "../contexts/language-context";
import { useHoverSound } from "../hooks/use-hover-sound";

interface SkillProps {
  name: string;
  percentage: number;
  isRTL: boolean;
  icon: string;
  color: string;
  delay: number;
  isVisible: boolean;
}

function CircularSkill({
  name,
  percentage,
  isRTL,
  icon,
  color,
  delay,
  isVisible,
}: SkillProps) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const skillSound = useHoverSound({ soundType: "skill" });

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setAnimatedPercentage((prev) => {
            if (prev >= percentage) {
              clearInterval(interval);
              return percentage;
            }
            return prev + 1;
          });
        }, 20);
        return () => clearInterval(interval);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);

  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset =
    circumference - (animatedPercentage / 100) * circumference;

  return (
    <div
      className={`group relative flex flex-col items-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-background/50 to-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 min-h-[200px] sm:min-h-[220px] ${
        isVisible ? "animate-in slide-in-from-bottom-8 fade-in" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={(e) => {
        setIsHovered(true);
        skillSound.onMouseEnter();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{
          background: `linear-gradient(135deg, ${color}20, ${color}10)`,
        }}
      />

      {/* Circular Progress */}
      <div className="relative mb-3 sm:mb-4">
        <svg
          className="transform -rotate-90 w-20 h-20 sm:w-24 sm:h-24"
          viewBox="0 0 100 100"
        >
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="6"
            fill="transparent"
            className="text-muted/20"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={color}
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out drop-shadow-lg"
            style={{
              filter: `drop-shadow(0 0 8px ${color}40)`,
            }}
          />
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div
            className="text-xl sm:text-2xl mb-1 transition-transform duration-300 group-hover:scale-110 leading-none flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10"
            style={{
              filter: `drop-shadow(0 0 4px ${color}60)`,
              fontFamily:
                'system-ui, -apple-system, "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif',
            }}
          >
            {icon}
          </div>
          <span
            className="text-base sm:text-lg font-bold transition-all duration-300 leading-none"
            style={{
              color: color,
              textShadow: `0 0 10px ${color}40`,
            }}
          >
            {animatedPercentage}%
          </span>
        </div>
      </div>

      {/* Skill name */}
      <h3
        className={`text-sm sm:text-lg font-semibold text-center transition-all duration-300 group-hover:text-primary leading-tight px-2 ${
          isRTL ? "text-right" : ""
        }`}
      >
        {name}
      </h3>

      {/* Animated particles */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-ping"
              style={{
                backgroundColor: color,
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 200}ms`,
                animationDuration: "2s",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Skills() {
  const { t, isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    {
      name: "React",
      percentage: 95,
      icon: "⚛️",
      color: "#61DAFB",
      delay: 0,
    },
    {
      name: "Next.js",
      percentage: 92,
      icon: "▲",
      color: "#ffffff",
      delay: 100,
    },
    {
      name: "TypeScript",
      percentage: 88,
      icon: "🔷",
      color: "#3178C6",
      delay: 200,
    },
    {
      name: "JavaScript",
      percentage: 93,
      icon: "🟨",
      color: "#F7DF1E",
      delay: 300,
    },
    {
      name: "HTML",
      percentage: 98,
      icon: "🌐",
      color: "#E34F26",
      delay: 400,
    },
    {
      name: "CSS",
      percentage: 95,
      icon: "🎨",
      color: "#1572B6",
      delay: 500,
    },
    {
      name: "Tailwind CSS",
      percentage: 90,
      icon: "💨",
      color: "#06B6D4",
      delay: 600,
    },
    {
      name: "Bootstrap",
      percentage: 62,
      icon: "🅱️",
      color: "#7952B3",
      delay: 700,
    },
    {
      name: "shadcn/ui",
      percentage: 60,
      icon: "🎭",
      color: "#dfdfdf",
      delay: 800,
    },
    {
      name: "React Query",
      percentage: 85,
      icon: "🔄",
      color: "#FF4154",
      delay: 900,
    },
    {
      name: "Redux",
      percentage: 87,
      icon: "🔮",
      color: "#764ABC",
      delay: 1000,
    },
    {
      name: "Git / GitLab",
      percentage: 90,
      icon: "🌿",
      color: "#F05032",
      delay: 1100,
    },
    {
      name: "React Hook Form",
      percentage: 85,
      icon: "📝",
      color: "#EC5990",
      delay: 1200,
    },
    {
      name: "MUI",
      percentage: 82,
      icon: "🎯",
      color: "#007FFF",
      delay: 1300,
    },
    {
      name: "Sass",
      percentage: 88,
      icon: "💎",
      color: "#CC6699",
      delay: 1400,
    },
    {
      name: "Next Auth",
      percentage: 80,
      icon: "🔐",
      color: "#856868",
      delay: 1500,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 relative overflow-hidden"
      id="skills"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 ${isRTL ? "text-right" : ""}`}
        >
          <div className="inline-block">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent ${
                isVisible
                  ? "animate-in slide-in-from-top-8 fade-in"
                  : "opacity-0"
              }`}
            >
              {t.skills.title}
            </h2>
            <div
              className={`h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full ${
                isVisible
                  ? "animate-in slide-in-from-left-full fade-in"
                  : "opacity-0"
              }`}
              style={{ animationDelay: "200ms" }}
            />
          </div>
          <p
            className={`text-muted-foreground max-w-3xl mx-auto text-base sm:text-lg mt-4 sm:mt-6 px-4 ${
              isVisible
                ? "animate-in slide-in-from-bottom-4 fade-in"
                : "opacity-0"
            }`}
            style={{ animationDelay: "400ms" }}
          >
            {t.skills.subtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <CircularSkill
              key={index}
              name={skill.name}
              percentage={skill.percentage}
              icon={skill.icon}
              color={skill.color}
              delay={skill.delay}
              isRTL={isRTL}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Additional decorative elements */}
        <div
          className={`mt-12 sm:mt-16 text-center ${
            isVisible
              ? "animate-in slide-in-from-bottom-8 fade-in"
              : "opacity-0"
          }`}
          style={{ animationDelay: "800ms" }}
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-primary font-medium text-lg sm:text-xl">
              🚀
            </span>
            <span className="text-xs sm:text-sm font-medium">
              Always learning and growing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
