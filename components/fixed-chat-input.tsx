"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SendIcon } from "@/components/icons/send-icon"

export function FixedChatInput() {
  const [position, setPosition] = useState(100)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      // Get references to key elements
      const heroInput = document.querySelector(".hero-input")
      const footer = document.querySelector(".rounded-t-3xl")

      if (!heroInput || !footer) return

      const heroRect = heroInput.getBoundingClientRect()
      const footerRect = footer.getBoundingClientRect()
      const viewportHeight = window.innerHeight

      // Calculate distances
      const isHeroVisible = heroRect.bottom > 0
      const distanceToFooter = footerRect.top - viewportHeight

      // Determine the position and opacity based on scroll position
      if (isHeroVisible) {
        // When hero is visible, hide the input
        setPosition(100)
        setOpacity(0)
      } else if (distanceToFooter < 200) {
        // When approaching footer, smoothly hide the input
        const hideProgress = 1 - distanceToFooter / 200
        setPosition(hideProgress * 100)
        setOpacity(Math.max(0, 1 - hideProgress))
      } else {
        // When between hero and footer, show the input
        setPosition(0)
        setOpacity(1)
      }
    }

    // Update position immediately and on scroll
    updatePosition()
    window.addEventListener("scroll", updatePosition, { passive: true })

    return () => window.removeEventListener("scroll", updatePosition)
  }, [])

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[55] px-4"
      style={{
        transform: `translateY(${position}px)`,
        opacity,
        transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
      }}
    >
      <div className="container mx-auto max-w-[539px] pb-8">
        <div className="relative pointer-events-auto">
          <Input
            type="text"
            placeholder="Talk to Le Chat"
            className="bg-[#FFF7E9] text-gray-800 pl-4 pr-10 h-[50px] w-full rounded-full shadow-lg border border-black/10"
          />
          <Button
            className="absolute right-3 top-1/2 -translate-y-1/2 w-[26px] h-[26px] p-0 flex items-center justify-center bg-[hsla(17,96%,52%,1)] hover:bg-[hsla(17,96%,52%,0.9)] rounded-full"
            size="icon"
          >
            <SendIcon className="" />
          </Button>
        </div>
      </div>
    </div>
  )
}

