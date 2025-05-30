"use client";

import { Button } from "@/components/ui/button";
import { Stats } from "@/components/stats";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Testimonials } from "@/components/testimonials";
import { SoundFileGenerator } from "@/components/sound-file-generator";
import { SoundIndicator } from "@/components/sound-indicator";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Phone, Mail, MapPin, Copy, Download } from "lucide-react";
import {
  PhoneLottieIcon,
  EmailLottieIcon,
  LocationLottieIcon,
} from "@/components/lottie-animations";
import { useLanguage } from "@/contexts/language-context";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function Home() {
  const { t, isRTL } = useLanguage();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const { toast } = useToast();

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/pdf/MyResume-679[www.cvbuilder.me].pdf";
    link.download = "Mahdi-Baghri-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: isRTL ? "رزومه دانلود شد" : "Resume Downloaded",
      description: isRTL
        ? "فایل رزومه با موفقیت دانلود شد"
        : "Resume file has been downloaded successfully",
    });
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: isRTL ? "کپی شد" : "Copied",
      description: isRTL ? `${type} کپی شد` : `${type} copied to clipboard`,
    });
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="hero-section container mx-auto px-4 pt-32 pb-20">
        <div className="hero-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero-text hero-content animate-slide-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              {t.hero.name}
              <span className="block text-primary mt-2">{t.hero.title}</span>
            </h1>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              {t.hero.description}
            </p>
            <div
              className={`flex gap-4 btn-group ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <Dialog
                open={isContactModalOpen}
                onOpenChange={setIsContactModalOpen}
              >
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-background transition-all duration-300"
                  >
                    {t.hero.contactMe}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className={isRTL ? "text-right" : ""}>
                      {isRTL ? "اطلاعات تماس" : "Contact Information"}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div
                      className={`flex items-center gap-3 p-3 rounded-lg bg-muted/50 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <Phone className="text-primary" size={20} />
                      <div className={`flex-1 ${isRTL ? "text-right" : ""}`}>
                        <p className="font-medium">{t.contact.phone}</p>
                        <p className="text-sm text-muted-foreground">
                          (+98) 936 853 5209
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          copyToClipboard(
                            "(+98) 936 853 5209",
                            isRTL ? "شماره تماس" : "Phone number"
                          )
                        }
                      >
                        <Copy size={16} />
                      </Button>
                    </div>

                    <div
                      className={`flex items-center gap-3 p-3 rounded-lg bg-muted/50 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <Mail className="text-primary" size={20} />
                      <div className={`flex-1 ${isRTL ? "text-right" : ""}`}>
                        <p className="font-medium">{t.contact.email}</p>
                        <p className="text-sm text-muted-foreground">
                          mahdibaghrichanel@gmail.com
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          copyToClipboard(
                            "mahdibaghrichanel@gmail.com",
                            isRTL ? "ایمیل" : "Email"
                          )
                        }
                      >
                        <Copy size={16} />
                      </Button>
                    </div>

                    <div
                      className={`flex items-center gap-3 p-3 rounded-lg bg-muted/50 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <MapPin className="text-primary" size={20} />
                      <div className={`flex-1 ${isRTL ? "text-right" : ""}`}>
                        <p className="font-medium">{t.contact.address}</p>
                        <p className="text-sm text-muted-foreground">
                          Isfahan, Iran
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          copyToClipboard(
                            "Isfahan, Iran",
                            isRTL ? "آدرس" : "Address"
                          )
                        }
                      >
                        <Copy size={16} />
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={handleDownloadCV}
              >
                <Download className={`h-4 w-4 ${isRTL ? "ml-2" : "mr-2"}`} />
                {t.hero.downloadCV}
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="hero-image-container relative hero-image animate-slide-in">
            <div className="relative aspect-square max-w-[400px] mx-auto">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-2xl blur-xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-accent/20 via-transparent to-primary/10 rounded-2xl blur-lg transform -rotate-3"></div>

              {/* Main image */}
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/imageprofile/193733045.jpg"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="rounded-2xl object-cover shadow-2xl hover:scale-105 transition-transform duration-500 w-full h-full"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
                  }}
                />
              </div>

              {/* Floating elements */}
              <div
                className={`absolute -top-4 ${
                  isRTL ? "-left-4" : "-right-4"
                } w-20 h-20 bg-primary/10 rounded-full blur-md animate-pulse`}
              ></div>
              <div
                className={`absolute -bottom-6 ${
                  isRTL ? "-right-6" : "-left-6"
                } w-16 h-16 bg-secondary/10 rounded-full blur-sm animate-bounce`}
              ></div>
            </div>
          </div>
        </div>

        <Stats />
      </section>

      {/* Other Sections */}
      <div className="container mx-auto px-4">
        <Services />
        <Projects />
        <Skills />
        <Testimonials />

        {/* Contact Section */}
        <section className="py-16" id="contact">
          <div className="container mx-auto px-4">
            <div className={`text-center mb-12 ${isRTL ? "text-right" : ""}`}>
              <h2 className="text-3xl font-bold mb-4">{t.contact.title}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t.contact.subtitle}
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="space-y-6">
                  <div
                    className={`contact-item flex items-center gap-4 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center lottie-container hover:bg-primary/30 transition-all duration-300">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div className={isRTL ? "text-right" : ""}>
                      <h3 className="font-semibold">{t.contact.phone}</h3>
                      <p className="text-muted-foreground">
                        (+98) 936 853 5209
                      </p>
                    </div>
                  </div>
                  <div
                    className={`contact-item flex items-center gap-4 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center lottie-container hover:bg-primary/30 transition-all duration-300">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div className={isRTL ? "text-right" : ""}>
                      <h3 className="font-semibold">{t.contact.email}</h3>
                      <p className="text-muted-foreground">
                        mahdibaghrichanel@gmail.com
                      </p>
                    </div>
                  </div>
                  <div
                    className={`contact-item flex items-center gap-4 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center lottie-container hover:bg-primary/30 transition-all duration-300">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div className={isRTL ? "text-right" : ""}>
                      <h3 className="font-semibold">{t.contact.address}</h3>
                      <p className="text-muted-foreground">Isfahan, Iran</p>
                    </div>
                  </div>
                </div>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder={t.contact.firstName}
                    className="bg-card border border-border rounded-lg p-3 w-full focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground"
                    dir={isRTL ? "rtl" : "ltr"}
                  />
                  <input
                    type="text"
                    placeholder={t.contact.lastName}
                    className="bg-card border border-border rounded-lg p-3 w-full focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground"
                    dir={isRTL ? "rtl" : "ltr"}
                  />
                </div>
                <input
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  className="bg-card border border-border rounded-lg p-3 w-full focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground"
                  dir={isRTL ? "rtl" : "ltr"}
                />
                <textarea
                  placeholder={t.contact.message}
                  rows={6}
                  className="bg-card border border-border rounded-lg p-3 w-full focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground"
                  dir={isRTL ? "rtl" : "ltr"}
                />
                <Button size="lg" className="w-full">
                  {t.contact.sendMessage}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-card mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className={isRTL ? "text-right" : ""}>
              <h3 className="text-xl font-bold mb-4">Mahdi Baghri</h3>
              <p className="text-muted-foreground">{t.footer.description}</p>
            </div>
            <div className={isRTL ? "text-right" : ""}>
              <h4 className="font-semibold mb-4">{t.footer.company}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>{t.footer.about}</li>
                <li>{t.footer.blog}</li>
                <li>{t.nav.contact}</li>
              </ul>
            </div>
            <div className={isRTL ? "text-right" : ""}>
              <h4 className="font-semibold mb-4">{t.footer.services}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>{t.footer.webDevelopment}</li>
                <li>{t.footer.uiuxDesign}</li>
                <li>{t.footer.mobileDevelopment}</li>
              </ul>
            </div>
            <div className={isRTL ? "text-right" : ""}>
              <h4 className="font-semibold mb-4">{t.footer.contactUs}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>mahdibaghrichanel@gmail.com</li>
                <li>(+98) 936 853 5209</li>
                <li>Isfahan, Iran</li>
              </ul>
            </div>
          </div>
          <div
            className={`border-t border-border mt-12 pt-8 text-center text-muted-foreground ${
              isRTL ? "text-right" : ""
            }`}
          >
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </footer>

      {/* Sound File Generator - Fixed position */}
      <SoundFileGenerator />

      {/* Sound Indicator */}
      <SoundIndicator />
    </main>
  );
}
