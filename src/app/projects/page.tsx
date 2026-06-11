import type { Metadata } from "next";
import ProjectCard from "@/components/project-card";
import { projects } from "../lib/data";

export const metadata: Metadata = {
  title: "Projects — Julian Sibbing",
  description: "Things Julian Sibbing has built: web platforms, ML tools, and university projects.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 md:py-20">
      <p className="font-mono text-xs text-muted">02 / PROJECTS</p>
      <h1 className="mt-2 text-4xl font-bold tracking-tighter sm:text-5xl">Things I&apos;ve built</h1>
      <div className="rainbow-bar mt-5 h-1.5 w-28" aria-hidden="true" />
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        A mix of products, university projects and machine learning experiments —{" "}
        {projects.length} builds and counting.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}