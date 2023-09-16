'use client'
import { formatPrice } from '@/utils/formatPrice'
import React from 'react'
import { CartProductType } from '../product/[productId]/ProductDetails'
import Link from 'next/link'
import { trancateText } from '@/utils/truncateText'
import Image from 'next/image'

type ItemContentProps = {
  item: CartProductType
}

const ItemContent = ({item}: ItemContentProps) => {
  return (
    <div className='grid
    grid-cols-5
    text-xs
    md:text-sm
    gap-4
    border-t-[1.5px]
    border-slate-500
    py-4
    items-center'>
      <div className='col-span-2 justify-self-start flex gap-2 md:gap-4'>
        <Link href={`/product/${item.id}`}>
          <div className='relative w-[70px] aspect-square'>
            <Image src={item.selectedImage.image} fill alt={item.selectedImage.color} className='object-contain'/>
          </div>
        </Link>
        <div className='flex flex-col justify-between'>
          <Link href={`/product/${item.id}`}>
            {trancateText(item.name)}
          </Link>
          <div>{item.selectedImage.color}</div>
          <div className='w-[70px]'>
            <button className='text-slate-500 underline' onClick={()=>{}}>Remove</button>
          </div>
        </div>
      </div>
      <div className='justify-self-center'>{formatPrice(item.price)}</div>
      <div className='justify-self-center'>
        {/** <setQuantity 
        cartCounter={true}
        cartProduct={item}
        handleQuantityIncrease={()=>{}}
        handleQuantityDecrease={()=>{}}/>
        */}
        
      </div>
      <div className='justify-self-end font-semibold'>{formatPrice(item.price * item.quantity)}</div>
    </div>
  )
}

export default ItemContent