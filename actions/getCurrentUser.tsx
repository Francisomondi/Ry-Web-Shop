import { authOptions } from "@/lib/auth";
import db from "@/lib/db";
import { getServerSession } from "next-auth";


export async function getSession () {
  return await getServerSession(authOptions)
}

export async function getCurrentUser(){
    try {
        const session = await getSession()
        if (!session?.user?.email) {
            return null
        }
        const currentUser = await db.user.findUnique({
            where: {
                email: session?.user?.email
            },
            
        })
        if (!currentUser) {
            return null
        }

        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified?.toString() || null
        }
    } catch (error: any) {
        console.log(error)
        return null
    }
}

