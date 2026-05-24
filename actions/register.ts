'use server'

export async function registerAction(data: {
    name: string
    cnpj: string
    category: string
    country: string
    state: string
    city: string
}) {
    return { success: true, mensagem: "Solicitação de registro enviado com sucesso!" }
}