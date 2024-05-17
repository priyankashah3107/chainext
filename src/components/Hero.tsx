// import Link from 'next/link'
// import React from 'react'
// import { Spotlight } from './ui/Spotlight'
// import { Button } from './ui/moving-border'
// import { WavyBackground } from './ui/wavy-background'



// function Hero() {
  
//   return (
//     <>
    
//     <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      
//     <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20 "
//         fill="white"
//       />
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20 "
//         fill="#d3d3d3"
//       />
      
//       <div className='p-4 relative z-10 text-center w-full'>

//         <h1 className='text-5xl md:text-8xl font-bold mt-10 md:mt-0 bg-clip-text text-transparent 
//         bg-gradient-to-b from-neutral-50 to-neutral-400 '>Master the art of music</h1>

//         <p className='mt-7 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto '
//         >"Unlock your musical potential at 'Master the Art of Music'. Our academy offers expert instruction tailored to your goals and skill level. From mastering techniques to refining  performance,  our comprehensive  programs empower you to become a true artist of music. Join us and embark on a journey of musical excellence."</p>

//         {/* <div>
//           <Link href={'/course'}>Explore Courses</Link>
//         </div> */}
        
//         <div className='mt-6'>
//         <Button
//         borderRadius="1.75rem"
//         className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
//       >
//         Explore Courses
//       </Button>
//         </div>
       

//       </div>
//     </div>
//     </>
//   )
// }

// export default Hero






import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'
import { WavyBackground } from './ui/wavy-background'

function Hero() {
  return (
    <>
      <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
        
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 "
          fill="white"
        />
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 "
          fill="#d3d3d3"
        />
        
        <div className='p-4 relative z-10 text-center w-full'>
          <h1 className='text-5xl md:text-8xl font-bold mt-10 md:mt-0 bg-clip-text text-transparent 
          bg-gradient-to-b from-neutral-50 to-neutral-400 '>Master the art of music</h1>
          
          <p className='mt-7 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto '>
            &quot;Unlock your musical potential at &apos;Master the Art of Music&apos;. Our academy offers expert instruction tailored to your goals and skill level. From mastering techniques to refining performance, our comprehensive programs empower you to become a true artist of music. Join us and embark on a journey of musical excellence.&quot;
          </p>
          
          <div className='mt-6'>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Courses
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
