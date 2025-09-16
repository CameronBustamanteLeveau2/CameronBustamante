import React, { useState } from "react";
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


import './portafolio.css';

const Proyects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Supermarket 🛒",
      description: "A web app designed to deliver a smooth and intuitive online grocery shopping experience.",
      image: Proyectope,
      link: "https://cameronbustamanteleveau2.github.io/Mercadona/",
      tags: ["#Web", "#E-commerce"]
    },
    {
      title: "Coffee Spring 🍁",
      description: "Landing page for a charming spring-themed coffee shop with modern UI design.",
      image: Proyectope3,
      link: "https://cameronbustamanteleveau2.github.io/CoffeSite/",
      tags: ["#Web", "#LandingPage"]
    },
    {
      title: "Sushi Bar 🍣",
      description: "Japanese restaurant website showcasing sushi and traditional dishes.",
      image: Proyectope2,
      link: "https://cameronbustamanteleveau2.github.io/SushiBar/",
      tags: ["#Web", "#Food"]
    },
    {
      title: "Recipedia 🥙",
      description: "A platform for efficient recipe and menu management with easy navigation.",
      image: Proyectope4,
      link: "#",
      tags: ["#Web", "#FoodTech"]
    },
    {
      title: "D´Calida Accommodation 🏬",
      description: "A website offering a comfortable accommodation booking experience.",
      image: Proyectope6,
      link: "https://dcalida.vercel.app",
      tags: ["#Web", "#Booking"]
    },
    {
      title: "Warmi Oven 🍪",
      description: "An e-commerce platform for selling homemade cookies and cakes.",
      image: Proyectope5,
      link: "https://warmi-oven.vercel.app",
      tags: ["#Web", "#E-commerce"]
    },
    {
      title: "Dana Boutique 🌼",
      description: "Fashion boutique platform currently in development.",
      image: Proyectope7,
      link: "#",
      tags: ["#Web", "#Fashion"]
    },
    {
      title: "Fix Now 🔧",
      description: "UX concept for an app that connects users with local technicians for quick fixes.",
      image: Proyectope9,
      link: "#",
      tags: ["#UX", "#Service"]
    },
    {
      title: "FinEdu 📚",
      description: "Educational finance platform designed to promote financial literacy.",
      image: Proyectope8,
      link: "#",
      tags: ["#Web", "#Education"]
    },
     {
      title: "Jobsy ",
      description: "UX concept for an app that connects users with local technicians for quick fixes.",
      image: Proyectope10,
      link: "#",
      tags: ["#UX", "#Service"]
    }
  ];

  const handleLeftClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const handleRightClick = () => {
    setCurrentIndex(prevIndex => {
      const nextIndex = prevIndex + 1;
      return nextIndex <= projects.length - 1 ? nextIndex : prevIndex;
    });
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="project-title">Projects</h2>
        <div className="project-carousel">
          <button className="carousel-arrow left-arrow" onClick={handleLeftClick}>←</button>
          <div 
            className="project-cards" 
            style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.3s ease' }}
          >
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <img className="project-image" src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project
                </a>
              </div>
            ))}
          </div>
          <button className="carousel-arrow right-arrow" onClick={handleRightClick}>→</button>
        </div>
      </div>
    </section>
  );
};

export default Proyects;
