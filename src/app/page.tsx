'use client'
import React from "react";
import Lenis from "lenis";

import MainParallaxZooom from "@/components/MainParallaxZoom";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  React.useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="bg-black">
      <MainParallaxZooom />

      <Intro />

      <Projects />

      <Footer />
    </main>
  )
}