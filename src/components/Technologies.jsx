import { motion } from "framer-motion";

const technologies = [
  {
    icon: "devicon-java-plain",
    name: "Java",
    description: "Programação",
  },
  {
    icon: "devicon-html5-plain",
    name: "HTML5",
    description: "Web",
  },
  {
    icon: "devicon-css3-plain",
    name: "CSS3",
    description: "Estilização",
  },
  {
    icon: "devicon-javascript-plain",
    name: "JavaScript",
    description: "Web",
  },
  {
    icon: "devicon-typescript-plain",
    name: "TypeScript",
    description: "Desenvolvimento",
  },
  {
    icon: "devicon-intellij-plain",
    name: "IntelliJ IDEA",
    description: "IDE",
  },
  {
    icon: "devicon-react-original",
    name: "React Native",
    description: "Mobile",
  },
  {
    icon: "devicon-git-plain",
    name: "Git",
    description: "Versionamento",
  },
  {
    icon: "devicon-github-original",
    name: "GitHub",
    description: "Repositórios",
  },
  {
    icon: "devicon-godot-plain",
    name: "Godot",
    description: "Game Development",
  },
  {
    icon: "devicon-vscode-plain",
    name: "VS Code",
    description: "IDE",
  },
  {
    icon: "fa-solid fa-screwdriver-wrench",
    name: "Suporte Técnico",
    description: "Troubleshooting",
  },
  {
    icon: "fa-solid fa-brain",
    name: "Lógica",
    description: "Programação",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

function Technologies() {
  return (
    <motion.section
      id="tecnologias"
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >

      <div className="section-title">
        <span>02.</span>
        <h2>Tecnologias & Conhecimentos</h2>
        <div className="line"></div>
      </div>

      <motion.div className="tech-grid">

        {technologies.map((technology) => (
          <motion.div
            className="tech-card"
            key={technology.name}
            variants={cardVariants}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
          >

            <i className={technology.icon}></i>

            <div>
              <h3>{technology.name}</h3>
              <p>{technology.description}</p>
            </div>

          </motion.div>
        ))}

      </motion.div>

    </motion.section>
  );
}

export default Technologies;