import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ABOUT, PROFILE } from "../data/content";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import portrait from "../assets/me.jpg";

const STACK_BADGES = [
  "Flutter", "Dart", "Bloc / Cubit", "GetX", "Firebase", "REST APIs",
  "Clean Architecture", "HyperPay", "NFC & QR", "Localization & RTL",
];

export default function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeader eyebrow="About" title="Engineer first, pixel-perfectionist second." />

      <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
        {/* Portrait with offset accent frame */}
        <Reveal className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div
            aria-hidden="true"
            className="absolute -inset-3 translate-x-3 translate-y-3 rounded-2xl border-2 border-accent-fill/60"
          />
          <img
            src={portrait}
            alt={`Portrait of ${PROFILE.name}`}
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-2xl border border-edge object-cover"
          />
        </Reveal>

        <div>
          {ABOUT.bio.map((paragraph) => (
            <Reveal key={paragraph.slice(0, 24)} className="mb-5">
              <p className="text-base leading-relaxed text-muted md:text-lg">{paragraph}</p>
            </Reveal>
          ))}

          <Reveal delay={0.1}>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {ABOUT.highlights.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-body">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Stack badges pop in one by one on scroll */}
          <motion.ul
            className="mt-8 flex flex-wrap gap-2"
            initial={reduce ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ show: { transition: { staggerChildren: 0.05 } } }}
            aria-label="Core technologies"
          >
            {STACK_BADGES.map((badge) => (
              <motion.li
                key={badge}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "backOut" } },
                }}
                className="rounded-full border border-edge bg-surface px-3.5 py-1.5 text-xs font-semibold text-body transition-colors hover:border-accent/50 hover:text-accent"
              >
                {badge}
              </motion.li>
            ))}
          </motion.ul>

          {/* Stats */}
          <Reveal delay={0.15}>
            <dl className="mt-10 grid grid-cols-3 divide-x divide-edge rounded-2xl border border-edge bg-surface">
              {ABOUT.stats.map(({ value, label }) => (
                <div key={label} className="px-4 py-5 text-center">
                  <dt className="order-2 mt-1 block text-xs text-muted">{label}</dt>
                  <dd className="font-display text-2xl font-bold text-accent md:text-3xl">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
