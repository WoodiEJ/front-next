'use client'

import { useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Request } from "@/db/requests"
import { useRouter } from "next/navigation"

export function DetalheSolicitacaoClient({ request }: { request: Request }) {
    const [opcao, setOpcao] = useState("")
    const router = useRouter()

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Card>
                    <CardHeader>
                        <CardTitle>Detalhes solicitação</CardTitle>
                        <CardDescription>Aprove ou reprove a solicitação</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <p><strong>Nome:</strong> {request.name}</p>
                            <p><strong>Email:</strong> {request.email}</p>
                            <p><strong>CNPJ:</strong> {request.cnpj}</p>
                            <p><strong>Categoria:</strong> {request.category}</p>
                            <p><strong>Cidade:</strong> {request.city} - {request.state}</p>
                            <p><strong>Status:</strong> {request.status}</p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-4">
                        <RadioGroup onValueChange={setOpcao}>
                            <div className="flex items-center gap-3">
                                <RadioGroupItem value="aprovar" id="aproved" />
                                <Label htmlFor="aproved">Aprovar</Label>
                            </div>
                            <div className="flex items-center gap-3">
                                <RadioGroupItem value="reprovar" id="rejected" />
                                <Label htmlFor="rejected">Reprovar</Label>
                            </div>
                        </RadioGroup>
                        {opcao === "aprovar" && (
                            <div className="flex flex-col gap-3 rounded-lg border p-4 text-sm">
                                <p>A loja será <strong>aprovada</strong>, receberá uma notificação por e-mail e terá o acesso liberado.</p>
                                <div className="flex gap-2">
                                    <Button variant="outline" onClick={() => setOpcao("")}>Cancelar</Button>
                                    <Button variant="default" onClick={() => {
                                        toast.success("Loja aprovada!")
                                        router.push('/admin/requests')
                                    }}>Confirmar</Button>
                                </div>
                            </div>
                        )}

                        {opcao === "reprovar" && (
                            <div className="flex flex-col gap-3 rounded-lg border p-4 text-sm">
                                <p>A loja será <strong>reprovada</strong>, receberá uma notificação por e-mail e não terá o acesso liberado.</p>
                                <div className="flex gap-2">
                                    <Button variant="outline" onClick={() => setOpcao("")}>Cancelar</Button>
                                    <Button variant="destructive" onClick={() => {
                                        toast.info("Loja reprovada.")
                                        router.push('/admin/requests')
                                    }}>Confirmar</Button>
                                </div>
                            </div>
                        )}
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}