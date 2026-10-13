import { motion } from "framer-motion";

function Hero() {
  return (
    <header className="hero">

      <div className="hero-content">

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <motion.p
            className="terminal-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <span>$</span> whoami
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            João Pedro
            <span>Teixeira Guimarães</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Estudante de Ciência da Computação
            <span>|</span>
            Desenvolvedor em formação
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Construindo soluções através de código, tecnologia
            e aprendizado contínuo.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >

            <a href="#projetos" className="btn btn-primary">
              <i className="fa-solid fa-code"></i>
              Ver projetos
            </a>

            <a
              href="https://github.com/jpedrotg23"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>

          </motion.div>

        </motion.div>

        <motion.div
          className="hero-terminal"
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >

          <div className="terminal-header">

            <div className="terminal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>joao@developer:~</p>

          </div>

          <div className="terminal-body">

            <p>
              <span className="red">$</span> cat about.txt
            </p>

            <p className="terminal-output">
              Ciência da Computação
            </p>

            <p className="terminal-output">
              Desenvolvimento de Software
            </p>

            <p className="terminal-output">
              Suporte Técnico
            </p>

            <p className="terminal-output">
              Troubleshooting
            </p>

            <p>
              <span className="red">$</span>
              <span className="cursor">_</span>
            </p>

          </div>

        </motion.div>

      </div>

    </header>
  );
}

export default Hero;