import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre mim", href: "#sobre" },
    { name: "Tecnologias", href: "#tecnologias" },
    { name: "Serviços", href: "#servicos" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <a className="logo" href="#inicio" aria-label="Ir para o início" onClick={() => setMenuOpen(false)}>
        <span>&lt;</span>JP<span>/&gt;</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </button>

      <div id="primary-navigation" className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            aria-label={`Ir para ${link.name}`}
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.4,
            }}
          >
            {link.name}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;