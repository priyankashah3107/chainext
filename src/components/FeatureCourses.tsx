// "use client";
// import React from 'react'
// import { BackgroundGradient } from './ui/background-gradient';
// import { IconAppWindow } from "@tabler/icons-react";
// import Image from 'next/image';
// import { Button } from './ui/moving-border';
// import CourseData from '../data/data_music.json';

// interface Courses {
   
//       id: number,
//       title: string,
//       slug: string,
//       description: string,
//       price: number,
//       instructor: string,
//       isFeatured: boolean,
//       image: string 
    
// }

// export const FeatureCourses = () => {
 
//   const featureCard =  CourseData.courses.filter((courses: Courses ) => courses.isFeatured)

//   return (
//       <> 
//       <div className='bg-gray-900 mt-20 '>
//         <div className='text-center mb-20 p-20 '>
//         <h1 className=' text-teal-900 font-semibold text-xl mb-2'>Features Card</h1>
//         <p className='md:text-7xl text-4xl font-semibold bg-gradient-to-b from-neutral-100 to-neutral-400 text-transparent bg-clip-text   '>Popular Courses</p>
//         </div>
//         <div className='grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 justify-center items-center md:px-0  px-10 md:mx-10 mx-10 gap-4'>
//        { 
//          featureCard.map((course: Courses) => (
         
//             <div className="flex justify-center mx-10" key={course.id}>

//        <BackgroundGradient className='rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900  '>
//            <Image src={course.image} 
//            alt='img'
//            height="300"
//            width="300"
//            className="object-contain "/>
//            <p className='text-xl font-semibold mt-2'>{course.title}</p>
//            <p className='text-base text-white/60'>{course.description}</p>
            
//             <div className='flex flex-row mt-4 justify-around '>
//                <p> Price: "{course.price}"</p>
//                <p>{course.instructor}</p>
//             </div>
//            <div className=''>
//             <button className='bg-gray-600  w-[130px] h-[55px] rounded-full mt-10'>Buy Now</button>
//            </div>
//         </BackgroundGradient>
//         </div>
        
//       ))}
        

        
//         </div>


//         <div className='text-center mt-20 md:mb-8 '>

//          <Button borderRadius="1.75rem"
//         className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800" >View All Courses</Button>
//         </div>
        
//       </div>
//       </>
//   )
// }



"use client";
import React from 'react';
import { BackgroundGradient } from './ui/background-gradient';
import { IconAppWindow } from "@tabler/icons-react";
import Image from 'next/image';
import { Button } from './ui/moving-border';
import CourseData from '../data/data_music.json';

interface Courses {
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,
  image: string 
}

export const FeatureCourses = () => {
  const featureCard = CourseData.courses.filter((courses: Courses) => courses.isFeatured);

  return (
    <> 
      <div className='bg-gray-900 mt-20'>
        <div className='text-center mb-20 p-20'>
          <h1 className='text-teal-900 font-semibold text-xl mb-2'>Features Card</h1>
          <p className='md:text-7xl text-4xl font-semibold bg-gradient-to-b from-neutral-100 to-neutral-400 text-transparent bg-clip-text'>Popular Courses</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center md:px-0 px-10 md:mx-10 mx-10 gap-4'>
          {featureCard.map((course: Courses) => (
            <div className="flex justify-center mx-10" key={course.id}>
              <BackgroundGradient className='rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900'>
                <Image src={course.image} 
                  alt='img'
                  height="300"
                  width="300"
                  className="object-contain"/>
                <p className='text-xl font-semibold mt-2'>{course.title}</p>
                <p className='text-base text-white/60'>{course.description}</p>
                <div className='flex flex-row mt-4 justify-around'>
                  <p> Price: &quot;{course.price}&quot;</p>
                  <p>{course.instructor}</p>
                </div>
                <div>
                  <button className='bg-gray-600 w-[130px] h-[55px] rounded-full mt-10'>Buy Now</button>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
        <div className='text-center mt-20 md:mb-8'>
          <Button borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">View All Courses</Button>
        </div>
      </div>
    </>
  )
}
