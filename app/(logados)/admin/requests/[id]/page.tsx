import { requestsData } from "@/db/requests"
import { DetalheSolicitacaoClient } from "./detalhes"

interface Props {
    params: Promise<{ id: number }>
}

export default async function DetalheSolicitacao({ params }: Props) {
    const { id } = await params
    const request = requestsData.find(r => r.id === Number(id))

    if (!request) return <p>Solicitação não encontrada</p>

    return <DetalheSolicitacaoClient request={request} />
}