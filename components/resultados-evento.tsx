"use client";

import type React from "react";
import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Users,
  Globe2,
  Presentation,
  Award,
  Download,
  ExternalLink,
  Images,
  Info,
} from "lucide-react";
import Image from "next/image";

type StatKey = "inscritos" | "paises" | "apresentacoes" | "premios";

export interface ResultadosEventoProps {
  /** Sobrescreve valores de estatísticas sem mexer no JSON */
  statsOverride?: Partial<Record<StatKey, number>>;
  /** Lista de álbuns para download (Drive/Flickr/TransferNow etc.). Props têm prioridade sobre JSON */
  albums?: Array<{ label: string; href: string }>;
  /** Mini-galeria de fotos (thumbnails clicáveis). Props têm prioridade sobre JSON */
  photos?: Array<{ src: string; alt: string; href?: string; width?: number; height?: number }>;
  /** Texto livre para "Última atualização" (ex.: "Atualizado em nov/2025"). Prop tem prioridade sobre JSON */
  lastUpdateText?: string;
  /** ID de âncora da seção */
  id?: string;
}

export default function ResultadosEvento({
  statsOverride,
  albums,
  photos,
  lastUpdateText,
  id = "resultados",
}: ResultadosEventoProps) {
  const t = useTranslations("ResultadosEvento");

  // ===== Estatísticas =====
  // Como os números estão diretos no JSON (ex.: "inscritos": 210),
  // usamos t.raw("dados.inscritos") para obter number sem quebrar.
  const stats = useMemo(() => {
    const fromJson = {
      inscritos: toNumber(t.raw("dados.inscritos")),
      paises: toNumber(t.raw("dados.paises")),
      apresentacoes: toNumber(t.raw("dados.apresentacoes")),
      premios: toNumber(t.raw("dados.premios")),
    };
    return { ...fromJson, ...statsOverride };
  }, [statsOverride, t]);

  const statCards: Array<{
    key: StatKey;
    label: string;
    value: number;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }> = [
    { key: "inscritos", label: t("labels.inscritos"), value: stats.inscritos ?? 0, Icon: Users },
    { key: "paises", label: t("labels.paises"), value: stats.paises ?? 0, Icon: Globe2 },
    { key: "apresentacoes", label: t("labels.apresentacoes"), value: stats.apresentacoes ?? 0, Icon: Presentation },
    { key: "premios", label: t("labels.premios"), value: stats.premios ?? 0, Icon: Award },
  ];

  // ===== Álbuns (botões) =====
  const albumsFromJson = (safeRawArray(t, "fotos.albuns") ??
    []) as Array<{ label: string; href: string }>;
  const effectiveAlbums = albums?.length ? albums : albumsFromJson;

  // ===== Thumbs (galeria) =====
  const photosFromJson = (safeRawArray(t, "fotos.thumbs") ??
    []) as Array<{ src: string; alt: string; href?: string; width?: number; height?: number }>;
  const effectivePhotos = (photos?.length ? photos : photosFromJson).slice(0, 12);

  const lastUpdate =
    lastUpdateText ||
    (t("ultima_atualizacao") !== "ultima_atualizacao" ? t("ultima_atualizacao") : "");

  return (
    <section id={id} className="py-16 bg-gradient-to-b from-blue-50 to-blue-100 border-t border-blue-200">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">{t("titulo")}</h2>
          <p className="text-blue-800/80 mt-3 max-w-3xl mx-auto">{t("descricao")}</p>

          {lastUpdate && (
            <div className="mt-4 inline-flex items-center gap-2 text-xs text-blue-800/70 bg-white/60 backdrop-blur rounded-full px-3 py-1">
              <Info className="h-4 w-4" />
              <span>{lastUpdate}</span>
            </div>
          )}
        </motion.div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {statCards.map(({ key, label, value, Icon }, idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4"
            >
              <div className="p-3 rounded-xl bg-blue-100 text-blue-700">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-blue-900 leading-none">
                  {formatNumber(value)}
                </div>
                <div className="text-sm text-blue-800/70">{label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Galeria */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-900 flex items-center gap-2">
              <Images className="h-6 w-6 text-blue-700" />
              {t("fotos.titulo")}
            </h3>

            {effectiveAlbums?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {effectiveAlbums.map((a, i) => (
                  <a
                    key={`${a.href}-${i}`}
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-2 text-sm bg-[#ff3333] hover:bg-[#e62e2e] text-white rounded-lg shadow transition-all"
                  >
                    <Download className="h-4 w-4" />
                    <span>{a.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {effectivePhotos?.length > 0 ? (
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {effectivePhotos.map((p, i) => (
                <li key={`${p.src}-${i}`} className="group relative overflow-hidden rounded-xl">
                  <a
                    href={p.href || p.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    aria-label={p.alt}
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority={i < 2}
                      />
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    <ExternalLink className="absolute bottom-2 right-2 h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-blue-900/70 text-sm">{t("fotos.sem_fotos")}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ===================== utils ===================== */

function toNumber(v: unknown): number {
  if (v == null) return 0;
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string") {
    const n = Number(v.replace?.(/\./g, "").replace?.(",", "."));
    return Number.isFinite(n) ? n : 0;
  }
  return 0;
}

/** Formata 1200 -> "1.200" no pt-BR */
function formatNumber(n: number) {
  try {
    return new Intl.NumberFormat("pt-BR").format(n ?? 0);
  } catch {
    return String(n ?? 0);
  }
}

/** Lê arrays do JSON via next-intl com segurança */
function safeRawArray(
  t: ReturnType<typeof useTranslations>,
  key: string
): unknown[] | null {
  try {
    const v = t.raw(key);
    return Array.isArray(v) ? v : null;
  } catch {
    return null;
  }
}
