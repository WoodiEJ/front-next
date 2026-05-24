import { users } from "@/db/users"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import dayjs from "dayjs"

interface Props {
    params: Promise<{ id: string }>
}

export default async function DetalheAdmin({ params }: Props) {
    const { id } = await params
    const admin = users.find(u => u.id === Number(id))

    if (!admin) return notFound()

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Card>
                    <CardHeader>
                        <CardTitle>Detalhes do Admin</CardTitle>
                        <CardDescription>Informações do usuário</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                        <p><strong>Nome:</strong> {admin.name}</p>
                        <p><strong>Email:</strong> {admin.email}</p>
                        <p><strong>Role:</strong> {admin.role}</p>
                        <p><strong>Status:</strong>
                            <Badge variant="outline" className="ml-2">
                                {admin.status ? "Ativo" : "Inativo"}
                            </Badge>
                        </p>
                        <p><strong>Criado em:</strong> {dayjs(admin.created_at).format("DD/MM/YYYY")}</p>
                        <p><strong>Atualizado em:</strong> {dayjs(admin.updated_at).format("DD/MM/YYYY")}</p>
                        <div className="flex justify-between mt-4">
                            <Button type="button" variant="outline" asChild>
                                <Link href="/admin/admins">Voltar</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}