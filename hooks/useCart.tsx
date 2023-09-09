import { createContext, useContext, useState } from "react";

type CartContextType = {
    cartTotalQuantity: number
}

type Props = {
    [propName:string]:any
}

export const CartContext= createContext<CartContextType | null>(null)

export const CartContextprovider = (props:Props) => {
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0)

    const value = {
        cartTotalQuantity
    }

    return(
        <CartContext.Provider value={value} {...props}/>
    )
} 
export const useCart = ()=>{
    const context = useContext(CartContext)
    if (context === null) {
        throw new Error('useCart should be used with a CartContextProvider')
    }
    return context
}