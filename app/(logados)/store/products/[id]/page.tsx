import { products } from "@/db/products"
import DetalheProdutoClient from "./produtoDetalhe"

interface Props {
    params: Promise<{ id: string }>
}

export default async function DetalheProduto({ params }: Props) {
    const { id } = await params
    const productData = products.find(p => p.id === Number(id))

    if (!productData) return <p>Solicitação não encontrada</p>

    return <DetalheProdutoClient request={productData} />
}