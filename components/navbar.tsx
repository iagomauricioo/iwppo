"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, Calendar, Users, Info, MapPin } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { useTranslations } from "next-intl";
import LanguageSelector from "./language-selector";

const links = [
  { href: "#inicio", label: "Início", icon: Home },
  { href: "#sobre", label: "Sobre", icon: Info },
  { href: "#localizacao", label: "Localização", icon: MapPin },
  { href: "#programacao", label: "Programação", icon: Calendar },
  { href: "#comissao", label: "Comissão", icon: Users },
  { href: "#inscricao", label: "Inscrição" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = useTranslations("Navbar");
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-[#0A0F70] text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-3">
          <Image
            src="/logo-iwppo.png"
            alt="IWPPO Logo"
            width={220}
            height={0}
            className="object-contain"
          />
          <ul className="flex flex-wrap justify-center gap-4 text-base md:text-lg">
            <li>
              <Link href="#inicio" className="hover:underline">
                {t("inicio")}
              </Link>
            </li>
            <li>
              <Link href="#sobre" className="hover:underline">
                {t("sobre")}
              </Link>
            </li>
            <li>
              <Link href="#localizacao" className="hover:underline">
                {t("localizacao")}
              </Link>
            </li>
            <li>
              <Link href="#programacao" className="hover:underline">
                {t("programacao")}
              </Link>
            </li>
            <li>
              <Link href="#comissao" className="hover:underline">
                {t("comissao")}
              </Link>
            </li>
            <li>
              <Link href="#inscricao" className="hover:underline">
                {t("inscricao")}
              </Link>
            </li>
            <li>
              <Link href="#contato" className="hover:underline">
                {t("contato")}
              </Link>
            </li>
            <LanguageSelector />
          </ul>
        </div>
      </nav>
      {/* Mobile Navbar */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className={`bg-white rounded-full shadow-lg transition-all duration-300 ${
            isScrolled ? "w-auto px-6" : "w-11/12 px-4"
          }`}
        >
          <ul className="flex items-center justify-between py-3 text-ocean-regular">
            {links.slice(0, 4).map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex flex-col items-center px-3 hover:text-blue-700 transition-colors"
                >
                  {Icon && <Icon className="h-6 w-6" />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
