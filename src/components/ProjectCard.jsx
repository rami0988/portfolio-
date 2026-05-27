import { CircleCheck, ExternalLink } from "lucide-react";
import { COLORS } from "../data";
import Github from "../icons/Github";

export default function ProjectCard({ project, screenshotsLabel = "Screenshots" }) {
  return (
    <div
      style={{
        background: "rgba(13,27,46,0.85)", border: `1px solid ${COLORS.border}`,
        backdropFilter: "blur(12px)", borderRadius: 16,
        overflow: "hidden", display: "flex", flexDirection: "column",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 0 28px rgba(0,212,255,0.18)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{ height: 4, width: "100%", background: project.gradient, flexShrink: 0 }} />

      <div style={{ fontSize: 36, margin: "24px 28px 16px 28px", lineHeight: 1 }}>{project.emoji}</div>

      <h3 style={{ color: COLORS.textPrimary, fontFamily: "'Space Mono', monospace", fontSize: 18, fontWeight: 700, margin: "0 28px 12px 28px", lineHeight: 1.3 }}>
        {project.title}
      </h3>

      <p style={{ color: COLORS.textSecondary, fontSize: 14, lineHeight: 1.7, margin: "0 28px 16px 28px" }}>
        {project.desc}
      </p>

      <ul style={{ margin: "0 28px 16px 28px", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
        {project.bullets.map((b, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, color: COLORS.textSecondary, fontSize: 13, lineHeight: 1.5 }}>
            <CircleCheck size={14} style={{ color: COLORS.primary, flexShrink: 0, marginTop: 2 }} />
            {b}
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "0 28px", paddingBottom: 16, marginTop: "auto" }}>
        {project.tags.map((tag) => (
          <span key={tag} style={{ background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", color: COLORS.primary, fontFamily: "'Space Mono', monospace", fontSize: 11, padding: "4px 10px", borderRadius: 99 }}>
            {tag}
          </span>
        ))}
      </div>

      {(project.github || project.drive) && (
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "0 28px 24px 28px" }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, padding: "8px 16px", borderRadius: 8, border: `1px solid ${COLORS.primary}`, color: COLORS.primary, fontFamily: "'Space Mono', monospace", textDecoration: "none", transition: "background 0.2s, color 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = COLORS.primary; e.currentTarget.style.color = COLORS.bg; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = COLORS.primary; }}
            >
              <Github size={13} /> GitHub
            </a>
          )}
          {project.drive && (
            <a href={project.drive} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, padding: "8px 16px", borderRadius: 8, border: `1px solid ${COLORS.secondary}`, color: COLORS.secondary, fontFamily: "'Space Mono', monospace", textDecoration: "none", transition: "background 0.2s, color 0.2s" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = COLORS.secondary; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = COLORS.secondary; }}
            >
              <ExternalLink size={13} /> {screenshotsLabel}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
