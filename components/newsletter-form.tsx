"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Loader2, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { subscribeToNewsletter } from "@/src/app/actions/newsletter"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<{
    type: "success" | "error"
    text: string
  } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      setMessage({
        type: "error",
        text: "Por favor, insira seu email",
      })
      return
    }

    startTransition(async () => {
      try {
        console.log("🚀 Iniciando envio do formulário...")

        const formData = new FormData()
        formData.append("email", email.trim())

        const result = await subscribeToNewsletter(formData)

        console.log("📋 Resultado do Server Action:", result)

        setMessage({
          type: result.success ? "success" : "error",
          text: result.message,
        })

        if (result.success) {
          setEmail("")
        }
      } catch (error) {
        console.error("💥 Erro no cliente:", error)
        setMessage({
          type: "error",
          text: "Erro inesperado. Tente novamente.",
        })
      }
    })

    // Limpar mensagem após 5 segundos
    setTimeout(() => {
      setMessage(null)
    }, 5000)
  }

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold border-b border-blue-700 pb-2">Newsletter</h4>
      <p className="text-sm text-blue-200">Receba atualizações sobre o projeto e eventos do IWPPO</p>

      <form onSubmit={handleSubmit} className="space-y-3">
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
            disabled={isPending}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-700 disabled:cursor-not-allowed px-4 py-2 rounded text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center justify-center"
        >
          {isPending ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Inscrevendo...
            </>
          ) : (
            <>
              <Mail className="h-4 w-4 mr-2" />
              Inscrever-se
            </>
          )}
        </button>
      </form>

      {message && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-3 rounded text-sm ${
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
  )
}
