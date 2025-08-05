"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PalestranteDetailPage({ params }: any) {
  const t = useTranslations("PalestrantesConfirmados");
  const data = t.raw(`palestrantes.${params.id}`);

  if (!data) {
    notFound();
  }

  // Mapa de fotos por ID
  const fotosMap: Record<string, string> = {
    "robson-santos": "/palestrantes/robson.png",
    "katia-viana": "/comissao-organizadora/katia.png",
    "fernando-lopez": "/palestrantes/dias.jpeg",
    "scott-wilson": "/palestrantes/scott_patton_wilson.jpg",
    "Fernando-miguel": "/palestrantes/fernando.png",
    "Helena-fernandez": "/palestrantes/helena-fernandez.png",
    "cristiane-siqueira": "/palestrantes/cristiane_de_souza_siqueira_pereira.jpg",
    "Biagio": "/palestrantes/biagio-nova-foto.jpeg",
    "federico-sulis": "/comite-cientifico/federico_sulis.jpg",
    "Marcell": "/palestrantes/marcell.jpeg"
  };

  const palestrante = {
    id: params.id,
    foto: fotosMap[params.id] || "/placeholder.svg",
    ...data
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          href={`/${params.locale}#palestrantes`}
          className="text-blue-600 underline mb-6 inline-block hover:text-blue-800 transition"
        >
          ← {t("voltar")}
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <Image
            src={palestrante.foto}
            alt={palestrante.nome}
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold mb-2 text-blue-900">
            {palestrante.nome}
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            {palestrante.cargo} - {palestrante.instituicao}
          </p>

          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            {t("titulo_palestra")}
          </h2>
          <p className="mb-6">{palestrante.palestra}</p>

          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            {t("biografia")}
          </h2>
          <p className="leading-relaxed">{palestrante.biografia}</p>
        </motion.div>
      </div>
    </div>
  );
}
