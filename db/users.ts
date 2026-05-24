export interface User {
    id: number
    name: string
    email: string
    password: string
    role: "admin" | "super-admin" | "store"
    status: boolean
    created_at: Date
    updated_at: Date
}

export const users: User[] = [
    {
        id: 1,
        name: "Admin Geral",
        email: "admin@email.com",
        password: "123456",
        role: "admin",
        status: true,
        created_at: new Date("2024-01-01"),
        updated_at: new Date("2024-01-01"),
    },
    {
        id: 2,
        name: "Super Admin",
        email: "superadmin@email.com",
        password: "123456",
        role: "super-admin",
        status: true,
        created_at: new Date("2024-02-01"),
        updated_at: new Date("2024-02-01"),
    },
    {
        id: 3,
        name: "Loja Centro",
        email: "loja@email.com",
        password: "123456",
        role: "store",
        status: true,
        created_at: new Date("2024-03-01"),
        updated_at: new Date("2024-03-01"),
    },
    {
        id: 4,
        name: "Admin Regional",
        email: "adminregional@email.com",
        password: "123456",
        role: "admin",
        status: false,
        created_at: new Date("2024-04-01"),
        updated_at: new Date("2024-04-01"),
    },
    {
        id: 5,
        name: "Loja Norte",
        email: "lojanorte@email.com",
        password: "123456",
        role: "store",
        status: true,
        created_at: new Date("2024-05-01"),
        updated_at: new Date("2024-05-01"),
    },
    {
        id: 6,
        name: "Loja Sul",
        email: "lojasul@email.com",
        password: "123456",
        role: "store",
        status: false,
        created_at: new Date("2024-06-01"),
        updated_at: new Date("2024-06-01"),
    },
]