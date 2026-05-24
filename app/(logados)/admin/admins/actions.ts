'use server'

import { User } from "@/types"

export async function createAdmin(data: Omit<User, 'id' | 'created_at' | 'updated_at'>) {
    return { message: "O admin foi criado com sucesso." }
}

export async function updateAdmin(data: User) {
    return { message: "O admin foi atualizado com sucesso." }
}

export async function deleteAdmin(adminId: string) {
    return { message: "O admin foi deletado com sucesso." }
}