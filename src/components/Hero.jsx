import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";
import { PROFILE, HERO_WORDS } from "../data/content";
import Magnetic from "./ui/Magnetic";
import { Github, Linkedin } from "./ui/BrandIcons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.65, 0.35, 1] } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-svh items-center overflow-hidden">
      {/* Decorative background: grid + drifting aurora blobs (CSS-only). */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="hero-grid absolute inset-0" />
        <div className="aurora-blob left-[8%] top-[12%] h-72 w-72 bg-lime-400/25 dark:bg-lime-400/15" />
        <div
          className="aurora-blob right-[6%] top-[30%] h-96 w-96 bg-emerald-500/20 dark:bg-emerald-500/12"
          style={{ animationDelay: "-8s" }}
        />
        <div
          className="aurora-blob bottom-[8%] left-[38%] h-80 w-80 bg-sky-500/15 dark:bg-sky-500/10"
          style={{ animationDelay: "-16s" }}
        />
      </div>

      <motion.div
        variants={container}
        initial={reduce ? false : "hidden"}
        animate="show"
        className="mx-auto w-full max-w-6xl px-5 pb-20 pt-32 md:px-8"
      >
        <motion.p
          variants={item}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-edge bg-surface/70 px-4 py-1.5 text-sm font-medium text-muted backdrop-blur"
        >
          <span aria-hidden="true" className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-fill opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-fill" />
          </span>
          Open to relocation &amp; international opportunities
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-body sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {PROFILE.name.split(" ")[0]}
          <span className="text-accent">.</span>
          <br />
          <span className="text-muted">I build mobile apps</span>
          <br />
          that <RotatingWord />
        </motion.h1>

        <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {PROFILE.role} — {PROFILE.tagline}. Flutter, Clean Architecture, and
          Bloc/GetX, with payment gateways, Firebase, and REST backends. From
          first wireframe to store release.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <Magnetic>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-btn px-7 py-3.5 text-sm font-semibold text-btn-text shadow-lg shadow-black/10 transition-shadow hover:shadow-xl hover:shadow-[var(--glow)]"
            >
              View my work
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={PROFILE.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-edge bg-surface/70 px-7 py-3.5 text-sm font-semibold text-body backdrop-blur transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Download size={16} aria-hidden="true" />
              Download CV
            </a>
          </Magnetic>
        </motion.div>

        <motion.div variants={item} className="mt-12 flex items-center gap-5" aria-label="Social links">
          <SocialLink href={PROFILE.github} label="GitHub profile"><Github size={20} /></SocialLink>
          <SocialLink href={PROFILE.linkedin} label="LinkedIn profile"><Linkedin size={20} /></SocialLink>
          <SocialLink href={`mailto:${PROFILE.email}`} label={`Email ${PROFILE.name}`}><Mail size={20} /></SocialLink>
          <span aria-hidden="true" className="h-px w-16 bg-edge" />
          <span className="text-xs font-medium tracking-widest uppercase text-muted">Flutter · Dart · Firebase</span>
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
      >
        <ChevronDown size={22} className="animate-bounce motion-reduce:animate-none" aria-hidden="true" />
      </a>
    </section>
  );
}

/** Cycles the last word of the headline. Static for reduced motion. */
function RotatingWord() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % HERO_WORDS.length), 2600);
    return () => clearInterval(id);
  }, [reduce]);

  if (reduce) return <span className="text-accent">{HERO_WORDS[0]}.</span>;

  return (
    <span className="relative inline-flex text-accent">
      <AnimatePresence mode="wait">
        <motion.span
          key={HERO_WORDS[index]}
          initial={{ opacity: 0, y: "0.4em" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-0.4em" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {HERO_WORDS[index]}.
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noreferrer"
      aria-label={label}
      className="rounded-lg p-1 text-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-accent"
    >
      {children}
    </a>
  );
}
