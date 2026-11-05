import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "pap-online",
    title: "PAP Online — Sistema de Apoio Psicopedagógico",
    category: "Web",
    description: "Proposta de plataforma web para digitalizar e facilitar o acesso aos serviços de Apoio Psicopedagógico da Universidade de Fortaleza.",
    purpose: "Organizar atendimentos, solicitações e comunicação entre estudantes, profissionais e administradores.",
    features: ["Portal do estudante e do profissional", "Solicitação e agendamento", "Histórico e adaptações acadêmicas", "Mensagens, relatórios e notificações"],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    status: "Frontend publicado · Backend planejado",
    repoUrl: "https://github.com/jpedrotg23/PAP-Online",
    demoUrl: "https://jpedrotg23.github.io/PAP-Online/",
    demoLabel: "Ver demonstração",
    icon: "fa-solid fa-laptop-code",
    note: "Protótipo navegável do frontend, sem autenticação real, persistência ou operações reais de atendimento.",
    year: "2026",
  },
  {
    id: "catalogo-sophia",
    title: "Catálogo Digital — Sophia Barbosa Makeup",
    category: "Web",
    description: "Catálogo web responsivo para Sophia Barbosa Makeup, com identidade visual refinada, galeria interativa e apresentação dos serviços de maquiagem.",
    purpose: "Apresentar o trabalho, os serviços e os preços da Sophia, valorizar sua marca e facilitar o primeiro contato de visitantes pelo WhatsApp.",
    features: ["Apresentação profissional e identidade visual", "Galeria com nove fotos e visualização ampliada (lightbox)", "Quatro serviços com preços atualizados", "Animações suaves e layout responsivo", "Imagens otimizadas e contato pelo WhatsApp com mensagem pré-preenchida"],
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Vite", "Sharp", "Cloudflare Pages"],
    status: "Publicado · Projeto para cliente",
    repoUrl: "https://github.com/jpedrotg23/catalogo-sophia",
    demoUrl: "https://sophiabarbosa.pages.dev/",
    demoLabel: "Acessar catálogo",
    icon: "fa-solid fa-paintbrush",
    year: "2026",
    featured: true,
  },
  {
    id: "acessibilidade-urbana",
    title: "Acessibilidade Urbana — Plataforma Colaborativa de Mapeamento",
    category: "Mobile",
    description: "Aplicativo mobile acadêmico para registrar, avaliar e compartilhar informações sobre a acessibilidade de locais urbanos.",
    purpose: "Reunir dados colaborativos que ajudem pessoas a conhecer as condições de acessibilidade dos espaços.",
    features: ["Mapa e busca geográfica", "Cadastro de locais e coordenadas", "Avaliações, fotos, comentários e upvotes", "Ranking e perfil de usuário"],
    technologies: ["React Native", "Expo", "TypeScript", "Firebase Authentication", "Cloud Firestore", "Firebase Storage", "Leaflet", "OpenStreetMap", "Nominatim"],
    status: "Aplicativo mobile · Projeto acadêmico",
    repoUrl: "https://github.com/jpedrotg23/AcessibilidadeUrbana",
    icon: "fa-solid fa-wheelchair",
    year: "2026",
  },
  {
    id: "mundo-do-saber",
    title: "Mundo do Saber — Jogo Educacional",
    category: "Game Development",
    description: "Jogo educacional 2D desenvolvido na Godot Engine com exploração, interação e desafios de aprendizagem.",
    purpose: "Permitir que o jogador explore fases, colete letras e monte palavras de forma interativa.",
    features: ["Múltiplas fases e cenários 2D", "Movimentação e coleta de letras", "Montagem e validação de palavras", "Diálogos, pausa e progresso"],
    technologies: ["Godot Engine 4.5", "GDScript"],
    status: "Game Development · Godot",
    repoUrl: "https://github.com/jpedrotg23/MundoDoSaber",
    demoUrl: "https://www.youtube.com/shorts/SOx6c0GzZwI",
    demoLabel: "Vídeo — Controle físico",
    demo2Url: "https://drive.google.com/file/d/1MTcuTmTjVfcyvKwzG-T3EtF9dRZkNQge/view?usp=sharing",
    demo2Label: "Vídeo — Gameplay na tela",
    icon: "fa-solid fa-gamepad",
    year: "2026",
  },
  {
    id: "rpg-nexus",
    title: "RPG Nexus — Gerenciador de Campanhas de RPG",
    category: "Web",
    description: "Aplicação web para organizar campanhas, participantes e personagens de RPG de mesa.",
    purpose: "Centralizar campanhas, jogadores e fichas em uma interface organizada.",
    features: ["Autenticação e painel inicial", "Criação e gerenciamento de campanhas", "Jogadores, personagens e NPCs", "Estrutura para D&D, Ordem Paranormal e Sacramento"],
    technologies: ["React", "TypeScript", "Vite", "Firebase Authentication", "Cloud Firestore", "React Router", "Tailwind CSS", "Framer Motion", "Konva"],
    status: "Aplicação web · Em desenvolvimento",
    repoUrl: "https://github.com/jpedrotg23/rpg-nexus",
    icon: "fa-solid fa-dice-d20",
    year: "2026",
  },
  {
    id: "calculadora-logica",
    title: "Calculadora Lógica — Gerador de Tabelas-Verdade",
    category: "Ferramentas e estudos",
    description: "Ferramenta web acadêmica para trabalhar com expressões de lógica proposicional.",
    purpose: "Permitir a construção de expressões e a análise de seus possíveis valores lógicos.",
    features: ["Variáveis e operadores lógicos", "Verificação léxica e de parênteses", "Combinações de valores", "Tautologia, contradição e contingência"],
    technologies: ["HTML", "CSS", "JavaScript"],
    status: "Ferramenta acadêmica · Lógica proposicional",
    repoUrl: "https://github.com/jpedrotg23/calculadora-logica",
    icon: "fa-solid fa-calculator",
    year: "2026",
  },
];

const filters = ["Todos", "Web", "Mobile", "Game Development", "Ferramentas e estudos"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const visibleProjects = activeFilter === "Todos" ? projects : projects.filter((project) => project.category === activeFilter);

  return (
    <motion.section id="projetos" className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="section-title">
        <span>04.</span>
        <h2>Projetos em destaque</h2>
        <div className="line"></div>
      </div>

      <div className="project-filters" aria-label="Filtrar projetos por categoria">
        {filters.map((filter) => (
          <button key={filter} type="button" className={activeFilter === filter ? "active" : ""} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visibleProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
      </div>

    </motion.section>
  );
}

export default Projects;
