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
                  <p className="text-sm">Centro Universitário Cesmac</p>
                  <p className="text-sm">Alagoas - Maceió</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#inicio"
                  className="text-sm hover:text-blue-300 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#programacao"
                  className="text-sm hover:text-blue-300 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Programação
                </Link>
              </li>
              <li>
                <Link
                  href="#inscricao"
                  className="text-sm hover:text-blue-300 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Inscrição
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-sm hover:text-blue-300 transition-colors flex items-center"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Contato
                </Link>
              </li>
            </ul>

            <h4 className="text-lg font-semibold mt-6 mb-4 border-b border-blue-700 pb-2">
              Redes Sociais
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
              Parceiros
            </h4>
            <ul className="space-y-3">
              {[
                {
                  name: "Centro Universitário Cesmac",
                  url: "https://www.cesmac.edu.br/",
                },
                { name: "CNPq", url: "https://www.cnpq.br/" },
                {
                  name: "ONU Década dos Oceanos",
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

          {/* Coluna 4 - Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">
              Newsletter
            </h4>
            <p className="text-sm mb-4">
              Receba atualizações sobre o evento e novidades diretamente no seu
              email.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu email"
                  className="p-2 rounded-l text-gray-800 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Seu endereço de email"
                />
                <button
                  type="submit"
                  className="bg-[#0077B6] p-2 rounded-r hover:bg-[#0066A0] transition-colors"
                  aria-label="Assinar newsletter"
                >
                  <ArrowRight size={20} />
                </button>
              </div>

              {error && <p className="text-red-400 text-xs">{error}</p>}
              {subscribed && (
                <motion.p
                  className="text-green-400 text-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Obrigado por se inscrever!
                </motion.p>
              )}
            </form>

            <div className="mt-6 text-xs">
              <p>
                Ao se inscrever, você concorda com nossa{" "}
                <Link href="#" className="text-blue-300 hover:underline">
                  Política de Privacidade
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Copyright e Links Legais */}
        <div className="mt-12 pt-6 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center text-xs text-blue-200">
          <p>© 2025 II IWPPO. Todos os direitos reservados.</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-blue-300 transition-colors">
              Termos de Uso
            </Link>
            <Link href="#" className="hover:text-blue-300 transition-colors">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
