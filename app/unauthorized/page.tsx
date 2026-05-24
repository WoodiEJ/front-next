import { Button } from "@/components/ui/button";
import { ShieldXIcon } from "lucide-react";
import Link from "next/link";

export default function UnauthorizedPage() {
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-6">
                    <ShieldXIcon className="size-12 text-destructive" />
                    <h1 className="text-2xl font-semibold">Acesso negado</h1>
                    <p className="text-muted-foreground">Você não tem permissão para acessar esta página.</p>
                    <Button variant="outline">
                        <Link href="/">Voltar ao login</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}