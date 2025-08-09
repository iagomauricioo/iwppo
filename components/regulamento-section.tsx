"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle2, Scale, Languages, Users, ClipboardList, Download } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function RegulamentoSection() {
  const t = useTranslations("RegulamentoSection");

  const itens = [
    { icon: <CheckCircle2 className="h-5 w-5" />, title: t("itens.ineditismo.title"), desc: t("itens.ineditismo.desc") },
    { icon: <ClipboardList className="h-5 w-5" />, title: t("itens.modalidades.title"), desc: t("itens.modalidades.desc") },
    { icon: <FileText className="h-5 w-5" />, title: t("itens.formato.title"), desc: t("itens.formato.desc") },
    { icon: <Languages className="h-5 w-5" />, title: t("itens.idiomas.title"), desc: t("itens.idiomas.desc") },
    { icon: <Users className="h-5 w-5" />, title: t("itens.autores.title"), desc: t("itens.autores.desc") },
    { icon: <Users className="h-5 w-5" />, title: t("itens.limites.title"), desc: t("itens.limites.desc") },
  ];

  const criterios = [
    t("criterios.0"),
    t("criterios.1"),
    t("criterios.2"),
    t("criterios.3"),
    t("criterios.4"),
  ];

  return (
    <section id="regulamento" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">{t("title")}</h2>
          <p className="text-blue-700 mt-2">{t("subtitle")}</p>
        </motion.div>

        {/* Grid de regras */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {itens.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl border border-blue-100 shadow-sm p-5 flex gap-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
            >
              <div className="text-blue-700 bg-blue-100 rounded-lg p-2 h-fit">{item.icon}</div>
              <div>
                <h3 className="text-blue-900 font-semibold">{item.title}</h3>
                <p className="text-gray-700 text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Critérios de avaliação */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-blue-900 text-white rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-3">
            <Scale className="h-5 w-5 text-blue-200" />
            <h3 className="text-xl font-bold">{t("avaliacao.title")}</h3>
          </div>

          <p className="text-blue-100 mb-4">{t("avaliacao.desc")}</p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 list-disc list-inside">
            {criterios.map((c, i) => (
              <li key={i} className="text-blue-50">{c}</li>
            ))}
          </ul>

          <div className="mt-4 text-sm text-blue-200">
            {t("avaliacao.escala")}
            <br />
            {t("avaliacao.resultados")}
          </div>
        </motion.div>

        {/* Ações */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/docs/regulamento_trilingue_iwppo.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#ff3333] hover:bg-[#e62e2e] text-white font-semibold shadow-md transition"
          >
            <Download className="h-5 w-5" />
            {t("actions.baixar_pdf")}
          </Link>

          <a
            href="https://doity.com.br/iwppo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-900 hover:bg-blue-800 text-white font-semibold shadow-md transition"
          >
            <FileText className="h-5 w-5" />
            {t("actions.submeter_trabalho")}
          </a>
        </div>
      </div>
    </section>
  );
}
