"use client"

import { Users } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export default function ParticipantsSection() {
  const isMobile = useMobile()

  if (!isMobile) {
    return null // No participants section in desktop view
  }

  return (
    <div id="comissao" className="p-4">
      <h3 className="text-ocean-dark font-bold text-lg mb-3">Participantes</h3>

      <div className="border border-gray-200 rounded-lg p-3 mb-2 flex items-center">
        <Users className="h-5 w-5 text-ocean-regular mr-3" />
        <span className="text-sm text-gray-700">Pesquisadores</span>
      </div>

      <div className="border border-gray-200 rounded-lg p-3 mb-2 flex items-center">
        <svg
          className="h-5 w-5 text-ocean-regular mr-3"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 14L11.2929 14.7071L12 15.4142L12.7071 14.7071L12 14ZM12 14L11.2929 13.2929L10.5858 14L11.2929 14.7071L12 14ZM12 14L12.7071 13.2929L12 12.5858L11.2929 13.2929L12 14ZM12 14L12.7071 14.7071L13.4142 14L12.7071 13.2929L12 14Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M3 7H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M6 21H18C19.1046 21 20 20.1046 20 19V5C20 3.89543 19.1046 3 18 3H6C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <span className="text-sm text-gray-700">Representantes Governamentais</span>
      </div>

      <div className="border border-gray-200 rounded-lg p-3 mb-2 flex items-center">
        <svg
          className="h-5 w-5 text-ocean-regular mr-3"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-sm text-gray-700">Ativistas Ambientais</span>
      </div>

      <div className="border border-gray-200 rounded-lg p-3 mb-6 flex items-center">
        <svg
          className="h-5 w-5 text-ocean-regular mr-3"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7C3 5.89543 3.89543 5 5 5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-sm text-gray-700">Indústrias de Plásticos e Reciclagem</span>
      </div>
    </div>
  )
}
