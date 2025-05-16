"use client"

import { useState, useEffect } from "react"
import { Calendar, MapPin, ChevronDown, Clock, Send, CheckCircle, Award } from "lucide-react"
import Image from "next/image"
import { Orbitron } from "next/font/google"
import { useTranslations } from "next-intl"
import SeloSustentavel from "./selo-atitude-sustentavel"
import { motion } from "framer-motion"
import Link from "next/link"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
})

export default function HeroSection() {
  const t = useTranslations("HeroSection")
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Data do evento (ajuste conforme necessário)
  const eventDate = new Date("2025-09-17T09:00:00")

  // Atualizar contador regressivo
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Animação para o scroll suave
  const scrollToContent = () => {
    const nextSection = document.getElementById("sobre") || document.getElementById("topicos-principais")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Datas importantes
  const datasImportantes = [
    {
      data: "31 de julho",
      titulo: "Submissão de Artigos",
      icone: <Send className="h-4 w-4" />,
    },
    {
      data: "11 de agosto",
      titulo: "Comunicação de Aceite",
      icone: <CheckCircle className="h-4 w-4" />,
    },
    {
      data: "08 de setembro",
      titulo: "Envio Final",
      icone: <Clock className="h-4 w-4" />,
    },
    {
      data: "17-19 de setembro",
      titulo: "Realização do Evento",
      icone: <Award className="h-4 w-4" />,
    },
  ]

  return (
    <div className="relative min-h-screen flex flex-col" id="inicio">
      {/* Background com Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-800/85 to-blue-700/80 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
        <motion.div
          className="w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/ocean-background.png"
            alt="Ocean background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </motion.div>
      </div>

      <div className="relative z-20 flex-1 flex flex-col">
        {/* Header - Visível apenas em mobile */}
        <header className="md:hidden flex justify-between items-center p-4 bg-blue-900/80 backdrop-blur-sm mx-2 mt-2 rounded-lg">
          <div className="flex items-center">
            <Image src="/logo-iwppo.png" alt="IWPPO Logo" width={180} height={60} className="h-16 object-contain" />
          </div>
        </header>

        {/* Hero Content */}
        <section className="px-6 pt-16 pb-8 md:pt-24 md:pb-16 text-white flex-1 flex flex-col justify-center">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1
                    className={`${orbitron.className} text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-50 mb-2`}
                  >
                    IWPPO
                  </h1>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100px" }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-1 bg-blue-400 mb-6"
                  />
                  <h2 className="text-2xl md:text-4xl font-semibold leading-tight mb-4">{t("title")}</h2>
                  <p className="text-lg md:text-xl mb-8 text-blue-100">{t("subtitle")}</p>

                  {/* Info Box com ícones e estilo melhorado */}
                  <div className="bg-blue-800/50 backdrop-blur-sm p-5 rounded-xl mb-8 border border-blue-700/50 shadow-lg">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-6 w-6 mr-3 text-blue-300" />
                      <span className="text-blue-50 text-base md:text-xl">{t("date")}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-6 w-6 mr-3 text-blue-300" />
                      <span className="text-blue-50 text-base md:text-xl">{t("location")}</span>
                    </div>
                  </div>

                  {/* Botões de ação */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 sm:flex-initial"
                    >
                      <Link
                        href="#inscricao"
                        className="block w-full text-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all duration-300"
                      >
                        {t("register_button")}
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 sm:flex-initial"
                    >
                      <Link
                        href="#programacao"
                        className="block w-full text-center bg-transparent border-2 border-blue-400 hover:border-blue-300 text-blue-100 hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
                      >
                        <span className="flex items-center justify-center">
                          <Calendar className="mr-2 h-5 w-5" />
                          Ver Programação
                        </span>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div className="md:col-span-2 flex flex-col items-center">
                {/* Contador regressivo */}
                <motion.div
                  className="w-full bg-blue-900/60 backdrop-blur-sm rounded-xl p-6 border border-blue-800/50 shadow-lg mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h3 className="text-center text-blue-200 text-lg mb-4">Contagem Regressiva</h3>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="bg-blue-800/70 rounded-lg p-3">
                      <div className="text-3xl font-bold text-white">{timeLeft.days}</div>
                      <div className="text-xs text-blue-300">Dias</div>
                    </div>
                    <div className="bg-blue-800/70 rounded-lg p-3">
                      <div className="text-3xl font-bold text-white">{timeLeft.hours}</div>
                      <div className="text-xs text-blue-300">Horas</div>
                    </div>
                    <div className="bg-blue-800/70 rounded-lg p-3">
                      <div className="text-3xl font-bold text-white">{timeLeft.minutes}</div>
                      <div className="text-xs text-blue-300">Min</div>
                    </div>
                    <div className="bg-blue-800/70 rounded-lg p-3">
                      <div className="text-3xl font-bold text-white">{timeLeft.seconds}</div>
                      <div className="text-xs text-blue-300">Seg</div>
                    </div>
                  </div>
                </motion.div>

                {/* Datas Importantes */}
                <motion.div
                  className="w-full bg-blue-900/60 backdrop-blur-sm rounded-xl p-6 border border-blue-800/50 shadow-lg mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <h3 className="text-center text-blue-200 text-lg mb-4">Datas Importantes</h3>
                  <div className="space-y-3">
                    {datasImportantes.map((data, index) => (
                      <div key={index} className="flex items-center bg-blue-800/70 rounded-lg p-3">
                        <div className="bg-blue-700/70 p-2 rounded-full mr-3">{data.icone}</div>
                        <div>
                          <div className="text-sm font-medium text-blue-200">{data.titulo}</div>
                          <div className="text-white font-bold">{data.data}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Selo Sustentável */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="hidden md:block"
                >
                  <SeloSustentavel size="lg" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <button
            onClick={scrollToContent}
            className="text-blue-200 hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Rolar para baixo"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Saiba mais</span>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
                <ChevronDown size={24} />
              </motion.div>
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  )
}
