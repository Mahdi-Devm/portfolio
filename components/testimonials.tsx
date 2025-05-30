"use client";

import Image from "next/image";
import { CardWrapper } from "./ui/card-wrapper";
import { useLanguage } from "../contexts/language-context";
import { useHoverSound } from "../hooks/use-hover-sound";
import { useState, useEffect } from "react";

interface TestimonialProps {
  text: string;
  name: string;
  position: string;
  avatar: string;
  isRTL: boolean;
  rating: number;
}

function TestimonialCard({
  text,
  name,
  position,
  avatar,
  isRTL,
  rating,
}: TestimonialProps) {
  const testimonialSound = useHoverSound({ soundType: "hover" });

  return (
    <CardWrapper
      className="min-w-[350px] mx-4 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm"
      {...testimonialSound}
    >
      <div className={`mb-6 ${isRTL ? "text-right" : ""}`}>
        {/* Rating Stars */}
        <div className={`flex mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-lg ${
                i < rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ⭐
            </span>
          ))}
        </div>
        <p className="text-muted-foreground italic text-lg leading-relaxed">
          "{text}"
        </p>
      </div>
      <div
        className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}
      >
        <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20">
          <Image src={avatar} alt={name} fill className="object-cover" />
        </div>
        <div className={isRTL ? "text-right" : ""}>
          <h4 className="font-bold text-lg text-primary">{name}</h4>
          <p className="text-sm text-muted-foreground font-medium">
            {position}
          </p>
        </div>
      </div>
    </CardWrapper>
  );
}

export function Testimonials() {
  const { t, isRTL } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      text: t.testimonials.client1.text,
      name: t.testimonials.client1.name,
      position: t.testimonials.client1.position,
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      text: t.testimonials.client2.text,
      name: t.testimonials.client2.name,
      position: t.testimonials.client2.position,
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      text: t.testimonials.client3.text,
      name: t.testimonials.client3.name,
      position: t.testimonials.client3.position,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      text: t.testimonials.client4.text,
      name: t.testimonials.client4.name,
      position: t.testimonials.client4.position,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
    {
      text: t.testimonials.client5.text,
      name: t.testimonials.client5.name,
      position: t.testimonials.client5.position,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
    },
  ];

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 relative overflow-hidden" id="testimonials">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isRTL ? "text-right" : ""}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            {t.testimonials.title}
          </h2>
          <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto w-32 mb-6" />
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Animated Slider */}
        <div className="relative">
          <div
            className={`flex testimonials-slider ${isPaused ? "paused" : ""}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                name={testimonial.name}
                position={testimonial.position}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
                isRTL={isRTL}
              />
            ))}
          </div>
        </div>

        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
