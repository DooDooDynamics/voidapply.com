import type { Job } from '@/types'

export const productJobs: Job[] = [
  {
    id: 'google-product-manager',
    companyId: 'google',
    category: 'product',
    title: 'Product Manager, Cloud AI',
    location: 'San Francisco, CA (Hybrid — 3 days in office, 4 days in meetings)',
    salary:
      '$160,000 - $290,000 (salary depends on how well you negotiate against our trained negotiation AI)',
    type: 'Full-time',
    postedDate: '2024-02-10',
    description:
      "Lead product strategy for our Cloud AI division. You'll create roadmaps that will be completely rewritten every quarter, write PRDs that no engineer will read, and present to leadership using only acronyms. Your primary responsibility is to attend 8 hours of meetings daily and then do your actual work between 6 PM and midnight.",
    requirements: [
      '5+ years of product management experience (and 10+ years of patience)',
      'MBA from a top-tier school (we need someone who can make a slide deck)',
      "Experience with AI/ML products (or at least the ability to say 'machine learning' confidently)",
      "Proven ability to say 'let's take this offline' in 7 different languages",
      'Track record of launching products that Google will shut down within 2 years',
    ],
    niceToHaves: [
      'Experience grieving the death of a Google product you built',
      'Ability to create a 47-slide strategy deck overnight',
      "Familiarity with Google's product naming conventions (random nouns + 'by Google')",
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Your PM application at Google — Cloud AI',
        body: `Dear Candidate,

Thank you for applying to the Product Manager, Cloud AI position at Google.

After reviewing your application with our state-of-the-art candidate evaluation model (which, ironically, is one of the Cloud AI products you'd be managing), we've decided to pursue other candidates at this time.

Specifically, our evaluation highlighted that you did not include a single strategy framework reference in your resume. No RICE scoring, no weighted impact matrices, no 2x2 prioritization grids. We're not sure you even know what a PRD is.

We're also concerned that you listed "launched products still alive after 3 years" as an achievement. At Google, we view product shutdown as a feature, not a bug.

We wish you the best,
Google Cloud AI Hiring Team`,
      },
    },
  },
  {
    id: 'amazon-sr-pm',
    companyId: 'amazon',
    category: 'product',
    title: 'Senior Product Manager — Technical, Alexa',
    location: 'Seattle, WA (in-office, your Alexa will monitor attendance)',
    salary: "Competitive (we'll tell you after 5 rounds of interviews)",
    type: 'Full-time',
    postedDate: '2024-01-28',
    description:
      'Own the product vision for Alexa features that 12 people use. Write PRFAQ documents that are longer than most novels. Navigate internal politics across 14 different teams, all of whom think they own your feature. Your success metric is how many 6-pagers you can write per quarter. The actual product is secondary.',
    requirements: [
      '7+ years in product management at a tech company (preferably one with ≥16 leadership principles)',
      'Ability to write a 6-page narrative document about a button color change',
      'Experience with voice-first products (talking to your plants counts)',
      'Must own at least 3 Amazon devices (we check)',
      "Demonstrated ability to work backwards from a press release for a product that doesn't exist",
    ],
    niceToHaves: [
      'Previous experience explaining to your family why Alexa laughs randomly at 3 AM',
      'Fluent in Bezos-isms',
      'Emotional detachment from features that get deprioritized',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Update: Senior Product Manager — Technical, Alexa at Amazon',
        body: `Hello,

Thank you for your interest in the Senior Product Manager — Technical, Alexa position at Amazon.

After a thorough review aligned with our Leadership Principles, we have decided not to move forward. Our Alexa-powered hiring assistant had the following concerns:

"Alexa, why wasn't this candidate selected?"
"This candidate's PRFAQ was only 4 pages. At Amazon, a proper PRFAQ is 6 pages minimum. Even this rejection email is longer than their PRFAQ."

We encourage you to reapply once you've completed our recommended reading list (estimated time: 14 months).

Best,
Amazon Alexa Talent Team
"Alexa, send rejection email."
"Okay, sending rejection email and ordering a copy of 'Working Backwards' to the candidate's address."`,
      },
    },
  },
  {
    id: 'meta-product-manager',
    companyId: 'meta',
    category: 'product',
    title: 'Product Manager — Instagram Growth',
    location: 'Menlo Park, CA (in-office, so you can experience our campus before the next layoff)',
    salary: '$175,000 - $310,000 + RSUs (value may decrease while you read this listing)',
    type: 'Full-time',
    postedDate: '2024-02-12',
    description:
      "Drive growth for Instagram by making it more like TikTok, then more like BeReal, then more like whatever app teenagers are using this week. You'll own metrics that go up (engagement, time spent) and disown metrics that go down (user trust, mental health outcomes). Ship features weekly, pivot strategy monthly, and reorganize quarterly.",
    requirements: [
      '5+ years of product management experience in consumer social or growth',
      "Data-driven mindset (if a metric doesn't move, the feature doesn't exist)",
      'Experience with A/B testing at scale (we A/B test the A/B tests)',
      "Ability to write a one-pager that makes copying competitors' features sound innovative",
      'Must be comfortable with congressional hearings as a potential job responsibility',
    ],
    niceToHaves: [
      'Previous experience explaining to senators what an algorithm is',
      'Track record of increasing engagement without anyone asking "but should we?"',
      'Emotional detachment from your own product decisions being reversed the following week',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Your application — Product Manager, Instagram Growth at Meta',
        body: `Hi,

Thank you for applying to the Product Manager role on Instagram Growth at Meta.

We've decided not to move forward with your application. Here's some candid feedback:

Your product sense assessment proposed a feature that prioritized user well-being over engagement metrics. While admirable, this approach is fundamentally incompatible with our growth model. We need PMs who can increase daily active usage by 15% while maintaining plausible deniability about addiction mechanics.

Additionally, during the hypothetical crisis scenario, you suggested "being transparent with users." We appreciate creative thinking, but let's be realistic.

Best,
Meta Product Hiring Team`,
      },
    },
  },
  {
    id: 'apple-product-manager',
    companyId: 'apple',
    category: 'product',
    title: 'Product Manager — iPhone Experience',
    location:
      'Cupertino, CA (Apple Park — bring your own sense of direction, the building is a circle)',
    salary: "$180,000 - $310,000 (we negotiate like we price our products: we don't)",
    type: 'Full-time',
    postedDate: '2024-01-18',
    description:
      "Define the future of the iPhone experience for 1.5 billion users. You won't be able to tell anyone — including your family, friends, or therapist — what you're working on. NDAs are not a formality here; they're a lifestyle. You'll collaborate with design, engineering, and hardware teams, all of whom believe their discipline is the most important. Spoiler: it's design.",
    requirements: [
      '7+ years of product management at a consumer technology company',
      'Demonstrated ability to keep secrets (we will test this during the interview)',
      'Obsessive attention to detail — we once delayed a product launch over a 1-pixel shadow',
      'Experience shipping hardware-software integrated products at scale',
      'Comfort with the phrase "it just works" as both a product requirement and performance review criterion',
    ],
    niceToHaves: [
      'Full Apple ecosystem ownership (iPhone, Mac, iPad, Watch, AirPods, Vision Pro, HomePod — minimum)',
      'Previous experience presenting to a CEO who will redesign your entire product in the meeting',
      "Ability to use the word 'magical' in a sentence without irony",
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Apple — iPhone Experience Product Manager application',
        body: `Dear Candidate,

Thank you for your interest in the Product Manager — iPhone Experience role at Apple.

We are unable to share the specific reasons for not moving forward with your candidacy, as that information is classified under our internal NDA policy. In fact, the existence of this rejection email is itself confidential.

What we can share: our review team noted that your application was submitted from an Android device. We wish we could say this didn't matter, but we'd be lying, and at Apple, we believe in magical honesty.

We encourage you to apply again after upgrading your entire technology ecosystem.

Regards,
Apple Talent Team
(This email will self-destruct in accordance with our data retention policy.)`,
      },
    },
  },
  {
    id: 'spotify-product-manager',
    companyId: 'spotify',
    category: 'product',
    title: 'Product Manager — Personalization & Discovery',
    location: "Stockholm, Sweden or New York, NY (we're as distributed as our microservices)",
    salary: 'Competitive + equity (enough to afford a Spotify Premium subscription)',
    type: 'Full-time',
    postedDate: '2024-02-08',
    description:
      "Own the algorithms that tell 600 million people what to listen to next. You'll balance user delight with label politics, artist complaints, and the eternal question: why does Discover Weekly keep recommending sea shanties? Work in our famous squad model, where every team is autonomous until leadership disagrees.",
    requirements: [
      '4+ years of product management experience, ideally in personalization or recommendation systems',
      'Strong data analysis skills (you\'ll need to explain why the algorithm thinks a user who listened to one jazz song is now a "jazz enthusiast")',
      'Experience with two-sided marketplaces (users want discovery, labels want promotion, you want a vacation)',
      'Familiarity with agile methodologies, specifically the Spotify model (which Spotify no longer uses)',
    ],
    niceToHaves: [
      "A Spotify Wrapped that doesn't embarrass you",
      'Ability to explain machine learning to musicians without using the phrase "it\'s basically magic"',
      'Has never complained about a podcast recommendation interrupting their music',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Your Spotify application — Product Manager, Personalization & Discovery',
        body: `Hey there,

Thanks for applying to the Product Manager role on Personalization & Discovery at Spotify!

After reviewing your application, our recommendation engine has determined you're not a match for this role. Here's your Rejection Wrapped:

🎵 Your Application Stats:
- Time spent on application: 3 hours (top 4% of applicants!)
- Buzzwords used: 47 (just above average)
- Relevant experience match: 62% (needs more nines)
- Likelihood of getting an interview: 0.3% (streaming numbers we'd reject from an artist, too)

Your application has been added to our "Rejected But Promising" playlist, which no hiring manager has ever listened to.

Better luck next quarter,
Spotify Talent Team`,
      },
    },
  },
  {
    id: 'stripe-product-manager',
    companyId: 'stripe',
    category: 'product',
    title: 'Product Manager — Developer Experience',
    location:
      'San Francisco, CA or Remote (we trust you to be productive anywhere, but we will check)',
    salary: '$185,000 - $330,000 (we believe in paying well, not in salary transparency)',
    type: 'Full-time',
    postedDate: '2024-02-18',
    description:
      "Make Stripe's APIs so intuitive that developers weep with joy. You'll own the developer experience for payment integration, which means obsessing over error messages, documentation, and the exact wording of HTTP status codes. Your customers are developers, which means your bug reports will be extremely detailed and your feedback will be brutally honest.",
    requirements: [
      '5+ years of product management experience, with at least 2 years on developer-facing products',
      'Technical background — you should be able to read code, write code, and argue about code',
      'Experience with API design (and strong opinions about REST vs. GraphQL that you can articulate in a 5,000-word document)',
      'Ability to make complex financial regulations sound simple (and make simple features sound complex enough to justify a quarter of work)',
    ],
    niceToHaves: [
      'A personal project that uses the Stripe API (we check)',
      'Previous experience writing documentation that developers actually read',
      'Has debugged a webhook integration at 2 AM and found it character-building',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Stripe — Developer Experience PM application update',
        body: `Hi,

Thanks for applying to the Product Manager, Developer Experience role at Stripe.

We've reviewed your application and decided not to move forward. Our feedback is below in a format you should appreciate:

{
  "status": 422,
  "error": {
    "type": "application_error",
    "message": "Candidate qualifications failed validation",
    "details": [
      "field 'api_design_experience' expected type 'expert', got 'adequate'",
      "field 'documentation_passion' below minimum threshold",
      "field 'stripe_integration_count' must be >= 1, got 0"
    ]
  }
}

We recommend reviewing our API documentation (all 2,847 pages) before reapplying.

Best,
Stripe Product Recruiting`,
      },
    },
  },
]
