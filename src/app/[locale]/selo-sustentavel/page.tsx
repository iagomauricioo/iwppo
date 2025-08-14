"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

// ✅ importe o componente completo do selo
import SeloSustentavelPremiacao from "@/components/selo-sustentavel-premiacao";

export default function SeloSustentavelPage({ params }: any) {
  const t = useTranslations("SeloSustentavelPage");

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-100 text-white">
      {/* Header */}
      <header className="py-4 px-6 flex justify-between items-center border-b border-blue-700">
        <Link href={`/${params?.locale || "pt"}`}>
          <Image
            src="/logo-iwppo.png"
            alt="IWPPO Logo"
            width={140}
            height={50}
            className="object-contain"
          />
        </Link>
        <Link
          href={`/${params?.locale || "pt"}`}
          className="text-sm md:text-base px-4 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-full font-medium flex items-center gap-1"
        >
          <ChevronRight size={18} />
          {t("back") || "Voltar"}
        </Link>
      </header>

      {/* Conteúdo */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <motion.h1
            className="text-4xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t("title") || "Selo de Atitude Sustentável"}
          </motion.h1>

          <motion.p
            className="mb-10 text-blue-100 text-lg max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t("intro") ||
              "Confira abaixo os critérios e como participar da competição de vídeos do Selo de Atitude Sustentável."}
          </motion.p>
        </div>

        {/* 🔽 Aqui entra o componente completo do selo, no mesmo padrão do RegulamentoSection */}
        <SeloSustentavelPremiacao />
      </main>
    </div>
  );
}
