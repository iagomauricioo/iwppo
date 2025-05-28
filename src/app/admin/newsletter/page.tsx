"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { NewsletterStats } from "@/components/admin/newsletter-stats"
import { SubscribersTable } from "@/components/admin/subscribe-table"
import { getNewsletterSubscribers, getNewsletterStats } from "@/src/app/actions/admin"

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
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [stats, setStats] = useState<Stats>({ total: 0, active: 0, recent: 0 })
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  const loadData = async () => {
    try {
      const [subscribersResult, statsResult] = await Promise.all([getNewsletterSubscribers(), getNewsletterStats()])

      if (subscribersResult.success) {
        setSubscribers(subscribersResult.data)
      }

      if (statsResult.success) {
        setStats(statsResult.data)
      }
    } catch (error) {
      console.error("Erro ao carregar dados:", error)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  const handleRefresh = async () => {
    setRefreshing(true)
    await loadData()
  }

  useEffect(() => {
    loadData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p>Carregando dados...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao Site
                </Button>
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Painel da Newsletter</h1>
            <p className="text-gray-600">Gerencie os inscritos da newsletter do IWPPO</p>
          </div>
          <Button onClick={handleRefresh} disabled={refreshing}>
            <RefreshCw className={`h-4 w-4 mr-2 ${refreshing ? "animate-spin" : ""}`} />
            Atualizar
          </Button>
        </div>

        {/* Stats */}
        <NewsletterStats stats={stats} />

        {/* Subscribers Table */}
        <SubscribersTable subscribers={subscribers} onUpdate={loadData} />
      </div>
    </div>
  )
}
