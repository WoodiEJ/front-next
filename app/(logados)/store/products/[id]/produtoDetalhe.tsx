import { Product } from "@/db/products";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DetalheProdutoClient({ request }: { request: Product }) {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <Card>
                    <CardHeader>
                        <CardTitle>Detalhes solicitação</CardTitle>
                        <CardDescription>Aprove ou reprove a solicitação</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col gap-2">
                            <p><strong>Nome:</strong> {request.name}</p>
                            <p><strong>Categoria:</strong> {request.category}</p>
                            <p><strong>Status:</strong> {request.status}</p>
                            <p><strong>Quantidade:</strong> {request.quantity}</p>
                            <p><strong>Preço de compra:</strong> {request.cost_price} R$</p>
                            <p><strong>Preço de venda:</strong> {request.sale_price} R$</p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start gap-4">
                        <Button asChild>
                            <Link href="/store/products">
                                <ArrowLeft />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}