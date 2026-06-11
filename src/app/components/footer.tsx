import { urls } from "../lib/data";
import { GitHubIcon, LinkedInIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="mt-20 border-t-2 border-ink bg-card">
      <div className="rainbow-bar h-1" aria-hidden="true" />
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center">
        <div>
          <p className="font-mono text-sm font-bold">julian.sibbing</p>
          <p className="mt-1 font-mono text-xs text-muted">
            © {new Date().getFullYear()} Julian Sibbing · Munich → Seoul
          </p>
        </div>
        <div className="flex items-center gap-5">
          <a href={urls.email} className="nav-link">
            say hi →
          </a>
          <a
            href={urls.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-transform hover:-translate-y-0.5"
          >
            <GitHubIcon />
          </a>
          <a
            href={urls.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-transform hover:-translate-y-0.5"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}