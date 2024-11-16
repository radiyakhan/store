import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { FiEye, FiMessageCircle } from 'react-icons/fi'

const Blog = () => {
  return (
    <div>
      <div className='text-center mt-10 text-red-800 text-4xl font-bold'>
        Best Selling
      </div>
      <section className="text-red-800 body-font">
  <div className="container px-2 lg:px-8 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/4  ml-2 lg:ml-20">
        <div className="h-full border-2 border-red-200 border-opacity-50 rounded-lg overflow-hidden">
          <Image alt='blog' src={require('../../pics/pic3.jpg')}/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-red-400 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-red-900 mb-3">
              CHIPS
            </h1>
            <p className="leading-relaxed mb-3">
              Explore our wide range of mouth-watering flavors, from classic salted to spicy and more..
            </p>
            <div className="flex items-center flex-wrap ">
              
              <div className='ml-auto gap-2 text-red-400 inline-flex items-center mr-4 text-sm pr-2 py-1 border-r-2 border-red-200'>
              <FiEye  /> 1.2k
              </div>
              
              <div className=' text-red-400 gap-2 inline-flex pr-3 items-center text-sm '>
              <FiMessageCircle />26
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="p-4 md:w-1/4 ml-2 lg:ml-20">
        <div className="h-full border-2 border-red-200 border-opacity-60 rounded-lg overflow-hidden ">
        <Image alt='blog' src={require('../../pics/pic6.jpg')}/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-red-400 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-red-900 mb-3">
              BISCUITS
            </h1>
            <p className="leading-relaxed mb-3">
              Discover a world of flavor in every bite of our delicious biscuits, like Chocolate, Nuts,Cream e.t.c
            </p>
            <div className="flex items-center flex-wrap ">
              <div className='ml-auto gap-2 text-red-400 inline-flex items-center mr-4 text-sm pr-2 py-1 border-r-2 border-red-200'>
              <FiEye  /> 975
              </div>
              
              <div className=' text-red-400 gap-2 inline-flex pr-3 items-center text-sm '>
              <FiMessageCircle />17
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="p-4 md:w-1/4 ml-2 lg:ml-20">
        <div className="h-full border-2 border-red-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image alt='blog' src={require('../../pics/pic7.jpg')}/>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-red-400 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-lg font-medium text-red-900 mb-3">
              SOFT DRINKS
            </h1>
            <p className="leading-relaxed mb-3">
              Find your new favourite Flavors among our extensive 
              collection of soft drinks and Juices and many more..
            </p>
            <div className="flex items-center flex-wrap ">
              <div className='ml-auto gap-2 text-red-400 inline-flex items-center mr-4 text-sm pr-2 py-1 border-r-2 border-red-200'>
              <FiEye  /> 1.8k
              </div>
              
              <div className=' text-red-400 gap-2 inline-flex pr-3 items-center text-sm '>
              <FiMessageCircle />34
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="inline-flex justify-center ml-32 lg:ml-[550px] mt-10 text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg  ">
          See More
          <FaArrowRightLong  className='ml-3 mt-1.5'/>
        </button>
      </div>

    </div>
  </div>
</section>

    </div>
  )
}

export default Blog
