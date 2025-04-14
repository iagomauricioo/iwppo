"use client";

import { useMobile } from "@/hooks/use-mobile";

export default function RegistrationSection() {
  const isMobile = useMobile();

  if (isMobile) {
    return null; // No registration section in mobile view
  }

  return (
    <section className="py-16">
      <div className="container mx-auto text-center max-w-3xl">
        <h3 className="text-[#0A0F70] font-bold text-3xl mb-6">
          Participe do II IWPPO
        </h3>
        <p className="text-gray-700 mb-12">
          Faça parte deste importante evento que reúne especialistas,
          pesquisadores e ativistas em prol dos oceanos.
        </p>

        <div className="bg-[#e6f7fb] p-8 rounded-lg shadow-md">
          <h4 className="text-[#0A0F70] font-bold text-2xl mb-4">
            Inscrições Abertas
          </h4>
          <p className="text-gray-700 mb-6">10-12 de Setembro, 2025</p>
          <a href="#inscricoes">
            <button className="bg-blue-800 hover:bg-[#0096c7] text-white font-bold py-3 px-8 rounded-full">
              Inscreva-se Agora
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
