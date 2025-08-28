"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, Film, Users, Mail } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Props = { className?: string };

export default function CineAmbientalSection({ className = "" }: Props) {
  const t = useTranslations("CineAmbientalSection");

  const mail = t("contato.email");
  const mailto = `mailto:${mail}?subject=${encodeURIComponent(
    t("cta.assunto")
  )}&body=${encodeURIComponent(
    [
      t("cta.body.l1"),
      "",
      t("cta.body.l2"),
      "",
      `${t("cta.body.escola")}:`,
      `${t("cta.body.prof")}:`,
      `${t("cta.body.tel")}:`,
      `${t("cta.body.lista")}:`,
      "",
      `${t("cta.body.obs")}:`,
    ].join("\n")
  )}`;

  const agenda = [
    { hora: t("agenda.itens.0.hora"), titulo: t("agenda.itens.0.titulo") },
    { hora: t("agenda.itens.1.hora"), titulo: t("agenda.itens.1.titulo") },
  ];

  const comoParticipar = [
    t("comoParticipar.0"),
    t("comoParticipar.1"),
    t("comoParticipar.2"),
  ];

  return (
    <section id="cine-ambiental" className={`relative isolate py-12 md:py-20 ${className}`}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-blue-100/40" />
      <div className="mx-auto max-w-[1200px] px-4">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-white/60 bg-white/80 backdrop-blur-xl shadow-xl overflow-hidden"
        >
          {/* header */}
          <div className="p-6 md:p-10 bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 text-white">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-white/15 p-3">
                <Film className="size-8" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                  {t("titulo")}
                </h2>
                <p className="mt-3 max-w-3xl text-white/90">
                  {t("descricao")}
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1">
                    <CalendarDays className="size-4" />
                    {t("data.valor")}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1">
                    <MapPin className="size-4" />
                    {t("local.titulo")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* corpo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 p-6 md:p-10">
            {/* bloco local */}
            <div className="md:col-span-1">
              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <MapPin className="size-5 text-blue-600" />
                  {t("local.label")}
                </h3>
                <p className="mt-2 text-gray-700">{t("local.titulo")}</p>
                <p className="text-gray-600">{t("local.endereco.l1")}</p>
                <p className="text-gray-600">{t("local.endereco.l2")}</p>
                <p className="text-gray-600">{t("local.endereco.cep")}</p>
              </div>

              <div className="mt-4 rounded-2xl border bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Users className="size-5 text-blue-600" />
                  {t("publico.label")}
                </h3>
                <p className="mt-2 text-gray-700">{t("publico.texto")}</p>
              </div>
            </div>

            {/* agenda */}
            <div className="md:col-span-1">
              <div className="rounded-2xl border bg-white p-5 shadow-sm h-full">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Clock className="size-5 text-blue-600" />
                  {t("agenda.label")}
                </h3>
                <ul className="mt-3 space-y-3">
                  {agenda.map((a, i) => (
                    <li key={i} className="flex items-start gap-3 rounded-xl border p-3">
                      <span className="shrink-0 rounded-lg bg-blue-50 px-2 py-1 text-blue-700 font-semibold">
                        {a.hora}
                      </span>
                      <span className="text-gray-800">{a.titulo}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* como participar + CTA */}
            <div className="md:col-span-1">
              <div className="rounded-2xl border bg-white p-5 shadow-sm h-full flex flex-col">
                <h3 className="font-semibold text-gray-900">{t("comoParticipar.label")}</h3>
                <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
                  {comoParticipar.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <div className="text-sm text-gray-600 mb-2">
                    {t("contato.label")}
                    <br />
                    <a href={`mailto:${mail}`} className="underline underline-offset-2 hover:text-blue-700">
                      {mail}
                    </a>
                  </div>

                  <Link
                    href={mailto}
                    className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700 transition"
                  >
                    <Mail className="size-5" />
                    {t("cta.botao")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
