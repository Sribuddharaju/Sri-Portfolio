import { Modal } from '@/components/ui/Modal';
import type { ProjectItem } from '@/data/projects';
import { CommandCenterDiagram } from './diagrams/CommandCenterDiagram';
import { GcpToLwrMigrationDiagram } from './diagrams/GcpToLwrMigrationDiagram';
import { NativeReactLwrDiagram } from './diagrams/NativeReactLwrDiagram';
import { AiDebugAssistantDiagram } from './diagrams/AiDebugAssistantDiagram';
import { MetadataUiDiagram } from './diagrams/MetadataUiDiagram';
import { EnhancedMessagingDiagram } from './diagrams/EnhancedMessagingDiagram';
import { SalesforceJiraDiagram } from './diagrams/SalesforceJiraDiagram';

interface ArchitectureViewerProps {
  open: boolean;
  onClose: () => void;
  project: ProjectItem;
}

const ACCENT_GRADIENT: Record<ProjectItem['accent'], string> = {
  brand: 'from-brand-500 to-cyan-500',
  cyan: 'from-cyan-500 to-emerald-500',
  violet: 'from-violet-500 to-fuchsia-500',
  pink: 'from-pink-500 to-rose-500',
  emerald: 'from-emerald-500 to-teal-500',
};

/**
 * Routes a project id to its hand-authored architecture diagram, rendered
 * inside an accessible modal. Only the projects we have diagrams for show
 * the viewer trigger upstream.
 */
function diagramFor(id: ProjectItem['id']) {
  switch (id) {
    case 'sfdc-command-center':
      return <CommandCenterDiagram />;
    case 'gcp-to-lwr-migration':
      return <GcpToLwrMigrationDiagram />;
    case 'native-react-on-lwr':
      return <NativeReactLwrDiagram />;
    case 'ai-debug-assistant':
      return <AiDebugAssistantDiagram />;
    case 'metadata-ui':
      return <MetadataUiDiagram />;
    case 'enhanced-messaging':
      return <EnhancedMessagingDiagram />;
    case 'salesforce-jira':
      return <SalesforceJiraDiagram />;
    default:
      return null;
  }
}

export function ArchitectureViewer({ open, onClose, project }: ArchitectureViewerProps) {
  const diagram = diagramFor(project.id);

  return (
    <Modal
      open={open}
      onClose={onClose}
      eyebrow={<>Architecture · {project.subtitle}</>}
      title={project.title}
      size="xl"
      accentClass={ACCENT_GRADIENT[project.accent]}
      footer={
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>
      }
    >
      {diagram ?? (
        <div className="grid place-items-center py-16 text-sm text-ink-500 dark:text-ink-400">
          Architecture diagram coming soon.
        </div>
      )}
    </Modal>
  );
}

export default ArchitectureViewer;
