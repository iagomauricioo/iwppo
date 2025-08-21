"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  ExternalLink,
  Globe,
  ShieldCheck,
  Star,
} from "lucide-react";
import { useTranslations } from "next-intl";

type Journal = {
  id: string;
  name: string;
  url: string;
  issn?: string;
  scopeKeys: string[]; // chaves de escopo no i18n
  logo?: string; // caminho em /public
  cta?: { labelKey: string; href?: string };
  badgeKey?: string; // chave de destaque
};

export default function RevistaSection() {
  const t = useTranslations("RevistasSection");

  const journals: Journal[] = [
    {
      id: "tche",
      name: "Revista Tchê Química",
      url: "https://www.tchequimica.com",
      issn: "ISSN 1806-0374",
      logo: "/revistas/tche.jpeg", // coloque o arquivo em /public/revistas/
      scopeKeys: ["chemistry", "materials", "environment"],
      badgeKey: "openAccess",
      cta: {
        labelKey: "visit",
        href: "https://www.tchequimica.com",
      },
    },
    {
      id: "journal",
      name: "Scientific Journal of Fisheries & Aquatic Sciences",
      url: "https://www.sjofsciences.com/",
      issn: "e-ISSN 2675-6180",
      logo: "/revistas/journal.jpeg",
      scopeKeys: ["fisheries", "ocean", "sustainability"],
      badgeKey: "peerReviewed",
      cta: {
        labelKey: "visit",
        href: "https://www.sjofsciences.com/",
      },
    },
  ];

  return (
    <section
      id="revistas"
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50"
      aria-labelledby="revistas-title"
    >
      {/* fundo decorativo */}
      <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_50%_at_50%_0%,#000,transparent)]">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[110vw] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.25),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/10 text-blue-700 ring-1 ring-blue-600/20">
            <BookOpen className="h-4 w-4" />
            {t("kicker")}
          </span>
          <h2
            id="revistas-title"
            className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-blue-950"
          >
            {t("title")}
          </h2>
          <p className="mt-3 text-blue-800/80">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* grid de revistas */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {journals.map((j, idx) => (
            <motion.article
              key={j.id}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group relative rounded-2xl p-1 bg-gradient-to-br from-blue-600/20 via-white to-blue-600/10 shadow-[0_6px_30px_-6px_rgba(30,64,175,0.25)]"
            >
              <div className="h-full rounded-[1rem] bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border border-blue-200/60 p-5 flex flex-col">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 rounded-xl ring-1 ring-blue-200/70 overflow-hidden bg-white">
                    {j.logo ? (
                      <Image
                        src={j.logo}
                        alt={`${j.name} logo`}
                        fill
                        className="object-contain p-2"
                        sizes="56px"
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center text-sm font-semibold text-blue-900">
                        {j.name.slice(0, 2).toUpperCase()}
                      </div>
                    )}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-blue-950 truncate">
                      {j.name}
                    </h3>
                    {j.issn && (
                      <p className="text-xs text-blue-800/70">{j.issn}</p>
                    )}
                  </div>

                  {j.badgeKey && (
                    <span className="ml-auto inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-blue-600/10 text-blue-800 ring-1 ring-blue-500/20">
                      {j.badgeKey === "openAccess" ? (
                        <Globe className="h-3.5 w-3.5" />
                      ) : (
                        <ShieldCheck className="h-3.5 w-3.5" />
                      )}
                      {t(`badges.${j.badgeKey}`)}
                    </span>
                  )}
                </div>

                {/* Escopos */}
                <ul className="mt-4 flex flex-wrap gap-2">
                  {j.scopeKeys.map((k) => (
                    <li
                      key={k}
                      className="text-[11px] md:text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-900 ring-1 ring-blue-200"
                    >
                      {t(`scopes.${k}`)}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-blue-800/80">
                    <Star className="h-3.5 w-3.5" />
                    <span>{t("highlight")}</span>
                  </div>

                  <Link
                    href={j.cta?.href || j.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 px-4 py-2 rounded-lg shadow transition-colors"
                    aria-label={`${t("visit")} ${j.name}`}
                  >
                    {t(j.cta?.labelKey || "visit")}
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* glow hover */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(40%_40%_at_30%_0%,rgba(29,78,216,0.25),transparent_60%),radial-gradient(40%_40%_at_70%_100%,rgba(29,78,216,0.25),transparent_60%)]" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
