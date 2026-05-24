import { useSortable } from "@dnd-kit/sortable";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "./ui/button";
import { Eye, GripVerticalIcon } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { requestsData } from "@/db/requests";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";

interface Request {
    id: number
    status: "pending" | "approved" | "rejected"
    name: string
    email: string
    cnpj: string
    category: string
    country: string
    state: string
    city: string
    created_at: Date
    updated_at: Date
}

function DragHandle({ id }: { id: number }) {
    const { attributes, listeners } = useSortable({
        id,
    })

    return (
        <Button
            {...attributes}
            {...listeners}
            variant="ghost"
            size="icon"
            className="size-7 text-muted-foreground hover:bg-transparent"
        >
            <GripVerticalIcon className="size-3 text-muted-foreground" />
            <span className="sr-only">Arraste para reogarnizar</span>
        </Button>
    )
}

export const columnsRequest: ColumnDef<Request>[] = [
    {
        accessorKey: "id", header: "ID",
        cell: ({ row }) => (
            <div className="w-32">
                <Badge variant="outline" className="px-1.5 text-muted-foreground">
                    {row.original.id}
                </Badge>
            </div>
        ),
    },
    {
        accessorKey: "status", header: "Status",
        cell: ({ row }) => {
            const status = {
                pending: "Aguardando Aprovação",
                approved: "Aprovado",
                rejected: "Reprovado",
            }
            return (
                <Badge variant="outline">
                    {status[row.original.status]}
                </Badge>
            )
        },
    },
    {
        accessorKey: "name", header: "Nome",
        cell: ({ row }) => (
            <div className="w-32">
                <Badge variant="outline" className="px-1.5 text-muted-foreground">
                    {row.original.name}
                </Badge>
            </div>
        ),
    },
    {
        accessorKey: "email", header: "Email",
        cell: ({ row }) => (
            <div className="w-32">
                <Badge variant="outline" className="px-1.5 text-muted-foreground">
                    {row.original.email}
                </Badge>
            </div>
        ),
    },
    {
        accessorKey: "cnpj", header: "Cnpj",
        cell: ({ row }) => (
            <div className="w-32">
                <Badge variant="outline" className="px-1.5 text-muted-foreground">
                    {row.original.cnpj}
                </Badge>
            </div>
        ),
    },
    {
        accessorKey: "category", header: "Categoria",
        cell: ({ row }) => (
            <div className="w-32">
                <Badge variant="outline" className="px-1.5 text-muted-foreground">
                    {row.original.category}
                </Badge>
            </div>
        ),
    },
    {
        accessorKey: "country", header: "País",
        cell: ({ row }) => (
            <div className="w-32">
                <Badge variant="outline" className="px-1.5 text-muted-foreground">
                    {row.original.country}
                </Badge>
            </div>
        ),
    },
    {
        accessorKey: "state", header: "Estado",
        cell: ({ row }) => (
            <div className="w-32">
                <Badge variant="outline" className="px-1.5 text-muted-foreground">
                    {row.original.state}
                </Badge>
            </div>
        ),
    },
    {
        accessorKey: "city", header: "Cidade",
        cell: ({ row }) => (
            <div className="w-32">
                <Badge variant="outline" className="px-1.5 text-muted-foreground">
                    {row.original.city}
                </Badge>
            </div>
        ),
    },
    {
        accessorKey: "created_at", header: "Criado Em",
        cell: ({ row }) => (
            <div className="w-32">
                <Badge variant="outline" className="px-1.5 text-muted-foreground">
                    {dayjs(row.original.created_at).format("DD/MM/YYYY")}
                </Badge>
            </div>
        ),
    },
    {
        accessorKey: "updated_at", header: "Atualizado Em",
        cell: ({ row }) => (
            <div className="w-32">
                <Badge variant="outline" className="px-1.5 text-muted-foreground">
                    {dayjs(row.original.updated_at).format("DD/MM/YYYY")}
                </Badge>
            </div>
        ),
    },
    {
        accessorKey: "acoes", header: "Ações",
        cell: ({ row }) => {
            const router = useRouter()
            return (
                <Button variant="ghost" size="icon" onClick={() => router.push(`/admin/requests/${row.original.id}`)}>
                    <Eye className="size-4" />
                </Button>
            )
        }
    },
]