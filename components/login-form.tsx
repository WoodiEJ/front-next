'use client'

import { cn } from "@/lib/utils"
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
import Link from "next/link"
import * as z from 'zod'
import { useForm } from "react-hook-form"
import { login } from "@/actions/login"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { parseJwtPayload } from "@/lib/jwt"
import req from 'next/server'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "A password deve conter no minimo 6 caracteres.")
}).required()

type FormData = z.infer<typeof schema>

export function Login({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
  const router = useRouter()
  const onSubmit = async (data: any) => {
    const result = await login(data)

    if (result.success) {
      if (result.role === "store") {
        if (result.status === true) {
          toast.success("Logado com sucesso!", {
            description: "Vamos te levar ao sistema."
          })
          router.push("/store/dashboard")
        } else {
          toast.error("Sua loja está reprovada")
        }
      } else {
        toast.success("Logado com sucesso!", {
          description: "Vamos te levar ao sistema."
        })
        router.push("/admin/dashboard")
      }
    } else {
      toast.warning("Credenciais inválidos.")
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Logar na sua conta</CardTitle>
          <CardDescription>
            Coloque seu email e senha
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
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Senha</FieldLabel>
                  <a
                    href="/forgot-password"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
                <Input id="password" type="password" {...register("password")} placeholder="******" required />
                <p>{errors.password?.message}</p>
              </Field>
              <Field>
                <Button type="submit">Login</Button>
                <FieldDescription className="text-center">
                  Não possui uma conta? <Link href="/register">Cadastre-se</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
