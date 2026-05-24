export interface Store {
    id: number
    user_id: string
    cnpj: string
    name: string
    email: string
    category: string
    status: "approved" | "inactive"
    country: string
    state: string
    city: string
    created_at: Date
    updated_at: Date
}

export const storesData: Store[] = [
    {
        id: 1,
        user_id: "3",
        cnpj: "12.345.678/0001-90",
        name: "Loja do João",
        email: "joao@loja.com",
        category: "Vestuário",
        status: "approved",
        country: "Brasil",
        state: "SP",
        city: "São Paulo",
        created_at: new Date("2024-01-10"),
        updated_at: new Date("2024-01-10"),
    },
    {
        id: 2,
        user_id: "4",
        cnpj: "98.765.432/0001-11",
        name: "Mercado da Maria",
        email: "maria@mercado.com",
        category: "Alimentação",
        status: "approved",
        country: "Brasil",
        state: "RJ",
        city: "Rio de Janeiro",
        created_at: new Date("2024-02-15"),
        updated_at: new Date("2024-02-16"),
    },
    {
        id: 3,
        user_id: "5",
        cnpj: "11.222.333/0001-44",
        name: "Tech Store RS",
        email: "contato@techstore.com",
        category: "Tecnologia",
        status: "inactive",
        country: "Brasil",
        state: "RS",
        city: "Porto Alegre",
        created_at: new Date("2024-03-01"),
        updated_at: new Date("2024-03-02"),
    },
    {
        id: 4,
        user_id: "6",
        cnpj: "55.666.777/0001-88",
        name: "Farmácia Saúde",
        email: "farmacia@saude.com",
        category: "Farmácia",
        status: "approved",
        country: "Brasil",
        state: "MG",
        city: "Belo Horizonte",
        created_at: new Date("2024-04-05"),
        updated_at: new Date("2024-04-05"),
    },
    {
        id: 5,
        user_id: "7",
        cnpj: "33.444.555/0001-22",
        name: "Pet Shop Amigo Fiel",
        email: "petshop@amigofiel.com",
        category: "Pet Shop",
        status: "inactive",
        country: "Brasil",
        state: "PR",
        city: "Curitiba",
        created_at: new Date("2024-05-20"),
        updated_at: new Date("2024-05-20"),
    },
]