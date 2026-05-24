'use client'

import { columnsProducts } from "@/components/columsProducts";
import { DatasTable } from "@/components/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products } from "@/db/products";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
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

export default function Produtos() {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
    const onSubmit = (data: FormData) => {
        toast.success("Produto cadastrado com sucesso.")
    }

    return (
        <div className="flex p-8 gap-4 flex-col">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Produtos</h2>
                <Dialog>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="bg-blue-700">Novo Produto</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-sm">
                            <DialogHeader>
                                <DialogTitle>Cadastrando um novo produto</DialogTitle>
                                <DialogDescription>Preenche os campos pra criar um novo produto</DialogDescription>
                            </DialogHeader>
                            <FieldGroup>
                                <Field>
                                    <Label>Nome</Label>
                                    <Input placeholder="Nome do produto" {...register("name")} />
                                    <p>{errors.name?.message}</p>
                                </Field>
                                <Field>
                                    <Label>Categoria</Label>
                                    <Input placeholder="Categoria do produto" {...register("category")} />
                                    <p>{errors.category?.message}</p>
                                </Field>
                                <Field>
                                    <Label>Preço de custo</Label>
                                    <Input placeholder="Quanto custou esse produto?" {...register("cost_price", { valueAsNumber: true })} />
                                    <p>{errors.cost_price?.message}</p>
                                </Field>
                                <Field>
                                    <Label>Preço de venda</Label>
                                    <Input placeholder="Quer vender esse produto por quanto?" {...register("sale_price", { valueAsNumber: true })} />
                                    <p>{errors.sale_price?.message}</p>
                                </Field>
                                <Field>
                                    <Label>Quantidade</Label>
                                    <Input placeholder="Quantidade do produto" {...register("quantity", { valueAsNumber: true })} />
                                    <p>{errors.quantity?.message}</p>
                                </Field>
                            </FieldGroup>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline">Cancelar</Button>
                                </DialogClose>
                                <Button type="submit">Cadastrar</Button>
                            </DialogFooter>
                        </DialogContent>
                    </form>
                </Dialog>
            </div>
            <DatasTable columns={columnsProducts} data={products} />
        </div>
    )
}