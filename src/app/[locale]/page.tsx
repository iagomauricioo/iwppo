"use client"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ParticipantsSection from "@/components/participants-section"
import RegistrationSection from "@/components/registration-section"
import Footer from "@/components/footer"
import ComissaoOrganizadora from "@/components/comissao-organizadora"
import ProgramacaoSection from "@/components/programacao-section"
import LocationSection from "@/components/localizacao-section"
import ComiteCientifico from "@/components/comite-cientifico"
import ZeroResiduo from "@/components/zero-residuo"
import ParceirosEApoio from "@/components/parceiros-e-apoio"
import EixosTematicos from "@/components/eixos-tematicos"
import PalestrantesConfirmados from "@/components/palestrantes-confirmados"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />

      <main className="flex-1 bg-white">
        <ZeroResiduo />
        <AboutSection />
        <PalestrantesConfirmados />
        <LocationSection />
        <EixosTematicos />
        <ParticipantsSection />
        <ProgramacaoSection />
        <RegistrationSection />
        <ComissaoOrganizadora />
        <ComiteCientifico />
        <ParceirosEApoio />
      </main>

      <Footer />
    </div>
  )
}
