import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { X, ExternalLink, AlertCircle, Lightbulb, TrendingUp } from "lucide-react";
import { Github } from "./ui/BrandIcons";

/**
 * Case-study dialog: problem → solution → result.
 * Accessible: role=dialog, Esc/overlay close, focus moves in on open
 * and back to the trigger on close (browser restores it automatically
 * since the trigger button stays mounted).
 */
export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 48, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: 48, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.21, 0.65, 0.35, 1] }}
        className="max-h-[88svh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-edge bg-bg shadow-2xl sm:rounded-3xl"
      >
        {/* Header */}
        <div className={`relative bg-gradient-to-br ${project.gradient} px-6 pb-6 pt-8 sm:px-8`}>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="absolute right-4 top-4 rounded-full bg-black/30 p-2 text-white backdrop-blur transition-transform hover:scale-105 active:scale-95"
          >
            <X size={18} />
          </button>
          <p className="text-xs font-semibold tracking-widest uppercase text-white/80">{project.kind}</p>
          <h2 id="project-modal-title" className="font-display mt-1 text-3xl font-bold text-white">
            {project.name}
          </h2>
          <p className="mt-1 max-w-md text-sm text-white/85">{project.tagline}</p>
        </div>

        <div className="space-y-7 px-6 py-7 sm:px-8">
          <Block icon={AlertCircle} label="Problem">
            <p className="text-sm leading-relaxed text-muted">{project.problem}</p>
          </Block>

          <Block icon={Lightbulb} label="Solution">
            <p className="text-sm leading-relaxed text-muted">{project.solution}</p>
          </Block>

          <Block icon={TrendingUp} label="Result">
            <ul className="space-y-2">
              {project.results.map((result) => (
                <li key={result} className="flex items-start gap-2.5 text-sm text-muted">
                  <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-fill" />
                  {result}
                </li>
              ))}
            </ul>
          </Block>

          <div className="flex flex-wrap items-center gap-2 border-t border-edge pt-6">
            <ul className="flex flex-wrap gap-1.5" aria-label="Technologies used">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded bg-elevated px-2 py-1 text-[11px] font-medium text-muted">
                  {tag}
                </li>
              ))}
            </ul>
            <div className="ml-auto flex gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-edge px-4 py-2 text-xs font-semibold text-body transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Github size={14} aria-hidden="true" /> Code
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-edge px-4 py-2 text-xs font-semibold text-body transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <ExternalLink size={14} aria-hidden="true" /> Screenshots
                </a>
              )}
              {project.private && !project.links.github && (
                <p className="self-center text-xs text-muted">Source private — built for a client.</p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Block({ icon: Icon, label, children }) {
  return (
    <div>
      <h3 className="mb-2.5 flex items-center gap-2 text-sm font-bold tracking-wide uppercase text-body">
        <Icon size={16} className="text-accent" aria-hidden="true" />
        {label}
      </h3>
      {children}
    </div>
  );
}
