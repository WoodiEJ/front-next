'use client'

import { columnsStores } from "@/components/columnsStores";
import { DatasTable } from "@/components/table";
import { storesData } from "@/db/stores";

export default function Lojas() {
    const lojas = storesData

    return (
        <div className="flex p-8 gap-4 flex-col">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Lojas</h2>
            </div>
            <DatasTable columns={columnsStores} data={lojas} />
        </div>
    )
}