import { BackgroundBeam } from "@/components/BackgroundBeam";
import {FeatureCard } from "@/components/FeatureCard";
import { FeatureCourses } from "@/components/FeatureCourses";
import GridBackground from "@/components/GridBackground";
import Hero from "@/components/Hero";
import { WavyBackgroundDemo } from "@/components/WavyBackgroundDemo";


export default function HomePage() {
  // bg-black/[0.96] 
  return (
    <> 
      <main className="min-h-screen antialiased bg-grid-white/[0.02]">
      
        <Hero />
        <FeatureCard />
        <FeatureCourses />
        <GridBackground />
         <BackgroundBeam  />
         {/* <WavyBackgroundDemo /> */}
      </main>
    </>
  )
}