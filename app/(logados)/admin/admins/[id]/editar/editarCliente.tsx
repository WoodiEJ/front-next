'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { User } from "@/db/users"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

const schema = z.object({
    name: z.string().min(1, "Nome obrigatório"),
    email: z.string().email("Email inválido"),
})

type FormData = z.infer<typeof schema>

export function EditarAdminClient({ admin }: { admin: User }) {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

    const onSubmit = (data: FormData) => {
        toast.success("Admin atualizado com sucesso.")
        router.push("/admin/admins")
    }

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Card>
                    <CardHeader>
                        <CardTitle>Editando Admin</CardTitle>
                        <CardDescription>Edite os dados do usuário</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardContent>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel>Nome</FieldLabel>
                                    <Input defaultValue={admin.name} {...register("name")} />
                                    <p>{errors.name?.message}</p>
                                </Field>
                                <Field>
                                    <FieldLabel>Email</FieldLabel>
                                    <Input defaultValue={admin.email} {...register("email")} />
                                    <p>{errors.email?.message}</p>
                                </Field>
                            </FieldGroup>
                        </CardContent>
                        <CardFooter>
                            <div className="flex justify-between w-full">
                                <Button type="button" variant="destructive" onClick={() => router.push("/admin/admins")}>
                                    Cancelar
                                </Button>
                                <Button type="submit">Salvar</Button>
                            </div>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    )
}