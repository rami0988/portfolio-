import { useState, useEffect, useRef } from "react";
import { COLORS, SKILLS } from "../data";
import { useLang } from "../context/LanguageContext";
import { T } from "../data/translations";

/* ─── Layout constants ─────────────────────────────────────────────────────── */
const W = 700, H = 580;
const TRUNK_X = 350;

/* ─── Abbreviated labels ───────────────────────────────────────────────────── */
const LABELS = [
  "Flutter", "Dart", "State Mgmt.", "Firebase",
  "REST APIs", "Clean Arch.", "Git & GitHub",
  "UI / UX", "SQLite & Hive", "QR & NFC",
];

/*
  Branch data: [fx, fy, cp1x, cp1y, cp2x, cp2y, tx, ty, skillIdx]
  Using cubic bezier curves (M fx,fy C cp1 cp2 tx,ty) for organic look.
  Right-side branches: even skillIdx  |  Left-side: odd skillIdx
*/
const BRANCHES = [
  [350, 452, 448, 452, 548, 374, 610, 374, 0],
  [350, 356, 452, 356, 552, 280, 616, 280, 2],
  [350, 265, 444, 265, 532, 200, 602, 200, 4],
  [350, 188, 428, 188, 516, 132, 582, 132, 6],
  [350, 120, 413, 120, 494, 76,  554, 76,  8],
  [350, 425, 252, 425, 154, 346,  92, 346, 1],
  [350, 330, 250, 330, 148, 256,  82, 256, 3],
  [350, 243, 256, 243, 157, 173,  97, 173, 5],
  [350, 168, 270, 168, 177, 113, 120, 113, 7],
  [350, 110, 278, 110, 202, 66,  150, 66,  9],
];

/* ─── SVG gradient / filter defs ──────────────────────────────────────────── */
function Defs() {
  return (
    <defs>
      <linearGradient id="sk-trunk" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%"   stopColor="#3B0764" />
        <stop offset="35%"  stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#00D4FF" />
      </linearGradient>

      <linearGradient id="sk-branch-r" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"   stopColor="#7C3AED" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#00D4FF" />
      </linearGradient>
      <linearGradient id="sk-branch-l" x1="1" y1="0" x2="0" y2="0">
        <stop offset="0%"   stopColor="#7C3AED" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#00D4FF" />
      </linearGradient>

      <radialGradient id="sk-leaf-idle" cx="40%" cy="35%" r="65%">
        <stop offset="0%"   stopColor="rgba(0,212,255,0.18)" />
        <stop offset="100%" stopColor="rgba(5,11,24,0.96)" />
      </radialGradient>
      <radialGradient id="sk-leaf-hov" cx="40%" cy="35%" r="65%">
        <stop offset="0%"   stopColor="rgba(0,212,255,0.55)" />
        <stop offset="100%" stopColor="rgba(0,212,255,0.08)" />
      </radialGradient>

      <filter id="sk-glow-trunk" x="-30%" y="-5%" width="160%" height="110%">
        <feGaussianBlur stdDeviation="5" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
      <filter id="sk-glow-leaf" x="-80%" y="-80%" width="260%" height="260%">
        <feGaussianBlur stdDeviation="6" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
      <filter id="sk-glow-branch" x="-10%" y="-30%" width="120%" height="160%">
        <feGaussianBlur stdDeviation="4" result="b" />
        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
      </filter>
    </defs>
  );
}

/* ─── Floating ambient particles ───────────────────────────────────────────── */
const PARTICLES = [
  { cx: 210, cy: 180, r: 2.2, color: "#00D4FF", dur: 6.5, delay: 0   },
  { cx: 490, cy: 230, r: 1.8, color: "#7C3AED", dur: 8,   delay: 1.2 },
  { cx: 155, cy: 380, r: 2.5, color: "#00D4FF", dur: 7,   delay: 0.6 },
  { cx: 545, cy: 420, r: 1.6, color: "#00D4FF", dur: 9,   delay: 2   },
  { cx: 280, cy: 90,  r: 2,   color: "#7C3AED", dur: 7.5, delay: 0.3 },
  { cx: 430, cy: 100, r: 1.5, color: "#00D4FF", dur: 6,   delay: 1.8 },
];

