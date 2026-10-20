import Reveal from './Reveal'
import SectionWrapper from './SectionWrapper'

const approach = [
  {
    title: 'Passive cooling',
    text: 'Keeping the building comfortable through its form and orientation, before any mechanical system is considered.',
  },
  {
    title: 'Natural light',
    text: 'Bringing daylight deep into the building so less energy is needed to light it.',
  },
  {
    title: 'Local materials',
    text: 'Building with what the place offers, so the architecture belongs to its context.',
  },
]

export default function SignatureWork() {
  return (
    <SectionWrapper id="work">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div
          aria-hidden
          className="flex aspect-[4/5] w-full items-end bg-ink/5 p-4 text-sm text-ink/60"
        >
          Placeholder: photograph of The Eye Specialist Hospital, Nsukka
        </div>
        <div>
          <Reveal>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
              Climate-responsive design, proven in practice.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 text-lg leading-relaxed text-ink/80">
              The Eye Specialist Hospital in Nsukka is Nigeria&apos;s first fully off-grid, solar-powered hospital. The
              design starts with the building itself, so the solar system can stay small.
            </p>
          </Reveal>
          <ul className="mt-10 border-t border-ink/15">
            {approach.map((a) => (
              <li key={a.title} className="flex items-start gap-4 border-b border-ink/15 py-5">
                <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 bg-accent" />
                <span className="leading-relaxed">
                  <strong className="font-semibold">{a.title}.</strong> {a.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
