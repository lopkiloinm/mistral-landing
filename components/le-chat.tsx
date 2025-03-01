import Image from "next/image"
import { MistralLogo } from "./icons/mistral-logo"

export function LeChat() {
  return (
    <section className="mt-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center relative bg-[hsla(45,100%,88%,1)] rounded-3xl overflow-hidden">
          {/* Desktop Layout */}
          <div className="hidden md:flex w-full">
            <div className="relative flex w-[125px] shrink-0 flex-col items-center justify-center rounded-l-3xl overflow-hidden">
              <div style={{ background: "hsla(51, 100%, 50%, 1)" }} className="h-[25px] w-full"></div>
              <div style={{ background: "hsla(41, 100%, 50%, 1)" }} className="h-[25px] w-full"></div>
              <div style={{ background: "hsla(30, 100%, 51%, 1)" }} className="h-[25px] w-full"></div>
              <div style={{ background: "hsla(17, 96%, 52%, 1)" }} className="h-[25px] w-full"></div>
              <div style={{ background: "hsla(1, 100%, 44%, 1)" }} className="h-[25px] w-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <MistralLogo className="text-white w-[60px] h-[42px]" />
              </div>
            </div>
            <div className="flex-1 h-[125px] flex items-center justify-between pl-6 pr-8">
              <h2 className="text-base font-medium">Le Chat: Your AI assistant for life and work.</h2>
              <div className="flex items-center gap-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/appstore-npu5lheqq3N5YyGm3evl3QM9E41hVC.svg"
                  width={120}
                  height={40}
                  alt="Download on App Store"
                  className="h-10 w-auto rounded-xl"
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/androidstore-c2wH37zemHJyRdIhQHPf2w5AtrWx8T.svg"
                  width={120}
                  height={40}
                  alt="Get it on Google Play"
                  className="h-10 w-auto rounded-xl"
                />
                <div className="relative w-[120px] h-[40px]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ezgif-4ffa8feb1e61f-uDEYuDLZP2ZXESLl0E1qHsBTB7vlwj.gif"
                    width={120}
                    height={120}
                    alt="Pixel art cat animation"
                    className="absolute top-0 w-[120px] h-[120px]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden w-full">
            <div className="relative flex flex-col items-center">
              {/* Logo - Now floating over the stripes */}
              <div className="absolute top-10 left-1/2 -translate-x-1/2 z-10">
                <MistralLogo className="text-white w-[60px] h-[42px]" />
              </div>

              {/* Gradient Stripes */}
              <div className="w-full flex flex-col">
                <div style={{ background: "hsla(51, 100%, 50%, 1)" }} className="h-[25px] w-full"></div>
                <div style={{ background: "hsla(41, 100%, 50%, 1)" }} className="h-[25px] w-full"></div>
                <div style={{ background: "hsla(30, 100%, 51%, 1)" }} className="h-[25px] w-full"></div>
                <div style={{ background: "hsla(17, 96%, 52%, 1)" }} className="h-[25px] w-full"></div>
                <div style={{ background: "hsla(1, 100%, 44%, 1)" }} className="h-[25px] w-full"></div>
              </div>

              {/* Content */}
              <div className="w-full bg-[hsla(45,100%,88%,1)] p-6 flex flex-col items-center gap-6">
                <h2 className="text-base font-medium text-center">Le Chat: Your AI assistant for life and work.</h2>
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/appstore-npu5lheqq3N5YyGm3evl3QM9E41hVC.svg"
                    width={140}
                    height={40}
                    alt="Download on App Store"
                    className="h-10 w-auto"
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/androidstore-c2wH37zemHJyRdIhQHPf2w5AtrWx8T.svg"
                    width={140}
                    height={40}
                    alt="Get it on Google Play"
                    className="h-10 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

