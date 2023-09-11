import Image from 'next/image'
import React from 'react'
import { FaUserCircle } from "react-icons/fa";

type AvatarProps = {
    src?: string | null | undefined
}

const Avatar = ({src}: AvatarProps) => {

    if (src) {
        return (
            <Image src={src} alt='avatar pic' width={30} height={30} className='rounded-full'/>
        )   
    }
return (
    <FaUserCircle size={24}/>
)
}

export default Avatar