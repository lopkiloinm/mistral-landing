"use client"

import { useEffect, useRef } from "react"
import { MistralLogo } from "./icons/mistral-logo"

interface TextMarqueeProps {
  className?: string
  text: string
}

export default function TextMarquee({ className, text }: TextMarqueeProps) {
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (!listRef.current) return

    let position = 0
    const speed = 1

    const animate = () => {
      position -= speed
      if (position <= -3557.95) position = 0
      if (listRef.current) {
        listRef.current.style.transform = `translateX(${position}px)`
      }
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  const slides = Array(9).fill(null)

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#FFF7E9] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#FFF7E9] to-transparent pointer-events-none" />

      <ul ref={listRef} className="flex" role="presentation">
        {slides.map((_, i) => (
          <li
            key={i}
            className="flex-none"
            role="group"
            aria-roledescription="slide"
            aria-label={`${(i % 3) + 1} of 3`}
            style={{ marginRight: "1rem" }}
          >
            <div className="text-marquee p-4">
              <p className="flex items-center gap-10 text-[2.5rem] font-light">
                {text}
                <MistralLogo className="text-black w-10 h-7 flex-shrink-0" />
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

