import Image from "next/image";
import Window from "./window";
import type { Project } from "../lib/data";
import { ExternalLinkIcon } from "./icons";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const card = (
    <Window
      title={project.slug}
      className="h-full transition-all duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-hard-lg"
      bodyClassName="flex h-[calc(100%-2.25rem)] flex-col"
    >
      <div className="relative h-40 w-full border-b-2 border-ink bg-paper">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={project.imageContain ? "object-contain p-4" : "object-cover"}
          />
        ) : (
          <div className="deco-stripes flex h-full w-full items-center justify-center">
            <span className="font-mono text-5xl font-bold text-ink/15">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="font-mono text-[11px] text-muted">{project.period}</p>
        <h3 className="mt-1 flex items-center gap-2 text-lg font-bold tracking-tight">
          {project.title}
          {project.href && <ExternalLinkIcon className="h-3.5 w-3.5 text-muted" />}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Window>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
      >
        {card}
      </a>
    );
  }

  return <div className="group h-full">{card}</div>;
}
