import Reveal from "./Reveal";

/** Eyebrow label + display title used at the top of every section. */
export default function SectionHeader({ eyebrow, title, lead }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="mb-3 flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-accent">
        <span aria-hidden="true" className="h-px w-8 bg-accent-fill" />
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-body md:text-5xl">
        {title}
      </h2>
      {lead && <p className="mt-4 max-w-2xl text-base text-muted md:text-lg">{lead}</p>}
    </Reveal>
  );
}
