import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="sobre"
      className="section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >

      <div className="section-title">
        <span>01.</span>
        <h2>Sobre mim</h2>
        <div className="line"></div>
      </div>

      <div className="about-grid">

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p>
            Sou estudante de <strong>Ciência da Computação</strong>
            e tenho interesse em desenvolvimento de software,
            tecnologia e resolução de problemas.
          </p>

          <p>
            Possuo conhecimentos em
            <strong>
              Java, HTML, CSS, JavaScript,
              TypeScript e React Native
            </strong>,
            além de experiência prática com suporte técnico,
            troubleshooting e diagnóstico de sistemas.
          </p>

          <p>
            Atualmente busco ampliar minha experiência prática,
            fortalecer minha base técnica e evoluir constantemente
            como desenvolvedor.
          </p>

        </motion.div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, x: 40, rotateY: 15 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="code-line">
            <span className="number">01</span>
            <span className="code">const</span>
            <span className="variable">developer</span>
            <span>=</span>
            <span className="bracket">{"{"}</span>
          </div>

          <div className="code-line indent">
            <span className="number">02</span>
            <span className="property">nome:</span>
            <span className="string">"João Pedro"</span>,
          </div>

          <div className="code-line indent">
            <span className="number">03</span>
            <span className="property">curso:</span>
            <span className="string">
              "Ciência da Computação"
            </span>,
          </div>

          <div className="code-line indent">
            <span className="number">04</span>
            <span className="property">foco:</span>
            <span className="string">
              "Desenvolvimento"
            </span>,
          </div>

          <div className="code-line indent">
            <span className="number">05</span>
            <span className="property">aprendendo:</span>
            <span className="string">
              "Sempre"
            </span>
          </div>

          <div className="code-line">
            <span className="number">06</span>
            <span className="bracket">{"};"}</span>
          </div>

        </motion.div>

      </div>

    </motion.section>
  );
}

export default About;