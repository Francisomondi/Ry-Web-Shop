'use client'

import { CartContextprovider } from "@/hooks/useCart"

type CartproviderProps = {
    children: React.ReactNode
}

const Cartprovider = ({children}: CartproviderProps) => {
return (
    <CartContextprovider>{children}</CartContextprovider>
)
}

export default Cartprovider