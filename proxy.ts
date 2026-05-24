import { NextRequest, NextResponse } from "next/server"
import { parseJwtPayload } from "./lib/jwt"

const ADMIN_PATHS = ["/admin"]
const SUPERADMIN_PATHS = ["/super-admin"]
const STORE_PATHS = ["/store"]

export function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl
    const isAdminPath = ADMIN_PATHS.some((p) => pathname.startsWith(p))
    const isSuperAdminPath = SUPERADMIN_PATHS.some((p) => pathname.startsWith(p))
    const isStorePath = STORE_PATHS.some((p) => pathname.startsWith(p))

    if (!isAdminPath && !isSuperAdminPath && !isStorePath) {
        return NextResponse.next()
    }

    const token = req.cookies.get("token")?.value

    if (!token) {
        return NextResponse.redirect(new URL("/", req.url))
    }

    const payload = parseJwtPayload(token)

    if (!payload) {
        const response = NextResponse.redirect(new URL("/", req.url))
        response.cookies.delete("token")
        return response
    }

    if (isAdminPath && payload.role === "store") {
        return NextResponse.redirect(new URL("/unauthorized", req.url))
    }

    if (isStorePath && payload.role === "admin") {
        return NextResponse.redirect(new URL("/unauthorized", req.url))
    }

    if (isStorePath && (payload.role === "admin" || payload.role === "super-admin")) {
        return NextResponse.redirect(new URL("/unauthorized", req.url))
    }

    if (pathname === "/" && token && payload) {
        if (payload.role === "store") {
            return NextResponse.redirect(new URL("/store/dashboard", req.url))
        }
        return NextResponse.redirect(new URL("/admin/dashboard", req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/admin/:path*",
        "/store/:path*"
    ]
}