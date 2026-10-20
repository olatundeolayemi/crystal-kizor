import About from '@/components/About'
import Ecosystem from '@/components/Ecosystem'
import Hero from '@/components/Hero'
import NextSteps from '@/components/NextSteps'
import Prism from '@/components/Prism'
import SignatureWork from '@/components/SignatureWork'

export default function Page() {
  return (
    <main id="main">
      <Hero />
      <Prism />
      <Ecosystem />
      <SignatureWork />
      <About />
      <NextSteps />
    </main>
  )
}
