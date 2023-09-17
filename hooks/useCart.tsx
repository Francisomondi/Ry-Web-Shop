import { CartProductType } from "@/app/product/[productId]/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

type CartContextType = {
    cartTotalQuantity: number
    cartProducts: CartProductType[] | null
    handleAddProductToCart: (product: CartProductType)=> void
    handleRemoveItemFromCart: (product: CartProductType)=> void
    handleClearCart: ()=>void
}

type Props = {
    [propName:string]:any
}

export const CartContext= createContext<CartContextType | null>(null)

export const CartContextprovider = (props:Props) => {
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0)
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null)
    const [cartTotalAmount, setCartTotalAmount] = useState(0)

    console.log('Qty', cartTotalQuantity)
    console.log('Amount', cartTotalAmount)
    
    useEffect(() => {
    const cartItems: any = localStorage.getItem('eShopCartItems')
    const cProducts: CartProductType[] | null = JSON.parse(cartItems)
    setCartProducts(cProducts)
    
    }, [])
    useEffect(() => {
        const getTotals =()=>{
            if (cartProducts) {
                const {total,qty} = cartProducts?.reduce((acc,item)=>{
                    const itemTotal= item.price * item.quantity
                    acc.total += itemTotal
                    acc.qty += item.quantity
    
                    return acc
                },{
                    total: 0,
                    qty: 0
                })

                setCartTotalQuantity(qty)
                setCartTotalAmount(total)
            }
        }
        getTotals()
    
    }, [cartProducts])

    
    
    
    const handleAddProductToCart = useCallback((product:CartProductType) => {
        setCartProducts((prev)=>{
            let updatedCart 
            if (prev) {
                updatedCart = [...prev, product]
            }else {
                updatedCart = [product]
            }
            toast.success('Item Added to Cart Successfully')
            localStorage.setItem('eShopCartItems', JSON.stringify(updatedCart))

            return updatedCart
        })
    },
    [],
    )

    const handleRemoveItemFromCart= useCallback((product:CartProductType)=>{

        if(cartProducts){
            const filteredProducts = cartProducts.filter((item)=>{
                return item.id !== product.id    
            })

            setCartProducts(filteredProducts)
            toast.success('Item Removed from Cart Successfully')
            localStorage.setItem('eShopCartItems', JSON.stringify(filteredProducts))
        }
    },[cartProducts])

    const handleClearCart= useCallback(()=>{
        setCartProducts(null)
        setCartTotalQuantity(0)
        toast.success('Cart cleared Successfully')
        localStorage.setItem('eShopCartItems', JSON.stringify(null))
        
    },[cartProducts])
    
    const value = {
        cartTotalQuantity,
        cartProducts,
        handleAddProductToCart,
        handleRemoveItemFromCart,
        handleClearCart
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