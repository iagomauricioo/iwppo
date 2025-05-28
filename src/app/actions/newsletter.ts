"use server"

import { createAdminClient } from "@/lib/supabase"

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email") as string

  console.log("📧 Tentando inscrever email:", email)

  // Validação de email mais robusta
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    console.log("❌ Email inválido:", email)
    return {
      success: false,
      message: "Por favor, insira um email válido",
    }
  }

  try {
    console.log("🔄 Inserindo no banco de dados...")
    const supabaseAdmin = createAdminClient()

    // Tentar inserir o email na tabela
    const { data, error } = await supabaseAdmin.from("newsletter_subscribers").insert([{ email }]).select()

    console.log("📊 Resultado da inserção:", { data, error })

    if (error) {
      console.error("❌ Erro do Supabase:", error)

      // Se o erro for de email duplicado
      if (error.code === "23505") {
        return {
          success: false,
          message: "Este email já está cadastrado em nossa newsletter",
        }
      }

      return {
        success: false,
        message: `Erro: ${error.message}`,
      }
    }

    console.log("✅ Email inserido com sucesso:", data)

    return {
      success: true,
      message: "Email cadastrado com sucesso! Obrigado por se inscrever.",
    }
  } catch (error) {
    console.error("💥 Erro inesperado:", error)
    return {
      success: false,
      message: "Erro interno. Tente novamente mais tarde.",
    }
  }
}
