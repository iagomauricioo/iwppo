"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

type Integrante = {
  id: string;
  nome: string;
  cargo: string;
  instituicao: string;
  nacionalidade?: string;
  foto: string;
};

export default function MesaDeAbertura() {
  const [q, setQ] = useState("");
  const t = useTranslations("MesaDeAbertura");
  const locale = useLocale();

const FOTO_MAP: Record<string, string> = {
  "alexander": "/mesa/alexander.png",
  "fabio-guedes": "/mesa/fabio.jpeg",
  "nidia": "/mesa/nidia.jpg",
  "katia-viana": "/comissao-organizadora/katia.png",
  "douglas-apratto": "/comissao-organizadora/douglas-apratto.jpeg",
};

const m = (id: string): Integrante => ({
  id,
  nome: t(`integrantes.${id}.nome`),
  cargo: t(`integrantes.${id}.cargo`),
  instituicao: t(`integrantes.${id}.instituicao`),
  nacionalidade: t.has(`integrantes.${id}.nacionalidade`)
    ? t(`integrantes.${id}.nacionalidade`)
    : "",
  foto: FOTO_MAP[id] || `/mesa/${id}.jpeg`, // fallback padrão
});

  const integrantes: Integrante[] = [
    m("alexander"),
    m("fabio-guedes"),
    m("nidia"),
    m("katia-viana"),
    m("douglas-apratto"),

  ];

  const filtered = integrantes.filter((p) => {
    const txt = `${p.nome} ${p.cargo} ${p.instituicao}`.toLowerCase();
    return txt.includes(q.toLowerCase());
  });

  return (
    <section
      id="mesa-de-abertura"
      className="py-16 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-100 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-2 text-white"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {t("title1")} <span className="text-blue-200">{t("title2")}</span>
          </motion.h2>
          <motion.p
            className="text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {t("descricao")}
          </motion.p>
        </div>

        {/* Busca */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={t("placeholder")}
              className="w-full bg-blue-950/80 border border-blue-600 rounded-full py-3 px-5 pl-12 text-white placeholder-blue-300/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search className="absolute left-4 top-3.5 text-blue-200" size={18} />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((p, idx) => (
            <motion.article
              key={p.id}
              className="rounded-lg overflow-hidden shadow-lg bg-blue-800"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.15 } }}
            >
              {/* FOTO → Link para detalhes (com locale na rota) */}
              <Link
                href={`/${locale}/mesa-de-abertura/${p.id}`}
                className="relative block h-64 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <Image
                  src={p.foto || "/placeholder.svg"}
                  alt={`${p.nome} – ${p.cargo}`}
                  fill
                  className="object-cover object-center transition-transform duration-200 hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx < 2}
                />
                <span className="sr-only">{t("ver_detalhes")}</span>
              </Link>

              <div className="p-4">
                <h3 className="text-xl font-bold text-white">{p.nome}</h3>
                <p className="text-white/90 font-medium">{p.cargo}</p>
                <p className="text-white/80 text-sm">{p.instituicao}</p>
                {p.nacionalidade && (
                  <p className="text-white/70 text-sm mt-1">{p.nacionalidade}</p>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-10">
            <p className="text-blue-100 text-lg">
              {t("sem_resultados", { termo: q })}
            </p>
            <button
              onClick={() => setQ("")}
              className="mt-3 text-blue-200 hover:text-blue-50 transition-colors"
            >
              {t("limpar_busca")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
