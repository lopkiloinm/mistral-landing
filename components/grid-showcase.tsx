"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MistralArrow } from "@/components/icons/mistral-arrow"

function GridRow({
  title,
  description,
  buttonText,
  imageSrc,
  imageAlt,
}: {
  title: string
  description: string
  buttonText: string
  imageSrc: string
  imageAlt: string
}) {
  const rowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          } else {
            entry.target.classList.remove("is-visible")
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: "-10% 0px -10% 0px",
      },
    )

    if (rowRef.current) {
      observer.observe(rowRef.current)
    }

    return () => {
      if (rowRef.current) {
        observer.unobserve(rowRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={rowRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center opacity-30 scale-[0.95] transition-all duration-500 ease-out rounded-3xl overflow-hidden"
      style={{ willChange: "transform, opacity" }}
    >
      <div className="flex flex-col space-y-6 md:pl-24">
        <div className="max-w-sm">
          <h2 className="text-5xl md:text-5xl font-light leading-tight mb-3">{title}</h2>
          <p className="text-lg leading-relaxed mb-6 text-black/80">{description}</p>
          <Button className="bg-black text-white hover:bg-black/90 group flex items-center gap-2 rounded-full">
            {buttonText}
            <MistralArrow className="h-4 w-4 text-white group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </div>
      </div>

      <div className="relative h-[400px] w-full overflow-hidden rounded-3xl">
        <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-contain object-left" />
      </div>
    </div>
  )
}

export default function GridShowcase() {
  return (
    <div className="relative w-full bg-[#FFF7E9]">
      <div className="container mx-auto px-4">
        <div
          className="relative py-24"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsla(45,100%,88%,1) 1px, transparent 1px),
              linear-gradient(to bottom, hsla(45,100%,88%,1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        >
          <style jsx global>{`
            .is-visible {
              opacity: 1 !important;
              transform: scale(1.02) !important;
            }
          `}</style>

          <div className="grid grid-cols-1 gap-32">
            <GridRow
              title="Get work done."
              description="Your personalized multilingual AI assistant, with web search, uploads, and data connectors."
              buttonText="Discover le Chat"
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ab588a9c-8097-4bb1-b39c-76427fd58965%20%281%29-XrOuvKfkBbzyAWO4YFTtnVd9L55IcI.webp"
              imageAlt="AI chat interface showing a Gantt chart timeline"
            />

            <GridRow
              title="Code faster."
              description="Build faster with coding assistance across 80+ languages."
              buttonText="Code with le Chat"
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/71808eb6-49e4-4e3c-bf20-4e5eaf0c8295-rNmKIXqY5ncnap1JKICuYQeuFrr8o3.webp"
              imageAlt="AI chat interface showing PyScript canvas setup"
            />

            <GridRow
              title="Build AI-powered apps."
              description="Build and deploy custom AI solutions with frontier models."
              buttonText="Discover la Plateforme"
              imageSrc="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/200e10e5-2530-4d8b-b50a-6ef836e96a8b-VVLy5SqkDX6lwQsml8smXE93XJYhmF.webp"
              imageAlt="AI chat interface showing React Todo app code"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

