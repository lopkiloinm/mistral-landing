"use client"

import { useState } from "react"
import Image from "next/image"
import { MistralLogo } from "./icons/mistral-logo"
import { MistralArrow } from "./icons/mistral-arrow"

export function ColorGradientFooter() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  return (
    <div className="container mx-auto">
      <div className="relative">
        {/* Cat GIF positioned outside the overflow-hidden container */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-[110px] z-10">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ezgif-4ffa8feb1e61f-uDEYuDLZP2ZXESLl0E1qHsBTB7vlwj.gif"
            width={240}
            height={240}
            alt="Pixel art cat animation"
            className="w-[240px] h-[240px]"
          />
        </div>

        {/* Color stripes with rounded top */}
        <div className="rounded-t-3xl overflow-hidden">
          <div style={{ background: "hsla(45, 100%, 88%, 1)" }} className="h-[50px] w-full"></div>
          <div style={{ background: "hsla(51, 100%, 50%, 1)" }} className="h-[50px] w-full"></div>
          <div style={{ background: "hsla(41, 100%, 50%, 1)" }} className="h-[50px] w-full"></div>
          <div style={{ background: "hsla(30, 100%, 51%, 1)" }} className="h-[50px] w-full"></div>
          <div style={{ background: "hsla(17, 96%, 52%, 1)" }} className="h-[50px] w-full"></div>
          <div style={{ background: "hsla(1, 100%, 44%, 1)" }} className="h-[50px] w-full"></div>
        </div>

        {/* Footer Content */}
        <div className="bg-[hsla(45,100%,88%,1)] pt-16 pb-8">
          <div className="grid grid-cols-12 gap-0 mb-16 px-12">
            {/* Logo and App Store Section - aligned left */}
            <div className="col-span-12 md:col-span-3 flex flex-col items-center md:items-start mb-8 md:mb-0">
              <MistralLogo className="text-black mb-8" />
              <div className="flex items-center gap-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/appstore-npu5lheqq3N5YyGm3evl3QM9E41hVC.svg"
                  width={120}
                  height={40}
                  alt="Download on App Store"
                  className="h-10 w-auto"
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/androidstore-c2wH37zemHJyRdIhQHPf2w5AtrWx8T.svg"
                  width={120}
                  height={40}
                  alt="Get it on Google Play"
                  className="h-10 w-auto"
                />
              </div>
            </div>

            {/* Right-aligned sections - all in one row on desktop, 2x2 grid on mobile */}
            <div className="col-span-12 md:col-start-6 md:col-span-7 relative md:ml-[10%] grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
              <div className="w-full md:w-[162px]">
                <h3 className="text-[hsla(17,96%,52%,1)] font-medium text-xs mb-4 truncate">Why Mistral</h3>
                <ul className="space-y-3 w-full md:w-24">
                  <li>
                    <a href="#" className="text-black/80 text-xs hover:text-black truncate block">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black/80 text-xs hover:text-black block">
                      Our customers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black/80 text-xs hover:text-black truncate block">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black/80 text-xs hover:text-black truncate block">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-[162px]">
                <h3 className="text-[hsla(17,96%,52%,1)] font-medium text-xs mb-4 truncate">Explore</h3>
                <ul className="space-y-3 w-full md:w-24">
                  <li>
                    <a href="#" className="text-black/80 text-xs hover:text-black truncate block">
                      AI solutions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black/80 text-xs hover:text-black block">
                      Partners
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black/80 text-xs hover:text-black truncate block">
                      Research
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black/80 text-xs hover:text-black block">
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-[162px]">
                <h3 className="text-[hsla(17,96%,52%,1)] font-medium text-xs mb-4 truncate">Build</h3>
                <ul className="space-y-3 w-full md:w-24">
                  <li>
                    <a href="#" className="text-black/80 text-xs hover:text-black truncate block">
                      La Plateforme
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black/80 text-xs hover:text-black truncate block">
                      Le Chat
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black/80 text-xs hover:text-black truncate block">
                      Try the API
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-[162px]">
                <h3 className="text-[hsla(17,96%,52%,1)] font-medium text-xs mb-4">Legal</h3>
                <ul className="space-y-3 w-full md:w-30">
                  <li>
                    <a href="#" className="text-black/80 text-xs hover:text-black block">
                      Terms of service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black/80 text-xs hover:text-black block">
                      Privacy policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black/80 text-xs hover:text-black block">
                      Data processing agreement
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black/80 text-xs hover:text-black block">
                      Legal notice
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-black/10 px-12">
            <div className="text-black/60 text-xs mb-4 md:mb-0">Mistral AI © 2025</div>

            {/* Language Selector */}
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative">
                <button
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="flex items-center gap-2 text-black/80 text-sm hover:text-black"
                >
                  EN
                  <MistralArrow
                    className={`h-3 w-3 transition-transform duration-200 rotate-90 ${
                      isLanguageOpen ? "rotate-[270deg]" : ""
                    }`}
                  />
                </button>

                {isLanguageOpen && (
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#FFF7E9] rounded-xl shadow-lg py-2 min-w-[120px] z-50">
                    <button
                      className="w-full px-4 py-2 text-sm text-black/60 hover:text-black hover:bg-black/5 transition-colors text-left"
                      onClick={() => setIsLanguageOpen(false)}
                    >
                      English
                    </button>
                    <button
                      className="w-full px-4 py-2 text-sm text-black/60 hover:text-black hover:bg-black/5 transition-colors text-left"
                      onClick={() => setIsLanguageOpen(false)}
                    >
                      Français
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-black/80 text-sm hover:text-black">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#" className="text-black/80 text-sm hover:text-black">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2ZM8.09 18.74h-3v-9h3v9ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12Zm12.32 10.26h-3v-4.83c0-1.21-.43-2.05-1.52-2.05a1.65 1.65 0 0 0-1.54 1.1 2.06 2.06 0 0 0-.1.73v5.05h-3v-9h3v1.3a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06v5.14Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="#" className="text-black/80 text-sm hover:text-black">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.37-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

