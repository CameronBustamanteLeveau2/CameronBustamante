
import React, { useState, useEffect } from 'react';
import './portafolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { 
  faLocationDot, faGraduationCap, faMoon, faSun, 
  faPhone, faDatabase, faEnvelope, faBars, faCode 
} from '@fortawesome/free-solid-svg-icons'; 
import { 
  faLinkedin, faGithub, faReact, faJsSquare, faVuejs, faGitSquare, 
  faNodeJs, faCss3, faHtml5, faWordpress, faFigma, faCodepen, 
  faAngular, faJava, faRust, faShopify 
} from '@fortawesome/free-brands-svg-icons'; 
import yoImage from './assets/yo.png';
import yoImage2 from "./assets/yo2.png";
import Proyects from './Proyects.jsx'; 
import DescargarCV from './DescargasCV.jsx';
import Music from './Audio.jsx';
import imgyo from './assets/imp.png';
import { motion } from "framer-motion";
import { faMailReply } from '@fortawesome/free-solid-svg-icons/faMailReply';
import cert1 from './assets/c1.png';
import cert2 from './assets/c2.png';
import cert3 from './assets/c3.png';
import cert4 from './assets/c4.png';
import cert5 from './assets/c5.png';
import cert6 from './assets/c6.png';
import cert7 from './assets/c7.png';
import cert8 from './assets/c8.png';
// Data for certificates
const certificatesData = [
  // Usa las variables importadas (cert1, cert2, etc.)
  { id: 1, title: "HTML, CSS, JS", imgSrc: cert1, alt: "React Basics Certificate" },
  { id: 2, title: "DATA Science ETHICS", imgSrc: cert2, alt: "FullStack Certificate" },
  { id: 3, title: "Cybersecurity for Everyones", imgSrc: cert3, alt: "JavaScript Certificate" },
  { id: 4, title: "Python for Everybody", imgSrc: cert4, alt: "RWD Certificate" },
  { id: 5, title: "Supply Chain Analytics Essentials", imgSrc: cert5, alt: "Figma Certificate" },
  { id: 6, title: "Python to Access Web Data", imgSrc: cert8, alt: "Figma Certificate" },
  { id: 7, title: "Data Science Ethics", imgSrc: cert6, alt: "Figma Certificate" },
  { id: 8, title: "Python Data Structures", imgSrc: cert7, alt: "Figma Certificate" }, // Corregido ID duplicado
];

// Framer Motion Variants for the grid items
const certificateVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};
const Portafolio = ({ theme, setTheme }) => {
  
  const toggle_mode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const cards = document.querySelectorAll('.card');

    const handleScroll = () => {
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          card.classList.add('zoom-in');
          card.classList.remove('zoom-out');
        } else {
          card.classList.add('zoom-out');
          card.classList.remove('zoom-in');
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={theme}>
      <header className="header">
        <div className="menu container">
          <a href="#" className="logo">CBL</a>
          <input type="checkbox" id="menu" />
          <label htmlFor="menu" className="menu-label">
            <FontAwesomeIcon icon={faBars} />
          </label>
          <nav className="navbar">
            <ul>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
            <div className="modes">
              <FontAwesomeIcon
                onClick={toggle_mode}
                icon={theme === 'light' ? faMoon : faSun}
                className="toggle-icon"
              />
            </div>
          </nav>
        </div>

        <div className="header-content container">
          <div className="header-txt">
            <motion.h1 
              initial={{ opacity: 0, y: -30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
            >
              Cameron Charllotte Bustamante
            </motion.h1>

            <motion.p 
              className="slogan"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.5 }}
            >
              <span>Web Developer</span>
            </motion.p>

            <section className="location-grade">
              <div className="container">
                <div className="location">
                  <FontAwesomeIcon className="dato-icon" icon={faLocationDot} />
                  <p> Coachella, CA</p>
                </div>
                <div className="grade">
                  <FontAwesomeIcon className="dato-icon" icon={faGraduationCap} />
                  <p>Software Engineering Student</p>
                </div>
              </div>
            </section>

            <section className="social-media">
              <div className="container">
                <div className="social-icons">
                  <a className="pp" href="https://www.linkedin.com/in/cameron-charlotte-bustamante-a03329265/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <DescargarCV/>
                </div>
              </div>
            </section>
          </div>

          <motion.div 
            className="header-img"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={theme === 'light' ? yoImage : yoImage2} alt="me" />
          </motion.div>
        </div>
        <Music/>
      </header>

      <main>
        
      {/* About Me */}
        <section id="about-me" className="about-me">
          <div className="about-me-box">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About <span>Me</span>
            </motion.h1>

            <motion.img
              src={imgyo}
              alt="laptop"
              className="imglap"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              I am passionate about technology and web development, focusing on creating intuitive and engaging digital experiences.<br/>
              I enjoy learning new tools and honing my skills in React.js, JavaScript, HTML, CSS, and Git.<br/>
              Motivated by problem-solving and innovation, I combine creativity with functionality to build efficient web solutions.<br/>
              Committed to continuous learning, I adapt to technological trends and bring value to every project I develop.
            </motion.p>
          </div>
        </section>
      
          <Proyects /> 

      




{/* Certificates - Modern Flip Card Grid */}
<section id="certificates" className="fade-in">
    <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
    >
        Certificates
    </motion.h1>

    <motion.div
        className="certificates-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
    >
        {certificatesData.map((cert) => (
            <motion.div
                key={cert.id}
                className="certificate-item"
                variants={certificateVariants}
                // Quitamos el onClick del contenedor principal, la imagen se mostrará al voltear
            >
                <div className="flip-card-inner">
                    
                    {/* CARA FRONTAL (La Imagen) */}
                    <div className="flip-card-front">
                        <img src={cert.imgSrc} alt={cert.alt} />
                    </div>

                    {/* CARA TRASERA (El Título/Info) */}
                    <div className="flip-card-back">
                        <h3>{cert.title}</h3>
                        <p>Issued by: {cert.issuer}</p>
                        <a 
                            href={cert.imgSrc} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ color: '#fff', textDecoration: 'underline' }}
                        >
                            View Credential
                        </a>
                    </div>
                </div>
            </motion.div>
        ))}
    </motion.div>
