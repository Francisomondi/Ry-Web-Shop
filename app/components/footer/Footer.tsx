import React from 'react'
import Container from '../container'
import FooterList from './FooterList'
import Link from 'next/link'
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle,AiFillInstagram,AiFillYoutube } from "react-icons/ai";


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-slate-700 text-slate-200 text-sm mt-16'>
        <Container>
            <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
                <FooterList>
                    <h3 className='text-base font-bold mb-2'>Categories</h3>
                    <Link href='#'>Beds</Link>
                    <Link href='#'>Tv Cabinets</Link>
                    <Link href='#'>Coffee tables</Link>
                    <Link href='#'>Shelves</Link>
                    <Link href='#'>Planters</Link>
                    <Link href='#'>Sofas</Link>
                    <Link href='#'>Stools</Link>
                    <Link href='#'>Study Desks</Link>
                    <Link href='#'>Dinning Sets</Link>
                    <Link href='#'>Wall Art</Link>
                </FooterList>
                <FooterList>
                    <h3 className='text-base font-bold mb-2'>Customer Service</h3>
                    <Link href='#'>Contact us</Link>
                    <Link href='#'>Delivery Policy</Link>
                    <Link href='#'>Returns & Exchanges</Link>
                    <Link href='#'>Watches</Link>
                    <Link href='#'>FAQs</Link>
                    
                </FooterList>
                <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                    <h3 className='text-base font-bold mb-2'>About Us</h3>
                    <p className='mb-2'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <p>&copy; {new Date().getFullYear()} Ry-Interior All rights reserved</p>
                </div>
                <FooterList>
                    <h3 className='text-base font-bold mb-2'>Follow us</h3>
                    <div className=''>
                        <Link href='https://www.facebook.com/RoyalPallets' className='flex' target='_blank'>
                            <MdFacebook size={24}/> Facebook
                        </Link>
                        <Link href='https://twitter.com/royal_pallets' className='flex mt-2' target='_blank'>
                            <AiFillTwitterCircle size={24}/> Twitter
                        </Link>
                        <Link href='https://www.instagram.com/royal.palletske/' className='flex mt-2' target='_blank'>
                            <AiFillInstagram size={24}/> Instagram
                        </Link>
                        <Link href='#' className='flex mt-2' target='_blank'>
                            <AiFillYoutube size={24}/> Youtube
                        </Link>
                    </div>
                </FooterList>

            </div>
        </Container>
    </div>
  )
}

export default Footer