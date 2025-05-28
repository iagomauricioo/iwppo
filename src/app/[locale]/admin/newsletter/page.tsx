"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  RefreshCw,
  ArrowLeft,
  LogOut,
  Users,
  UserCheck,
  TrendingUp,
  Download,
  Trash2,
  ToggleLeft,
  ToggleRight,
  Loader2,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClient } from "@supabase/supabase-js"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"

interface Subscriber {
  id: string
  email: string
  created_at: string
  active: boolean
}

interface Stats {
  total: number
  active: number
  recent: number
}

export default function NewsletterAdminPage() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [stats, setStats] = useState<Stats>({ total: 0, active: 0, recent: 0 })
  const [refreshing, setRefreshing] = useState(false)
  const [actionLoading, setActionLoading] = useState<Record<string, boolean>>({})
  const router = useRouter()

  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession()

      if (error || !session) {
        router.push("/admin/login")
        return
      }

      setUser(session.user as any) // Type assertion to fix type mismatch
      await loadData()
    } catch (error) {
      console.error("Erro de autenticação:", error)
      router.push("/admin/login")
    } finally {
      setLoading(false)
    }
  }

  const loadData = async () => {
    try {
      setRefreshing(true)

      // Carregar inscritos
      const { data: subscribersData, error: subscribersError } = await supabase
        .from("newsletter_subscribers")
        .select("*")
        .order("created_at", { ascending: false })

      if (subscribersError) {
        console.error("Erro ao carregar inscritos:", subscribersError)
        return
      }

      setSubscribers(subscribersData || [])

      // Calcular estatísticas
      const total = subscribersData?.length || 0
      const active = subscribersData?.filter((sub) => sub.active).length || 0
      const oneWeekAgo = new Date()
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
      const recent = subscribersData?.filter((sub) => new Date(sub.created_at) >= oneWeekAgo).length || 0

      setStats({
        total,
        active,
        recent,
      })
    } catch (error) {
      console.error("Erro ao carregar dados:", error)
    } finally {
      setRefreshing(false)
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/admin/login")
  }

  const handleToggleStatus = async (id: string, currentStatus: boolean) => {
    setActionLoading((prev) => ({ ...prev, [id]: true }))

    try {
      const { error } = await supabase.from("newsletter_subscribers").update({ active: !currentStatus }).eq("id", id)

      if (error) {
        console.error("Erro ao atualizar status:", error)
        return
      }

      // Atualizar localmente
      setSubscribers((prev) => prev.map((sub) => (sub.id === id ? { ...sub, active: !currentStatus } : sub)))

      // Atualizar estatísticas
      setStats((prev) => ({
        ...prev,
        active: currentStatus ? prev.active - 1 : prev.active + 1,
      }))
    } catch (error) {
      console.error("Erro ao alterar status:", error)
    } finally {
      setActionLoading((prev) => ({ ...prev, [id]: false }))
    }
  }

  const handleDelete = async (id: string) => {
    setActionLoading((prev) => ({ ...prev, [id]: true }))

    try {
      const { error } = await supabase.from("newsletter_subscribers").delete().eq("id", id)

      if (error) {
        console.error("Erro ao deletar inscrito:", error)
        return
      }

      // Atualizar localmente
      const deletedSubscriber = subscribers.find((sub) => sub.id === id)
      setSubscribers((prev) => prev.filter((sub) => sub.id !== id))

      // Atualizar estatísticas
      setStats((prev) => ({
        ...prev,
        total: prev.total - 1,
        active: deletedSubscriber?.active ? prev.active - 1 : prev.active,
      }))
    } catch (error) {
      console.error("Erro ao deletar:", error)
    } finally {
      setActionLoading((prev) => ({ ...prev, [id]: false }))
    }
  }

  const exportToCSV = () => {
    const csvContent = [
      ["Email", "Status", "Data de Inscrição"],
      ...subscribers.map((sub) => [
        sub.email,
        sub.active ? "Ativo" : "Inativo",
        new Date(sub.created_at).toLocaleDateString("pt-BR"),
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `newsletter-subscribers-${new Date().toISOString().split("T")[0]}.csv`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const exportToJSON = () => {
    const jsonContent = JSON.stringify(subscribers, null, 2)
    const blob = new Blob([jsonContent], { type: "application/json" })
    const link = document.createElement("a")
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", `newsletter-subscribers-${new Date().toISOString().split("T")[0]}.json`)
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Carregando...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">Painel Administrativo - IWPPO</h1>
            <div className="flex gap-2">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao Site
                </Button>
              </Link>
              <Button onClick={handleSignOut} variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Painel da Newsletter</h2>
            <p className="text-gray-600">Gerencie os inscritos da newsletter do IWPPO</p>
          </div>
          <Button onClick={loadData} disabled={refreshing}>
            <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
            Atualizar
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Inscritos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
              <p className="text-xs text-muted-foreground">Todos os emails cadastrados</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Inscritos Ativos</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.active}</div>
              <p className="text-xs text-muted-foreground">Recebendo newsletters</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Novos (7 dias)</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.recent}</div>
              <p className="text-xs text-muted-foreground">Inscrições recentes</p>
            </CardContent>
          </Card>
        </div>

        {/* Subscribers Table */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <CardTitle>Inscritos da Newsletter ({subscribers.length})</CardTitle>
              <div className="flex gap-2">
                <Button onClick={exportToCSV} variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar CSV
                </Button>
                <Button onClick={exportToJSON} variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar JSON
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Email</th>
                    <th className="text-left py-2">Status</th>
                    <th className="text-left py-2">Data de Inscrição</th>
                    <th className="text-right py-2">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {subscribers.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center py-8 text-muted-foreground">
                        Nenhum inscrito encontrado
                      </td>
                    </tr>
                  ) : (
                    subscribers.map((subscriber) => (
                      <tr key={subscriber.id} className="border-b">
                        <td className="py-2">{subscriber.email}</td>
                        <td className="py-2">
                          <Badge variant={subscriber.active ? "default" : "secondary"}>
                            {subscriber.active ? "Ativo" : "Inativo"}
                          </Badge>
                        </td>
                        <td className="py-2">{new Date(subscriber.created_at).toLocaleDateString("pt-BR")}</td>
                        <td className="py-2 text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleToggleStatus(subscriber.id, subscriber.active)}
                              disabled={actionLoading[subscriber.id]}
                            >
                              {actionLoading[subscriber.id] ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                              ) : subscriber.active ? (
                                <ToggleRight className="h-4 w-4" />
                              ) : (
                                <ToggleLeft className="h-4 w-4" />
                              )}
                            </Button>

                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="outline" size="sm" disabled={actionLoading[subscriber.id]}>
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Tem certeza que deseja remover o email <strong>{subscriber.email}</strong> da
                                    newsletter? Esta ação não pode ser desfeita.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleDelete(subscriber.id)}
                                    className="bg-red-600 hover:bg-red-700"
                                  >
                                    Excluir
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
