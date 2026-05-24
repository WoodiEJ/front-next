export interface Request {
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

export const requestsData: Request[] = [
    {
        id: 1,
        status: "pending",
        name: "Loja do João",
        email: "joao@loja.com",
        cnpj: "12.345.678/0001-90",
        category: "Vestuário",
        country: "Brasil",
        state: "SP",
        city: "São Paulo",
        created_at: new Date("2024-01-10"),
        updated_at: new Date("2024-01-10"),
    },
    {
        id: 2,
        status: "approved",
        name: "Mercado da Maria",
        email: "maria@mercado.com",
        cnpj: "98.765.432/0001-11",
        category: "Alimentação",
        country: "Brasil",
        state: "RJ",
        city: "Rio de Janeiro",
        created_at: new Date("2024-02-15"),
        updated_at: new Date("2024-02-16"),
    },
    {
        id: 3,
        status: "rejected",
        name: "Tech Store RS",
        email: "contato@techstore.com",
        cnpj: "11.222.333/0001-44",
        category: "Tecnologia",
        country: "Brasil",
        state: "RS",
        city: "Porto Alegre",
        created_at: new Date("2024-03-01"),
        updated_at: new Date("2024-03-02"),
    },
    {
        id: 4,
        status: "pending",
        name: "Farmácia Saúde",
        email: "farmacia@saude.com",
        cnpj: "55.666.777/0001-88",
        category: "Farmácia",
        country: "Brasil",
        state: "MG",
        city: "Belo Horizonte",
        created_at: new Date("2024-04-05"),
        updated_at: new Date("2024-04-05"),
    },
    {
        id: 5,
        status: "pending",
        name: "Pet Shop Amigo Fiel",
        email: "petshop@amigofiel.com",
        cnpj: "33.444.555/0001-22",
        category: "Pet Shop",
        country: "Brasil",
        state: "PR",
        city: "Curitiba",
        created_at: new Date("2024-05-20"),
        updated_at: new Date("2024-05-20"),
    },
]