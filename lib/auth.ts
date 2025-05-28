import { createClient } from "@supabase/supabase-js"
import { createAdminClient } from "./supabase"

export async function signInWithEmail(email: string, password: string) {
  try {
    // Verificar se o email está na lista de admins autorizados
    const { data: adminUser, error: adminError } = await createAdminClient()
      .from("admin_users")
      .select("*")
      .eq("email", email)
      .eq("active", true)
      .single()

    if (adminError || !adminUser) {
      return {
        success: false,
        message: "Email não autorizado para acesso administrativo",
      }
    }

    // Fazer login com Supabase Auth
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return {
        success: false,
        message: "Credenciais inválidas",
      }
    }

    return {
      success: true,
      message: "Login realizado com sucesso",
      user: data.user,
    }
  } catch (error) {
    console.error("Erro no login:", error)
    return {
      success: false,
      message: "Erro interno do servidor",
    }
  }
}

export async function signOut() {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

  const { error } = await supabase.auth.signOut()

  if (error) {
    console.error("Erro ao fazer logout:", error)
    return false
  }

  return true
}

export async function getCurrentUser() {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    return null
  }

  // Verificar se o usuário é admin autorizado
  const { data: adminUser, error: adminError } = await createAdminClient()
    .from("admin_users")
    .select("*")
    .eq("email", user.email)
    .eq("active", true)
    .single()

  if (adminError || !adminUser) {
    return null
  }

  return {
    ...user,
    adminData: adminUser,
  }
}
