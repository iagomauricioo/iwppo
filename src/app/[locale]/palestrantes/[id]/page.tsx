"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function PalestranteDetailPage({ params }: any) {
  const t = useTranslations("PalestrantesConfirmados");
  const data = t.raw(`palestrantes.${params.id}`);

  if (!data) {
    notFound();
  }

  const id = params.id.toLowerCase();
  const fotosMap: Record<string, string> = {
    "robson-santos": "/palestrantes/robson.png",
    "katia-viana": "/comissao-organizadora/katia.png",
    "fernando-lopez": "/palestrantes/dias.jpeg",
    "scott-wilson": "/palestrantes/scott_patton_wilson.jpg",
    "fernando-miguel": "/palestrantes/fernando.png",
    "helena-fernandez": "/palestrantes/helena-fernandez.png",
    "cristiane-siqueira": "/palestrantes/cristiane_de_souza_siqueira_pereira.jpg",
    "biagio": "/palestrantes/biagio-nova-foto.jpeg",
    "federico-sulis": "/palestrantes/federico-atualizada.jpeg",
    "marcell": "/palestrantes/marcell.jpeg",
    "jornalista": "/palestrantes/jornalista.jpeg",
    "jemille": "/palestrantes/jemille.jpeg",
    "alireza": "/palestrantes/alireza.jpeg",
    "barbara-pinheiro": "/palestrantes/Dr Barbara Pinheiro_profile photo.jpg",
  };

  const palestrante = {
    id: params.id,
    foto: fotosMap[id] || "/placeholder.svg",
    ...data,
  };

  // Depuração
  console.log("Params ID:", params.id);
  console.log("Normalized ID:", id);
  console.log("Foto selecionada:", palestrante.foto);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-100 text-white">
      <header className="py-4 px-6 flex justify-between items-center border-b border-blue-700">
        <Link href={`/${params.locale}`}>
          <Image
            src="/logo-iwppo.png"
            alt="IWPPO Logo"
            width={140}
            height={50}
            className="object-contain"
          />
        </Link>
        <Link
          href={`/${params.locale}#palestrantes`}
          className="text-sm md:text-base px-4 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-full font-medium flex items-center gap-1"
        >
          <ChevronRight size={18} />
          {t("voltar")}
        </Link>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md mx-auto relative h-96 rounded-lg overflow-hidden" // Garantindo dimensões
              style={{ minHeight: "384px" }} // Adicionando altura mínima como fallback
            >
              <Image
                src={palestrante.foto}
                alt={palestrante.nome}
                fill
                className="object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold mb-2 text-white">
                {palestrante.nome}
              </h1>
              <p className="text-lg text-blue-100 mb-4">
                {palestrante.cargo} - {palestrante.instituicao}
              </p>
              <h2 className="text-xl font-semibold text-blue-200 mb-2">
                {t("titulo_palestra")}
              </h2>
              <p className="mb-6 text-white/90">{palestrante.palestra}</p>
              <h2 className="text-xl font-semibold text-blue-200 mb-2">
                {t("biografia")}
              </h2>
              <p className="leading-relaxed text-white/90">
                {palestrante.biografia}
              </p>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}