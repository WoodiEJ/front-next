import { users } from "@/db/users"
import { notFound } from "next/navigation"
import { EditarAdminClient } from "./editarCliente"

interface Props {
    params: Promise<{ id: string }>
}

export default async function EditarAdmin({ params }: Props) {
    const { id } = await params
    const admin = users.find(u => u.id === Number(id))

    if (!admin) return notFound()

    return <EditarAdminClient admin={admin} />
}