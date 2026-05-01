export interface Certification {
  id: string;
  name: string;
  issuer: string;
  shortIssuer: string;
  category: 'salesforce' | 'agile' | 'ai' | 'devops';
  year?: string;
}

export const certifications: Certification[] = [
  {
    id: 'sf-ai-specialist',
    name: 'Salesforce Certified AI Specialist',
    issuer: 'Salesforce',
    shortIssuer: 'SF',
    category: 'salesforce',
  },
  {
    id: 'sf-pd1',
    name: 'Salesforce Certified Platform Developer I',
    issuer: 'Salesforce',
    shortIssuer: 'SF',
    category: 'salesforce',
  },
  {
    id: 'sf-app-builder',
    name: 'Salesforce Certified Platform App Builder',
    issuer: 'Salesforce',
    shortIssuer: 'SF',
    category: 'salesforce',
  },
  {
    id: 'sf-admin',
    name: 'Salesforce Certified Administrator (SCA)',
    issuer: 'Salesforce',
    shortIssuer: 'SF',
    category: 'salesforce',
  },
  {
    id: 'sf-ai-associate',
    name: 'Salesforce Certified AI Associate',
    issuer: 'Salesforce',
    shortIssuer: 'SF',
    category: 'ai',
  },
  {
    id: 'psm',
    name: 'Professional Scrum Master (PSM)',
    issuer: 'Scrum.org',
    shortIssuer: 'PSM',
    category: 'agile',
  },
  {
    id: 'claude-code',
    name: 'Claude Code in Action',
    issuer: 'Anthropic',
    shortIssuer: 'AI',
    category: 'ai',
  },
  {
    id: 'copado-ext',
    name: 'Copado Certified — Extension Builder',
    issuer: 'Copado',
    shortIssuer: 'CP',
    category: 'devops',
  },
  {
    id: 'copado-rt',
    name: 'Copado Certified — Robotic Testing',
    issuer: 'Copado',
    shortIssuer: 'CP',
    category: 'devops',
  },
  {
    id: 'copado-fund',
    name: 'Copado Certified — Fundamentals I & II',
    issuer: 'Copado',
    shortIssuer: 'CP',
    category: 'devops',
  },
];

export const certificationCategories = {
  salesforce: { label: 'Salesforce', color: 'brand' },
  ai: { label: 'AI', color: 'cyan' },
  agile: { label: 'Agile', color: 'violet' },
  devops: { label: 'DevOps', color: 'pink' },
} as const;
