interface SeloProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "default" | "hero"; // <- nova prop
}

export default function SeloAtitudeSustentavel({
  size = "md",
  className = "",
  variant = "default",
}: SeloProps) {
  const t = useTranslations("SeloAtitudeSustentavel");
  const params = useParams();
  const locale = (params?.locale as string) || "pt";

  const w = size === "sm" ? 100 : size === "md" ? 150 : 200;
  const h = w;

  // Define estilos conforme o variant
  const textColor =
    variant === "hero" ? "text-blue-100" : "text-blue-800";
  const buttonColor =
    variant === "hero"
      ? "bg-green-400 hover:bg-green-500 text-gray-900"
      : "bg-green-600 hover:bg-green-700 text-white";

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative flex flex-col items-center">
        <Image
          src="/Selo Sustentável (1).png"
          alt={`${t("atitude")} ${t("sustentavel")}`}
          width={w}
          height={h}
          className="object-contain"
        />
        <div className={`mt-2 text-center font-bold uppercase ${textColor}`}>
          {t("atitude")} <br /> {t("sustentavel")}
        </div>
      </div>

      <div className="mt-4 text-center max-w-sm">
        <p
          className={`text-sm ${
            variant === "hero" ? "text-blue-100" : "text-gray-700"
          }`}
        >
          {t("premiacao_texto")}
        </p>
        <Link
          href={`/${locale}/selo-sustentavel`}
          className={`inline-block mt-3 px-4 py-2 rounded-lg shadow transition-colors ${buttonColor}`}
        >
          {t("saiba_mais")}
        </Link>
      </div>
    </div>
  );
}
