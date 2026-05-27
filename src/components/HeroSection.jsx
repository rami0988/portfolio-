import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { COLORS } from "../data";
import { useLang } from "../context/LanguageContext";
import { T } from "../data/translations";
import Particle from "./Particle";

export default function HeroSection({ scrollTo }) {
  const { lang } = useLang();
  const t = T[lang];

  const [typingText,    setTypingText]    = useState("");
  const [titleIdx,      setTitleIdx]      = useState(0);
  const [charIdx,       setCharIdx]       = useState(0);
  const [deleting,      setDeleting]      = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const particles = useRef(
    Array.from({ length: 12 }, () => ({
      width:  Math.random() * 4 + 2,
      height: Math.random() * 4 + 2,
      top:    `${Math.random() * 100}%`,
      left:   `${Math.random() * 100}%`,
    }))
  ).current;

  useEffect(() => {
    setTypingText("");
    setTitleIdx(0);
    setCharIdx(0);
    setDeleting(false);
  }, [lang]);

  useEffect(() => {
    const titles = t.typingTitles;
    const target = titles[titleIdx];
    const speed  = deleting ? 40 : 80;
    const timer  = setTimeout(() => {
      if (!deleting) {
        setTypingText(target.slice(0, charIdx + 1));
        if (charIdx + 1 === target.length) setTimeout(() => setDeleting(true), 1600);
        else setCharIdx((c) => c + 1);
      } else {
        setTypingText(target.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setTitleIdx((i) => (i + 1) % titles.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, titleIdx, lang, t.typingTitles]);

  useEffect(() => {
    const timer = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="grid-bg" style={{ background: COLORS.bg, position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
      {particles.map((p, i) => (
        <Particle key={i} style={{ width: p.width, height: p.height, top: p.top, left: p.left }} />
      ))}

      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 10, maxWidth: 900, margin: "0 auto", padding: "clamp(80px, 14vh, 130px) clamp(16px, 5vw, 40px) 60px", width: "100%", textAlign: "center" }}>
        <p style={{ color: COLORS.primary, fontFamily: "'Space Mono', monospace", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
          {t.hero.greeting}
        </p>

        <h1 style={{ fontFamily: "'Space Mono', monospace", color: COLORS.textPrimary, fontSize: "clamp(2rem, 7vw, 4.5rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: 24 }}>
          Rami{" "}
          <span style={{ background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Abdul Hamid
          </span>
        </h1>

        <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
          <span style={{ color: COLORS.primary, fontFamily: lang === "ar" ? "'Cairo', sans-serif" : "'Space Mono', monospace", fontSize: "clamp(1rem, 3vw, 1.4rem)", fontWeight: 500 }}>
            {typingText}
            <span style={{ opacity: cursorVisible ? 1 : 0, borderRight: `2px solid ${COLORS.primary}`, marginLeft: 2 }}>&nbsp;</span>
          </span>
        </div>

        <p style={{ color: COLORS.textSecondary, fontSize: "clamp(14px, 2vw, 17px)", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 40px" }}>
          {t.hero.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          <button className="btn-primary" style={{ padding: "14px 32px", borderRadius: 12, fontSize: 14 }} onClick={() => scrollTo("projects")}>
            {t.hero.cta}
          </button>
        </div>

        <div style={{ marginTop: 56, display: "flex", justifyContent: "center" }}>
          <button onClick={() => scrollTo("about")} style={{ background: "none", border: "none", color: COLORS.textSecondary, cursor: "pointer", animation: "bounce 2.5s ease-in-out infinite" }}>
            <ChevronDown size={26} />
          </button>
        </div>
      </div>
    </section>
  );
}
