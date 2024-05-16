"use client";

import { AuroraBackgroundDemo } from '@/components/AroraBacGroundDemo';
import { SignupFormDemo } from '@/components/SignUpForm';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { motion } from "framer-motion";
import React from 'react'

function page() {
  return (
    <> 
     <AuroraBackground className='w-screen relative z-10' >
     <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative  gap-4 items-center justify-center px-4"
      >
     <div className='mt-32'>
      <SignupFormDemo />
    </div>
    </motion.div>
     </AuroraBackground>
    
    </>
  )
}

export default page