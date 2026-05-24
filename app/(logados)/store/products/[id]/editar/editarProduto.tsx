'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Product } from "@/db/products";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import * as z from 'zod'

const schema = z.object({
    name: z.string(),
    category: z.string(),
    cost_price: z.number().positive(),
    sale_price: z.number().positive(),
    quantity: z.number().positive(),
}).required()

type FormData = z.infer<typeof schema>
export default function EditarProduto({ request }: { request: Product }) {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const onSubmit = (data: FormData) => {
        toast.success("Produto editado com sucesso.")
        router.push('/store/products')
    }

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Card>
                    <CardHeader>
                        <CardTitle>Editando</CardTitle>
                        <CardDescription>Edite o seu produto</CardDescription>
                    </CardHeader>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardContent>
                            <FieldGroup>
                                <Field>
                                    <Label>Nome</Label>
                                    <Input defaultValue={request.name} {...register("name")} />
                                    <p>{errors.name?.message}</p>
                                </Field>
                                <Field>
                                    <Label>Categoria</Label>
                                    <Input defaultValue={request.category} {...register("category")} />
                                    <p>{errors.category?.message}</p>
                                </Field>
                                <Field>
                                    <Label>Preço de custo</Label>
                                    <Input defaultValue={request.cost_price} {...register("cost_price", { valueAsNumber: true })} />
                                    <p>{errors.cost_price?.message}</p>
                                </Field>
                                <Field>
                                    <Label>Preço de venda</Label>
                                    <Input defaultValue={request.sale_price} {...register("sale_price", { valueAsNumber: true })} />
                                    <p>{errors.sale_price?.message}</p>
                                </Field>
                                <Field>
                                    <Label>Quantidade</Label>
                                    <Input defaultValue={request.quantity} {...register("quantity", { valueAsNumber: true })} />
                                    <p>{errors.quantity?.message}</p>
                                </Field>
                            </FieldGroup>
                        </CardContent>
                        <CardFooter>
                            <div className="flex justify-between w-full">
                                <Button type="button" variant="destructive" onClick={() => {
                                    router.push("/store/products")
                                }}>Cancelar</Button>
                                <Button type="submit">Editar</Button>
                            </div>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    )
}