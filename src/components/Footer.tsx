import { link } from 'fs'
import Link from 'next/link'
import React from 'react'

export const about = [
  {
   id: 1,
   aboutus: "Music School is a premier institution dedicated to teaching the artand science of music. We nurture talent from the ground up, fostering a vibrant community of musicians."
  }
] 


export const QuickLinks = [
  {
    id:1,
    name: "Home",
    link: "/",
  },

  {
    id:2,
    name: "About",
    link: "/",
  },
  {
    id:3,
    name: "Courses",
    link: "/",
  },
  {
    id:4,
    name: "Contact",
    link: "/",
  }

]


export const FollowUs = [
  {
    id: 1,
    name: "Facebook",
  },
  {
    id: 2,
    name: "Twitter",
  },
  {
    id: 3,
    name: "Instagram",
  },

]


export const ContactUs = [
  {
    id:1,
    name: "New Delhi, India",
  },
  {
    id:2,
    name: "Delhi 10001",
  },
  {
    id:3,
    name: "Email: info@priuniverse.com",
  },
  {
    id:4,
    name: "Phone: (123) 456-7890",
  },
]

export default function Footer() {

  return (
    <>
      <footer>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center text-neutral-100 py-5 mt-10 mx-20 text-xl font-semibold">
          <div className="">
            About Us
            {about.map((about, id) => (
             <p className="text-base mt-4 font-['inter'] font-normal " key={id}>{about.aboutus}</p>
            ))}
          </div>
            
            <div className='grid grid-cols-1 mt-4 md:mt-0'>Quick Links
               {QuickLinks.map((link, idx) => (
              
                  <p className="font-['inter'] font-normal text-base " key={idx}>
                  {link.name}
                 </p>
                
                 
               ))}
            </div>

            <div className='grid grid-cols-1 mt-4  lg:mt-0 md:mt-4'>Follow Us
              {FollowUs.map((follow, idx) => (
                 <p className="font-['inter'] font-normal text-base" key={idx}>
                  {follow.name}
                 </p>
              ))}
            </div>
            <div className="grid grid-cols-1 mt-4 lg:mt-0 md:mt-4">Contact Us
              {FollowUs.map((follow, idx) => (
                 <p className="font-['inter'] font-normal text-base" key={idx}>{follow.name}</p>
              ))}
            </div>
         </div>
      </footer>
    </>
  )
}
