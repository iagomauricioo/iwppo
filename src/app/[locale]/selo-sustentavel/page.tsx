"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function SeloSustentavelPage() {
  const t = useTranslations("SeloSustentavelPage");

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6">
        {t("title") || "Selo de Atitude Sustentável"}
      </h1>

      <p className="mb-6">
        {t("intro") ||
          "Confira abaixo os critérios para participar da competição de vídeos."}
      </p>

      <ul className="list-disc pl-6 mb-8 space-y-2">
        <li>Originalidade do vídeo</li>
        <li>Impacto ambiental positivo</li>
        <li>Clareza na comunicação</li>
        <li>Criatividade na apresentação</li>
      </ul>

      <Link
        href="/"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        {t("back") || "Voltar"}
      </Link>
    </div>
  );
}
