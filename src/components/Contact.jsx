import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { Github, Linkedin } from "./ui/BrandIcons";
import { PROFILE } from "../data/content";
import SectionHeader from "./ui/SectionHeader";
import Reveal from "./ui/Reveal";
import Magnetic from "./ui/Magnetic";

const AVAILABILITY = ["Full-time", "Remote", "Hybrid", "Relocation", "Freelance"];

export default function Contact() {
  const [status, setStatus] = useState("");

  /**
   * No backend needed: compose the message into the visitor's mail app.
   * To switch to Formspree, replace this handler with a fetch POST to
   * https://formspree.io/f/[your-form-id] and remove the mailto line.
   */
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message ready to send.");
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something."
        lead={PROFILE.location + "."}
      />

      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left: direct channels */}
        <Reveal>
          <p className="max-w-md text-base leading-relaxed text-muted">
            Whether it's a role on your mobile team or a product you want built,
            my inbox is open. I usually reply within a day.
          </p>

          <ul className="mt-8 space-y-3" aria-label="Contact channels">
            <ContactRow href={`mailto:${PROFILE.email}`} icon={Mail} label="Email" value={PROFILE.email} />
            <ContactRow href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} icon={Phone} label="Phone / WhatsApp" value={PROFILE.phone} />
            <ContactRow href={PROFILE.github} icon={Github} label="GitHub" value="github.com/rami0988" external />
            <ContactRow href={PROFILE.linkedin} icon={Linkedin} label="LinkedIn" value="Connect on LinkedIn" external />
          </ul>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Open to">
            {AVAILABILITY.map((tag) => (
              <li key={tag} className="rounded-full border border-edge bg-surface px-3.5 py-1.5 text-xs font-semibold text-muted">
                {tag}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Right: form */}
        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="rounded-2xl border border-edge bg-surface p-6 md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" type="text" autoComplete="name" placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" autoComplete="email" placeholder="jane@company.com" />
            </div>
            <div className="mt-5">
              <label htmlFor="contact-message" className="mb-1.5 block text-sm font-semibold text-body">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about the role or the product…"
                className="w-full resize-y rounded-xl border border-edge bg-bg px-4 py-3 text-sm text-body placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none"
              />
            </div>
            <Magnetic className="mt-6 w-full sm:w-auto">
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-btn px-7 py-3.5 text-sm font-semibold text-btn-text transition-shadow hover:shadow-xl hover:shadow-[var(--glow)] sm:w-auto"
              >
                Send message
                <Send size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </button>
            </Magnetic>
            <p aria-live="polite" className="mt-3 text-xs text-muted">{status}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({ href, icon: Icon, label, value, external }) {
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="group flex items-center gap-4 rounded-xl border border-edge bg-surface p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/40"
      >
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-elevated text-accent transition-transform duration-300 group-hover:scale-110">
          <Icon size={18} aria-hidden="true" />
        </span>
        <span>
          <span className="block text-xs font-semibold tracking-wide uppercase text-muted">{label}</span>
          <span className="block text-sm font-medium text-body">{value}</span>
        </span>
      </a>
    </li>
  );
}

function Field({ label, name, type, autoComplete, placeholder }) {
  const id = `contact-${name}`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-body">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full rounded-xl border border-edge bg-bg px-4 py-3 text-sm text-body placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none"
      />
    </div>
  );
}
