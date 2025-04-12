"use client"

import { Send } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function ContactForm() {
  const isMobile = useMobile()

  if (!isMobile) {
    return null // No contact form in desktop view
  }

  return (
    <div className="bg-blue-700 -mx-4 p-10 text-white" id="contato">
      <h3 className="font-bold text-lg mb-4">Entre em Contato</h3>

      <form className="space-y-3">
        <div>
          <label htmlFor="name" className="block text-sm mb-1">
            Nome
          </label>
          <input type="text" id="name" className="w-full p-2 rounded text-gray-800" placeholder="Seu nome" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 rounded text-gray-800"
            placeholder="seuemail@email.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-1">
            Mensagem
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full p-2 rounded text-gray-800"
            placeholder="Sua mensagem"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-ocean-bright hover:bg-ocean-light text-white font-bold py-3 px-4 rounded-full flex items-center justify-center"
        >
          <Send className="h-4 w-4 mr-2" />
          Enviar Mensagem
        </button>
      </form>
    </div>
  )
}
