"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, Calendar, Users, Info } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Desktop Navbar
  if (!isMobile) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F70] text-white">
        <div className="container mx-auto flex justify-between items-center px-6 py-3">
          <div className="flex items-center">
            <Image src="/logo-iwppo.png" alt="IWPPO Logo" width={120} height={40} className="h-10 object-contain" />
          </div>
          <ul className="flex space-x-8">
            <li>
              <Link href="#inicio" className="hover:text-blue-300">
                Início
              </Link>
            </li>
            <li>
              <Link href="#sobre" className="hover:text-blue-300">
                Sobre
              </Link>
            </li>
            <li>
              <Link href="#programacao" className="hover:text-blue-300">
                Programação
              </Link>
            </li>
            <li>
              <Link href="#palestrantes" className="hover:text-blue-300">
                Palestrantes
              </Link>
            </li>
            <li>
              <Link href="#inscricao" className="hover:text-blue-300">
                Inscrição
              </Link>
            </li>
            <li>
              <Link href="#contato" className="hover:text-blue-300">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }

  // Mobile Navbar
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={`bg-white rounded-full shadow-lg transition-all duration-300 ${isScrolled ? "w-auto px-6" : "w-11/12 px-4"}`}
      >
        <ul className="flex items-center justify-between py-3 text-ocean-regular">
          <li>
            <Link href="#inicio" className="flex flex-col items-center px-4">
              <Home className="h-6 w-6" />
              <span className="text-xs mt-1">Início</span>
            </Link>
          </li>
          <li>
            <Link href="#programacao" className="flex flex-col items-center px-4">
              <Calendar className="h-6 w-6" />
              <span className="text-xs mt-1">Programação</span>
            </Link>
          </li>
          <li>
            <Link href="#comissao" className="flex flex-col items-center px-4">
              <Users className="h-6 w-6" />
              <span className="text-xs mt-1">Comissão</span>
            </Link>
          </li>
          <li>
            <Link href="#sobre" className="flex flex-col items-center px-4">
              <Info className="h-6 w-6" />
              <span className="text-xs mt-1">Sobre</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
