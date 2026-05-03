import { Section } from '@/components/ui/Section';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured work"
      title={
        <>
          Platforms, frameworks &amp;{' '}
          <span className="text-gradient">AI-powered tooling.</span>
        </>
      }
      description="The flagship initiatives I've led — from metadata-first architectures to AI-augmented developer experiences. Tap “View architecture” on any card for an animated diagram of how it works under the hood."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </Section>
  );
}
