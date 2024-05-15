
import { HoverEffect } from "./ui/card-hover-effect";

export function FeatureCard() {
  return (
    <>
    
    <div className="max-w-5xl mx-auto px-8">
    <h1 className="text-3xl md:text-5xl  font-bold bg-gradient-to-b from-neutral-100 to-neutral-600 text-transparent bg-clip-text mb-4">Embark on Your Musical Journey: Mastering a Symphony of Instruments</h1>
      <HoverEffect items={projects} />
    </div>
    </>
  );
}
export const projects = [
  {
    title: "Piano",
    description:
      "The piano is a versatile and iconic instrument known for its rich sound and expressive capabilities. From classical to contemporary music, the piano offers a wide range of tones and dynamics. ",
    link: "https://google.com",
    click: "Learn More"
  },
  {
    title: "Violin",
    description:
      "The violin is a timeless instrument that evokes emotion and beauty with its delicate tones and expressive melodies. Discover the art of bowing techniques, fingering positions, and vibrato to create captivating music.",
      link: "https://google.com",
    click: "Learn More"
  },
  {
    title: "Drums",
    description:
      "The drums are the heartbeat of any band, providing rhythm, energy, and dynamics to music. Explore the world of percussion, from basic beats and fills to advanced techniques like polyrhythms and drum solos. ",
    link: "https://google.com",
    click: "Learn More"
  },
  {
    title: "Guitar",
    description:
      "The guitar is one of the most popular instruments worldwide, beloved for its versatility and expressive potential. From strumming chords to shredding solos, the guitar offers a wide range of playing styles and techniques.",
      link: "https://google.com",
    click: "Learn More"
  },
  {
    title: "Flute",
    description:
      "The flute is a graceful and versatile instrument capable of producing a wide range of tones and melodies. Explore the world of woodwind instruments, from breath control and embouchure to fingering techniques and articulation.",
      link: "https://google.com",
    click: "Learn More"
  },
  {
    title: "Saxophone",
    description:
      "The saxophone is a bold and expressive instrument known for its smooth tones and dynamic range. From soulful jazz to energetic funk, the saxophone shines in a variety of musical genres. ",
      link: "https://google.com",
    click: "Learn More"
  },
];
