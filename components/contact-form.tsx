"use client"

import { Send } from "lucide-react"

export default function ContactForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-800 px-4">
      <div className="bg-blue-700 p-10 text-white flex flex-col w-full max-w-2xl rounded-lg" id="contato">
        <h3 className="font-bold text-lg mb-4 text-center">Entre em Contato</h3>

        <form className="space-y-4 flex flex-col items-center">
          <div className="w-full">
            <label htmlFor="name" className="block text-sm mb-1">
              Nome
            </label>
            <input type="text" id="name" className="w-full p-2 rounded text-gray-800" placeholder="Seu nome" />
          </div>

          <div className="w-full">
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

          <div className="w-full">
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
            className="w-[90%] md:w-full bg-ocean-bright hover:bg-ocean-light text-white font-bold py-3 px-4 rounded-full flex items-center justify-center"
          >
            <Send className="h-4 w-4 mr-2" />
            Enviar Mensagem
          </button>
        </form>
      </div>
    </div>
  )
}
