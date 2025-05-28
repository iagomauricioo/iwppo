"use server"

import { createAdminClient } from "@/lib/supabase"

export async function getNewsletterSubscribers() {
  try {
    const supabaseAdmin = createAdminClient()

    const { data, error } = await supabaseAdmin
      .from("newsletter_subscribers")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Erro ao buscar inscritos:", error)
      return {
        success: false,
        message: "Erro ao carregar inscritos",
        data: [],
      }
    }

    return {
      success: true,
      message: "Inscritos carregados com sucesso",
      data: data || [],
    }
  } catch (error) {
    console.error("Erro inesperado:", error)
    return {
      success: false,
      message: "Erro interno",
      data: [],
    }
  }
}

export async function toggleSubscriberStatus(id: string, active: boolean) {
  try {
    const supabaseAdmin = createAdminClient()

    const { error } = await supabaseAdmin.from("newsletter_subscribers").update({ active }).eq("id", id)

    if (error) {
      console.error("Erro ao atualizar status:", error)
      return {
        success: false,
        message: "Erro ao atualizar status",
      }
    }

    return {
      success: true,
      message: `Inscrito ${active ? "ativado" : "desativado"} com sucesso`,
    }
  } catch (error) {
    console.error("Erro inesperado:", error)
    return {
      success: false,
      message: "Erro interno",
    }
  }
}

export async function deleteSubscriber(id: string) {
  try {
    const supabaseAdmin = createAdminClient()

    const { error } = await supabaseAdmin.from("newsletter_subscribers").delete().eq("id", id)

    if (error) {
      console.error("Erro ao deletar inscrito:", error)
      return {
        success: false,
        message: "Erro ao deletar inscrito",
      }
    }

    return {
      success: true,
      message: "Inscrito removido com sucesso",
    }
  } catch (error) {
    console.error("Erro inesperado:", error)
    return {
      success: false,
      message: "Erro interno",
    }
  }
}

export async function getNewsletterStats() {
  try {
    const supabaseAdmin = createAdminClient()

    const { data: total, error: totalError } = await supabaseAdmin
      .from("newsletter_subscribers")
      .select("id", { count: "exact" })

    const { data: active, error: activeError } = await supabaseAdmin
      .from("newsletter_subscribers")
      .select("id", { count: "exact" })
      .eq("active", true)

    const { data: recent, error: recentError } = await supabaseAdmin
      .from("newsletter_subscribers")
      .select("id", { count: "exact" })
      .gte("created_at", new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())

    if (totalError || activeError || recentError) {
      console.error("Erro ao buscar estatísticas")
      return {
        success: false,
        data: { total: 0, active: 0, recent: 0 },
      }
    }

    return {
      success: true,
      data: {
        total: total?.length || 0,
        active: active?.length || 0,
        recent: recent?.length || 0,
      },
    }
  } catch (error) {
    console.error("Erro inesperado:", error)
    return {
      success: false,
      data: { total: 0, active: 0, recent: 0 },
    }
  }
}
  