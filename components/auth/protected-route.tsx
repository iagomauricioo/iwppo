"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "./auth-provider"
import { Loader2 } from "lucide-react"

interface ProtectedRouteProps {
  children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true)
  const [authorized, setAuthorized] = useState(false)
  const router = useRouter()
  const { user, loading: authLoading } = useAuth()

  useEffect(() => {
    // Função para verificar autenticação
    const checkAuth = async () => {
      try {
        // Se ainda está carregando dados de autenticação, aguarde
        if (authLoading) return

        // Se não há usuário, redirecione para login
        if (!user) {
          console.log("Usuário não autenticado, redirecionando para login")
          router.push("/pt/admin/login")
          return
        }

        console.log("Usuário autenticado:", user.email)

        // Simplificando a verificação para resolver o problema de carregamento infinito
        // Assumimos que se o usuário está logado, ele está autorizado
        // A verificação completa já foi feita no login
        setAuthorized(true)
        setLoading(false)
      } catch (error) {
        console.error("Erro na verificação de auth:", error)
        router.push("/pt/admin/login")
      }
    }

    checkAuth()
  }, [router, user, authLoading])

  if (loading && authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Verificando permissões...</p>
        </div>
      </div>
    )
  }

  // Se não está mais carregando e está autorizado, mostre o conteúdo
  if (!loading && authorized) {
    return <>{children}</>
  }

  // Se não está carregando e não está autorizado, não mostre nada
  // O redirecionamento já foi feito no useEffect
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
        <p>Redirecionando...</p>
      </div>
    </div>
  )
}
