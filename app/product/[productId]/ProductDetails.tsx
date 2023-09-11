'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { Rating } from "@mui/material"
import Button from '@/app/components/Button'
import ProductImage from '@/app/components/products/ProductImage'
import SetColor from '@/app/components/products/SetColor'
import { useCart } from '@/hooks/useCart'
import { MdCheckCircle } from 'react-icons/md'
import { useRouter } from 'next/navigation'

type productDetailsProps = {
    product:any
}

export type CartProductType={
    id: string
    name: string
    description: string
    category: string
    brand: string
    selectedImage: SelectedImgType 
    quantity: number
    price: number
}

export type SelectedImgType ={
    color: string
    colorCode: string
    image: string
}
const Horizontal= ()=>{
    return (
        <hr className='w-[30%] my-2'/>
    )
}

const ProductDetails = ({product}: productDetailsProps) => {

    const {handleAddProductToCart,cartProducts} = useCart()
    const [isProductInCart, setIsProductInCart] = useState(false)
    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id: product.id,
        name: product.name,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImage: {...product.images[0]},
        quantity: 1,
        price: product.price
    })
    const router = useRouter()
    console.log(cartProducts)

    useEffect(() => {
    setIsProductInCart(false)

    if (cartProducts) {
        const existingIndex = cartProducts.findIndex((item)=> item.id === product.id)
        if (existingIndex> -1) {
            setIsProductInCart(true)
        }
    }
    
    }, [cartProducts])
    

    const productRating= product.reviews.reduce((acc:number,item:any)=>
    item.rating + acc,0)/product.reviews.length


    const handleColorSelect= useCallback((value:SelectedImgType)=>{
        setCartProduct((prev)=>{
            return {...prev, selectedImage:value}
        })
    }
    ,[cartProduct.selectedImage])

return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-12'>
        <ProductImage cartProduct={cartProduct} product={product} handleColorSelect={handleColorSelect}/>
        <div className='flex flex-col gap-1 text-slate-500 text-sm' >
            <h2 className='text-3xl font-medium text-slate-700'>{product.name}</h2>
            <div className='flex items-center gap-2'>
                <Rating value={productRating} readOnly/>
                <div>{product.reviews.length} reviews</div>             
            </div>
            <Horizontal/>
            <div className='text-justify'>{product.description}</div>
            <Horizontal/>
            <div>
                <span className='font-semibold'>CATEGORY:</span> {product.category}
            </div>
            <div>
                <span className='font-semibold'>BRAND:</span> {product.brand}
            </div>
            <div className={product.inStock? 'text-teal-400': 'text-rose-400'}>
                {product.inStock? 'In stock': 'Out of stock'}
            </div>
            <Horizontal/>
            {isProductInCart ? (
            <>
                <p className='mb-2 text-slate-500 flex items-center gap-1'>
                <MdCheckCircle className={'text-teal-400'} size={20} />
                    <span>product Added to cart</span>
                </p>

                <div className='max-w-[300px]'>
                    <Button label='View Cart' outline onClick={()=>router.push('/cart')}/>
                </div>
            </>) : (
            <>
                <SetColor cartProduct={cartProduct} images={product.images} handleColorSelect={handleColorSelect}/>
                <Horizontal/>
                <div>Quality</div>
                <Horizontal/>
                <div className='max-w-[300px]'>
                    <Button 
                    label='Add to Cart'
                    onClick={()=>handleAddProductToCart(cartProduct)}/>
                </div>
            </>)}
           
        </div>
    </div>
)
}

export default ProductDetails