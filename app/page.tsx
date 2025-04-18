"use client"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import TopicsSection from "@/components/topics-section"
import ParticipantsSection from "@/components/participants-section"
import RegistrationSection from "@/components/registration-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import SubscribeSection from "@/components/subscribe-section"
import ComissaoOrganizadora from "@/components/comissao-organizadora"
import ProgramacaoSection from "@/components/programacao-section"
import LocationSection from "@/components/localizacao-section"
import ComiteCientifico from "@/components/comite-cientifico"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />

      <main className="flex-1 bg-white">
        <AboutSection />
        <LocationSection />
        <TopicsSection />
        <ParticipantsSection />
        <ProgramacaoSection />
        <RegistrationSection />
        <ComissaoOrganizadora />
        <ComiteCientifico />
        <SubscribeSection />
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}
