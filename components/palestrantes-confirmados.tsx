"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, ExternalLink, Search, FileText } from "lucide-react";

interface Palestrante {
  id: string;
  nome: string;
  cargo: string;
  instituicao: string;
  foto: string;
  palestra: string;
  nacionalidade: string;
  cv: string;
  instagram?: string;
  linkedin?: string;
  website?: string;
  colorIndex?: number; // Índice da cor a ser usada (1-9 para blue-100 até blue-900)
}

const palestrantes: Palestrante[] = [
  {
    id: "robson-santos",
    nome: "Robson Guimarães dos Santos",
    cargo: "Pesquisador",
    instituicao: "Centro Universitário Cesmac",
    foto: "/palestrantes/robson.png",
    palestra: "Apresentação dos principais resultados das pesquisas a partir dos pontos focais do projeto Oceanos de Plástico",
    nacionalidade: "Brasil",
    cv: "http://lattes.cnpq.br/3415855125714979",
    linkedin: "https://linkedin.com/in/robsonguimaraes",
  },
  {
    id: "claudio-sampaio",
    nome: "Cláudio Luis Santos Sampaio",
    cargo: "Pesquisador",
    instituicao: "Centro Universitário Cesmac",
    foto: "/palestrantes/claudio.png",
    palestra: "Premiação aos pesquisadores que contribuem com as temáticas do evento",
    nacionalidade: "Brasil",
    cv: "http://lattes.cnpq.br/2526336992077506",
    linkedin: "https://linkedin.com/in/claudioluissampaio",
  },
  {
    id: "carlos-sampaio",
    nome: "Carlos Alberto Cioce Sampaio",
    cargo: "Pesquisador",
    instituicao: "Centro Universitário Cesmac",
    foto: "/palestrantes/carlos.png",
    palestra: "Cerimônia de Abertura",
    nacionalidade: "Brasil",
    cv: "http://lattes.cnpq.br/9034603212802471",
    linkedin: "https://linkedin.com/in/carlosalbertociocesampaio",
  },
  {
    id: "brendan-kelaher",
    nome: "Brendan Kelaher",
    cargo: "Pesquisador Internacional",
    instituicao: "Southern Cross University",
    foto: "/palestrantes/brendan.png",
    palestra: "Apresentação de metodologia para a identificação de plástico em tecidos de animais",
    nacionalidade: "Estrangeiro",
    cv: "BrendanKelaher_125970.pdf",
    linkedin: "https://linkedin.com/in/brendankelaher",
  },
  {
    id: "fernando-lopez",
    nome: "Fernando J. Díaz López",
    cargo: "Pesquisador Internacional",
    instituicao: "Universidad de Barcelona",
    foto: "/palestrantes/dias.jpeg",
    palestra: "Cerimônia de Fechamento",
    nacionalidade: "Estrangeiro",
    cv: "FernandoJ.DiazLopez_125998.pdf",
    website: "https://universidadbarcelona.es/fernandodiaz",
  },
  {
    id: "alejandro-tagliafico",
    nome: "Alejandro Tagliafico",
    cargo: "Pesquisador Internacional",
    instituicao: "Southern Cross University",
    foto: "/palestrantes/alejandro.png",
    palestra: "Apresentação de metodologia para a identificação de plástico em tecidos de animais",
    nacionalidade: "Estrangeiro",
    cv: "AlejandroTagliafico_125972.pdf",
    linkedin: "https://linkedin.com/in/alejandrotagliafico",
  },
  {
    id: "scott-wilson",
    nome: "Scott Paton Wilson",
    cargo: "Pesquisador Internacional",
    instituicao: "Southern Cross University",
    foto: "/palestrantes/scott_patton_wilson.jpg",
    palestra: "Cerimônia de Abertura",
    nacionalidade: "Estrangeiro",
    cv: "ScoottPatonWilson_125977.pdf",
    linkedin: "https://linkedin.com/in/scottpatonwilson",
  }
];

