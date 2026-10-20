import type { ReactNode } from 'react'

export default function SectionWrapper({
  id,
  className = '',
  children,
}: {
  id?: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} className={`px-6 py-24 sm:px-10 md:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-content">{children}</div>
    </section>
  )
}
