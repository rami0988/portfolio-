import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { NAV_LINKS, PROFILE } from "../data/content";

/**
 * Fixed glass navbar: shrinks on scroll, shows a reading-progress bar,
 * tracks the active section, and collapses to a full-screen menu on mobile.
 */
export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link of the section currently in view.
  useEffect(() => {
    const sections = NAV_LINKS
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const linkClass = (id) =>
    `rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      active === id ? "text-accent" : "text-muted hover:text-body"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        className="h-0.5 origin-left bg-accent-fill"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <nav
        aria-label="Primary"
        className={`border-b backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-edge bg-bg/80 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 md:px-8 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-body"
            aria-label={`${PROFILE.name} — back to top`}
          >
            rami<span className="text-accent">.dev</span>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className={linkClass(id)} aria-current={active === id ? "true" : undefined}>
                {label}
              </a>
            ))}
            <ThemeButton theme={theme} onToggleTheme={onToggleTheme} className="ml-2" />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeButton theme={theme} onToggleTheme={onToggleTheme} />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="rounded-lg border border-edge bg-surface p-2 text-body transition-transform active:scale-95"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-b border-edge bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    active === id ? "bg-elevated text-accent" : "text-muted hover:bg-elevated hover:text-body"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function ThemeButton({ theme, onToggleTheme, className = "" }) {
  return (
    <button
      type="button"
      onClick={onToggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`rounded-lg border border-edge bg-surface p-2 text-body transition-all duration-200 hover:border-accent/50 hover:text-accent active:scale-95 ${className}`}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
