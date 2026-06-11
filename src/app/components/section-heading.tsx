export default function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center border-2 border-ink bg-card font-mono text-xs font-bold shadow-hard-sm">
        {index}
      </span>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      <div className="h-0.5 flex-1 bg-ink/15" aria-hidden="true" />
    </div>
  );
}