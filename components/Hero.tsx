import Image from 'next/image'
import Link from 'next/link'
import LightWell from './LightWell'
import SectionWrapper from './SectionWrapper'

const headlineClass = 'font-serif text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[1.04] tracking-tight'
const lines = ['Architect and designer,', 'builder of climate-responsive futures.']

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <LightWell lines={lines} headlineClass={headlineClass} />
      <SectionWrapper className="relative z-10 flex min-h-[100svh] items-center">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <h1 className={headlineClass}>
              {lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/80 md:text-xl">
              Crystal Kizor is the founder of Studio COKA and builds across architecture, furniture, education,
              speaking, research and youth work.
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
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden bg-ink/5 lg:max-w-none">
            <Image
              src="/images/coza.png"
              alt="Portrait of Crystal Kizor, architect and founder of Studio COKA"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}