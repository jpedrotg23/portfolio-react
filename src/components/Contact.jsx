import { motion } from "framer-motion";

function Contact() {
  const contacts = [
    {
      icon: "fa-solid fa-envelope",
      title: "E-mail",
      description: "joaopedrotg23@gmail.com",
      link: "mailto:joaopedrotg23@gmail.com",
    },
    {
      icon: "devicon-github-original",
      title: "GitHub",
      description: "Ver repositórios",
      link: "https://github.com/jpedrotg23",
    },
    {
      icon: "fa-brands fa-linkedin",
      title: "LinkedIn",
      description: "Meu perfil profissional",
      link: "https://www.linkedin.com/in/joaootg/",
    },
    {
      icon: "fa-brands fa-instagram",
      title: "Instagram",
      description: "@jpedrotg",
      link: "https://instagram.com/jpedrotg",
    },
  ];

  return (
    <motion.section
      id="contato"
      className="section contact-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >

      <div className="section-title">
        <span>06.</span>
        <h2>Contato</h2>
        <div className="line"></div>
      </div>

      <div className="contact-content">

        <motion.p
          className="contact-label"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Vamos conversar?
        </motion.p>

        <h2>
          Entre em contato comigo.
        </h2>

        <p>
          Quer conversar sobre uma ideia, tecnologia ou desenvolvimento?
          Vamos trocar uma ideia sobre seu projeto ou próxima oportunidade.
        </p>

        <motion.div
          className="contact-links"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >

          {contacts.map((contact) => (
            <motion.a
              key={contact.title}
              href={contact.link}
              target={contact.link.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`contact-card ${contact.primary ? "contact-card-primary" : ""}`}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 25,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
            >

              <i className={contact.icon}></i>

              <div>
                <strong>{contact.title}</strong>
                <span>{contact.description}</span>
              </div>

            </motion.a>
          ))}

        </motion.div>

      </div>

    </motion.section>
  );
}

export default Contact;