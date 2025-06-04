import React, { useState } from "react";
import Proyectope from './assets/proyecto1.jpg';
import Proyectope2 from './assets/proyect2.jpg';
import Proyectope4 from './assets/proyect4.jpg';
import Proyectope3 from './assets/proyecct3.png';
import Proyectope5 from './assets/proyecto5.png';
import Proyectope6 from './assets/proyecto6.png';
import Proyectope7 from './assets/proyecto7.png'
import Proyectope8 from './assets/proyecto8.png'

import './portafolio.css';
const Proyects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const proyects = [
    {
      title: "Supermarket 🛒",
description: "Este proyecto ha sido desarrollado para ofrecer una experiencia de compra de alimentos fluida e intuitiva." ,     
image: Proyectope,
      link: "https://cameronbustamanteleveau2.github.io/Mercadona/"
    },
    {
      title: "Coffe Spring 🍁",
      description: "Este proyecto es una página de aterrizaje para una encantadora cafetería con temática primaveral.",
      image: Proyectope3,
      link: "https://cameronbustamanteleveau2.github.io/CoffeSite/"
    },
  
    {
      title: "Sushi Bar 🍣",
      description: "Este proyecto está dedicado a ofrecer sushi y otros platos tradicionales japoneses.",
      image: Proyectope2,
      link: "https://cameronbustamanteleveau2.github.io/SushiBar/"
    },
    {
        title: "Recipedia 🥙",
        description: "Este proyecto es una plataforma diseñada para la gestión eficiente de menús ",
        image: Proyectope4,
        link: "#"
      },
      {
        title: "D´Calida Alojamiento 🏬",
        description: "Este proyecto está dedicado a ofrecer un servicio de alojamiento cómodo.",
        image: Proyectope6,
        link: "https://dcalida.vercel.app"
      },
      {
        title: "Warmi Oven 🍪",
        description: "Este proyecto es una plataforma diseñada para la venta de deliciosas galletas y kekes ",
        image: Proyectope5,
        link: "https://warmi-oven.vercel.app"
      },
       {
        title: "Dana Boutique 🌼" ,
        description: "Este proyecto es una plataforma diseñada para la venta de deliciosas galletas y kekes ",
        image: Proyectope7,
        link: "En producción"
      },
       {
        title: "Patitas 🐾" ,
        description: "Este proyecto es una plataforma diseñada para la venta de deliciosas galletas y kekes ",
        image: Proyectope7,
        link: "En producción"
      },
         {
        title: "FinEdu " ,
        description: "Este proyecto es una plataforma diseñada para la venta de deliciosas galletas y kekes ",
        image: Proyectope8,
        link: "En producción"
      }
  ];

  const handleLeftClick = () => {
    setCurrentIndex(prevIndex => {
        return prevIndex === 0 ? 0 : prevIndex - 1;

    });
  };
const handleRightClick = () => {
  setCurrentIndex(prevIndex => {
    const nextIndex = prevIndex + 1
    // Si el siguiente grupo de 3 se sale del array, no avanzar más
    return nextIndex <= proyects.length -1 ? nextIndex : prevIndex;
  });
};


  return (
    <section id="proyectos" className="projects">
      <div className="container">
        <h2 className="proyect-tittle">Projectos</h2>
        <div className="project-carousel">
          <button className="carousel-arrow left-arrow" onClick={handleLeftClick}>←</button>
          <div className="project-cards" style={{ transform: `translateX(-${currentIndex *100}%)`, transition: 'transform 0.3s ease' }}>
            {proyects.map((project, index) => (
              <div className="project-card" key={index}>
                <img className="proyect-image" src={project.image} alt={project.title} />
                <h3 className="project-title">{project.title}</h3>
                <p className="proyect-description">{project.description}</p>
                <a href={project.link}>View Project</a>
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
