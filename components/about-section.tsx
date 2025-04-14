"use client";

import { Handshake, SearchCheck, Users, Globe, Check } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      icon: <Check className="h-5 w-5 mr-3 text-[#0077B6]" />,
      text: "Endossado pelo Comitê Executivo da ONU",
    },
    {
      icon: <Handshake className="h-5 w-5 mr-3 text-[#0077B6]" />,
      text: "Cooperação Internacional",
    },
    {
      icon: <SearchCheck className="h-5 w-5 mr-3 text-[#0077B6]" />,
      text: "Alinhado com ODS 14 - Vida na Água",
    },
    {
      icon: <Users className="h-5 w-5 mr-3 text-[#0077B6]" />,
      text: "500+ participantes",
    },
    {
      icon: <Globe className="h-5 w-5 mr-3 text-[#0077B6]" />,
      text: "30+ países",
    },
  ];

  return (
    <main className="bg-blue-800">
      <section
        className="py-8 md:py-16 px-4 bg-white relative z-10 rounded-t-lg"
        id="sobre"
      >
        <div className="container mx-auto rounded-lg">
          <h3 className="text-[#0A0F70] font-bold text-2xl md:text-3xl mb-6 md:mb-8 text-center">
            Sobre o Evento
          </h3>

          {/* Primeira seção - imagem à esquerda/texto à direita */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-6xl mx-auto mb-12 md:mb-16">
            <div className="w-full md:w-1/2">
              <h4 className="text-[#0A0F70] font-bold text-xl md:text-2xl mb-4">
                II IWPPO 2025
              </h4>
              <p className="text-gray-700 mb-6">
                O IWPPO nasceu da necessidade de discutir e encontrar soluções
                para um dos maiores desafios ambientais da atualidade: a
                poluição plástica nos oceanos. Com origem no CEMEIA e apoio da
                CAPES (PAEP), nosso workshop reúne especialistas internacionais
                em uma abordagem interdisciplinar.
              </p>
              <div className="space-y-3">
                {highlights.slice(0, 3).map((item, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/maceio-ponta-verde-v2.jpg"
                alt="Reunião de pesquisadores"
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-sm text-gray-500 mt-2">
                Foto: @lucasmenesesphoto
              </p>
            </div>
          </div>

          {/* Segunda seção - texto à esquerda/imagem à direita (invertido) */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <img
                src="/praia-maceio.jpg"
                alt="Farol de Maceió"
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-sm text-gray-500 mt-2">
                Foto: @lucasmenesesphoto
              </p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h4 className="text-[#0A0F70] font-bold text-xl md:text-2xl mb-4">
                Nossa Abordagem
              </h4>
              <p className="text-gray-700 mb-6">
                O workshop combina pesquisa científica, políticas públicas e
                inovação tecnológica para enfrentar o problema da poluição
                plástica. Com participantes de diversos países, promovemos o
                intercâmbio de conhecimentos e soluções práticas.
              </p>
              <div className="space-y-3">
                {highlights.slice(3).map((item, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
                {/* Adicionando um item extra que estava no array original */}
                <div className="flex items-center text-gray-700">
                  <Check className="h-5 w-5 mr-3 text-[#0077B6]" />
                  <span>Década dos Oceanos da ONU</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
