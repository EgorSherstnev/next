import { authConfig } from "@/configs/auth"
import { Metadata } from "next"
import { getServerSession } from "next-auth"

export const metadata: Metadata = {
  title: 'About | Next App',
}

export default async function Profile() {
    const session = await getServerSession(authConfig)
   return (
    <div className="container">
      <h3>Profile of {session?.user?.name}</h3>
      {session?.user?.image && session.user.name && <img src={session.user.image} alt={session.user.name} />}
    </div>
   )
}