import './App.css'
import { FaReact } from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiFigma, SiTailwindcss, SiFramer } from "react-icons/si"
import joana from "./assets/joana.png"

function App() {
  return (

    <>
      <main className="container" >
        <div className="hero-glow"></div>

        <h1 className="hero-title">
          Joana Castro
        </h1>

        <h2 className="role">
          UI Designer & Frontend Developer
          <span className="dot"></span>
        </h2>

        <p className="hero-subtitle">
          I design complex digital products and translate them into scalable,
          production-ready frontend systems.
        </p>


        <p className="hero-stack">
          React <span>•</span> TypeScript <span>•</span> Next.js <span>•</span> Figma
        </p>


        <div className="hero-buttons">
          <a href="#" className="btn-primary">View Projects</a>
          <a href="#" className="btn-secondary">Contact Me</a>
        </div>
      </main>
      <section className="projects">
        <div className="projects-container">
          <h2 className="section-title">Selected Projects</h2>

          <div className="project">
            <div className="project-image"></div>
            <div className="project-content">
              <h3>Project Name</h3>
              <p>
                Short description explaining the problem, your role,
                and the impact of the solution.
              </p>
            </div>
          </div>

          <div className="project reverse">
            <div className="project-image"></div>
            <div className="project-content">
              <h3>Project Name</h3>
              <p>
                Another project with a slightly different layout
                to create visual rhythm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-stack">
        <div className="tech-container">

          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">
            Tools and technologies I use to design and build digital products
          </p>

          <div className="tech-grid">

            <div className="tech-card">
              <FaReact className="tech-icon" />
              React
            </div>

            <div className="tech-card">
              <SiTypescript className="tech-icon" />
              TypeScript
            </div>

            <div className="tech-card">
              <SiNextdotjs className="tech-icon" />
              Next.js
            </div>

            <div className="tech-card">
              <SiFigma className="tech-icon" />
              Figma
            </div>

            <div className="tech-card">
              <SiTailwindcss className="tech-icon" />
              Tailwind
            </div>

            <div className="tech-card">
              <SiFramer className="tech-icon" />
              <span>Framer Motion</span>
            </div>

          </div>

        </div>
      </section>
      <section className="about">
        <div className="about-container">

        

            <div className="about-texts">

              <h2 className="section-title">About Me</h2>

              <p className="about-text">
              UI Designer and Frontend Developer focused on building clean, 
user-centered digital experiences.
              </p>

              <p className="about-text">
              I combine design thinking with modern frontend technologies 
to transform interfaces into scalable, production-ready products.
              </p>


              <p className="about-text">
              My work spans UI design, UX thinking and frontend implementation, 
bridging the gap between design and development.
              </p>

            </div>

            <div className="about-image">
              <img src={joana} alt="Joana Castro" />
            </div>

        
        </div>
      </section>

    </>
  )
}

export default App
