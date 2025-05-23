"use client";

import { Handshake, SearchCheck, Users, Globe, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { 
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <main>
      <section
        ref={ref}
        className="py-8 md:py-16 px-4 bg-gradient-to-b from-white to-blue-200 relative z-10 rounded-t-lg"
        id="sobre"
      >
        <motion.div 
          className="container mx-auto rounded-lg"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-[#0A0F70] font-bold text-2xl md:text-3xl mb-6 md:mb-8 text-center"
          >
            {t("title")}
          </motion.h3>

          {/* Primeira seção */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-6xl mx-auto mb-12 md:mb-16">
            <motion.div 
              variants={itemVariants}
              className="w-full md:w-1/2"
            >
              <h4 className="text-[#0A0F70] font-bold text-xl md:text-2xl mb-4">
                {t("section1.heading")}
              </h4>
              <p className="text-gray-700 mb-6">{t("section1.paragraph")}</p>
              <div className="space-y-3">
                {highlights.slice(0, 3).map((text, idx) => (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className="flex items-center text-gray-700"
                  >
                    {icons[idx]}
                    <span>{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div 
              variants={imageVariants}
              className="w-full md:w-1/2"
            >
              <img
                src="/maceio-ponta-verde-v2.jpg"
                alt="Reunião de pesquisadores"
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-sm text-gray-500 mt-2">{t("photo_credit")}</p>
            </motion.div>
          </div>

          {/* Segunda seção */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-6xl mx-auto">
            <motion.div 
              variants={imageVariants}
              className="w-full md:w-1/2 order-2 md:order-1"
            >
              <img
                src="/praia-maceio.jpg"
                alt="Farol de Maceió"
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-sm text-gray-500 mt-2">{t("photo_credit")}</p>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="w-full md:w-1/2 order-1 md:order-2"
            >
              <h4 className="text-[#0A0F70] font-bold text-xl md:text-2xl mb-4">
                {t("section2.heading")}
              </h4>
              <p className="text-gray-700 mb-6">{t("section2.paragraph")}</p>
              <div className="space-y-3">
                {highlights.slice(3).map((text, idx) => (
                  <motion.div
                    key={idx + 3}
                    variants={itemVariants}
                    className="flex items-center text-gray-700"
                  >
                    {icons[idx + 3]}
                    <span>{text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
