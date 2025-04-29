"use client";

import { Handshake, SearchCheck, Users, Globe, Check } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("AboutSection");

  const highlights = [
    t("highlights.0"),
    t("highlights.1"),
    t("highlights.2"),
    t("highlights.3"),
    t("highlights.4"),
    t("highlights.5"),
  ];

  const icons = [
    <Check className="h-5 w-5 mr-3 text-[#0077B6]" />,
    <Handshake className="h-5 w-5 mr-3 text-[#0077B6]" />,
    <SearchCheck className="h-5 w-5 mr-3 text-[#0077B6]" />,
    <Users className="h-5 w-5 mr-3 text-[#0077B6]" />,
    <Globe className="h-5 w-5 mr-3 text-[#0077B6]" />,
    <Check className="h-5 w-5 mr-3 text-[#0077B6]" />,
  ];

  return (
    <main className="bg-blue-800">
      <section
        className="py-8 md:py-16 px-4 bg-white relative z-10 rounded-t-lg"
        id="sobre"
      >
        <div className="container mx-auto rounded-lg">
          <h3 className="text-[#0A0F70] font-bold text-2xl md:text-3xl mb-6 md:mb-8 text-center">
            {t("title")}
          </h3>

          {/* Primeira seção */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-6xl mx-auto mb-12 md:mb-16">
            <div className="w-full md:w-1/2">
              <h4 className="text-[#0A0F70] font-bold text-xl md:text-2xl mb-4">
                {t("section1.heading")}
              </h4>
              <p className="text-gray-700 mb-6">{t("section1.paragraph")}</p>
              <div className="space-y-3">
                {highlights.slice(0, 3).map((text, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    {icons[idx]}
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="/maceio-ponta-verde-v2.jpg"
                alt="Reunião de pesquisadores"
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-sm text-gray-500 mt-2">{t("photo_credit")}</p>
            </div>
          </div>

          {/* Segunda seção */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <img
                src="/praia-maceio.jpg"
                alt="Farol de Maceió"
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-sm text-gray-500 mt-2">{t("photo_credit")}</p>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <h4 className="text-[#0A0F70] font-bold text-xl md:text-2xl mb-4">
                {t("section2.heading")}
              </h4>
              <p className="text-gray-700 mb-6">{t("section2.paragraph")}</p>
              <div className="space-y-3">
                {highlights.slice(3).map((text, idx) => (
                  <div
                    key={idx + 3}
                    className="flex items-center text-gray-700"
                  >
                    {icons[idx + 3]}
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
