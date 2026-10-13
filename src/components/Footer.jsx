import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >

      <div className="footer-content">

        <div className="logo">
          <span>&lt;</span>JP<span>/&gt;</span>
        </div>

        <p>
          Desenvolvido por João Pedro
        </p>

        <div className="footer-social">

          <a
            href="https://github.com/jpedrotg23"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="devicon-github-original"></i>
          </a>

          <a href="mailto:joaopedrotg23@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 João Pedro Teixeira Guimarães
        </p>

        <p>
          Ciência da Computação
        </p>

      </div>

    </motion.footer>
  );
}

export default Footer;