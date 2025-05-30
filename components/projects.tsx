"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { CardWrapper } from "./ui/card-wrapper";
import { useLanguage } from "../contexts/language-context";
import { useHoverSound } from "../hooks/use-hover-sound";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
  Eye,
} from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  images: string[];
  demoLabel: string;
  codeLabel: string;
  isRTL: boolean;
  demoUrl: string;
  codeUrl: string;
  technologies: string[];
  category: string;
}

function ProjectCard({
  title,
  description,
  images,
  demoLabel,
  codeLabel,
  isRTL,
  demoUrl,
  codeUrl,
  technologies,
  category,
}: ProjectProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const projectCardSound = useHoverSound({ soundType: "project" });
  const buttonSound = useHoverSound({ soundType: "click" });

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <CardWrapper
      className="group overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 bg-gradient-to-br from-card via-card to-card/80"
      {...projectCardSound}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-20 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
        {category}
      </div>

      {/* Image Carousel */}
      <div className="relative h-64 mb-6 overflow-hidden">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

        {/* Main Image */}
        <div className="relative w-full h-full">
          <Image
            src={images[currentImageIndex]}
            alt={`${title} - Image ${currentImageIndex + 1}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className={`absolute top-1/2 ${
                isRTL ? "right-2" : "left-2"
              } -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100`}
            >
              {isRTL ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
            <button
              onClick={nextImage}
              className={`absolute top-1/2 ${
                isRTL ? "left-2" : "right-2"
              } -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100`}
            >
              {isRTL ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </button>
          </>
        )}

        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}

        {/* Hover Overlay with Quick Actions */}
        <div
          className={`absolute inset-0 bg-black/60 z-15 flex items-center justify-center gap-4 transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              className="bg-primary/90 hover:bg-primary text-primary-foreground backdrop-blur-sm"
              {...buttonSound}
            >
              <Eye size={16} className="mr-2" />
              {demoLabel}
            </Button>
          </Link>
          <Link href={codeUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="sm"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              {...buttonSound}
            >
              <Github size={16} className="mr-2" />
              {codeLabel}
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-0">
        <h3
          className={`text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 ${
            isRTL ? "text-right" : ""
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-muted-foreground mb-4 leading-relaxed ${
            isRTL ? "text-right" : ""
          }`}
        >
          {description}
        </p>

        {/* Technologies */}
        <div
          className={`flex flex-wrap gap-2 mb-6 ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium hover:bg-primary/20 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className={`flex gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
          <Link
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button
              size="sm"
              className="w-full bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
              {...buttonSound}
            >
              <ExternalLink size={16} className="mr-2" />
              {demoLabel}
            </Button>
          </Link>
          <Link
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button
              size="sm"
              variant="outline"
              className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
              {...buttonSound}
            >
              <Github size={16} className="mr-2" />
              {codeLabel}
            </Button>
          </Link>
        </div>
      </div>
    </CardWrapper>
  );
}

export function Projects() {
  const { t, isRTL } = useLanguage();

  const projects = [
    {
      title: t.projects.dashStack.title,
      description: t.projects.dashStack.description,
      images: ["/image/dashboard.png"],
      demoUrl: "https://dash-stack-murex.vercel.app",
      codeUrl: "https://github.com/Mahdi-Devm/dash-stack",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      category: "Dashboard",
    },
    {
      title: t.projects.tarkhineh.title,
      description: t.projects.tarkhineh.description,
      images: ["/image/tarkhine.png"],
      demoUrl: "https://tarkhineh-f6ib.vercel.app",
      codeUrl: "https://github.com/Mahdi-Devm/tarkhineh",
      technologies: ["Next.js", "React", "CSS Modules", "TypeScript"],
      category: "Restaurant",
    },
    {
      title: t.projects.foodking.title,
      description: t.projects.foodking.description,
      images: ["/image/foodeking.png"],
      demoUrl: "https://github.com/MohamadHosein86-Dev/Foodking",
      codeUrl: "https://github.com/MohamadHosein86-Dev/Foodking",
      technologies: ["React", "Next.js", "TypeScript", "Express"],
      category: "E-commerce",
    },
    {
      title: t.projects.concepto.title,
      description: t.projects.concepto.description,
      images: ["/image/cospento.png"],
      demoUrl: "https://concepto.liara.run",
      codeUrl: "https://github.com/Mahdi-Devm/concepto",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "React",
        "Animation",
        "TypeScript",
      ],
      category: "Corporate",
    },
    {
      title: t.projects.cvBuilder.title,
      description: t.projects.cvBuilder.description,
      images: ["/image/UI-dashboard.png"],
      demoUrl: "https://github.com/Mahdi-Devm/UI-Dashboard",
      codeUrl: "https://github.com/Mahdi-Devm/UI-Dashboard",
      technologies: [
        "React",
        "Tailwind CSS",
        "Next.js",
        "TypeScript",
        "Chart.js",
      ],
      category: "Dashboard",
    },

    {
      title: t.projects.crashCoinCapital.title,
      description: t.projects.crashCoinCapital.description,
      images: ["/image/crashcoincapital.png"],
      demoUrl: "https://crashcoincapital.com",
      codeUrl: "#",
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      category: "Corporate",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="works">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 ${isRTL ? "text-right" : ""}`}>
          <div className="inline-block">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">
              {t.projects.featured || "Featured Projects"}
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {t.projects.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full" />
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              {t.projects.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                images={project.images}
                demoLabel={t.projects.demo}
                codeLabel={t.projects.code}
                isRTL={isRTL}
                demoUrl={project.demoUrl}
                codeUrl={project.codeUrl}
                technologies={project.technologies}
                category={project.category}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
