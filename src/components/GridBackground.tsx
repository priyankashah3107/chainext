import React from 'react'
import { InfiniteScroll } from './InfiniteScroll'

export default function GridBackground() {
  return (
    <> 
       <div className="lg:h-[77rem] md:h-[50rem] h-[40rem] lg:w-full  dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-2xl  md:text-4xl lg:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 ">
        Hear Our Harmony: Voices of Success
      </p>

      <div className='md:pt-20  lg:w-screen w-[500px] '>
           <InfiniteScroll />
        </div>
    </div>
    </>
  )
}
