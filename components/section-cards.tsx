"use client"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { requestsData } from "@/db/requests"
import { users } from "@/db/users"

export function SectionCards() {
  const userData = users
  const qtdUser = userData.length
  const userAdmin = userData.filter(u => u.role === "admin").length
  const userSuperAdmin = userData.filter(u => u.role === "super-admin").length
  const userStore = userData.filter(u => u.role === "store").length
  const reqData = requestsData
  const qtdReqs = reqData.length
  const reqPendentes = reqData.filter(r => r.status === "pending").length

  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total de Usuarios</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {qtdUser}
          </CardTitle>
          <CardAction>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Admins - Super Admins - Lojas
          </div>
          <div className="flex gap-3 text-muted-foreground">
            Admin: {userAdmin} -- Super Admin: {userSuperAdmin} -- Loja: {userStore}
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Total de Solicitações</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {qtdReqs}
          </CardTitle>
          <CardAction>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Solicitações Pendentes
          </div>
          <div className="flex gap-3 text-muted-foreground">
            {reqPendentes}
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
