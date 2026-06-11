import Image from "next/image";
import Link from "next/link";
import Window from "./components/window";
import ProjectCard from "./components/project-card";
import SectionHeading from "./components/section-heading";
import { ArrowRightIcon } from "./components/icons";
import { featuredSlugs, projects } from "./lib/data";

const highlights = [
  {
    period: "Oct 2025 – Jan 2026",
    title: "Backend Engineer @ Pactos",
    detail: "TUM x Center for Software Engineering Excellence — MVP features into stable services.",
    accent: "bg-apple-green",
  },
  {
    period: "Jan 2025 – Jan 2026",
    title: "Working Student @ Check24",
    detail: "Microservices and REST APIs for banking interfaces in a large-scale platform.",
    accent: "bg-apple-blue",
  },
  {
    period: "Mar 2025",
    title: "START HACK Munich — 1st Place",
    detail: "Winner of the Lio AI Procurement Challenge.",
    accent: "bg-apple-yellow",
  },
];

export default function Home() {
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
      {/* Hero */}
      <section className="grid items-center gap-10 py-14 md:grid-cols-[1.2fr_1fr] md:py-24">
        <div className="min-w-0">
          <span className="inline-flex max-w-full items-center gap-2 border-2 border-ink bg-card px-3 py-1 font-mono text-xs shadow-hard-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-apple-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-apple-green" />
            </span>
            M.Sc. @ TUM · on exchange @ SNU
          </span>

          <h1 className="mt-6 text-5xl font-bold tracking-tighter sm:text-6xl lg:text-7xl">
            Julian Sibbing
          </h1>
          <div className="rainbow-bar mt-5 h-1.5 w-28" aria-hidden="true" />

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I build software at the intersection of{" "}
            <strong className="font-semibold text-ink">engineering</strong>,{" "}
            <strong className="font-semibold text-ink">machine learning</strong> and{" "}
            <strong className="font-semibold text-ink">product</strong> — shipping things,
            learning fast, and enjoying the process.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/projects" className="btn btn-primary">
              View projects <ArrowRightIcon />
            </Link>
            <Link href="/cv" className="btn btn-secondary">
              Read my CV
            </Link>
          </div>
        </div>

        <Window title="julian.jpeg" className="mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative aspect-square w-full">
            <Image
              src="/main.jpeg"
              alt="Julian Sibbing sitting on a mountain ridge above the clouds"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <p className="border-t-2 border-ink px-3 py-2 font-mono text-[11px] text-muted">
            zugspitze.massif — somewhere above the clouds
          </p>
        </Window>
      </section>

      {/* Highlights */}
      <section className="py-10">
        <SectionHeading index="01" title="Now & Recently" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="border-2 border-ink bg-card shadow-hard transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard-lg"
            >
              <div className={`h-1.5 ${h.accent}`} aria-hidden="true" />
              <div className="p-4">
                <p className="font-mono text-[11px] text-muted">{h.period}</p>
                <h3 className="mt-1 font-bold tracking-tight">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{h.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-10">
        <SectionHeading index="02" title="Selected Projects" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link href="/projects" className="btn btn-secondary">
            All projects <ArrowRightIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}