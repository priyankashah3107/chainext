"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-full px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className={twMerge(poppins.className, "text-xl mb-4")}>
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="400"
                  width="400"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Flute",
    description: (
      <>
        <p>
        The ethereal whispers of the flute, with its delicate yet powerful resonance, evoke images of serene meadows and whispering winds. Its agile fingers dance upon the keys, effortlessly weaving intricate melodies that flutter and soar like birds in flight. From haunting sonatas to lively folk tunes, the flute enchants with its lyrical charm and celestial beauty.
        </p>
        <p>
        The flute, with its slender frame and ethereal tones, carries within it the whispers of ancient forests and the songs of celestial beings. From the haunting strains of classical masterpieces to the lilting melodies of folk traditions, its silver tongue weaves a tapestry of sound that transports listeners to realms both earthly and divine. With each breath, the flutist becomes a storyteller, painting landscapes of emotion with delicate trills and soaring arpeggios.
        </p>
       
      </>
    ),
    badge: "Flute",
    image:
      "/flu.jpeg",
  },
  {
    title: "Piano",
    description: (
      <>
       <p>In the grand expanse of the concert hall or the intimate setting of a living room, the piano stands as a testament to human ingenuity and creativity. With its array of keys, each one a portal to a world of possibilities, the piano invites exploration and discovery. From the thunderous cascades of Beethoven to the delicate nuances of Chopin, its resonance resonates with the echoes of generations past and present. As fingers glide across its ivory surface, the pianist becomes a poet, crafting sonnets of sound that speak to the depths of the human soul.</p>
      </>
    ),
    badge: "Piano",
    image:
      "/piano.jpg",
  },
  {
    title: "Guitar",
    description: (
      <>
        <p>
        Nestled in the hands of troubadours and minstrels, the guitar is a beacon of expression and emotion. Its strings, taut with tension and possibility, resonate with the stories of love, longing, and liberation. From the plaintive wails of the blues to the jubilant refrains of rock and roll, its versatile nature defies categorization, embracing genres as diverse as the human experience itself. With each strum and pluck, the guitarist becomes a bard, spinning tales of triumph and tragedy that resonate with audiences around the world.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "/guitar.jpg",
  },
];
