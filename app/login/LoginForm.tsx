'use client'

import { useState } from "react"
import Heading from "../components/Heading"
import Input from "../components/inputs/Input"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Button from "../components/Button"
import Link from "next/link"
import { AiOutlineGoogle } from "react-icons/ai"
import { signIn } from "next-auth/react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"




const LoginForm = () => {
    const router= useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const{register,handleSubmit,formState:{errors}} = useForm<FieldValues>({
        defaultValues:{
            email:'',
            password:'',
        }
    })

    const onSubmit:SubmitHandler<FieldValues> = (data)=>{
        setIsLoading(true)
        signIn('credentials',{
            ...data,
            redirect:false

        }).then((callback)=>{
            setIsLoading(false)
            
            if (callback?.ok) {
                router.push("/cart")
                router.refresh()
                toast.success('successfully logged in')
            }
            if (callback?.error) {
                toast.error(callback.error)
            }
        })
    }

return (
    <>
        <Heading title="Log In to Ry-Interior E-Shop"/>
        <Button 
        outline 
        label="Continue with Google"
        icon={AiOutlineGoogle}
        onClick={()=>{}}
        />
        <hr className="bg-slate-300 w-full h-px"/>
        
        <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="email"
        required
        />
        <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="password"
        required
        />
        <Button
        label={isLoading ? 'Loading' : 'Login'}
        onClick={handleSubmit(onSubmit)}/>
        <p className="text-sm">
            Do not have an account? <Link className="underline" href={'/register'}>sign Up</Link>
        </p>
    </>
)
}

export default LoginForm