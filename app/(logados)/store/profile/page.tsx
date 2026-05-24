import { getUser } from "@/actions/user-get";
import { redirect } from "next/navigation";
import { ProfileClient } from "./profile";


export default async function Profile() {
    const user = await getUser()
    if (!user) redirect("/")

    return <ProfileClient user={user} />
}