"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

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

  // Helper para aplicar fallback quando a tradução vier como chave crua
  const tr = (key: string, fallback: string) => {
    try {
      const value = t(key) as string;
      // se vier vazio, igual à chave, ou com cara de caminho de chave => usa fallback
      if (
        !value ||
        value === key ||
        value.startsWith("PalestrantesConfirmados.") ||
        /^[A-Za-z0-9_.-]+(\.[A-Za-z0-9_.-]+)+$/.test(value)
      ) {
        return fallback;
      }
      return value;
    } catch {
      return fallback;
    }
  };

  // Textos principais com fallbacks
  const title1 = tr("title1", "Quem já");
  const title2 = tr("title2", "está confirmado");
  const descricao = tr(
    "descricao",
    "Conheça os especialistas que compartilharão seus conhecimentos no IWPPO"
  );
  const placeholder = tr("placeholder", "Buscar palestrantes ou temas...");
  const titulo_palestra = tr("titulo_palestra", "Palestra");
  const sem_resultados = tr("sem_resultados", 'Nenhum palestrante encontrado para "{termo}"');
  const limpar_busca = tr("limpar_busca", "Limpar busca");
  const ver_detalhes = tr("ver_detalhes", "Ver detalhes");

  const palestrantes: Palestrante[] = [
    {
      id: "robson-santos",
      nome: tr("palestrantes.robson-santos.nome", "Robson Guimarães dos Santos"),
      cargo: tr("palestrantes.robson-santos.cargo", "Pesquisador"),
      instituicao: tr("palestrantes.robson-santos.instituicao", "UFAL"),
      foto: "/palestrantes/robson.png",
      palestra: tr(
        "palestrantes.robson-santos.palestra",
        "Apresentação dos principais resultados das pesquisas a partir dos pontos focais do projeto Oceanos de Plástico"
      ),
      nacionalidade: tr("palestrantes.robson-santos.nacionalidade", "Brasil"),
    },
    {
      id: "katia-viana",
      nome: tr("palestrantes.katia-viana.nome", "Katia Viana Cavalcante"),
      cargo: tr("palestrantes.katia-viana.cargo", "Pesquisadora"),
      instituicao: tr("palestrantes.katia-viana.instituicao", "Universidade Federal do Amazonas"),
      foto: "/comissao-organizadora/katia.png",
      palestra: tr("palestrantes.katia-viana.palestra", "Cerimônia de Abertura"),
      nacionalidade: tr("palestrantes.katia-viana.nacionalidade", "Brasil"),
    },
    {
      id: "fernando-lopez",
      nome: tr("palestrantes.fernando-lopez.nome", "Fernando J. Díaz López"),
      cargo: tr("palestrantes.fernando-lopez.cargo", "Pesquisador Internacional"),
      instituicao: tr(
        "palestrantes.fernando-lopez.instituicao",
        "Climate and Earth Center of HEC Paris"
      ),
      foto: "/palestrantes/dias.jpeg",
      palestra: tr("palestrantes.fernando-lopez.palestra", "Cerimônia de Fechamento"),
      nacionalidade: tr("palestrantes.fernando-lopez.nacionalidade", "Estrangeiro"),
    },
    {
      id: "scott-wilson",
      nome: tr("palestrantes.scott-wilson.nome", "Scott Paton Wilson"),
      cargo: tr("palestrantes.scott-wilson.cargo", "Pesquisador Internacional"),
      instituicao: tr("palestrantes.scott-wilson.instituicao", "Macquarie University"),
      foto: "/palestrantes/scott_patton_wilson.jpg",
      palestra: tr("palestrantes.scott-wilson.palestra", "Cerimônia de Encerramento"),
      nacionalidade: tr("palestrantes.scott-wilson.nacionalidade", "Estrangeiro"),
    },
    {
      id: "Fernando-miguel",
      nome: tr("palestrantes.Fernando-miguel.nome", "Fernando Miguel"),
      cargo: tr("palestrantes.Fernando-miguel.cargo", "Pesquisador"),
      instituicao: tr(
        "palestrantes.Fernando-miguel.instituicao",
        "Universidade do Algarve - Portugal"
      ),
      foto: "/palestrantes/fernando.png",
      palestra: tr(
        "palestrantes.Fernando-miguel.palestra",
        "Geotecnologias Aplicadas à Análise e Mitigação de Impactos Ambientais"
      ),
      nacionalidade: tr("palestrantes.Fernando-miguel.nacionalidade", "Estrangeiro"),
    },
    {
      id: "Helena-fernandez",
      nome: tr("palestrantes.Helena-fernandez.nome", "Helena Fernandez"),
      cargo: tr("palestrantes.Helena-fernandez.cargo", "Pesquisadora"),
      instituicao: tr(
        "palestrantes.Helena-fernandez.instituicao",
        "Universidade do Algarve - Portugal"
      ),
      foto: "/palestrantes/helena-fernandez.png",
      palestra: tr(
        "palestrantes.Helena-fernandez.palestra",
        "Gestão Territorial na Deteção de Plásticos nos Oceanos"
      ),
      nacionalidade: tr("palestrantes.Helena-fernandez.nacionalidade", "Estrangeiro"),
    },
    {
      id: "cristiane-siqueira",
      nome: tr("palestrantes.cristiane-siqueira.nome", "Cristiane Siqueira"),
      cargo: tr("palestrantes.cristiane-siqueira.cargo", "Pesquisadora"),
      instituicao: tr(
        "palestrantes.cristiane-siqueira.instituicao",
        "Universidade de Vassouras - Rio de Janeiro"
      ),
      foto: "/palestrantes/cristiane_de_souza_siqueira_pereira.jpg",
      palestra: tr(
        "palestrantes.cristiane-siqueira.palestra",
        "Construção de biosensores para detecção de poluentes e microplásticos em recursos hídricos"
      ),
      nacionalidade: tr("palestrantes.cristiane-siqueira.nacionalidade", "Brasil"),
    },
    {
      id: "Biagio",
      nome: tr("palestrantes.Biagio.nome", "Biagio Fernando Giannetti"),
      cargo: tr("palestrantes.Biagio.cargo", "Pesquisador"),
      instituicao: tr("palestrantes.Biagio.instituicao", "Universidade Paulista - UNIP"),
      foto: "/palestrantes/biagio-nova-foto.jpeg",
      palestra: tr(
        "palestrantes.Biagio.palestra",
        "Emergia e Justiça Ecológica: uma nova base para a responsabilidade compartilhada nos oceanos"
      ),
      nacionalidade: tr("palestrantes.Biagio.nacionalidade", "Brasil"),
    },
    {
      id: "federico-sulis",
      nome: tr("palestrantes.federico-sulis.nome", "Federico Sulis"),
      cargo: tr("palestrantes.federico-sulis.cargo", "Pesquisador"),
      instituicao: tr("palestrantes.federico-sulis.instituicao", "Universidade Paulista - UNIP"),
      foto: "/palestrantes/federico-atualizada.jpeg",
      palestra: tr(
        "palestrantes.federico-sulis.palestra",
        "Fechando o Ciclo: Avaliação da Sustentabilidade de Cobogós com Resíduos Plásticos Marinhos"
      ),
      nacionalidade: tr("palestrantes.federico-sulis.nacionalidade", "Estrangeiro"),
    },
    {
      id: "Marcell",
      nome: tr("palestrantes.Marcell.nome", "Marcell Mariano Correa Maceno"),
      cargo: tr("palestrantes.Marcell.cargo", "Pesquisador"),
      instituicao: tr("palestrantes.Marcell.instituicao", "Universidade Federal do Paraná"),
      foto: "/palestrantes/marcell.jpeg",
      palestra: tr(
        "palestrantes.Marcell.palestra",
        "Life cycle assessment and microplastics: an overview"
      ),
      nacionalidade: tr("palestrantes.Marcell.nacionalidade", "Brasil"),
    },

    // ==== OS QUE ESTAVAM FALTANDO ====
    {
      id: "jornalista",
      nome: tr("palestrantes.jornalista.nome", "Paulina Chamorro"),
      cargo: tr("palestrantes.jornalista.cargo", "Jornalista"),
      instituicao: tr(
        "palestrantes.jornalista.instituicao",
        "Universidade Federal do Paraná"
      ),
      foto: "/palestrantes/jornalista.jpeg",
      palestra: tr(
        "palestrantes.jornalista.palestra",
        "Planeta ou Plástico? - histórias de uma cobertura jornalística"
      ),
      nacionalidade: tr("palestrantes.jornalista.nacionalidade", "Brasil"),
    },
    {
      id: "jemille",
      nome: tr("palestrantes.jemille.nome", "Jemille Viaggi"),
      cargo: tr("palestrantes.jemille.cargo", "Pesquisadora"),
      instituicao: tr(
        "palestrantes.jemille.instituicao",
        "Cátedra Unesco para Sustentabilidade do Oceano"
      ),
      foto: "/palestrantes/jemille.jpeg",
      palestra: tr(
        "palestrantes.jemille.palestra",
        "Fronteiras da Ciência e da Política no Enfrentamento da Poluição Plástica"
      ),
      nacionalidade: tr("palestrantes.jemille.nacionalidade", "Brasil"),
    },
    {
      id: "alireza",
      nome: tr("palestrantes.alireza.nome", "Alireza Moghayedi"),
      cargo: tr("palestrantes.alireza.cargo", "Professor e/ou Pesquisador"),
      instituicao: tr(
        "palestrantes.alireza.instituicao",
        "Universidade do Oeste da Inglaterra, Reino Unido; Universidade da Cidade do Cabo, África do Sul"
      ),
      foto: "/palestrantes/alireza.jpeg",
      palestra: tr(
        "palestrantes.alireza.palestra",
        "Reciclando a poluição plástica em soluções de construção para metas de zero emissão"
      ),
      nacionalidade: tr("palestrantes.alireza.nacionalidade", "Estrangeiro"),
    },
    {
      id: "barbara-pinheiro",
      nome: tr("palestrantes.barbara-pinheiro.nome", "Bárbara Ramos Pinheiro"),
      cargo: tr("palestrantes.barbara-pinheiro.cargo", "Pesquisadora"),
      instituicao: tr(
        "palestrantes.barbara-pinheiro.instituicao",
        "Universidade Federal de Pernambuco"
      ),
      foto: "/palestrantes/Dr Barbara Pinheiro_profile photo.jpg",
      palestra: tr(
        "palestrantes.barbara-pinheiro.palestra",
        "Fronteiras da Ciência e da Política no Enfrentamento da Poluição Plástica"
      ),
      nacionalidade: tr("palestrantes.barbara-pinheiro.nacionalidade", "Brasil"),
    },
    {
      id: "vazquez",
      nome: tr("palestrantes.vazquez.nome", "Ian Vázquez-Rowe"),
      cargo: tr("palestrantes.vazquez.cargo", "Professor"),
      instituicao: tr(
        "palestrantes.vazquez.instituicao",
        "Pontificia Universidad Católica del Perú"
      ),
      foto: "/palestrantes/vazquez.jpg",
      palestra: tr(
        "palestrantes.vazquez.palestra",
        "Vias de emissão de macro e microplásticos para o Oceano Pacífico no Peru: detecção e quantificação"
      ),
      nacionalidade: tr("palestrantes.vazquez.nacionalidade", "Estrangeiro"),
    },
    {
      id: "clemilson",
      nome: tr("palestrantes.clemilson.nome", "Clemilson Marques Batista"),
      cargo: tr("palestrantes.clemilson.cargo", "CEO"),
      instituicao: tr("palestrantes.clemilson.instituicao", "Plataforma Athenas"),
      foto: "/palestrantes/clemilson.jpeg",
      palestra: tr(
        "palestrantes.clemilson.palestra",
        "Plataforma Athena: Inovação na gestão da pesquisa e da produção científica brasileira"
      ),
      nacionalidade: tr("palestrantes.clemilson.nacionalidade", "Brasil"),
    },
    {
      id: "aldilane",
      nome: tr("palestrantes.aldilane.nome", "Aldilane Lays Xavier Marques"),
      cargo: tr("palestrantes.aldilane.cargo", "Pesquisadora"),
      instituicao: tr(
        "palestrantes.aldilane.instituicao",
        "UFAL - Universidade Federal de Alagoas"
      ),
      foto: "/palestrantes/aldilane.jpeg",
      palestra: tr(
        "palestrantes.aldilane.palestra",
        "Microplásticos na Placenta Humana: Evidências em Alagoas e no Cenário Internacional"
      ),
      nacionalidade: tr("palestrantes.aldilane.nacionalidade", "Brasil"),
    },
  ];

  const filteredPalestrantes = palestrantes.filter((p) => {
    const termo = searchTerm.toLowerCase();
    return (
      p.nome.toLowerCase().includes(termo) ||
      p.instituicao.toLowerCase().includes(termo) ||
      p.palestra.toLowerCase().includes(termo)
    );
  });

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
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 },
                }}
              >
                {/* Foto do palestrante com link para a página de detalhes */}
                <div className="relative h-64 overflow-hidden">
                  <Link href={`/${locale}/palestrantes/${palestrante.id}`}>
                    <Image
                      src={palestrante.foto || "/placeholder.svg"}
                      alt={palestrante.nome}
                      fill
                      className="object-cover object-center cursor-pointer hover:opacity-90 transition"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                    />
                    <span className="sr-only">{ver_detalhes}</span>
                  </Link>
                </div>

                {/* Informações do palestrante */}
                <div className="p-4">
                  <h3 className={`text-xl font-bold ${corAtual.text}`}>{palestrante.nome}</h3>
                  <p className={`${corAtual.text} opacity-90 font-medium`}>{palestrante.cargo}</p>
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
