import { Smartphone, Server, Wrench } from "lucide-react";
import { SKILL_GROUPS } from "../data/content";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";

const ICONS = { Smartphone, Server, Wrench };

export default function Skills() {
  return (
    <section id="skills" className="border-y border-edge bg-surface/50">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeader
          eyebrow="Skills"
          title="The toolkit"
          lead="Mobile is the core. Backend, web, and AI keep the whole product moving."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = ICONS[group.icon];
            return (
              <Reveal key={group.title} delay={i * 0.1} className="h-full">
                <article className="group flex h-full flex-col rounded-2xl border border-edge bg-bg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_40px_-12px_var(--glow)]">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-elevated text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-body">{group.title}</h3>
                  <p className="mt-1 mb-5 text-sm text-muted">{group.blurb}</p>
                  <ul className="mt-auto flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-md border border-edge bg-surface px-2.5 py-1 text-xs font-medium text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
