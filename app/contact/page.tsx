import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import SectionWrapper from '@/components/SectionWrapper'

export const metadata: Metadata = { title: 'Start a project | Crystal Kizor' }

export default function ContactPage() {
  return (
    <main id="main">
      <SectionWrapper>
        <Link href="/" className="font-medium underline decoration-accent decoration-2 underline-offset-4">
          Back to home
        </Link>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <h1 className="font-serif text-4xl leading-tight md:text-6xl">Start a project</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/80">
              Tell us what you have in mind. Choose the topic that fits and we will reply by email.
            </p>
          </div>
          <ContactForm />
        </div>
      </SectionWrapper>
    </main>
  )
}
