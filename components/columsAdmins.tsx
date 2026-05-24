import { useSortable } from "@dnd-kit/sortable";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "./ui/button";
import { Eye, GripVerticalIcon, Pencil, Trash } from "lucide-react";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";
import { DeleteDialog } from "./deleteComponent";
import { deleteProduct } from "@/actions/products";
import { deleteUser } from "@/actions/admins";

interface User {
    id: number
    name: string
    email: string
    password: string
    role: "admin" | "super-admin" | "store"
    status: boolean
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

export const columnsAdmins: ColumnDef<User>[] = [
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
        cell: ({ row }) => (
            <Badge variant="outline" >
                {row.original.status ? "Ativo" : "Inativo"}
            </Badge >
        ),
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
        accessorKey: "created_at", header: "Criado Em",
        cell: ({ row }) => (
            <div className="w-32">
                <Badge variant="outline" className="px-1.5 text-muted-foreground">
                    {row.original.created_at.toLocaleDateString("pt-BR")}
                </Badge>
            </div>
        ),
    },
    {
        accessorKey: "updated_at", header: "Atualizado Em",
        cell: ({ row }) => (
            <div className="w-32">
                <Badge variant="outline" className="px-1.5 text-muted-foreground">
                    {row.original.updated_at.toLocaleDateString("pt-BR")}
                </Badge>
            </div>
        ),
    },
    {
        id: "acoes", header: "Ações",
        cell: ({ row }) => {
            const router = useRouter()
            return (
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" onClick={() => {
                        router.push(`/admin/admins/${row.original.id}`)
                    }}>
                        <Eye />
                    </Button>

                    <Button variant="ghost" size="icon" onClick={() => {
                        router.push(`/admin/admins/${row.original.id}/editar`)
                    }}>
                        <Pencil />
                    </Button>

                    <DeleteDialog onConfirm={() => deleteUser(row.original.id)} />
                </div>
            )
        }
    }
]