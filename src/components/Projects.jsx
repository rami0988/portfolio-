import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Ticket, ScanLine, Briefcase, Sun, UserSearch, ArrowUpRight, ExternalLink, Lock } from "lucide-react";
import { Github } from "./ui/BrandIcons";
import { FEATURED_PROJECTS, MORE_PROJECTS } from "../data/content";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import ProjectModal from "./ProjectModal";

const PROJECT_ICONS = { Ticket, ScanLine, Briefcase, Sun, UserSearch };

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeader
        eyebrow="Projects"
        title="Selected work"
        lead="Five products across event ticketing, HR, clean energy, and recruitment — each taken from problem to shipped app. Open a card for the full story."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED_PROJECTS.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.1} className="h-full">
            <ProjectCard project={project} onOpen={() => setSelected(project)} />
          </Reveal>
        ))}
      </div>

      {/* Earlier builds */}
      <Reveal className="mt-20">
        <h3 className="font-display mb-6 text-xl font-bold text-body">More builds</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {MORE_PROJECTS.map((project) => (
            <article
              key={project.name}
              className="group flex flex-col rounded-xl border border-edge bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-display text-base font-bold text-body">{project.name}</h4>
                <div className="flex gap-2">
                  {project.github && (
                    <IconLink href={project.github} label={`${project.name} on GitHub`}>
                      <Github size={16} />
                    </IconLink>
                  )}
                  {project.demo && (
                    <IconLink href={project.demo} label={`${project.name} screenshots`}>
                      <ExternalLink size={16} />
                    </IconLink>
                  )}
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">{project.desc}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded bg-elevated px-2 py-0.5 text-[11px] font-medium text-muted">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  const Icon = PROJECT_ICONS[project.icon];

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-haspopup="dialog"
      className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-edge bg-surface text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_50px_-12px_var(--glow)]"
    >
      {/* Thumbnail: gradient scene with a floating phone mock */}
      <div
        aria-hidden="true"
        className={`relative flex h-44 items-end justify-center overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
        <div className="relative w-24 translate-y-6 rounded-t-2xl border-4 border-b-0 border-black/70 bg-white/95 pt-2 shadow-2xl transition-transform duration-500 group-hover:-translate-y-0 group-hover:rotate-1 dark:bg-zinc-100">
          <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-black/25" />
          <div className="flex h-24 flex-col items-center gap-1.5 px-2 pt-2">
            <Icon size={22} className="text-zinc-700" />
            <div className="h-1.5 w-12 rounded bg-zinc-300" />
            <div className="h-1.5 w-9 rounded bg-zinc-200" />
            <div className="mt-auto mb-2 h-4 w-14 rounded-full bg-zinc-800" />
          </div>
        </div>
        {project.private && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
            <Lock size={11} /> Client project
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-accent">{project.kind}</p>
        <h3 className="font-display mt-1.5 text-xl font-bold text-body">{project.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded bg-elevated px-2 py-0.5 text-[11px] font-medium text-muted">
              {tag}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent opacity-70 transition-all duration-300 group-hover:gap-2 group-hover:opacity-100">
          Read case study
          <ArrowUpRight size={15} aria-hidden="true" />
        </span>
      </div>
    </button>
  );
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      onClick={(e) => e.stopPropagation()}
      className="rounded p-1 text-muted transition-colors hover:text-accent"
    >
      {children}
    </a>
  );
}
