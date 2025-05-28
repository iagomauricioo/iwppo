"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, ArrowRight, Youtube, Mail, Phone, MapPin, ExternalLink, Loader2 } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { subscribeToNewsletter } from "@/src/app/actions/newsletter"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{
    type: "success" | "error"
    text: string
  } | null>(null)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setMessage({
        type: "error",
        text: "Por favor, insira seu email",
      })
      return
    }

    setIsLoading(true)
    setMessage(null)

    try {
      const formData = new FormData()
      formData.append("email", email)

      const result = await subscribeToNewsletter(formData)

      setMessage({
        type: result.success ? "success" : "error",
        text: result.message,
      })

      if (result.success) {
        setEmail("")
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Erro inesperado. Tente novamente.",
      })
    } finally {
      setIsLoading(false)
    }

    // Limpar mensagem após 5 segundos
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  const t = useTranslations("Footer")

  return (
    <footer className="bg-[#0A0F70] text-white pt-12 pb-6 rounded-t-lg" id="footer" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1 - Contato */}
          <div>
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/logo-iwppo.png"
                alt="IWPPO Logo"
                width={160}
                height={50}
                className="object-contain"
                loading="lazy"
              />
            </motion.div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-blue-300" />
                <a href="mailto:iwppo@cesmac.edu.br" className="text-sm hover:text-blue-300 transition-colors">
                  iwppo@cesmac.edu.br
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-blue-300" />
                <a href="tel:+558232155021" className="text-sm hover:text-blue-300 transition-colors">
                  (82) 3215-5021
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-blue-300" />
                <div>
                  <p className="text-sm">{t("local1")}</p>
                  <p className="text-sm">{t("local2")}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">{t("links_rapidos_titulo")}</h4>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#inicio"
                    className="text-sm hover:text-blue-300 transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {t("links_rapidos.0")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#programacao"
                    className="text-sm hover:text-blue-300 transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {t("links_rapidos.1")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#inscricao"
                    className="text-sm hover:text-blue-300 transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {t("links_rapidos.2")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contato"
                    className="text-sm hover:text-blue-300 transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    {t("links_rapidos.3")}
                  </Link>
                </li>
              </ul>
            </nav>

            <h4 className="text-lg font-semibold mt-6 mb-4 border-b border-blue-700 pb-2">
              {t("redes_sociais_titulo")}
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/projetooceanosdeplastico/"
                className="hover:text-blue-300 transition-colors p-2 bg-blue-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Instagram do IWPPO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@OceanosDePlastico."
                className="hover:text-blue-300 transition-colors p-2 bg-blue-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Canal do YouTube do IWPPO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 3 - Parceiros */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">{t("parceiros_titulo")}</h4>
            <ul className="space-y-3">
              {[
                {
                  name: "CESMAC",
                  url: "https://www.cesmac.edu.br/",
                },
                { name: "CNPq", url: "https://www.cnpq.br/" },
                {
                  name: "ONU",
                  url: "https://www.un.org/decade/",
                },
                { name: "CAPES", url: "https://www.capes.gov.br/" },
              ].map((partner, index) => (
                <li key={index}>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-blue-300 transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {partner.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 - Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Newsletter</h4>
            <p className="text-sm text-blue-200 mb-4">Receba atualizações sobre o projeto e eventos do IWPPO</p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div>
                <label htmlFor="newsletter-email" className="sr-only">
                  Email para newsletter
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu email"
                  className="w-full px-3 py-2 bg-blue-800 border border-blue-600 rounded text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                  disabled={isLoading}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-700 disabled:cursor-not-allowed px-4 py-2 rounded text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Inscrevendo...
                  </>
                ) : (
                  "Inscrever-se"
                )}
              </button>
            </form>

            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-3 p-2 rounded text-xs ${
                  message.type === "success"
                    ? "bg-green-800 text-green-200 border border-green-600"
                    : "bg-red-800 text-red-200 border border-red-600"
                }`}
                role="alert"
              >
                {message.text}
              </motion.div>
            )}
          </div>
        </div>

        {/* Copyright e Links Legais */}
        <div className="mt-12 pt-6 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200">
          <p>{t("direitos_reservados")}</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
            >
              {t("termos_de_uso")}
            </Link>
            <Link
              href="#"
              className="hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
            >
              {t("politica_de_privacidade")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