export default function PalestrantesConfirmados() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar palestrantes com base no termo de busca
  const filteredPalestrantes = palestrantes.filter(
    (palestrante) =>
      palestrante.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      palestrante.instituicao
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      palestrante.palestra.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section
      className="py-16 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-100 text-white"
      id="palestrantes"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-2 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Quem já <span className="text-blue-200">está confirmado</span>
          </motion.h2>
          <motion.p
            className="text-lg text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Conheça os especialistas que compartilharão seus conhecimentos no
            IWPPO
          </motion.p>
        </div>

        {/* Barra de pesquisa */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar palestrantes ou temas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-blue-950/80 border border-blue-600 rounded-full py-3 px-5 pl-12 text-white placeholder-blue-300/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search
              className="absolute left-4 top-3.5 text-blue-200"
              size={18}
            />
          </div>
        </div>

        {/* Grade de palestrantes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {filteredPalestrantes.map((palestrante, index) => {
            // Cores fixas para melhor legibilidade
            const cores = [
              { bg: "bg-blue-950", text: "text-white", border: "border-blue-800" },
              { bg: "bg-blue-900", text: "text-white", border: "border-blue-700" },
              { bg: "bg-blue-800", text: "text-white", border: "border-blue-600" },
              { bg: "bg-blue-700", text: "text-white", border: "border-blue-500" },
              { bg: "bg-blue-600", text: "text-white", border: "border-blue-400" },
              { bg: "bg-blue-500", text: "text-white", border: "border-blue-300" },
              { bg: "bg-blue-400", text: "text-blue-950", border: "border-blue-200" },
              { bg: "bg-blue-300", text: "text-blue-950", border: "border-blue-100" },
              { bg: "bg-blue-200", text: "text-blue-950", border: "border-blue-50" },
            ];
            
            const corAtual = cores[index % cores.length];

            return (
              <motion.div
                key={palestrante.id}
                className={`rounded-lg overflow-hidden shadow-lg ${corAtual.bg}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 },
                }}
              >
                {/* Foto do palestrante */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={palestrante.foto || "/placeholder.svg"}
                    alt={palestrante.nome}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Informações do palestrante */}
                <div className="p-4">
                  <h3 className={`text-xl font-bold ${corAtual.text}`}>
                    {palestrante.nome}
                  </h3>
                  <p className={`${corAtual.text} opacity-90 font-medium`}>
                    {palestrante.cargo}
                  </p>
                  <p className={`${corAtual.text} opacity-80 text-sm mb-1`}>
                    {palestrante.instituicao}
                  </p>
                  <p className={`${corAtual.text} opacity-80 text-sm mb-3`}>
                    {palestrante.nacionalidade}
                  </p>

                  {/* Ícones de redes sociais e CV */}
                  <div className="flex space-x-2 mb-4">
                    {palestrante.instagram && (
                      <Link
                        href={palestrante.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Instagram de ${palestrante.nome}`}
                        className={`hover:opacity-80 transition-opacity ${corAtual.text}`}
                      >
                        <Instagram className="w-5 h-5" />
                      </Link>
                    )}
                    {palestrante.linkedin && (
                      <Link
                        href={palestrante.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn de ${palestrante.nome}`}
                        className={`hover:opacity-80 transition-opacity ${corAtual.text}`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </Link>
                    )}
                    {palestrante.website && (
                      <Link
                        href={palestrante.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Website de ${palestrante.nome}`}
                        className={`hover:opacity-80 transition-opacity ${corAtual.text}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )}
                    <Link
                      href={palestrante.cv}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`CV de ${palestrante.nome}`}
                      className={`hover:opacity-80 transition-opacity ${corAtual.text}`}
                    >
                      <FileText className="w-5 h-5" />
                    </Link>
                  </div>

                  {/* Título da palestra */}
                  <div className={`pt-3 border-t ${corAtual.border}`}>
                    <p className={`text-sm font-medium ${corAtual.text} opacity-80`}>
                      Palestra:
                    </p>
                    <p className={`${corAtual.text} font-semibold`}>
                      {palestrante.palestra}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mensagem quando não há resultados */}
        {filteredPalestrantes.length === 0 && (
          <div className="text-center py-10">
            <p className="text-blue-100 text-lg">
              Nenhum palestrante encontrado para "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-3 text-blue-200 hover:text-blue-50 transition-colors"
            >
              Limpar busca
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
