"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Palestrante {
  id: string;
  nome: string;
  cargo: string;
  instituicao: string;
  foto: string;
  palestra: string;
  nacionalidade: string;
  biografia: string;
}

export default function PalestranteDetailPage({
  params
}: {
  params: { locale: string; id: string };
}) {
  const t = useTranslations("PalestrantesConfirmados");
  const data = t.raw(`palestrantes.${params.id}`);

  if (!data) {
    notFound();
  }

  const palestrante: Palestrante = {
    id: params.id,
    foto: `/palestrantes/${params.id}.jpg`,
    ...data
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href={`/${params.locale}#palestrantes`} className="text-blue-600 underline mb-4 inline-block">
        ← {t("voltar")}
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <Image
          src={palestrante.foto}
          alt={palestrante.nome}
          width={500}
          height={500}
          className="rounded-lg shadow-lg object-cover"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{palestrante.nome}</h1>
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
          <p>{palestrante.biografia}</p>
        </div>
      </div>
    </div>
  );
}
