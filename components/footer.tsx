"use client";

import Image from "next/image";
import { Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <main className="bg-[#0A0F70]" id="footer">
      <footer className="bg-[#0A0F70] text-white p-5 pb-32 md:py-12 rounded-t-lg">
        <div className="md:container md:mx-auto">
          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="flex items-center mb-3">
              <Image
                src="/logo-iwppo.png"
                alt="IWPPO Logo"
                width={120}
                height={40}
                className="h-8 object-contain"
              />
            </div>

            <p className="text-xs mb-4">
              II Workshop Internacional sobre a Poluição Plástica nos Oceanos
            </p>

            <div className="flex justify-between mb-4">
              <div>
                <h4 className="text-sm font-semibold mb-2">Links</h4>
                <ul className="text-xs space-y-1">
                  <li>
                    <a href="#sobre" className="hover:text-ocean-pale">
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a href="#programacao" className="hover:text-ocean-pale">
                      Objetivos
                    </a>
                  </li>
                  <li>
                    <a href="#comissao" className="hover:text-ocean-pale">
                      Participantes
                    </a>
                  </li>
                  <li>
                    <a href="#contato" className="hover:text-ocean-pale">
                      Contato
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold mb-2">Redes Sociais</h4>
                <div className="flex space-x-3">
                  <a href="#" className="hover:text-ocean-pale">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="hover:text-ocean-pale">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="hover:text-ocean-pale">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <p className="text-sm mb-2">Email: contato@iwppo.com</p>
              <p className="text-sm">Tel: (82) 3215-5000</p>
              <p className="text-sm mt-2">Centro Universitário Cesmac</p>
              <p className="text-sm">Alagoas - Maceió</p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300">
                  <Facebook size={24} />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <Twitter size={24} />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <Instagram size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Parceiros</h4>
              <ul className="text-sm space-y-2">
                <li>Centro Universitário Cesmac</li>
                <li>CNPq</li>
                <li>ONU Década dos Oceanos</li>
                <li>CAPES</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="p-2 rounded-l text-gray-800 w-full text-sm"
                />
                <button className="bg-[#0077B6] p-2 rounded-r hover:bg-[#0066A0]">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Copyright - comum a ambos */}
          <div className="text-xs text-center border-t border-blue-800 pt-4 md:mt-12 md:pt-6">
            © 2025 II IWPPO. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
