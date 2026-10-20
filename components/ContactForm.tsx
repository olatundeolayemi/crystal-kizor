'use client'

import Link from 'next/link'
import { useState, type FormEvent } from 'react'

type FieldName = 'name' | 'email' | 'projectType' | 'message'
type FieldErrors = Partial<Record<FieldName, string[]>>

const projectTypes = [
  { value: 'building', label: 'A new building' },
  { value: 'interior', label: 'Interior design' },
  { value: 'furniture', label: 'Furniture or a product' },
  { value: 'speaking', label: 'A speaking engagement' },
  { value: 'other', label: 'Something else' },
]

const fieldClass = 'mt-2 w-full border border-ink/40 bg-white px-4 py-3 text-base'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success'>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    setStatus('pending')
    setErrors({})
    setFormError('')

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        return
      }
      const body = (await res.json().catch(() => ({}))) as { fields?: FieldErrors }
      if (res.status === 400 && body.fields) {
        setErrors(body.fields)
      } else {
        setFormError('Something went wrong on our side. Please try again in a moment.')
      }
    } catch {
      setFormError('We could not reach the server. Check your connection and try again.')
    }
    setStatus('idle')
  }

  if (status === 'success') {
    return (
      <div role="status" className="border border-ink/20 bg-white p-8 md:p-12">
        <h2 className="font-serif text-3xl md:text-4xl">Thank you, we have your message.</h2>
        <p className="mt-4 max-w-md leading-relaxed text-ink/80">
          We will read it and reply to the email address you gave us.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center rounded-full border border-ink/30 px-7 py-3 font-medium transition-colors hover:bg-ink hover:text-cream"
        >
          Back to the home page
        </Link>
      </div>
    )
  }

  const pending = status === 'pending'

  function errorFor(field: FieldName) {
    const message = errors[field]?.[0]
    return message ? (
      <p id={`${field}-error`} className="mt-2 text-sm font-medium text-red-700">
        {message}
      </p>
    ) : null
  }

  function aria(field: FieldName) {
    return errors[field]
      ? ({ 'aria-invalid': true, 'aria-describedby': `${field}-error` } as const)
      : ({ 'aria-invalid': false } as const)
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div>
        <label htmlFor="name" className="font-medium">
          Your name
        </label>
        <input id="name" name="name" type="text" autoComplete="name" required className={fieldClass} {...aria('name')} />
        {errorFor('name')}
      </div>

      <div>
        <label htmlFor="email" className="font-medium">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={fieldClass}
          {...aria('email')}
        />
        {errorFor('email')}
      </div>

      <div>
        <label htmlFor="projectType" className="font-medium">
          What is this about?
        </label>
        <select id="projectType" name="projectType" required defaultValue="" className={fieldClass} {...aria('projectType')}>
          <option value="" disabled>
            Choose a project type
          </option>
          {projectTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        {errorFor('projectType')}
      </div>

      <div>
        <label htmlFor="message" className="font-medium">
          Your message
        </label>
        <textarea id="message" name="message" rows={6} required className={fieldClass} {...aria('message')} />
        {errorFor('message')}
      </div>

      {formError && (
        <p role="alert" className="font-medium text-red-700">
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-accent px-8 py-3 font-medium text-ink transition-colors hover:bg-ink hover:text-cream disabled:cursor-wait disabled:opacity-60 sm:w-auto"
      >
        {pending ? 'Sending...' : 'Send message'}
      </button>
    </form>
  )
}
