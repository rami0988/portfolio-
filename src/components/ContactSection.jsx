import { Mail, MessageCircle } from "lucide-react";
import { COLORS } from "../data";
import { useLang } from "../context/LanguageContext";
import { T } from "../data/translations";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import SectionHeader from "./SectionHeader";
import ContactCard from "./ContactCard";

const CONTACTS = [
  { icon: <Github size={20} />,        label: "GitHub",   value: "github.com/rami0988",             href: "https://github.com/rami0988" },
  { icon: <Mail size={20} />,          label: "Email",    value: "rami.abd.alhamed.333@gmail.com",   href: "mailto:rami.abd.alhamed.333@gmail.com" },
  { icon: <Linkedin size={20} />,      label: "LinkedIn", value: "linkedin.com/in/rami-abd-alhamed-442986204",             href: "https://linkedin.com/in/rami-abd-alhamed-442986204" },
  { icon: <MessageCircle size={20} />, label: "WhatsApp", value: "+963 988 795 032",                 href: "https://wa.me/963988795032" },
];

export default function ContactSection() {
  const { lang } = useLang();
  const t = T[lang].contact;

  return (
    <section id="contact" className="section-py" style={{ background: "#070E1A" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} className="section-container">
        <SectionHeader label={t.label} title={t.title} />

        <div className="fade-in-section contact-grid">
          {CONTACTS.map(({ icon, label, value, href }) => (
            <ContactCard key={label} icon={icon} label={label} value={value} href={href} />
          ))}

          <div style={{ borderRadius: 14, padding: "20px 24px", background: "linear-gradient(135deg, rgba(0,212,255,0.07), rgba(124,58,237,0.07))", border: `1px solid ${COLORS.border}` }}>
            <p style={{ color: COLORS.textSecondary, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
              {t.availText}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {t.tags.map((tag) => (
                <span key={tag} style={{
                  background: "rgba(0,212,255,0.1)", border: `1px solid ${COLORS.border}`,
                  color: COLORS.primary, borderRadius: 20, padding: "4px 12px", fontSize: 12,
                  fontFamily: "'Space Mono', monospace", fontWeight: 600,
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
