import React, { useState } from "react";
import './portafolio.css';
import { motion, AnimatePresence } from "framer-motion";
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
import Proyecto13 from './assets/litc.png'
import Proyecto14 from './assets/proyecto14.png';

const MobileMockup = ({ images }) => {
  const [imgIndex, setImgIndex] = useState(0);

  const next = (e) => {
    e.preventDefault();
    setImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prev = (e) => {
    e.preventDefault();
    setImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="mobile-device">
      <div className="mobile-screen">
        <img src={images[imgIndex]} alt="App screenshot" />
        
        {/* Controles internos del celular */}
        <button className="inner-arrow left" onClick={prev}>‹</button>
        <button className="inner-arrow right" onClick={next}>›</button>
        
        {/* Indicadores de bolitas */}
        <div className="dots-indicator">
          {images.map((_, i) => (
            <span key={i} className={i === imgIndex ? "dot active" : "dot"}></span>
          ))}
        </div>
      </div>
      <div className="mobile-home-btn"></div>
    </div>
  );
};
 

const Proyects = () => {
  const [filter, setFilter] = useState("All");

    const projects = [
    
    {
      title: "Supermarket 🛒",
      category: "Web",
      description: "A web app designed to deliver a smooth grocery shopping experience.",
      image: Proyectope, // Las Web solo llevan una imagen
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
      description: "An Event Management Platform that simplifies event organization and enhances attendee experience through QR code technology.",
      image: Proyectope11,
      link: "#",
      tags: ["#UX ", " #Service"]
    },
     { title: "Riffazo",
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
      description: "An mobile application for lab tracking.",
      images: [Proyectope12, Proyectope11, Proyectope10], 
      link: "#",
      tags: ["#Android", "#Kotlin"]
    }
  ];
const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-editorial">
      <div className="container-wide">
        <div className="projects-header">
          <h2 className="section-title">Selected <br/><em>Works</em></h2>
          <div className="filter-buttons">
            {["All", "Web", "Android"].map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`filter-btn ${filter === cat ? "active" : ""}`}>{cat}</button>
            ))}
          </div>
        </div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout 
                key={project.title}
                className={`project-card-editorial ${project.category === 'Android' ? 'is-mobile' : 'is-web'}`}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              >
                {project.category === "Android" ? (
                  <MobileMockup images={project.images} />
                ) : (
                  <div className="project-img-box">
                    <img src={project.image} alt={project.title} />
                  </div>
                )}

                <div className="project-info-editorial">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} className="link-arrow">View Case Study <span>→</span></a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Proyects;