import Reveal from './Reveal'
import SectionWrapper from './SectionWrapper'

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div
          aria-hidden
          className="flex aspect-[4/5] w-full max-w-sm items-end bg-ink/5 p-4 text-sm text-ink/60 lg:max-w-none"
        >
          Placeholder: portrait of Crystal Kizor
        </div>
        <div>
          <Reveal>
            <h2 className="font-serif text-4xl leading-tight md:text-5xl">The thread that connects it all.</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-ink/80">
              <p>
                Crystal Kizor is an architect, designer, entrepreneur, speaker and researcher. She is the founder of
                Studio COKA and builds across education, furniture, speaking, writing and youth work.
              </p>
              <p>
                Each initiative serves a different audience. They share one conviction: thoughtful, climate-responsive
                design, rooted in African context, can change how people live, learn and grow.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionWrapper>
  )
}
