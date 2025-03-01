import { MistralArrow } from "./icons/mistral-arrow"

export function NextChapter() {
  return (
    <section className="bg-[#FFF7E9]">
      <div className="container mx-auto px-4 pb-24">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-light leading-tight mb-12">The next chapter of AI is yours.</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a href="#" className="text-black flex items-center group">
              Start building with Mistral AI
              <MistralArrow className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#" className="text-black flex items-center group">
              Talk to an expert
              <MistralArrow className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

