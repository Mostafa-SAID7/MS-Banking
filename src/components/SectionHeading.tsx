import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center mb-14">
      <span className="inline-flex items-center gap-2 rounded-full border border-border glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <span className="h-1 w-1 rounded-full bg-gold" /> {eyebrow}
      </span>
      <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-base md:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
