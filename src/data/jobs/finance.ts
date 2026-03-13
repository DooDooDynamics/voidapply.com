import type { Job } from '@/types'

export const financeJobs: Job[] = [
  {
    id: 'goldman-sachs-investment-banking-analyst',
    companyId: 'goldman-sachs',
    category: 'finance',
    title: 'Investment Banking Analyst',
    location: 'New York, NY (200 West Street — your new home, literally)',
    salary: '$110,000 base + bonus that depends on how many weekends you sacrifice',
    type: 'Full-time',
    postedDate: '2024-01-12',
    description:
      "Join Goldman Sachs as an Investment Banking Analyst, where you'll build financial models from 9 AM to 3 AM, attend client calls you're not allowed to speak on, and format pitch decks until the pixels blur. Your primary tools are Excel, PowerPoint, and caffeine. Your primary emotions are stress, more stress, and the brief joy of a completed deal before the next one starts. Prestige is the compensation you can't deposit.",
    requirements: [
      "Bachelor's degree from a target school (if you have to ask what a target school is, yours isn't one)",
      'Expert-level Excel and PowerPoint skills (you should dream in VLOOKUP)',
      'Ability to work 80-100 hour weeks while maintaining a professional appearance',
      'Strong attention to detail — a misplaced decimal in a $2 billion deal is not a rounding error',
      'Must be available 24/7, including holidays, birthdays, and your own wedding',
    ],
    niceToHaves: [
      'Previous internship at a bulge bracket bank (the unpaid kind builds character)',
      'Ability to function on 4 hours of sleep for consecutive months',
      'A support system that understands you will not be available for the next 2 years',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Goldman Sachs — Investment Banking Analyst application',
        body: `Dear Candidate,

Thank you for your interest in the Investment Banking Analyst position at Goldman Sachs.

After a rigorous evaluation process that mirrors the intensity of the role itself, we have decided not to extend an offer at this time.

Our screening committee noted the following:
- Your university is not on our target school list. We checked twice. Once at 2 AM, which is when we make most decisions.
- Your financial modeling test contained a circular reference. In banking, circular references belong in deal structures, not spreadsheets.
- You listed "work-life balance" as a career priority. We had to Google this term. We are still unclear on what it means.

We encourage you to gain 2-3 years of experience at a lesser bank and reapply.

Regards,
Goldman Sachs Campus Recruiting
(This email was sent at 11:47 PM on a Sunday, which should tell you everything about the role.)`,
      },
      'ats-score': {
        overallScore: 6,
        categories: [
          {
            name: 'Target School Index',
            score: 3,
            comment:
              'Attended a perfectly good university that is not on our arbitrary list of 15 schools. Fatal.',
          },
          {
            name: 'Excel Proficiency',
            score: 12,
            comment: 'Mentioned Excel but not Bloomberg Terminal. Do they even finance?',
          },
          {
            name: 'Prestige Tolerance',
            score: 8,
            comment:
              'Cover letter did not mention Goldman Sachs by name at least 7 times. Insufficient brand worship.',
          },
          {
            name: 'Sleep Deprivation Readiness',
            score: 4,
            comment:
              'Resume mentions "hobbies." Analysts at Goldman Sachs do not have hobbies. They have Excel shortcuts.',
          },
        ],
      },
    },
  },
  {
    id: 'stripe-financial-analyst',
    companyId: 'stripe',
    category: 'finance',
    title: 'Senior Financial Analyst — Revenue Operations',
    location: 'San Francisco, CA or Remote (our money moves globally, so should you)',
    salary: '$150,000 - $240,000 (we process trillions but budget approval still takes 3 weeks)',
    type: 'Full-time',
    postedDate: '2024-02-13',
    description:
      "Analyze revenue streams for a company that processes $1 trillion annually but still debates whether to buy a second coffee machine. You'll build financial models, forecast growth across 40+ countries, and explain to engineering why their project can't have infinite budget. This role sits at the intersection of finance and technology — you'll need to speak both spreadsheet and code.",
    requirements: [
      '5+ years of financial analysis or FP&A experience, ideally in high-growth tech',
      'Advanced Excel/Google Sheets skills (pivot tables are your love language)',
      "Experience with SQL — you'll need to pull your own data because the data team has a 6-week backlog",
      "Understanding of SaaS metrics (ARR, NDR, LTV:CAC, and other acronyms that determine your company's valuation)",
    ],
    niceToHaves: [
      'Previous experience at a company where "growth at all costs" pivoted to "actually, what are the costs?"',
      'Ability to build a financial model that survives a board meeting without catching fire',
      'Comfort telling engineers their project has negative ROI (and living to tell the tale)',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Stripe — Senior Financial Analyst application update',
        body: `Hi,

Thanks for applying to the Senior Financial Analyst role at Stripe.

We've reviewed your application and, after running the numbers (which is sort of our whole thing), decided not to proceed.

Our analysis:
- NPV of hiring you: negative (using a 12% discount rate, which is generous)
- Your financial model had a hardcoded assumption on row 47. At Stripe, all assumptions must be dynamic, documented, and defensible in a 30-minute review.
- You used VLOOKUP instead of INDEX-MATCH. This is 2024. We have standards.

We recommend optimizing your resume's unit economics before reapplying.

Best,
Stripe Finance Recruiting`,
      },
    },
  },
  {
    id: 'amazon-finance-manager',
    companyId: 'amazon',
    category: 'finance',
    title: 'Finance Manager — AWS',
    location: 'Seattle, WA (in-office — frugality applies to remote work, not to office space)',
    salary:
      '$130,000 - $220,000 + RSUs (vesting schedule designed by someone who hates instant gratification)',
    type: 'Full-time',
    postedDate: '2024-01-22',
    description:
      "Own the financial planning for AWS, which generates more revenue than most countries' GDP. You'll partner with engineering leaders to justify why their team needs 200 more headcount, build models that forecast cloud consumption across every industry, and prepare variance analyses that explain why we're $400M off plan (it's always a timing issue). At Amazon, finance is a leadership function — you'll need to cite Leadership Principles in your budget reviews.",
    requirements: [
      '6+ years of finance experience, with at least 2 in tech or cloud services',
      'MBA or CPA preferred (we need people who can suffer through credentials)',
      'Expert financial modeling skills — your models will be reviewed by people who have opinions about cell formatting',
      'Experience with large-scale P&L management ($1B+ revenue segments)',
      'Fluency in all 16 Amazon Leadership Principles (Frugality is your new personality)',
    ],
    niceToHaves: [
      'Previous experience saying "no" to a VP and surviving (at Amazon, this is a leadership principle in itself)',
      'Comfort with the phrase "the numbers don\'t lie, but they also don\'t explain themselves"',
      'Ability to justify a $2 million project using a $0 marketing budget',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Amazon — Finance Manager, AWS application',
        body: `Dear Candidate,

Thank you for your interest in the Finance Manager role at AWS.

After a thorough review aligned with our Leadership Principles, we have decided not to move forward.

Our Bar Raiser provided the following feedback:
- Your financial model was built in Excel. At Amazon, we use internal tools that are worse but proprietary.
- You projected 15% YoY growth for AWS. Our actual growth rate is classified, but we can confirm your number was wrong.
- When asked about Frugality, you mentioned "cost optimization." The correct answer was "door-desks." It's always door-desks.

Your application had strong Bias for Action (submitted within the deadline) but weak Insist on the Highest Standards (two typos in the cover letter).

Best,
Amazon Finance Recruiting`,
      },
    },
  },
  {
    id: 'google-corporate-finance',
    companyId: 'google',
    category: 'finance',
    title: 'Corporate Finance Lead — Alphabet Bets',
    location:
      "Mountain View, CA (in Alphabet HQ, not the main Google campus — yes, there's a difference)",
    salary: '$180,000 - $310,000 + stock in a company that prints money',
    type: 'Full-time',
    postedDate: '2024-02-20',
    description:
      "Lead financial analysis for Alphabet's 'Other Bets' — the division where moonshot projects go to burn cash beautifully. You'll build financial models for self-driving cars, life-extension research, and internet-beaming balloons, none of which are expected to be profitable this decade. Your job is to make $5 billion in annual losses look like 'strategic investment in the future.' Quarterly earnings calls will test your ability to present red numbers with green enthusiasm.",
    requirements: [
      '8+ years of corporate finance or investment experience',
      "Experience with long-horizon financial modeling (some of these bets won't pay off until 2040, and we need numbers for all of it)",
      'Comfort presenting to C-suite executives who will ask "but when does this make money?" (the answer is always "soon")',
      'Strong analytical skills and a creative relationship with the concept of ROI',
    ],
    niceToHaves: [
      'Previous experience at a company that spent billions on projects that got canceled',
      "Ability to value a company whose product doesn't exist yet (and may never exist)",
      'Familiarity with the phrase "we\'re investing in the future" as a financial strategy',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Alphabet — Corporate Finance Lead, Other Bets application',
        body: `Dear Applicant,

Thank you for applying to the Corporate Finance Lead position at Alphabet.

After reviewing your application with the same rigor we apply to our moonshot investments (which is to say, with optimism and limited financial justification), we've decided not to proceed.

Our concerns:
- Your DCF model used a 10-year projection. Our Other Bets division requires 30-year projections minimum. If your model doesn't extend to 2054, it's not ambitious enough.
- You valued Waymo using traditional automotive industry comparables. We prefer to be valued as "priceless" or "the future."
- You asked about profitability timelines. At Other Bets, we consider profitability a horizon event — always approaching, never arriving.

Best,
Alphabet Finance Recruiting`,
      },
    },
  },
  {
    id: 'uber-financial-planning',
    companyId: 'uber',
    category: 'finance',
    title: 'Senior Manager, Financial Planning & Analysis',
    location:
      'San Francisco, CA (in-office, the commute will help you understand our core business)',
    salary: '$170,000 - $280,000 + equity + Uber credits (for the commute we just mentioned)',
    type: 'Full-time',
    postedDate: '2024-02-01',
    description:
      "Own financial planning for a company that took 14 years to become profitable and would very much like to stay that way. You'll forecast ride volumes, delivery demand, and driver supply across 70+ countries, build models that explain why profitability is always one quarter away, and prepare board materials that make our unit economics look intentional. Your greatest challenge: explaining to investors why we're both a ride-hailing company, a delivery company, a freight company, and an advertising company.",
    requirements: [
      '7+ years of FP&A experience, ideally in marketplace or multi-sided platform businesses',
      'Experience modeling complex unit economics (our take rate calculation requires its own spreadsheet)',
      "Strong business partnering skills — you'll need to tell operators their market isn't profitable without them storming out",
      'MBA or CFA preferred (letters after your name help when presenting to the board)',
    ],
    niceToHaves: [
      'Previous experience at a company that "disrupted" an industry and then had to figure out how to make money',
      'Comfort with the word "adjusted" in front of every financial metric (Adjusted EBITDA, Adjusted Revenue, Adjusted Expectations)',
      'Understanding of why "gross bookings" and "revenue" are very different numbers at Uber',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Uber — Senior Manager, FP&A application update',
        body: `Hi,

Thanks for applying to the Senior Manager, FP&A role at Uber.

Your application has been reviewed, and we've decided not to move forward. Here's a breakdown of the fees — sorry, the feedback:

- Your financial model assumed linear growth. At Uber, growth is nonlinear, unpredictable, and heavily weather-dependent.
- You valued our food delivery business using restaurant industry multiples. We prefer "tech company multiples," which are higher for reasons no one can fully explain.
- During the case study, you asked "what's the path to profitability?" We've been asking that for 14 years. Welcome to the club, but from the outside.

Application processing fee: $0.00
Convenience fee: $2.99
Review surcharge: $1.49
Total: $4.48

Best,
Uber Finance Recruiting`,
      },
    },
  },
  {
    id: 'tesla-financial-controller',
    companyId: 'tesla',
    category: 'finance',
    title: 'Financial Controller — Gigafactory Operations',
    location:
      'Austin, TX (in the Gigafactory — hard hat and steel-toed boots required for finance meetings)',
    salary: '$145,000 - $240,000 + stock (which moves based on tweets more than earnings)',
    type: 'Full-time',
    postedDate: '2024-01-28',
    description:
      "Manage financial controls and reporting for Gigafactory operations, where the line between 'aggressive accounting' and 'first principles thinking' is thinner than you'd like. You'll close the books monthly for a manufacturing operation that changes production targets weekly, reconcile inventory for a factory that runs 24/7, and explain quarterly variances caused by decisions made via tweet. The SEC filings are your responsibility; the CEO's tweets are not. Good luck with that boundary.",
    requirements: [
      '6+ years of financial controlling or accounting experience in manufacturing or automotive',
      'CPA required (we need someone the auditors will trust)',
      'Experience with ERP systems (SAP preferred, though ours has been customized beyond recognition)',
      'Strong understanding of cost accounting, inventory management, and the creative interpretation of GAAP',
      'Ability to work in a factory environment (the finance office is on the production floor, first principles)',
    ],
    niceToHaves: [
      'Previous experience in an organization where the stock price has no correlation to quarterly earnings',
      'Crisis management skills (useful when production targets change mid-quarter)',
      'Familiarity with SEC correspondence (we receive letters. Frequently.)',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Tesla — Financial Controller, Gigafactory Operations application',
        body: `Hi,

Thanks for applying to the Financial Controller role at Tesla Gigafactory.

Using first principles analysis, we've broken down your candidacy into fundamental components:

1. Accounting knowledge: adequate
2. Manufacturing experience: present
3. Ability to survive in a Tesla work environment: unproven

Our assessment team was particularly concerned that your resume mentions "standard working hours." At the Gigafactory, the factory runs 24/7, and so does finance. We close the books when the books are done, not when the clock says 5 PM.

Additionally, you listed "risk-averse" as a professional trait. At Tesla, we view risk as a feature, not a bug. Our entire financial strategy is built on first principles, not precedent. If you need precedent to feel comfortable, this is not the role.

Regards,
Tesla Finance Recruiting
(Sent at 4:12 AM from the Gigafactory floor)`,
      },
    },
  },
]
