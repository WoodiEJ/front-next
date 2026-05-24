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
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import * as z from 'zod'
import { cn } from '@/lib/utils'
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const schema = z.object({
    email: z.string().email("Email inválido")
}).required()

type FormData = z.infer<typeof schema>

export default function Login({
    className
}: React.ComponentProps<"div">) {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const router = useRouter()
    const onSubmit = async (data: FormData) => {
        toast.success("Você solicitou a recuperação de senha.", {
            description: "Vai chegar um email pra você com o passo a passo."
        })
    }

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className={cn("flex flex-col gap-6", className)}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Recupere a sua senha</CardTitle>
                            <CardDescription>
                                Coloque seu email e solicite a recuperação
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="email">Email</FieldLabel>
                                        <Input
                                            id="email"
                                            type="email"
                                            {...register("email")}
                                            placeholder="m@example.com"
                                            required
                                        />
                                        <p>{errors.email?.message}</p>
                                    </Field>
                                    <Field>
                                        <Button type="submit">Recuperar Senha</Button>
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
