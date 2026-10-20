import { brandLinks } from '@/lib/brands'
import EcosystemCard from './EcosystemCard'
import Reveal from './Reveal'
import SectionWrapper from './SectionWrapper'

export default function Ecosystem() {
  return (
    <SectionWrapper id="ecosystem">
      <Reveal>
        <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-6xl">One practice, seven ways in.</h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
          Everything Crystal builds shares the same thinking: design that is climate-responsive and rooted in African
          context. Start with the part that fits you.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        <EcosystemCard
          tier={1}
          title="Studio COKA"
          description="Architecture, interior design and construction, led by thoughtful, climate-responsive design."
          label="Visit Studio COKA"
          href={brandLinks.coka}
        />
        <EcosystemCard
          tier={1}
          title="The Effective Architect"
          description="An education and media platform helping architects and built-environment professionals learn, grow and build better careers."
          label="Explore TEA"
          href={brandLinks.tea}
        />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <EcosystemCard
          tier={2}
          title="ELEvated"
          description="Contemporary, functional furniture and products rooted in African context, materials and ideas."
          label="See ELEvated"
          href={brandLinks.elevated}
        />
        <EcosystemCard
          tier={2}
          title="Speaking"
          description="Talks and conversations on architecture, climate-responsive design, African cities, design, entrepreneurship and the built environment."
          label="Invite Crystal to speak"
          href={brandLinks.speaking}
        />
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <EcosystemCard
          tier={3}
          title="AKO Alliance"
          description="Expanding access to education and creating opportunities for children and young people."
          label="Support AKO Alliance"
          href={brandLinks.ako}
        />
        <EcosystemCard
          tier={3}
          title="Alive and Free"
          description="A Christian youth movement helping young people walk in truth, healing, freedom, identity, purpose and life in Christ."
          label="Meet Alive and Free"
          href={brandLinks.alive}
        />
        <EcosystemCard
          tier={3}
          title="Crystal Kizor"
          description="Architecture, research, writing, media and ideas that sit directly under her own name."
          label="Read her work"
          href={brandLinks.crystal}
        />
      </div>
    </SectionWrapper>
  )
}