function AmbientParticles({ visible }) {
  return PARTICLES.map((p, i) => (
    <circle
      key={i}
      cx={p.cx} cy={p.cy} r={p.r}
      fill={p.color}
      style={{
        opacity: visible ? 0.55 : 0,
        transition: `opacity 0.6s ease ${p.delay + 2.5}s`,
        animation: `float ${p.dur}s ease-in-out infinite`,
        animationDelay: `${p.delay}s`,
      }}
    />
  ));
}

/* ─── Single branch + leaf ─────────────────────────────────────────────────── */
function Branch({ fx, fy, cp1x, cp1y, cp2x, cp2y, tx, ty, idx, animated, isHov, onEnter, onLeave, bDelay, lDelay }) {
  const isRight = tx > TRUNK_X;
  const pathD   = `M ${fx},${fy} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${tx},${ty}`;
  const labelX  = isRight ? tx + 32 : tx - 32;
  const labelY  = ty + 4;

  return (
    <g>
      {/* Branch glow (hover only) */}
      {isHov && (
        <path d={pathD} fill="none"
          stroke="rgba(0,212,255,0.22)" strokeWidth="10" strokeLinecap="round"
          filter="url(#sk-glow-branch)"
        />
      )}

      {/* Branch line */}
      <path d={pathD} fill="none"
        stroke={isHov ? "#00D4FF" : (isRight ? "url(#sk-branch-r)" : "url(#sk-branch-l)")}
        strokeWidth={isHov ? "3" : "2.5"} strokeLinecap="round"
        pathLength="1" strokeDasharray="1"
        strokeDashoffset={animated ? "0" : "1"}
        style={{
          transition: `stroke-dashoffset 0.65s cubic-bezier(0.22,1,0.36,1) ${bDelay}s, stroke 0.25s, stroke-width 0.25s`,
        }}
      />

      {/* Halo ring on hover */}
      {isHov && (
        <circle cx={tx} cy={ty} r="38"
          fill="none" stroke="rgba(0,212,255,0.10)" strokeWidth="14"
          filter="url(#sk-glow-leaf)"
        />
      )}

      {/* Leaf circle */}
      <circle
        className="leaf-node"
        cx={tx} cy={ty} r="26"
        fill={isHov ? "url(#sk-leaf-hov)" : "url(#sk-leaf-idle)"}
        stroke={isHov ? "#00D4FF" : "rgba(0,212,255,0.40)"}
        strokeWidth={isHov ? "2" : "1.5"}
        filter={isHov ? "url(#sk-glow-leaf)" : "none"}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        style={{
          opacity: animated ? 1 : 0,
          transition: `opacity 0.42s ease ${lDelay}s, fill 0.25s, stroke 0.25s`,
        }}
      />

      {/* Skill icon */}
      <foreignObject x={tx - 13} y={ty - 13} width="26" height="26"
        style={{ pointerEvents: "none", opacity: animated ? 1 : 0, transition: `opacity 0.42s ease ${lDelay}s` }}
      >
        <div style={{ color: isHov ? "#fff" : COLORS.primary, display: "flex", alignItems: "center", justifyContent: "center", width: "26px", height: "26px" }}>
          {SKILLS[idx].icon}
        </div>
      </foreignObject>

      {/* Label — sits beside the leaf, not below it */}
      <text
        x={labelX} y={labelY}
        textAnchor={isRight ? "start" : "end"}
        dominantBaseline="middle"
        fill={isHov ? "#00D4FF" : "rgba(136,146,164,0.75)"}
        fontSize="10.5" fontFamily="'Space Mono', monospace"
        style={{
          pointerEvents: "none",
          opacity: animated ? 1 : 0,
          transition: `opacity 0.42s ease ${lDelay}s, fill 0.25s`,
        }}
      >
        {LABELS[idx]}
      </text>
    </g>
  );
}

