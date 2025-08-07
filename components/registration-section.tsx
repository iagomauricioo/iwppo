"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Award,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Users,
  Ticket,
} from "lucide-react";
import Link from "next/link";

export default function RegistrationSection() {
  const t = useTranslations("RegistrationSection");
  const tPlans = useTranslations("plans");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: "graduacao",
      title: "Aluno de Graduação",
      price: "R$ 30,00",
      features: [
        tPlans("features.access_lectures"),
        tPlans("features.digital_material"),
        tPlans("features.participation_certificate"),
      ],
      icon: <Users className="h-6 w-6" />,
      color: "bg-blue-500",
      deadline: "Até 15/05/2025",
    },
    {
      id: "post-graduate",
      title: "Aluno de Pós-Graduação",
      price: "R$ 70,00",
      features: [
        tPlans("features.access_lectures"),
        tPlans("features.printed_material"),
        tPlans("features.participation_certificate"),
        tPlans("features.priority_workshops"),
      ],
      icon: <Award className="h-6 w-6" />,
      color: "bg-blue-700",
      deadline: "Até 15/05/2025",
      recommended: true,
    },
    {
      id: "teacher",
      title: "Professor de Ensino Superior / Pesquisador",
      price: "R$ 100,00",
      features: [
        tPlans("features.access_lectures"),
        tPlans("features.printed_material"),
        tPlans("features.participation_certificate"),
        tPlans("features.priority_workshops"),
      ],
      icon: <Award className="h-6 w-6" />,
      color: "bg-blue-700",
      deadline: "Até 15/05/2025",
      recommended: true,
    },
    {
      id: "basic-education-teacher",
      title: "Professor de Educação Básica",
      price: "Gratuito",
      features: [
        tPlans("features.access_lectures"),
        tPlans("features.digital_material"),
        tPlans("features.participation_certificate"),
        tPlans("features.presentation_certificate"),
      ],
      icon: <Ticket className="h-6 w-6" />,
      color: "bg-blue-600",
      deadline: "Enquanto houver vagas",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50" id="inscricao">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-blue-900 font-bold text-3xl md:text-4xl mb-4">{t("title")}</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto mb-6" />
          <p className="text-gray-700 text-lg">{t("description")}</p>
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto mb-12 border border-blue-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start">
              <Calendar className="text-blue-600 h-6 w-6 mt-1" />
              <div className="ml-4">
                <h3 className="font-semibold text-blue-900 text-lg">{t("deadline_title")}</h3>
                <p className="text-gray-600">{t("deadline_date")}</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="text-blue-600 h-6 w-6 mt-1" />
              <div className="ml-4">
                <h3 className="font-semibold text-blue-900 text-lg">{t("event_date_title")}</h3>
                <p className="text-gray-600">{t("date")}</p>
              </div>
            </div>

            <div className="flex items-start">
              <AlertCircle className="text-blue-600 h-6 w-6 mt-1" />
              <div className="ml-4">
                <h3 className="font-semibold text-blue-900 text-lg">{t("limited_spots_title")}</h3>
                <p className="text-gray-600">{t("limited_spots_text")}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => {
            const isSelected = selectedPlan === plan.id;
            return (
              <motion.div
                key={plan.id}
                className={`bg-white rounded-xl shadow-md overflow-hidden border ${
                  isSelected ? "border-blue-500 ring-2 ring-blue-300" : "border-gray-200"
                } ${plan.recommended ? "md:-mt-4 md:mb-4" : ""} relative`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    {tPlans("recommended")}
                  </div>
                )}

                <div className={`${plan.color} p-4 text-white`}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl">{plan.title}</h3>
                    {plan.icon}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-blue-900">{plan.price}</span>
                  </div>

                  <ul className="mb-6 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="text-sm text-gray-500 mb-6">
                    {tPlans("deadline", { date: plan.deadline })}
                  </div>

                  <button
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                    }`}
                    onClick={() => setSelectedPlan(plan.id)}
                    aria-pressed={isSelected}
                  >
                    {isSelected ? tPlans("selected") : tPlans("select")}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="https://doity.com.br/iwppo"
            className={`inline-flex items-center px-8 py-4 rounded-full font-bold text-lg transition-all ${
              selectedPlan
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
            onClick={(e) => {
              if (!selectedPlan) {
                e.preventDefault();
                alert(tPlans("select_plan_alert"));
              }
            }}
          >
            {t("register_button")}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>

          {!selectedPlan && (
            <p className="text-sm text-gray-500 mt-3">
              {tPlans("select_plan_message")}
            </p>
          )}
        </motion.div>

        <motion.div
          className="mt-16 max-w-3xl mx-auto bg-blue-50 rounded-lg p-6 border border-blue-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-blue-900 font-semibold text-lg mb-3">
            {t("additional_info_title")}
          </h3>
          <ul className="space-y-2 text-gray-700">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <span>{t(`additional_info_${i}`)}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
