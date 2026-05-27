import { PROJECTS } from "../data";
import { useLang } from "../context/LanguageContext";
import { T } from "../data/translations";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const { lang } = useLang();
  const t = T[lang].projects;
  const translatedProjects = PROJECTS.map((p, i) => ({ ...p, ...t.items[i] }));

  return (
    <section id="projects" className="section-py" style={{ background: "#050B18" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} className="section-container">
        <SectionHeader label={t.label} title={t.title} />
        <div className="fade-in-section projects-grid">
          {translatedProjects.map((project) => (
            <ProjectCard key={project.github ?? project.title} project={project} screenshotsLabel={t.screenshots} />
          ))}
        </div>
      </div>
    </section>
  );
}
