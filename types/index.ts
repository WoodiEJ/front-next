export interface Product {
    id: string
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

export interface LoginResponse {
    token: string
}

export interface JwtPayload {
    id: number
    role: "admin" | "super-admin" | "store"
}