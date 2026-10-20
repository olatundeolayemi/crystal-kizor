import Link from 'next/link'
import { brandLinks } from '@/lib/brands'
import Reveal from './Reveal'
import SectionWrapper from './SectionWrapper'

const steps = [
  { label: 'I need a building', href: '/contact' },
  { label: 'I want to learn', href: brandLinks.tea },
  { label: 'I want to furnish a space', href: brandLinks.elevated },
  { label: 'I want to support the mission', href: brandLinks.ako },
]

const buttonClass =
  'flex min-h-24 items-center justify-center border border-ink/30 px-4 py-5 text-center font-medium leading-snug transition-colors hover:bg-ink hover:text-cream sm:text-lg md:min-h-28'

export default function NextSteps() {
  return (
    <SectionWrapper id="next">
      <Reveal>
        <h2 className="font-serif text-4xl leading-tight md:text-5xl">[COPY: next steps heading]</h2>
      </Reveal>
      <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {steps.map((s) =>
          s.href.startsWith('/') ? (
            <Link key={s.label} href={s.href} className={buttonClass}>
              {s.label}
            </Link>
          ) : (
            <a key={s.label} href={s.href} className={buttonClass}>
              {s.label}
            </a>
          ),
        )}
      </div>
    </SectionWrapper>
  )
}
