
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Keyboard } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faDatabase,
  faLayerGroup,
  faMobileAlt,
  faTerminal,
  faPalette,
faGlobeAmericas,
  faCompass,       
  faFeatherAlt    
} from '@fortawesome/free-solid-svg-icons';

import {
  faGithub,
  faReact,
  faJs,
  faNodeJs,
  faPython
} from '@fortawesome/free-brands-svg-icons';

import 'swiper/css/bundle';
import { motion } from "framer-motion";

import Proyects from './Proyects.jsx';
import DescargarCV from './DescargasCV.jsx';

import cert1 from './assets/c1.png';
import cert2 from './assets/c2.png';
import cert3 from './assets/c3.png';
import cert5 from './assets/c5.png';
import cert7 from './assets/c7.png';
import cert8 from './assets/c8.png';
import cert9 from './assets/c9.png';
import cert10 from './assets/c10.png';
import cert11 from './assets/c11.png';
import cert12 from './assets/c12.png';
import cert13 from './assets/c13.png';
import cert14 from './assets/c14.png';  

const certificatesData = [
  { id: 1, title: "HTML, CSS, and Javascript for Web Developers", imgSrc: cert1 },
  { id: 2, title: "Data Science Ethics", imgSrc: cert2 },
  { id: 3, title: "Cybersecurity for Everyones", imgSrc: cert3 },
  { id: 4, title: "Supply Chain Analytics Essentials", imgSrc: cert5 },
  { id: 6, title: "Python Data Structures", imgSrc: cert7 },
    { id: 7, title: "Using Python to Access Web Data", imgSrc: cert8 },
      { id: 5, title: "Pixel Art for Videogames", imgSrc: cert9 },
    { id: 9, title: "Concept Art For Video Games", imgSrc: cert10 },
  { id: 10, title: "Low Poly Art For Video Games", imgSrc: cert11 },
  { id: 11, title: "Feature Engineering", imgSrc: cert12 },
  { id: 12, title: "Build, Train and Deploy ML Models with Keras on Google Cloud", imgSrc: cert13 },
  { id: 13, title: "Machine Learning in the Enterprise", imgSrc: cert14 },
];

const certificateVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const Portafolio = () => {
  return (
    <div className="portfolio-wrapper">
   <Swiper
  direction="horizontal"
  modules={[Mousewheel, Keyboard]}
  mousewheel={{
    forceToAxis: true,
    sensitivity: 1,
    releaseOnEdges: true, 
  }}
  keyboard
  noSwiping={true}
  noSwipingSelector={".magazine-page-scroll"} 
  className="mySwiper"
>
        <SwiperSlide>
          <div className="magazine-page cover-hero textured-bg editorial-section-padd">
            <div className="hero-background-text creative-mini">DESIGN</div>
            
            <header className="magazine-header">
              <div className="top-info">
                <p className="brand-name">CAMERON BUSTAMANTE</p>
              </div>

              <div className="main-title-container">
                <h1 className="main-title-mega">
                  Fullstack <span className="italic-serif">D</span>eveloper
                </h1>
                <div className="vinyl-peek"></div>
              </div>
            </header>

            <main className="hero-main-layout-editorial">
              <div className="hero-left-editorial">
                <div className="hero-bio-main">
                <p>
  I design and develop modern digital products 
  with a strong focus on <span className="highlight"> clarity</span>, 
  <span className="highlight"> performance</span>, and 
  <span className="highlight"> visual storytelling</span>.
</p>
                </div>

                <div className="hero-actions-editorial">
                  <DescargarCV />
                  <a href="https://github.com" className="btn-modern-minimal">
                    <FontAwesomeIcon icon={faGithub} /> GITHUB
                  </a>
                </div>
              </div>

              <div className="hero-right-editorial">
                <div className="professional-specs-column">
                  <div className="spec-group">
                    <span className="spec-label">ROLE:</span>
                    <p className="spec-value">SOFTWARE ENGINEER</p>
                  </div>
                  <div className="spec-group">
                    <span className="spec-label">FOCUS:</span>
                    <p className="spec-value">UX / UI ARCHITECTURE</p>
                  </div>
                  <div className="spec-group">
                    <span className="spec-label">STATUS:</span>
                    <p className="spec-value-small">
                      Lead Frontend at <strong>Riffazo</strong>.
                    </p>
                  </div>
                </div>
                
                <div className="editorial-mini-note">
                   EST. 2024 — AVAILABLE FOR FREELANCE
                </div>

              </div>
            </main>
          </div>
        </SwiperSlide>


<SwiperSlide>
 <div className="about-mosaic-pro">
  <div className="mosaic-big">
    <span className="section-index">01</span>
    <h2>THE <em>NARRATIVE</em></h2>
    <p>
      I design digital experiences where performance and aesthetics coexist.
      My goal is to build interfaces that feel elegant, intuitive and powerful.
      <br /><br />
      <span className="quote-editorial">"Code is the ink, design is the paper."</span>
    </p>
  </div>

  <div className="mosaic-card">
    <FontAwesomeIcon icon={faGlobeAmericas} className="mosaic-icon" />
    <span>BASED IN</span>
    <h3>USA</h3>
  </div>

  <div className="mosaic-card">
    <FontAwesomeIcon icon={faCompass} className="mosaic-icon" />
    <span>FOCUS</span>
    <h3>Frontend + UX</h3>
  </div>

  <div className="mosaic-card">
    <FontAwesomeIcon icon={faLayerGroup} className="mosaic-icon" />
    <span>STACK</span>
    <h3>React / Next / Node</h3>
  </div>

  <div className="mosaic-card">
    <FontAwesomeIcon icon={faFeatherAlt} className="mosaic-icon" />
    <span>STYLE</span>
    <h3>Editorial UI</h3>
  </div>
</div>

        </SwiperSlide>
  <SwiperSlide>
          <div className="magazine-page-scroll">
            <div className="editorial-container">
                <div className="archive-header">
                    <h2 className="main-title-small">CORE <em>SKILLS</em></h2>
                    <span className="index-number"></span>
                </div>
                <div className="skills-icon-grid">
                    {[
  { name: "React / Next.js", icon: faReact },
  { name: "JavaScript / TypeScript", icon: faJs },
  { name: "Node.js / APIs", icon: faNodeJs },
  { name: "Python / Data", icon: faPython },
  { name: "ASP.NET Core", icon: faCode },
  { name: "SQL Databases", icon: faDatabase },
  { name: "UI Architecture", icon: faLayerGroup },
  { name: "Responsive UI", icon: faMobileAlt },
  { name: "Terminal / Git", icon: faTerminal },
  { name: "Design / Figma", icon: faPalette },


  { name: "REST API Design", icon: faCode },
  { name: "GraphQL", icon: faDatabase },
  { name: "Authentication / JWT", icon: faCode },
  { name: "Web Performance", icon: faCode },
  { name: "Testing / Jest", icon: faCode },
  { name: "Docker Basics", icon: faLayerGroup },
  { name: "Cloud / Deployment", icon: faDatabase },
  { name: "Machine Learning Basics", icon: faPython },
  { name: "Data Visualization", icon: faPalette },
  { name: "System Design", icon: faLayerGroup },
  { name: "UI Animations", icon: faPalette },
  { name: "Accessibility (a11y)", icon: faMobileAlt },
].map((skill, index) => (
                        <div className="skill-icon-card" key={index}>
                            <FontAwesomeIcon icon={skill.icon} className="s-icon" />
                            <h3>{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="magazine-page-scroll editorial-section-padd">
            <div className="section-spacer">
              <Proyects />
            </div>
          </div>
        </SwiperSlide>

       <SwiperSlide>
  <div className="magazine-page-scroll editorial-section-padd">
    <div className="editorial-container">
      <div className="archive-header">
        <h2 className="main-title-small">ACADEMIC <em>RECORDS</em></h2>
      </div>
      
      <motion.div 
        className="certs-grid-modern"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} 
      >
        {certificatesData.map(cert => (
          <motion.div
            className="cert-card-modern"
            key={cert.id}
            variants={certificateVariants}
          >
            <div className="cert-image-modern">
              <img src={cert.imgSrc} alt={cert.title} />
            </div>
            <div className="cert-info-modern">
              <span className="cert-badge">CERTIFICATION</span>
              <h3>{cert.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</SwiperSlide>

      </Swiper>

      <footer className="footer-modern-fixed">
         <div className="footer-left">LET'S BUILD SOMETHING <span>FABULOUS</span> </div>
         <div className="footer-right">cameronbustamante2@gmail.com</div>
      </footer>
    </div>
  );
};





export default Portafolio;