import { InMemoryEnquiryStore, type EnquiryInput, type EnquiryStore } from './enquiry-store'

export type EnquiryResult = { ok: true; id: string }

const store: EnquiryStore = new InMemoryEnquiryStore()

// serverless instances do not share memory, so email is the real delivery until a database exists
async function notify(input: EnquiryInput) {
  const { RESEND_API_KEY, ENQUIRY_TO, ENQUIRY_FROM } = process.env
  if (!RESEND_API_KEY || !ENQUIRY_TO || !ENQUIRY_FROM) return

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: ENQUIRY_FROM,
      to: ENQUIRY_TO.split(',').map((s) => s.trim()),
      reply_to: input.email,
      subject: `[${input.projectType}] Enquiry from ${input.name}`,
      text: `Name: ${input.name}\nEmail: ${input.email}\nType: ${input.projectType}\n\n${input.message}\n`,
    }),
  })
  if (!res.ok) throw new Error('mail_failed')
}

export async function submitEnquiry(input: EnquiryInput): Promise<EnquiryResult> {
  const clean: EnquiryInput = {
    ...input,
    name: input.name.trim(),
    email: input.email.trim().toLowerCase(),
    message: input.message.trim(),
  }
  const { id } = await store.save(clean)
  await notify(clean)
  return { ok: true, id }
}
