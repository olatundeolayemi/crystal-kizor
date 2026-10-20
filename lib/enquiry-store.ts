export const projectTypes = ['building', 'interior', 'furniture', 'speaking', 'other'] as const

export type ProjectType = (typeof projectTypes)[number]

export interface EnquiryInput {
  name: string
  email: string
  projectType: ProjectType
  message: string
}

export interface EnquiryStore {
  save(input: EnquiryInput): Promise<{ id: string }>
}

// swappable for a real database behind the same interface
export class InMemoryEnquiryStore implements EnquiryStore {
  private items: (EnquiryInput & { id: string; createdAt: string })[] = []

  async save(input: EnquiryInput): Promise<{ id: string }> {
    const id = crypto.randomUUID()
    this.items.push({ ...input, id, createdAt: new Date().toISOString() })
    return { id }
  }
}
