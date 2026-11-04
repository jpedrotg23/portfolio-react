import { motion } from "framer-motion";
import { getTechnologyIcon } from "./technologyIcons";

const groups = [
  {
    title: "Desenvolvimento web",
    items: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Vite" },
      { name: "Tailwind CSS" },
      { name: "React Router" },
    ],
  },
  {
    title: "Desenvolvimento mobile",
    items: ["React Native", "Expo"],
  },
  {
    title: "Backend e serviços",
    items: ["Java", "Spring Boot", "Firebase", "Firebase Authentication", "Cloud Firestore", "Firebase Storage"],
  },
  {
    title: "Ferramentas e experiências",
    items: ["Git", "GitHub", "Gradle", "IntelliJ IDEA", "Visual Studio Code", "Godot", "GDScript", "Leaflet", "OpenStreetMap", "Nominatim", "Framer Motion"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

function Technologies() {
  return (
    <motion.section
      id="tecnologias"
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >

      <div className="section-title">
        <span>02.</span>
        <h2>Tecnologias & Conhecimentos</h2>
        <div className="line"></div>
      </div>

      <motion.div className="technology-groups">
        {groups.map((group, index) => (
          <motion.article className="technology-group" key={group.title} variants={cardVariants} transition={{ duration: 0.45, delay: index * 0.05 }}>
            <h3>{group.title}</h3>
            <div className="technology-list">
              {group.items.map((item) => {
                const name = typeof item === "string" ? item : item.name;
                return (
                  <span className="technology-item" key={name}>
                    <i className={getTechnologyIcon(name)} aria-hidden="true"></i>
                    <span>{name}</span>
                  </span>
                );
              })}
            </div>
          </motion.article>
        ))}
      </motion.div>

    </motion.section>
  );
}

export default Technologies;