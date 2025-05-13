"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Droplet,
  Coffee,
  Pen,
  BookOpen,
  ShoppingBag,
  Globe,
} from "lucide-react";
import SeloSustentavel from "./selo-atitude-sustentavel";
import { useTranslations } from "next-intl";

export default function ZeroResiduo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animação de ondulação para o fundo
  const waveVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  // Animação para os ícones
  const iconVariants = {
    hidden: { scale: 0, rotate: -30, opacity: 0 },
    visible: (i: number) => ({
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        delay: 0.3 + i * 0.2,
        duration: 0.8,
      },
    }),
  };

  const t  = useTranslations("ZeroResiduo");
  
  // Lista de ícones com seus componentes e descrições
  const items = [
    { icon: Droplet, text: t("items.0"), color: "text-blue-600" },
    { icon: Coffee, text: t("items.1"), color: "text-blue-700" },
    { icon: Pen, text: t("items.2"), color: "text-blue-500" },
    { icon: BookOpen, text: t("items.3"), color: "text-blue-600" },
    { icon: ShoppingBag, text: t("items.4"), color: "text-blue-700" },
  ];

  return (
    <section
      ref={ref}
      className="relative w-full py-16 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #CAF0F8 0%, #90E0EF 100%)`,
      }}
    >
      {/* Ondas decorativas animadas */}
      <div className="absolute inset-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,100 C300,300 600,50 1200,100 L1200,800 L0,800 Z"
            fill="#0077B6"
            variants={waveVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
          <motion.path
            d="M0,200 C500,400 800,100 1200,200 L1200,800 L0,800 Z"
            fill="#0096C7"
            variants={waveVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
          />
        </svg>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center justify-center mb-8">
            <motion.h2
              className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-blue-900"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("title")}
            </motion.h2>

            {/* Selo posicionado ao lado do título em desktop e abaixo em mobile */}
            <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 w-full">
              <motion.p
                className="mb-0 text-xl text-blue-800 md:flex-1 md:text-right"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {t("subtitle")}
              </motion.p>

              {/* Selo */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: 0.8,
                }}
                className="md:flex-shrink-0"
              >
                <SeloSustentavel size="md" className="mt-6 md:mt-0" />
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-12 sm:grid-cols-3 md:grid-cols-5">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                variants={iconVariants}
                custom={index}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-white shadow-md">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <p className="text-sm font-medium text-blue-900">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{
              duration: 0.8,
              delay: 1.2,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-blue-700 rounded-full shadow-lg hover:bg-blue-800 transition-colors">
              <Globe className="w-5 h-5 mr-2" />
              Salve o Planeta!
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Partículas flutuantes */}
      {isInView &&
        Array.from({ length: 15 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-3 h-3 rounded-full bg-white opacity-60"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: 0,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              scale: [0, Math.random() * 0.8 + 0.2],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              delay: Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
    </section>
  );
}
