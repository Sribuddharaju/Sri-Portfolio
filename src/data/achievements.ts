import type { LucideIcon } from 'lucide-react';
import { Bot, Rocket, Sparkles, Users } from 'lucide-react';

export interface Achievement {
  icon: LucideIcon;
  title: string;
  description: string;
  metric: string;
}

export const achievements: Achievement[] = [
  {
    icon: Users,
    title: 'One Cisco One Experience',
    description:
      'Consolidated processes across 3 Salesforce orgs, unifying workflows for 800+ users.',
    metric: '−40% cross-team handoff delays',
  },
  {
    icon: Sparkles,
    title: 'Metadata-Driven Opportunity UI',
    description:
      'Designed an enterprise UI framework powered by 100+ Custom Metadata records.',
    metric: '−85% UI deployment tickets',
  },
  {
    icon: Bot,
    title: 'AI Sprint Execution Platform',
    description:
      'Built a Next.js / TypeScript platform used by 15+ developers for AI-assisted delivery.',
    metric: '−40% story-to-code cycle time',
  },
  {
    icon: Rocket,
    title: 'Service Cloud at Scale',
    description:
      'Deployed Service Cloud + Enhanced Messaging handling 2,000+ cases & 150+ chats daily.',
    metric: '98% SLA compliance',
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const heroStats: Stat[] = [
  { value: '8+', label: 'Years of experience' },
  { value: '10×', label: 'Certifications' },
  { value: '800+', label: 'Users impacted' },
  { value: '2K+', label: 'Cases / month' },
];
