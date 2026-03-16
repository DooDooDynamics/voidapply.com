export type Company = {
  id: string
  name: string
  industry: string
  tagline: string
  headquarters: string
  employeeCount: string
}

export type JobCategory =
  | 'engineering'
  | 'product'
  | 'design'
  | 'marketing'
  | 'finance'
  | 'operations'
  | 'data-science'
  | 'management'
  | 'sales'
  | 'hr'

export type RejectionModeId =
  | 'dev-null'
  | 'shredder'
  | 'black-hole'
  | 'ghost'
  | 'speedrun'
  | 'assessment-gauntlet'
  | 'fake-email'
  | 'ats-score'
  | 'interview-then-ghost'
  | 'culture-fit'
  | 'phantom-offer'

export type GenericRejectionModeId =
  | 'dev-null'
  | 'shredder'
  | 'black-hole'
  | 'ghost'
  | 'speedrun'
  | 'assessment-gauntlet'

export type PersonalizedRejectionModeId =
  | 'fake-email'
  | 'ats-score'
  | 'interview-then-ghost'
  | 'culture-fit'
  | 'phantom-offer'

export type FakeEmailContent = {
  subject: string
  body: string
}

export type AtsScoreCategory = {
  name: string
  score: number
  comment: string
}

export type AtsScoreContent = {
  overallScore: number
  categories: AtsScoreCategory[]
}

export type InterviewStage = {
  name: string
  result: string
}

export type InterviewThenGhostContent = {
  stages: InterviewStage[]
}

export type CultureFitContent = {
  recruiterName: string
  stageReached: string
}

export type PhantomOfferContent = {
  recruiterName: string
  jobTitle: string
  fakeSalary: string
  promisedTimeline: string
}

export type RejectionContent = {
  'fake-email'?: FakeEmailContent
  'ats-score'?: AtsScoreContent
  'interview-then-ghost'?: InterviewThenGhostContent
  'culture-fit'?: CultureFitContent
  'phantom-offer'?: PhantomOfferContent
}

export type Job = {
  id: string
  companyId: string
  category: JobCategory
  title: string
  location: string
  salary: string
  type: string
  postedDate: string
  description: string
  requirements: string[]
  niceToHaves: string[]
  rejectionContent: RejectionContent
}

export type AtsSkin = {
  id: string
  name: string
  tagline: string
  accentColor: string
}

export type RejectionMode = {
  id: RejectionModeId
  name: string
  description: string
  isGeneric: boolean
}

export type AtsSkinProps = {
  job: Job
  company: Company
  onSubmit: () => void
}

export type RejectionModeProps = {
  job: Job
  company: Company
  onComplete: () => void
}
