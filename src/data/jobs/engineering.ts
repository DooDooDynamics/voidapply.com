import type { Job } from '@/types'

export const engineeringJobs: Job[] = [
  {
    id: 'google-senior-frontend',
    companyId: 'google',
    category: 'engineering',
    title: 'Senior Frontend Engineer',
    location: 'Remote (must be in office 4 days a week)',
    salary: 'Competitive (we competed to find the lowest possible number)',
    type: 'Full-time',
    postedDate: '2024-01-15',
    description:
      "Join our team to build user interfaces that billions of people will never notice. You'll work on projects that may or may not ship, in a fast-paced environment (we are always on fire). This role offers unlimited PTO (average taken: 3 days/year) and the opportunity to attend meetings about meetings.",
    requirements: [
      '5+ years experience in React (the framework is 11 years old, but we need 15)',
      "Expert knowledge of TypeScript, JavaScript, and at least 3 frameworks we'll deprecate next quarter",
      'PhD in Computer Science preferred (for a job that involves centering divs)',
      "Must be comfortable with ambiguity (we don't know what we're building either)",
      'Ability to thrive in a fast-paced environment (we are always on fire)',
    ],
    niceToHaves: [
      "Experience with our internal tools (which we won't tell you about until day 1)",
      'Published research in a field completely unrelated to this role',
      'Willingness to relocate to any of our 47 offices, possibly simultaneously',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Update on your application for Senior Frontend Engineer at Google',
        body: `Dear Applicant,

Thank you for your interest in the Senior Frontend Engineer position at Google. After careful consideration by our AI-powered screening system (which spent approximately 0.003 seconds reviewing your application), we have decided to move forward with other candidates.

While your qualifications were impressive, we were looking for someone with exactly 15 years of React experience, a PhD in Quantum CSS, and the ability to solve a binary tree on a whiteboard while juggling.

We encourage you to apply again in 6 months, when we'll post the same role with even more unrealistic requirements.

We'll keep your resume on file.*

Best regards,
The Google Talent Team

*File will be deleted in 5... 4... 3...`,
      },
      'ats-score': {
        overallScore: 7,
        categories: [
          {
            name: 'Buzzword Density',
            score: 12,
            comment: 'Did not mention "synergy" or "leverage" once. Deeply concerning.',
          },
          {
            name: 'Years of Experience vs. Technology Age',
            score: 3,
            comment: 'Claims 8 years of React. We need 15. React is 11 years old. Not our problem.',
          },
          {
            name: 'Enthusiasm for Free Snacks',
            score: 0,
            comment: "Failed to mention Google's snack program even once. CRITICAL FAILURE.",
          },
          {
            name: 'Whiteboard Problem Solving',
            score: 5,
            comment: 'Resume did not include a hand-drawn binary tree. Automatic penalty.',
          },
          {
            name: 'Cultural Fit Score',
            score: 15,
            comment: 'Used the word "innovative" but not "Googley." Insufficient brand alignment.',
          },
        ],
      },
    },
  },
  {
    id: 'google-backend-engineer',
    companyId: 'google',
    category: 'engineering',
    title: 'Software Engineer, Backend Systems',
    location: 'Mountain View, CA (Hybrid — but actually full-time in office)',
    salary: "$180,000 - $350,000 (you'll get $180,000)",
    type: 'Full-time',
    postedDate: '2024-02-01',
    description:
      "We're looking for a backend engineer to maintain systems that handle billions of requests per second. You'll be responsible for infrastructure that, if it goes down, takes half the internet with it. No pressure. Your work will be reviewed by a committee of 12 people, most of whom have never written backend code.",
    requirements: [
      "7+ years of experience in distributed systems (we're distributed across 12 time zones, good luck scheduling a meeting)",
      'Fluent in Go, Java, C++, and whatever language we invent next Tuesday',
      "Experience handling systems at Google-scale (if you haven't worked at Google, how would you have this?)",
      'Must pass 6 rounds of interviews, each progressively more soul-crushing',
    ],
    niceToHaves: [
      'Previous experience being on-call at 3 AM on Christmas',
      'Ability to explain to your family what you actually do',
      'Emotional resilience',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Your application to Google — Software Engineer, Backend Systems',
        body: `Hi there,

We appreciate you taking the time to apply for the Software Engineer, Backend Systems role at Google.

After an extensive review process (our ML model processed your resume in 0.0001 seconds — a new personal best), we regret to inform you that we will not be moving forward with your application at this time.

Our hiring committee noted that while your experience was "technically adequate," you failed to demonstrate sufficient passion for our free lunch program during the cover letter analysis phase.

We encourage you to continue developing your skills and to reapply when you've accumulated the 15 years of Kubernetes experience we require (Kubernetes is 10 years old, but we believe in ambitious candidates).

Warm regards,
Google People Operations
(This is an automated message. Please do not reply. We wouldn't read it anyway.)`,
      },
    },
  },
  {
    id: 'amazon-sde2',
    companyId: 'amazon',
    category: 'engineering',
    title: 'Software Development Engineer II',
    location: 'Seattle, WA (Return to Office — Day 1 of 365)',
    salary: 'Competitive base + stock that vests in 4 years (if you survive)',
    type: 'Full-time',
    postedDate: '2024-01-20',
    description:
      "Are you customer-obsessed? Can you think big while also diving deep? Do you have a bias for action and insist on the highest standards while being frugal? If you used all 16 leadership principles in your last sentence, you might be ready for Amazon. You'll build services that process millions of orders, and your on-call rotation will ensure you never sleep through the night again.",
    requirements: [
      "3+ years of experience (but we'll interview you like you need 10)",
      'Must be able to recite all 16 Amazon Leadership Principles from memory',
      'Experience writing 6-page documents instead of PowerPoints',
      'Willingness to debate whether a door-desk is actually ergonomic',
      'Comfort with being PIPed for taking a lunch break',
    ],
    niceToHaves: [
      'Previous warehouse experience (for team-building exercises)',
      'Ability to say "it\'s Day 1" with a straight face',
      "Own an Alexa device (we're watching... listening)",
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Regarding your application — Software Development Engineer II at Amazon',
        body: `Dear Candidate,

Thank you for your interest in Amazon and the SDE II position. We are writing to let you know that after careful review, we have decided not to move forward with your application.

During our assessment, we noticed that your response to the Leadership Principles portion was missing references to at least 9 of our 16 Leadership Principles. At Amazon, we expect candidates to naturally weave all 16 principles into every sentence, including their breakfast order.

Additionally, our system flagged that you took more than 2 minutes to complete our 45-minute coding assessment, suggesting a lack of Bias for Action.

We wish you the best in your future endeavors and encourage you to apply again after you've read "Working Backwards" at least 7 times.

Best,
Amazon Talent Acquisition
(Remember: it's always Day 1. Except for your application. That's done.)`,
      },
      'ats-score': {
        overallScore: 4,
        categories: [
          {
            name: 'Leadership Principle Alignment',
            score: 8,
            comment:
              'Only referenced 3 of 16 Leadership Principles. Did not even mention "Frugality" — ironically, very frugal with LP references.',
          },
          {
            name: 'Door-Desk Enthusiasm',
            score: 0,
            comment:
              'Zero mentions of door-desks. Candidate may expect actual furniture. Red flag.',
          },
          {
            name: 'Bias for Action Score',
            score: 2,
            comment:
              'Took 3 days to submit application. Jeff would have launched a new product in that time.',
          },
          {
            name: 'Customer Obsession',
            score: 12,
            comment:
              'Used the word "user" instead of "customer." We don\'t have users. We have customers. Devastating error.',
          },
          {
            name: 'Day 1 Mentality',
            score: 5,
            comment: 'Resume mentions "years of experience." That\'s Day 2 thinking.',
          },
        ],
      },
    },
  },
  {
    id: 'meta-frontend-engineer',
    companyId: 'meta',
    category: 'engineering',
    title: 'Frontend Engineer — Reality Labs',
    location: 'Menlo Park, CA (in-office, but you can attend meetings in the metaverse)',
    salary: '$170,000 - $320,000 + RSUs (restricted sadness units)',
    type: 'Full-time',
    postedDate: '2024-02-15',
    description:
      "Build immersive user experiences for a virtual world that 12 people use daily. You'll work on cutting-edge React applications (we invented React, so we get to say that) for products that will pivot directions at least 3 times during your onboarding. Your primary metric is engagement — specifically, how long you can stay engaged before burnout.",
    requirements: [
      '5+ years of frontend development experience with React (bonus if you knew it before we open-sourced it)',
      "Deep understanding of WebGL, WebXR, and other technologies you'll never actually use",
      'Experience building for scale — our apps need to handle billions of users who stopped opening them in 2021',
      'Ability to explain why the metaverse is the future at dinner parties without anyone leaving the table',
    ],
    niceToHaves: [
      'Prior experience rebranding yourself from something people liked to something nobody asked for',
      'Comfort with org restructures every 6-8 weeks',
      'Owns a Quest headset (and has used it more than once)',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Your application to Meta — Frontend Engineer, Reality Labs',
        body: `Hi there,

Thanks for applying to the Frontend Engineer position at Meta (formerly Facebook, formerly thefacebook, currently undergoing another identity crisis).

After reviewing your application, we've decided to move forward with other candidates who demonstrated stronger alignment with our company vision. Specifically, you failed to express sufficient excitement about the metaverse in your application materials.

Our AI reviewer also flagged that you listed "Instagram" and "WhatsApp" as Meta products you admire. While technically correct, we're trying to focus on the metaverse right now. Please respect the rebrand.

We encourage you to reapply after spending at least 40 hours in Horizon Worlds.

Best,
Meta Talent Team
(This message was composed in the metaverse. Just kidding. Outlook.)`,
      },
    },
  },
  {
    id: 'microsoft-software-engineer',
    companyId: 'microsoft',
    category: 'engineering',
    title: 'Software Engineer II — Azure Cloud Platform',
    location: 'Redmond, WA (Hybrid — 3 days in office, 2 days in Teams meetings from home)',
    salary: '$145,000 - $280,000 + stock that actually vests reasonably',
    type: 'Full-time',
    postedDate: '2024-01-25',
    description:
      "Join the Azure team to build cloud infrastructure that competes with AWS (we're number two and we try harder). You'll spend 40% of your time coding, 40% in Teams meetings, and 20% explaining to customers why Azure is down. This role offers the unique opportunity to maintain backward compatibility with software written in 1997.",
    requirements: [
      '3+ years of experience in C#, .NET, or whatever stack we acquired this quarter',
      'Ability to navigate a codebase older than most junior engineers',
      'Experience with cloud platforms (Azure preferred, but we know you used AWS)',
      'Must be comfortable with a stack ranking system that technically no longer exists (but spiritually persists)',
    ],
    niceToHaves: [
      'Fond memories of Clippy',
      'Can name at least 3 Microsoft products that were ahead of their time (RIP Zune)',
      'Willingness to attend a mandatory fun event at least once per quarter',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Update on your application — Software Engineer II, Azure at Microsoft',
        body: `Dear Candidate,

Thank you for your interest in the Software Engineer II position on the Azure Cloud Platform team at Microsoft.

After careful consideration, we have decided not to proceed with your application at this time. Our evaluation highlighted the following areas of concern:

1. Your resume was submitted in Google Docs format. This demonstrated a fundamental misalignment with our core values.
2. You mentioned "cloud experience" but specifically referenced AWS 14 times and Azure 0 times.
3. Your GitHub profile shows no contributions to any Microsoft open-source projects, which we interpret as a personal slight.

We encourage you to reapply once you've migrated your entire digital life to the Microsoft ecosystem.

Best regards,
Microsoft Talent Acquisition
(Sent from Outlook. Obviously.)`,
      },
      'ats-score': {
        overallScore: 11,
        categories: [
          {
            name: 'Microsoft Ecosystem Loyalty',
            score: 2,
            comment:
              'Candidate uses Chrome as their default browser. This is a fireable offense, let alone a hiring disqualifier.',
          },
          {
            name: 'Teams Enthusiasm',
            score: 6,
            comment:
              'No mention of Microsoft Teams in "tools I love" section. Candidate may prefer Slack. Unacceptable.',
          },
          {
            name: 'Growth Mindset',
            score: 18,
            comment:
              'Used the phrase "growth mindset" in cover letter. Extra points. Satya would be proud.',
          },
          {
            name: 'LinkedIn Optimization',
            score: 8,
            comment:
              'LinkedIn profile exists but has fewer than 500 connections. Networking score: amateur.',
          },
        ],
      },
    },
  },
  {
    id: 'netflix-senior-engineer',
    companyId: 'netflix',
    category: 'engineering',
    title: 'Senior Software Engineer — Streaming Platform',
    location:
      'Los Gatos, CA (Remote OK — we trust you, but we also have a culture of radical candor)',
    salary: '$250,000 - $450,000 (top of market, because we only hire "stunning colleagues")',
    type: 'Full-time',
    postedDate: '2024-02-20',
    description:
      "We're looking for a stunning colleague to join our streaming platform team. At Netflix, we operate like a professional sports team — we only keep the best players, and everyone else gets a generous severance package. You'll build systems that deliver content to 260 million subscribers, and your performance will be evaluated with radical candor (read: public Slack feedback).",
    requirements: [
      '8+ years of software engineering experience (we only hire seniors and above, interns are a myth)',
      'Expert-level Java, Python, or Go — ideally all three, because stunning colleagues know everything',
      'Experience with microservices at massive scale (if your system has served fewer than 1 billion requests, is it even a system?)',
      'Comfort with the Netflix culture deck (all 125 slides — there will be a quiz)',
    ],
    niceToHaves: [
      'Previous experience being "freed up to find a company more aligned with your skills" (Netflix-speak for fired)',
      'Ability to give and receive feedback that would make a therapist wince',
      'A Netflix subscription (we check, and we judge your watch history)',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'An update on your application — Senior Software Engineer at Netflix',
        body: `Hi,

Thank you for your interest in the Senior Software Engineer role at Netflix.

After our team reviewed your application through the lens of our culture values, we've determined that you are not a "stunning colleague" fit at this time.

Specifically, we practiced radical candor with your resume and determined the following:
- Your GitHub contribution graph had several gray squares. At Netflix, we expect a continuous shade of green. Rest days are for adequate performers.
- You described yourself as a "team player." At Netflix, we're a team of individual superstars. Think less "soccer" and more "professional wrestling."

We're providing you with this candid feedback because we believe in radical transparency. We also believe in generous severance, but you'd need to work here first for that.

With radical candor,
Netflix Talent Team`,
      },
    },
  },
  {
    id: 'tesla-embedded-engineer',
    companyId: 'tesla',
    category: 'engineering',
    title: 'Embedded Software Engineer — Autopilot',
    location: 'Palo Alto, CA (in-office 6 days a week, 7 during crunch — which is always)',
    salary: '$140,000 - $260,000 + stock (vesting schedule assumes you survive the burnout)',
    type: 'Full-time',
    postedDate: '2024-02-05',
    description:
      "Join the Autopilot team to write software that drives cars while humans watch Netflix behind the wheel. You'll work on real-time systems where bugs have slightly higher consequences than a 404 page. This is a high-intensity role — our CEO may tweet about your feature before you've finished writing it, and the deadline was yesterday. First principles thinking required; sleep is optional.",
    requirements: [
      '5+ years of embedded systems experience in C/C++ (Rust is acceptable but we will make fun of you)',
      'Real-time operating systems expertise (your code needs to run faster than our stock price fluctuates)',
      'Experience with computer vision, sensor fusion, or convincing regulators that the car is safe',
      'Must be willing to work "Tesla hours" (all of them)',
    ],
    niceToHaves: [
      'Previous experience sleeping at the office (we have sleeping bags, not beds — first principles)',
      'Ability to read and interpret tweets from the CEO as product requirements',
      'No emotional attachment to work-life balance',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Your application — Embedded Software Engineer, Autopilot at Tesla',
        body: `Hi,

Thanks for applying to the Embedded Software Engineer role on the Autopilot team at Tesla.

After reviewing your application using first principles thinking, we've decided not to move forward. Here's our reasoning:

First principle: The best engineers are those who are willing to sleep at the factory. Your resume mentions "hobbies" and "work-life balance," which suggests you occasionally leave buildings. This is incompatible with our culture.

Additionally, you listed 8 hours of sleep as a daily activity. Our CEO has publicly stated that 6 hours is the maximum for productive humans. You are 33% over budget on sleep.

We encourage you to reapply after you've eliminated at least 2 non-essential life activities.

Regards,
Tesla Recruiting
(Sent at 2:47 AM, because that's when we work)`,
      },
    },
  },
  {
    id: 'stripe-backend-engineer',
    companyId: 'stripe',
    category: 'engineering',
    title: 'Backend Engineer — Payments Infrastructure',
    location: 'San Francisco, CA or Remote (we wrote the book on remote work, then recalled it)',
    salary:
      '$190,000 - $340,000 (we process $1 trillion annually but negotiation is still painful)',
    type: 'Full-time',
    postedDate: '2024-01-30',
    description:
      "Build the financial infrastructure that powers the internet economy. Every line of code you write will move real money — and every bug will move it to the wrong place. You'll join a team that treats API design like fine art and code review like a blood sport. Our engineering blog posts are longer than most PhD theses, and yes, you will be expected to contribute.",
    requirements: [
      '4+ years building distributed systems (bonus if money was involved and none of it went missing)',
      'Strong experience with Ruby, Go, or Java — ideally with opinions about all three that you can defend in a doc review',
      'Understanding of payment systems, financial regulations, and why moving money is harder than it sounds',
      'Ability to write a 3,000-word design document about a 30-line code change',
    ],
    niceToHaves: [
      "Previous experience at a company where 'moving fast and breaking things' had financial consequences",
      'A personal blog with at least one post that went viral on Hacker News',
      'Strong opinions about API versioning (weak opinions need not apply)',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Stripe — Backend Engineer, Payments Infrastructure application update',
        body: `Hi,

Thank you for applying to the Backend Engineer role at Stripe.

We reviewed your application and, while your technical skills are strong, we've decided not to proceed. Our feedback:

Your take-home assignment processed payments correctly 99.97% of the time. At Stripe, we handle trillions of dollars — that 0.03% failure rate would translate to roughly $300 million in misrouted funds. We need at least four more nines.

Additionally, your API design used inconsistent casing between snake_case and camelCase. Our style guide is 47 pages long, and we expected you to have somehow read it before applying.

We wish you the best in your future infrastructure endeavors.

Best,
Stripe Engineering Recruiting`,
      },
      'ats-score': {
        overallScore: 14,
        categories: [
          {
            name: 'API Design Sensibility',
            score: 9,
            comment:
              'Candidate used REST when we clearly wanted to discuss gRPC. But at least they had opinions.',
          },
          {
            name: 'Documentation Quality',
            score: 18,
            comment:
              'Cover letter was well-structured. Would make a decent engineering blog post. High praise.',
          },
          {
            name: 'Financial Precision',
            score: 4,
            comment:
              'Rounded a currency value to 2 decimal places in their code sample. We use 8. Amateur hour.',
          },
          {
            name: 'Hacker News Clout',
            score: 12,
            comment:
              "Candidate has 3 HN front-page posts. Impressive, but one was about Rust, and we're a Ruby shop (for now).",
          },
        ],
      },
    },
  },
]