</section>

  {/* Technologies */}
     <section id="technologies" className="technologies fade-in">
  <h1 className="tec-title">Knowledge and Skills</h1>

  <div className="carousel">
    <div className="carousel-track">
      <div className="card"><FontAwesomeIcon icon={faHtml5} className="icono"/><h3>HTML</h3></div>
      <div className="card"><FontAwesomeIcon icon={faCss3} className="icono"/><h3>CSS</h3></div>
      <div className="card"><FontAwesomeIcon icon={faJsSquare} className="icono"/><h3>JavaScript</h3></div>
      <div className="card"><FontAwesomeIcon icon={faReact} className="icono"/><h3>React</h3></div>
      <div className="card"><FontAwesomeIcon icon={faVuejs} className="icono"/><h3>Vue</h3></div>
      <div className="card"><FontAwesomeIcon icon={faAngular} className="icono"/><h3>Angular</h3></div>
      <div className="card"><FontAwesomeIcon icon={faNodeJs} className="icono"/><h3>Node.js</h3></div>
      <div className="card"><FontAwesomeIcon icon={faJava} className="icono"/><h3>Java</h3></div>
      <div className="card"><FontAwesomeIcon icon={faRust} className="icono"/><h3>Rust</h3></div>
      <div className="card"><FontAwesomeIcon icon={faDatabase} className="icono"/><h3>NoSQL</h3></div>
      <div className="card"><FontAwesomeIcon icon={faGitSquare} className="icono"/><h3>Git</h3></div>
      <div className="card"><FontAwesomeIcon icon={faGithub} className="icono"/><h3>GitHub</h3></div>
      <div className="card"><FontAwesomeIcon icon={faCodepen} className="icono"/><h3>CodePen</h3></div>
      <div className="card"><FontAwesomeIcon icon={faFigma} className="icono"/><h3>Figma</h3></div>
      <div className="card"><FontAwesomeIcon icon={faWordpress} className="icono"/><h3>WordPress</h3></div>
      <div className="card"><FontAwesomeIcon icon={faShopify} className="icono"/><h3>Shopify</h3></div>

    
    </div>
  </div>
</section>


      </main>
      
  
   {/* Contact */}
<section id="contact" className="contact">
  <div className="container">
    <motion.h1 
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Get in <span>Touch</span>
    </motion.h1>

    <motion.p 
      className="contact-message"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      I’d love to hear from you! Whether it’s about a project, collaboration, or just a chat.
    </motion.p>

    <div className="contact-grid">
      {/* Info */}
      <motion.div 
        className="contact-info"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} />
          <p>+51 954 838 805</p>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="mailto:cameronbustamante2@gmail.com">click here to gmail </a>
        </div>
      </motion.div>

    
    </div>
  </div>
</section>
      {/* Footer with Message Box */}
      <footer className="footer">
        <div className="footer-content">
          <nav className="footer-nav">
            <ul>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </nav>

          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/cameron-bustamante-a03329265"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
              <a
              href="https://github.com/CameronBustamanteLeveau2"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub

            </a>
              <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <FontAwesomeIcon icon={faMailReply} /> Gmail
            </a>
          </div>

  
         {/* Form */}
      <motion.form 
        className="contact-form"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="btn-submit">Send Message</button>
      </motion.form>

          <p className="footer-copy">&copy; {new Date().getFullYear()} Cameron Bustamante. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portafolio;
