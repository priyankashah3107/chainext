"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

// const words = [
//   {
//     word: `${"Introduction The piano is a timeless instrument, captivating audiences for centuries with its versatile range and expressive potential. Whether you're a complete beginner or rekindling a childhood passion, learning the piano can be a deeply rewarding experience. This guide aims to help you embark on your musical journey, offering practical tips and insights to make the process enjoyable and fulfilling ."}` ,
//     heading: "Unlocking the Magic of Music: A Beginner's Guide to Learning Piano ",
//     image: "/piano.jpg",
//   },
//   // {
//   //   word: "Emergency",
//   //   heading: "Emergency Heading",
//   //   image: "/images/emergency.jpg",
//   // },
//   // {
//   //   word: "Euphoric",
//   //   heading: "Euphoric Heading",
//   //   image: "/images/euphoric.jpg",
//   // },
// ];

export function TextGenerateEffectDemo() {

  const words = [
    {
      word: "Introduction The piano is a timeless instrument, captivating audiences for centuries with its versatile range and expressive potential. Whether you're a complete beginner or rekindling a childhood passion, learning the piano can be a deeply rewarding experience. This guide aims to help you embark on your musical journey, offering practical tips and insights to make the process enjoyable and fulfilling.",
      heading: "Unlocking the Magic of Music: A Beginner's Guide to Learning Piano",
      image: "/piano.jpg",
    },
  ];
  return (
    <>
      <TextGenerateEffect words={words} />
    </>
  );
}
