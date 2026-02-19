import React, { useState } from "react";
import './portafolio.css';
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
      link: "https://cameronbustamanteleveau2.github.io/Mercadona/",
      tags: ["#Web", "#React"]
    },
    {
      title: "Coffee Spring 🍁",
      category: "Web",
      description: "Landing page for a charming spring-themed coffee shop with modern UI design.",
      image: Proyectope3,
      link: "https://cameronbustamanteleveau2.github.io/CoffeSite/",
      tags: [" #Web", " #LandingPage"]
    },
    {
      title: "Sushi Bar 🍣",
      category: "Web",
      description: "Japanese restaurant website showcasing sushi and traditional dishes.",
      image: Proyectope2,
      link: "https://cameronbustamanteleveau2.github.io/SushiBar/",
      tags: [" #Web", " #Food"]
    },
    {
      title: "Recipedia 🥙",
      category: "Web",
      description: "A platform for efficient recipe and menu management with easy navigation.",
      image: Proyectope4,
      link: "#",
      tags: [" #Web ", " #FoodTech"]
    },
    {
      title: "D´Calida Accommodation 🏬",
      category: "Web", 
      description: "A website offering a comfortable accommodation booking experience.",
      image: Proyectope6,
      link: "https://dcalida.vercel.app",
      tags: [" #Web", " #Booking"]
    },
    {
      title: "Warmi Oven 🍪",
      category: "Web",
      description: "An e-commerce platform for selling homemade cookies and cakes.",
      image: Proyectope5,
      link: "https://warmi-oven.vercel.app",
      tags: ["#Web ", " #E-commerce"]
    },
    {
      title: "Dana Boutique 🌼",
      category: "Web",
      description: "Fashion boutique platform currently in development.",
      image: Proyectope7,
      link: "#",
      tags: ["#Web ", " #Fashion"]
    },
    {
      title: "Fix Now 🔧",
      category: "Web",
      description: "UX concept for an app that connects users with local technicians for quick fixes.",
      image: Proyectope9,
      link: "#",
      tags: ["#UX ", " #Service"]
    },
    {
      title: "FinEdu 📚",
      category: "Web",
      description: "Educational finance platform designed to promote financial literacy.",
      image: Proyectope8,
      link: "#",
      tags: ["#Web ", " #Education"]
    },
    {
      title: "Jobsy ",
      category: "Web",
      description: "UX concept for an app that connects users with local technicians for quick fixes.",
      image: Proyectope10,
      link: "#",
      tags: ["#UX ", " #Service"]
    },
    {
      title: "EventQR ",
      category: "Web",
      description: "An Event Management Platform that simplifies event organization through QR codes.",
      image: Proyectope11,
      link: "#",
      tags: ["#UX ", " #Service"]
    },
    { 
      title: "Riffazo",
      category: "Web",
      description: "An mobile application for the creation of raffles.",
      image: Proyecto14,
      link: "#",
      tags: ["#Web ", " #FrontEnd"]
    },
    {
      title: "Fan Page ",
      category: "Web",
      description: "A fan page about Lost In The Cloud story",
      image: Proyecto13,
      link: "#",
      tags: ["#Web ", " #FanPage"]
    },
    {
      title: "BikeLab",
      category: "Android",
      description: "An mobile application for bike tracking.",
      images: [Proyectope12, Proyectope11, Proyectope10], 
      link: "#",
      tags: ["#Android", "#Kotlin"]
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
                <a href={project.link} target="_blank" rel="noreferrer" className="view-project-link">
                  VIEW PROJECT <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
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