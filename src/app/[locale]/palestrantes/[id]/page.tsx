"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react"; // corrigido: seta para ESQUERDA

export default function PalestranteDetailPage({ params }: any) {
  const t = useTranslations("PalestrantesConfirmados");
  const data = t.raw(`palestrantes.${params.id}`);

  if (!data) notFound();

  const fotosMap: Record<string, string> = {
    "robson-santos": "/palestrantes/robson.png",
    "katia-viana": "/comissao-organizadora/katia.png",
    "fernando-lopez": "/palestrantes/dias.jpeg",
    "scott-wilson": "/palestrantes/scott_patton_wilson.jpg",
    "Fernando-miguel": "/palestrantes/fernando.png",
    "Helena-fernandez": "/palestrantes/helena-fernandez.png",
    "cristiane-siqueira": "/palestrantes/cristiane_de_souza_siqueira_pereira.jpg",
    "Biagio": "/palestrantes/biagio-nova-foto.jpeg",
    "federico-sulis": "/palestrantes/federico-atualizada.jpeg",
    "Marcell": "/palestrantes/marcell.jpeg",
    "jornalista": "/palestrantes/jornalista.jpeg",
    "jemille": "/palestrantes/jemille.jpeg",
    "alireza": "/palestrantes/alireza.jpeg",
    "barbara-pinheiro": "/palestrantes/Dr Barbara Pinheiro_profile photo.jpg",
  };

  const palestrante = {
    id: params.id,
    foto: fotosMap[params.id] || "/placeholder.svg",
    ...data,
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-100 text-white">
      
      {/* Navbar simplificada com botão à esquerda */}
      <header className="py-4 px-6 flex justify-between items-center border-b border-blue-700">
        <Link
          href={`/${params.locale}#palestrantes`}
          className="text-sm md:text-base px-4 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-full font-medium flex items-center gap-1"
        >
          <ChevronLeft size={18} />
          {t("voltar")}
        </Link>

        <Link href={`/${params.locale}`}>
          <Image
            src="/logo-iwppo.png"
            alt="IWPPO Logo"
            width={140}
            height={50}
            className="object-contain"
          />
        </Link>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md mx-auto relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src={palestrante.foto}
                alt={palestrante.nome}
                fill
                className="object-cover object-top"
                priority
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
