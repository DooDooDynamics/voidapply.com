import type { Job } from '@/types'

export const operationsJobs: Job[] = [
  {
    id: 'amazon-operations-manager',
    companyId: 'amazon',
    category: 'operations',
    title: 'Area Operations Manager — Fulfillment Center',
    location: 'Everywhere, USA (wherever we build the next warehouse)',
    salary: '$85,000 - $140,000 + sign-on bonus + relocation to wherever the warehouse is',
    type: 'Full-time',
    postedDate: '2024-01-10',
    description:
      "Manage the operations of an Amazon fulfillment center where 2,000 associates process 1 million packages daily and your Fitbit thinks you're training for a marathon. You'll optimize pick-and-pack rates, manage a team larger than most companies, and explain to corporate why the robots haven't replaced everyone yet (they're working on it). Peak season is Q4, but at Amazon, every season is peak season.",
    requirements: [
      "Bachelor's degree in Operations, Supply Chain, Engineering, or Military Science (seriously, we love military backgrounds)",
      '3+ years of management experience leading teams of 100+ people',
      'Ability to walk 10+ miles per day on a concrete floor while making data-driven decisions',
      'Experience with lean manufacturing, Six Sigma, or other methodologies for making humans work like robots',
      'Must embody all 16 Leadership Principles, especially Bias for Action (bathroom breaks are timed)',
    ],
    niceToHaves: [
      'Previous experience explaining to associates why the AI scheduling system is "fair"',
      'Comfort with being responsible for packages that contain everything from books to live lobsters',
      "Steel-toed boots (you'll need them day one, and no, we don't provide them — Frugality)",
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Amazon — Area Operations Manager application',
        body: `Dear Candidate,

Thank you for applying to the Area Operations Manager role at Amazon Fulfillment.

After reviewing your application with the urgency of a same-day delivery order, we have decided not to proceed.

Our assessment revealed the following:
- Your resume took 72 hours to process. At Amazon, we process 1 million packages per day. Your resume was slower than a package going to rural Alaska.
- You mentioned "employee satisfaction" as a management priority. While we appreciate the sentiment, our primary KPI is units per hour. Satisfaction is a nice-to-have.
- Your daily step count averaged 6,000. Our operations managers average 25,000. Insufficient foot-based Bias for Action.

We encourage you to reapply after completing an ultra-marathon, which is the closest civilian equivalent to a shift in our fulfillment center.

Best,
Amazon Operations Recruiting`,
      },
    },
  },
  {
    id: 'uber-city-operations',
    companyId: 'uber',
    category: 'operations',
    title: 'City Operations Manager — Los Angeles',
    location: "Los Angeles, CA (in-office, though you'll spend most of your time in the field)",
    salary: "$120,000 - $190,000 + Uber credits (you'll need them, LA traffic is real)",
    type: 'Full-time',
    postedDate: '2024-02-10',
    description:
      "Run Uber's operations in Los Angeles, a city where everyone drives but nobody wants to be a driver. You'll balance rider demand with driver supply, negotiate with regulators who want to ban you, and handle the PR fallout when surge pricing hits 4.7x during a Taylor Swift concert. Your job is to make sure there's always a car nearby — except during rush hour, rain, holidays, events, or any other time people actually need one.",
    requirements: [
      '4+ years of operations or general management experience in a marketplace or logistics business',
      "Data fluency — you'll manage a city through dashboards, not windshields",
      "Stakeholder management skills (you'll deal with regulators, drivers, riders, restaurants, and local media, often simultaneously)",
      'Experience with supply-demand dynamics (Econ 101 is finally useful)',
    ],
    niceToHaves: [
      'Previous experience managing a two-sided marketplace where both sides are unhappy',
      'Knowledge of LA geography (the 405 is not a shortcut, ever)',
      'Ability to explain surge pricing to an angry rider without using the word "surge"',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Uber — City Operations Manager, Los Angeles application',
        body: `Hi,

Thanks for applying to the City Operations Manager role at Uber.

We reviewed your application, but unfortunately, your candidacy has been cancelled. A cancellation fee of $5 has not been applied (we're kidding, but only about this).

Feedback from our operations review:
- You proposed increasing driver compensation to improve supply. While mathematically sound, this conflicts with our preferred approach of sending push notifications with motivational quotes.
- Your city management plan included "working with regulators." At Uber, we prefer the term "disrupting regulatory frameworks."
- You estimated a 12-minute average ETA for riders. Our actual average in LA during rush hour is 23 minutes. We appreciate your optimism, but we need realism.

Your application is in "looking for a new reviewer" status.

Best,
Uber Operations Recruiting`,
      },
    },
  },
  {
    id: 'google-technical-program-manager',
    companyId: 'google',
    category: 'operations',
    title: 'Technical Program Manager — Cloud Infrastructure',
    location: 'Mountain View, CA or Sunnyvale, CA (Hybrid — but your program runs 24/7)',
    salary: '$160,000 - $290,000 + stock + the satisfaction of herding genius cats',
    type: 'Full-time',
    postedDate: '2024-01-17',
    description:
      "Manage complex technical programs that span 15 teams, 8 time zones, and 3 VPs who all think their project is the top priority. You'll create Gantt charts that become obsolete before the ink dries, run status meetings where the answer is always 'on track' (it's never on track), and send weekly updates that nobody reads but everyone expects. Your superpower is knowing which engineer to bother and when.",
    requirements: [
      '6+ years of technical program management experience at a major tech company',
      'Ability to translate between engineer-speak and executive-speak (these are different languages)',
      'Experience managing programs with 50+ engineers (and the emotional intelligence to match)',
      'Proficiency with project management tools (Jira, Asana, or the custom internal tool we built that does the same thing but worse)',
      "PMP certification (we won't admit it matters, but it does)",
    ],
    niceToHaves: [
      'Previous experience shipping a project that was "two weeks away" for six months',
      'Ability to write a status report that is simultaneously optimistic and accurate (nearly impossible)',
      'Experience canceling a project that consumed $10M in engineering time and presenting it as a "strategic pivot"',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Google — Technical Program Manager application update',
        body: `Dear Applicant,

Thank you for your interest in the Technical Program Manager role at Google Cloud.

After our hiring committee reviewed your application (a process that itself could have used better program management), we've decided not to proceed.

Key blockers identified:
- Your project timelines were too accurate. At Google, we need TPMs who can present a 12-month timeline knowing full well it will take 24 months. Optimism is a job requirement.
- You mentioned "stakeholder alignment" as a strength. At Google, stakeholder alignment is a theoretical concept, like cold fusion. We need someone who can operate without it.
- Your status report sample used red/yellow/green indicators. At Google, the only acceptable color is green. If it's red, redefine the metric until it's green.

Status of your application: Green (it's actually red, but we're following protocol).

Best,
Google TPM Recruiting`,
      },
    },
  },
  {
    id: 'apple-supply-chain',
    companyId: 'apple',
    category: 'operations',
    title: 'Supply Chain Program Manager — iPhone',
    location:
      "Cupertino, CA (Apple Park — where supply chain is the most important team you've never heard of)",
    salary: '$165,000 - $280,000 (competitive because Tim Cook ran operations and became CEO)',
    type: 'Full-time',
    postedDate: '2024-02-15',
    description:
      "Manage the supply chain for a product that sells 200 million units per year and must launch simultaneously in 40+ countries on a date that the world knows but you cannot confirm. You'll coordinate with manufacturers in Asia, logistics teams across 6 continents, and a product team that will change the camera module specs 3 months before launch. Secrecy is paramount — your family will not know what you do, your friends will not know what you do, and some days, you will not know what you do.",
    requirements: [
      '7+ years of supply chain or operations experience in consumer electronics manufacturing',
      'Experience managing global supplier relationships with diplomatic precision',
      'Understanding of manufacturing processes (injection molding, PCB assembly, and how to get a factory to double output in 2 weeks)',
      'Extreme attention to detail — a 0.1mm tolerance error on 200 million units is a very expensive mistake',
      'Must be comfortable with an NDA that covers approximately everything',
    ],
    niceToHaves: [
      'Previous experience launching a product where a leak would be front-page news',
      'Ability to operate on Cupertino time, Shenzhen time, and "whatever time Tim needs this" simultaneously',
      'Emotional resilience when a key supplier goes dark 6 weeks before launch',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Apple — Supply Chain Program Manager application',
        body: `Dear Candidate,

Thank you for your interest in the Supply Chain Program Manager role at Apple.

We are unable to share the specific reasons for not moving forward, as our hiring criteria are confidential. What we can share:

Your application was evaluated using our operational excellence framework, and your score was below our threshold. This threshold is also confidential.

One piece of feedback we're authorized to provide: during the case study, you asked what product you'd be managing. At Apple, the correct response is "I don't need to know — I just need the specs, the timeline, and the yield targets."

Your application materials will be securely destroyed in accordance with our data retention policy. We will not confirm that this email was sent.

Regards,
Apple Operations Recruiting
(This email is protected under NDA. By reading it, you agree to its terms.)`,
      },
    },
  },
  {
    id: 'tesla-manufacturing-ops',
    companyId: 'tesla',
    category: 'operations',
    title: 'Production Operations Lead — Gigafactory',
    location: 'Austin, TX (in the factory — not near it, not visiting it, living in it)',
    salary: '$130,000 - $210,000 + stock + the physical fitness of walking the line 12 hours a day',
    type: 'Full-time',
    postedDate: '2024-02-22',
    description:
      "Lead production operations at Tesla's Gigafactory, where production targets change based on quarterly earnings goals and the CEO's promises to investors. You'll manage a production line that makes 5,000 vehicles per week (when everything works) and 500 per week (when the new robot arm decides it doesn't want to cooperate). Your success metric is throughput; your failure metric is being mentioned in an earnings call.",
    requirements: [
      '5+ years of manufacturing or production operations experience, ideally in automotive',
      'Experience with lean manufacturing and continuous improvement (at Tesla, "continuous" means 24/7)',
      'Ability to troubleshoot production bottlenecks in real-time while walking the factory floor',
      "Comfort with rapidly changing production targets (the number you're given on Monday will change by Wednesday)",
    ],
    niceToHaves: [
      'Previous experience sleeping on the factory floor during production ramp (this is not a joke)',
      'First principles thinking about why a robot arm keeps dropping door panels',
      'Ability to work with a CEO who may show up on the production line at 2 AM with "feedback"',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Tesla — Production Operations Lead application',
        body: `Hi,

Thanks for applying to the Production Operations Lead role at Tesla Gigafactory.

We evaluated your candidacy using first principles:

Fundamental requirement: Someone who will treat the factory like their home.
Your application: Mentions a "home address" separate from the factory. Disqualifying.

Additional concerns:
- You proposed a production schedule with planned maintenance windows. At Tesla, we do maintenance when something breaks, not before. Preventive maintenance is for companies that accept mediocrity.
- Your resume mentions 8-hour shifts. Our shifts are as long as they need to be. Time is a social construct; production targets are not.
- You asked about the safety record. We prefer candidates who focus on throughput and treat safety as an implicit constraint, not an explicit question.

Regards,
Tesla Manufacturing Recruiting
(Sent from the factory floor at 3:33 AM)`,
      },
    },
  },
  {
    id: 'spotify-program-manager',
    companyId: 'spotify',
    category: 'operations',
    title: 'Program Manager — Content Partnerships',
    location: 'New York, NY or Stockholm, Sweden (wherever the music industry takes you)',
    salary: 'Competitive + equity + enough Spotify Premium accounts for your whole family',
    type: 'Full-time',
    postedDate: '2024-01-20',
    description:
      "Manage programs that bring the world's music and podcasts to Spotify's 600 million users. You'll coordinate between record labels who want more money, podcast creators who want more visibility, and product teams who want more engagement — all while navigating a royalty payment system so complex it requires its own engineering team. Every stakeholder thinks they deserve the home screen. You'll decide they all get a carousel.",
    requirements: [
      '5+ years of program management experience in media, entertainment, or digital platforms',
      'Experience managing relationships with content partners who have strong opinions and stronger lawyers',
      'Ability to navigate complex contractual agreements (reading a music licensing contract is an extreme sport)',
      "Strong organizational skills — you'll manage 20+ concurrent programs across 4 time zones",
    ],
    niceToHaves: [
      'Understanding of music royalty structures (this will take approximately 3 years to fully grasp)',
      "Previous experience telling Taylor Swift's management that their album won't get a homepage takeover",
      'Ability to explain to podcast hosts why their show\'s placement algorithm is "fair"',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Spotify — Program Manager, Content Partnerships application',
        body: `Hey,

Thanks for applying to the Program Manager role at Spotify!

Your Rejection Wrapped is ready:

📊 Application Stats:
- Programs managed in your career: 15
- Programs we manage simultaneously: 200+
- Ratio: insufficient
- Most impressive partnership: "secured a regional grocery chain promotion"
- What we were looking for: "negotiated with a major record label while they threatened to pull their entire catalog"

Our squad reviewed your application and voted: Skip.

We've added your profile to our "Maybe Next Year" playlist, curated by our hiring algorithm and ignored by our recruiters.

Keep managing,
Spotify Operations Recruiting`,
      },
    },
  },
]
