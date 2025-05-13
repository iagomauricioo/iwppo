"use client";

import { useTranslations } from "next-intl";
import ProgramacaoItem from "./programacao-item";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function ProgramacaoSection() {
  const t = useTranslations("ProgramacaoPage");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Processar os dados de dias e adicionar datas para cada evento
  const days = t.raw("days").map((day: any) => {
    // Adicionar a data do dia a cada evento para facilitar a filtragem
    const eventsWithDates = day.events.map((event: any) => ({
      ...event,
      date: day.date, // Adicionar a data do dia ao evento
    }));

    return {
      ...day,
      events: eventsWithDates,
    };
  });

  return (
    <motion.section
      ref={ref}
      className="py-12 md:py-16 px-4"
      id="programacao"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: "linear-gradient(135deg, #A5DEF1 0%, #CAF0F8 100%)",
      }}
    >
      <ProgramacaoItem days={days} />
    </motion.section>
  );
}
