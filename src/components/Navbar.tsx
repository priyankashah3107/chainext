"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import image from "next/image"

export default function Navbar ({ className }: { className?: string }) {
   const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}>
        
        <Menu setActive={setActive} >

          <MenuItem  setActive={setActive} active={active} item="Home" >
            <HoveredLink href="/classic">Classical Music</HoveredLink>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="products" >

           <div className="text-sm grid grid-cols-2 gap-10 p-4">
           <ProductItem  title="Harmony Haven Music Academy"
              href="#"
              src="/mic.png"
              description="Discover the symphony within you at Harmony Haven Music Academy. Our expert instructors provide comprehensive music education tailored to all ages and skill levels. "
            >
            </ProductItem>
            <ProductItem  title="Crescendo Academy of Music"
              href="#"
              src="/mic3.png"
              description="Elevate your musical journey with Crescendo Academy of Music. From classical to contemporary, our academy offers top-tier instruction in piano, guitar, vocals, and more"
            >
            </ProductItem>
            <ProductItem  title="Melody Masters Music School"
              href="#"
              src="/mic2.png"
              description="Unlock the power of melody at Melody Masters Music School. Our dedicated faculty fosters creativity and excellence in every student. "
            >
            </ProductItem>
            <ProductItem  title="Rhythmic Rhapsody Music Institute"
              href="#"
              src="/mic4.png"
              description="Immerse yourself in the rhythm of possibility at Rhythmic Rhapsody Music Institute. With a diverse curriculum spanning genres and instruments."
            >
            </ProductItem>
           </div>
          </MenuItem>
          
        
          <MenuItem  setActive={setActive} active={active} item="Our Blogs" >
            <div className="flex flex-col space-y-4 text-sm">

            
            <HoveredLink href="/courses">Blogs</HoveredLink>
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
            </div>
          </MenuItem>


           
          <MenuItem setActive={setActive} active={active} item="Contact US">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Contact </HoveredLink>
           
           
          </div>
        </MenuItem>

        </Menu>
      </div>
    </>
  )
}