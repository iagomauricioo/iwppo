import { createClient } from "@supabase/supabase-js"

// Cliente para o browser (com anon key)
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

// Cliente para o servidor (com service role key)
// Importante: este cliente só deve ser usado em arquivos do servidor (Server Components ou Server Actions)
export const createAdminClient = () => {
  // Verificar se estamos no servidor
  if (typeof window !== "undefined") {
    throw new Error("createAdminClient só pode ser usado no servidor")
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Variáveis de ambiente do Supabase não configuradas")
  }

  return createClient(supabaseUrl, supabaseKey)
}
