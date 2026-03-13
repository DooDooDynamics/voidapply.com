import type { Job } from '@/types'

export const hrJobs: Job[] = [
  {
    id: 'google-people-partner',
    companyId: 'google',
    category: 'hr',
    title: 'People Partner — Engineering',
    location:
      'Mountain View, CA (Hybrid — but you need to be in-office for the conversations nobody wants to have over Zoom)',
    salary: "$140,000 - $240,000 + stock + free therapy (you'll need it)",
    type: 'Full-time',
    postedDate: '2024-02-12',
    description:
      "Support Google's engineering organization as their People Partner — the person they come to when they hate their manager, when their manager hates them, and when everyone hates the latest reorg. You'll coach directors who think management is beneath them, mediate conflicts between engineers who disagree about code style, and design performance review processes that somehow make everyone feel undervalued simultaneously. At Google, we don't call it HR. We call it 'People Operations.' It's the same thing, but with better snacks.",
    requirements: [
      '6+ years of HR business partner experience in technology companies',
      'Experience supporting engineering organizations (engineers are a unique population that requires patience, data, and never saying "let\'s talk about feelings")',
      'Strong coaching skills — you\'ll counsel VPs on leadership while they explain why their approach is "just more logical"',
      'Deep knowledge of employment law, performance management, and the art of writing PIPs that are both compassionate and legally airtight',
    ],
    niceToHaves: [
      'Previous experience facilitating a meeting where someone cried, someone yelled, and someone opened their laptop to write code',
      "Ability to explain to a Staff Engineer why they weren't promoted without them immediately interviewing at Meta",
      "A degree in Psychology (you'll use it more than you expect)",
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Google — People Partner, Engineering application',
        body: `Dear Candidate,

Thank you for applying to the People Partner role at Google.

After a thorough review by our People Operations team (yes, we review our own applications — it's exactly as recursive as it sounds), we've decided not to move forward.

Our feedback:
- During the case study, you referred to employees as "resources." At Google, we call them "Googlers." Referring to humans as resources is something we save for our cloud computing division.
- You proposed a performance review cycle of once per year. At Google, performance reviews happen every 6 months, take 3 months to complete, and the results are available 2 months later. By the time you get feedback, it's already time for the next review.
- You mentioned "HR." We don't have HR. We have People Operations. This distinction has no practical impact, but it is culturally essential.

Best,
Google People Operations Recruiting
(We are also a People Operations team. It's People Operations all the way down.)`,
      },
    },
  },
  {
    id: 'meta-head-of-recruiting',
    companyId: 'meta',
    category: 'hr',
    title: 'Head of Recruiting — Engineering',
    location:
      "Menlo Park, CA (in-office, so you can experience the culture you'll be selling to candidates)",
    salary: '$200,000 - $340,000 + RSUs + the irony of being hired to hire others',
    type: 'Full-time',
    postedDate: '2024-01-22',
    description:
      "Lead Meta's engineering recruiting function, which oscillates between 'hire 10,000 people immediately' and 'actually, lay off 11,000' on an annual cycle. You'll build recruiting strategies, manage a team of 50+ recruiters, and maintain employer brand credibility while the company's public perception changes weekly. Your biggest challenge: convincing candidates to join a company that's been in the news for everything except positive employer branding.",
    requirements: [
      '10+ years of recruiting experience with 5+ years in leadership, ideally at a major tech company',
      'Experience scaling recruiting teams up and down rapidly (at Meta, headcount plans are more of a suggestion)',
      'Strong employer branding skills — you need to make Meta sound exciting to candidates who read the news',
      'Data-driven approach to recruiting (cost per hire, time to fill, offer acceptance rate, and 47 other metrics we track)',
    ],
    niceToHaves: [
      "Previous experience hiring during a hiring freeze (it's more common than you think)",
      "Ability to explain the company's 5-year vision when the company pivots strategy every 6 months",
      'Emotional resilience for when a candidate ghosts you after you spent 4 months courting them (karma is real)',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Meta — Head of Recruiting, Engineering application',
        body: `Hi,

Thanks for applying to the Head of Recruiting role at Meta.

In a twist of poetic irony, we are rejecting the person who applied to lead our rejection efforts.

Our feedback:
- Your recruiting strategy proposed "employer brand improvement." At Meta, our employer brand is... what it is. We prefer to focus on total compensation, which can make candidates forget about any brand concerns. Money is a very effective brand strategy.
- You suggested reducing time-to-hire to 30 days. Our current process involves 6 interviews, a hiring committee review, and a compensation calibration that requires its own hiring committee. 30 days is ambitious. 90 days is realistic. 120 days is common.
- You asked about headcount stability. We appreciate the humor.

Best,
Meta People Team`,
      },
    },
  },
  {
    id: 'netflix-talent-partner',
    companyId: 'netflix',
    category: 'hr',
    title: 'Talent Partner — Content & Studios',
    location:
      'Los Angeles, CA (Hollywood, where the talent is dramatic and the HR conversations are more dramatic)',
    salary:
      '$180,000 - $300,000 (top of market, because our Talent Partners are stunning colleagues too)',
    type: 'Full-time',
    postedDate: '2024-02-20',
    description:
      "Support Netflix's content and studio teams as their Talent Partner, navigating the unique intersection of Hollywood egos and Silicon Valley culture. You'll coach executives who came from traditional media and are adjusting to a culture where anyone can be 'let go' with a generous severance and radical candor. Your role: keep the culture intact, keep the lawyers happy, and keep the talent stunning. The keeper test applies to everyone, including the person administering it.",
    requirements: [
      '7+ years of HR business partner experience, ideally with creative or entertainment industry exposure',
      "Deep understanding of Netflix's culture (read the culture deck; understand the culture deck; live the culture deck)",
      'Experience with talent management in environments where "freedom and responsibility" means different things to different people',
      "Comfort with radical candor — you will give and receive feedback that would be illegal at most other companies (it's not illegal, but it will feel like it)",
    ],
    niceToHaves: [
      'Previous experience managing a keeper test review cycle and retaining your own job afterward',
      'Ability to explain "adequate performance gets a generous severance" to someone who thinks they\'re exceptional',
      'Hollywood industry knowledge (helpful when a showrunner and a VP of Engineering disagree about Agile methodology)',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Netflix — Talent Partner, Content & Studios application',
        body: `Hi,

Thank you for applying to the Talent Partner role at Netflix.

In the spirit of radical candor, here is our unfiltered assessment:

You are an adequate HR professional. At Netflix, adequate gets a generous severance. Since you don't work here yet, you just get this email.

Specific feedback:
- Your approach to performance management included phrases like "growth opportunity" and "development plan." At Netflix, we don't have development plans. We have the keeper test. You either are a keeper or you're freed up to be a stunning colleague somewhere else.
- You proposed an employee engagement survey. At Netflix, we don't survey engagement. We assume all stunning colleagues are engaged. If they're not, we help them find a company where they will be.
- Your salary expectations were at market rate. At Netflix, we pay top of market. But your performance expectations were also at market rate, which creates a compensation/performance mismatch.

With radical candor,
Netflix Talent Team`,
      },
    },
  },
  {
    id: 'amazon-hr-business-partner',
    companyId: 'amazon',
    category: 'hr',
    title: 'HR Business Partner — AWS',
    location: 'Seattle, WA (in-office — we need you here for the "direct conversations")',
    salary:
      "$130,000 - $220,000 + RSUs (vesting over 4 years, so you're incentivized to stay through the hard parts)",
    type: 'Full-time',
    postedDate: '2024-01-30',
    description:
      "Partner with AWS engineering leaders to build and maintain a workforce of 100,000+ engineers who all need to embody 16 Leadership Principles while writing code. You'll manage performance review cycles where every employee is rated against every other employee, navigate the PIP process with surgical precision, and explain to managers why 'Unregretted Attrition' is a real metric that real companies track. Your calendar will be 90% one-on-ones with managers who are having a hard time, and 10% writing documents about the one-on-ones.",
    requirements: [
      '6+ years of HR business partner experience in technology companies',
      'Experience with stack ranking, calibration sessions, and the diplomatic gymnastics they require',
      'Deep knowledge of employment law and the ability to apply it while also citing Amazon Leadership Principles',
      'Comfort with data-driven HR (at Amazon, everything is a metric, including employee happiness — it\'s called "Connection Score")',
      'Must be able to recite all 16 Leadership Principles and apply them to HR scenarios',
    ],
    niceToHaves: [
      "Previous experience explaining to an employee why they're on a PIP using only Leadership Principle language",
      'Ability to maintain empathy while processing the 47th "I\'m thinking about leaving" conversation this week',
      'Understanding of why URA (Unregretted Attrition) is considered a positive metric, and the ability to say it out loud without flinching',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Amazon — HR Business Partner, AWS application',
        body: `Dear Candidate,

Thank you for your interest in the HR Business Partner role at AWS.

After reviewing your application against our Leadership Principles (all 16 of them), we have decided not to move forward.

Key feedback:
- Your approach to employee relations emphasized "empathy" and "psychological safety." While these concepts exist at Amazon, they are filtered through our Leadership Principles. For example, empathy at Amazon is called "Earn Trust." Psychological safety is called "Have Backbone; Disagree and Commit."
- You mentioned reducing attrition as a key goal. At Amazon, we track URA — Unregretted Attrition — which means some attrition is not only expected but desired. Your proposal to retain everyone suggests a misalignment with our philosophy.
- Your performance management philosophy was "grow and develop." At Amazon, we prefer "raise the bar," which is subtly but meaningfully different.

This decision was made using our standard 6-page narrative review process. The document was 6 pages. Your application was 2. The math didn't work.

Best,
Amazon PXT (People Experience & Technology — not HR, never HR)`,
      },
    },
  },
  {
    id: 'apple-dei-program-manager',
    companyId: 'apple',
    category: 'hr',
    title: 'Inclusion & Diversity Program Manager',
    location: 'Cupertino, CA (Apple Park — the most expensive circle of inclusion in the world)',
    salary:
      '$150,000 - $250,000 + RSUs + the challenge of changing a company culture from the inside',
    type: 'Full-time',
    postedDate: '2024-02-08',
    description:
      "Lead inclusion and diversity programs at a company that designs products for everyone but hires from a remarkably narrow talent pool. You'll create ERG strategies, develop inclusive hiring frameworks, and write the annual diversity report that shows incremental progress with enthusiastic language. Your programs will be well-funded, your executive sponsors will be genuine, and your results will be measured in tenths of percentage points that somehow take years to move.",
    requirements: [
      '6+ years of experience in diversity, equity, and inclusion program management',
      'Experience designing and implementing DEI strategies at scale (10,000+ employee organizations)',
      'Data analysis skills to measure program impact (the numbers move slowly, but they must move)',
      'Strong facilitation and communication skills for sensitive conversations that everyone wants to have but nobody wants to lead',
      'Understanding of intersectionality and its application to corporate environments (theory meets cubicles)',
    ],
    niceToHaves: [
      "Previous experience writing a corporate diversity report that's honest about challenges without becoming a PR liability",
      'Ability to secure executive sponsorship from leaders whose calendars are booked 18 months out',
      "Comfort with the pace of cultural change at a 164,000-person organization (spoiler: it's slow)",
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Apple — Inclusion & Diversity Program Manager application',
        body: `Dear Candidate,

Thank you for your interest in the Inclusion & Diversity Program Manager role at Apple.

After a thoughtful review, we've decided not to proceed with your application at this time. While we are committed to building a diverse and inclusive workforce, we are also committed to finding the exact right candidate for this specific role, and your profile didn't match our current requirements.

We recognize the irony of sending a form rejection letter for an inclusion role. We are working on that.

Our feedback:
- Your proposed DEI metrics framework focused on representation data. At Apple, we believe inclusion is felt, not just measured. Unfortunately, we also need to measure it for the annual report.
- You suggested transparent pay equity reporting. We appreciate the ambition, but at Apple, information is shared on a need-to-know basis. Even inclusion data.
- Your interview presentation used Android screenshots as examples of inclusive design. We... have no notes beyond the obvious.

Regards,
Apple People Team`,
      },
    },
  },
  {
    id: 'spotify-people-ops',
    companyId: 'spotify',
    category: 'hr',
    title: 'People Operations Lead — R&D',
    location: 'Stockholm, Sweden or New York, NY (distributed, like our squads)',
    salary: 'Competitive + equity + the ability to influence how squads work together',
    type: 'Full-time',
    postedDate: '2024-01-15',
    description:
      "Own people operations for Spotify's R&D organization, which operates in the famous 'Spotify Model' of squads, tribes, chapters, and guilds — an organizational framework so beloved that everyone adopted it except Spotify, which has since evolved beyond it. You'll support engineering managers navigating autonomous squads that occasionally need to be told what to do, facilitate talent reviews where everyone is 'meeting expectations,' and design career frameworks for roles that didn't exist 3 years ago.",
    requirements: [
      '5+ years of people operations or HR experience in technology companies',
      'Experience supporting R&D or engineering organizations with agile team structures',
      "Strong data and analytics skills — you'll build people dashboards that managers forget to check",
      'Understanding of Scandinavian work culture (flat hierarchies, consensus-based decisions, and a healthy relationship with vacation time)',
    ],
    niceToHaves: [
      'Ability to explain the difference between a squad, tribe, chapter, and guild without using a whiteboard',
      'Previous experience in a company that invented an organizational model everyone else copies',
      'Comfort with the fact that "the Spotify Model" is what other companies call it, not what Spotify calls it',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Spotify — People Operations Lead application',
        body: `Hey,

Thanks for applying to the People Operations Lead role at Spotify!

Your Rejection Wrapped is here:

🎵 Your Application Stats:
- HR buzzwords used: 34 (top 12% of applicants!)
- "Spotify Model" references: 7 (we stopped using that name internally — awkward)
- Cultural alignment: 58% (we needed 80%+)
- Most repeated phrase: "employee engagement" (12 times — we prefer "band member experience")

Our squad voted 2-4 against your candidacy. In our consensus-driven culture, this means the discussion will continue for 3 more weeks before the same outcome is confirmed.

We've added your application to our "HR Hopefuls" playlist. Current followers: 0.

Keep operating,
Spotify People Team`,
      },
    },
  },
]
