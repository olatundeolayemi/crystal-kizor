import About from '@/components/About'
import Ecosystem from '@/components/Ecosystem'
import Hero from '@/components/Hero'
import NextSteps from '@/components/NextSteps'
import SignatureWork from '@/components/SignatureWork'

export default function Page() {
  return (
    <main>
      <Hero />
      <Ecosystem />
      <SignatureWork />
      <About />
      <NextSteps />
    </main>
  )
}
