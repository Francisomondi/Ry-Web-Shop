import bcrypt from 'bcrypt'
import  db  from "@/lib/db"
import { NextResponse } from "next/server"
import * as z from 'zod';


//define schema for input validation
{/*
const userSchema = z.object({
    name: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have atleast 8 characters'),
});
*/}


export async function POST(request: Request){
    const body = await request.json()
    const {email,name,password} = body

    const hashedPassword = await bcrypt.hash(password,10)

    //create user
    const user = await db.user.create({
        data:{
            name,email,hashedPassword
        }
    })

    return NextResponse.json(user)
}