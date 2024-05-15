import {FeatureCard } from "@/components/FeatureCard";
import { FeatureCourses } from "@/components/FeatureCourses";
import Hero from "@/components/Hero";

export default function HomePage() {
  // bg-black/[0.96] 
  return (
    <> 
      <main className="min-h-screen antialiased bg-grid-white/[0.02]">
      
        <Hero />
        <FeatureCard />
        <FeatureCourses />
      </main>
    </>
  )
}