import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowUpRight, Code2, Github, Linkedin, Mail, Menu, X,
  Terminal, Braces, Monitor, Gamepad2, Accessibility, Calculator,
  Palette, Smartphone, ExternalLink, GraduationCap, BriefcaseBusiness,
  ChevronRight
} from 'lucide-react'

const projects = [
  {
    title: 'Mundo do Saber',
    category: 'Jogo educacional',
    description: 'Projeto de jogo desenvolvido em equipe, unindo exploração, desafios e perguntas educativas em uma experiência interativa.',
    tech: ['Godot', 'GDScript', 'Game Design'],
    icon: Gamepad2,
    links: [
      { label: 'Código', url: 'https://github.com/jpedrotg23/MundoDoSaber.git' },
      { label: 'Demonstração', url: 'https://www.youtube.com/shorts/SOx6c0GzZwI' },
    ],
  },
  {
    title: 'Catálogo Digital — Sophia',
    category: 'Web',
    description: 'Catálogo digital para apresentar serviços de maquiagem, com foco em identidade visual, organização e facilidade de navegação.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: Palette,
    links: [
      { label: 'Código', url: 'https://github.com/jpedrotg23/catalogo-sophia.git' },
      { label: 'Ver projeto', url: 'https://jpedrotg23.github.io/catalogo-sophia/' },
    ],
  },
  {
    title: 'Acessibilidade Urbana',
    category: 'Aplicação',
    description: 'Projeto acadêmico voltado à discussão e à identificação de questões de acessibilidade nos espaços urbanos.',
    tech: ['JavaScript', 'Tecnologia', 'UX'],
    icon: Accessibility,
    links: [{ label: 'Código', url: 'https://github.com/jpedrotg23/AcessibilidadeUrbana.git' }],
  },
  {
    title: 'RPG Nexus',
    category: 'Projeto web',
    description: 'Projeto experimental que explora a organização de uma experiência digital com temática de RPG.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: Gamepad2,
    links: [{ label: 'Código', url: 'https://github.com/jpedrotg23/rpg-nexus' }],
  },
  {
    title: 'Calculadora Lógica',
    category: 'Lógica de programação',
    description: 'Projeto para praticar raciocínio lógico, estruturação de código e implementação de operações.',
    tech: ['JavaScript', 'Lógica'],
    icon: Calculator,
    links: [{ label: 'Código', url: 'https://github.com/jpedrotg23/calculadora-logica' }],
  },
  {
    title: 'PAP Online',
    category: 'Projeto acadêmico',
    description: 'Projeto acadêmico desenvolvido para colocar em prática conceitos de desenvolvimento e organização de sistemas.',
    tech: ['Desenvolvimento', 'Web'],
    icon: Monitor,
    links: [{ label: 'Código', url: 'https://github.com/jpedrotg23/PAP-Online' }],
  },
  {
    title: 'Experimentação de Protótipos',
    category: 'Prototipação',
    description: 'Exploração de protótipos e interfaces como parte do processo de concepção e validação de soluções digitais.',
    tech: ['Figma', 'UI/UX', 'Prototipação'],
    icon: Smartphone,
    links: [{ label: 'Código', url: 'https://github.com/jpedrotg23/Experimenta-o-de-prot-tipos' }],
  },
]

