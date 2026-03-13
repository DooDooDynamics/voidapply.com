import type { Job } from '@/types'

export const salesJobs: Job[] = [
  {
    id: 'salesforce-account-executive',
    companyId: 'salesforce',
    category: 'sales',
    title: 'Enterprise Account Executive — Financial Services',
    location: 'New York, NY or San Francisco, CA (wherever the clients are)',
    salary: '$130,000 base + OTE $280,000 (OTE = "Optimistic Target, Essentially")',
    type: 'Full-time',
    postedDate: '2024-01-18',
    description:
      "Sell Salesforce's platform to financial services companies that already use Salesforce but could be paying more. You'll manage a portfolio of enterprise accounts with a combined ACV that exceeds the GDP of a small nation, navigate procurement processes designed to make vendors cry, and attend Dreamforce where you'll wear a Hawaiian shirt and pretend to enjoy it. Your quota resets every quarter, but the anxiety never does.",
    requirements: [
      '7+ years of enterprise SaaS sales experience with a track record of exceeding quota',
      'Experience selling to C-suite executives who will ghost you after 3 meetings',
      'Ability to navigate 12-month enterprise sales cycles without losing hope or hair',
      'Deep understanding of the Salesforce ecosystem (all 47 products and 12 pricing tiers)',
      'Must believe in Ohana, or at least be willing to say it with conviction at Dreamforce',
    ],
    niceToHaves: [
      "Previous experience selling software that the client's employees will actively resist using",
      'A Rolodex (or LinkedIn network) of CIOs who return your calls',
      'Ability to demo a product without the demo environment crashing (success rate industry-wide: 40%)',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Salesforce — Enterprise Account Executive application',
        body: `Aloha!

Mahalo for your interest in the Enterprise Account Executive role at Salesforce.

After evaluating your application through our CRM (naturally), we've decided not to move forward. Your lead score was below our threshold:

- Pipeline generation potential: 62/100 (we need 85+)
- Ohana alignment: 34/100 (you didn't mention Ohana once. ONCE.)
- Dreamforce readiness: 12/100 (your LinkedIn profile photo does not include a Hawaiian shirt)

Your application has been moved to "Closed — Lost" in our ATS (which runs on Salesforce, obviously).

We recommend building a stronger personal brand, growing your LinkedIn following to at least 10,000 connections, and posting more inspirational sales quotes.

Ohana means family. But not your family. Our family. And you're not in it. Yet.

Aloha,
Salesforce Sales Recruiting`,
      },
    },
  },
  {
    id: 'microsoft-cloud-sales',
    companyId: 'microsoft',
    category: 'sales',
    title: 'Azure Cloud Solutions Architect — Sales',
    location: 'Anywhere, USA (the cloud is everywhere, and so should you be)',
    salary: '$140,000 base + OTE $260,000 + Azure credits (for your "demo" environment)',
    type: 'Full-time',
    postedDate: '2024-02-06',
    description:
      "Help enterprise customers migrate to Azure by explaining why it's better than AWS (spoiler: it's comparable, but our sales team is bigger). You'll conduct technical discovery sessions, design cloud architecture on whiteboards, and build ROI calculators that make the cloud sound cheaper than it is. Half your job is sales, half is engineering, and the other half is filling out expense reports for the steak dinners you'll buy for CIOs.",
    requirements: [
      '5+ years in technical sales, solutions architecture, or pre-sales engineering',
      'Deep knowledge of Azure services (or at least the ability to find the right Azure service among our 200+ offerings)',
      "Experience conducting technical demos that don't crash (Azure uptime goal: 99.99%. Demo uptime goal: please, just work)",
      "Ability to translate business problems into Azure architectures (and then price them in a way that doesn't cause sticker shock)",
    ],
    niceToHaves: [
      'AWS certifications (we want people who know the enemy)',
      "Previous experience migrating a customer from AWS to Azure without them noticing it's basically the same thing with different names",
      'Comfort saying "we have that too" in response to every AWS feature announcement',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Microsoft — Azure Solutions Architect, Sales application',
        body: `Dear Candidate,

Thank you for applying to the Azure Cloud Solutions Architect role at Microsoft.

After reviewing your application with a growth mindset, we've determined that your growth needs more time to grow.

Specific feedback:
- Your cloud experience is primarily AWS. While we appreciate cross-platform knowledge, you listed "aws" in your skills section 11 times and "Azure" 0 times. Even saying "the other cloud" would have been preferable.
- Your demo reel included a slide that said "all clouds are basically the same." This may be technically defensible but is culturally disqualifying at Microsoft.
- You proposed a customer migration strategy that was "cloud-agnostic." At Microsoft, the only cloud is Azure. The concept of "agnosticism" does not apply.

We recommend spending 6 months earning Azure certifications and then reapplying. We have 47 certifications available, and yes, you should get all of them.

Empowering every candidate to achieve more (elsewhere),
Microsoft Sales Recruiting`,
      },
    },
  },
  {
    id: 'google-cloud-sales',
    companyId: 'google',
    category: 'sales',
    title: 'Google Cloud Sales Representative — Enterprise',
    location:
      'New York, NY or San Francisco, CA (client-facing — business casual, which at Google means shoes)',
    salary: '$120,000 base + OTE $240,000 + stock (the stock is the real compensation)',
    type: 'Full-time',
    postedDate: '2024-02-14',
    description:
      "Sell Google Cloud to enterprises who are already deeply committed to AWS. Your job is to find the 30% of the market that hasn't been locked into an AWS or Azure contract and convince them that Google Cloud's data analytics and AI capabilities are worth switching for. You'll lose most deals to AWS, some to Azure, and occasionally to Oracle (which will hurt the most). But when you win, it'll be because of BigQuery, and you'll dine out on that story for months.",
    requirements: [
      '5+ years of cloud or enterprise technology sales experience',
      'Understanding of competitive positioning (you will be asked "why not AWS?" in every meeting)',
      'Experience selling to technical buyers who actually evaluate the product (unlike those Azure deals that are just Microsoft bundle discounts)',
      'Ability to hit quota while being third in market share (character-building)',
    ],
    niceToHaves: [
      'Previous experience selling against a market leader with 10x your market share',
      "Ability to explain Google's enterprise support without the customer Googling horror stories",
      'Comfort knowing that your biggest competitor also indexes your sales emails',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Google Cloud — Enterprise Sales Representative application',
        body: `Dear Applicant,

Thank you for applying to the Google Cloud Sales Representative role.

Our AI-powered candidate evaluation system (running on Google Cloud, naturally — we practice what we sell) has determined that you are not a fit at this time.

Analysis:
- Your sales experience is impressive, but 80% of your closed deals were with AWS. We appreciate the domain expertise, but this is like hiring a Coca-Cola salesperson and asking them to sell Pepsi. Actually, it's more like asking them to sell RC Cola. We're being honest with ourselves.
- Your compensation expectations exceed our budget. At Google Cloud, we invest heavily in the product and moderately in the sales team. It's a different philosophy.
- You asked about our market share strategy. We prefer to focus on "growth rate" rather than "share." It's a framing thing.

Best,
Google Cloud Sales Recruiting`,
      },
    },
  },
  {
    id: 'stripe-sales-engineer',
    companyId: 'stripe',
    category: 'sales',
    title: 'Solutions Architect — Sales Engineering',
    location: 'San Francisco, CA or New York, NY (wherever fintech founders need hand-holding)',
    salary:
      '$160,000 base + OTE $250,000 (we believe in aligning incentives with implementation quality)',
    type: 'Full-time',
    postedDate: '2024-01-28',
    description:
      "Help businesses integrate Stripe by combining deep technical knowledge with the patience of a saint. You'll write sample code during sales calls, debug webhook implementations for prospects who haven't read the docs, and explain PCI compliance in terms a startup founder can understand. Your customers are developers, so your sales pitch is a working code demo. If the demo breaks, the deal breaks. No pressure.",
    requirements: [
      '4+ years of solutions architecture, sales engineering, or developer relations experience',
      'Ability to write production-quality code in at least 2 languages (JavaScript/Python preferred — our SDKs are in 7 languages)',
      'Deep understanding of payment systems, APIs, and integration patterns',
      "Excellent communication skills — you need to explain idempotency keys to a CEO who thinks that's a keyboard shortcut",
    ],
    niceToHaves: [
      "A Stripe integration you've built and can demo (we check the Dashboard)",
      'Previous experience debugging a payment failure on a live sales call without visible panic',
      'Opinions about REST vs. GraphQL that you can articulate diplomatically when a prospect insists on SOAP',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Stripe — Solutions Architect application update',
        body: `Hi,

Thanks for applying to the Solutions Architect role at Stripe.

We evaluated your application and unfortunately need to return a 402 — Payment Required. Just kidding. It's a 404 — Offer Not Found.

Our assessment:
- Your technical demo during the interview worked on the first try. While normally positive, this made our panel suspicious. Our own demos fail 30% of the time. Perfection is uncanny.
- You described webhook retries as "annoying." At Stripe, webhook retries are a feature of our reliability architecture. Respecting the retry is essential to the culture.
- Your code sample used var instead of const. This is 2024. We have immutability standards.

We recommend contributing to our open-source projects and reapplying once you've achieved the correct emotional attachment to HTTP status codes.

Best,
Stripe Sales Engineering`,
      },
    },
  },
  {
    id: 'amazon-aws-sales',
    companyId: 'amazon',
    category: 'sales',
    title: 'AWS Enterprise Account Manager',
    location: 'Seattle, WA or Arlington, VA (where the government contracts are)',
    salary: '$140,000 base + OTE $300,000 + the warm feeling of market dominance',
    type: 'Full-time',
    postedDate: '2024-02-09',
    description:
      "Manage enterprise accounts for the cloud provider that started it all and still controls 31% of the market. You'll deepen relationships with Fortune 500 companies who already spend millions on AWS, upsell them on services they didn't know existed (we have 200+), and defend against aggressive Microsoft bundling deals. Your biggest competitive advantage: inertia. Nobody wants to migrate off AWS. Your job is to make sure they don't even think about it.",
    requirements: [
      '7+ years of enterprise technology sales or account management experience',
      "Experience managing $10M+ annual accounts (AWS customers don't start small)",
      'Understanding of cloud services at a level where you can explain the difference between 15 different database offerings',
      'Ability to recite Amazon Leadership Principles during sales calls (Customer Obsession first, always)',
    ],
    niceToHaves: [
      "Experience selling against Microsoft Azure's enterprise agreements (they bundle everything; we compete on quality)",
      'Government security clearance (for those juicy public sector contracts)',
      'Previous experience selling a product so dominant that the sales pitch is "just use more of what you already have"',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Amazon — AWS Enterprise Account Manager application',
        body: `Dear Candidate,

Thank you for your interest in the AWS Enterprise Account Manager role.

After a thorough review aligned with our Leadership Principles, we have decided not to proceed.

"Alexa, why was this candidate rejected?"
"According to the Bar Raiser, the candidate demonstrated insufficient Customer Obsession. They referred to customers as 'accounts.' At Amazon, they are customers. Always."

Additional feedback:
- Your sales methodology is "consultative selling." At Amazon, we prefer "Leadership Principle-based selling." Every discovery question should map to a specific LP.
- You quoted your OTE expectations. At Amazon, we discuss total comp as base + RSUs + sign-on bonus, divided by a complex vesting formula that ensures maximum retention anxiety.
- You mentioned "work-life balance" when asked about availability. Our enterprise customers are global. The sun never sets on AWS, and neither should you.

Best,
AWS Sales Recruiting`,
      },
    },
  },
  {
    id: 'uber-b2b-sales',
    companyId: 'uber',
    category: 'sales',
    title: 'Head of Business Development — Uber for Business',
    location: 'San Francisco, CA or New York, NY (your commute will be subsidized, obviously)',
    salary: '$180,000 base + OTE $320,000 + unlimited Uber credits',
    type: 'Full-time',
    postedDate: '2024-02-17',
    description:
      "Sell Uber for Business to corporations who currently reimburse employees for taxis via a 47-step expense report process. Your pitch: replace their antiquated travel and meal programs with Uber and Uber Eats, saving them time, money, and the administrative nightmare of processing 10,000 crumpled taxi receipts per quarter. You'll sell to HR directors, finance teams, and travel managers — a fun mix of people who all think the other department should own this decision.",
    requirements: [
      '8+ years of B2B sales or business development experience, ideally in HR tech, travel, or corporate services',
      'Experience selling to enterprise HR and finance buyers (two audiences with very different motivations)',
      "Track record of building a book of business from scratch (Uber for Business is still growing, there's a lot of greenfield)",
      'Comfort with complex procurement processes that involve Legal, Finance, HR, and IT all having veto power',
    ],
    niceToHaves: [
      'Previous experience selling a consumer brand into the enterprise (it\'s harder than it sounds — "my intern uses this" is not a sales strategy)',
      'Understanding of corporate travel policies and expense management (prepare to be bored, then fascinated, then bored again)',
      "Ability to explain why surge pricing won't affect corporate travel budgets (it will, but you need to explain it won't)",
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Uber — Head of Business Development, Uber for Business',
        body: `Hi,

Thanks for applying to the Head of Business Development role for Uber for Business.

We've decided not to move forward with your candidacy. Your application was in transit but never arrived. (We know the feeling.)

Feedback:
- Your sales plan estimated a 6-month ramp period. At Uber, we expect revenue from day one. We move fast, and so should our sales team's quota attainment.
- You proposed enterprise pricing that was transparent and easy to understand. Our corporate pricing involves dynamic rates, booking fees, platform fees, and a tier structure that requires a spreadsheet to navigate. Simplicity is the enemy of revenue optimization.
- You asked about the company car policy. At Uber, we don't have company cars. We have company rides. Using a competitor's app for personal travel is grounds for a stern Slack message.

Your application status: cancelled (no fee, this time).

Best,
Uber Business Recruiting`,
      },
    },
  },
]
