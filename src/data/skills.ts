import type { LucideIcon } from 'lucide-react';
import {
  Cloud,
  Cpu,
  Database,
  GitBranch,
  Layers,
  Plug,
  Sparkles,
  Code2,
} from 'lucide-react';

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'salesforce',
    title: 'Salesforce Platform',
    icon: Cloud,
    description: 'Core declarative & programmatic stack',
    items: [
      'Apex',
      'LWC',
      'Aura',
      'Flows',
      'SOQL / SOSL',
      'Triggers',
      'Custom Metadata',
      'Platform Events',
      'Change Data Capture',
      'Visualforce',
    ],
  },
  {
    id: 'clouds',
    title: 'Salesforce Clouds',
    icon: Layers,
    description: 'Enterprise cloud capabilities I architect across',
    items: [
      'Sales Cloud',
      'Service Cloud',
      'Experience Cloud',
      'Enhanced Messaging',
      'Agentforce',
      'Data Cloud',
      'DevOps Center',
      'CPQ',
    ],
  },
  {
    id: 'ai',
    title: 'AI & Tooling',
    icon: Sparkles,
    description: 'LLM-powered developer experience & agent tooling',
    items: [
      'Cisco Circuit LLM',
      'Cursor IDE',
      'Einstein AI',
      'Prompt Engineering',
      'Vector / Intent Indexing',
      'LibreTranslate',
    ],
  },
  {
    id: 'integrations',
    title: 'Integrations',
    icon: Plug,
    description: 'Reliable bi-directional, event-driven integrations',
    items: [
      'REST / SOAP',
      'Tooling API',
      'Conversation API',
      'Jira',
      'Amazon S3',
      'Webex Bot SDK',
      'GitHub API',
      'Confluence',
      'Named Credentials',
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Delivery',
    icon: GitBranch,
    description: 'CI/CD, release engineering, automated quality',
    items: [
      'SFDX',
      'DevOps Center',
      'Copado',
      'Git / GitHub',
      'GCP',
      'Docker',
      'CI/CD',
      'Playwright',
      'Scrum / Agile',
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2,
    description: 'Day-to-day languages across stacks',
    items: ['Apex', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML / CSS', 'Java'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    icon: Cpu,
    description: 'Productive UI & backend stacks',
    items: [
      'Next.js 14',
      'React 18',
      'Tailwind CSS',
      'shadcn/ui',
      'jsforce',
      'Node.js',
      'Firestore',
    ],
  },
  {
    id: 'data',
    title: 'Data & Analytics',
    icon: Database,
    description: 'Operational analytics and data movement',
    items: [
      '200K+ records bi-directional sync',
      '18K+ metadata components indexed',
      '50K+ monthly LLM calls instrumented',
    ],
  },
];
