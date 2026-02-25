import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section
      id="donate"
      className="bg-card py-20 md:py-28"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Get Involved
        </p>
        <h2 className="font-serif text-3xl tracking-tight text-card-foreground sm:text-4xl md:text-5xl text-balance">
          Your Generosity Can Transform Lives
        </h2>
        <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
          Whether it is a one-time contribution or a monthly pledge, every amount
          goes directly to the communities that need it. Together, we can build a
          future rooted in trust and compassion.
        </p>
        <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row">
          <Button size="lg" asChild className="text-base px-8">
            <Link href="#">Donate Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="text-base px-8">
            <Link href="#">Become a Volunteer</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
