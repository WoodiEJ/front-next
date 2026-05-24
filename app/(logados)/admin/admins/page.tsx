'use client'

import { columnsStores } from "@/components/columnsStores";
import { columnsAdmins } from "@/components/columsAdmins";
import { DatasTable } from "@/components/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { storesData } from "@/db/stores";
import { users } from "@/db/users";
import { Controller, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import * as z from 'zod'
import { Combobox, ComboboxContent, ComboboxInput, ComboboxItem, ComboboxList } from "@/components/ui/combobox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const user = z.object({
    name: z.string(),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "A senha deve conter no minimo 6 caracteres"),
    role: z.string()
}).required()

type FormData = z.infer<typeof user>

export default function Admins() {
    const admins = users.filter(u => u.role === "admin" || "super-admin")
    const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>()
    const onSubmit = (data: FormData) => {
        toast.success("Usuario criado com sucesso.")
    }

    const roles = [
        { header: "Loja", value: "store" },
        { header: "Admin", value: "admin" },
        { header: "Super Admin", value: "super-admin" },
    ]

    return (
        <div className="flex p-8 gap-4 flex-col">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Admins</h2>
                <Dialog>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <DialogTrigger asChild>
                            <Button variant="outline" className="bg-blue-700">Criar novo usuario</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-sm">
                            <DialogHeader>
                                <DialogTitle>Crie um novo usuario</DialogTitle>
                                <DialogDescription>
                                    Preenche os campos e crie um usuario novo
                                </DialogDescription>
                            </DialogHeader>
                            <FieldGroup>
                                <Field>
                                    <Label>Nome</Label>
                                    <Input id="name" placeholder="Pedro Duarte" {...register("name")} />
                                    <p>{errors.name?.message}</p>
                                </Field>
                                <Field>
                                    <Label>Email</Label>
                                    <Input id="email" {...register("email")} placeholder="pedro@email.com" />
                                    <p>{errors.email?.message}</p>
                                </Field>
                                <Field>
                                    <Label>Senha</Label>
                                    <Input id="password" {...register("password")} placeholder="******" />
                                    <p>{errors.password?.message}</p>
                                </Field>
                                <Field>
                                    <Label>Role</Label>
                                    <Controller
                                        name="role"
                                        control={control}
                                        render={({ field }) => (
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Selecione o role do usuário" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {roles.map(r => (
                                                        <SelectItem key={r.value} value={r.value}>
                                                            {r.header}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        )}
                                    />
                                    <p>{errors.role?.message}</p>
                                </Field>
                            </FieldGroup>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline">Cancelar</Button>
                                </DialogClose>
                                <Button type="submit">Criar</Button>
                            </DialogFooter>
                        </DialogContent>
                    </form>
                </Dialog>
            </div>
            <DatasTable columns={columnsAdmins} data={admins} />
        </div>
    )
}