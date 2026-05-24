import { useSortable } from "@dnd-kit/sortable";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "./ui/button";
import { Eye, GripVerticalIcon, Pencil, Trash } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { DeleteDialog } from "./deleteComponent";
import { deleteProduct } from "@/actions/products";

interface Product {
    id: number
    store_id: string
    name: string
    category: string
    cost_price: number
    sale_price: number
    status: "active" | "inactive"
    quantity: number
    created_at: Date
    updated_at: Date
}

export const columnsProducts: ColumnDef<Product>[] = [
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
                active: "Ativo",
                inactive: "Inativo",
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
            <Badge variant="outline">
                {row.original.status}
            </Badge>
        )
        ,
    },
    {
        accessorKey: "sale_price", header: "Preço",
        cell: ({ row }) => (
            <Badge variant="outline">
                {row.original.sale_price}
            </Badge>
        )
        ,
    },
    {
        accessorKey: "quantity", header: "Estoque",
        cell: ({ row }) => (
            <Badge variant="outline">
                {row.original.quantity}
            </Badge>
        )
        ,
    },
    {
        accessorKey: "created_at", header: "Criado Em",
        cell: ({ row }) => (
            <Badge variant="outline">
                {dayjs(row.original.created_at).format("DD/MM/YYYY")}
            </Badge>
        )
        ,
    },
    {
        accessorKey: "updated_at", header: "Atualizado Em",
        cell: ({ row }) => (
            <Badge variant="outline">
                {dayjs(row.original.updated_at).format("DD/MM/YYYY")}
            </Badge>
        )
        ,
    },
    {
        id: "acoes", header: "Ações",
        cell: ({ row }) => {
            const router = useRouter()
            return (
                <div>
                    <Button variant="ghost" size="icon" onClick={() => {
                        router.push(`/store/products/${row.original.id}`)
                    }}>
                        <Eye />
                    </Button>

                    <Button variant="ghost" size="icon" onClick={() => {
                        router.push(`/store/products/${row.original.id}/editar`)
                    }}>
                        <Pencil />
                    </Button>

                    <DeleteDialog onConfirm={() => deleteProduct(row.original.id)} />
                </div>
            )
        }
    }
]