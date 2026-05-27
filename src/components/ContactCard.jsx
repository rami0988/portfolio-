import { COLORS } from "../data";

export default function ContactCard({ icon, label, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex", alignItems: "center", gap: 16,
        padding: "16px 20px", borderRadius: 12,
        background: "rgba(13,27,46,0.8)", border: `1px solid ${COLORS.border}`,
        backdropFilter: "blur(12px)", textDecoration: "none",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(0,212,255,0.12)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{ background: "rgba(0,212,255,0.1)", color: COLORS.primary, borderRadius: 8, padding: 10, flexShrink: 0, display: "flex" }}>
        {icon}
      </div>
      <div>
        <p style={{ color: COLORS.textSecondary, fontSize: 12, marginBottom: 2 }}>{label}</p>
        <p style={{ color: COLORS.textPrimary, fontSize: 14, fontWeight: 500 }}>{value}</p>
      </div>
    </a>
  );
}
