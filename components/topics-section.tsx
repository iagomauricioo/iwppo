"use client";

import { Globe, FlaskRoundIcon as Flask, Recycle } from "lucide-react";

export default function TopicsSection() {
  return (
    <section className="py-16 bg-[#caf0f8] rounded-lg" id="topicos-principais">
      <div className="container mx-auto">
        <h3 className="text-[#0A0F70] font-bold text-3xl mb-8 text-center">
          Tópicos Principais
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center px-4">
          {/* Topic 1: Pesquisa e Inovação */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <Flask className="h-12 w-12 text-[#0077B6] mb-4" />
            <h4 className="text-[#0A0F70] font-bold text-xl mb-2 text-center">
              Pesquisa e Inovação
            </h4>
            <p className="text-gray-700 text-center">
              Desenvolvimento de soluções tecnológicas e políticas públicas
              inovadoras.
            </p>
          </div>

          {/* Topic 2: Economia Circular */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <Recycle className="h-12 w-12 text-[#0077B6] mb-4" />
            <h4 className="text-[#0A0F70] font-bold text-xl mb-2 text-center">
              Economia Circular
            </h4>
            <p className="text-gray-700 text-center">
              Estratégias de monitoramento, rastreamento e reciclagem de
              resíduos plásticos.
            </p>
          </div>

          {/* Topic 3: Cooperação Global */}
          <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
            <Globe className="h-12 w-12 text-[#0077B6] mb-4" />
            <h4 className="text-[#0A0F70] font-bold text-xl mb-2 text-center">
              Cooperação Global
            </h4>
            <p className="text-gray-700 text-center">
              Diálogo interdisciplinar e troca de conhecimentos internacionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
