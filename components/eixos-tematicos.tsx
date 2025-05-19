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
import { useTranslations } from "next-intl";

interface EixoTematicoProps {
  id: string;
  numero: number;
  titulo: string;
  descricao: string;
  icone: React.ReactNode;
}

export default function EixosTematicos() {
  const t = useTranslations("EixosTematicos");
  const [expandedEixo, setExpandedEixo] = useState<string | null>(null);

  const eixosTematicos: EixoTematicoProps[] = [
    {
      id: "diagnostico-oceanos",
      numero: 1,
      titulo: t("itens.0.titulo"),
      descricao: t("itens.0.descricao"),
      icone: <Waves className="h-6 w-6" />,
    },
    {
      id: "poluicao-contaminantes",
      numero: 2,
      titulo: t("itens.1.titulo"),
      descricao: t("itens.1.descricao"),
      icone: <Recycle className="h-6 w-6" />,
    },
    {
      id: "ciencia-aplicada",
      numero: 3,
      titulo: t("itens.2.titulo"),
      descricao: t("itens.2.descricao"),
      icone: <Cpu className="h-6 w-6" />,
    },
    {
      id: "comunidades-saberes-locais",
      numero: 4,
      titulo: t("itens.3.titulo"),
      descricao: t("itens.3.descricao"),
      icone: <Handshake className="h-6 w-6" />,
    },
    {
      id: "comunicacao-educacao-oceanica",
      numero: 5,
      titulo: t("itens.4.titulo"),
      descricao: t("itens.4.descricao"),
      icone: <Mic className="h-6 w-6" />,
    },
    {
      id: "politicas-governanca",
      numero: 6,
      titulo: t("itens.5.titulo"),
      descricao: t("itens.5.descricao"),
      icone: <Gavel className="h-6 w-6" />,
    },
    {
      id: "solucoes-natureza",
      numero: 7,
      titulo: t("itens.6.titulo"),
      descricao: t("itens.6.descricao"),
      icone: <Leaf className="h-6 w-6" />,
    },
    {
      id: "oceanos-clima",
      numero: 8,
      titulo: t("itens.7.titulo"),
      descricao: t("itens.7.descricao"),
      icone: <CloudSun className="h-6 w-6" />,
    },
  ];

  const toggleEixo = (id: string) => {
    setExpandedEixo(expandedEixo === id ? null : id);
  };

  return (
    <section
      className="py-16 bg-gradient-to-b from-blue-50 to-blue-200"
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
            {t("titulo")}
          </motion.h2>
          <motion.p
            className="text-lg text-blue-700 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("descricao")}
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
            <span className="mr-2">{t("envie_trabalho")}</span>
            <ExternalLink size={20} />
          </a>

          <p className="mt-4 text-sm text-gray-600">
            {t("prazo_submissao")}:{" "}
            <span className="font-semibold">{t("data_submissao")}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
