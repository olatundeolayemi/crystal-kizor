import SectionWrapper from './SectionWrapper'

export default function SignatureWork() {
  return (
    <SectionWrapper id="work">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div aria-hidden className="aspect-[4/5] w-full bg-ink/5" />
        <div>
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">[COPY: signature work heading]</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink/80">
            [COPY: introduce The Eye Specialist Hospital, Nsukka, Nigeria&apos;s first fully off-grid solar-powered
            hospital]
          </p>
          <ul className="mt-10 border-t border-ink/15">
            {['passive cooling', 'natural light', 'local materials'].map((topic) => (
              <li key={topic} className="flex items-start gap-4 border-b border-ink/15 py-5">
                <span aria-hidden className="mt-2.5 h-2 w-2 shrink-0 bg-accent" />
                <span className="leading-relaxed">[COPY: one short line on {topic}]</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  )
}
