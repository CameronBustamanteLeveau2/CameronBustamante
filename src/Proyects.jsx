import React, { useState } from "react";
import './portafolio.css';
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { 
  faHtml5, 
  faCss3Alt, 
  faJsSquare, 
  faReact, 
  faNodeJs, 
  faPython, 
  faAngular, 
  faJava, 
  faShopify, 
  faVuejs 
} from '@fortawesome/free-brands-svg-icons';

import { 
  faLeaf, 
  faDatabase, 
  faCode, 
  faFire,
  faPalette,   // Agregado
  faMobileAlt, // Agregado
  faTerminal   // Agregado
} from '@fortawesome/free-solid-svg-icons';
import Proyectope from './assets/proyecto1.jpg';
import Proyectope2 from './assets/proyect2.jpg';
import Proyectope4 from './assets/proyect4.jpg';
import Proyectope3 from './assets/proyecct3.png';
import Proyectope5 from './assets/proyecto5.png';
import Proyectope6 from './assets/proyecto6.png';
import Proyectope7 from './assets/proyecto7.png';
import Proyectope8 from './assets/proyecto8.png';
import Proyectope9 from './assets/projecto9.png';
import Proyectope10 from './assets/projecto10.png';
import Proyectope11 from './assets/projecto11.png';
import Proyectope12 from './assets/bikelab.png';
import Proyecto13 from './assets/litc.png';
import Proyecto14 from './assets/proyecto14.png';

const Proyects = () => {
  const [filter, setFilter] = useState("All");

const projects = [
  {
    title: "Supermarket 🛒",
    category: "Web",
    description: "A web app designed to deliver a smooth grocery shopping experience.",
    image: Proyectope,
    techStack: [
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3", icon: faCss3Alt },
      { name: "JavaScript", icon: faJsSquare }
    ],
    link: "https://cameronbustamanteleveau2.github.io/Mercadona/",
  },
  {
    title: "Coffee Spring 🍁",
    category: "Web",
    description: "Landing page for a charming spring-themed coffee shop with modern UI design.",
    image: Proyectope3,
    techStack: [
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3", icon: faCss3Alt },
      { name: "JavaScript", icon: faJsSquare }
    ],
    link: "https://cameronbustamanteleveau2.github.io/CoffeSite/",
  },
  {
    title: "Sushi Bar 🍣",
    category: "Web",
    description: "Japanese restaurant website showcasing sushi and traditional dishes.",
    image: Proyectope2,
    techStack: [
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3", icon: faCss3Alt }
    ],
    link: "https://cameronbustamanteleveau2.github.io/SushiBar/",
  },
  {
    title: "Recipedia 🥙",
    category: "Web",
    description: "A platform for efficient recipe and menu management.",
    image: Proyectope4,
    techStack: [
      { name: "Python", icon: faPython },
      { name: "Flask", icon: faLeaf },
      { name: "MySQL", icon: faDatabase }
    ],
    link: "#",
  },
  {
    title: "D´Calida Accommodation 🏬",
    category: "Web", 
    description: "A website offering a comfortable accommodation booking experience.",
    image: Proyectope6,
    techStack: [
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3", icon: faCss3Alt }
    ],
    link: "https://dcalida.vercel.app",
  },
  {
    title: "Warmi Oven 🍪",
    category: "Web",
    description: "An e-commerce platform for selling homemade cookies and cakes.",
    image: Proyectope5,
    techStack: [
      { name: "Shopify", icon: faShopify },
      { name: "Liquid", icon: faCode },
      { name: "CSS3", icon: faCss3Alt }
    ],
    link: "https://warmi-oven.vercel.app",
  },
  {
    title: "Dana Boutique 🌼",
    category: "Web",
    description: "Fashion boutique platform currently in development.",
    image: Proyectope7,
    techStack: [
      { name: "React", icon: faReact },
      { name: "Tailwind", icon: faPalette },
      { name: "Next.js", icon: faCode }
    ],
    link: "#",
  },
  {
    title: "Fix Now 🔧",
    category: "Web",
    description: "Connects users with local technicians for quick fixes.",
    image: Proyectope9,
    techStack: [
      { name: "Angular", icon: faAngular },
      { name: "Java", icon: faJava },
      { name: "Spring", icon: faLeaf },
      { name: "MySQL", icon: faDatabase }
    ],
    link: "#",
  },
  {
    title: "FinEdu 📚",
    category: "Web",
    description: "Educational finance platform designed to promote financial literacy.",
    image: Proyectope8,
    techStack: [
      { name: "TypeScript", icon: faJsSquare },
      { name: "Angular", icon: faAngular },
      { name: "Java", icon: faJava },
      { name: "Spring", icon: faLeaf }
    ],
    link: "#",
  },
  {
    title: "Jobsy",
    category: "Web",
    description: "An app that connects users with local job opportunities.",
    image: Proyectope10,
    techStack: [
      { name: "Vue.js", icon: faVuejs },
      { name: "C#", icon: faCode },
      { name: "MySQL", icon: faDatabase }
    ],
    link: "#",
  },
  {
    title: "EventQR",
    category: "Web",
    description: "An Event Management Platform that simplifies event organization through QR codes.",
    image: Proyectope11,
    techStack: [
      { name: "React", icon: faReact },
      { name: "Node.js", icon: faNodeJs },
      { name: "MongoDB", icon: faDatabase }
    ],
    link: "#",
  },
  { 
    title: "Riffazo",
    category: "Web",
    description: "A mobile application for the creation of raffles.",
    image: Proyecto14,
    techStack: [
      { name: "Next.js", icon: faCode },
      { name: "React", icon: faReact },
      { name: "Tailwind", icon: faPalette }
    ],
    link: "#",
  },
  {
    title: "Fan Page",
    category: "Web",
    description: "A fan page about Lost In The Cloud story.",
    image: Proyecto13,
    techStack: [
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3", icon: faCss3Alt },
      { name: "JavaScript", icon: faJsSquare }
    ],
    link: "#",
  },
  {
    title: "BikeLab",
    category: "Android",
    description: "A mobile application for bike tracking.",
    image: Proyectope12, 
    techStack: [
      { name: "Flutter", icon: faMobileAlt },
      { name: "Dart", icon: faTerminal },
      { name: "Persistence", icon: faDatabase }
    ],
    link: "#",
  }
];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="projects-editorial">
      <div className="projects-header-editorial">
        <h2 className="archive-title">Archive</h2>
        <div className="filter-buttons-editorial">
          {["All", "Web", "Android"].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn-lux ${filter === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="projects-grid-editorial">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.title}
              className="project-card-editorial"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <div className="project-img-box-lux">
                <motion.img 
                  src={project.image || project.images[0]} 
                  alt={project.title}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
                />
              </div>
<div className="project-info-editorial">
  <span className="category-label">{project.category}</span>
  <h3>{project.title}</h3>
  <p>{project.description}</p>
  
  <div className="tech-section">
  <div className="tech-icons-row">
  {project.techStack && project.techStack.map((tech, index) => (
    <div key={index} className="tech-item-editorial">
      <FontAwesomeIcon icon={tech.icon} className="tech-icon-svg" />
      <span className="tech-label-caption">{tech.name}</span>
    </div>
  ))}
</div>
  </div>

 <a href={project.link} target="_blank" rel="noreferrer" className="view-project-link">
  <span className="link-text">VIEW PROJECT</span>
  <span className="arrow-wrapper">
    <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
  </span>
</a>
</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Proyects;