"use client";

import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import { Orbitron } from "next/font/google";
import { useTranslations } from "next-intl";
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function HeroSection() {
  const t = useTranslations("HeroSection");
  return (
    <div className="relative" id="inicio">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-800/70 z-10"></div>
        <img
          src="/ocean-background.png"
          alt="Ocean background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20">
        {/* Header - Visível apenas em mobile */}
        <header className="md:hidden flex justify-between items-center p-4 bg-ocean-dark/80 mx-2 mt-2">
          <div className="flex items-center">
            <Image
              src="/logo-iwppo.png"
              alt="IWPPO Logo"
              width={180}
              height={60}
              className="h-16 object-contain"
            />
          </div>
        </header>

        {/* Hero Content */}
        <section className="px-6 pt-16 pb-8 md:pt-32 md:pb-24 text-white">
          <div className="container mx-auto">
            <h1
              className={`${orbitron.className} text-5xl md:text-7xl font-bold text-ocean-pale mb-2`}
            >
              IWPPO
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold leading-tight mb-4">
              {t("title")}
            </h2>
            <p className="text-lg md:text-xl mb-8">{t("subtitle")}</p>

            {/* Info Box - Estilo diferente para mobile/desktop */}
            <div className="bg-blue-700 p-4 rounded-lg mb-6 md:bg-transparent md:p-0 md:mb-8">
              <div className="flex items-center mb-3 md:mb-2">
                <Calendar className="h-5 w-5 mr-3 text-white md:text-blue-200" />
                <span className="text-white md:text-blue-100 text-base md:text-xl">
                  {t("date")}
                </span>
              </div>

              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-white md:text-blue-200" />
                <span className="text-white md:text-blue-100 text-base md:text-xl">
                  {t("location")}
                </span>
              </div>
            </div>

            <button className="w-full md:w-auto bg-ocean-bright hover:bg-ocean-light text-white font-bold py-4 px-8 rounded-full text-lg">
              {t("register_button")}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
