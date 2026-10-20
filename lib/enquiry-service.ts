import { InMemoryEnquiryStore, type EnquiryInput, type EnquiryStore } from './enquiry-store'

export type EnquiryResult = { ok: true; id: string }

const store: EnquiryStore = new InMemoryEnquiryStore()

export async function submitEnquiry(input: EnquiryInput): Promise<EnquiryResult> {
  const { id } = await store.save({
    ...input,
    name: input.name.trim(),
    email: input.email.trim().toLowerCase(),
    message: input.message.trim(),
  })
  return { ok: true, id }
}
