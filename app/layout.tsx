import type React from "react"
import "./globals.css"
import "./styles.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "IWPPO - II Workshop Internacional sobre a Poluição Plástica nos Oceanos",
  description: "Workshop Internacional sobre a Poluição Plástica nos Oceanos - Transformando Pesquisas em Soluções",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} font-montserrat`}>{children}</body>
    </html>
  )
}
