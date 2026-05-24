'use client'

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { User } from "@/db/users";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from 'zod'

const schema = z.object({
    senhaAtual: z.string().min(6, "Mínimo 6 caracteres"),
    senhaNova: z.string().min(6, "Mínimo 6 caracteres"),
    senhaNova2: z.string().min(6, "Mínimo 6 caracteres")
}).refine((data) => data.senhaNova === data.senhaNova2, {
    message: "Ase senhas não coincidem",
    path: ["senhaNova2"]
})

type FormData = z.infer<typeof schema>

export function ProfileClient({ user }: { user: User }) {
    const roles = {
        "admin": "Administrador",
        "super-admin": "Super Administrador",
        "store": "Loja",
    }
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const onSubmit = (data: FormData) => {
        toast.success("Senha alterada com sucesso")
    }

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-lg flex flex-col gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Perfil</CardTitle>
                        <CardDescription>Dados da sua conta</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center gap-4">
                        <Avatar className="size-16">
                            <AvatarFallback className="text-xl">
                                {user.name.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-1">
                            <p className="font-semibold text-lg">{user.name}</p>
                            <p className="text-muted-foreground text-sm">{user.email}</p>
                            <p className="text-muted-foreground text-sm">{roles[user.role]}</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Alterar Senha</CardTitle>
                        <CardDescription>Atualize sua senha de acesso</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel>Senha Atual</FieldLabel>
                                    <Input type="password" placeholder="******" {...register("senhaAtual")} />
                                    <p>{errors.senhaAtual?.message}</p>
                                </Field>
                                <Field>
                                    <FieldLabel>Nova Senha</FieldLabel>
                                    <Input type="password" placeholder="******" {...register("senhaNova")} />
                                    <p>{errors.senhaNova?.message}</p>
                                </Field>
                                <Button type="submit">Salvar</Button>
                            </FieldGroup>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}