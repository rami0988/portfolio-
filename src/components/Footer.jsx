import { COLORS } from "../data";
import { useLang } from "../context/LanguageContext";
import { T } from "../data/translations";
import Github from "../icons/Github";

export default function Footer() {
  const { lang } = useLang();
  const t = T[lang].footer;

  return (
    <footer style={{ background: COLORS.bg, borderTop: `1px solid ${COLORS.border}`, padding: "32px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 16, textAlign: "center" }}>
        <p style={{ color: COLORS.textSecondary, fontSize: 13 }}>
          {t.builtWith} <span style={{ color: "#E74C3C" }}>❤️</span> {t.by}{" "}
          <span style={{ color: COLORS.primary, fontFamily: "'Space Mono', monospace" }}>Rami Abdul Hamid</span>
        </p>
        <p style={{ color: COLORS.textSecondary, fontSize: 13 }}>{t.rights}</p>
        <a
          href="https://github.com/rami0988"
          target="_blank" rel="noopener noreferrer"
          style={{ color: COLORS.textSecondary, textDecoration: "none", fontSize: 13, display: "flex", alignItems: "center", gap: 6, transition: "color 0.2s" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = COLORS.primary)}
          onMouseLeave={(e) => (e.currentTarget.style.color = COLORS.textSecondary)}
        >
          <Github size={14} /> github.com/rami0988
        </a>
      </div>
    </footer>
  );
}
