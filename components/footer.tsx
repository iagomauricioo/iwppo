"use client"

import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"

export default function Footer() {
  const isMobile = useMobile()

  return (
    <footer className={`bg-[#0A0F70] text-white ${isMobile ? "p-5 pb-32" : "py-12"}`}>
      {isMobile ? (
        <>
          <div className="flex items-center mb-3">
            <Image src="/logo-iwppo.png" alt="IWPPO Logo" width={120} height={40} className="h-8 object-contain" />
          </div>

          <p className="text-xs mb-4">II Workshop Internacional sobre a Poluição Plástica nos Oceanos</p>

          <div className="flex justify-between mb-4">
            <div>
              <h4 className="text-sm font-semibold mb-2">Links</h4>
              <ul className="text-xs space-y-1">
                <li>
                  <a href="#sobre" className="hover:text-ocean-pale">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#programacao" className="hover:text-ocean-pale">
                    Objetivos
                  </a>
                </li>
                <li>
                  <a href="#comissao" className="hover:text-ocean-pale">
                    Participantes
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-ocean-pale">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Redes Sociais</h4>
              <div className="flex space-x-3">
                <a href="#" className="hover:text-ocean-pale">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-ocean-pale">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-ocean-pale">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <p className="text-sm mb-2">Email: contato@iwppo.com</p>
              <p className="text-sm">Tel: (XX) XXXX-XXXX</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-blue-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Parceiros</h4>
              <ul className="text-sm space-y-2">
                <li>Centro Universitário Cesmac</li>
                <li>CNPq</li>
                <li>ONU Década dos Oceanos</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <div className="flex">
                <input type="email" placeholder="Seu email" className="p-2 rounded-l text-gray-800 w-full" />
                <button className="bg-[#0077B6] p-2 rounded-r">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`text-xs text-center ${isMobile ? "border-t border-blue-800 pt-4" : "mt-12 pt-6 border-t border-blue-800"}`}
      >
        © 2025 II IWPPO. Todos os direitos reservados.
      </div>
    </footer>
  )
}
