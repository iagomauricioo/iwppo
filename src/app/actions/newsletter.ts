"use server"

import { createClient } from "@supabase/supabase-js"

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string

  // Validação de email mais robusta
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    return {
      success: false,
      message: "Por favor, insira um email válido",
    }
  }

  try {
    // Tentar inserir o email na tabela
    const { data, error } = await supabase.from("newsletter_subscribers").insert([{ email }]).select()

    if (error) {
      // Se o erro for de email duplicado
      if (error.code === "23505") {
        return {
          success: false,
          message: "Este email já está cadastrado em nossa newsletter",
        }
      }

      console.error("Erro ao inserir email:", error)
      return {
        success: false,
        message: "Erro interno. Tente novamente mais tarde.",
      }
    }

    return {
      success: true,
      message: "Email cadastrado com sucesso! Obrigado por se inscrever.",
    }
  } catch (error) {
    console.error("Erro inesperado:", error)
    return {
      success: false,
      message: "Erro interno. Tente novamente mais tarde.",
    }
  }
}
