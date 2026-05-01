export const profile = {
  name: 'Sri Ramachandra Raju Buddharaju',
  shortName: 'Sri Buddharaju',
  initials: 'SB',
  headline: 'Senior Salesforce Developer & Technical Lead',
  subheadline: 'Sales Cloud · Service Cloud · AI Integration',
  location: 'Hyderabad, India',
  email: 'siddhubuddharaju@gmail.com',
  phone: '+91 8523080380',
  yearsExperience: 8,
  certificationCount: 10,
  links: {
    linkedin: 'https://www.linkedin.com/in/sri-buddharaju/',
    github: 'https://github.com/Sribuddharaju',
    email: 'mailto:siddhubuddharaju@gmail.com',
    resume: '/Sri_Buddharaju_Resume.pdf',
  },
  summary:
    "Salesforce Technical Lead and Architect with 8+ years delivering enterprise Sales Cloud and Service Cloud solutions for Fortune 100 companies including Cisco, HPE, and Deloitte clients. Currently leading a 7-member team at Cisco ThousandEyes, where I drove a multi-org consolidation impacting 800+ users, built a metadata-driven UI framework eliminating UI deployment overhead, and developed AI-powered developer tools that reduced average debug time by ~65%.",
  highlights: [
    '10x Certified (incl. AI Specialist & PSM)',
    'Architecture-first mindset',
    'Metadata-driven, AI-augmented delivery',
  ],
} as const;

export type Profile = typeof profile;
