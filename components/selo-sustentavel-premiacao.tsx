"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Scale,
  CheckCircle2,
  Users,
  Sparkles,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Destaque = { title: string; desc: string; icon?: string };
type Criterio = { titulo: string; desc: string; perguntas: string };

const Icone = ({ name, className }: { name?: string; className?: string }) => {
  // Permite definir ícones via JSON no futuro ("check", "bulb", "users", "sparkles").
  // Se não vier nada no JSON, usa um fallback por posição.
  switch (name) {
    case "check":
      return <CheckCircle2 className={className} />;
    case "bulb":
      return <Lightbulb className={className} />;
    case "users":
      return <Users className={className} />;
    case "sparkles":
      return <Sparkles className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

export default function SeloSustentavelPremiacao() {
  const t = useTranslations("SeloSustentavelPremiacao");

  // Arrays vindos do JSON (tipados e com fallback seguro)
  const destaques = (t.raw("destaques") as Destaque[]) ?? [];
  const criterios = (t.raw("criterios") as Criterio[]) ?? [];
  const escala = (t.raw("escala") as string[]) ?? [];

  return (
    <section
      id="selo-sustentavel"
      className="py-16 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título + intro */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
            {t("title")}
          </h2>

          {/* Intro 1 */}
          <p className="text-blue-700 mt-2 max-w-3xl mx-auto">
            {t("intro1")}
          </p>

          {/* Intro 2 */}
          <p className="text-blue-700 mt-2 max-w-3xl mx-auto">
            {t("intro2")}
          </p>
        </motion.div>

        {/* Grade “destaques” */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {destaques.map((item, idx) => (
            <motion.div
              key={`${item.title}-${idx}`}
              className="bg-white rounded-xl border border-blue-100 shadow-sm p-5 flex gap-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
            >
              <div className="text-blue-700 bg-blue-100 rounded-lg p-2 h-fit">
                <Icone name={item.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-blue-900 font-semibold">{item.title}</h3>
                <p className="text-gray-700 text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Texto de rede/compartilhamento */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 text-blue-800 text-center max-w-4xl mx-auto"
        >
          {t("network_text")}
        </motion.p>

        {/* Critérios */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-blue-900 text-white rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-3">
            <Scale className="h-5 w-5 text-blue-200" />
            <h3 className="text-xl font-bold">{t("criterios_title")}</h3>
          </div>

          <p className="text-blue-100 mb-4">{t("criterios_intro")}</p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
            {criterios.map((c, i) => (
              <li key={`${c.titulo}-${i}`}>
                <p className="font-semibold text-blue-50">{c.titulo}</p>
                <p className="text-blue-100/90 text-sm mt-1">{c.desc}</p>
                <p className="text-blue-200 text-xs mt-2">
                  <span className="font-semibold">{t("perguntas_guia")}</span>{" "}
                  {c.perguntas}
                </p>
                <p className="text-blue-200 text-xs mt-1">{t("pontuacao_rodape")}</p>
              </li>
            ))}
          </ul>

          {/* Escala */}
          <div className="mt-6 text-sm text-blue-200">
            <p className="font-semibold mb-1">{t("escala_title")}</p>
            {escala.map((linha, i) => (
              <p key={`escala-${i}`}>{linha}</p>
            ))}
          </div>
        </motion.div>

        {/* Ações */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/docs/Selo de Atitude Sustentável Texto.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
            {t("actions.enviar_video")}
          </a>
        </div>
      </div>
    </section>
  );
}