/* ─── Hover popup card ─────────────────────────────────────────────────────── */
function SkillPopup({ skill, tx, ty, isRight }) {
  return (
    <div style={{
      position: "absolute",
      left: `${(tx / W) * 100}%`,
      top:  `${(ty / H) * 100}%`,
      transform: isRight
        ? "translate(calc(-100% - 10px), -50%)"
        : "translate(10px, -50%)",
      zIndex: 40,
      pointerEvents: "none",
    }}>
      <div style={{
        background: "rgba(5,11,24,0.96)",
        border: "1px solid rgba(0,212,255,0.45)",
        borderRadius: 16,
        padding: "16px 20px",
        width: 200,
        backdropFilter: "blur(28px)",
        boxShadow: "0 8px 40px rgba(0,212,255,0.18), 0 0 0 1px rgba(255,255,255,0.04) inset",
        animation: "leafUnfold 0.28s cubic-bezier(0.22,1,0.36,1) both",
        transformOrigin: isRight ? "right center" : "left center",
      }}>
        {/* Top accent line */}
        <div style={{ height: 2, background: "linear-gradient(90deg, #00D4FF, #7C3AED)", borderRadius: 2, marginBottom: 14 }} />

        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
          <div style={{ background: "rgba(0,212,255,0.12)", color: "#00D4FF", borderRadius: 8, padding: 7, display: "flex", flexShrink: 0 }}>
            {skill.icon}
          </div>
          <p style={{ color: "#F0F4F8", fontFamily: "'Space Mono', monospace", fontSize: 11.5, fontWeight: 700, lineHeight: 1.3 }}>
            {skill.name}
          </p>
        </div>

        <p style={{ color: "#8892A4", fontSize: 12, lineHeight: 1.65 }}>
          {skill.desc}
        </p>
      </div>
    </div>
  );
}

