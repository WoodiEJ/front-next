import { cookies } from "next/headers";

export async function forgotPassword(data: {email: string}) {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value
    
}