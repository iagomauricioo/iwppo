"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, Calendar, Users, Info } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

const links = [
  { href: "#inicio", label: "Início", icon: Home },
  { href: "#sobre", label: "Sobre", icon: Info },
  { href: "#programacao", label: "Programação", icon: Calendar },
  { href: "#comissao", label: "Comissão", icon: Users },
  { href: "#inscricao", label: "Inscrição" },
  { href: "#contato", label: "Contato" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:flex fixed top-0 left-0 right-0 z-50 bg-[#0A0F70] text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-3">
          <Image src="/logo-iwppo.png" alt="IWPPO Logo" width={120} height={40} className="h-10 object-contain" />
          <ul className="flex space-x-6 text-sm font-medium">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-blue-300 transition-colors duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
        <nav
          className={`bg-white rounded-full shadow-lg transition-all duration-300 ${isScrolled ? "w-auto px-6" : "w-11/12 px-4"
            }`}
        >
          
          <ul className="flex items-center justify-between py-3 text-ocean-regular">
            {links.slice(0, 4).map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <Link href={href} className="flex flex-col items-center px-3 hover:text-blue-700 transition-colors">
                  {Icon && <Icon className="h-6 w-6" />}
                  <span className="text-xs mt-1">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
