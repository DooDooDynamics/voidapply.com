// Canonical mock applicant reused across all skin specs.
export const mockApplicant = {
  firstName: 'Ada',
  lastName: 'Lovelace',
  fullName: 'Ada Lovelace',
  email: 'ada@example.com',
  phone: '555-867-5309',
  linkedin: 'https://www.linkedin.com/in/ada',
  github: 'https://github.com/ada',
  portfolio: 'https://ada.example.com',
  website: 'https://ada.example.com',
  city: 'London',
  country: 'United Kingdom',
  address: '1 Analytical Engine Lane',
  zip: 'EC1A 1AA',
  coverLetter:
    'I am uniquely qualified for this role because I invented the concept of a programmer.',
  whyUs: 'I love debugging.',
  yearsExperience: '10',
  salary: '180000',
  salaryExpectation: '180000',
  startDate: '2026-05-01',
  resumeFileName: 'resume.pdf',
  resumeFileBytes: Buffer.from('%PDF-1.4 fake pdf bytes'),
} as const

export type MockApplicant = typeof mockApplicant
