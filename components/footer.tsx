"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  ArrowRight,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação simples de email
    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Por favor, insira um email válido");
      return;
    }

    // Simulação de sucesso
    setSubscribed(true);
    setError("");
    setEmail("");

    // Reset após 5 segundos
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  const t = useTranslations("Footer");
  return (
    <footer
      className="bg-[#0A0F70] text-white pt-12 pb-6 rounded-t-lg"
      id="footer"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1 - Contato */}
          <div>
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src="/logo-iwppo.png"
                alt="IWPPO Logo"
                width={160}
                height={50}
                className="object-contain"
              />
            </motion.div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-blue-300" />
                <span className="text-sm">contato@iwppo.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-blue-300" />
                <span className="text-sm">(82) 3215-5021</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-blue-300" />
                <div>
                  <p className="text-sm">{t("local1")}</p>
                  <p className="text-sm">{t("local2")}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">
              {t("links_rapidos_titulo")}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#inicio"
                  className="text-sm hover:text-blue-300 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t("links_rapidos.0")}
                </Link>
              </li>
              <li>
                <Link
                  href="#programacao"
                  className="text-sm hover:text-blue-300 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t("links_rapidos.1")}
                </Link>
              </li>
              <li>
                <Link
                  href="#inscricao"
                  className="text-sm hover:text-blue-300 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t("links_rapidos.2")}
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-sm hover:text-blue-300 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  {t("links_rapidos.3")}
                </Link>
              </li>
            </ul>

            <h4 className="text-lg font-semibold mt-6 mb-4 border-b border-blue-700 pb-2">
              {t("redes_sociais_titulo")}
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/projetooceanosdeplastico/"
                className="hover:text-blue-300 transition-colors p-2 bg-blue-800 rounded-full"
                aria-label="Instagram do IWPPO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.youtube.com/@OceanosDePlastico."
                className="hover:text-blue-300 transition-colors p-2 bg-blue-800 rounded-full"
                aria-label="Canal do YouTube do IWPPO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 3 - Parceiros */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">
              {t("parceiros_titulo")}
            </h4>
            <ul className="space-y-3">
              {[
                {
                  name: "CESMAC",
                  url: "https://www.cesmac.edu.br/",
                },
                { name: "CNPq", url: "https://www.cnpq.br/" },
                {
                  name: "ONU",
                  url: "https://www.un.org/decade/",
                },
                { name: "CAPES", url: "https://www.capes.gov.br/" },
              ].map((partner, index) => (
                <li key={index}>
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-blue-300 transition-colors flex items-center"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {partner.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright e Links Legais */}
        <div className="mt-12 pt-6 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200">
          <p>{t("direitos_reservados")}</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-blue-300 transition-colors">
              {t("termos_de_uso")}
            </Link>
            <Link href="#" className="hover:text-blue-300 transition-colors">
              {t("politica_de_privacidade")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
