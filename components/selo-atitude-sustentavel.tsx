"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface SeloProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function SeloAtitudeSustentavel({
  size = "md",
  className = "",
}: SeloProps) {
  const t = useTranslations("SeloAtitudeSustentavel");

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Conteúdo original do selo */}
      <div className="relative flex flex-col items-center">
        <Image
          src="/Selo Sustentável (1).png"
          alt={`${t("atitude")} ${t("sustentavel")}`}
          width={size === "sm" ? 100 : size === "md" ? 150 : 200}
          height={size === "sm" ? 100 : size === "md" ? 150 : 200}
          className="object-contain"
        />
        <div className="mt-2 text-center font-bold text-blue-800 uppercase">
          {t("atitude")} <br /> {t("sustentavel")}
        </div>
      </div>

      {/* Nova menção à competição */}
      <div className="mt-4 text-center max-w-sm">
        <p className="text-gray-700 text-sm">
          Participe também da competição de vídeos do{" "}
          <span className="font-semibold">Selo de Atitude Sustentável</span> e
          mostre suas ideias para um futuro mais verde.
        </p>
        <Link
          href="selo-sustentavel/"
          className="inline-block mt-3 px-4 py-2 bg-green-600 text-white text-sm rounded-lg shadow hover:bg-green-700 transition-colors"
        >
          Saiba mais
        </Link>
      </div>
    </div>
  );
}
