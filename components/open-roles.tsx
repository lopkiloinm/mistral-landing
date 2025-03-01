import Image from "next/image"
import { MistralArrow } from "./icons/mistral-arrow"

export function OpenRoles() {
  return (
    <section className="bg-[#FFF7E9]">
      <div className="container mx-auto px-4 pt-0 pb-24">
        <div className="relative h-[400px] rounded-3xl overflow-hidden">
          {/* Background Image */}
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b4d6c9c2-98d4-4510-8b78-7ea7b2ac9fec-iSaI6DlOSbU2KBCejZjrTsErHBcoxA.webp"
            alt="Developers working in office"
            fill
            className="object-cover"
            priority
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent md:from-black/50" />

          {/* Content */}
          <div className="relative h-full p-12 flex flex-col justify-end">
            {/* Text Content */}
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-4 text-white">
                Build the future of
                <br />
                secure, private AI.
              </h2>
              <p className="text-xl text-white/90 mb-12 md:max-w-lg">
                Now seeking: Insatiably curious AI enthusiasts with an entrepreneurial spirit.
              </p>
            </div>

            {/* CTA - Now part of the main content flow */}
            <div>
              <a href="#" className="inline-flex items-center text-white hover:text-white/90 transition-colors group">
                View open roles
                <MistralArrow className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

