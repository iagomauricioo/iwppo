"use server"

import { signInWithEmail } from "@/lib/auth"
import { redirect } from "next/navigation"

export async function loginAction(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  if (!email || !password) {
    return {
      success: false,
      message: "Email e senha são obrigatórios",
    }
  }

  const result = await signInWithEmail(email, password)

  if (result.success) {
    redirect("/pt/admin/newsletter")
  }

  return result
}
