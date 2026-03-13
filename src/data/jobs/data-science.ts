import type { Job } from '@/types'

export const dataScienceJobs: Job[] = [
  {
    id: 'netflix-data-scientist',
    companyId: 'netflix',
    category: 'data-science',
    title: 'Senior Data Scientist — Content Analytics',
    location: 'Los Gatos, CA (in-office — we need to see your Jupyter notebooks in person)',
    salary:
      '$210,000 - $370,000 (top of market, because our data scientists are stunning colleagues)',
    type: 'Full-time',
    postedDate: '2024-02-11',
    description:
      "Use data to decide what 260 million people watch next. You'll build models that predict whether a show will be a hit before it's filmed, analyze viewing patterns to determine if users are binge-watching or just fell asleep with autoplay on, and provide evidence-based recommendations that will be overridden by a content executive who 'has a feeling about this one.' Your models will be judged by their accuracy; your career will be judged by the keeper test.",
    requirements: [
      '5+ years of data science experience with a focus on causal inference or recommendation systems',
      'Advanced degree in Statistics, Computer Science, Economics, or another field that involves Greek letters',
      "Expert in Python, SQL, and Spark — ideally you can write a PySpark job that doesn't crash the cluster",
      'Experience with A/B testing at scale (we A/B test everything, including whether to A/B test)',
      'Ability to communicate findings to non-technical stakeholders who think "the data says" means "I agree with my gut feeling"',
    ],
    niceToHaves: [
      'Previous experience telling a VP that their pet project has negative ROI (and surviving the conversation)',
      'A Netflix viewing history that demonstrates range (documentaries + reality TV + foreign films = ideal candidate)',
      'Understanding of why "correlation is not causation" has never stopped a product decision',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Netflix — Senior Data Scientist, Content Analytics',
        body: `Hi,

Thank you for applying to the Senior Data Scientist role at Netflix.

We ran your application through our proprietary candidate evaluation model, and the results were not promising:

- P(interview | your resume) = 0.003
- P(offer | interview) = 0.12
- P(surviving the keeper test for 2 years | offer) = 0.47
- Expected value of hiring you: below threshold

Our model also flagged that you listed "basic Excel" as a skill. At Netflix, mentioning Excel in a data science application is like mentioning a tricycle in a Formula 1 interview.

We applied a generous Bayesian prior in your favor and still arrived at a rejection.

With statistical significance,
Netflix Data Science Recruiting`,
      },
      'ats-score': {
        overallScore: 9,
        categories: [
          {
            name: 'Statistical Rigor',
            score: 14,
            comment:
              'Used the word "significant" in cover letter without specifying a p-value. Unacceptable.',
          },
          {
            name: 'Python Proficiency',
            score: 11,
            comment:
              'Listed pandas experience but no evidence of PySpark. Netflix-scale requires Netflix-scale tools.',
          },
          {
            name: 'Stunning Colleague Potential',
            score: 6,
            comment:
              'Resume suggests adequate performance. At Netflix, adequate is another word for severance.',
          },
          {
            name: 'Binge-Watch Score',
            score: 18,
            comment:
              'Netflix account shows 4 hours average daily viewing. High engagement. Hired? No. Valued as a subscriber? Absolutely.',
          },
        ],
      },
    },
  },
  {
    id: 'meta-data-scientist',
    companyId: 'meta',
    category: 'data-science',
    title: 'Data Scientist — Integrity & Safety',
    location: 'Menlo Park, CA (in-office, where the data is as overwhelming as the campus)',
    salary: '$160,000 - $295,000 + RSUs + existential weight of your work',
    type: 'Full-time',
    postedDate: '2024-01-25',
    description:
      "Apply data science to protect 3 billion users from misinformation, hate speech, and coordinated inauthentic behavior. You'll build classifiers that need to work across 100+ languages, analyze patterns that distinguish genuine political discourse from bot networks, and write reports that get subpoenaed by Congress. The stakes are high, the data is messy, and the correct answer to 'is this harmful content?' changes depending on which country, culture, and news cycle you're in.",
    requirements: [
      '4+ years of data science experience, ideally in trust & safety, NLP, or adversarial ML',
      'Experience with classification problems at massive scale (millions of decisions per hour)',
      'Strong causal inference skills — you need to prove your interventions work, not just correlate with good outcomes',
      'Comfort with ambiguity (the definition of "harmful content" will change 3 times during your onboarding)',
    ],
    niceToHaves: [
      'Previous experience explaining precision-recall tradeoffs to a Senate subcommittee',
      'Emotional resilience — you will read the worst content on the internet as part of your job',
      'Ability to answer "why didn\'t you catch this?" without saying "because it\'s literally impossible at this scale"',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Meta — Data Scientist, Integrity & Safety application',
        body: `Hi,

Thanks for applying to the Data Scientist role on Meta's Integrity & Safety team.

After careful review, we've decided not to move forward. Our content classifier flagged the following issues with your application:

- Confidence score: 0.62 (below our 0.85 threshold for "qualified candidate")
- Your resume was classified as: "potentially misleading content" (your listed skills may not reflect actual capabilities)
- Appeal status: denied (our appeals process has a 0.1% overturn rate, consistent with our content moderation stats)

We acknowledge there's a 38% chance this rejection is a false positive. Unfortunately, at our scale, we've accepted this error rate.

Best,
Meta Data Science Recruiting`,
      },
    },
  },
  {
    id: 'spotify-ml-engineer',
    companyId: 'spotify',
    category: 'data-science',
    title: 'Machine Learning Engineer — Recommendations',
    location:
      'Stockholm, Sweden or New York, NY (remote-friendly, like our microservice architecture)',
    salary: 'Competitive + the power to influence what 600 million people listen to',
    type: 'Full-time',
    postedDate: '2024-02-19',
    description:
      "Build the recommendation models behind Discover Weekly, Release Radar, and every playlist that knows your mood better than your therapist. You'll work with audio features, listening behavior, and collaborative filtering to surface music people didn't know they wanted — and occasionally, music nobody wants (we're still investigating why the model keeps recommending sea shanties). Your models serve hundreds of millions of users, and one bad deploy can ruin everyone's Monday morning commute.",
    requirements: [
      '4+ years of ML engineering experience, ideally in recommendation systems or information retrieval',
      "Strong Python and Scala skills — our pipeline is a beautiful mix of both and we're not sorry",
      'Experience with large-scale model training and serving (think TensorFlow/PyTorch + distributed compute)',
      'Understanding of collaborative filtering, content-based recommendations, and why combining them is harder than it sounds',
    ],
    niceToHaves: [
      'A theory on why Discover Weekly recommended you that one weird song',
      'Experience with audio feature extraction (MFCCs, spectrograms, or just really good ears)',
      'Can explain the cold-start problem to a musician without making it sound insulting',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Spotify — ML Engineer, Recommendations application',
        body: `Hey,

Thanks for applying to the ML Engineer role at Spotify!

Our recommendation model reviewed your application and, based on your profile, suggested we match you with a different opportunity. Specifically: not this one.

Your Application Wrapped:
🎵 Skills most similar to: "Junior Data Analyst at a mid-size startup" (73% match)
🎵 Skills least similar to: "Senior ML Engineer at Spotify" (12% match)
🎵 Your resume's genre: "Indie Underqualified"
🎵 Top recommendation for you: "Apply to 47 more companies"

Our model has a 94% accuracy rate on candidate success prediction, so we're fairly confident. But hey, even Discover Weekly misses sometimes.

Keep listening,
Spotify ML Recruiting`,
      },
    },
  },
  {
    id: 'google-research-scientist',
    companyId: 'google',
    category: 'data-science',
    title: 'Research Scientist — Google DeepMind',
    location: 'London, UK or Mountain View, CA (wherever the GPUs are)',
    salary: '$200,000 - $450,000 + stock + the chance to be acknowledged in a Nature paper',
    type: 'Full-time',
    postedDate: '2024-02-03',
    description:
      "Push the boundaries of artificial intelligence research at Google DeepMind. You'll publish papers that get 10,000 citations, build models that beat humans at games nobody plays, and attend NeurIPS where everyone will ask you about GPT instead. Your research may or may not be productized — historically, it mostly ends up as a blog post that goes viral on Twitter and a demo that stops working after 3 months.",
    requirements: [
      'PhD in Machine Learning, Computer Science, Neuroscience, Physics, or Mathematics',
      "3+ publications at top-tier venues (NeurIPS, ICML, ICLR, or the Journal of We're Running Out of Acronyms)",
      "Deep expertise in at least one area: reinforcement learning, language models, computer vision, or something we haven't named yet",
      'Experience with large-scale ML training (at least one story about accidentally spending $50K on a GPU cluster overnight)',
    ],
    niceToHaves: [
      'A citation h-index that makes your PhD advisor jealous',
      'Previous experience having your research scooped by OpenAI two weeks before your paper deadline',
      'Comfort with your groundbreaking research being summarized as "Google AI does cool thing" by tech journalists',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Google DeepMind — Research Scientist application',
        body: `Dear Candidate,

Thank you for your interest in the Research Scientist position at Google DeepMind.

Our evaluation committee (comprising 4 PhDs, 2 Fellows of the Royal Society, and an AI model we're testing) has reviewed your application and decided not to proceed.

Key findings:
- Your h-index is 23. The median h-index of our recent hires is 47. We appreciate quality over quantity, but we also appreciate quantity.
- Your most-cited paper has 312 citations. Our minimum threshold is "enough citations that Wikipedia references it."
- You listed PyTorch as your primary framework. We invented JAX. This is not explicitly disqualifying, but it was noted. Twice.

We encourage you to continue publishing and reapply when your research has been featured in at least one existential AI risk op-ed.

Best,
Google DeepMind Recruiting`,
      },
    },
  },
  {
    id: 'amazon-applied-scientist',
    companyId: 'amazon',
    category: 'data-science',
    title: 'Applied Scientist II — Alexa AI',
    location: "Seattle, WA or Sunnyvale, CA (in-office — Alexa will know if you're not here)",
    salary: '$165,000 - $300,000 + stock (vesting schedule: 5% / 15% / 40% / 40%)',
    type: 'Full-time',
    postedDate: '2024-01-16',
    description:
      "Make Alexa smarter — or at least make it stop misunderstanding 'play the news' as 'play the blues.' You'll work on natural language understanding, dialogue systems, and the eternal challenge of making a voice assistant useful beyond setting timers and playing music. Your models will need to handle accents from 40+ countries, background noise from screaming children, and the existential sadness of users who say 'Alexa, am I going to be okay?'",
    requirements: [
      'PhD or MS in Computer Science, Computational Linguistics, or related field',
      '3+ years of experience in NLP, speech recognition, or conversational AI',
      'Publications in relevant venues (ACL, EMNLP, Interspeech, or the Conference of People Who Talk to Machines)',
      'Experience deploying ML models to production at scale (research-only candidates need not apply — this is Amazon, we ship)',
      'Must demonstrate all 16 Leadership Principles in your research methodology',
    ],
    niceToHaves: [
      'Previous experience debugging why a voice assistant ordered 47 dollhouses at 3 AM',
      "Ability to maintain enthusiasm about voice assistants despite owning one that can't turn off your lights reliably",
      'Understanding of why "Alexa, stop" sometimes means "Alexa, play more music louder"',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Amazon — Applied Scientist II, Alexa AI application',
        body: `Dear Candidate,

Thank you for applying to the Applied Scientist II position on the Alexa AI team at Amazon.

"Alexa, should we hire this candidate?"
"I'm sorry, I don't know that one."

After consulting with our human hiring committee (who, unlike Alexa, can process nuanced requests), we've decided not to move forward. Our assessment:

- Your NLU experience is strong, but you failed to reference Customer Obsession in your research statement. At Amazon, even gradient descent should be customer-obsessed.
- Your publication record shows 8 papers. We expected at least 12. We are raising the bar. That's what we do.
- You mentioned using GPT in your research. We have our own models, thank you.

Please reapply after adding "Working Backwards" to your research methodology.

Best,
Amazon Science Recruiting
"Alexa, send rejection."
"Playing 'Rejection' by Marina and the Diamonds."`,
      },
    },
  },
  {
    id: 'stripe-data-scientist',
    companyId: 'stripe',
    category: 'data-science',
    title: 'Data Scientist — Fraud Detection',
    location:
      'San Francisco, CA or Remote (fraudsters work remotely too, so you should understand the environment)',
    salary: '$175,000 - $310,000 (we pay well because getting this wrong costs billions)',
    type: 'Full-time',
    postedDate: '2024-02-07',
    description:
      "Build models that separate legitimate transactions from fraud across millions of businesses in 195 countries. You'll work at the intersection of machine learning and financial crime, where false positives block real purchases and false negatives cost businesses millions. Every model improvement saves real money; every regression makes the front page of Hacker News. The data is massive, the adversaries are adaptive, and the stakes are higher than most ML roles will ever offer.",
    requirements: [
      '4+ years of data science experience, preferably in fraud, risk, or adversarial ML',
      'Strong foundation in classification, anomaly detection, and sequential decision-making',
      'Production ML experience — your models need to make decisions in <100ms, not just perform well in notebooks',
      'SQL fluency and experience with large-scale data pipelines (petabyte-scale, not "my laptop ran out of RAM" scale)',
    ],
    niceToHaves: [
      "Previous experience in a role where your model's errors had direct financial consequences",
      'Understanding of payment ecosystems (card networks, issuing banks, the 47 steps between "buy now" and money moving)',
      'A personal vendetta against fraud (optional but it helps with motivation during on-call)',
    ],
    rejectionContent: {
      'fake-email': {
        subject: 'Stripe — Data Scientist, Fraud Detection application',
        body: `Hi,

Thanks for applying to the Data Scientist role on Stripe's Fraud Detection team.

Our fraud detection model reviewed your application and flagged it as suspicious:

- Risk score: 87/100 (HIGH RISK)
- Flag reason: "Candidate claims 4+ years of ML experience but listed scikit-learn as primary tool. At Stripe scale, this is like bringing a calculator to a supercomputer fight."
- Secondary flag: "Resume optimized suspiciously well for ATS keywords. Pattern consistent with resume-padding behavior."

After manual review, we've confirmed this is not fraud — just a genuine application that doesn't meet our bar. Your application has been declined.

Dispute window: 30 days. Success rate of disputes: 0.02%. (We're very good at what we do.)

Best,
Stripe Data Science Recruiting`,
      },
    },
  },
]
