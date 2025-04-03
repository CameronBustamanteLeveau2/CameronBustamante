import React from 'react';
import './portafolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLocationDot, faGraduationCap, faMoon, faSun, faPhone, faDatabase, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub, faReact, faJsSquare, faVuejs, faGitSquare, faNodeJs, faCss3, faHtml5, faWordpress, faFigma, faCodepen } from '@fortawesome/free-brands-svg-icons'; 
import yoImage from './assets/yo.png';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import yoImage2 from "./assets/yo2.png";
import Proyects from './Proyects.jsx'; 
import DescargarCV from './DescargasCV.jsx';

const Portafolio = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme}>
      <header className="header">
        <div className="menu container">
          <a href="#" className="logo">CBL</a>
          <input type="checkbox" id="menu" />
          <label htmlFor="menu" className="menu-labe">
  <FontAwesomeIcon icon={faBars} />
</label>
          <nav className="navbar">
            <ul>
            <li><a href="#tecnologies">Tecnologías</a></li>
            <li><a href="#contact">Contacto</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            </ul>
            <div className="modes">
  <FontAwesomeIcon
    onClick={toggle_mode}
    icon={theme === 'light' ? faMoon : faSun}
    className="toogle-icon"
  />
</div>

          </nav>
        </div>
        <div className="header-content container">
          <div className="header-txt">
            <h1>Cameron Charllotte Bustamante</h1>

            <p className="slogan"><span>Entusiasta Desarolladora Web</span></p>
            {/* Sección de localización y grado */}
            <section className="location-grade">
  <div className="container">
    <div className="location">
      <FontAwesomeIcon className="dato-icon" icon={faLocationDot} />
      <p>Lima, Perú</p>
    </div>
    <div className="grade">
      <FontAwesomeIcon className="dato-icon" icon={faGraduationCap} />
      <p>Estudiante de Ingeniería de Software</p>
    </div>
  </div>
</section>

            {/* redes sociales */}
            <section className="social-media">
              <div className="container">
                <div className="social-icons">
                  <a className="pp" href="https://www.linkedin.com/in/cameron-charlotte-bustamante-a03329265/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="https://github.com/CameronBustamanteLeveau2?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <DescargarCV/>

                  </div>

              </div>
            </section>
          </div>
          <div className="header-img">
            <img src={theme === 'light' ? yoImage : yoImage2} alt="yo" />
          </div>
        </div>
      </header>

      <main>
      
      <section id="about-me" className="about-me">
          <div className="about-me-box">
            <h1>Acerca <span> de mi</span></h1> 
            
            <p> 
            Me apasiona la tecnología y el desarrollo web, con un enfoque en la creación de experiencias digitales intuitivas y atractivas. 
            <br/>
            <br/>Disfruto aprendiendo nuevas herramientas y perfeccionando mis habilidades en React.js, JavaScript, HTML, CSS y Git. Me motiva la resolución de problemas y la innovación, combinando creatividad con funcionalidad para desarrollar soluciones web eficientes.
            <br/>
            <br/>Comprometido con el aprendizaje continuo, estoy en constante evolución para adaptarme a las tendencias tecnológicas y aportar valor en cada proyecto que desarrollo.
               </p>
          </div>
        </section>




        <section id="tecnologies" className="tecnologies">
          <div className="container">
            <h1 className="tec-titulo">Tecnologías </h1>
            <div className="cards">
              {/* Sección de tecnologías */}
              <div className="card"><FontAwesomeIcon icon={faReact}  className="icono"/><h3>React</h3></div>
              <div className="card"><FontAwesomeIcon icon={faJsSquare}  className="icono"/><h3>JavaScript</h3></div>
              <div className="card"><FontAwesomeIcon icon={faNodeJs}  className="icono"/><h3>Node.js</h3></div>
              <div className="card"><FontAwesomeIcon icon={faCss3} className="icono" /><h3>CSS</h3></div>
              <div className="card"><FontAwesomeIcon icon={faGitSquare}  className="icono"/><h3>GIT</h3></div>
              <div className="card"><FontAwesomeIcon icon={faGithub}  className="icono"/><h3>Github</h3></div>

              <div className="card"><FontAwesomeIcon icon={faHtml5} className="icono" /><h3>HTML</h3></div>
              <div className="card"><FontAwesomeIcon icon={faDatabase}  className="icono"/><h3>NoSQL</h3></div>
              <div className="card"><FontAwesomeIcon icon={faVuejs}  className="icono"/><h3>Vue</h3></div>
              <div className="card"><FontAwesomeIcon icon={faWordpress}  className="icono"/><h3>WordPress</h3></div>
              <div className="card"><FontAwesomeIcon icon={faFigma}  className="icono"/><h3>Figma</h3></div>
              <div className="card"><FontAwesomeIcon icon={faCodepen}  className="icono"/><h3>CodePen</h3></div>


            </div>
          </div>
        </section>

        <Proyects /> {/* Aquí se inserta el componente Proyects */}
        
     


        <section id="contact" className="contact">
  <div className="container">
    <h1 className="titulo-contact">Contáctame</h1>
    <p className="contact-mensaje">Siéntete libre de contactarme a través de cualquiera de estos canales:</p>
    <div className="contact-details">
      <div className="contact-item">
        <FontAwesomeIcon icon={faPhone} />
        <p className="info">+51 954 838 805</p>
      </div>
      <div className="contact-item">
        <FontAwesomeIcon icon={faEnvelope} />
        <a href="mailto:cameronbustamante2@gmail.com?subject=Contacto&body=Hola, estoy interesado " className="info" >
        cameronbustamante2@gmail.com
          </a>        
      </div>
      <div className="contact-item">
        <FontAwesomeIcon icon={faCode} />
        <p className="info">I love coding</p>
      </div>
    </div>
  </div>
</section>



      </main>

     <footer>
  <div className="footer-content">
    <ul>
      <li><a href="#tecnologies">Tecnologías</a></li>
      <li><a href="#contact">Contacto</a></li>
      <li><a href="#proyectos">Proyectos</a></li>
    </ul>
    <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="footer-link">
      https://www.linkedin.com/feed/
    </a>
  </div>
</footer>

    </div>
  );
};

export default Portafolio;
