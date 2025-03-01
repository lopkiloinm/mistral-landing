"use client"

import type React from "react"
import { useRef, useCallback, useEffect } from "react"
import { MistralArrow } from "@/components/icons/mistral-arrow"

interface NavItemProps {
  title: string
  items: {
    section: string
    links: {
      title: string
      description?: string
    }[]
  }[]
  activeItem: string | null
  setActiveItem: (title: string | null) => void
  isPastHero: boolean
}

export function NavItem({ title, items, activeItem, setActiveItem, isPastHero }: NavItemProps) {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent) => {
      const dropdownRect = dropdownRef.current?.getBoundingClientRect()
      if (dropdownRect && e.clientY > dropdownRect.bottom) {
        setActiveItem(null)
      }
    },
    [setActiveItem],
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setActiveItem(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [setActiveItem])

  const isOpen = activeItem === title

  return (
    <div className="relative group" onMouseLeave={handleMouseLeave}>
      <button
        ref={buttonRef}
        className={`flex items-center space-x-1 transition-colors duration-200 rounded-full px-4 py-2 ${
          isPastHero ? "text-black hover:text-black/80" : "text-white hover:text-white/80"
        }`}
        onMouseEnter={() => setActiveItem(title)}
      >
        <span>{title}</span>
        <MistralArrow
          className={`h-3 w-3 transition-transform duration-200 rotate-90 ${isOpen ? "rotate-[270deg]" : ""}`}
        />
      </button>
      {isOpen && (
        <div ref={dropdownRef} className="absolute left-1/2 top-full z-40 -translate-x-1/2 pt-2">
          <div className="bg-[#FFF7E9] whitespace-nowrap rounded-2xl shadow-lg">
            <div className="p-6">
              <div className="flex gap-12">
                {items.map((section, i) => (
                  <div key={i}>
                    <a href="#" className="block mb-3 text-black font-medium">
                      {section.section}
                    </a>
                    <div className="grid gap-3">
                      {section.links.map((link, j) => (
                        <a key={j} href="#" className="block group/item">
                          <div className="text-black/60 font-medium hover:text-black transition-colors rounded-xl px-3 py-2 hover:bg-black/5">
                            {link.title}
                          </div>
                          {link.description && (
                            <div className="text-black/60 text-sm group-hover/item:text-black/60 whitespace-normal max-w-[280px] px-3">
                              {link.description}
                            </div>
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

