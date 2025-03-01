import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MistralArrow } from "@/components/icons/mistral-arrow"
import { SendIcon } from "@/components/icons/send-icon"
import Header from "./header"
import PartnerMarquee from "@/components/partner-marquee"
import TextMarquee from "@/components/text-marquee"
import GridShowcase from "@/components/grid-showcase"
import FeaturesSection from "@/components/features-section"
import { Announcement } from "@/components/announcement"
import { OpenRoles } from "@/components/open-roles"
import { NextChapter } from "@/components/next-chapter"
import { ColorGradientFooter } from "@/components/color-gradient-footer"
import { FixedChatInput } from "@/components/fixed-chat-input"
import { LeChat } from "@/components/le-chat"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF7E9]">
      <Header />

      {/* Hero Section */}
      <div className="container mx-auto">
        <section className="relative w-full h-[690px] flex items-center justify-center overflow-hidden rounded-2xl">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e022b58b-d71f-4a7f-a1a5-ba106052ad36-dRdX4oLMKuQQNTVrZ9KWUMObYKcmJa.webp"
              alt="Mountain landscape with orange sunset"
              fill
              priority
              className="object-cover rounded-3xl"
            />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 z-10 text-center pt-24">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-4">Frontier AI. In Your Hands.</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12">Configurable AI for all builders.</p>

            {/* Chat Input */}
            <div className="w-full max-w-[539px] mx-auto px-4 md:px-0 relative mb-16 hero-input">
              <Input
                type="text"
                placeholder="Talk to Le Chat"
                className="bg-[#FFF7E9] text-gray-800 pl-4 pr-10 h-[50px] w-full rounded-full"
              />
              <Button
                className="absolute right-7 md:right-3 top-1/2 -translate-y-1/2 w-[26px] h-[26px] p-0 flex items-center justify-center bg-[hsla(17,96%,52%,1)] hover:bg-[hsla(17,96%,52%,0.9)] rounded-full"
                size="icon"
              >
                <SendIcon className="rotate-90" />
              </Button>
            </div>

            {/* Links */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
              <a href="#" className="text-white flex items-center group">
                Enterprise deployments
                <MistralArrow className="ml-2 h-4 w-4" />
              </a>
              <a href="#" className="text-white flex items-center group">
                APIs on la Plateforme
                <MistralArrow className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* Le Chat Section */}
      <LeChat />

      {/* Rest of the sections */}
      <section className="py-24 bg-[#FFF7E9] overflow-hidden rounded-3xl">
        <div className="container mx-auto px-4">
          <PartnerMarquee />
        </div>
      </section>

      <FeaturesSection />

      <section className="py-24 bg-[#FFF7E9] overflow-hidden rounded-3xl">
        <div className="container mx-auto">
          <TextMarquee text="One platform. Many uses. For all humans. " />
        </div>
      </section>

      <GridShowcase />
      <Announcement />
      <OpenRoles />
      <NextChapter />
      <ColorGradientFooter />
      <FixedChatInput />
    </div>
  )
}

