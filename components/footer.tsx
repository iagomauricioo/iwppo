"use client";

import Image from "next/image";
import {
  Instagram,
  ArrowRight,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <main className="bg-[#0A0F70]" id="footer">
      <footer className="bg-[#0A0F70] text-white p-5 pb-12 md:py-12 rounded-t-lg">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Coluna 1 - Contato */}
            <div>
              <div className="flex items-center mb-4 md:mb-6">
                <Image
                  src="/logo-iwppo.png"
                  alt="IWPPO Logo"
                  width={120}
                  height={40}
                  className="h-8 object-contain"
                />
              </div>
              <p className="text-sm mb-2">Email: contato@iwppo.com</p>
              <p className="text-sm">Tel: (82) XXXX-XXXX</p>
              <p className="text-sm mt-2">Centro Universitário Cesmac</p>
              <p className="text-sm">Alagoas - Maceió</p>
            </div>

            {/* Coluna 2 - Redes Sociais */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/projetooceanosdeplastico/"
                  className="hover:text-blue-300 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.youtube.com/@OceanosDePlastico."
                  className="hover:text-blue-300 transition-colors"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>

            {/* Coluna 3 - Parceiros */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Parceiros</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <a
                    href="https://www.cesmac.edu.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition-colors"
                  >
                    Centro Universitário Cesmac
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.cnpq.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition-colors"
                  >
                    CNPq
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.un.org/decade/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition-colors"
                  >
                    ONU Década dos Oceanos
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.capes.gov.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-300 transition-colors"
                  >
                    CAPES
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 4 - Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="p-2 rounded-l text-gray-800 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  className="bg-[#0077B6] p-2 rounded-r hover:bg-[#0066A0] transition-colors"
                  aria-label="Assinar newsletter"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs text-center border-t border-blue-800 pt-6 mt-8">
            © 2025 II IWPPO. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
