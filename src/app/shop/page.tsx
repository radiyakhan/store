import Image from 'next/image'
import React from 'react'
import img8 from "../../../pics/pic8.jpg"
import img9 from "../../../pics/pic9.jpg"
import img10 from "../../../pics/pic10.jpg"
import img11 from "../../../pics/pic2.jpg"

const Products = () => {
  return (
    <div>
      <div className='text-center mt-10 text-red-800 text-4xl font-bold'>
        For You
      </div>
      <section className="text-red-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image alt="ok" src={img8}/>
        </a>
        <div className="mt-4">
          <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-red-800 title-font text-lg font-medium">
            Perk
          </h2>
          <p className="mt-1">30 Rs</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image className='w-60 ' alt="ok" src={img9}/>
        </a>
        <div className="mt-4">
          <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-red-800 title-font text-lg font-medium">
            Lolipops
          </h2>
          <p className="mt-1">15 Rs</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
        <Image className='h-60 w-60' alt="ok" src={img10}/>
        </a>
        <div className="mt-4">
          <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-red-800 title-font text-lg font-medium">
            Kurkure
          </h2>
          <p className="mt-1">20 Rs</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <Image alt='jelly' src={img11}/>
        </a>
        <div className="mt-4">
          <h3 className="text-red-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-red-800 title-font text-lg font-medium">
            Jellys
          </h2>
          <p className="mt-1">10 Rs</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Products
