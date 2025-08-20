"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useTranslations, useParams } from "next-intl";

interface Palestrante {
  id: string;
  nome: string;
  cargo: string;
  instituicao: string;
  foto: string;
  palestra: string;
  nacionalidade: string;
  colorIndex?: number;
}

export default function PalestrantesConfirmados() {
  const [searchTerm, setSearchTerm] = useState("");
  const t = useTranslations("PalestrantesConfirmados");
  const params = useParams();
  const locale = (params?.locale as string) || "pt-BR";

  // Debug log to check translations
  console.log("Translations for PalestrantesConfirmados:", {
    title1: t("title1"),
    title2: t("title2"),
    descricao: t("descricao"),
    robsonNome: t("palestrantes.robson-santos.nome"),
  });

  // Fallbacks to prevent raw key display
  const title1 = t("title1") || "Quem já";
  const title2 = t("title2") || "está confirmado";
  const descricao = t("descricao") || "Conheça os especialistas que compartilharão seus conhecimentos no IWPPO";
  const placeholder = t("placeholder") || "Buscar palestrantes ou temas...";
  const titulo_palestra = t("titulo_palestra") || "Palestra";
  const sem_resultados = t("sem_resultados") || 'Nenhum palestrante encontrado para "{termo}"';
  const limpar_busca = t("limpar_busca") || "Limpar busca";

  const palestrantes: Palestrante[] = [
    {
      id: "robson-santos",
      nome: t("palestrantes.robson-santos.nome") || "Robson Guimarães dos Santos",
      cargo: t("palestrantes.robson-santos.cargo") || "Pesquisador",
      instituicao: t("palestrantes.robson-santos.instituicao") || "UFAL",
      foto: "/palestrantes/robson.png",
      palestra: t("palestrantes.robson-santos.palestra") || "Apresentação dos principais resultados das pesquisas a partir dos pontos focais do projeto Oceanos de Plástico",
      nacionalidade: t("palestrantes.robson-santos.nacionalidade") || "Brasil",
    },
    {
      id: "katia-viana",
      nome: t("palestrantes.katia-viana.nome") || "Katia Viana Cavalcante",
      cargo: t("palestrantes.katia-viana.cargo") || "Pesquisadora",
      instituicao: t("palestrantes.katia-viana.instituicao") || "Universidade Federal do Amazonas",
      foto: "/comissao-organizadora/katia.png",
      palestra: t("palestrantes.katia-viana.palestra") || "Cerimônia de Abertura",
      nacionalidade: t("palestrantes.katia-viana.nacionalidade") || "Brasil",
    },
    {
      id: "fernando-lopez",
      nome: t("palestrantes.fernando-lopez.nome") || "Fernando J. Díaz López",
      cargo: t("palestrantes.fernando-lopez.cargo") || "Pesquisador Internacional",
      instituicao: t("palestrantes.fernando-lopez.instituicao") || "Climate and Earth Center of HEC Paris",
      foto: "/palestrantes/dias.jpeg",
      palestra: t("palestrantes.fernando-lopez.palestra") || "Cerimônia de Fechamento",
      nacionalidade: t("palestrantes.fernando-lopez.nacionalidade") || "Estrangeiro",
    },
    {
      id: "scott-wilson",
      nome: t("palestrantes.scott-wilson.nome") || "Scott Paton Wilson",
      cargo: t("palestrantes.scott-wilson.cargo") || "Pesquisador Internacional",
      instituicao: t("palestrantes.scott-wilson.instituicao") || "Macquarie University",
      foto: "/palestrantes/scott_patton_wilson.jpg",
      palestra: t("palestrantes.scott-wilson.palestra") || "Cerimônia de Encerramento",
      nacionalidade: t("palestrantes.scott-wilson.nacionalidade") || "Estrangeiro",
    },
    {
      id: "Fernando-miguel",
      nome: t("palestrantes.Fernando-miguel.nome") || "Fernando Miguel",
      cargo: t("palestrantes.Fernando-miguel.cargo") || "Pesquisador",
      instituicao: t("palestrantes.Fernando-miguel.instituicao") || "Universidade do Algarve - Portugal",
      foto: "/palestrantes/fernando.png",
      palestra: t("palestrantes.Fernando-miguel.palestra") || "Geotecnologias Aplicadas à Análise e Mitigação de Impactos Ambientais",
      nacionalidade: t("palestrantes.Fernando-miguel.nacionalidade") || "Estrangeiro",
    },
    {
      id: "Helena-fernandez",
      nome: t("palestrantes.Helena-fernandez.nome") || "Helena Fernandez",
      cargo: t("palestrantes.Helena-fernandez.cargo") || "Pesquisadora",
      instituicao: t("palestrantes.Helena-fernandez.instituicao") || "Universidade do Algarve - Portugal",
      foto: "/palestrantes/helena-fernandez.png",
      palestra: t("palestrantes.Helena-fernandez.palestra") || "Gestão Territorial na Deteção de Plásticos nos Oceanos",
      nacionalidade: t("palestrantes.Helena-fernandez.nacionalidade") || "Estrangeiro",
    },
    {
      id: "cristiane-siqueira",
      nome: t("palestrantes.cristiane-siqueira.nome") || "Cristiane Siqueira",
      cargo: t("palestrantes.cristiane-siqueira.cargo") || "Pesquisadora",
      instituicao: t("palestrantes.cristiane-siqueira.instituicao") || "Universidade de Vassouras - Rio de Janeiro",
      foto: "/palestrantes/cristiane_de_souza_siqueira_pereira.jpg",
      palestra: t("palestrantes.cristiane-siqueira.palestra") || "Construção de biosensores para detecção de poluentes e microplásticos em recursos hídricos",
      nacionalidade: t("palestrantes.cristiane-siqueira.nacionalidade") || "Brasil",
    },
    {
      id: "Biagio",
      nome: t("palestrantes.Biagio.nome") || "Biagio Fernando Giannetti",
      cargo: t("palestrantes.Biagio.cargo") || "Pesquisador",
      instituicao: t("palestrantes.Biagio.instituicao") || "Universidade Paulista - UNIP",
      foto: "/palestrantes/biagio-nova-foto.jpeg",
      palestra: t("palestrantes.Biagio.palestra") || "Emergia e Justiça Ecológica: uma nova base para a responsabilidade compartilhada nos oceanos",
      nacionalidade: t("palestrantes.Biagio.nacionalidade") || "Brasil",
    },
    {
      id: "federico-sulis",
      nome: t("palestrantes.federico-sulis.nome") || "Federico Sulis",
      cargo: t("palestrantes.federico-sulis.cargo") || "Pesquisador",
      instituicao: t("palestrantes.federico-sulis.instituicao") || "Universidade Paulista - UNIP",
      foto: "/palestrantes/federico-atualizada.jpeg",
      palestra: t("palestrantes.federico-sulis.palestra") || "Fechando o Ciclo: Avaliação da Sustentabilidade de Cobogós com Resíduos Plásticos Marinhos",
      nacionalidade: t("palestrantes.federico-sulis.nacionalidade") || "Estrangeiro",
    },
    {
      id: "Marcell",
      nome: t("palestrantes.Marcell.nome") || "Marcell Mariano Correa Maceno",
      cargo: t("palestrantes.Marcell.cargo") || "Pesquisador",
      instituicao: t("palestrantes.Marcell.instituicao") || "Universidade Federal do Paraná",
      foto: "/palestrantes/marcell.jpeg",
      palestra: t("palestrantes.Marcell.palestra") || "Life cycle assessment and microplastics: an overview",
      nacionalidade: t("palestrantes.Marcell.nacionalidade") || "Brasil",
    },
    {
      id: "jornalista",
      nome: t("palestrantes.jornalista.nome") || "Paulina Chamorro",
      cargo: t("palestrantes.jornalista.cargo") || "Jornalista",
      instituicao: t("palestrantes.jornalista.instituicao") || "Universidade Federal do Paraná",
      foto: "/palestrantes/jornalista.jpeg",
      palestra: t("palestrantes.jornalista.palestra") || "Planeta ou Plástico? - histórias de uma cobertura jornalística",
      nacionalidade: t("palestrantes.jornalista.nacionalidade") || "Brasil",
    },
    {
      id: "jemille",
      nome: t("palestrantes.jemille.nome") || "Jemille Viaggi",
      cargo: t("palestrantes.jemille.cargo") || "Pesquisadora",
      instituicao: t("palestrantes.jemille.instituicao") || "Cátedra Unesco para Sustentabilidade do Oceano",
      foto: "/palestrantes/jemille.jpeg",
      palestra: t("palestrantes.jemille.palestra") || "Fronteiras da Ciência e da Política no Enfrentamento da Poluição Plástica",
      nacionalidade: t("palestrantes.jemille.nacionalidade") || "Brasil",
    },
    {
      id: "alireza",
      nome: t("palestrantes.alireza.nome") || "Alireza Moghayedi",
      cargo: t("palestrantes.alireza.cargo") || "Professor e/ou Pesquisador",
      instituicao: t("palestrantes.alireza.instituicao") || "Universidade do Oeste da Inglaterra, Reino Unido; Universidade da Cidade do Cabo, África do Sul",
      foto: "/palestrantes/alireza.jpeg",
      palestra: t("palestrantes.alireza.palestra") || "Reciclando a poluição plástica em soluções de construção para metas de zero emissão",
      nacionalidade: t("palestrantes.alireza.nacionalidade") || "Estrangeiro",
    },
    {
      id: "barbara-pinheiro",
      nome: t("palestrantes.barbara-pinheiro.nome") || "Bárbara Ramos Pinheiro",
      cargo: t("palestrantes.barbara-pinheiro.cargo") || "Pesquisadora",
      instituicao: t("palestrantes.barbara-pinheiro.instituicao") || "Universidade Federal de Pernambuco",
      foto: "/palestrantes/Dr Barbara Pinheiro_profile photo.jpg",
      palestra: t("palestrantes.barbara-pinheiro.palestra") || "Fronteiras da Ciência e da Política no Enfrentamento da Poluição Plástica",
      nacionalidade: t("palestrantes.barbara-pinheiro.nacionalidade") || "Brasil",
    },
    {
      id: "vazquez",
      nome: t("palestrantes.vazquez.nome") || "Ian Vázquez-Rowe",
      cargo: t("palestrantes.vazquez.cargo") || "Professor",
      instituicao: t("palestrantes.vazquez.instituicao") || "Pontificia Universidad Católica del Perú",
      foto: "/palestrantes/vazquez.jpg",
      palestra: t("palestrantes.vazquez.palestra") || "Vias de emissão de macro e microplásticos para o Oceano Pacífico no Peru: detecção e quantificação",
      nacionalidade: t("palestrantes.vazquez.nacionalidade") || "Estrangeiro",
    },
    {
      id: "clemilson",
      nome: t("palestrantes.clemilson.nome") || "Clemilson Marques Batista",
      cargo: t("palestrantes.clemilson.cargo") || "CEO",
      instituicao: t("palestrantes.clemilson.instituicao") || "Plataforma Athenas",
      foto: "/palestrantes/clemilson.jpeg",
      palestra: t("palestrantes.clemilson.palestra") || "Plataforma Athena: Inovação na gestão da pesquisa e da produção científica brasileira",
      nacionalidade: t("palestrantes.clemilson.nacionalidade") || "Brasil",
    },
    {
      id: "aldilane",
      nome: t("palestrantes.aldilane.nome") || "Aldilane Lays Xavier Marques",
      cargo: t("palestrantes.aldilane.cargo") || "Pesquisadora",
      instituicao: t("palestrantes.aldilane.instituicao") || "UFAL - Universidade Federal de Alagoas",
      foto: "/palestrantes/aldilane.jpeg",
      palestra: t("palestrantes.aldilane.palestra") || "Microplásticos na Placenta Humana: Evidências em Alagoas e no Cenário Internacional",
      nacionalidade: t("palestrantes.aldilane.nacionalidade") || "Brasil",
    },
  ];

  const filteredPalestrantes = palestrantes.filter((palestrante) =>
    palestrante.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    palestrante.instituicao.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
            {title1} <span className="text-blue-200">{title2}</span>
          </motion.h2>
          <motion.p
            className="text-lg text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {descricao}
          </motion.p>
        </div>

        {/* Barra de pesquisa */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder={placeholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-blue-950/80 border border-blue-600 rounded-full py-3 px-5 pl-12 text-white placeholder-blue-300/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search className="absolute left-4 top-3.5 text-blue-200" size={18} />
          </div>
        </div>

        {/* Grade de palestrantes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {filteredPalestrantes.map((palestrante, index) => {
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
                {/* Foto do palestrante com link */}
                <div className="relative h-64 overflow-hidden">
                  <Link href={`/${locale}/palestrantes/${palestrante.id}`}>
                    <Image
                      src={palestrante.foto || "/placeholder.svg"}
                      alt={palestrante.nome}
                      fill
                      className="object-cover object-center cursor-pointer hover:opacity-90 transition"
                    />
                    <span className="sr-only">{t("ver_detalhes") || "Ver detalhes"}</span>
                  </Link>
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
                  <div className={`pt-3 border-t ${corAtual.border}`}>
                    <p className={`text-sm font-medium ${corAtual.text} opacity-80`}>
                      {titulo_palestra}:
                    </p>
                    <p className={`${corAtual.text} font-semibold`}>{palestrante.palestra}</p>
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
              {sem_resultados.replace("{termo}", searchTerm)}
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-3 text-blue-200 hover:text-blue-50 transition-colors"
            >
              {limpar_busca}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}