"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Calendar,
  Users,
  Info,
  MapPin,
  Menu,
  X,
  MessageCircle,
  FileText,
  Handshake,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSelector } from "./language-selector";
import { motion, AnimatePresence } from "framer-motion";

// Links principais que ficarão sempre visíveis
const mainLinks = [
  { href: "#inicio", label: "inicio", icon: Home },
  { href: "#sobre", label: "sobre", icon: Info },
];

// Links agrupados no dropdown "Evento"
const eventLinks = [
  { href: "#programacao", label: "programacao", icon: Calendar },
  { href: "#comissao", label: "comissao", icon: Users },
];

// Links agrupados no dropdown "Mais"
const moreLinks = [
  { href: "#localizacao", label: "localizacao", icon: MapPin },
  { href: "#inscricao", label: "inscricao", icon: FileText },
  { href: "#parceiros", label: "parceiros", icon: Handshake },
];

// Lista completa de links para uso na versão mobile
const links = [...mainLinks, ...eventLinks, ...moreLinks];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const t = useTranslations("Navbar");

  // Fechar dropdown quando clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && dropdownRefs.current[openDropdown]) {
        const dropdownElement = dropdownRefs.current[openDropdown];
        if (
          dropdownElement &&
          !dropdownElement.contains(event.target as Node)
        ) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown]);

  // Detectar scroll para mudar o estilo do navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Detectar seção ativa baseada na posição de scroll
      const sections = links.map((link) => link.href.replace("#", ""));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  // Verificar se um link dentro de um dropdown está ativo
  const isDropdownActive = (dropdownLinks: typeof mainLinks) => {
    return dropdownLinks.some(
      (link) => link.href.replace("#", "") === activeSection
    );
  };

  // Renderizar um dropdown
  const renderDropdown = (
    id: string,
    title: string,
    dropdownLinks: typeof mainLinks
  ) => {
    const isActive = isDropdownActive(dropdownLinks);
    return (
      <div ref={(el) => {
        dropdownRefs.current[id] = el;
      }} className="relative">
        <button
          className={`flex items-center px-3 py-2 rounded-md transition-colors hover:bg-blue-700 ${
            openDropdown === id || isActive ? "bg-blue-700" : ""
          }`}
          onClick={() => toggleDropdown(id)}
          aria-expanded={openDropdown === id}
          aria-haspopup="true"
        >
          <span className="text-white mr-1">{t(title)}</span>
          {openDropdown === id ? (
            <ChevronUp className="h-4 w-4 text-white" />
          ) : (
            <ChevronDown className="h-4 w-4 text-white" />
          )}
        </button>

        <AnimatePresence>
          {openDropdown === id && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-1 w-48 bg-blue-800 rounded-md shadow-lg py-1 z-50"
            >
              {dropdownLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center px-4 py-2 text-sm text-white hover:bg-blue-700 ${
                    activeSection === label ? "bg-blue-700" : ""
                  }`}
                  onClick={() => {
                    setActiveSection(label);
                    setOpenDropdown(null);
                  }}
                >
                  {Icon && <Icon className="h-4 w-4 mr-2" />}
                  <span>{t(label)}</span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 shadow-md"
        initial={{ y: -100 }}
        animate={{
          y: 0,
          backgroundColor: isScrolled ? "#0A0F70" : "rgba(10, 15, 112, 0.9)",
          backdropFilter: isScrolled ? "blur(0px)" : "blur(10px)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-3">
          <Link href="#inicio" className="flex items-center">
            <Image
              src="/logo-iwppo.png"
              alt="IWPPO Logo"
              width={220}
              height={0}
              className="object-contain"
            />
          </Link>

          <div className="flex items-center gap-6">
            <ul className="flex flex-wrap justify-center gap-4 text-white">
              {/* Links principais sempre visíveis */}
              {mainLinks.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center px-3 py-2 rounded-md transition-colors hover:bg-blue-700 ${
                      activeSection === label ? "bg-blue-700" : ""
                    }`}
                    onClick={() => setActiveSection(label)}
                  >
                    {Icon && <Icon className="h-4 w-4 mr-2" />}
                    <span>{t(label)}</span>
                  </Link>
                </li>
              ))}

              {/* Dropdown para links de Evento */}
              <li>{renderDropdown("event", "evento", eventLinks)}</li>

              {/* Dropdown para links adicionais */}
              <li>{renderDropdown("more", "mais", moreLinks)}</li>
            </ul>

            <LanguageSelector />
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar - Mantido exatamente como estava */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        {/* Mobile Bottom Nav */}
        <motion.nav
          className="bg-[#0A0F70] text-white shadow-lg px-4 py-3"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <Link href="#inicio" className="flex items-center">
              <Image
                src="/logo-iwppo.png"
                alt="IWPPO Logo"
                width={120}
                height={0}
                className="object-contain h-8"
              />
            </Link>

            <div className="flex items-center gap-3">
              <LanguageSelector />

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-full bg-blue-700 text-white"
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </motion.nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-[#0A0F70] z-40 flex flex-col"
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex-1 overflow-y-auto py-16 px-6">
                <ul className="flex flex-col gap-4 text-white">
                  {links.map(({ href, label, icon: Icon }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`flex items-center px-4 py-3 rounded-md text-lg transition-colors ${
                          activeSection === label
                            ? "bg-blue-700"
                            : "hover:bg-blue-800"
                        }`}
                        onClick={() => {
                          setActiveSection(label);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {Icon && <Icon className="h-6 w-6 mr-3" />}
                        <span>{t(label)}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
