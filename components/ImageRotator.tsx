'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

type Props = {
  images: { src: string; alt: string; fit?: 'cover' | 'contain' }[]
  sizes: string
  intervalMs?: number
}

export default function ImageRotator({ images, sizes, intervalMs = 5500 }: Props) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (paused) return
    const id = setInterval(() => setActive((i) => (i + 1) % images.length), intervalMs)
    return () => clearInterval(id)
  }, [paused, images.length, intervalMs])

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden bg-ink/[0.03]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          sizes={sizes}
          aria-hidden={i !== active}
          style={{ objectFit: img.fit ?? 'cover' }}
          className={`transition-opacity duration-1000 ease-out ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  )
}