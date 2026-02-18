
import  { useEffect } from 'react';
import './portafolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { 
  faLocationDot, faGraduationCap, 
  faPhone, faDatabase, faEnvelope, faBars
} from '@fortawesome/free-solid-svg-icons'; 
import { 
  faLinkedin, faGithub, faReact, faJsSquare, faVuejs, faGitSquare, 
  faNodeJs, faCss3, faHtml5, faWordpress, faFigma, faCodepen, 
  faAngular, faJava, faRust, faShopify, faPhp,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'; 

import Proyects from './Proyects.jsx'; 
import DescargarCV from './DescargasCV.jsx';
import Music from './Audio.jsx';
import imgyo from './assets/imp.png';
import { motion } from "framer-motion";
import cert1 from './assets/c1.png';
import cert2 from './assets/c2.png';
import cert3 from './assets/c3.png';
import cert4 from './assets/c4.png';
import cert5 from './assets/c5.png';
import cert6 from './assets/c6.png';
import cert7 from './assets/c7.png';
import cert8 from './assets/c8.png';
import cert9 from './assets/c9.png';

const certificatesData = [
  { id: 1, title: "HTML, CSS, JS", imgSrc: cert1, alt: "React Basics Certificate" },
  { id: 2, title: "DATA Science ETHICS", imgSrc: cert2, alt: "FullStack Certificate" },
  { id: 3, title: "Cybersecurity for Everyones", imgSrc: cert3, alt: "JavaScript Certificate" },
  { id: 4, title: "Python for Everybody", imgSrc: cert4, alt: "RWD Certificate" },
  { id: 5, title: "Supply Chain Analytics Essentials", imgSrc: cert5, alt: "Figma Certificate" },
  { id: 6, title: "Python to Access Web Data", imgSrc: cert8, alt: "Figma Certificate" },
  { id: 7, title: "Data Science Ethics", imgSrc: cert6, alt: "Figma Certificate" },
  { id: 8, title: "Python Data Structures", imgSrc: cert7, alt: "Figma Certificate" }, 
    { id: 9, title: "Pixel Art for Videogames", imgSrc: cert9, alt: "Figma Certificate" }, 

];

const certificateVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const Portafolio = ({ theme, setTheme }) => {
  return (
    <div className={`portfolio-wrapper ${theme}`}>
    <header className="hero-grid">
  
  <div className="grid-item profile-block">
    <div className="profile-placeholder">
      <motion.span initial={{scale:0}} animate={{scale:1}}>CB</motion.span>
    </div>
    <div className="profile-tag">
      <p>BASED IN USA</p>
      <p>SOFTWARE ENGINEER STUDENT</p>
    </div>
  </div>

  <div className="grid-item title-block">
    <h1 className="main-title">Port<br/>folio</h1>
  </div>

  <div className="grid-item deco-block">
    <div className="frame-deco"></div>
    <p className="quote">"The only way <strong>to do great work</strong> is to <strong>love what u do</strong>."</p>
    <div className="year-tag">- Steve Jobs</div>
  </div>


  <div className="grid-item intro-block">
    <div className="intro-content">
      <span className="availability-tag">● Digital Experience Designer</span>
      <h2>Cameron Charlotte <br/><em>Bustamante</em></h2>
      <p>Full-Stack Developer focused on React and modern web ecosystems. Passionate about problem-solving and minimalist UI.</p>
      <div className="action-row">
        <DescargarCV />
        <div className="hero-socials">
          <a href="#"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
    </div>
  </div>

  <div className="grid-item vertical-block">
    <div className="vertical-text">DESIGN</div>
  </div>

  
 
 
 

  <div className="grid-item music-ad-block">
  <div className="ad-header">
    <span className="ad-label">SPECIAL SELECTION</span>
    <span className="ad-id">VOL. 26</span>
  </div>
  
  <div className="ad-content">
    <h4 className="ad-title">SONIC</h4>
    <h4 className="ad-title-outline">TEXTURES</h4>
    <div className="music-player-mini">
       <Music /> {/* Tu componente de audio aquí */}
    </div>
  </div>

  <div className="ad-footer">
    <p>PRESS PLAY TO CURATE YOUR EXPERIENCE</p>
  </div>
</div>
<div className="grid-item work-status-block">
  <div className="work-meta">
    <span className="status-label">STATUS // ACTIVE</span>
  </div>
  
  <div className="work-main">
    <h3 className="work-title">Freelancer</h3>
    <p className="work-subtitle">Currently collaborating with <em>Riffazo </em>  as Frontend Developer.</p>
  </div>

  <div className="work-footer">
    <div className="footer-line"></div>
    <div className="footer-details">
      <span>EST. 2024</span>
      <span>Remote</span>
    </div>
  </div>
</div>
 <div className="grid-item footer-hero">
      <p>SELECTED WORKS</p>
      <strong>↓ SCROLL</strong>
  </div>
</header>



      <main className="container-editorial">
          <div className="about-split-container">
    <motion.div 
      className="about-image-side"
      initial={{ x: "-100%" }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <img src={imgyo} alt="Profile" />
    </motion.div>

    <motion.div 
      className="about-text-side"
      initial={{ x: "100%" }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <div className="text-content">
        <span className="section-label">01 // BIOGRAPHY</span>
        <h2 className="editorial-title">Cameron Charlotte <em>Bustamante</em></h2>
        <p className="editorial-p">
          I combine <strong>creativity</strong> with <strong>functionality</strong> to build efficient web solutions. 
          Currently expanding my horizons with <strong>Rust</strong> and advanced Backend architectures.
        </p>
        <div className="editorial-signature">C. Bustamante — 2026</div>
      </div>
    </motion.div>
  </div>
    <section className="skills-editorial-section">
  <div className="skills-header">
    <h2 className="tec-title">CORE <em>SKILLS</em></h2>
    <div className="header-line"></div>
  </div>

  <div className="skills-magazine-grid">
    <div className="skill-column">
      <span className="skill-cat">FRONTEND</span>
      <div className="skill-item">
        <FontAwesomeIcon icon={faReact} className="skill-icon-big" />
        <div className="skill-info">
          <small>Advanced Frameworks & Hooks</small>
        </div>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon={faJsSquare} className="skill-icon-big" />
        <div className="skill-info">
          <small>ES6+ Architecture & Logic</small>
        </div>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon={faHtml5} className="skill-icon-big" />
        <div className="skill-info">
          <small>Semantic UI & Responsive Design</small>
        </div>
      </div>
    </div>

    <div className="skill-column">
      <span className="skill-cat">BACKEND</span>
      <div className="skill-item">
        <FontAwesomeIcon icon={faNodeJs} className="skill-icon-big" />
        <div className="skill-info">
          <small>Rest APIs & Serverless</small>
        </div>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon={faRust} className="skill-icon-big" />
        <div className="skill-info">
          <small>High-Performance Systems</small>
        </div>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon={faDatabase} className="skill-icon-big" />
        <div className="skill-info">
          <small>SQL & NoSQL Data Management</small>
        </div>
      </div>
    </div>

    {/* COLUMNA 3: TOOLS */}
    <div className="skill-column">
      <span className="skill-cat">SYSTEMS</span>
      <div className="skill-item">
        <FontAwesomeIcon icon={faFigma} className="skill-icon-big" />
        <div className="skill-info">
          <small>UI/UX Prototyping</small>
        </div>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon={faGitSquare} className="skill-icon-big" />
        <div className="skill-info">
          <small>Version Control & Workflow</small>
        </div>
      </div>
      <div className="skill-item">
        <FontAwesomeIcon icon={faShopify} className="skill-icon-big" />
        <div className="skill-info">
          <small>E-commerce Solutions</small>
        </div>
      </div>
    </div>
  </div>
</section>
        <Proyects />
        
        <section className="certificates-section">
            <h2 className="section-title">CERTIFICATES</h2>
            <div className="certificates-grid">
                {certificatesData.map(cert => (
                    <motion.div key={cert.id} className="cert-card-minimal" variants={certificateVariants} initial="hidden" whileInView="visible">
                        <img src={cert.imgSrc} alt={cert.title} />
                        <div className="cert-info">
                            <h3>{cert.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>

          
   
      </main>
  


      <footer className="footer-editorial">
         <div className="footer-top">
            <h2>LET'S WORK <br/><em>TOGETHER</em></h2>
            <div className="footer-contact-info">
                <p>cameronbustamante2@gmail.com</p>
                <p>+1 (760) 888-7377</p>
            </div>
         </div>
         <div className="footer-bottom">
            <p>© {new Date().getFullYear()} CAMERON BUSTAMANTE</p>
            <div className="footer-links">
                <a href="#about">About</a>
                <a href="#projects">Work</a>
                <a href="#contact">Contact</a>
            </div>
         </div>
      </footer>
      <Music />
    </div>
  );
};

export default Portafolio;