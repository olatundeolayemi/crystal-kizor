'use client'

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

const shaftMask = 'linear-gradient(to bottom, black 0%, black 55%, transparent 100%)'
const reflectionMask = 'linear-gradient(to top, black 0%, transparent 75%)'

export default function LightWell({ lines, headlineClass }: { lines: string[]; headlineClass: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const cursor = useMotionValue(0)
  const cursorSmooth = useSpring(cursor, { stiffness: 30, damping: 20 })
  // 1 on touch devices (scroll drift), 0 when a fine pointer drives the angle instead
  const scrollGain = useMotionValue(1)

  const rotate = useTransform(
    [cursorSmooth, scrollYProgress, scrollGain],
    ([c, p, g]: number[]) => -35 + c + p * 3 * g,
  )
  const opacity = useTransform([scrollYProgress, scrollGain], ([p, g]: number[]) => 1 - 0.45 * p * g)

  useEffect(() => {
    if (reduce) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    scrollGain.set(0)
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 7
      cursor.set(Math.max(-3.5, Math.min(3.5, x)))
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduce, cursor, scrollGain])

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 35%, rgba(250,249,246,0) 25%, rgba(26,26,26,0.09) 100%), linear-gradient(180deg, #EFEAE0 0%, #FAF9F6 50%, #F0EBE2 100%)',
        }}
      />

      <motion.div
        className="absolute -top-[10%] left-[6vw] h-[170%] will-change-transform"
        style={{
          width: 'clamp(220px, 30vw, 460px)',
          mixBlendMode: 'screen',
          transformOrigin: '50% 0%',
          rotate: reduce ? -35 : rotate,
          opacity: reduce ? 1 : opacity,
        }}
      >
        <div
          className="absolute inset-0 blur-3xl"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(255,236,208,0.5) 30%, rgba(255,240,218,0.75) 50%, rgba(255,236,208,0.5) 70%, transparent 100%)',
            maskImage: shaftMask,
            WebkitMaskImage: shaftMask,
          }}
        />
        <div
          className="absolute inset-y-0 left-[38%] w-[24%] blur-xl"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,251,242,0.95), transparent)',
            maskImage: shaftMask,
            WebkitMaskImage: shaftMask,
          }}
        />
      </motion.div>

      <div
        className="absolute inset-x-0 bottom-0 h-[28%] overflow-hidden"
        style={{ background: 'linear-gradient(180deg, rgba(26,26,26,0.02), rgba(26,26,26,0.08))' }}
      >
        <div
          className="absolute left-1/2 top-0 h-48 w-[90%] -translate-x-1/2 blur-2xl"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(255,222,184,0.9), rgba(255,222,184,0) 70%)',
            mixBlendMode: 'screen',
          }}
        />
        <div className="px-6 sm:px-10">
          <div className="mx-auto max-w-content">
            <div
              className={headlineClass}
              style={{
                transform: 'scaleY(-1)',
                opacity: 0.12,
                filter: 'blur(4px)',
                maskImage: reflectionMask,
                WebkitMaskImage: reflectionMask,
              }}
            >
              {lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
