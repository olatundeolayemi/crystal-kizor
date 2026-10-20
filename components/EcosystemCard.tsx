'use client'

import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  title: string
  description: string
  label: string
  href: string
  tier: 1 | 2 | 3
}

const tierStyles = {
  1: {
    card: 'min-h-[22rem] bg-ink p-8 text-cream md:min-h-[28rem] md:p-12',
    title: 'text-4xl md:text-6xl',
    description: 'text-cream/80 md:text-lg',
    label: 'decoration-accent',
  },
  2: {
    card: 'min-h-[16rem] border border-ink/15 border-t-4 border-t-accent bg-white p-8 md:min-h-[20rem]',
    title: 'text-3xl md:text-4xl',
    description: 'text-ink/75',
    label: 'decoration-accent',
  },
  3: {
    card: 'border-t border-ink/25 pb-2 pt-6',
    title: 'text-2xl',
    description: 'text-ink/75',
    label: 'decoration-ink/40',
  },
} as const

export default function EcosystemCard({ title, description, label, href, tier }: Props) {
  const reduce = useReducedMotion()
  const s = tierStyles[tier]
  const external = href.startsWith('http')
  return (
    <motion.a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      whileHover={reduce ? undefined : { y: -4, boxShadow: '0 18px 36px -14px rgba(26,26,26,0.3)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`flex flex-col justify-between gap-10 ${s.card}`}
    >
      <div>
        <h3 className={`font-serif leading-tight ${s.title}`}>{title}</h3>
        <p className={`mt-4 max-w-md leading-relaxed ${s.description}`}>{description}</p>
      </div>
      <span className={`font-medium underline decoration-2 underline-offset-4 ${s.label}`}>{label}</span>
    </motion.a>
  )
}
