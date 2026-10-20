import { NextResponse } from 'next/server'
import { z } from 'zod'
import { submitEnquiry } from '@/lib/enquiry-service'
import { projectTypes } from '@/lib/enquiry-store'

export const runtime = 'nodejs'

const schema = z.object({
  name: z.string().trim().min(1, 'Enter your name.').max(120, 'Keep your name under 120 characters.'),
  email: z.string().trim().email('Enter a valid email address.').max(200, 'Keep your email under 200 characters.'),
  projectType: z.enum(projectTypes, { errorMap: () => ({ message: 'Choose a project type.' }) }),
  message: z
    .string()
    .trim()
    .min(10, 'Tell us a little more, at least 10 characters.')
    .max(4000, 'Keep your message under 4,000 characters.'),
})

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'invalid_json' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'validation_failed', fields: parsed.error.flatten().fieldErrors },
      { status: 400 },
    )
  }

  try {
    const result = await submitEnquiry(parsed.data)
    return NextResponse.json(result, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'server_error' }, { status: 500 })
  }
}
