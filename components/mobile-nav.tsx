"use client"

import { useState } from "react"
import { MistralArrow } from "./icons/mistral-arrow"

interface MobileNavItemProps {
  title: string
  items: {
    section: string
    links: {
      title: string
      description?: string
    }[]
  }[]
}

function MobileNavItem({ title, items }: MobileNavItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/10">
      <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-between w-full py-4 text-white">
        <span>{title}</span>
        <MistralArrow
          className={`h-3 w-3 transition-transform duration-200 rotate-90 ${isOpen ? "rotate-[270deg]" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="pb-4">
          {items.map((section, i) => (
            <div key={i} className="mb-4">
              <div className="text-white/60 text-sm mb-2">{section.section}</div>
              {section.links.map((link, j) => (
                <a key={j} href="#" className="block text-white/80 hover:text-white text-sm py-2">
                  {link.title}
                </a>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function MobileNav({
  isOpen,
  onClose,
  navItems,
}: {
  isOpen: boolean
  onClose: () => void
  navItems: Record<
    string,
    {
      title: string
      items: {
        section: string
        links: {
          title: string
          description?: string
        }[]
      }[]
    }
  >
}) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl pt-24">
      <div className="container mx-auto px-6 py-8">
        <div className="space-y-0">
          {Object.values(navItems).map((item) => (
            <MobileNavItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

