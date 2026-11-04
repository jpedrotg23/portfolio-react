import { motion } from "framer-motion";

const steps = [
  ["01", "Conversa inicial", "Entender a ideia, o público e as necessidades do projeto."],
  ["02", "Planejamento", "Definir escopo, funcionalidades e proposta de desenvolvimento."],
  ["03", "Desenvolvimento", "Construir a solução e acompanhar a evolução do trabalho."],
  ["04", "Revisão e entrega", "Realizar ajustes e disponibilizar a versão final acordada."],
];

function Process() {
  return (
    <motion.section id="processo" className="section" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="section-title">
        <span>05.</span>
        <h2>Como funciona o desenvolvimento</h2>
        <div className="line"></div>
      </div>
      <div className="process-grid">
        {steps.map(([number, title, description]) => (
          <article className="process-step" key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

export default Process;
