'use server'

import { users } from '../db/users'
import { cookies } from 'next/headers'

export async function login(data: { email: string, password: string }) {
    const user = users.find(u => u.email === data.email && u.password === data.password)

    if (!user) {
        return { success: false, message: "Credenciais inválidos" }
    }

    const token = Buffer.from(JSON.stringify({ id: user.id, role: user.role, name: user.name, email: user.email, status: user.status })).toString("base64")

    const cookieStore = await cookies()
    cookieStore.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24,
        path: "/"
    })

    return { success: true, role: user.role, status: user.status }
}