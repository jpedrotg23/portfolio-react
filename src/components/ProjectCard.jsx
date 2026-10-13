import { motion } from "framer-motion";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`project-card ${project.featured ? "featured" : ""}`}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
    >

      <div className="project-top">

        <i className={`${project.icon} project-icon`}></i>

        <div className="project-links-icons">

          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.title}
            >
              <i className={link.icon}></i>
            </a>
          ))}

        </div>

      </div>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="project-tech">

        {project.technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}

      </div>

      <div className="project-footer">

        <span>
          <i className="fa-regular fa-calendar"></i>
          {project.year}
        </span>

        <div className="project-demo-links">

          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className={link.icon}></i>
              {link.label}
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          ))}

        </div>

      </div>

    </motion.article>
  );
}

export default ProjectCard;