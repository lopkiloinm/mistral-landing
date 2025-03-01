import { SendIcon } from "@/components/icons/send-icon"
import { BackgroundSquares } from "./background-squares"
import { FeaturesHeading } from "./features-heading"

export default function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-stretch relative container mx-auto">
      {/* Left Column */}
      <div className="relative min-h-[900px] w-full">
        {/* SVG Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative w-full h-full">
            <BackgroundSquares />
          </div>
        </div>
        {/* Heading */}
        <FeaturesHeading />
      </div>

      {/* Right Column */}
      <div className="bg-[#FFF7E9] relative rounded-3xl overflow-hidden features-section">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Solid background to block SVG */}
            <div className="absolute inset-0 bg-[#FFF7E9] z-[2]" />
            <div className="relative z-[3] space-y-6 p-12">
              <div className="bg-[#FFF7E9] rounded-2xl shadow-lg p-8 pr-16">
                <h3 className="text-2xl font-medium mb-6">01. Customizable, from pre-training to the real world.</h3>
                <div className="flex gap-4">
                  <SendIcon className="w-6 h-6 shrink-0 text-[hsla(17,96%,52%,1)] mt-1 rotate-90" />
                  <p className="text-lg">
                    World class, benchmark-setting open models to customize, distill, fine-tune, iterate, and build on.
                  </p>
                </div>
              </div>

              <div className="bg-[#FFF7E9] rounded-2xl shadow-lg p-8 pr-16">
                <h3 className="text-2xl font-medium mb-6">02. Private and portable.</h3>
                <div className="flex gap-4">
                  <SendIcon className="w-6 h-6 shrink-0 text-[hsla(17,96%,52%,1)] mt-1 rotate-90" />
                  <p className="text-lg">
                    A comprehensive, enterprise-grade AI platform that can be deployed anywhere—on-premises, cloud,
                    edge, devices, data centers, and more.
                  </p>
                </div>
              </div>

              <div className="bg-[#FFF7E9] rounded-2xl shadow-lg p-8 pr-16">
                <h3 className="text-2xl font-medium mb-6">03. Transparent and trustworthy.</h3>
                <div className="flex gap-4">
                  <SendIcon className="w-6 h-6 shrink-0 text-[hsla(17,96%,52%,1)] mt-1 rotate-90" />
                  <p className="text-lg">
                    Strongest global contributor to open source AI and AI policy. Mistral AI is the world's greenest and
                    leading independent AI lab.
                  </p>
                </div>
              </div>

              <div className="bg-[#FFF7E9] rounded-2xl shadow-lg p-8 pr-16">
                <h3 className="text-2xl font-medium mb-6">04. Deeply engaged solutioning and value delivery.</h3>
                <div className="flex gap-4">
                  <SendIcon className="w-6 h-6 shrink-0 text-[hsla(17,96%,52%,1)] mt-1 rotate-90" />
                  <p className="text-lg">
                    Hands-on assistance from the world's best AI engineers and scientists across deployment,
                    solutioning, safety, and beyond.
                  </p>
                </div>
              </div>

              <div className="bg-[#FFF7E9] rounded-2xl shadow-lg p-8 pr-16">
                <h3 className="text-2xl font-medium mb-6">05. Delightful interfaces.</h3>
                <div className="flex gap-4">
                  <SendIcon className="w-6 h-6 shrink-0 text-[hsla(17,96%,52%,1)] mt-1 rotate-90" />
                  <p className="text-lg">
                    Bringing frontier intelligence to life with intuitive user experiences across life and work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

