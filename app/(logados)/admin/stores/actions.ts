'use server'

import { Store } from "@/types"

export async function updateStore(data: Store) {
    return { message: "A loja foi atualizada com sucesso." }
}

export async function deleteStore(storeId: string) {
    return { message: "A loja foi deletada com sucesso." }
}