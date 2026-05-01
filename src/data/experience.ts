export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  bullets: string[];
  tags: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: 'Cisco Systems — ThousandEyes',
    role: 'Senior Salesforce Developer & Technical Lead (SDE 4)',
    location: 'Hyderabad, India',
    start: 'Feb 2024',
    end: 'Present',
    current: true,
    summary:
      'End-to-end Sales & Service Cloud architecture for ThousandEyes (800+ users). Drove One Cisco One Experience migration, AI-assisted tooling, and cross-org integration.',
    bullets: [
      'Lead a team of 7 developers across 3 scrum squads, delivering 35+ user stories per sprint with consistent on-time release cadence.',
      "Drove One Cisco One Experience migration — consolidated ThousandEyes into Cisco's unified Salesforce architecture across 3 orgs, standardizing processes for 800+ users and reducing handoff delays by ~40%.",
      'Migrated triggers and classes to a common factory-pattern framework across 15+ sObjects, reducing duplicate trigger logic by ~60% and regression defects by ~30%.',
      'Built Centralized Data Exchange — hub-and-spoke integration platform syncing 200K+ records bi-directionally across multiple Salesforce orgs with near real-time latency.',
      'Implemented Service Cloud case management handling 2,000+ cases/month with 98% SLA compliance.',
      'Deployed Enhanced Chat (Messaging for In-App & Web) with Omni-Channel routing handling 150+ daily conversations and reducing first-response time by ~35%.',
      'Built agent messaging LWC with real-time translation across 12+ languages via LibreTranslate.',
    ],
    tags: [
      'Apex',
      'LWC',
      'Service Cloud',
      'Sales Cloud',
      'Enhanced Messaging',
      'Tooling API',
      'AI / LLM',
      'Integrations',
    ],
  },
  {
    company: 'Hewlett Packard Enterprise',
    role: 'Salesforce Technical Lead — Service Cloud',
    location: 'Hyderabad, India',
    start: 'Mar 2023',
    end: 'Feb 2024',
    summary:
      "Multi-tenant architecture for HPE's largest Services application (Premier OS) — PSA, Field Service, Case Management & SaaS PMO across 1,200+ users.",
    bullets: [
      "Led a team of 9 developers for HPE's largest Services application, managing 400+ active cases/week across PSA and Falcon tenants.",
      'Implemented multi-tenant Service Cloud in a single org — PSA, Field Service, and Case Management serving 1,200+ internal users across 4 business units.',
      'Developed no-code automations using Flows, replacing ~70% of legacy Apex triggers and reducing maintenance effort by ~25 hours/sprint.',
      'Owned deployment & release management — delivered 8–10 production releases per sprint with Git-based CI/CD and zero rollback incidents over 6 months.',
      'Architected Salesforce DevOps CI/CD pipelines using DevOps Center and GitHub, achieving 2 production releases/week.',
    ],
    tags: ['Service Cloud', 'PSA', 'Field Service', 'Flows', 'DevOps Center', 'CI/CD'],
  },
  {
    company: 'Hewlett Packard Enterprise',
    role: 'Salesforce Developer / Consultant',
    location: 'Hyderabad, India',
    start: 'Oct 2021',
    end: 'Mar 2023',
    summary:
      'IPFolio managed package for IPAS & Legal teams — patent tracking and IP management.',
    bullets: [
      'Built end-to-end IPFolio managed package tracking 3,000+ patents and IDFs across HPE Legal.',
      'Integrated with Power Apps for patent review workflows and built REST APIs serving Python analytics dashboards used by 150+ legal team members.',
      'Developed 20+ custom LWC and Aura components with extensive Flow-based automation, cutting manual data entry by ~50%.',
    ],
    tags: ['LWC', 'Aura', 'Flows', 'REST APIs', 'IPFolio'],
  },
  {
    company: 'Deloitte · IBM India · Tech Mahindra',
    role: 'Salesforce Developer / Consultant',
    location: 'India',
    start: 'Apr 2018',
    end: 'Oct 2021',
    summary:
      'Sales Cloud implementations across enterprise clients — BPCL, Vodafone Idea, Vodafone India.',
    bullets: [
      'Deloitte / BPCL (2021): Developed Sales Buddy on Sales Cloud — lead tracking, opportunity management, and campaign workflows managing 8,000+ leads.',
      'IBM / Vodafone Idea (2020–2021): Delivered Lightning Aura components and Apex customizations for Sales Cloud; led requirement gathering with stakeholders.',
      'Tech Mahindra / Vodafone India (2018–2020): Executed end-to-end Siebel-to-Salesforce CRM migration — migrated 500K+ customer records.',
    ],
    tags: ['Sales Cloud', 'Aura', 'Apex', 'Data Migration', 'Siebel'],
  },
];