/* ─── Mobile skill card ────────────────────────────────────────────────────── */
function MobileSkillCard({ skill, label, idx, visible }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      onClick={() => setFlipped((f) => !f)}
      style={{
        borderRadius: 14,
        border: `1px solid ${flipped ? "rgba(0,212,255,0.55)" : "rgba(0,212,255,0.18)"}`,
        background: flipped
          ? "rgba(0,212,255,0.08)"
          : "linear-gradient(135deg, rgba(0,212,255,0.05), rgba(124,58,237,0.05))",
        padding: "16px 12px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        textAlign: "center",
        minHeight: 110,
        justifyContent: flipped ? "flex-start" : "center",
        transition: "border-color 0.25s, background 0.25s",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.4s ease ${idx * 0.07}s, transform 0.4s ease ${idx * 0.07}s, border-color 0.25s, background 0.25s`,
      }}
    >
      {!flipped ? (
        <>
          <div style={{ color: "#00D4FF", display: "flex" }}>{skill.icon}</div>
          <p style={{ color: "#F0F4F8", fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 700, lineHeight: 1.3 }}>
            {label}
          </p>
        </>
      ) : (
        <>
          <div style={{ height: 2, width: "100%", background: "linear-gradient(90deg, #00D4FF, #7C3AED)", borderRadius: 2, marginBottom: 4 }} />
          <p style={{ color: "#8892A4", fontSize: 11.5, lineHeight: 1.65 }}>{skill.desc}</p>
        </>
      )}
    </div>
  );
}

/* ─── Main section ─────────────────────────────────────────────────────────── */
export default function SkillsSection() {
  const { lang } = useLang();
  const t = T[lang].skills;
  const translatedSkills = SKILLS.map((s, i) => ({ ...s, desc: t.descs[i] }));

  const [animated, setAnimated] = useState(false);
  const [hovered,  setHovered]  = useState(null);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);
  const sectionRef = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const hoveredBranch = hovered !== null
    ? BRANCHES.find((b) => b[8] === hovered)
    : null;

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-py"
      style={{ background: "linear-gradient(180deg, #050B18 0%, #07101F 50%, #050B18 100%)" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }} className="section-container">

        {/* ── Header ── */}
        <div className="fade-in-section" style={{ textAlign: "center", marginBottom: 52 }}>
          <p style={{ color: COLORS.primary, fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: 12 }}>
            {t.label}
          </p>
          <h2 style={{ fontFamily: "'Space Mono', monospace", color: COLORS.textPrimary, fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, marginBottom: 18 }}>
            {t.title}
          </h2>
          <div style={{ width: 52, height: 3, background: "linear-gradient(90deg, #00D4FF, #7C3AED)", borderRadius: 99, margin: "0 auto" }} />
        </div>

        {isMobile ? (
          /* ── Mobile: tap-to-flip cards ── */
          <>
            <div className="skill-cards-grid">
              {translatedSkills.map((skill, idx) => (
                <MobileSkillCard
                  key={idx}
                  skill={skill}
                  label={LABELS[idx]}
                  idx={idx}
                  visible={animated}
                />
              ))}
            </div>
            <p style={{
              textAlign: "center", marginTop: 20,
              color: "rgba(136,146,164,0.5)",
              fontFamily: "'Space Mono', monospace", fontSize: 11,
              letterSpacing: "0.08em",
              opacity: animated ? 1 : 0,
              transition: "opacity 0.6s ease 1.2s",
            }}>
              {t.tapHint}
            </p>
          </>
        ) : (
          /* ── Desktop: SVG tree ── */
          <>
            <div style={{ position: "relative", maxWidth: W, margin: "0 auto", userSelect: "none" }}>

              <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
                background: "radial-gradient(ellipse 55% 65% at 50% 52%, rgba(0,212,255,0.055) 0%, transparent 70%)",
              }} />

              <svg
                viewBox={`0 0 ${W} ${H}`}
                style={{ width: "100%", display: "block", overflow: "visible" }}
              >
                <Defs />
                <AmbientParticles visible={animated} />

                <ellipse cx="350" cy="558" rx="78" ry="12"
                  fill="none" stroke="url(#sk-trunk)" strokeWidth="1.5"
                  style={{ opacity: animated ? 0.35 : 0, transition: "opacity 0.6s ease 0.4s" }}
                />

                <line x1="350" y1="546" x2="350" y2="62"
                  stroke="rgba(124,58,237,0.18)" strokeWidth="18" strokeLinecap="round"
                  pathLength="1" strokeDasharray="1" strokeDashoffset={animated ? "0" : "1"}
                  style={{ transition: "stroke-dashoffset 1.3s cubic-bezier(0.22,1,0.36,1)" }}
                />

                <line x1="350" y1="546" x2="350" y2="62"
                  stroke="url(#sk-trunk)" strokeWidth="6" strokeLinecap="round"
                  filter="url(#sk-glow-trunk)"
                  pathLength="1" strokeDasharray="1" strokeDashoffset={animated ? "0" : "1"}
                  style={{ transition: "stroke-dashoffset 1.3s cubic-bezier(0.22,1,0.36,1)" }}
                />

                {BRANCHES.map(([fx, fy, cp1x, cp1y, cp2x, cp2y, tx, ty, idx], i) => (
                  <Branch
                    key={idx}
                    fx={fx} fy={fy}
                    cp1x={cp1x} cp1y={cp1y}
                    cp2x={cp2x} cp2y={cp2y}
                    tx={tx} ty={ty}
                    idx={idx}
                    animated={animated}
                    isHov={hovered === idx}
                    onEnter={() => setHovered(idx)}
                    onLeave={() => setHovered(null)}
                    bDelay={1.35 + i * 0.16}
                    lDelay={1.35 + i * 0.16 + 0.45}
                  />
                ))}
              </svg>

              {hoveredBranch && (
                <SkillPopup
                  skill={translatedSkills[hovered]}
                  tx={hoveredBranch[6]}
                  ty={hoveredBranch[7]}
                  isRight={hoveredBranch[6] > TRUNK_X}
                />
              )}
            </div>

            <p style={{
              textAlign: "center", marginTop: 28,
              color: "rgba(136,146,164,0.5)",
              fontFamily: "'Space Mono', monospace", fontSize: 11,
              letterSpacing: "0.08em",
              opacity: animated ? 1 : 0,
              transition: "opacity 0.6s ease 3.8s",
            }}>
              {t.hoverHint}
            </p>
          </>
        )}
      </div>
    </section>
  );
}
