import { SiteHeader } from "@/components/site-header"
import { SectionCardsStore } from "@/components/section-cards-store"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { products } from "@/db/products"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import dayjs from "dayjs"

export default function Page() {
  const prod = products
  const prodRecentes = [...prod].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, 5)

  return (
    <div>
      <SiteHeader />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCardsStore />
            <Card className="@container/card">
              <CardHeader>
                <CardTitle>Produtos Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-3">
                  {prodRecentes.map(p => (
                    <div key={p.id} className="flex items-center justify-between border-b pb-2 last:border-0">
                      <span className="font-medium">{p.name}</span>
                      <div className="flex items-center gap-4">
                        <Badge variant="outline">{p.status === "active" ? "Ativo" : "Inativo"}</Badge>
                        <span className="text-muted-foreground text-sm">
                          {dayjs(p.created_at).format("DD/MM/YYYY")}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
