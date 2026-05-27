import { Menu, X, Globe } from "lucide-react";
import { NAV_IDS, COLORS } from "../data";
import { useLang } from "../context/LanguageContext";
import { T } from "../data/translations";

export default function Navbar({ scrolled, menuOpen, setMenuOpen, activeSection, scrollTo }) {
  const { lang, toggleLang } = useLang();
  const t = T[lang];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, height: 64,
        background: scrolled ? "rgba(5,11,24,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.1)" : "none",
        transition: "background 0.3s, border-color 0.3s",
      }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          <button onClick={() => scrollTo("home")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 22, fontWeight: 700, color: COLORS.textPrimary, letterSpacing: "-0.5px" }}>
              Rami<span style={{ color: COLORS.primary }}>.</span>
            </span>
          </button>

          <div className="desktop-nav">
            {t.nav.map((label, i) => (
              <button
                key={NAV_IDS[i]}
                className={`nav-link ${activeSection === NAV_IDS[i] ? "active" : ""}`}
                style={{ color: activeSection === NAV_IDS[i] ? COLORS.primary : COLORS.textSecondary }}
                onClick={() => scrollTo(NAV_IDS[i])}
              >
                {label}
              </button>
            ))}
            <button
              onClick={toggleLang}
              style={{
                background: "rgba(0,212,255,0.08)", border: `1px solid ${COLORS.border}`,
                color: COLORS.primary, borderRadius: 8, padding: "6px 12px",
                cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
                fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 700,
                marginInlineStart: 8, transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,212,255,0.18)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,212,255,0.08)")}
            >
              <Globe size={13} />
              {lang === "en" ? "عربي" : "EN"}
            </button>
          </div>

          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {menuOpen && <div className="sidebar-overlay md:hidden" onClick={() => setMenuOpen(false)} />}

      <div className={`sidebar md:hidden ${menuOpen ? "open" : "closed"}`}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid rgba(0,212,255,0.12)" }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 18, fontWeight: 700, color: COLORS.textPrimary }}>
            Rami<span style={{ color: COLORS.primary }}>.</span>
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              onClick={toggleLang}
              style={{
                background: "rgba(0,212,255,0.08)", border: `1px solid ${COLORS.border}`,
                color: COLORS.primary, borderRadius: 8, padding: "6px 10px",
                cursor: "pointer", display: "flex", alignItems: "center", gap: 5,
                fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 700,
                transition: "background 0.2s",
              }}
            >
              <Globe size={12} />
              {lang === "en" ? "عربي" : "EN"}
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              style={{ background: "rgba(0,212,255,0.08)", border: `1px solid ${COLORS.border}`, borderRadius: 8, color: COLORS.textPrimary, cursor: "pointer", padding: 6, display: "flex", alignItems: "center" }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", padding: "16px 0", flex: 1 }}>
          {t.nav.map((label, i) => (
            <button
              key={NAV_IDS[i]}
              onClick={() => scrollTo(NAV_IDS[i])}
              style={{
                textAlign: "start", fontSize: 18, fontFamily: lang === "ar" ? "'Cairo', sans-serif" : "'Space Mono', monospace",
                background: activeSection === NAV_IDS[i] ? "rgba(0,212,255,0.08)" : "none",
                border: "none",
                borderInlineStart: `3px solid ${activeSection === NAV_IDS[i] ? COLORS.primary : "transparent"}`,
                color: activeSection === NAV_IDS[i] ? COLORS.primary : COLORS.textSecondary,
                cursor: "pointer", padding: "20px 32px",
                transition: "background 0.2s, color 0.2s",
              }}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
