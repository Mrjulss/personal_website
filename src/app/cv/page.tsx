import type { Metadata } from "next";
import Window from "@/components/window";
import SectionHeading from "@/components/section-heading";
import { DownloadIcon, ExternalLinkIcon } from "@/components/icons";
import {
  achievements,
  education,
  experience,
  skillGroups,
  urls,
  volunteering,
} from "../lib/data";

export const metadata: Metadata = {
  title: "CV — Julian Sibbing",
  description:
    "Curriculum Vitae of Julian Sibbing: work experience, education, skills, and achievements.",
};

function TimelineItem({
  period,
  heading,
  subheading,
  bullets,
}: {
  period: string;
  heading: string;
  subheading: string;
  bullets: string[];
}) {
  return (
    <li className="relative border-l-2 border-ink pb-10 pl-6 last:pb-0">
      <span
        className="absolute -left-[7px] top-1 h-3 w-3 border-2 border-ink bg-apple-yellow"
        aria-hidden="true"
      />
      <p className="font-mono text-xs text-muted">{period}</p>
      <h3 className="mt-1 text-lg font-bold tracking-tight">{heading}</h3>
      <p className="font-mono text-sm text-muted">{subheading}</p>
      {bullets.length > 0 && (
        <ul className="mt-3 space-y-1.5">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2 text-sm leading-relaxed text-muted">
              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-ink/40" aria-hidden="true" />
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function CvPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 md:py-20">
      {/* Header */}
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-xs text-muted">03 / CURRICULUM VITAE</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tighter sm:text-5xl">
            The paper trail
          </h1>
          <div className="rainbow-bar mt-5 h-1.5 w-28" aria-hidden="true" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Work, education, and everything in between — last updated June 2026, written
            somewhere between Munich and Seoul.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-4">
          <a href={urls.cv} download className="btn btn-primary">
            <DownloadIcon /> Download PDF
          </a>
          <a href={urls.cv} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <ExternalLinkIcon /> Open
          </a>
        </div>
      </div>

      {/* Experience */}
      <section className="mt-16">
        <SectionHeading index="a" title="Work Experience" />
        <ol className="ml-1">
          {experience.map((job) => (
            <TimelineItem
              key={`${job.company}-${job.period}`}
              period={job.period}
              heading={job.role}
              subheading={`${job.company} · ${job.location}`}
              bullets={job.bullets}
            />
          ))}
        </ol>
      </section>

      {/* Education */}
      <section className="mt-16">
        <SectionHeading index="b" title="Education" />
        <ol className="ml-1">
          {education.map((entry) => (
            <TimelineItem
              key={`${entry.school}-${entry.period}`}
              period={entry.period}
              heading={entry.degree}
              subheading={`${entry.school} · ${entry.location}`}
              bullets={entry.details}
            />
          ))}
        </ol>
      </section>

      {/* Achievements & Volunteering */}
      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <div>
          <SectionHeading index="c" title="Achievements" />
          {achievements.map((achievement) => (
            <div
              key={achievement}
              className="flex items-center gap-4 border-2 border-ink bg-card p-4 shadow-hard"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-ink bg-apple-yellow font-mono text-lg font-bold shadow-hard-sm">
                1
              </span>
              <p className="text-sm font-semibold leading-relaxed">{achievement}</p>
            </div>
          ))}
        </div>
        <div>
          <SectionHeading index="d" title="Volunteering" />
          <ul className="space-y-3">
            {volunteering.map((entry) => (
              <li key={entry} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-ink/40" aria-hidden="true" />
                {entry}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-16">
        <SectionHeading index="e" title="Skills" />
        <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-muted">
                {group.label}
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded original */}
      <section className="mt-16">
        <SectionHeading index="f" title="The Original Document" />
        <Window title="Julian_Sibbing_CV.pdf" className="hidden md:block">
          <object
            data="/Julian_Sibbing_CV.pdf#toolbar=0"
            type="application/pdf"
            className="h-[80vh] w-full"
            aria-label="Embedded PDF of Julian Sibbing's CV"
          >
            <p className="p-6 text-sm text-muted">
              Your browser can&apos;t display embedded PDFs —{" "}
              <a href={urls.cv} className="font-bold text-ink underline">
                download the CV instead
              </a>
              .
            </p>
          </object>
        </Window>
        <div className="border-2 border-ink bg-card p-5 shadow-hard md:hidden">
          <p className="text-sm leading-relaxed text-muted">
            The embedded PDF viewer works best on a bigger screen. On mobile, grab the file
            directly:
          </p>
          <a href={urls.cv} download className="btn btn-primary mt-4">
            <DownloadIcon /> Download PDF
          </a>
        </div>
      </section>
    </div>
  );
}