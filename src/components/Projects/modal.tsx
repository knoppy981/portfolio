import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}

export default function Modal({ modal, projects }: {
  modal: { active: boolean, index: number },
  projects: { src: string, desc: string, title: string, color: string }[]
}) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })
    //Move cursor
    const xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
    const yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
    //Move cursor label
    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })

    window.addEventListener('mousemove', (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX)
      yMoveContainer(pageY)
      xMoveCursor(pageX)
      yMoveCursor(pageY)
      xMoveCursorLabel(pageX)
      yMoveCursorLabel(pageY)
    })
  }, [])

  useEffect(() => {
    const handleWindowClick = (event: MouseEvent) => {
      console.log("Window clicked!", event);
      console.log(active);
      console.log(index);
    };

    // Add event listener on mount
    window.addEventListener("click", handleWindowClick);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, [active, index]);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="h-[350px] w-[400px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center"
      >
        <div
          style={{ top: `${index * -100}%` }}
          className="h-full w-full absolute transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
        >
          {projects.map((project, idx) => {
            const { src, color } = project;
            return (
              <div
                className="h-full w-full flex items-center justify-center"
                style={{ backgroundColor: color }}
                key={`modal_${idx}`}
              >
                <Image
                  src={`/images/${src}`}
                  width={300}
                  height={0}
                  alt="image"
                  className="h-auto"
                />
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        ref={cursor}
        className="w-[80px] h-[80px] rounded-full bg-[#455CE9] text-white absolute z-[2] flex items-center justify-center text-[14px] font-light pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
      </motion.div>

      <motion.div
        ref={cursorLabel}
        className="w-[80px] h-[80px] rounded-full bg-transparent text-white absolute z-[2] flex items-center justify-center text-[14px] font-light pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  )
}