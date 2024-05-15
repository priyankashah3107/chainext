"use client";
import React from 'react'
import { BackgroundGradient } from './ui/background-gradient';
import { IconAppWindow } from "@tabler/icons-react";
import Image from 'next/image';
export const FeatureCourses = () => {
  return (
      <> 
      <div className='bg-gray-900 mt-20 '>
        <div className='text-center mb-20 p-20'>
        <h1>Features Card</h1>
        <p>Popular Courses</p>
        </div>
        <div className='grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 justify-center items-center md:px-0  px-10 md:mx-10 lg:px-44 lg:mx-20 mx-10 gap-4'>
        <BackgroundGradient className='rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 '>
           <Image src={'/mic.png'} 
           alt='img'
           height="400"
           width="400"
           className="object-contain "/>
           <p>Advanced Vocal Techniques</p>
           <p>Enhance your singing with advanced vocal techniques for intermediate to advanced learners.</p>
           
           <div>
            <button className='bg-gray-600  w-[130px] h-[55px] rounded-full mt-10'>Buy Now</button>
           </div>
        </BackgroundGradient>
        
        <BackgroundGradient className='rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 '>
           <Image src={'/mic.png'} 
           alt='img'
           height="400"
           width="400"
           className="object-contain "/>
           <p>Advanced Vocal Techniques</p>
           <p>Enhance your singing with advanced vocal techniques for intermediate to advanced learners.</p>
           
           <div>
            <button className='bg-gray-600  w-[130px] h-[55px] rounded-full mt-10'>Buy Now</button>
           </div>
        </BackgroundGradient>

        <BackgroundGradient className='rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 '>
           <Image src={'/mic.png'} 
           alt='img'
           height="400"
           width="400"
           className="object-contain "/>
           <p>Advanced Vocal Techniques</p>
           <p>Enhance your singing with advanced vocal techniques for intermediate to advanced learners.</p>
           
           <div>
            <button className='bg-gray-600  w-[130px] h-[55px] rounded-full mt-10'>Buy Now</button>
           </div>
        </BackgroundGradient>
        <BackgroundGradient className='rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 '>
           <Image src={'/mic.png'} 
           alt='img'
           height="400"
           width="400"
           className="object-contain "/>
           <p>Advanced Vocal Techniques</p>
           <p>Enhance your singing with advanced vocal techniques for intermediate to advanced learners.</p>
           
           <div>
            <button className='bg-gray-600  w-[130px] h-[55px] rounded-full mt-10'>Buy Now</button>
           </div>
        </BackgroundGradient>

        <BackgroundGradient className='rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 '>
           <Image src={'/mic.png'} 
           alt='img'
           height="400"
           width="400"
           className="object-contain "/>
           <p>Advanced Vocal Techniques</p>
           <p>Enhance your singing with advanced vocal techniques for intermediate to advanced learners.</p>
           
           <div>
            <button className='bg-gray-600  w-[130px] h-[55px] rounded-full mt-10'>Buy Now</button>
           </div>
        </BackgroundGradient>

        <BackgroundGradient className='rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 '>
           <Image src={'/mic.png'} 
           alt='img'
           height="400"
           width="400"
           className="object-contain "/>
           <p>Advanced Vocal Techniques</p>
           <p>Enhance your singing with advanced vocal techniques for intermediate to advanced learners.</p>
           
           <div>
            <button className='bg-gray-600  w-[130px] h-[55px] rounded-full mt-10'>Buy Now</button>
           </div>
        </BackgroundGradient>

        
        </div>
        
      </div>
      </>
  )
}
