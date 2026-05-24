'use client'

import { columnsRequest } from "@/components/columsRequest";
import { DatasTable } from "@/components/table";
import { requestsData } from "@/db/requests";

export default function Request() {
    const requests = requestsData

    return (
        <div className="flex p-8 gap-4 flex-col">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Solicitações</h2>
            </div>
            <DatasTable columns={columnsRequest} data={requests} />
        </div>
    )
}