"use client"

import { Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"
import { Orbitron } from "next/font/google"

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '700', '900'] })


export default function HeroSection() {
  const isMobile = useMobile()

  return (
    
    <div className="relative" id="inicio">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-800/70 z-10"></div>
        <img src="/ocean-background.png" alt="Ocean background" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-20">
        {/* Mobile Header - Only show on mobile */}
        {isMobile && (
          <header className="flex justify-between items-center p-4 bg-ocean-dark/80 rounded-lg mx-2 mt-2">
            <div className="flex items-center">
              <Image src="/logo-iwppo.png" alt="IWPPO Logo" width={180} height={60} className="h-16 object-contain" />
            </div>
          </header>
        )}

        {/* Hero Section */}
        <section className={`px-6 ${isMobile ? "pt-16 pb-8" : "pt-32 pb-24"} text-white`}>
          <div className={`${isMobile ? "" : "container mx-auto"}`}>
            <h1 className={`${orbitron.className} ${isMobile ? "text-5xl" : "text-7xl"} font-bold text-ocean-pale mb-2`}>IWPPO</h1>
            <h2 className={`${isMobile ? "text-2xl" : "text-4xl"} font-semibold leading-tight mb-4`}>
              II Workshop Internacional sobre a<br />
              Poluição Plástica nos Oceanos
            </h2>
            <p className={`${isMobile ? "text-lg" : "text-xl"} mb-8`}>Transformando Pesquisas em Soluções</p>

            {isMobile ? (
              <div className="bg-blue-700 p-4 rounded-lg mb-6">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 mr-3 text-white" />
                  <span className="text-white text-base">10-12 Setembro, 2025</span>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-white" />
                  <span className="text-white text-base">Centro Universitário Cesmac</span>
                </div>
              </div>
            ) : (
              <div className="mb-8">
                <p className="text-xl mb-8">10-12 de Setembro, 2025</p>
              </div>
            )}

            <button
              className={`${isMobile ? "w-full" : "px-8"} bg-ocean-bright hover:bg-ocean-light text-white font-bold py-4 rounded-full text-lg`}
            >
              Inscreva-se Agora
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
