"use client";

import type React from "react";
import {
  CodeLottieIcon,
  DesignLottieIcon,
  WebLottieIcon,
} from "./lottie-animations";
import { CardWrapper } from "./ui/card-wrapper";
import { useLanguage } from "../contexts/language-context";
import { useHoverSound } from "../hooks/use-hover-sound";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isRTL: boolean;
}

function ServiceCard({ title, description, icon, isRTL }: ServiceProps) {
  const serviceSound = useHoverSound({ soundType: "hover" });

  return (
    <CardWrapper
      className="hover:border-primary/40 transition-colors"
      {...serviceSound}
    >
      <div className={`text-primary mb-4 ${isRTL ? "text-right" : ""}`}>
        {icon}
      </div>
      <h3 className={`text-lg font-semibold mb-2 ${isRTL ? "text-right" : ""}`}>
        {title}
      </h3>
      <p className={`text-muted-foreground ${isRTL ? "text-right" : ""}`}>
        {description}
      </p>
    </CardWrapper>
  );
}

export function Services() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-16" id="services">
      <div className={`text-center mb-12 ${isRTL ? "text-right" : ""}`}>
        <h2 className="text-3xl font-bold mb-4">{t.services.title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {t.services.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard
          icon={<CodeLottieIcon size={32} />}
          title={t.services.websiteDesign.title}
          description={t.services.websiteDesign.description}
          isRTL={isRTL}
        />
        <ServiceCard
          icon={<DesignLottieIcon size={32} />}
          title={t.services.uiuxDesign.title}
          description={t.services.uiuxDesign.description}
          isRTL={isRTL}
        />
        <ServiceCard
          icon={<WebLottieIcon size={32} />}
          title={t.services.webDevelopment.title}
          description={t.services.webDevelopment.description}
          isRTL={isRTL}
        />
      </div>
    </section>
  );
}
