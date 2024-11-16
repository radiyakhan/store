"use client";
import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect';
import img1 from "../../pics/pic1.jpg"


const Hero = () => {
  return (
    <div className='bg-red-300 h-screen w-screen'>
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex lg:px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-900 ml-10">
        Hi, What are you looking for?
      </h1>
      <p className="mb-3 leading-relaxed text-red-800 lg:ml-10">
      Discover a world of mouth-watering snacks, carefully selected for quality <br/>and taste. Our range includes:</p>
      <div className='mb-5 text-red-800 lg:ml-10'>
      <Typewriter
          options={{
            strings: ['Crunchy chips','Delicious biscuits','Sweet treats','Nutty delights','Pringles and more...'],
            autoStart: true,
            loop: true,
        }}
    />
      </div>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg lg:ml-10">
          SHOP NOW
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full  md:w-1/2 w-4/5">
      <Image alt="hero" src={img1} className='w-[350px] lg:h-[400px] rounded-tl-3xl rounded-br-3xl rounded-bl-[70px] rounded-tr-[70px]' />
    </div>
  </div>
</section>

    </div>
  )
}

export default Hero
