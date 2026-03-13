import type { Job } from '@/types'

export const designJobs: Job[] = [
  {
    id: 'apple-ux-designer',
    companyId: 'apple',
    category: 'design',
    title: 'Senior UX Designer — iOS Human Interface',
    location: 'Cupertino, CA (Apple Park — you will get lost. Everyone does.)',
    salary: '$170,000 - $290,000 (in Apple Gift Cards — just kidding, but we thought about it)',
    type: 'Full-time',
    postedDate: '2024-01-22',
    description:
      "Design experiences for 1.5 billion iOS users who will never appreciate the 200 hours you spent perfecting a button's corner radius. You'll work under design leadership that believes every pixel is sacred and every interaction should feel 'magical.' Your Figma files will be reviewed by committee, your prototypes will be NDA'd, and your portfolio will remain empty forever because nothing you make here can be shown publicly.",
    requirements: [
      '7+ years of UX/UI design experience at a consumer technology company',
      "Mastery of Sketch, Figma, and whatever tool we internally built that you've never heard of",
      'Deep understanding of the Apple Human Interface Guidelines (you should have them memorized, all 847 pages)',
      'Portfolio demonstrating obsessive attention to detail (we will zoom in to 400%)',
      'Ability to present design rationale to executives who will ask you to "make it more Apple"',
    ],
    niceToHaves: [
      'Synesthesia (we need someone who can feel whether a color is right)',
      'Previous experience being told a design is "almost perfect" 47 times',
      "Comfort with the fact that Jony Ive's ghost still haunts the design studio",
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Apple — Senior UX Designer, iOS Human Interface application',
        body: `Dear Candidate,

Thank you for applying to the Senior UX Designer position at Apple.

After a meticulous review (we spent 3 hours on your portfolio, which is how long we spend on a single icon), we've decided not to move forward.

Our design review panel noted the following concerns:
- Your portfolio uses the font Roboto. We cannot overstate how disqualifying this is.
- One of your mockups featured a hamburger menu. At Apple, we do not acknowledge the existence of hamburger menus.
- Your case study included the phrase "good enough." There is no "good enough" at Apple. There is only "magical" and "unacceptable."

We encourage you to reapply once your design sensibility has been sufficiently refined. We recommend staring at an iPhone home screen for 6 months as preparation.

Regards,
Apple Design Recruiting`,
      },
    },
  },
  {
    id: 'google-ux-researcher',
    companyId: 'google',
    category: 'design',
    title: 'UX Researcher — Search Experience',
    location:
      'Mountain View, CA (Hybrid — research participants are in-person, everything else is a doc)',
    salary: '$140,000 - $250,000 + the satisfaction of being ignored by product teams',
    type: 'Full-time',
    postedDate: '2024-02-14',
    description:
      "Conduct user research to inform the future of Google Search — a product used by 4 billion people who will never read your research report. You'll run usability studies, synthesize findings into beautiful decks, and present insights that will be overridden by a VP's gut feeling. Your research will be cited in meetings but never in product decisions.",
    requirements: [
      '4+ years of UX research experience with mixed methods (quant and qual — you need to speak both languages)',
      'Advanced degree in HCI, Psychology, Cognitive Science, or another field where your parents ask "but what will you DO with that?"',
      'Experience running research studies at scale (our sample sizes need to be statistically significant enough to survive peer review from 12 skeptical engineers)',
      'Ability to translate user pain into product requirements (and then watch those requirements get deprioritized)',
    ],
    niceToHaves: [
      'Previous experience having your research findings contradicted by an A/B test',
      'Thick skin (you will present to stakeholders who think they ARE the user)',
      'A publication record (so we can put "PhD researcher" on the team page)',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Google UX Research — Search Experience application update',
        body: `Dear Applicant,

Thank you for applying to the UX Researcher role at Google.

We conducted a brief usability study on your application (n=1, our recruiter) and found the following:

Task completion rate: 0%. The recruiter was unable to identify a clear research methodology in your cover letter. They abandoned the task after 30 seconds (which, to be fair, is longer than most people spend on applications here).

Net Promoter Score for your resume: -47. Our recruiter would "definitely not recommend" your application to the hiring manager.

We encourage you to iterate on your application based on this feedback. Consider conducting user research on what hiring managers actually want to read.

Best,
Google UX Research Hiring`,
      },
    },
  },
  {
    id: 'meta-product-designer',
    companyId: 'meta',
    category: 'design',
    title: 'Product Designer — Facebook Marketplace',
    location:
      'Menlo Park, CA or Remote (design reviews happen in VR now, and yes, it is as awkward as it sounds)',
    salary:
      '$160,000 - $290,000 + RSUs (the real compensation is the friends you make before layoffs)',
    type: 'Full-time',
    postedDate: '2024-01-30',
    description:
      "Redesign the experience of buying a used couch from a stranger on the internet. You'll create elegant design solutions for a marketplace where users list items as 'FREE — $500 OBO' and product photos are taken with a 2012 flip phone. Your designs should make both the person selling a gently-used mattress and the person buying it feel safe and respected.",
    requirements: [
      '4+ years of product design experience in consumer or marketplace products',
      'Strong visual and interaction design skills — your Figma files should be organized enough to survive a design critique',
      "Experience designing for trust and safety (you'll need it — have you SEEN Marketplace?)",
      'Systems thinking — you\'ll work across listing, messaging, payments, and "why is this person asking me to pay in gift cards" flows',
    ],
    niceToHaves: [
      'Previous experience buying something on Facebook Marketplace without getting scammed',
      'Ability to design for users who list a 2003 Honda Civic as "$1" to get views',
      'Emotional resilience when your elegant design is used to sell "haunted dolls — no lowballers"',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Meta — Product Designer, Facebook Marketplace application',
        body: `Hi,

Thanks for your interest in the Product Designer role for Facebook Marketplace at Meta.

After reviewing your portfolio, our design team has decided to pass. Here's why:

Your case study showed a clean, organized marketplace design. This tells us you've never actually used Facebook Marketplace. Our users list items with 0 photos, descriptions like "u know what it is," and prices that are either $1 or $9,999 with "price is negotiable" in the comments.

We need a designer who understands this chaos, not one who tries to impose order on it.

Also, your portfolio was submitted as a Figma link. Unfortunately, one of our design directors clicked it and it crashed their browser, which reminds them of an internal tool incident they'd rather forget.

Best,
Meta Design Recruiting`,
      },
    },
  },
  {
    id: 'spotify-design-lead',
    companyId: 'spotify',
    category: 'design',
    title: 'Design Lead — Mobile Experience',
    location: 'Stockholm, Sweden or New York, NY (squad-based, tribe-aligned, chapter-approved)',
    salary: 'Competitive + the ability to finally fix that one playlist UI thing that bugs you',
    type: 'Full-time',
    postedDate: '2024-02-06',
    description:
      "Lead design for Spotify's mobile app, used by 600 million people who just want to play a song but keep accidentally starting a podcast. You'll own the end-to-end experience from search to playback, navigate stakeholder feedback from music labels, podcast networks, and audiobook publishers (all of whom think the home screen should feature only their content), and ship designs in our famously autonomous squad model.",
    requirements: [
      '6+ years of product design experience with 2+ years in a lead role',
      'Strong portfolio demonstrating mobile-first design thinking',
      'Experience leading design within cross-functional squads (or whatever your company calls small teams with too many stakeholders)',
      'Ability to design for audio — a medium you cannot see, which makes design reviews interesting',
      "Data literacy — you'll need to explain why users tap the wrong thing, and no, it's not always their fault",
    ],
    niceToHaves: [
      'Experience designing for both free-tier (ads every 3 songs) and premium (ads every 6 podcasts) users',
      'A Spotify profile with more than 100 playlists (we want passionate users, not casual listeners)',
      'Previous experience explaining to stakeholders why "just make the play button bigger" is not a design strategy',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Spotify — Design Lead, Mobile Experience application update',
        body: `Hey,

Thanks for applying to the Design Lead role at Spotify!

We reviewed your portfolio and decided not to move forward. Your Rejection Wrapped is ready:

🎨 Your Portfolio Stats:
- Case studies reviewed: 4
- "Wow" moments: 0.5 (we rounded up)
- Use of green (#1DB954): 0 times. Concerning brand alignment.
- Mobile-first designs: technically yes, but they looked like desktop designs squeezed into a phone

Our squad voted 3-2 against, which in our consensus-driven culture means we'll revisit this in 6 months when the squad has been reorganized into a different tribe.

Keep designing,
Spotify Design Recruiting`,
      },
    },
  },
  {
    id: 'netflix-visual-designer',
    companyId: 'netflix',
    category: 'design',
    title: 'Senior Visual Designer — Brand & Marketing',
    location:
      'Los Gatos, CA or Hollywood, CA (where the content is made and the designers are stressed)',
    salary: '$180,000 - $300,000 (top of market — we only hire stunning designers)',
    type: 'Full-time',
    postedDate: '2024-02-22',
    description:
      "Create visual designs for the brand that made you cancel plans to binge-watch a series. You'll design key art for shows you can't talk about, marketing campaigns for movies that may get pulled from the platform before launch, and brand materials that need to work across 190 countries. The creative bar is incredibly high — our stakeholders include filmmakers with strong opinions and a design culture that values radical candor.",
    requirements: [
      '6+ years of visual design experience in entertainment, media, or brand design',
      'Exceptional typography, color theory, and layout skills — your work should make people feel something',
      'Experience designing for global audiences (your poster needs to work in Japan and Brazil)',
      'Thick skin — feedback is direct, frequent, and occasionally delivered via a Slack thread with 47 reply threads',
    ],
    niceToHaves: [
      'Previous experience designing a movie poster that someone got tattooed',
      'Ability to create 15 variations of the same concept without losing your mind',
      "A Netflix subscription (obviously) with a viewing history that shows cultural range (we're judging)",
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Netflix — Senior Visual Designer application update',
        body: `Hi,

Thanks for your interest in the Senior Visual Designer role at Netflix.

After our team reviewed your portfolio with radical candor, we've decided not to move forward. In the spirit of our culture, here's our unfiltered feedback:

Your portfolio is a solid 7/10. At Netflix, we only hire 10s. We're a dream team, not a development league.

Specific notes:
- Your typography choices were safe. We want dangerous typography.
- One of your case studies used a stock photo. We could tell. We always can.
- Your color palette was described as "pleasant." At Netflix, we aim for "emotionally devastating."

This is not a reflection of your worth as a designer. It is, however, a reflection of our impossibly high standards.

With radical candor,
Netflix Design Recruiting`,
      },
    },
  },
  {
    id: 'uber-product-designer',
    companyId: 'uber',
    category: 'design',
    title: 'Product Designer — Rider Experience',
    location:
      'San Francisco, CA (in-office — ironic for a company that gets people where they need to go)',
    salary: '$155,000 - $275,000 + Uber credits (the ultimate perk or the ultimate test)',
    type: 'Full-time',
    postedDate: '2024-01-26',
    description:
      "Design the app experience for millions of riders who just want to get from A to B without surge pricing. You'll optimize the ride request flow that users complete in 3 seconds, then spend 40 hours perfecting. Collaborate with data science to make surge pricing feel less like highway robbery and more like 'dynamic market-based fare adjustment.' Your maps need to be accurate, your ETAs need to be optimistic, and your pickup pin needs to actually be where the user is standing.",
    requirements: [
      '4+ years of product design experience in mobile or consumer products',
      'Strong interaction design skills — every millisecond of animation matters when someone is late for a flight',
      'Experience with map-based interfaces (and the patience to deal with GPS drift)',
      'Data-informed design process — every design decision will be A/B tested, and the data will win',
    ],
    niceToHaves: [
      'Previous experience designing an interface that makes a $47 surge feel reasonable',
      'Understanding of real-time systems and the emotional journey of watching your driver make three wrong turns',
      'Has used Uber in at least 5 countries and filed at least 3 support tickets',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Uber — Product Designer, Rider Experience application update',
        body: `Hi,

Thanks for applying to the Product Designer role at Uber.

We've decided not to move forward with your application. Your estimated interview time was 2 weeks away, but due to high demand, that timeline has surged to never.

Our review panel noted the following:
- Your portfolio case study proposed reducing surge pricing visibility. This is in direct conflict with our revenue model.
- Your "ideal ride experience" mockup included an accurate ETA. We appreciate the optimism, but it's not realistic.
- You designed a complaint flow that actually resolves issues. Our support team found this destabilizing.

We'll keep your profile active for 30 days. After that, it will be canceled and you'll be charged a $5 cancellation fee.

Best,
Uber Design Recruiting`,
      },
    },
  },
]
