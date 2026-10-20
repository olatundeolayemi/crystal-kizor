import Reveal from './Reveal'
import SectionWrapper from './SectionWrapper'

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div aria-hidden className="aspect-[4/5] w-full max-w-sm bg-ink/5 lg:max-w-none" />
        <div>
          <Reveal>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">[COPY: about heading]</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
              [COPY: short bio, four to five lines, framing how the brands share one thread]
            </p>
          </Reveal>
        </div>
      </div>
    </SectionWrapper>
  )
}
