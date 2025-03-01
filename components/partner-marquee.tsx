"use client"

import Image from "next/image"
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

const partners = [
  {
    name: "OctoAI",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/753f7c3c-b2f6-47ed-b7b8-54126ee19e3e-MeuilTygbLwtXe0FMp5B1PzKlgddX2.webp",
  },
  {
    name: "Systems",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1995e6bc-e1da-4692-aec3-ebee412b390a-OWqFUqWEf2d1j9LJ5u2LZ1tClLZYtb.webp",
  },
  {
    name: "Snowflake",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/83efcb0f-f48b-4b45-9e54-d01baec603b9-dA3nZ2WzBBrKaBIRBkvnBKoifFtpq9.webp",
  },
  {
    name: "IBM",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6aec4419-ebfd-4f19-8432-17fec33e0929-3SdIa2APzfxTQvOYfjCosR9jQsCx4e.webp",
  },
  {
    name: "Red Ventures",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/854710df-7625-4d63-8c5a-d8ab81e54c1b-maf1Jf1Y8sGI13XIAEp7XzlXbIdfUm.webp",
  },
  {
    name: "Harvey",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/97404647-bc81-48f2-8c9e-6c4ef4d8d19b-uzD8Bnp4hQ25zK4OQqcCPLEnnhYhzw.webp",
  },
  {
    name: "Quora",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1036eaa4-e828-4930-8927-7c333f762507-k4zBBF6UUwqyoWIsrwWNzo8cTliOec.webp",
  },
  {
    name: "MARS",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6f8cbade-2d4f-4f26-a7a2-6f6c4715d7b2-KfHI3OpegVBI9AwiuzE203B7U2gSqx.webp",
  },
  {
    name: "France Travel",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/48754a01-0513-412e-8ef6-c40adf123f3a-8h1qp4ZMsxvpvg9FJCUY2Bf8ISQ9NS.webp",
  },
  {
    name: "Orange",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/06a82fa5-050c-46a7-98aa-3a4d2170ab75-eaFzwYbPnYbelUzyB9zQuE07p3yRIr.webp",
  },
  {
    name: "GeneralDDB",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f6685251-d0f4-456c-8090-7c07bffe7a6b-F7mMMaMmTbyoe2H8J70uCE4lApZY9H.webp",
  },
  {
    name: "Real Eyes",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b6837a3d-5fb3-42e5-909b-d43bbc7f0b53-O761CezO5EUvohxjAFCGAHfvLkH6rj.webp",
  },
  {
    name: "Elsiris",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/732193c8-59ab-492f-af70-dd153f157b2c-uJf2El7H9cQGDvvGEeGRrmHmrwa3YH.webp",
  },
  {
    name: "Shared Box",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c3acbcae-5504-4b2e-89a3-d3a841a6aa8f-TzGm16e9ueUfGv6q38n5kuosfC4dqT.webp",
  },
  {
    name: "Slash",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b42ef223-a3d8-42d7-b7a9-4fee0023fdd2-kAXakTlEts69jQTpjXtz18Vf2ZxQz7.webp",
  },
  {
    name: "Gulfstream",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fedcf302-5831-4f23-ba18-325f778d2b03-jY6NbDzApYPK8ESsHl8K152HF21apz.webp",
  },
  {
    name: "SAP",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cd0def9e-9249-4e70-b27a-5f8681e1da96-CuJ1CW4jooOHbO6utBwCTg4V12imAe.webp",
  },
]

export default function PartnerMarquee() {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#FFF7E9] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#FFF7E9] to-transparent pointer-events-none" />

      <Splide
        options={{
          type: "loop",
          drag: false,
          arrows: false,
          pagination: false,
          autoplay: true,
          interval: 0,
          speed: 4000,
          pauseOnHover: false,
          pauseOnFocus: false,
          resetProgress: false,
          easing: "linear",
          perPage: 1,
          gap: "1rem",
          autoWidth: true,
          snap: false,
          waitForTransition: true,
          updateOnMove: true,
          trimSpace: false,
          focus: 0,
          omitEnd: true,
          clones: 20,
        }}
        hasTrack={false}
      >
        <SplideTrack>
          {[...partners, ...partners].map((partner, i) => (
            <SplideSlide
              key={i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${(i % partners.length) + 1} of ${partners.length}`}
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                width={100}
                height={44}
                alt={partner.name}
                loading="lazy"
                className="marquee-logos-slide-img mx-10 block h-[44px] w-auto object-contain py-1.5"
              />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  )
}

