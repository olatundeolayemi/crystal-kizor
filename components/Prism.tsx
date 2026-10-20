'use client'

import { motion, useReducedMotion, type Variants } from 'framer-motion'

const ends = Array.from({ length: 7 }, (_, i) => Math.round(100 + i * (1000 / 6)))

const ray: Variants = {
  hidden: { pathLength: 0 },
  show: (i: number) => ({ pathLength: 1, transition: { duration: 1.2, delay: i * 0.12, ease: 'easeOut' } }),
}

const lineProps = {
  fill: 'none',
  stroke: '#FFF4E2',
  strokeOpacity: 0.35,
  strokeWidth: 1,
  vectorEffect: 'non-scaling-stroke',
} as const

export default function Prism() {
  const reduce = useReducedMotion()

  return (
    <div aria-hidden className="bg-ink">
      <motion.svg
        viewBox="0 0 1200 220"
        preserveAspectRatio="none"
        className="hidden h-56 w-full md:block"
        style={{ filter: 'blur(1px)' }}
        initial={reduce ? false : 'hidden'}
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <path d="M600 0 V28" {...lineProps} />
        {ends.map((x, i) => (
          <motion.path key={x} d={`M600 28 L${x} 220`} variants={ray} custom={i} {...lineProps} />
        ))}
      </motion.svg>

      <div
        className="mx-auto h-28 w-0.5 md:hidden"
        style={{ background: 'linear-gradient(to bottom, rgba(255,244,226,0.45), transparent)', filter: 'blur(1px)' }}
      />
    </div>
  )
}
