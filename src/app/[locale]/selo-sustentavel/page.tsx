"use client";

import Image from "next/image";
import Link from "next/link";
import {useTranslations, useLocale} from "next-intl";
import {motion} from "framer-motion";
import {ChevronRight} from "lucide-react";
import SeloSustentavelPremiacao from "@/components/selo-sustentavel-premiacao";

export default function SeloSustentavelPage() {
  const t = useTranslations("SeloSustentavelPage");
  const locale = useLocale();

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
          href={`/${locale}#inicio`}
          className="text-sm md:text-base px-4 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-full font-medium flex items-center gap-1"
        >
          <ChevronRight size={18} />
          {t("back")}
        </Link>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <motion.h1
            className="text-4xl font-bold mb-6 text-white"
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
          >
            {t("title")}
          </motion.h1>

          <motion.div
            className="mb-10 flex justify-center"
            initial={{opacity: 0, scale: 0.95}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.6, delay: 0.2}}
          >
            <div className="w-full max-w-lg aspect-video rounded-lg overflow-hidden shadow-lg">
              <video controls className="w-full h-full object-cover">
                <source
                  src="/premiacao-sustentavel/IWPPO (6).mp4"
                  type="video/mp4"
                />
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          </motion.div>

          <motion.p
            className="mb-10 text-blue-100 text-lg max-w-3xl"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.3}}
          >
            {t("intro")}
          </motion.p>
        </div>

        <SeloSustentavelPremiacao />
      </main>
    </div>
  );
}
