"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { urls } from "../lib/data";
import { GitHubIcon, LinkedInIcon } from "./icons";

const links = [
  { href: "/", label: "About", index: "01" },
  { href: "/projects", label: "Projects", index: "02" },
  { href: "/cv", label: "CV", index: "03" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="relative border-b-2 border-ink bg-paper/95 backdrop-blur-sm">
        <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="group flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border-2 border-ink bg-apple-yellow font-mono text-sm font-bold shadow-hard-sm transition-transform group-hover:-translate-y-0.5">
              JS
            </span>
            <span className="font-mono text-sm font-bold">
              julian.sibbing
              <span className="animate-blink text-apple-green">▌</span>
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                aria-current={pathname === link.href ? "page" : undefined}
              >
                <span className="mr-1 text-[10px] text-muted">{link.index}</span>
                {link.label}
              </Link>
            ))}
            <span className="h-5 w-px bg-ink/25" aria-hidden="true" />
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

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center border-2 border-ink bg-card shadow-hard-sm transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </nav>

        {open && (
          <div className="absolute inset-x-0 top-full border-b-2 border-ink bg-card shadow-hard md:hidden">
            <div className="mx-auto flex max-w-5xl flex-col px-4 py-2 sm:px-6">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="flex items-baseline gap-3 border-b border-ink/10 py-4 font-mono text-lg font-bold last:border-b-0"
                >
                  <span className="text-xs font-normal text-muted">{link.index}</span>
                  {link.label}
                  {pathname === link.href && <span className="ml-auto text-apple-green">●</span>}
                </Link>
              ))}
              <div className="flex items-center gap-6 py-4">
                <a href={urls.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <GitHubIcon className="h-6 w-6" />
                </a>
                <a href={urls.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <LinkedInIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="rainbow-bar h-1" aria-hidden="true" />
    </header>
  );
}