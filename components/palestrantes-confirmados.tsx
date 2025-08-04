"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

interface Palestrante {
  id: string;
  nome: string;
  cargo: string;
  instituicao: string;
  foto: string;
  palestra: string;
  nacionalidade: string;
  colorIndex?: number;
}

export default function PalestrantesConfirmados() {
  const [searchTerm, setSearchTerm] = useState("");
  const t = useTranslations("PalestrantesConfirmados");
  const params = useParams();
  const locale = (params?.locale as string) || "pt";

  const palestrantes: Palestrante[] = [
    {
      id: "robson-santos",
      nome: t("palestrantes.robson-santos.nome"),
      cargo: t("palestrantes.robson-santos.cargo"),
      instituicao: t("palestrantes.robson-santos.instituicao"),
      foto: "/palestrantes/robson-santos.jpg",
      palestra: t("palestrantes.robson-santos.palestra"),
      nacionalidade: t("palestrantes.robson-santos.nacionalidade"),
    },
    {
      id: "katia-viana",
      nome: t("palestrantes.katia-viana.nome"),
      cargo: t("palestrantes.katia-viana.cargo"),
      instituicao: t("palestrantes.katia-viana.instituicao"),
      foto: "/palestrantes/katia-viana.jpg",
      palestra: t("palestrantes.katia-viana.palestra"),
      nacionalidade: t("palestrantes.katia-viana.nacionalidade"),
    },
    {
      id: "fernando-lopez",
      nome: t("palestrantes.fernando-lopez.nome"),
      cargo: t("palestrantes.fernando-lopez.cargo"),
      instituicao: t("palestrantes.fernando-lopez.instituicao"),
      foto: "/palestrantes/fernando-lopez.jpg",
      palestra: t("palestrantes.fernando-lopez.palestra"),
      nacionalidade: t("palestrantes.fernando-lopez.nacionalidade"),
    },
    {
      id: "scott-wilson",
      nome: t("palestrantes.scott-wilson.nome"),
      cargo: t("palestrantes.scott-wilson.cargo"),
      instituicao: t("palestrantes.scott-wilson.instituicao"),
      foto: "/palestrantes/scott-wilson.jpg",
      palestra: t("palestrantes.scott-wilson.palestra"),
      nacionalidade: t("palestrantes.scott-wilson.nacionalidade"),
    },
    {
      id: "Fernando-miguel",
      nome: t("palestrantes.Fernando-miguel.nome"),
      cargo: t("palestrantes.Fernando-miguel.cargo"),
      instituicao: t("palestrantes.Fernando-miguel.instituicao"),
      foto: "/palestrantes/Fernando-miguel.jpg",
      palestra: t("palestrantes.Fernando-miguel.palestra"),
      nacionalidade: t("palestrantes.Fernando-miguel.nacionalidade"),
    },
    {
      id: "Helena-fernandez",
      nome: t("palestrantes.Helena-fernandez.nome"),
      cargo: t("palestrantes.Helena-fernandez.cargo"),
      instituicao: t("palestrantes.Helena-fernandez.instituicao"),
      foto: "/palestrantes/Helena-fernandez.jpg",
      palestra: t("palestrantes.Helena-fernandez.palestra"),
      nacionalidade: t("palestrantes.Helena-fernandez.nacionalidade"),
    },
    {
      id: "cristiane-siqueira",
      nome: t("palestrantes.cristiane-siqueira.nome"),
      cargo: t("palestrantes.cristiane-siqueira.cargo"),
      instituicao: t("palestrantes.cristiane-siqueira.instituicao"),
      foto: "/palestrantes/cristiane-siqueira.jpg",
      palestra: t("palestrantes.cristiane-siqueira.palestra"),
      nacionalidade: t("palestrantes.cristiane-siqueira.nacionalidade"),
    },
    {
      id: "Biagio",
      nome: t("palestrantes.Biagio.nome"),
      cargo: t("palestrantes.Biagio.cargo"),
      instituicao: t("palestrantes.Biagio.instituicao"),
      foto: "/palestrantes/Biagio.jpg",
      palestra: t("palestrantes.Biagio.palestra"),
      nacionalidade: t("palestrantes.Biagio.nacionalidade"),
    },
    {
      id: "federico-sulis",
      nome: t("palestrantes.federico-sulis.nome"),
      cargo: t("palestrantes.federico-sulis.cargo"),
      instituicao: t("palestrantes.federico-sulis.instituicao"),
      foto: "/palestrantes/federico-sulis.jpg",
      palestra: t("palestrantes.federico-sulis.palestra"),
      nacionalidade: t("palestrantes.federico-sulis.nacionalidade"),
    },
    {
      id: "Marcell",
      nome: t("palestrantes.Marcell.nome"),
      cargo: t("palestrantes.Marcell.cargo"),
      instituicao: t("palestrantes.Marcell.instituicao"),
      foto: "/palestrantes/Marcell.jpg",
      palestra: t("palestrantes.Marcell.palestra"),
      nacionalidade: t("palestrantes.Marcell.nacionalidade"),
    },
  ];

  const filteredPalestrantes = palestrantes.filter(
    (palestrante) =>
      palestrante.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      palestrante.instituicao.toLowerCase().includes(searchTerm.toLowerCase()) ||
      palestrante.palestra.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section
      className="py-16 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-100 text-white"
      id="palestrantes"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-2 text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t("title1")} <span className="text-blue-200">{t("title2")}</span>
          </motion.h2>
          <motion.p
            className="text-lg text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t("descricao")}
          </motion.p>
        </div>

        {/* Barra de pesquisa */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder={t("placeholder")}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-blue-950/80 border border-blue-600 rounded-full py-3 px-5 pl-12 text-white placeholder-blue-300/70 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search
              className="absolute left-4 top-3.5 text-blue-200"
              size={18}
            />
          </div>
        </div>

        {/* Grade de palestrantes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {filteredPalestrantes.map((palestrante, index) => {
            const cores = [
              { bg: "bg-blue-950", text: "text-white", border: "border-blue-800" },
              { bg: "bg-blue-900", text: "text-white", border: "border-blue-700" },
              { bg: "bg-blue-800", text: "text-white", border: "border-blue-600" },
              { bg: "bg-blue-700", text: "text-white", border: "border-blue-500" },
              { bg: "bg-blue-600", text: "text-white", border: "border-blue-400" },
              { bg: "bg-blue-500", text: "text-white", border: "border-blue-300" },
              { bg: "bg-blue-400", text: "text-blue-950", border: "border-blue-200" },
              { bg: "bg-blue-300", text: "text-blue-950", border: "border-blue-100" },
              { bg: "bg-blue-200", text: "text-blue-950", border: "border-blue-50" },
            ];

            const corAtual = cores[index % cores.length];

            return (
              <motion.div
                key={palestrante.id}
                className={`rounded-lg overflow-hidden shadow-lg ${corAtual.bg}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{
                  y: -5,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 },
                }}
              >
                {/* Foto do palestrante com link */}
                <div className="relative h-64 overflow-hidden">
                  <Link href={`/${locale}/palestrantes/${palestrante.id}`}>
                    <Image
                      src={palestrante.foto || "/placeholder.svg"}
                      alt={palestrante.nome}
                      fill
                      className="object-cover object-center cursor-pointer hover:opacity-90 transition"
                    />
                  </Link>
                </div>

                {/* Informações do palestrante */}
                <div className="p-4">
                  <h3 className={`text-xl font-bold ${corAtual.text}`}>
                    {palestrante.nome}
                  </h3>
                  <p className={`${corAtual.text} opacity-90 font-medium`}>
                    {palestrante.cargo}
                  </p>
                  <p className={`${corAtual.text} opacity-80 text-sm mb-1`}>
                    {palestrante.instituicao}
                  </p>
                  <p className={`${corAtual.text} opacity-80 text-sm mb-3`}>
                    {palestrante.nacionalidade}
                  </p>

                  <div className={`pt-3 border-t ${corAtual.border}`}>
                    <p className={`text-sm font-medium ${corAtual.text} opacity-80`}>
                      {t("titulo_palestra")}:
                    </p>
                    <p className={`${corAtual.text} font-semibold`}>
                      {palestrante.palestra}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mensagem quando não há resultados */}
        {filteredPalestrantes.length === 0 && (
          <div className="text-center py-10">
            <p className="text-blue-100 text-lg">
              Nenhum palestrante encontrado para "{searchTerm}"
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-3 text-blue-200 hover:text-blue-50 transition-colors"
            >
              Limpar busca
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
