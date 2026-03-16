import type { RejectionMode } from '@/types'

export const rejectionModes: RejectionMode[] = [
  {
    id: 'dev-null',
    name: '/dev/null',
    description: 'Your application gets piped directly to the void.',
    isGeneric: true,
  },
  {
    id: 'ghost',
    name: 'The Ghost',
    description: 'Submit and... nothing. The most realistic mode.',
    isGeneric: true,
  },
  {
    id: 'speedrun',
    name: 'Speedrun Rejection',
    description: 'How fast can we reject you? World record pace.',
    isGeneric: true,
  },
  {
    id: 'shredder',
    name: 'Paper Shredder',
    description: 'Your application scrolls into a shredder. For the environment.',
    isGeneric: true,
  },
  {
    id: 'black-hole',
    name: 'Black Hole',
    description: 'Your application crosses the event horizon. No escape.',
    isGeneric: true,
  },
  {
    id: 'assessment-gauntlet',
    name: 'Assessment Gauntlet',
    description: 'PyMetrix™ 6-stage battery. Auto-rejected on completion.',
    isGeneric: true,
  },
  {
    id: 'fake-email',
    name: 'Rejection Email',
    description: 'A lovingly crafted corporate rejection email.',
    isGeneric: false,
  },
  {
    id: 'ats-score',
    name: 'ATS Score',
    description: 'Watch AI grade your application into oblivion.',
    isGeneric: false,
  },
  {
    id: 'interview-then-ghost',
    name: 'Interview Then Ghost',
    description: 'Phone → Technical → Final → Offer stage → blank screen.',
    isGeneric: false,
  },
  {
    id: 'culture-fit',
    name: 'Culture Fit',
    description: 'Offer pending... then a 2-sentence email. No feedback.',
    isGeneric: false,
  },
  {
    id: 'phantom-offer',
    name: 'Phantom Offer',
    description: 'Verbal offer. Countdown to Friday. Rescission email.',
    isGeneric: false,
  },
]
