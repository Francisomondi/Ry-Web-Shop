import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { db } from "./db";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session:{
        strategy:'jwt'
    },
    pages: {
        signIn: '/sign-in'
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
    
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
            email: { label: "email", type: "text", placeholder: "jsmith@mail.com" },
            password: { label: "password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    throw new Error('invalid email or password')
                } 
            const existingUser = await db.user.findUnique({
                where: {email: credentials?.email}
            })
            if(!existingUser){
                throw new Error('invalid email or password')
            }
            const passwordMatch = await bcrypt.compare(credentials.password, existingUser.hashedPassword as string)
            if (!passwordMatch) {
                throw new Error('invalid email or password')
            }

            return existingUser
            }
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    
}
export default NextAuth(authOptions)