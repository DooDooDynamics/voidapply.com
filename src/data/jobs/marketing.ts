import type { Job } from '@/types'

export const marketingJobs: Job[] = [
  {
    id: 'meta-growth-marketing',
    companyId: 'meta',
    category: 'marketing',
    title: 'Growth Marketing Manager — Facebook App',
    location: 'Menlo Park, CA (in-office, so you can experience the campus everyone is leaving)',
    salary: "$150,000 - $260,000 + RSUs (which fund themselves through the ads you'll be running)",
    type: 'Full-time',
    postedDate: '2024-02-08',
    description:
      "Drive user acquisition for a platform that already has 3 billion users. Your job is to find the remaining 5 billion humans (and several billion bots) who haven't signed up yet. You'll run campaigns across our own ad platform (convenient) and optimize funnels that convert 'skeptical internet user' into 'daily active user who argues with strangers.' Success is measured in DAUs, not in whether those DAUs are happy.",
    requirements: [
      '5+ years of growth or performance marketing experience at scale',
      'Expert-level knowledge of Meta Ads Manager (you should know it better than we do, because it changes every Tuesday)',
      "Strong analytical skills — you'll need to attribute conversions across a privacy landscape that we helped create and now struggle with",
      'Experience with multi-channel campaigns (Meta, Google, TikTok — yes, we advertise on our competitors)',
    ],
    niceToHaves: [
      'Previous experience marketing a product that your target audience actively dislikes',
      'Ability to explain the Meta Pixel to a privacy regulator without sweating',
      'Has survived at least one iOS privacy update without a nervous breakdown',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Meta — Growth Marketing Manager, Facebook App application',
        body: `Hi,

Thanks for applying to the Growth Marketing Manager role at Meta.

We ran your application through our ad targeting system to find the ideal candidate, and unfortunately, your profile was not served an interview.

Your relevance score was too low. Specifically:
- Your application had a 2.3% click-through rate with our hiring panel (industry average for rejection emails: 2.4%)
- Your "conversion" from resume to phone screen was below our ROAS threshold
- You were outbid by 47 other candidates in the attention auction

We recommend optimizing your resume creative, testing new headlines, and retargeting us in Q3.

Best,
Meta Marketing Recruiting
(This rejection was A/B tested. Version B was nicer. You got Version A.)`,
      },
    },
  },
  {
    id: 'google-brand-marketing',
    companyId: 'google',
    category: 'marketing',
    title: 'Brand Marketing Lead — Google Pixel',
    location: 'Mountain View, CA or New York, NY (where the creatives are)',
    salary: '$165,000 - $280,000 + a Pixel phone (finally, a perk)',
    type: 'Full-time',
    postedDate: '2024-01-14',
    description:
      "Lead brand marketing for Google Pixel — the phone that reviewers love but nobody buys. You'll craft campaigns that convince consumers to switch from iPhones they've had since 2014, compete for ad spend against a company with 10x our phone market share, and find creative ways to say 'our camera is better' for the 7th consecutive year. Bonus: you'll also need to explain why we killed the Pixel tablet.",
    requirements: [
      '7+ years of brand marketing experience in consumer electronics or tech',
      'Track record of building brand awareness for a product competing against a dominant market leader (David vs. Goliath experience required)',
      "Experience managing creative agencies who are more excited about the iPhone campaign they're also working on",
      'Strong storytelling ability — you need to make "slightly better night mode" sound revolutionary',
    ],
    niceToHaves: [
      "Previous experience marketing a product that your own company's employees don't use",
      'Ability to keep a straight face when someone asks "is Pixel still a thing?"',
      'Experience with product launches where the leaks came from your own supply chain',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Google — Brand Marketing Lead, Pixel application update',
        body: `Dear Applicant,

Thank you for your interest in the Brand Marketing Lead position for Google Pixel.

After reviewing your application, we've decided to move forward with other candidates. Our hiring committee provided the following feedback:

Your marketing portfolio was submitted from an iPhone. We ran the EXIF data. We know.

Additionally, your campaign proposals focused on "competing with Apple." At Google Pixel, we don't compete with Apple. We are on our own journey. A different journey. A journey where market share is just a number and brand love is what really matters. (Please don't ask about the market share numbers.)

Best,
Google Hardware Marketing Team`,
      },
    },
  },
  {
    id: 'tesla-content-marketing',
    companyId: 'tesla',
    category: 'marketing',
    title: 'Content Marketing Manager',
    location:
      "Austin, TX (in-office — the CEO doesn't believe in remote work or marketing departments)",
    salary: '$120,000 - $200,000 (we eliminated the marketing budget, but we kept the job listing)',
    type: 'Full-time',
    postedDate: '2024-02-16',
    description:
      "Manage content marketing for a company that famously doesn't have a marketing department or spend money on advertising. Your job is to create content that goes viral organically, leverage the CEO's 180 million Twitter followers as your primary distribution channel, and somehow maintain brand consistency when the brand is whatever the CEO tweets at 1 AM. Budget: $0. Expectations: unlimited.",
    requirements: [
      '4+ years of content marketing experience (traditional marketing experience will need to be unlearned)',
      'Ability to create compelling content with zero paid distribution budget',
      'Social media expertise — specifically Twitter/X, which is our entire marketing strategy',
      'Crisis communications experience (you will need this weekly)',
      "Comfort with the CEO being the brand's primary spokesperson, for better or worse",
    ],
    niceToHaves: [
      'Experience doing more with less (we have eliminated "less" — you will do more with nothing)',
      'Ability to write a press release in under 280 characters',
      'Owns a Tesla (mandatory, actually — this is not a nice-to-have)',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Tesla — Content Marketing Manager application',
        body: `Hi,

Thanks for your interest in the Content Marketing Manager role at Tesla.

After reviewing your application through first principles thinking, we've decided not to proceed.

Our concerns:
1. Your resume mentions a "marketing budget." At Tesla, we've eliminated the concept of marketing budgets. It's an outdated paradigm. Real marketing is when the CEO tweets and the stock moves 15%.
2. You proposed a content strategy that includes "planned campaigns." At Tesla, content is created reactively, usually in response to a 1 AM tweet that we need to contextualize by market open.
3. Your portfolio includes paid advertising work. We don't do paid advertising. We do "earned media through controversy."

Also, you arrived at the interview in a non-Tesla vehicle. HR has been notified.

Regards,
Tesla People Team`,
      },
    },
  },
  {
    id: 'netflix-performance-marketing',
    companyId: 'netflix',
    category: 'marketing',
    title: 'Senior Performance Marketing Manager — Subscriber Acquisition',
    location:
      'Los Gatos, CA (in-office, because our stunning colleagues collaborate best in person)',
    salary: '$190,000 - $320,000 (top of market, as with all things Netflix)',
    type: 'Full-time',
    postedDate: '2024-01-19',
    description:
      "Acquire subscribers for the streaming service everyone already subscribes to (and shares passwords for). You'll manage multi-million dollar campaigns across channels, optimize creative for a content library that changes daily, and figure out how to convince people to pay more for the ad-free tier they used to get at the old price. Your biggest competitor is password sharing, which we've now monetized. You're welcome.",
    requirements: [
      '6+ years of performance marketing experience with large-scale budgets ($50M+)',
      'Expert in paid social, programmatic, SEM, and CTV advertising',
      "Strong analytical skills — you'll need to prove ROI on campaigns for content that people were going to watch anyway",
      'Experience with subscription models and reducing churn (subscribers who cancel after watching one show are your nemesis)',
    ],
    niceToHaves: [
      'Previous experience marketing a price increase without using the word "increase"',
      'Ability to create urgency for content that will be available literally forever (or until we remove it without warning)',
      'Has never shared a Netflix password (we can check)',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Netflix — Senior Performance Marketing Manager application',
        body: `Hi,

Thank you for applying to the Senior Performance Marketing Manager role at Netflix.

In the spirit of radical candor: no.

Our team evaluated your application and determined you are not a stunning colleague fit for this role. Specifically:

- Your case study showed a 4.2x ROAS. At Netflix, we expect at least 6x. We are top of market in expectations as well as compensation.
- You proposed a "brand awareness" campaign. At Netflix, we believe in performance or nothing. Brand is what happens when performance marketing is really good.
- Your Netflix account is on the ad-supported tier. We appreciate the honesty of including your subscriber ID, but this raised concerns about your commitment to premium experiences.

We operate like a pro sports team. Today, you've been cut.

With radical candor,
Netflix Marketing Recruiting`,
      },
    },
  },
  {
    id: 'salesforce-product-marketing',
    companyId: 'salesforce',
    category: 'marketing',
    title: 'Director of Product Marketing — Salesforce AI',
    location: 'San Francisco, CA (Salesforce Tower — floor 42, where the marketers live)',
    salary: '$190,000 - $320,000 + equity + Dreamforce VIP pass',
    type: 'Full-time',
    postedDate: '2024-02-04',
    description:
      "Position Salesforce's AI capabilities as the most trusted, enterprise-ready AI platform in the market. You'll rebrand existing features as 'AI-powered,' add 'Einstein' to the name of products that have existed for a decade, and create messaging that makes CEOs feel excited about AI without understanding it. Dreamforce keynote preparation begins 11 months in advance. You will live and breathe Dreamforce.",
    requirements: [
      '8+ years of product marketing experience in enterprise SaaS',
      'Experience marketing AI/ML products to enterprise buyers who think ChatGPT is the only AI that exists',
      'Ability to create compelling narratives around incremental feature updates ("This changes everything")',
      'Track record of launching products at major industry events (Dreamforce experience is basically a requirement)',
      'Must be comfortable with the word "Ohana" being used in professional contexts',
    ],
    niceToHaves: [
      'Previous experience adding "AI" to a product name and calling it a launch',
      'Ability to wear a Salesforce-branded Hawaiian shirt unironically',
      'Has attended Dreamforce and did not find it overwhelming (this has never happened, but we ask anyway)',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Salesforce — Director of Product Marketing, AI application update',
        body: `Aloha,

Mahalo for your interest in the Director of Product Marketing role for Salesforce AI.

After reviewing your application with our Ohana hiring values, we've decided not to move forward. Our Einstein AI candidate assessment tool flagged the following:

- Your marketing portfolio did not include the word "trust" enough times. At Salesforce, "trust" is our #1 value, and we expected to see it at least 14 times in your cover letter (you had 3).
- Your product launch case study did not reference Dreamforce. All product launches happen at Dreamforce. Even the ones in March.
- You proposed marketing AI features based on what they actually do. At Salesforce, we market AI features based on what they could theoretically do in an ideal demo environment.

We hope to see you at Dreamforce as an attendee, even if not as an employee!

Ohana always,
Salesforce Marketing Recruiting`,
      },
    },
  },
  {
    id: 'uber-brand-marketing',
    companyId: 'uber',
    category: 'marketing',
    title: 'Brand Marketing Manager — Uber Eats',
    location: 'San Francisco, CA or New York, NY (in-office, food delivery not included)',
    salary: '$140,000 - $240,000 + $200/month Uber Eats credits (dinner is on us, literally)',
    type: 'Full-time',
    postedDate: '2024-02-24',
    description:
      "Build the Uber Eats brand in a market where every food delivery app looks, feels, and charges the same. You'll create campaigns that differentiate Uber Eats from DoorDash, Grubhub, and Postmates (which we acquired and are still figuring out what to do with). Convince consumers that $4.99 delivery + $3.99 service fee + $2.00 small order fee + $6.00 tip is actually a great deal compared to walking 3 blocks.",
    requirements: [
      '5+ years of brand marketing experience in consumer tech, food & beverage, or delivery',
      'Experience building brand love for services that are fundamentally about convenience, not emotion',
      "Strong creative direction skills — you'll manage agencies and in-house teams across campaigns",
      'Understanding of marketplace dynamics (drivers, restaurants, and eaters all need different messages)',
    ],
    niceToHaves: [
      'Previous experience justifying $47 in fees on a $12 burrito',
      'Ability to create a Super Bowl ad concept that makes food delivery seem like an emotional journey',
      'Has ordered Uber Eats from a restaurant that is within walking distance (no judgment, we encourage it)',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Uber Eats — Brand Marketing Manager application update',
        body: `Hi,

Thanks for applying to the Brand Marketing Manager role for Uber Eats.

We've decided not to deliver on your application at this time. Estimated delivery of an interview: never. (Note: this timeline may change due to high demand in your area.)

Our feedback:
- Your brand strategy proposed "transparent pricing." While we appreciate the creativity, this conflicts with our current business model of distributing the total cost across enough line items that no one realizes they're paying $30 for a sandwich.
- You suggested partnering with restaurants that make their own delivery apps. That's like suggesting Uber partner with public transit. (Actually, we did that. Forget this point.)

Your application fee: $0.00
Service fee: $3.99
Small application fee: $2.00
Platform fee: $1.49
Total: $7.48

Best,
Uber Eats Marketing Recruiting`,
      },
    },
  },
]
