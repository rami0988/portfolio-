import { MapPin, Mail, Download } from "lucide-react";
import meImg from "../assets/me.png";
import { COLORS } from "../data";
import { useLang } from "../context/LanguageContext";
import { T } from "../data/translations";
import Github from "../icons/Github";
import SectionHeader from "./SectionHeader";

export default function AboutSection() {
  const { lang } = useLang();
  const t = T[lang].about;

  return (
    <section id="about" className="section-py" style={{ background: COLORS.bg }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} className="section-container">
        <SectionHeader label={t.label} title={t.title} />

        <div className="fade-in-section about-grid">
          {/* Profile card */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              background: "rgba(13,27,46,0.85)", border: `1px solid ${COLORS.border}`,
              backdropFilter: "blur(12px)", borderRadius: 20, padding: "40px 32px",
              display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "100%", maxWidth: 340,
            }}>
              <div style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`, animation: "photo-glow 3s ease-in-out infinite", width: 152, height: 152, borderRadius: "50%", padding: 3, marginBottom: 24, flexShrink: 0 }}>
                <img src={meImg} alt="Rami Abdul Hamid" style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", objectPosition: "center top", border: `3px solid ${COLORS.bg}`, display: "block" }} />
              </div>
              <h3 style={{ fontFamily: "'Space Mono', monospace", color: COLORS.textPrimary, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Rami Abdul Hamid</h3>
              <p style={{ color: COLORS.primary, fontSize: 13, marginBottom: 16 }}>Software Engineer</p>
              <div style={{ display: "flex", alignItems: "center", gap: 6, color: COLORS.textSecondary, fontSize: 13 }}>
                <MapPin size={13} style={{ color: COLORS.primary }} />
                Syria 🇸🇾
              </div>
            </div>
          </div>

          {/* Bio */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <p style={{ color: COLORS.textSecondary, fontSize: 15, lineHeight: 1.9 }}>
              {t.bioPrefix}
              <span style={{ color: COLORS.primary, fontWeight: 600 }}>Rami Abdul Hamid</span>
              {t.bioSuffix}
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {t.items.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: COLORS.primary, flexShrink: 0 }} />
                  <span style={{ color: COLORS.textSecondary, fontSize: 14 }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 4, flexWrap: "wrap" }}>
              <a
                href="https://github.com/rami0988"
                target="_blank" rel="noopener noreferrer"
                style={{ background: "rgba(0,212,255,0.08)", border: `1px solid ${COLORS.border}`, color: COLORS.primary, borderRadius: 10, padding: "10px 14px", transition: "background 0.2s", display: "flex" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,212,255,0.18)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,212,255,0.08)")}
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:rami.abd.alhamed.333@gmail.com"
                style={{ background: "rgba(0,212,255,0.08)", border: `1px solid ${COLORS.border}`, color: COLORS.primary, borderRadius: 10, padding: "10px 14px", transition: "background 0.2s", display: "flex" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,212,255,0.18)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,212,255,0.08)")}
              >
                <Mail size={20} />
              </a>
              <a
                href="/rami-cv.pdf"
                download="Rami_Abdul_Hamid_CV.pdf"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                  color: COLORS.bg, borderRadius: 10, padding: "10px 18px",
                  display: "flex", alignItems: "center", gap: 8,
                  fontFamily: "'Space Mono', monospace", fontSize: 13, fontWeight: 700,
                  textDecoration: "none", transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <Download size={16} />
                {t.downloadCV}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
