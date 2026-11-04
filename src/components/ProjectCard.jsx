import { motion } from "framer-motion";
import { getTechnologyIcon } from "./technologyIcons";

function ProjectCard({ project, index }) {
  return (
    <motion.article className={`project-card ${project.featured ? "featured" : ""}`} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55, delay: index * 0.06 }}>
      <div className="project-top">
        <i className={`${project.icon} project-icon`}></i>
        <span className="project-status">{project.status}</span>
      </div>

      <span className="project-category">{project.category}</span>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <p className="project-purpose"><strong>Finalidade:</strong> {project.purpose}</p>

      <ul className="project-features">
        {project.features.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>

      {project.note && <p className="project-note">{project.note}</p>}

      <div className="project-tech">
        {project.technologies.map((technology) => (
          <span className="project-tech-item" key={technology}>
            <i className={getTechnologyIcon(technology)} aria-hidden="true"></i>
            {technology}
          </span>
        ))}
      </div>

      <div className="project-actions">
        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="project-action secondary" aria-label={`Ver código-fonte de ${project.title}`}>
          <i className="fab fa-github"></i> Código-fonte
        </a>
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-action primary" aria-label={`${project.demoLabel} de ${project.title}`}>
            <i className="fa-solid fa-arrow-up-right-from-square"></i> {project.demoLabel}
          </a>
        )}
        {project.demo2Url && (
          <a href={project.demo2Url} target="_blank" rel="noopener noreferrer" className="project-action secondary" aria-label={`${project.demo2Label} de ${project.title}`}>
            <i className="fa-solid fa-play"></i> {project.demo2Label}
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default ProjectCard;
