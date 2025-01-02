'use client';
import React, { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const phrases = [
  "Born in São Paulo, Brazil",
  "Studying computer engineering",
  "Started coding 7 years ago",
  "Python & Javascript",
  "Portuguse, English, German & Spanish"
]

export default function Intro() {
  const container = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"]
  })

  // Background Image: Starts at 80% scale and grows to 100%
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [.8, 1.2]);
  const backgoundOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  // Intro Image: Vertically decreases in size (shrinks)
  const introHeight = useTransform(scrollYProgress, [0, 1], ['350px', '280px']);
  const introWidth = useTransform(scrollYProgress, [0, 1], ['250px', '350px']);
  const introOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div ref={container} className='relative h-[200vh]'>
      <div className='sticky overflow-hidden top-0 h-screen'>
        <motion.div
          className="absolute w-full h-screen inset-0 brightness-60 flex items-center justify-center bg-emerald-700"
          style={{ scale: backgroundScale, transformOrigin: 'center', opacity: backgoundOpacity }}
        >
          {/* <Image
            src={'/images/background.jpeg'}
            alt="background image"
            fill={true}
            priority={true}
            className="object-cover"
          /> */}
        </motion.div>

        <div className="relative flex justify-center mt-[35vh]">
          <motion.div
            className="absolute w-[300px] brightness-70"
            style={{ height: introHeight, width: introWidth, opacity: introOpacity }} // Apply dynamic height
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <Image
              src={'/images/me.JPG'}
              alt="intro image"
              fill={true}
              priority={true}
              className="object-cover object-top rounded-xl"
            />
          </motion.div>

          <h1 className="text-white text-9xl font-bold z-10 text-center whitespace-nowrap drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            About Me
          </h1>
        </div>
      </div>

      <div className='relative text-white text-5xl uppercase mt-[-10vw] ml-[10vw]'>
        {phrases.map((phrase, index) => (
          <AnimatedText key={index}>{phrase}</AnimatedText>
        ))}
      </div>
    </div>
  );
}

function AnimatedText({ children }: { children: ReactNode }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 1, // Adjust the duration of the animation
        ease: "easeOut"
      }}
      viewport={{ once: false, margin: "-200px" }} // Adjust the viewport trigger
      className='m-0 relative drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'
    >
      {children}
    </motion.p>
  );
}