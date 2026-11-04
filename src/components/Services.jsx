import { motion } from "framer-motion";

const services = [
  {
    icon: "fa-solid fa-building",
    name: "Sites institucionais",
    description: "Sites para apresentar empresas, profissionais, serviços e negócios na internet.",
    deliverables: ["Estrutura de páginas", "Layout responsivo", "Informações e contato"],
  },
  {
    icon: "fa-solid fa-bullhorn",
    name: "Landing Pages",
    description: "Páginas para divulgar produtos, serviços, eventos e campanhas com foco em apresentação.",
    deliverables: ["Seção principal", "Conteúdo organizado", "Chamada para contato"],
  },
  {
    icon: "fa-solid fa-store",
    name: "Catálogos digitais",
    description: "Catálogos online para profissionais e pequenos negócios apresentarem seu trabalho.",
    deliverables: ["Produtos ou serviços", "Galeria de imagens", "Canais de contato"],
  },
  {
    icon: "fa-solid fa-user-tie",
    name: "Portfólios profissionais",
    description: "Portfólios personalizados para apresentar trabalhos, projetos e competências.",
    deliverables: ["Apresentação profissional", "Projetos em destaque", "Links de contato"],
  },
  {
    icon: "fa-solid fa-table-columns",
    name: "Interfaces e painéis web",
    description: "Interfaces, sistemas de apresentação, dashboards e protótipos conforme os requisitos.",
    deliverables: ["Interface responsiva", "Componentes reutilizáveis", "Fluxos de navegação"],
  },
];

function Services() {
  return (
    <motion.section id="servicos" className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="section-title">
        <span>03.</span>
        <h2>Serviços que posso desenvolver</h2>
        <div className="line"></div>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.article className="service-card" key={service.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <i className={service.icon}></i>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <ul>
              {service.deliverables.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a href="#contato" className="card-link">Fale comigo <i className="fa-solid fa-arrow-right"></i></a>
          </motion.article>
        ))}
      </div>

      <div className="services-callout">
        <p>Tem uma ideia ou precisa de uma presença digital profissional? Vamos conversar sobre seu projeto.</p>
        <a href="#contato" className="btn btn-primary">Vamos conversar</a>
      </div>
    </motion.section>
  );
}

export default Services;
