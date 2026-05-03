import type { LucideIcon } from 'lucide-react';
import {
  Atom,
  Bot,
  CloudCog,
  GitMerge,
  LayoutDashboard,
  MessageSquare,
  Workflow,
} from 'lucide-react';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  stack: string[];
  description: string;
  metrics: { label: string; value: string }[];
  bullets: string[];
  accent: 'brand' | 'cyan' | 'violet' | 'pink' | 'emerald';
}

export const projects: ProjectItem[] = [
  {
    id: 'native-react-on-lwr',
    title: 'Native React App on Salesforce LWR',
    subtitle: 'First-of-its-kind React experience inside Lightning Web Runtime',
    icon: Atom,
    accent: 'cyan',
    stack: [
      'React 18',
      'TypeScript',
      'Lightning Web Runtime (LWR)',
      'Lightning Web Components',
      'Salesforce DX',
      'Apex',
      'Tailwind-style design system',
    ],
    description:
      'Designed and built a fully native React application that runs *inside* Salesforce LWR — bypassing the standard Aura/LWC shell and giving the team a modern React surface that still inherits Salesforce session, security, and identity.',
    metrics: [
      { label: 'Hosted directly in', value: 'Salesforce LWR' },
      { label: 'Time-to-first-paint', value: '< 1.2s' },
      { label: 'Lighthouse perf', value: '95+' },
      { label: 'Reusable React modules', value: '20+' },
    ],
    bullets: [
      'Authored a custom LWR module + manifest pipeline so the React bundle ships through SFDX without leaving the Salesforce trust boundary.',
      'Built a shared React component library (forms, tables, charts, modals) consumed across multiple LWR apps with zero CSS conflicts inside Lightning.',
      'Wired React Query + Apex REST + Connect API behind a typed data layer so every fetch participates in Salesforce permissions and CRUD/FLS.',
    ],
  },
  {
    id: 'gcp-to-lwr-migration',
    title: 'Command Center: GCP → Salesforce LWR',
    subtitle: 'Brought our flagship AI sprint platform home, inside Salesforce',
    icon: CloudCog,
    accent: 'violet',
    stack: [
      'React 18',
      'Next.js → LWR',
      'GCP Cloud Run',
      'Salesforce LWR',
      'Apex',
      'Named Credentials',
      'SFDX',
      'GitHub Actions',
    ],
    description:
      'Led the migration of the SFDC Command Center from GCP Cloud Run into Salesforce-hosted LWR — eliminating cross-cloud auth, halving infra bills, and putting the experience right next to the data and users it operates on.',
    metrics: [
      { label: 'Infra cost', value: '−55%' },
      { label: 'Cross-cloud auth hops', value: 'eliminated' },
      { label: 'p95 API latency', value: '−42%' },
      { label: 'Release cadence', value: '2× faster' },
    ],
    bullets: [
      'Refactored REST clients to use Salesforce session instead of GCP service accounts — every call now flows through Named Credentials with proper user context.',
      'Replaced ad-hoc CI on GCP with a SFDX-aware GitHub Actions pipeline: lint → unit → LWR build → scratch-org smoke → push to packaging org.',
      'Re-platformed observability: structured logs and request IDs piped into Salesforce custom objects and Splunk in parallel during the cutover.',
      'Zero-downtime cutover via a feature-flagged dual-write window with automated reconciliation reports.',
    ],
  },
  {
    id: 'sfdc-command-center',
    title: 'SFDC Command Center',
    subtitle: 'AI-Powered Sprint Execution & Org Intelligence (now native to Salesforce LWR)',
    icon: LayoutDashboard,
    accent: 'brand',
    stack: [
      'React 18',
      'TypeScript',
      'Salesforce LWR',
      'Tailwind',
      'jsforce',
      'Firestore',
      'Playwright',
      'Webex Bot SDK',
      'Cisco Circuit LLM',
    ],
    description:
      'Full-stack sprint execution platform integrating User Stories with AI-powered solution generation, dual-strategy code search, and an Org Explorer over the Tooling API. Originally launched on GCP Cloud Run; now runs natively inside Salesforce LWR.',
    metrics: [
      { label: 'Story-to-code cycle time', value: '−40%' },
      { label: 'Metadata components indexed', value: '18K+' },
      { label: 'Monthly LLM API calls', value: '50K+' },
      { label: 'LLM cost reduction', value: '~45%' },
    ],
    bullets: [
      'Dual-strategy code search: Fast Search (metadata agent) and Deep Search (vector + exact + intent retrieval) with incremental & full indexing pipelines.',
      'Org Explorer over Tooling API — metadata dependency graph with progressive expansion, permission analysis, and Flow version-aware tracking across 500+ Flows.',
      'Webex bot integration with strict prod/sandbox session routing — processes 100+ bot interactions/week.',
      'Automated story testing via Webex (UI / backend classification), Playwright execution, screenshots, and posted results.',
      'Central prompt registry with per-user Firestore overrides and 3-tier model routing (premium / mid / nano).',
      'AI token usage analytics — per-user tracking, daily rollups, and a team leaderboard.',
    ],
  },
  {
    id: 'ai-debug-assistant',
    title: 'AI Debug Assistant',
    subtitle: 'Cisco Circuit LLM × Salesforce',
    icon: Bot,
    accent: 'cyan',
    stack: ['Apex', 'LWC', 'Cisco Circuit LLM', 'Tooling API', 'REST', 'Named Credentials'],
    description:
      'AI Debug Assistant LWC that captures debug logs via the Tooling API, sends them to Cisco Circuit LLM via OAuth2 REST, and returns plain-language root-cause analysis — including multimodal screenshot analysis.',
    metrics: [
      { label: 'Avg. debug time', value: '45m → 15m' },
      { label: 'Debug time reduction', value: '~65%' },
      { label: 'Edge cases resolved (multimodal)', value: '+20%' },
      { label: 'Incident creation', value: '10m → 2m' },
    ],
    bullets: [
      'Multimodal screenshot analysis processes both text logs and images for richer diagnostics.',
      'Smart log chunking handles up to 20 MB — full content for small logs, head/tail extraction for large ones to stay within token limits.',
      'Incident ticketing workflow attaches debug logs as ContentVersion records.',
    ],
  },
  {
    id: 'metadata-ui',
    title: 'Metadata-Driven Opportunity UI',
    subtitle: 'Architecture & Reusable Framework',
    icon: Workflow,
    accent: 'violet',
    stack: ['Apex', 'LWC', 'Custom Metadata Types', 'Formula Evaluation'],
    description:
      'Fully metadata-driven Opportunity page — 100+ CMDT records control layout, sections, buttons, headers, and visibility rules with zero hardcoded logic.',
    metrics: [
      { label: 'CMDT-driven UI tickets', value: '−85%' },
      { label: 'Admin self-service of UI changes', value: '90%' },
      { label: 'Dynamic rules per page load', value: '30+ in <200ms' },
    ],
    bullets: [
      'Formula-based visibility engine in Apex (AND, OR, ISPICKVAL, ISBLANK) with JSON criteria and field-level security allowlists.',
      'Reusable shell pattern: FlexiPage → Wrapper → Shell → Apex Service → CMDT — new fields/stages added via metadata only.',
      'Migrated 25+ legacy workflows to optimized Flows and Apex.',
    ],
  },
  {
    id: 'enhanced-messaging',
    title: 'Enhanced Messaging + Real-Time Translation',
    subtitle: 'Service Cloud Agent Experience',
    icon: MessageSquare,
    accent: 'emerald',
    stack: ['LWC', 'Apex', 'Conversation API', 'LibreTranslate', 'Omni-Channel', 'Flows'],
    description:
      'Agent messaging LWC with real-time translation across 12+ languages — auto-detects customer language, shows English to agents, and translates replies back to the customer.',
    metrics: [
      { label: 'Daily conversations', value: '150+' },
      { label: 'First-response time', value: '−35%' },
      { label: 'Languages supported', value: '12+' },
      { label: 'SLA compliance', value: '98%' },
    ],
    bullets: [
      'Conversation Data API + Flow-backed Send Message actions with 4-second polling — reducing manual context-switching by ~50%.',
      'Assignment rules, escalation policies, entitlement processes, and SLA milestones across 2,000+ cases/month.',
    ],
  },
  {
    id: 'salesforce-jira',
    title: 'Salesforce ↔ Jira Integration',
    subtitle: 'Bi-directional REST + Webhooks',
    icon: GitMerge,
    accent: 'pink',
    stack: ['Apex', 'REST API', 'Named Credentials', 'Platform Events'],
    description:
      'Salesforce-to-Jira REST integration that automates issue links from Cases, with bi-directional status sync and comment mirroring.',
    metrics: [
      { label: 'Issue links / month', value: '200+' },
      { label: 'Manual entry saved', value: '~12 hrs/wk' },
      { label: 'Sync reliability', value: '99.5%' },
    ],
    bullets: [
      'Agents create, link, and track Jira issues directly from Cases.',
      'Bi-directional status sync and comment mirroring via webhook-based event handling.',
    ],
  },
];
