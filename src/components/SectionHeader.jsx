import { COLORS } from "../data";

export default function SectionHeader({ label, title }) {
  return (
    <div className="fade-in-section" style={{ textAlign: "center", marginBottom: 48 }}>
      <p style={{ color: COLORS.primary, fontFamily: "'Space Mono', monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>
        {label}
      </p>
      <h2 style={{ fontFamily: "'Space Mono', monospace", color: COLORS.textPrimary, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700 }}>
        {title}
      </h2>
    </div>
  );
}
