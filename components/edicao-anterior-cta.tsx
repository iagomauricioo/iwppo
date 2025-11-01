"use client";

import { motion } from "framer-motion";
import { ExternalLink, History } from "lucide-react";
import { useTranslations } from "next-intl";

export default function EdicaoAnteriorCTA() {
  const t = useTranslations("EdicaoAnterior");

  return (
    <section className="py-12 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl bg-white border border-blue-100 shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-700">
              <History className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-900">
                {t("titulo")}
              </h3>
              <p className="text-blue-800/80 mt-1">{t("descricao")}</p>
              <span className="mt-2 inline-block text-xs font-semibold text-blue-800/80 bg-blue-100 px-2 py-1 rounded-full">
                {t("badge")}
              </span>
            </div>
          </div>

          <div className="md:ml-auto">
            <a
              href={t("url")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 bg-[#ff3333] hover:bg-[#e62e2e] text-white font-semibold rounded-lg shadow transition-colors"
            >
              <span>{t("cta")}</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
