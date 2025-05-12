"use client"

import * as React from "react"
import { useRouter, usePathname } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"

type LanguageOption = {
  value: string
  label: string
  fullName: string
  icon: React.ReactNode
}

export function LanguageSelector() {
  const router = useRouter()
  const pathname = usePathname()

  const languages: LanguageOption[] = [
    {
      value: "pt",
      label: "PT",
      fullName: "Português (BR)",
      icon: <BrazilFlagIcon className="h-4 w-4" />,
    },
    {
      value: "en",
      label: "EN",
      fullName: "English (US)",
      icon: <UsaFlagIcon className="h-4 w-4" />,
    },
    {
      value: "es",
      label: "ES",
      fullName: "Español",
      icon: <SpainFlagIcon className="h-4 w-4" />,
    },
  ]

  const currentLang = pathname.split("/")[1] || "pt"
  const [selectedLanguage, setSelectedLanguage] = React.useState<string>(
    languages.some((lang) => lang.value === currentLang) ? currentLang : "pt",
  )
  const [isChanging, setIsChanging] = React.useState(false)

  const handleChange = (lang: string) => {
    if (lang === selectedLanguage) return

    setIsChanging(true)
    setSelectedLanguage(lang)

    const segments = pathname.split("/")
    if (segments[1] && languages.some((l) => l.value === segments[1])) {
      segments[1] = lang
    } else {
      segments.splice(1, 0, lang)
    }
    const newPath = segments.join("/")

    setTimeout(() => {
      router.push(newPath)
      setIsChanging(false)
    }, 300)
  }

  const currentLanguage = languages.find((lang) => lang.value === selectedLanguage) || languages[0]

  return (
    <div className="relative">
      <Select value={selectedLanguage} onValueChange={handleChange}>
        <SelectTrigger
          className="w-[100px] md:w-[120px] bg-blue-800/50 hover:bg-blue-700/70 text-white border-blue-700 
                     focus:ring-2 focus:ring-blue-400 focus:ring-offset-0 rounded-full px-3 py-1.5 h-auto"
          aria-label="Selecionar idioma"
        >
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 1 }}
            animate={{ opacity: isChanging ? 0.5 : 1, scale: isChanging ? 0.95 : 1 }}
            transition={{ duration: 0.2 }}
          >
            {currentLanguage.icon}
            <span className="text-sm font-medium">{currentLanguage.label}</span>
          </motion.div>
        </SelectTrigger>
        <SelectContent 
          className="min-w-[180px] bg-white dark:bg-gray-900 border-blue-200 dark:border-blue-800 z-[100]"
          position="popper"
          sideOffset={5}
        >
          {languages.map((language) => (
            <SelectItem
              key={language.value}
              value={language.value}
              className="focus:bg-blue-100 dark:focus:bg-blue-900"
            >
              <div className="flex items-center gap-3">
                {language.icon}
                <span className="font-medium">{language.fullName}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {isChanging && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-blue-400"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  )
}

interface FlagIconProps {
  className?: string
  "aria-hidden"?: boolean
}

function BrazilFlagIcon({ className, ...props }: FlagIconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <rect width="512" height="512" fill="#009739" />
      <polygon points="256,80 40,256 256,432 472,256" fill="#FFCC29" />
      <circle cx="256" cy="256" r="80" fill="#002776" />
      <path
        d="M 190 290 C 230 250, 280 240, 322 262 C 300 230, 250 210, 210 220 C 170 230, 160 270, 190 290 Z"
        fill="white"
      />
    </svg>
  )
}

function UsaFlagIcon({ className, ...props }: FlagIconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path fill="#bd3d44" d="M0 0h512v512H0z" />
      <path fill="#fff" d="M0 0h512v102.4H0zm0 204.8h512V307H0zm0 204.8h512v102.4H0z" />
      <path fill="#192f5d" d="M0 0h307.2v204.8H0z" />
      <path
        fill="#fff"
        d="m26.2 28.8 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8L0 50.6h25.2zm51 0 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2zm51 0 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2zm51 0 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2zm51 0 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2zm51 0 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2zm-229.8 51 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2zm51 0 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2zm51 0 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2zm51 0 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2zm51 0 7.8 21.8h25.2l-20.4 14.8 7.8 21.8-20.4-14.8-20.4 14.8 7.8-21.8-20.4-14.8h25.2z"
      />
    </svg>
  )
}

function SpainFlagIcon({ className, ...props }: FlagIconProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path fill="#c60b1e" d="M0 0h512v512H0z" />
      <path fill="#ffc400" d="M0 128h512v256H0z" />
      <path fill="#ad1519" d="M144 304c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48z" />
      <path fill="#c60b1e" d="M128 304c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32z" />
      <path fill="#ffc400" d="M96 288c0 8.8-7.2 16-16 16s-16-7.2-16-16 7.2-16 16-16 16 7.2 16 16z" />
    </svg>
  )
}