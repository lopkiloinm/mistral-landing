import { SendIcon } from "./icons/send-icon"
import { Button } from "@/components/ui/button"

export function Announcement() {
  return (
    <section className="bg-[#FFF7E9]">
      <div className="container mx-auto px-4 py-12">
        <a href="#" className="block bg-[hsla(45,100%,88%,1)] p-12 relative rounded-3xl">
          <div className="text-base mb-12">Announcements</div>
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-4xl font-light leading-tight max-w-2xl">
              Announcing the all new le Chat:
              <br />
              Your AI assistant for life and
              <br />
              work.{" "}
              <Button
                className="inline-flex relative top-[4px] ml-2 w-[26px] h-[26px] p-0 items-center justify-center bg-[hsla(17,96%,52%,1)] hover:bg-[hsla(17,96%,52%,0.9)] rounded-full"
                size="icon"
              >
                <SendIcon className="rotate-90" />
              </Button>
            </h2>
            <div className="text-base absolute bottom-12 right-12">Feb 6, 2025</div>
          </div>
        </a>
      </div>
    </section>
  )
}

