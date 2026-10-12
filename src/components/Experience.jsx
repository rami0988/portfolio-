import { Award, Languages } from "lucide-react";
import { EXPERIENCE, CREDENTIALS } from "../data/content";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

/** Vertical timeline with scroll-triggered reveals. */
export default function Experience() {
  return (
    <section id="experience" className="border-y border-edge bg-surface/50">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeader eyebrow="Experience" title="The road so far" />

        <ol className="relative ml-2 border-l border-edge">
          {EXPERIENCE.map((entry, i) => (
            <li key={`${entry.period}-${entry.role}`} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
              {/* Timeline node */}
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent-fill shadow-[0_0_0_4px_var(--glow)]"
              />
              <Reveal delay={i * 0.08}>
                <p className="text-xs font-semibold tracking-widest uppercase text-accent">{entry.period}</p>
                <h3 className="font-display mt-1.5 text-xl font-bold text-body">{entry.role}</h3>
                <p className="mt-0.5 text-sm font-medium text-muted">{entry.org}</p>
                <ul className="mt-4 space-y-2">
                  {entry.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-[7px] h-1 w-3 shrink-0 rounded-full bg-accent-fill/60" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Certifications & languages */}
        <Reveal delay={0.1}>
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-edge bg-bg p-6">
              <h3 className="font-display mb-4 flex items-center gap-2.5 text-lg font-bold text-body">
                <Award size={19} className="text-accent" aria-hidden="true" />
                Certifications
              </h3>
              <ul className="space-y-2.5">
                {CREDENTIALS.certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                    <span aria-hidden="true" className="mt-[7px] h-1 w-3 shrink-0 rounded-full bg-accent-fill/60" />
                    {cert}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-edge bg-bg p-6">
              <h3 className="font-display mb-4 flex items-center gap-2.5 text-lg font-bold text-body">
                <Languages size={19} className="text-accent" aria-hidden="true" />
                Languages
              </h3>
              <dl className="space-y-3">
                {CREDENTIALS.languages.map(({ name, level }) => (
                  <div key={name} className="flex flex-wrap items-baseline gap-x-3">
                    <dt className="text-sm font-semibold text-body">{name}</dt>
                    <dd className="text-sm text-muted">{level}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
