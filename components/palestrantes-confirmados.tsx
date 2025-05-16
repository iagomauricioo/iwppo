"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Linkedin, ExternalLink, Search } from "lucide-react";

interface Palestrante {
  id: string;
  nome: string;
  cargo: string;
  instituicao: string;
  foto: string;
  palestra: string;
  instagram?: string;
  linkedin?: string;
  website?: string;
}

const palestrantes: Palestrante[] = [
  {
    id: "jesse-pavao",
    nome: "Jessé Marques Pavão",
    cargo: "Pesquisador",
    instituicao: "Centro Universitário Cesmac",
    foto: "/comissao-organizadora/jesse.png",
    palestra: "Poluição por microplásticos: desafios e soluções",
    instagram: "https://instagram.com/jessepavao",
    linkedin: "https://linkedin.com/in/jessepavao",
  },
  {
    id: "richard-ladle",
    nome: "Richard James Ladle",
    cargo: "Professor",
    instituicao: "Universidade Federal de Alagoas",
    foto: "/comissao-organizadora/richard.png",
    palestra: "Conservação marinha em tempos de mudanças climáticas",
    linkedin: "https://linkedin.com/in/richardladle",
  },
  {
    id: "cristiane-pereira",
    nome: "Cristiane S. S. Pereira",
    cargo: "Pesquisadora",
    instituicao: "Universidade Federal do Rio de Janeiro",
    foto: "/comissao-organizadora/cristiane.png",
    palestra: "Impactos dos microplásticos em ecossistemas marinhos",
    instagram: "https://instagram.com/cristianepereira",
    linkedin: "https://linkedin.com/in/cristianepereira",
  },
  {
    id: "biagio-giannetti",
    nome: "Biagio F. Giannetti",
    cargo: "Professor",
    instituicao: "Universidade Paulista",
    foto: "/comissao-organizadora/biagio.png",
    palestra: "Economia circular aplicada à gestão de resíduos plásticos",
    linkedin: "https://linkedin.com/in/biagiogiannetti",
  },
  {
    id: "ana-claudia",
    nome: "Ana Claudia Malhado",
    cargo: "Pesquisadora",
    instituicao: "Universidade Federal de Alagoas",
    foto: "/comissao-organizadora/jesse.png",
    palestra: "Políticas públicas para conservação dos oceanos",
    instagram: "https://instagram.com/anaclaudiamalhado",
    linkedin: "https://linkedin.com/in/anaclaudiamalhado",
  },
  {
    id: "selenobaldo",
    nome: "Selenobaldo Alexinaldo",
    cargo: "Pesquisador",
    instituicao: "Centro Universitário Cesmac",
    foto: "/comissao-organizadora/selenobaldo.png",
    palestra: "Tecnologias para monitoramento de poluição marinha",
    linkedin: "https://linkedin.com/in/selenobaldo",
  },
  {
    id: "jarcilene-almeida",
    nome: "Jarcilene S. Almeida",
    cargo: "Professora",
    instituicao: "Universidade Federal de Pernambuco",
    foto: "/comissao-organizadora/jarcilene.png",
    palestra: "Restauração de ecossistemas costeiros",
    instagram: "https://instagram.com/jarcilene",
    linkedin: "https://linkedin.com/in/jarcilene",
  },
  {
    id: "marcelo-reis",
    nome: "Marcelo Reis",
    cargo: "Pesquisador",
    instituicao: "Instituto Oceanográfico",
    foto: "/comissao-organizadora/marcelo.png",
    palestra: "Modelagem de dispersão de plásticos nos oceanos",
    linkedin: "https://linkedin.com/in/marceloreis",
  },
  {
    id: "katia-cavalcante",
    nome: "Katia Viana Cavalcante",
    cargo: "Professora",
    instituicao: "Universidade Federal do Amazonas",
    foto: "/comissao-organizadora/katia.png",
    palestra: "Gestão de resíduos em comunidades ribeirinhas",
    instagram: "https://instagram.com/katiacavalcante",
    linkedin: "https://linkedin.com/in/katiacavalcante",
  },
  {
    id: "fernando-lopez",
    nome: "Fernando J. Díaz López",
    cargo: "Pesquisador Internacional",
    instituicao: "Universidad de Barcelona",
    foto: "/comissao-organizadora/jesse.png",
    palestra: "Cooperação internacional para oceanos livres de plástico",
    website: "https://universidadbarcelona.es/fernandodiaz",
  },
];

