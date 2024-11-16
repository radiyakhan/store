import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'
import { SiFacebook } from 'react-icons/si'

const Footer = () => {
  return (
    <div>
      <footer className="text-red-600 bg-red-300 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-red-900"> 
        <span className="ml-3 font-serif mt-6 text-xl"><strong>RK STORE</strong></span>
      </a>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-red-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-red-600 hover:text-red-800">Chips</a>
          </li>
          <li>
            <a className="text-red-600 hover:text-red-800">Biscuits</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-red-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-red-600 hover:text-red-800">Soft Drinks</a>
          </li>
          <li>
            <a className="text-red-600 hover:text-red-800">Juices</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-red-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-red-600 hover:text-red-800">Perk</a>
          </li>
          <li>
            <a className="text-red-600 hover:text-red-800">Lolipops</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-red-900 tracking-widest text-sm mb-3">
          CATEGORIES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-red-600 hover:text-red-800">Kurkure</a>
          </li>
          <li>
            <a className="text-red-600 hover:text-red-800">Jellys</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-red-300">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-red-500 text-sm text-center ml-8 font-serif sm:text-left">
       radiyakhan@gmail.com
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
      <Link 
      target='_blank'
      href={"https://www.instagram.com/radiya._.345?igsh=NzQ5MTZnMTNxN2lv"} className="text-red-500 text-xl ">
      <RiInstagramFill />
      </Link >
        
        <Link 
      target='_blank'
      href={'https://www.facebook.com/profile.php?id=100083278800324&mibextid=ZbWKwL'} className="ml-3 text-red-500  text-xl ">
      <SiFacebook />
      </Link >

      <Link 
      target='_blank'
      href={"https://www.linkedin.com/in/radiya-khan-133b112ba"} className="ml-3 text-red-500 text-xl ">
      <FaLinkedin />
      </Link >
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
