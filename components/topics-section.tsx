"use client"

import { Globe, FlaskRoundIcon as Flask, Recycle } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function TopicsSection() {
  const isMobile = useMobile()

  if (!isMobile) {
    return (
      <section className="py-16 bg-[#caf0f8]" id="programacao">
        <div className="container mx-auto">
          <h3 className="text-[#0A0F70] font-bold text-3xl mb-12 text-center">Tópicos Principais</h3>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-xs">
              <div className="flex flex-col items-center">
                <Flask className="h-12 w-12 text-[#0077B6] mb-4" />
                <h4 className="text-[#0A0F70] font-bold text-xl mb-2">Pesquisa e Inovação</h4>
                <p className="text-gray-700 text-center">
                  Desenvolvimento de soluções tecnológicas e políticas públicas inovadoras.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-xs">
              <div className="flex flex-col items-center">
                <Recycle className="h-12 w-12 text-[#0077B6] mb-4" />
                <h4 className="text-[#0A0F70] font-bold text-xl mb-2">Economia Circular</h4>
                <p className="text-gray-700 text-center">
                  Estratégias de monitoramento, rastreamento e reciclagem de resíduos plásticos.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-xs">
              <div className="flex flex-col items-center">
                <Globe className="h-12 w-12 text-[#0077B6] mb-4" />
                <h4 className="text-[#0A0F70] font-bold text-xl mb-2">Cooperação Global</h4>
                <p className="text-gray-700 text-center">
                  Diálogo interdisciplinar e troca de conhecimentos internacionais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <div className="bg-ocean-faint p-4 rounded-lg mb-6" id="programacao">
      <h3 className="text-ocean-dark font-bold text-xl mb-4">Objetivos</h3>

      <div className="space-y-4">
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-start">
            <div className="text-ocean-regular mr-3">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17 10C14.7909 10 13 11.7909 13 14C13 16.2091 14.7909 18 17 18C19.2091 18 21 16.2091 21 14C21 11.7909 19.2091 10 17 10Z"
                  fill="#0077B6"
                />
                <path
                  d="M7 18C4.79086 18 3 19.7909 3 22C3 24.2091 4.79086 26 7 26C9.20914 26 11 24.2091 11 22C11 19.7909 9.20914 18 7 18Z"
                  fill="#0077B6"
                />
                <path
                  d="M27 18C24.7909 18 23 19.7909 23 22C23 24.2091 24.7909 26 27 26C29.2091 26 31 24.2091 31 22C31 19.7909 29.2091 18 27 18Z"
                  fill="#0077B6"
                />
                <path d="M10.1 20.1L13.9 16.9" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" />
                <path d="M23.9 16.9L27.1 19.1" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h4 className="text-ocean-dark font-bold text-base">Diálogo Interdisciplinar</h4>
              <p className="text-gray-700 mt-1">Criar espaço para troca de conhecimentos e experiências.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-start">
            <div className="text-ocean-regular mr-3">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 7V13" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" />
                <path d="M21 11L17 13L13 11" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" />
                <path d="M11.5 17.5L7.5 19.5" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" />
                <path d="M22.5 17.5L26.5 19.5" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" />
                <path
                  d="M17 13C20.866 13 24 16.134 24 20C24 23.866 20.866 27 17 27C13.134 27 10 23.866 10 20C10 16.134 13.134 13 17 13Z"
                  fill="#0077B6"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-ocean-dark font-bold text-base">Políticas Inovadoras</h4>
              <p className="text-gray-700 mt-1">Promover políticas públicas e tecnologias para redução da poluição.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-start">
            <div className="text-ocean-regular mr-3">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.5 8.5L21.5 12.5" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" />
                <path d="M12.5 21.5L8.5 25.5" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" />
                <path d="M25.5 25.5L21.5 21.5" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" />
                <path d="M12.5 12.5L8.5 8.5" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" />
                <path d="M17 7V13" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" />
                <path d="M17 21V27" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" />
                <path d="M27 17H21" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" />
                <path d="M13 17H7" stroke="#0077B6" strokeWidth="2" strokeLinecap="round" />
                <circle cx="17" cy="17" r="4" fill="#0077B6" />
              </svg>
            </div>
            <div>
              <h4 className="text-ocean-dark font-bold text-base">Economia Circular</h4>
              <p className="text-gray-700 mt-1">Estratégias de monitoramento e reciclagem de resíduos plásticos.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
