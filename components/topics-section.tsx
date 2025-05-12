"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  FlaskRoundIcon as Flask,
  Recycle,
  BookOpen,
  Users,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function TopicsSection() {
  const t = useTranslations("TopicsSection");
  const carouselRef = useRef<HTMLDivElement>(null);

  // Definir os tópicos com seus ícones e chaves de tradução
  const topics = [
    {
      icon: Flask,
      titleKey: "items.research.title",
      descriptionKey: "items.research.description",
    },
    {
      icon: Recycle,
      titleKey: "items.circular.title",
      descriptionKey: "items.circular.description",
    },
    {
      icon: Globe,
      titleKey: "items.cooperation.title",
      descriptionKey: "items.cooperation.description",
    },
    {
      icon: BookOpen,
      titleKey: "items.education.title",
      descriptionKey: "items.education.description",
    },
    {
      icon: Users,
      titleKey: "items.community.title",
      descriptionKey: "items.community.description",
    },
  ];

  // Duplicar os tópicos para criar o efeito de carrossel infinito
  const allTopics = [...topics, ...topics];

  return (
    <section
      className="py-16 bg-[#caf0f8] rounded-lg overflow-hidden"
      id="topicos-principais"
    >
      <div className="container mx-auto">
        <h3 className="text-[#0A0F70] font-bold text-3xl mb-8 text-center">
          {t("title")}
        </h3>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#caf0f8] to-transparent z-10" />

          <div className="overflow-hidden" ref={carouselRef}>
            <motion.div
              className="flex gap-8 py-4"
              animate={{
                x: [0, -1500],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {allTopics.map((topic, index) => {
                const Icon = topic.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[300px] bg-white rounded-lg shadow-md p-8 flex flex-col items-center"
                  >
                    <Icon className="h-12 w-12 text-[#0077B6] mb-4" />
                    <h4 className="text-[#0A0F70] font-bold text-xl mb-2 text-center">
                      {t(topic.titleKey)}
                    </h4>
                    <p className="text-gray-700 text-center">
                      {t(topic.descriptionKey)}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#caf0f8] to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}
