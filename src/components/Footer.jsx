import { ArrowUp } from "lucide-react";
import { PROFILE } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-edge">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-8 md:px-8">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} {PROFILE.name}. Designed &amp; built with React, Tailwind &amp; Framer Motion.
        </p>
        <a
          href="#top"
          aria-label="Back to top"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-edge bg-surface text-muted transition-all duration-200 hover:-translate-y-1 hover:border-accent/50 hover:text-accent"
        >
          <ArrowUp size={16} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
