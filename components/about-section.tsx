"use client"

import { useMobile } from "@/hooks/use-mobile"

export default function AboutSection() {
  const isMobile = useMobile()

  return (
    <section className={`${isMobile ? "p-4 rounded-t-3xl -mt-4" : "py-16"} bg-white relative z-10`} id="sobre">
      <div className={`${isMobile ? "" : "container mx-auto"}`}>
        <h3 className={`text-[#0A0F70] font-bold ${isMobile ? "text-2xl mb-4" : "text-3xl mb-8 text-center"}`}>
          Sobre o Evento
        </h3>

        {isMobile ? (
          <>
            <p className="text-gray-700 mb-6">
              O II Workshop Internacional sobre a Poluição Plástica nos Oceanos (II IWPPO) é uma iniciativa do Projeto
              Oceanos de Plástico, aprovado pelo CNPq (Processo 4054449/2022-4).
            </p>

            <div className="bg-[#e6f7fb] p-5 rounded-lg mb-6">
              <h4 className="text-[#0A0F70] font-semibold mb-3">Endossado por:</h4>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <svg
                    className="h-5 w-5 mr-3 text-[#0077B6]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Comitê Executivo da ONU</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg
                    className="h-5 w-5 mr-3 text-[#0077B6]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Década dos Oceanos</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg
                    className="h-5 w-5 mr-3 text-[#0077B6]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>ODS 14 - Vida na Água</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-wrap items-center max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 p-6">
              <img src="/reuniao.png" alt="Reunião de pesquisadores" className="rounded-lg shadow-lg w-full" />
            </div>
            <div className="w-full md:w-1/2 p-6">
              <h4 className="text-[#0A0F70] font-bold text-2xl mb-4">II IWPPO 2025</h4>
              <p className="text-gray-700 mb-6">
                Uma iniciativa do Projeto Oceanos de Plástico, do Centro Universitário Cesmac, aprovado pelo CNPq
                (Processo 4054449/2022-4).
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <svg
                    className="h-5 w-5 mr-3 text-[#0077B6]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Endossado pelo Comitê Executivo da ONU</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg
                    className="h-5 w-5 mr-3 text-[#0077B6]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Alinhado com ODS 14 - Vida na Água</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <svg
                    className="h-5 w-5 mr-3 text-[#0077B6]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Cooperação Internacional</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
