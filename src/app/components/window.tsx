import React from "react";

interface WindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
}

/** Classic Macintosh System 1 style window: pinstriped title bar, close box, hard shadow. */
export default function Window({ title, children, className = "", bodyClassName = "" }: WindowProps) {
  return (
    <div className={`border-2 border-ink bg-card shadow-hard ${className}`}>
      <div className="relative flex h-9 items-center border-b-2 border-ink bg-card px-2">
        <span className="titlebar-stripes absolute inset-x-2 inset-y-[9px]" aria-hidden="true" />
        <span className="relative z-10 h-3.5 w-3.5 shrink-0 border-2 border-ink bg-card" aria-hidden="true" />
        <span className="relative z-10 mx-auto max-w-[75%] truncate bg-card px-2 font-mono text-xs font-bold">
          {title}
        </span>
        <span className="w-3.5 shrink-0" aria-hidden="true" />
      </div>
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}
