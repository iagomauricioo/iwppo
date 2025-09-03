"use client";

import Image from "next/image";
import Link from "next/link";
import {useTranslations, useLocale} from "next-intl";
import {notFound} from "next/navigation";
import {motion} from "framer-motion";
import {ChevronRight} from "lucide-react";

export default function MesaAberturaDetailPage({params}: any) {
  const t = useTranslations("MesaDeAbertura");
  const locale = useLocale();

  const id = String(params?.id || "").toLowerCase();

  if (!t.has(`integrantes.${id}`)) {
    notFound();
  }

  const data = t.raw(`integrantes.${id}`);

  const fotosMap: Record<string, string> = {
    alexander: "/mesa/alexander.jpeg",
    "fabio-guedes": "/mesa/fabio-guedes.jpeg",
    nidia: "/mesa/nidia.jpeg",
    "katia-viana": "/comissao-organizadora/katia.png",
    "douglas-apratto": "/comissao-organizadora/douglas-apratto.jpeg",
    neto: "/mesa/neto.jpeg",
    // IMPORTANTE: manter minúsculo porque id foi lowercased
    cf: "/mesa/CF.png",
  };

  const integrante = {
    id,
    foto: fotosMap[id] || "/placeholder.svg",
    ...data,
  };

  const bioTitulo = t.has("biografia") ? t("biografia") : t("bio_titulo");

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-100 text-white">
      <header className="py-4 px-6 flex justify-between items-center border-b border-blue-700">
        <Link href={`/${locale}`}>
          <Image
            src="/logo-iwppo.png"
            alt="IWPPO Logo"
            width={140}
            height={50}
            className="object-contain"
          />
        </Link>

        <Link
          href={`/${locale}/mesa-de-abertura`}
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
              initial={{opacity: 0, scale: 0.95}}
              animate={{opacity: 1, scale: 1}}
              transition={{duration: 0.5}}
              className="w-full max-w-md mx-auto relative h-96 rounded-lg overflow-hidden"
              style={{minHeight: "384px"}}
            >
              <Image
                src={integrante.foto}
                alt={integrante.nome}
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.2}}
            >
              <h1 className="text-3xl font-bold mb-2 text-white">
                {integrante.nome}
              </h1>

              <p className="text-lg text-blue-100 mb-4">
                {integrante.cargo}
                {integrante.instituicao ? ` - ${integrante.instituicao}` : ""}
              </p>

              {integrante.nacionalidade && (
                <p className="text-white/90 mb-6">{integrante.nacionalidade}</p>
              )}

              {(integrante.bio || t.has(`integrantes.${id}.bio`)) && (
                <>
                  <h2 className="text-xl font-semibold text-blue-200 mb-2">
                    {bioTitulo}
                  </h2>
                  <p className="leading-relaxed text-white/90">
                    {integrante.bio || t(`integrantes.${id}.bio`)}
                  </p>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
