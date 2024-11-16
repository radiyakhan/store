import Link from 'next/link'
import React from 'react'
import { GiShoppingCart } from 'react-icons/gi'

const Navbar = () => {
  return (
    <div>
      <header className="bg-red-300">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-red-800 mb-4 md:mb-0 font-serif ">
      <span className="md:ml-auto md:mr-auto text-xl font-bold">RK STORE</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-red-800">
      <Link href={"/"} className="mr-5 ml-5 hover:text-white cursor-pointer">HOME</Link>
      <Link href={"/shop"} className="mr-5 ml-5 hover:text-white">SHOP</Link>
      <Link href={"/contact"} className="mr-5 ml-5 hover:text-white">CONTACT</Link>
    </nav>
    <div className='mr-6 w-2 '>
    <GiShoppingCart className='text-xl text-red-900 ' />
    </div>
    <button className="inline-flex items-center bg-red-100 border-0 py-1 px-6 focus:outline-none hover:bg-red-200 text-base mt-4 md:mt-0 lg:mr-40 text-red-800">
      LOGIN
    </button>
     </div>
    </header>

    </div>
  )
}

export default Navbar
