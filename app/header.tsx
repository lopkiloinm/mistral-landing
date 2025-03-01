"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MistralLogo } from "@/components/icons/mistral-logo"
import { MistralArrow } from "@/components/icons/mistral-arrow"
import { NavItem } from "./nav-item"
import { MobileNav } from "@/components/mobile-nav"
import { HamburgerButton } from "@/components/hamburger-button"

const navItems = {
  products: {
    title: "Products",
    items: [
      {
        section: "La Plateforme",
        links: [
          {
            title: "AI tooling",
          },
          {
            title: "Frontier models",
          },
          {
            title: "AI infrastructure",
          },
          {
            title: "Pricing",
          },
        ],
      },
      {
        section: "Le Chat",
        links: [
          {
            title: "Pricing",
          },
        ],
      },
    ],
  },
  solutions: {
    title: "Solutions",
    items: [
      {
        section: "Use cases",
        links: [
          {
            title: "By team",
          },
          {
            title: "By industry",
          },
          {
            title: "By capability",
          },
        ],
      },
      {
        section: "Services",
        links: [
          {
            title: "Model customization",
          },
          {
            title: "Value realization",
          },
          {
            title: "Deployment",
          },
        ],
      },
    ],
  },
  research: {
    title: "Research",
    items: [
      {
        section: "Models",
        links: [],
      },
      {
        section: "Latest research",
        links: [],
      },
    ],
  },
  resources: {
    title: "Resources",
    items: [
      {
        section: "Customer stories",
        links: [],
      },
      {
        section: "Developers",
        links: [
          {
            title: "Documentation",
          },
          {
            title: "API reference",
          },
          {
            title: "Community",
          },
          {
            title: "Cookbooks",
          },
        ],
      },
      {
        section: "Partners",
        links: [],
      },
    ],
  },
  company: {
    title: "Company",
    items: [
      {
        section: "About us",
        links: [],
      },
      {
        section: "Careers",
        links: [],
      },
      {
        section: "News",
        links: [],
      },
      {
        section: "Contact us",
        links: [],
      },
    ],
  },
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPastHero, setIsPastHero] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      const heroSection = document.querySelector("section")
      if (heroSection && headerRef.current) {
        const headerBottom = headerRef.current.getBoundingClientRect().bottom
        const heroBottom = heroSection.getBoundingClientRect().bottom
        setIsPastHero(headerBottom > heroBottom)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header ref={headerRef} className="w-full z-[100] fixed top-4 left-0 right-0 transition-all duration-200 px-4">
        <div className="container mx-auto overflow-visible">
          <div className="relative flex items-center justify-between py-6 px-6 rounded-2xl">
            <div className="flex items-center">
              <MistralLogo className={`transition-colors duration-200 ${isPastHero ? "text-black" : "text-white"}`} />
            </div>
            <nav className="hidden lg:flex items-center space-x-4">
              {Object.values(navItems).map((item) => (
                <NavItem
                  key={item.title}
                  title={item.title}
                  items={item.items}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                  isPastHero={isPastHero}
                />
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-4">
                <Button
                  variant="outline"
                  className={`transition-all duration-200 rounded-full ${
                    isPastHero
                      ? "bg-black/5 border-black/10 text-black hover:bg-black/10 hover:text-black"
                      : "bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white"
                  }`}
                >
                  Try the API
                  <MistralArrow className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className={`transition-all duration-200 rounded-full ${
                    isPastHero
                      ? "bg-black/5 border-black/10 text-black hover:bg-black/10 hover:text-black"
                      : "bg-white/20 border-white/30 text-white hover:bg-white/30 hover:text-white"
                  }`}
                >
                  Talk to sales
                  <MistralArrow className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="lg:hidden">
                <HamburgerButton
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className={isPastHero ? "text-black" : "text-white"}
                />
              </div>
            </div>
            {isScrolled && (
              <div
                className={`absolute inset-0 -z-[1] transition-all duration-200 rounded-2xl ${
                  isPastHero ? "bg-[#FFF7E9] shadow-lg" : "bg-white/10 backdrop-blur-xl"
                }`}
              />
            )}
          </div>
        </div>
      </header>

      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} navItems={navItems} />
    </>
  )
}

export default Header

