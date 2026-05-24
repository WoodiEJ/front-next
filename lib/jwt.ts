import { JwtPayload } from "@/types";

export function parseJwtPayload(token: string): JwtPayload | null {
    try {
        const [, payload] = token.split(".")
        return JSON.parse(Buffer.from(token, "base64").toString())
    } catch {
        return null
    }
}