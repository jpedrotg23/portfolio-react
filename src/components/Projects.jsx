import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Mundo do Saber",
    description:
      "Jogo educacional desenvolvido como projeto acadêmico, com foco em aprendizagem e interação. O projeto também possui controles desenvolvidos em ESP.",
    icon: "fa-solid fa-gamepad",
    year: "2026",
    featured: true,

    technologies: [
      "Godot",
      "GDScript",
      "ESP",
    ],

    links: [
      {
        url: "https://github.com/jpedrotg23/MundoDoSaber.git",
        icon: "fab fa-github",
        label: "GitHub",
        title: "GitHub",
      },
      {
        url: "https://www.youtube.com/shorts/SOx6c0GzZwI",
        icon: "fa-solid fa-microchip",
        label: "Demo ESP",
        title: "Demonstração com ESP",
      },
      {
        url: "https://drive.google.com/file/d/1MTcuTmTjVfcyvKwzG-T3EtF9dRZkNQge/view?usp=sharing",
        icon: "fa-solid fa-gamepad",
        label: "Demo Jogo",
        title: "Jogo rodando",
      },
    ],
  },

  {
    title: "Catálogo Digital — Sophia",
    description:
      "Catálogo profissional desenvolvido para apresentar os produtos e serviços da maquiadora Sophia Barbosa de forma simples, moderna e responsiva.",
    icon: "fa-solid fa-paintbrush",
    year: "2026",

    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
    ],

    links: [
      {
        url: "https://github.com/jpedrotg23/catalogo-sophia.git",
        icon: "devicon-github-original",
        label: "GitHub",
        title: "Repositório no GitHub",
      },
      {
        url: "https://jpedrotg23.github.io/catalogo-sophia/",
        icon: "fa-solid fa-eye",
        label: "Ver catálogo",
        title: "Ver catálogo",
      },
    ],
  },

  {
    title: "Acessibilidade Urbana",
    description:
      "Aplicação mobile colaborativa voltada ao mapeamento e avaliação da acessibilidade urbana.",
    icon: "fa-solid fa-wheelchair",
    year: "2026",

    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
    ],

    links: [
      {
        url: "https://github.com/jpedrotg23/AcessibilidadeUrbana.git",
        icon: "devicon-github-original",
        label: "GitHub",
        title: "GitHub",
      },
    ],
  },

  {
    title: "RPG Nexus",
    description:
      "Projeto relacionado ao universo de RPG, explorando desenvolvimento de software e construção de funcionalidades interativas.",
    icon: "fa-solid fa-dragon",
    year: "2026",

    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
    ],

    links: [
      {
        url: "https://github.com/jpedrotg23/rpg-nexus",
        icon: "devicon-github-original",
        label: "GitHub",
        title: "GitHub",
      },
    ],
  },

  {
    title: "Calculadora Lógica",
    description:
      "Aplicação web para trabalhar com lógica proposicional, permitindo gerar tabelas-verdade e analisar proposições.",
    icon: "fa-solid fa-calculator",
    year: "2026",

    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
    ],

    links: [
      {
        url: "https://github.com/jpedrotg23/calculadora-logica",
        icon: "devicon-github-original",
        label: "GitHub",
        title: "GitHub",
      },
    ],
  },

  {
    title: "PAP Online",
    description:
      "Projeto desenvolvido durante minha formação, aplicando conceitos de programação e desenvolvimento de software.",
    icon: "fa-solid fa-laptop-code",
    year: "2026",

    technologies: [
      "Programação",
      "Web",
      "Git",
    ],

    links: [
      {
        url: "https://github.com/jpedrotg23/PAP-Online",
        icon: "devicon-github-original",
        label: "GitHub",
        title: "GitHub",
      },
    ],
  },

  {
    title: "Experimentação de Protótipos",
    description:
      "Projeto experimental desenvolvido para explorar prototipação, desenvolvimento e testes de soluções.",
    icon: "fa-solid fa-flask",
    year: "2026",

    technologies: [
      "Prototipação",
      "Git",
      "Desenvolvimento",
    ],

    links: [
      {
        url: "https://github.com/jpedrotg23/Experimenta-o-de-prot-tipos",
        icon: "devicon-github-original",
        label: "GitHub",
        title: "GitHub",
      },
    ],
  },
];

function Projects() {
  return (
    <motion.section
      id="projetos"
      className="section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >

      <div className="section-title">
        <span>03.</span>
        <h2>Projetos</h2>
        <div className="line"></div>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}

      </div>

    </motion.section>
  );
}

export default Projects;