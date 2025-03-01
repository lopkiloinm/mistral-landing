"use client"

interface HamburgerButtonProps {
  isOpen: boolean
  onClick: () => void
  className?: string
}

export function HamburgerButton({ isOpen, onClick, className = "" }: HamburgerButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-8 h-8 relative focus:outline-none ${className}`}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="absolute w-6 left-1 top-1/2 -translate-y-1/2">
        <span
          className={`absolute h-0.5 w-full transform transition-all duration-300 ${
            isOpen ? "rotate-45 delay-200" : "-translate-y-2"
          }`}
          style={{ backgroundColor: "currentColor" }}
        />
        <span
          className={`absolute h-0.5 w-full transform transition-all duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
          style={{ backgroundColor: "currentColor" }}
        />
        <span
          className={`absolute h-0.5 w-full transform transition-all duration-300 ${
            isOpen ? "-rotate-45 delay-200" : "translate-y-2"
          }`}
          style={{ backgroundColor: "currentColor" }}
        />
      </div>
    </button>
  )
}

