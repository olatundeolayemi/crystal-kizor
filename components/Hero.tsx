import Link from 'next/link'
import SectionWrapper from './SectionWrapper'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <SectionWrapper className="relative z-10 flex min-h-[100svh] items-center">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h1 className="font-serif text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[1.04] tracking-tight">
              <span className="block">[COPY: headline, line 1]</span>
              <span className="block">[COPY: headline, line 2]</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/80 md:text-xl">
              [COPY: one-sentence positioning for Crystal Kizor, founder of Studio COKA]
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#ecosystem"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-7 py-3 font-medium text-ink transition-colors hover:bg-ink hover:text-cream"
              >
                Explore the work
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-ink/30 px-7 py-3 font-medium transition-colors hover:bg-ink hover:text-cream"
              >
                Start a project
              </Link>
            </div>
          </div>
          {/* hidden below lg until a portrait exists */}
          <div aria-hidden className="hidden aspect-[4/5] w-full bg-ink/5 lg:block" />
        </div>
      </SectionWrapper>
    </div>
  )
}
