export interface Product {
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

export const products: Product[] = [
    {
        id: 1,
        store_id: "1",
        name: "Camiseta Básica",
        category: "Vestuário",
        cost_price: 25.00,
        sale_price: 59.90,
        status: "active",
        quantity: 150,
        created_at: new Date("2024-01-10"),
        updated_at: new Date("2024-01-10"),
    },
    {
        id: 2,
        store_id: "1",
        name: "Calça Jeans",
        category: "Vestuário",
        cost_price: 60.00,
        sale_price: 149.90,
        status: "active",
        quantity: 80,
        created_at: new Date("2024-01-15"),
        updated_at: new Date("2024-01-15"),
    },
    {
        id: 3,
        store_id: "2",
        name: "Arroz 5kg",
        category: "Alimentação",
        cost_price: 12.00,
        sale_price: 22.90,
        status: "inactive",
        quantity: 300,
        created_at: new Date("2024-02-01"),
        updated_at: new Date("2024-02-01"),
    },
    {
        id: 4,
        store_id: "2",
        name: "Feijão 1kg",
        category: "Alimentação",
        cost_price: 6.00,
        sale_price: 11.90,
        status: "active",
        quantity: 250,
        created_at: new Date("2024-02-05"),
        updated_at: new Date("2024-02-05"),
    },
    {
        id: 5,
        store_id: "3",
        name: "Notebook Lenovo",
        category: "Tecnologia",
        cost_price: 2200.00,
        sale_price: 3499.90,
        status: "active",
        quantity: 20,
        created_at: new Date("2024-03-10"),
        updated_at: new Date("2024-03-10"),
    },
    {
        id: 6,
        store_id: "3",
        name: "Mouse Sem Fio",
        category: "Tecnologia",
        cost_price: 35.00,
        sale_price: 89.90,
        status: "inactive",
        quantity: 60,
        created_at: new Date("2024-03-15"),
        updated_at: new Date("2024-03-15"),
    },
]