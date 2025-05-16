"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Waves,
  Recycle,
  Cpu,
  Handshake,
  Mic,
  Gavel,
  Leaf,
  CloudSun,
} from "lucide-react";
import Image from "next/image";

interface EixoTematicoProps {
  id: string;
  numero: number;
  titulo: string;
  descricao: string;
  icone: React.ReactNode;
}

const eixosTematicos: EixoTematicoProps[] = [
  {
    id: "diagnostico-oceanos",
    numero: 1,
    titulo: "Diagnóstico dos Oceanos: A Crise Atual",
    descricao:
      "Este eixo temático aborda o estado atual dos oceanos frente aos desafios ambientais contemporâneos. Visa reunir estudos que avaliem a saúde dos ecossistemas marinhos, destacando indicadores de degradação ambiental, perda de biodiversidade, acidificação, sobrepesca e impactos das mudanças climáticas. Pesquisas que utilizem ferramentas de monitoramento, modelagem oceânica e avaliação de políticas de conservação também são bem-vindas. O objetivo é fornecer um panorama abrangente e científico sobre a real condição dos oceanos em escala local, regional e global.",
    icone: <Waves className="h-6 w-6" />,
  },
  {
    id: "poluicao-contaminantes",
    numero: 2,
    titulo: "Poluição e Contaminantes Emergentes",
    descricao:
      "Este eixo contempla pesquisas voltadas à identificação, caracterização e mitigação de poluentes nos ambientes marinhos, com ênfase especial nos contaminantes emergentes como microplásticos, nanoplásticos, resíduos farmacêuticos, pesticidas e metais pesados. São esperados trabalhos que investiguem as fontes, rotas de dispersão, efeitos ecotoxicológicos e possíveis soluções para esses contaminantes. Também se incluem abordagens inovadoras em tecnologias de detecção, remediação e estratégias de prevenção com foco na sustentabilidade marinha.",
    icone: <Recycle className="h-6 w-6" />,
  },
  {
    id: "ciencia-aplicada",
    numero: 3,
    titulo: "Ciência com Propósito: Pesquisas Aplicadas aos Oceanos",
    descricao:
      "Este eixo destaca a ciência aplicada como ferramenta estratégica para enfrentar os desafios oceânicos. São bem-vindas pesquisas que envolvam monitoramento por sensoriamento remoto, modelagem climática, biotecnologia marinha e soluções baseadas em tecnologias emergentes como Inteligência Artificial e Big Data. O foco está na produção de conhecimento técnico com impacto direto na conservação, gestão e uso sustentável dos mares.",
    icone: <Cpu className="h-6 w-6" />,
  },
  {
    id: "comunidades-saberes-locais",
    numero: 4,
    titulo: "Comunidades Tradicionais e Saberes Locais",
    descricao:
      "Aborda a importância dos conhecimentos tradicionais e do protagonismo das comunidades costeiras na preservação dos oceanos. Este eixo valoriza estudos interdisciplinares sobre práticas sustentáveis, justiça ambiental e os impactos da crise climática na vida de povos indígenas, pescadores artesanais, marisqueiras e ribeirinhos. Incentiva o diálogo entre ciência e saberes locais como estratégia para políticas mais justas e eficazes.",
    icone: <Handshake className="h-6 w-6" />,
  },
  {
    id: "comunicacao-educacao-oceanica",
    numero: 5,
    titulo: "Comunicação Científica e Educação Oceânica",
    descricao:
      "Foca na disseminação do conhecimento científico e no fortalecimento da cultura oceânica. Este eixo contempla iniciativas de popularização da ciência, produção de materiais educativos, ações em escolas e comunidades, bem como estratégias de comunicação voltadas à mobilização social e ao apoio de políticas públicas. Também são esperados trabalhos que explorem a comunicação de risco em contextos de crise climática.",
    icone: <Mic className="h-6 w-6" />,
  },
  {
    id: "politicas-governanca",
    numero: 6,
    titulo: "Políticas Públicas e Governança dos Mares",
    descricao:
      "Explora o papel das políticas públicas na proteção e gestão sustentável dos oceanos. Abrange temas como acordos multilaterais, criação de áreas marinhas protegidas, instrumentos legais nacionais, governança participativa e transparência na gestão costeira. Este eixo busca articular ciência, sociedade e Estado para promover uma governança oceânica eficaz e equitativa.",
    icone: <Gavel className="h-6 w-6" />,
  },
  {
    id: "solucoes-natureza",
    numero: 7,
    titulo: "Inovação, Sustentabilidade e Soluções Baseadas na Natureza",
    descricao:
      "Promove abordagens inovadoras para a regeneração e preservação dos ambientes marinhos. Engloba pesquisas sobre restauração de ecossistemas costeiros, energias renováveis oceânicas, economia azul, cadeias produtivas sustentáveis e tecnologias baseadas na natureza. O objetivo é estimular soluções que conciliem desenvolvimento socioeconômico e integridade ecológica.",
    icone: <Leaf className="h-6 w-6" />,
  },
  {
    id: "oceanos-clima",
    numero: 8,
    titulo: "Oceanos e Clima: Interações e Impactos",
    descricao:
      "Este eixo analisa o papel dos oceanos no sistema climático global e os efeitos das mudanças climáticas sobre os ambientes marinhos e costeiros. São bem-vindos estudos sobre eventos extremos, elevação do nível do mar, acidificação, impactos em comunidades vulneráveis e estratégias de mitigação e adaptação. A ênfase está em compreender e responder aos riscos climáticos com base científica sólida.",
    icone: <CloudSun className="h-6 w-6" />,
  },
];

export default function EixosTematicos() {
  const [expandedEixo, setExpandedEixo] = useState<string | null>(null);

  const toggleEixo = (id: string) => {
    setExpandedEixo(expandedEixo === id ? null : id);
  };

  return (
    <section
      className="py-16 bg-gradient-to-b from-blue-50 to-white"
      id="eixos-tematicos"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Eixos Temáticos para Submissão de Trabalhos
          </motion.h2>
          <motion.p
            className="text-lg text-blue-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Escolha um dos eixos abaixo para submeter seu trabalho científico
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          {eixosTematicos.map((eixo, index) => (
            <motion.div
              key={eixo.id}
              className="mb-4 bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                className={`w-full text-left p-5 flex items-start justify-between transition-colors ${
                  expandedEixo === eixo.id ? "bg-blue-50" : "hover:bg-blue-50"
                }`}
                onClick={() => toggleEixo(eixo.id)}
                aria-expanded={expandedEixo === eixo.id}
                aria-controls={`content-${eixo.id}`}
              >
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-700 p-3 rounded-full mr-4 flex-shrink-0">
                    {eixo.icone}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-blue-900">
                    {eixo.numero}. {eixo.titulo}
                  </h3>
                </div>
                <div className="text-blue-500 flex-shrink-0 ml-2">
                  {expandedEixo === eixo.id ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {expandedEixo === eixo.id && (
                  <motion.div
                    id={`content-${eixo.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 border-t border-blue-100">
                      <p className="text-gray-700 leading-relaxed">
                        {eixo.descricao}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://doity.com.br/iwppo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-4 bg-[#ff3333] hover:bg-[#e62e2e] text-white font-bold rounded-lg shadow-lg transition-all transform hover:scale-105"
          >
            <span className="mr-2">Envie já seu trabalho na Doity</span>
            <ExternalLink size={20} />
          </a>

          <p className="mt-4 text-sm text-gray-600">
            Prazo para submissão:{" "}
            <span className="font-semibold">15 de Maio de 2025</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
