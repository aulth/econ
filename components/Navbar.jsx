import React from 'react'
import Link from 'next/link'
import '@animxyz/core'
const Navbar = () => {
  return (
    <>
    <nav className='container flex items-center justify-between px-4 py-2 mx-auto text-xl'>
        <Link href={'/'}>
        <div className='flex justify-center items-center xyz-in' xyz="fade flip-up">
            <img src="/images/logo.png" className='w-10' alt="" />
            <h2 className='text-2xl font-[electrolize] font-semibold ml-1'>ECON</h2>
        </div></Link>
        <div className="md:block hidden px-2 xyz-in ">
            <ul className='flex items-center ' xyz="fade flip-down stagger duration-10 ease-out-back">
                <Link href={"/about"}><li className='md:px-3 px-2 cursor-pointer hover:text-white xyz-nested'>About Us</li></Link>
                <Link href={"/contact"}><li className='md:px-3 px-2 cursor-pointer hover:text-white xyz-nested'>Contact</li></Link>
                <Link href={"/technology"}><li className='md:px-3 px-2 cursor-pointer hover:text-white xyz-nested'>Technologies</li></Link>
                <Link href={"/disclaimer"}><li className='md:px-3 px-2 cursor-pointer hover:text-white xyz-nested'>Disclaimer</li></Link>
            </ul>
        </div>
        <div>
            <Link href={"/sendemail"}><button className='  hover:text-white '>Send Mail</button></Link>
        </div>
    </nav>
    </>
  )
}

export default Navbar