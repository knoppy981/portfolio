import Image from 'next/image'
import React from 'react'

export default function MainParallaxZooom() {
  const container = React.useRef<HTMLDivElement>(null);
  const stickyMask = React.useRef<HTMLDivElement>(null);

  const initialMaskSize = .8;
  const targetMaskSize = 100;
  const easing = 0.15;
  let easedScrollProgress = 0;

  React.useEffect(() => {
    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    if (!stickyMask.current) return
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
    requestAnimationFrame(animate)
  }

  const getScrollProgress = () => {
    if (!stickyMask.current || !container.current) return 0
    const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress
  }

  return (
    <div className="bg-emerald-700 pt-[20vh]">
      <div className="w-full">
        <Image
          src="/name.svg"
          fill
          alt="name"
        />
      </div>

      <div
        className="relative h-[300vh]"
        ref={container}
      >
        <div
          ref={stickyMask}
          className="flex h-[100vh] overflow-hidden sticky top-0 items-center justify-center"
          style={{
            WebkitMaskImage: "url('/title.svg')",
            WebkitMaskPosition: "center left",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "80%",
            maskImage: "url('/title.svg')",
            maskPosition: "center left",
            maskRepeat: "no-repeat",
            maskSize: "80%",
          }}
        >
          <div className="h-screen w-full bg-black"></div>
        </div>
      </div>
    </div>
  )
}
