'use server'

import { users } from "@/db/users"
import { cookies } from "next/headers"

export async function getUser() {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value

    if (!token) return null

    const payload = JSON.parse(Buffer.from(token, 'base64').toString())
    const user = users.find(u => u.id === payload.id)

    return user ?? null
}