import { NextResponse } from "next/server"
import { createAdminClient } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ authorized: false }, { status: 400 })
    }

    const supabaseAdmin = createAdminClient()

    const { data, error } = await supabaseAdmin
      .from("admin_users")
      .select("*")
      .eq("email", email)
      .eq("active", true)
      .single()

    if (error || !data) {
      return NextResponse.json({ authorized: false }, { status: 200 })
    }

    return NextResponse.json({ authorized: true }, { status: 200 })
  } catch (error) {
    console.error("Erro ao verificar autorização:", error)
    return NextResponse.json({ authorized: false }, { status: 500 })
  }
}