const technologies = [
  { name: 'Java', icon: 'devicon-java-plain' },
  { name: 'HTML5', icon: 'devicon-html5-plain' },
  { name: 'CSS3', icon: 'devicon-css3-plain' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain' },
  { name: 'React Native', icon: 'devicon-react-original' },
  { name: 'Git', icon: 'devicon-git-plain' },
  { name: 'GitHub', icon: 'devicon-github-original' },
  { name: 'Godot', icon: 'devicon-godot-plain' },
  { name: 'VS Code', icon: 'devicon-vscode-plain' },
  { name: 'IntelliJ IDEA', icon: 'devicon-intellij-plain' },
  { name: 'Suporte Técnico', icon: 'devicon-windows11-original' },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function SectionHeading({ eyebrow, title, accent }) {
  return (
    <motion.div className="section-heading" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title} <span>{accent}</span></h2>
      <div className="heading-line" />
    </motion.div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  if (typeof window !== 'undefined' && !window.__portfolioScrollListener) {
    window.__portfolioScrollListener = true
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 24), { passive: true })
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <a className="logo" href="#inicio" onClick={closeMenu} aria-label="Ir para o início"><span>&lt;</span>JP<span>/&gt;</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          {[['Sobre', '#sobre'], ['Tecnologias', '#tecnologias'], ['Projetos', '#projetos'], ['Contato', '#contato']].map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="https://github.com/jpedrotg23" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-glow" />
          <div className="hero-content">
            <motion.div className="hero-text" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
              <motion.p className="terminal-text" variants={reveal}><span>$</span> whoami</motion.p>
              <motion.p className="status-pill" variants={reveal}><span className="status-dot" /> Disponível para aprender e criar</motion.p>
              <motion.h1 variants={reveal}>João Pedro <span>Teixeira Guimarães</span></motion.h1>
              <motion.h2 variants={reveal}>Estudante de Ciência da Computação <span className="divider-text">|</span> Desenvolvedor em formação</motion.h2>
              <motion.p className="hero-description" variants={reveal}>Construindo soluções através de código, tecnologia e aprendizado contínuo.</motion.p>
              <motion.div className="hero-buttons" variants={reveal}>
                <a className="btn btn-primary" href="#projetos"><Code2 size={17} /> Ver projetos <ChevronRight size={17} /></a>
                <a className="btn btn-secondary" href="https://github.com/jpedrotg23" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={15} /></a>
              </motion.div>
              <motion.div className="hero-socials" variants={reveal}>
                <a href="https://www.linkedin.com/in/joaootg/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
                <a href="mailto:joaopedrotg23@gmail.com" aria-label="E-mail"><Mail size={19} /></a>
                <span className="social-rule" />
                <span className="hero-social-label">Fortaleza, CE · Brasil</span>
              </motion.div>
            </motion.div>

            <motion.div className="hero-terminal" initial={{ opacity: 0, scale: 0.94, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
              <div className="terminal-header">
                <div className="terminal-dots"><i /><i /><i /></div>
                <p>joao@developer:~</p><span className="terminal-lock"><Terminal size={15} /></span>
              </div>
              <div className="terminal-body">
                <p><span className="code-muted">01</span> <span className="code-purple">const</span> <span className="code-blue">developer</span> = {'{'}</p>
                <p><span className="code-muted">02</span> &nbsp; name: <span className="code-green">'João Pedro'</span>,</p>
                <p><span className="code-muted">03</span> &nbsp; area: <span className="code-green">'Computer Science'</span>,</p>
                <p><span className="code-muted">04</span> &nbsp; focus: [</p>
                <p><span className="code-muted">05</span> &nbsp;&nbsp; <span className="code-green">'Software Development'</span>,</p>
                <p><span className="code-muted">06</span> &nbsp;&nbsp; <span className="code-green">'Problem Solving'</span></p>
                <p><span className="code-muted">07</span> &nbsp; ],</p>
                <p><span className="code-muted">08</span> &nbsp; learning: <span className="code-orange">true</span></p>
                <p><span className="code-muted">09</span> {'}'}</p>
                <div className="terminal-output"><span>➜</span> pronto para o próximo desafio<span className="cursor">_</span></div>
              </div>
              <div className="terminal-footer"><span><span className="status-dot" /> SYSTEM ONLINE</span><span>UTF-8&nbsp; · &nbsp;React</span></div>
            </motion.div>
          </div>
          <a className="scroll-cue" href="#sobre"><span>SCROLL PARA EXPLORAR</span><ArrowDown size={15} /></a>
        </section>

        <section className="section" id="sobre">
          <div className="section-container">
            <SectionHeading eyebrow="01 / QUEM SOU" title="Sobre" accent="mim" />
            <div className="about-grid">
              <motion.div className="about-copy" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <p className="about-lead">Tecnologia é transformar <span>ideias em soluções.</span></p>
                <p>Sou estudante de Ciência da Computação na UNIFOR e profissional em formação na área de tecnologia. Gosto de entender como as coisas funcionam, resolver problemas e transformar o aprendizado em projetos práticos.</p>
                <p>Minha experiência com suporte técnico me aproxima dos desafios reais dos usuários e fortalece minha capacidade de investigar, comunicar e encontrar soluções. Quero continuar evoluindo em desenvolvimento de software e construir aplicações úteis.</p>
                <a className="text-link" href="https://github.com/jpedrotg23" target="_blank" rel="noreferrer">Conheça meu GitHub <ArrowUpRight size={16} /></a>
              </motion.div>
              <motion.div className="about-cards" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.article className="about-card" variants={reveal}><span className="about-card-icon"><GraduationCap size={22} /></span><div><h3>Formação</h3><p>Ciência da Computação</p><small>UNIFOR · Em andamento</small></div></motion.article>
                <motion.article className="about-card" variants={reveal}><span className="about-card-icon"><BriefcaseBusiness size={22} /></span><div><h3>Experiência</h3><p>Suporte Técnico de TI</p><small>ACS Automação Comercial e Sistemas</small></div></motion.article>
                <motion.article className="about-card" variants={reveal}><span className="about-card-icon"><Braces size={22} /></span><div><h3>Interesse</h3><p>Desenvolvimento de software</p><small>Aprendizado constante e projetos práticos</small></div></motion.article>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="tecnologias">
          <div className="section-container">
            <SectionHeading eyebrow="02 / FERRAMENTAS" title="Tecnologias &" accent="habilidades" />
            <p className="section-intro">Ferramentas e conhecimentos que venho utilizando e desenvolvendo ao longo da minha jornada.</p>
            <motion.div className="tech-grid" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.055 } } }} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
              {technologies.map((tech) => <motion.div className="tech-card" key={tech.name} variants={reveal} whileHover={{ y: -5, borderColor: 'rgba(229,9,20,.6)' }}><i className={tech.icon} /><span>{tech.name}</span></motion.div>)}
            </motion.div>
            <div className="skills-note"><span className="skills-note-mark">+</span><p>Também desenvolvo conhecimentos em lógica de programação, orientação a objetos, resolução de problemas e atendimento técnico.</p></div>
          </div>
        </section>

        <section className="section" id="projetos">
          <div className="section-container">
            <SectionHeading eyebrow="03 / TRABALHOS" title="Projetos em" accent="destaque" />
            <div className="projects-intro-row"><p className="section-intro">Projetos acadêmicos e pessoais que representam minha evolução, experimentação e prática.</p><a className="text-link" href="https://github.com/jpedrotg23?tab=repositories" target="_blank" rel="noreferrer">Todos os repositórios <ArrowUpRight size={16} /></a></div>
            <motion.div className="projects-grid" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.08 }}>
              {projects.map((project, index) => {
                const Icon = project.icon
                return <motion.article className={`project-card ${index === 0 ? 'project-featured' : ''}`} key={project.title} variants={reveal} whileHover={{ y: -6 }}>
                  <div className="project-card-top"><span className="project-number">0{index + 1}</span><span className="project-icon"><Icon size={22} /></span><span className="project-category">{project.category}</span></div>
                  <h3>{project.title}</h3><p className="project-description">{project.description}</p>
                  <div className="project-tech">{project.tech.map(item => <span key={item}>{item}</span>)}</div>
                  <div className="project-links">{project.links.map(link => <a key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label} <ExternalLink size={14} /></a>)}</div>
                </motion.article>
              })}
            </motion.div>
          </div>
        </section>

        <section className="section contact-section" id="contato">
          <div className="section-container">
            <SectionHeading eyebrow="04 / VAMOS CONVERSAR" title="Entre em" accent="contato" />
            <motion.div className="contact-panel" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div><span className="eyebrow">TEM UM PROJETO OU UMA OPORTUNIDADE?</span><h3>Vamos construir algo <span>incrível.</span></h3><p>Estou aberto a trocar ideias, aprender com outras pessoas e conhecer novas oportunidades na área de tecnologia.</p></div>
              <div className="contact-links">
                <a className="contact-card" href="mailto:joaopedrotg23@gmail.com"><span className="contact-icon"><Mail size={20} /></span><span><small>E-MAIL</small><strong>joaopedrotg23@gmail.com</strong></span><ArrowUpRight size={17} /></a>
                <a className="contact-card" href="https://www.linkedin.com/in/joaootg/" target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin size={20} /></span><span><small>LINKEDIN</small><strong>Vamos nos conectar</strong></span><ArrowUpRight size={17} /></a>
                <a className="contact-card" href="https://github.com/jpedrotg23" target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={20} /></span><span><small>GITHUB</small><strong>Confira meus projetos</strong></span><ArrowUpRight size={17} /></a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#inicio"><span>&lt;</span>JP<span>/&gt;</span></a>
        <p>Desenvolvido por João Pedro Teixeira Guimarães</p>
        <a className="back-top" href="#inicio">VOLTAR AO TOPO ↑</a>
        <span className="footer-copy">© {new Date().getFullYear()} · Feito com React e Framer Motion</span>
      </footer>
    </>
  )
}

export default App
