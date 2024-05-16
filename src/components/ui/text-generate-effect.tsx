"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: {
    word: string;
    heading: string;
    image: string;
  }[];
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {words.map((item, idx) => {
          return (
            <motion.span
              key={item.word + idx}
              className="dark:text-white text-black opacity-0"
            >
              <div>
                <h1 className="text-xl md:text-2xl mb-5 font-semibold">{item.heading}</h1>
                <div>
                  <img src={item.image} alt={item.word} />
                </div>
                <p className="text-base font-normal font-['inter'] mt-10">{item.word}{" "}</p>
              </div>
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

