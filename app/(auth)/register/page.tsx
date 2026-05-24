'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import * as z from 'zod'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { registerAction } from "@/actions/register";
import { toast } from "sonner";

const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    cnpj: z.string().min(14, "O cnpj possui 14 caracteres"),
    category: z.string(),
    country: z.string(),
    state: z.string(),
    city: z.string()
}).required()

type FormData = z.infer<typeof schema>

export default function Registro({
    className
}: React.ComponentProps<"div">) {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const onSubmit = async (data: FormData) => {
        const result = await registerAction(data)
        if (result.success) {
            toast.success(result.mensagem)
            router.push('/store/dashboard')
        } else {
            toast.error("Erro ao solicitar registro.")
        }
    }

    const estados = [
        { nome: "Acre", sigla: "AC" },
        { nome: "Alagoas", sigla: "AL" },
        { nome: "Amapá", sigla: "AP" },
        { nome: "Amazonas", sigla: "AM" },
        { nome: "Bahia", sigla: "BA" },
        { nome: "Ceará", sigla: "CE" },
        { nome: "Distrito Federal", sigla: "DF" },
        { nome: "Espírito Santo", sigla: "ES" },
        { nome: "Goiás", sigla: "GO" },
        { nome: "Maranhão", sigla: "MA" },
        { nome: "Mato Grosso", sigla: "MT" },
        { nome: "Mato Grosso do Sul", sigla: "MS" },
        { nome: "Minas Gerais", sigla: "MG" },
        { nome: "Pará", sigla: "PA" },
        { nome: "Paraíba", sigla: "PB" },
        { nome: "Paraná", sigla: "PR" },
        { nome: "Pernambuco", sigla: "PE" },
        { nome: "Piauí", sigla: "PI" },
        { nome: "Rio de Janeiro", sigla: "RJ" },
        { nome: "Rio Grande do Norte", sigla: "RN" },
        { nome: "Rio Grande do Sul", sigla: "RS" },
        { nome: "Rondônia", sigla: "RO" },
        { nome: "Roraima", sigla: "RR" },
        { nome: "Santa Catarina", sigla: "SC" },
        { nome: "São Paulo", sigla: "SP" },
        { nome: "Sergipe", sigla: "SE" },
        { nome: "Tocantins", sigla: "TO" },
    ]

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className={cn("flex flex-col gap-6", className)}>
                    <Card>
                        <CardHeader>
                            <CardTitle>Registre sua loja</CardTitle>
                            <CardDescription>Aqui você pode registrar sua loja</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel>Digite o nome da loja</FieldLabel>
                                        <Input placeholder="Exemplo: Loja do seu Zé" required {...register("name")} />
                                    </Field>

                                    <Field>
                                        <FieldLabel>Digite o seu email</FieldLabel>
                                        <Input placeholder="Exemplo: loja@email.com" required {...register("email")} />
                                    </Field>

                                    <Field>
                                        <FieldLabel>Digite o cnpj da loja</FieldLabel>
                                        <Input placeholder="Exemplo: 00.394.460/0058-87" required {...register("cnpj")} />
                                    </Field>

                                    <Field>
                                        <FieldLabel>Categoria da loja</FieldLabel>
                                        <Input placeholder="Exemplo: Loja de roupa" required {...register("category")} />
                                    </Field>

                                    <Field>
                                        <FieldLabel>Cidade</FieldLabel>
                                        <Input placeholder="Exemplo: São Paulo" required {...register("city")} />
                                    </Field>

                                    <Field>
                                        <FieldLabel>Estado</FieldLabel>
                                        <Combobox items={estados.map(e => e.nome)} onValueChange={(nome) => {
                                            const est = estados.find(e => e.nome === nome)
                                        }}>
                                            <ComboboxInput placeholder="Selecione o estado" required {...register("state")} />
                                            <ComboboxContent>
                                                <ComboboxEmpty>Nenhum estado com esse nome</ComboboxEmpty>
                                                <ComboboxList>
                                                    {(item) => (
                                                        <ComboboxItem key={item} value={item}>
                                                            {item}
                                                        </ComboboxItem>
                                                    )}
                                                </ComboboxList>
                                            </ComboboxContent>
                                        </Combobox>
                                    </Field>
                                    <Field>
                                        <Button type="submit">Solicitar Cadastro</Button>
                                        <Button type="button" onClick={() => {
                                            router.back()
                                        }}>Voltar</Button>
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