// Cores do IWPPO em ordem de gradiente (do mais claro ao mais escuro)
const coresIWPPO = [
  "#CAF0F8", // Azul muito claro
  "#ADE8F4", // Azul claro
  "#90E0EF", // Azul claro médio
  "#48CAE4", // Azul médio
  "#00B4D8", // Azul médio forte
  "#0096C7", // Azul forte
  "#0077B6", // Azul escuro
  "#023E8A", // Azul muito escuro
  "#03045E", // Azul profundo
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

  // Função para obter a cor de fundo baseada no índice
  const getBackgroundColor = (index: number) => {
    // Usar cores alternadas do array de cores do IWPPO
    return coresIWPPO[index % coresIWPPO.length];
  };

  // Função para determinar se o texto deve ser branco ou preto baseado na cor de fundo
  const getTextColor = (bgColorIndex: number) => {
    // Cores mais escuras (índices maiores) usam texto branco
    return bgColorIndex >= 5 ? "text-white" : "text-blue-900";
  };

  return (
    <section className="py-16 bg-[#0A0F70] text-white" id="palestrantes">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Quem já <span className="text-blue-300">está confirmado</span>
          </motion.h2>
          <motion.p
            className="text-lg text-blue-200 max-w-2xl mx-auto"
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
              className="w-full bg-blue-900/50 border border-blue-700 rounded-full py-3 px-5 pl-12 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search
              className="absolute left-4 top-3.5 text-blue-300"
              size={18}
            />
          </div>
        </div>

        {/* Grade de palestrantes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {filteredPalestrantes.map((palestrante, index) => {
            const colorIndex = index % coresIWPPO.length;
            const bgColor = getBackgroundColor(index);
            const textColorClass = getTextColor(colorIndex);

            return (
              <motion.div
                key={palestrante.id}
                className="rounded-lg overflow-hidden shadow-lg"
                style={{ backgroundColor: bgColor }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
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
                  <h3 className={`text-xl font-bold ${textColorClass}`}>
                    {palestrante.nome}
                  </h3>
                  <p className={`${textColorClass} opacity-90 font-medium`}>
                    {palestrante.cargo}
                  </p>
                  <p className={`${textColorClass} opacity-80 text-sm mb-3`}>
                    {palestrante.instituicao}
                  </p>

                  {/* Ícones de redes sociais */}
                  <div className="flex space-x-2 mb-4">
                    {palestrante.instagram && (
                      <Link
                        href={palestrante.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Instagram de ${palestrante.nome}`}
                        className={`hover:opacity-80 transition-opacity ${textColorClass}`}
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
                        className={`hover:opacity-80 transition-opacity ${textColorClass}`}
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
                        className={`hover:opacity-80 transition-opacity ${textColorClass}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    )}
                  </div>

                  {/* Título da palestra */}
                  <div
                    className={`pt-3 border-t ${
                      colorIndex >= 5
                        ? "border-blue-400/30"
                        : "border-blue-900/20"
                    }`}
                  >
                    <p
                      className={`text-sm font-medium ${textColorClass} opacity-80`}
                    >
                      Palestra:
                    </p>
                    <p className={`${textColorClass} font-semibold`}>
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
            <p className="text-blue-200 text-lg">
              Nenhum palestrante encontrado para "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-3 text-blue-300 hover:text-blue-100"
            >
              Limpar busca
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
