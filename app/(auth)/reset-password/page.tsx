'use client'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import * as z from 'zod'
import { cn } from '@/lib/utils'
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const schema = z.object({
    senhaAtual: z.string().min(6, "A senha contém ao minimo 6 caracteres"),
    senhaNova: z.string().min(6, "A senha deve conter pelo menos 6 caracteres"),
    senhaNova2: z.string().min(6, "A senha deve conter pelo menos 6 caracteres")
}).refine((data) => data.senhaNova === data.senhaNova2, {
    message: "As senhas não coincidem",
    path: ["senhaNova2"]
})

type FormData = z.infer<typeof schema>

export default function ResetPassword({
    className
}: React.ComponentProps<"div">) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const onSubmit = async (data: FormData) => {
        toast.success("Sua senha foi alterado com sucesso!")
    }

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className={cn("flex flex-col gap-6", className)}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Altere sua senha</CardTitle>
                            <CardDescription>
                                Coloque a sua senha antiga e a nova.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="password">Senha Atual</FieldLabel>
                                        <Input
                                            id="email"
                                            type="email"
                                            {...register("senhaAtual")}
                                            placeholder="******"
                                            required
                                        />
                                        <p>{errors.senhaAtual?.message}</p>
                                    </Field>

                                    <Field>
                                        <FieldLabel htmlFor="password">Nova senha</FieldLabel>
                                        <Input
                                            id="email"
                                            type="email"
                                            {...register("senhaNova")}
                                            placeholder="******"
                                            required
                                        />
                                        <p>{errors.senhaNova?.message}</p>
                                    </Field>

                                    <Field>
                                        <FieldLabel htmlFor="password">Senha Atual</FieldLabel>
                                        <Input
                                            id="email"
                                            type="email"
                                            {...register("senhaNova2")}
                                            placeholder="******"
                                            required
                                        />
                                        <p>{errors.senhaNova2?.message}</p>
                                    </Field>

                                    <Field>
                                        <Button type="submit">Alterar Senha</Button>
                                    </Field>
                                </FieldGroup>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}