import type { Job } from '@/types'

export const managementJobs: Job[] = [
  {
    id: 'google-engineering-manager',
    companyId: 'google',
    category: 'management',
    title: 'Engineering Manager — Google Search',
    location: 'Mountain View, CA (Hybrid — but your calendar doesn\'t know what "hybrid" means)',
    salary:
      '$220,000 - $400,000 + stock + the crushing weight of managing people who are smarter than you',
    type: 'Full-time',
    postedDate: '2024-02-05',
    description:
      "Manage a team of 12-15 engineers who all think they could do your job better. You'll spend your days in 1:1s, calibration meetings, and performance reviews, while somehow also being expected to 'stay technical.' Your code contributions will drop to zero, but you'll be asked to approve PRs you don't have time to read. Success is measured by your team's output, your team's happiness, and your ability to shield them from the 47 strategy pivots happening above you.",
    requirements: [
      '8+ years of software engineering experience with 3+ years managing engineering teams',
      'Experience leading teams at a large tech company (managing 3 interns at a startup does not count)',
      'Proven ability to hire, develop, and retain top talent (and write performance reviews that say nothing in 500 words)',
      'Technical depth sufficient to earn the respect of your reports (they will test you)',
      'Comfort with the realization that your most productive days are now unblocking other people',
    ],
    niceToHaves: [
      'Previous experience managing a team through a reorg (ideally multiple reorgs)',
      "Ability to give constructive feedback that doesn't make someone update their LinkedIn",
      'Therapy (you will need it; we do not pay for it — actually, we might, check the benefits page)',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Google — Engineering Manager, Search application update',
        body: `Dear Candidate,

Thank you for your interest in the Engineering Manager role on Google Search.

Our hiring committee reviewed your application through our rigorous consensus-based process (5 interviewers must unanimously agree, which statistically ensures we reject everyone). We've decided not to proceed.

Feedback from your packet:
- You described your management style as "servant leadership." At Google, we practice "committee leadership," where every decision requires 4 approvals and a design doc.
- Your team retention rate was 92%. Impressive, but our hiring committee wondered if your team just couldn't find better jobs. (We're kidding. Mostly.)
- You mentioned "protecting the team from distractions." At Google, the distractions ARE the strategy. We can't have a manager who filters them out.

Best,
Google Engineering Leadership Recruiting`,
      },
    },
  },
  {
    id: 'amazon-senior-manager',
    companyId: 'amazon',
    category: 'management',
    title: 'Senior Manager, Software Development — Retail',
    location:
      "Seattle, WA (in-office 5 days — RTO is not a suggestion, it's a Leadership Principle)",
    salary:
      "$200,000 - $350,000 + RSUs (with Amazon's iconic 5/15/40/40 vesting — patience is a virtue)",
    type: 'Full-time',
    postedDate: '2024-01-14',
    description:
      "Lead multiple engineering teams building the technology behind Amazon.com — the website that lets people buy 47 items at 3 AM and have them arrive by lunch. You'll own org-level roadmaps, hire and develop managers-of-managers, and write operational narratives that would make Hemingway jealous (if Hemingway used the STAR method). Your success is measured by your teams' delivery velocity, your operational metrics, and how many Leadership Principles you can cite per minute.",
    requirements: [
      '10+ years of engineering experience with 5+ years in management, including managing other managers',
      'Track record of delivering complex, large-scale systems at internet scale',
      'Expertise in writing 6-page narrative documents (PowerPoint is banned, and we mean it)',
      "Deep commitment to Amazon's Leadership Principles (you should be able to apply them to ordering lunch)",
      "Experience with annual planning processes that start in August and aren't finalized until January",
    ],
    niceToHaves: [
      'Previous experience managing through a PIP cycle (giving, not receiving — hopefully)',
      'Comfort with the phrase "disagree and commit" being used to override your best judgment',
      'Ability to explain why your team needs 50% more headcount using only Leadership Principle references',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Amazon — Senior Manager, Software Development application',
        body: `Dear Candidate,

Thank you for your interest in the Senior Manager role at Amazon Retail.

After a review process that embodied Insist on the Highest Standards, we have decided not to move forward.

Our Bar Raiser assessment:
- You demonstrated 12 of 16 Leadership Principles. While this exceeds most companies' entire value systems, at Amazon it represents a 25% deficiency.
- Your operational narrative was only 4 pages. A 6-pager is not a suggestion. It's not a guideline. It's not a "rough target." It is six pages.
- When asked about your biggest failure, you described a project that was 2 weeks late. At Amazon, a real failure involves an entire service going down on Prime Day. Your failures aren't ambitious enough.

Remember: it's Day 1. Unless you're applying here. Then it's over.

Best,
Amazon Leadership Recruiting`,
      },
    },
  },
  {
    id: 'meta-director-engineering',
    companyId: 'meta',
    category: 'management',
    title: 'Director of Engineering — AI Infrastructure',
    location: 'Menlo Park, CA (in-office — Mark believes in office culture, this week)',
    salary:
      '$300,000 - $500,000 + massive RSU package (value subject to metaverse-related fluctuations)',
    type: 'Full-time',
    postedDate: '2024-02-18',
    description:
      "Lead the engineering organization building Meta's AI infrastructure — the GPU clusters and ML platforms that power everything from your News Feed to the metaverse that we're still trying to make happen. You'll manage 100+ engineers across multiple teams, navigate reorgs that happen every quarter, and make the case for $2 billion in GPU purchases. Your biggest challenge: building for a company whose strategic direction changes based on what's trending in AI this month.",
    requirements: [
      '12+ years of engineering experience with 6+ years in senior leadership roles',
      'Experience building and managing large engineering organizations (100+ engineers)',
      'Deep technical knowledge of ML infrastructure, distributed systems, and GPU computing',
      'Track record of delivering platform-level infrastructure that multiple product teams depend on',
      'Comfort with organizational ambiguity (your org chart will change 3 times this year)',
    ],
    niceToHaves: [
      'Previous experience leading through a major company layoff while maintaining team morale (specific to Meta? Perhaps.)',
      'Ability to pivot an entire engineering roadmap when the company pivots from metaverse to AI (hypothetically)',
      "Experience managing a budget larger than some countries' GDP for AI compute",
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Meta — Director of Engineering, AI Infrastructure',
        body: `Hi,

Thank you for applying to the Director of Engineering role at Meta.

After our leadership team reviewed your candidacy, we've decided not to proceed. In the spirit of Meta's culture of openness (which exists between reorgs), here's our feedback:

- Your org design proposal assumed stable team structures. At Meta, we reorganize quarterly to keep everyone adaptive. Or confused. Both, really.
- You expressed interest in "long-term platform investment." Our planning horizon is currently set to "whatever AI trend emerged this week."
- You asked about reporting structure. It will change before your start date, during your onboarding, and at least twice before your first performance review. If this concerns you, this is not the right fit.

We wish you stability in your next role. We certainly can't offer it here.

Best,
Meta Engineering Leadership Recruiting`,
      },
    },
  },
  {
    id: 'microsoft-group-pm',
    companyId: 'microsoft',
    category: 'management',
    title: 'Group Product Manager — Microsoft 365',
    location: 'Redmond, WA (Building 34 — where the Office suite lives and the meetings never end)',
    salary: '$230,000 - $380,000 + stock + a Teams background of your choice',
    type: 'Full-time',
    postedDate: '2024-01-25',
    description:
      "Lead a group of product managers responsible for the tools that 400 million people use to write documents, create spreadsheets, and ignore emails. You'll define the product vision for Microsoft 365, which means adding AI features to everything (Copilot for Word, Copilot for Excel, Copilot for Copilot), maintaining backward compatibility with files created in Office '97, and somehow making Teams less annoying. Every feature you ship will be compared to Google Workspace. You will pretend not to notice.",
    requirements: [
      '10+ years of product management experience with 4+ years leading PM teams',
      'Experience with enterprise productivity software (consumer apps are cute, but we sell to CIOs)',
      'Ability to balance innovation with the needs of customers who are still running Office 2013',
      'Track record of shipping AI features that users actually adopt (not just demo well)',
      'Must own strong opinions about document formatting (tabs vs. spaces is for engineers; we debate margins)',
    ],
    niceToHaves: [
      'Experience migrating users from one product to another without them noticing (or rioting)',
      'Ability to explain why Clippy was ahead of its time (Copilot is just Clippy with a PhD)',
      'Comfort presenting to Satya Nadella using only PowerPoint (no Keynote allowed within a 50-mile radius of Redmond)',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Microsoft — Group Product Manager, Microsoft 365 application',
        body: `Dear Candidate,

Thank you for your interest in the Group Product Manager role for Microsoft 365.

After careful review through our growth mindset lens, we've decided not to proceed. Here's our feedback:

- Your product strategy proposal was submitted as a Google Doc. We understand it may have been a test of our commitment to interoperability. We failed the test, and so did you.
- You suggested simplifying the Microsoft 365 pricing tiers. We currently have 14 SKUs, each with different feature sets, and this is by design. Simplicity is for consumer products. We sell complexity to enterprises, and they love it.
- Your AI product vision didn't mention Copilot once. Everything at Microsoft is Copilot now. The word "Copilot" should appear in every sentence, every slide, and ideally every dream.

With a growth mindset,
Microsoft 365 Product Leadership`,
      },
    },
  },
  {
    id: 'netflix-vp-engineering',
    companyId: 'netflix',
    category: 'management',
    title: 'VP of Engineering — Content Delivery',
    location: 'Los Gatos, CA (in-office — stunning colleagues deserve stunning office views)',
    salary: '$400,000 - $650,000 (total comp at top of market, naturally)',
    type: 'Full-time',
    postedDate: '2024-02-25',
    description:
      "Lead the engineering organization responsible for delivering video to 260 million subscribers without buffering. Your CDN serves 15% of global internet traffic — if it goes down, Reddit will know before you do. You'll manage a team of the most talented (and most highly compensated) engineers in the industry, operate under Netflix's unique culture of freedom and responsibility, and make decisions that affect everyone's Friday night. The keeper test applies to VPs too.",
    requirements: [
      '15+ years of engineering experience with 8+ years in VP-level roles',
      'Experience leading 200+ engineer organizations delivering mission-critical infrastructure',
      'Deep expertise in CDN, video streaming, or large-scale distributed systems',
      "Track record of building high-performing teams without relying on process (Netflix doesn't do process; we do judgment)",
      "Comfort with the Netflix culture deck (if any of the 125 slides make you uncomfortable, this isn't the role)",
    ],
    niceToHaves: [
      'Previous experience operating infrastructure where 1 second of downtime makes global news',
      'Ability to fire someone with radical candor and a generous severance package, then post about it on your blog',
      'A Netflix account on the Premium tier (we notice. And we judge.)',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Netflix — VP of Engineering, Content Delivery',
        body: `Hi,

Thank you for your interest in the VP of Engineering role at Netflix.

Our leadership team applied the keeper test to your candidacy. The question we ask: "Would we fight to keep this candidate if they tried to leave for another company?" The answer: "We would write them a strong LinkedIn recommendation."

In the spirit of radical candor:
- Your leadership experience is extensive. However, you led teams that used "sprints" and "story points." At Netflix, we don't have sprints. We have "continuous delivery of value by stunning colleagues who don't need a framework to tell them when to ship."
- You proposed a team growth plan. At Netflix, we believe in "highly aligned, loosely coupled" teams. Your plan was too tightly coupled to the concept of hiring more people. Sometimes the answer is fewer, better people.
- You mentioned "retaining talent." At Netflix, we don't retain talent. We attract stunning colleagues, and if they stop being stunning, we generously help them find their next opportunity.

With radical candor,
Netflix Engineering Leadership`,
      },
    },
  },
  {
    id: 'apple-engineering-director',
    companyId: 'apple',
    category: 'management',
    title: 'Engineering Director — Siri & AI Experiences',
    location: 'Cupertino, CA (Apple Park — the doughnut-shaped fortress of secrecy)',
    salary:
      "$280,000 - $460,000 + RSUs + the knowledge that Siri's future is in your hands (no pressure)",
    type: 'Full-time',
    postedDate: '2024-01-30',
    description:
      "Lead the engineering teams building Siri and Apple's AI-powered experiences. You'll manage 80+ engineers working on natural language processing, on-device ML, and the age-old question of why Siri still can't reliably set a timer. Your work will be compared to ChatGPT by every tech journalist on the planet, and you'll need to explain why privacy-first AI is worth the tradeoff of being 2 years behind the competition. Everything you do is under NDA. Everything.",
    requirements: [
      '12+ years of engineering experience with 5+ years in director-level roles',
      'Deep expertise in NLP, ML/AI, or voice assistant technology',
      'Experience leading large, multi-disciplinary engineering teams (ML, backend, client)',
      'Track record of shipping ML-powered consumer products at scale',
      'Must be obsessively focused on user privacy (this is Apple, not the other companies)',
    ],
    niceToHaves: [
      'Previous experience shipping an AI product that was publicly compared to competitors and survived the discourse',
      'Ability to motivate a team building a voice assistant that the internet regularly mocks',
      'Understanding of why "Hey Siri, play my playlist" sometimes plays a completely different playlist, and the patience to fix it',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Apple — Engineering Director, Siri & AI application',
        body: `Dear Candidate,

Thank you for your interest in the Engineering Director role for Siri & AI Experiences at Apple.

We've reviewed your candidacy and decided not to proceed. We asked Siri for a summary of the decision:

"I found some results on the web for 'why this candidate wasn't hired.'"

(We're still working on Siri. Obviously.)

What we can share:
- Your interview mentioned "cloud-based AI" 14 times. At Apple, AI runs on-device. The cloud is where other companies put your data. We don't do that.
- You proposed moving faster by reducing privacy constraints. At Apple, privacy is not a constraint. It is the feature. You would not suggest removing the screen from an iPhone.
- Your leadership style emphasized "moving fast and breaking things." At Apple, we move deliberately and break nothing. Except occasionally Siri.

Regards,
Apple Engineering Leadership`,
      },
    },
  },
]
