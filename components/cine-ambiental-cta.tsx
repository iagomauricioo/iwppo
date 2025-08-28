"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Film } from "lucide-react";

type Props = { className?: string; };

export default function CineAmbientalCTA({ className = "" }: Props) {
  const t = useTranslations("CineAmbientalCTA");

  return (
    <section className={`relative isolate ${className}`}>
      {/* bg suave no estilo do site */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-blue-100/40" />
      <div className="mx-auto max-w-[1200px] px-4 py-8 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-3xl border border-white/60 bg-white/80 backdrop-blur-xl shadow-xl overflow-hidden"
        >
          {/* imagem/arte */}
          <div className="relative min-h-[260px] md:min-h-[360px] bg-white">
            <Image
              src="/cine/cine-ambiental-shark-quiz.png"
              alt={t("alt")}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-6"
              priority
            />
          </div>

          {/* conteúdo */}
          <div className="flex flex-col justify-center p-6 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-xl bg-blue-600/10 px-3 py-1 text-blue-700 w-fit mb-3">
              <Film className="size-4" />
              <span className="text-sm font-semibold">{t("badge")}</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight text-gray-900">
              {t("title")}
            </h2>
            <p className="mt-3 text-gray-700 max-w-prose">
              {t("desc")}
            </p>

            <div className="mt-6">
              <Link
                href="{`/${locale}/cine-ambiental`}"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 text-white font-semibold shadow hover:bg-blue-700 transition"
              >
                {t("cta")}
              </Link>
            </div>

            <p className="mt-4 text-sm text-gray-500">{t("sub")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
