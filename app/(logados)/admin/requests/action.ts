'use server'

export async function approveRequest(requestId: string) {
    return { message: "A solicitação foi aprovada." }
}

export async function rejectRequest(requestId: string) {
    return { message: "A solicitação foi rejeitada." }
}