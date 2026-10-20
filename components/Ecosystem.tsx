import { brandLinks } from '@/lib/brands'
import EcosystemCard from './EcosystemCard'
import Reveal from './Reveal'
import SectionWrapper from './SectionWrapper'

export default function Ecosystem() {
  return (
    <SectionWrapper id="ecosystem">
      <Reveal>
        <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">[COPY: ecosystem section heading]</h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">[COPY: one line on how the brands connect]</p>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <EcosystemCard
          tier={1}
          title="Studio COKA"
          description="[COPY: architecture, interior design and construction]"
          label="[COPY: link label]"
          href={brandLinks.coka}
        />
        <EcosystemCard
          tier={1}
          title="The Effective Architect"
          description="[COPY: education and media for architects]"
          label="[COPY: link label]"
          href={brandLinks.tea}
        />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <EcosystemCard
          tier={2}
          title="ELEvated"
          description="[COPY: furniture and product design]"
          label="[COPY: link label]"
          href={brandLinks.elevated}
        />
        <EcosystemCard
          tier={2}
          title="Speaking"
          description="[COPY: talks and conversations]"
          label="[COPY: link label]"
          href={brandLinks.speaking}
        />
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <EcosystemCard
          tier={3}
          title="AKO Alliance"
          description="[COPY: access to education]"
          label="[COPY: link label]"
          href={brandLinks.ako}
        />
        <EcosystemCard
          tier={3}
          title="Alive and Free"
          description="[COPY: youth movement]"
          label="[COPY: link label]"
          href={brandLinks.alive}
        />
        <EcosystemCard
          tier={3}
          title="Crystal Kizor"
          description="[COPY: research and writing]"
          label="[COPY: link label]"
          href={brandLinks.crystal}
        />
      </div>
    </SectionWrapper>
  )
}
