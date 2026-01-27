import {
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiMysql,
  SiGit,
  SiBootstrap,
  SiCanva,
} from "react-icons/si";
import { FaJava, FaMobileAlt, FaVideo } from "react-icons/fa";
import { MdDesignServices, MdWeb } from "react-icons/md";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";

export default function Portfolio() {
  return (
    <div className="bg-dark text-light w-100">
      {/* Hero Section */}
      <section className="py-5 bg-dark hero">
        <Container className="text-center">
          <h1 className="display-5 fw-bold mb-3">
            Hi, I’m James 👋
          </h1>

          <p className="lead mx-auto mb-3" style={{ maxWidth: "700px" }}>
            A Computer Science graduate focused on building modern web and mobile
            applications with clean design, solid performance, and real-world impact.
          </p>

          <p className="text-secondary mb-4">
            Fresh Graduate • Open to Junior Developer Roles
          </p>

          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            {/* View Projects */}
            <Button
              variant="primary" 
              onClick={() => window.open("/projects", "_blank")}
            >
              View Projects
            </Button>

            {/* Contact Me */}
            <Button
              variant="outline-light"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </Button>

            {/* Download Resume */}
            <Button
              variant="outline-light"
              href="/files/James Paulo Meneses Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Button>
          </div>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="py-5 bg-secondary" id="skills">
        <Container>
          <h2 className="text-center fw-semibold mb-4">Skills</h2>

          <div className="skills-slider">
            {[
                { icon: <FaJava />, name: "Java", color: "java" },
                { icon: <SiPython />, name: "Python", color: "python" },
                { icon: <SiCplusplus />, name: "C++", color: "cpp" },
                { icon: <SiHtml5 />, name: "HTML", color: "html" },
                { icon: <SiCss3 />, name: "CSS", color: "css" },
                { icon: <SiJavascript />, name: "JavaScript", color: "js" },
                { icon: <SiTypescript />, name: "TypeScript", color: "ts" },
                { icon: <SiReact />, name: "ReactJS", color: "react" },
                { icon: <SiMysql />, name: "MySQL", color: "mysql" },
                { icon: <SiGit />, name: "Git", color: "git" },
                { icon: <SiBootstrap />, name: "Bootstrap", color: "bootstrap" },
                { icon: <MdDesignServices />, name: "UX / UI Design", color: "design" },
                { icon: <MdWeb />, name: "Web Design", color: "web" },
                { icon: <FaMobileAlt />, name: "Mobile Dev", color: "mobile" },
                { icon: <SiCanva />, name: "Canva", color: "canva" },
                { icon: <FaVideo />, name: "Video Editing", color: "video" },
            ].map((skill) => (
              <div className="skill-card">
                <div className={`skill-icon ${skill.color}`}>
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <section className="py-5 bg-dark" id="projects">
        <Container>
          <h2 className="text-center fw-semibold mb-5">Featured Projects</h2>

          <Row className="justify-content-center g-4">
            <Col md={6}>
              <Card bg="secondary" text="light" className="h-100 shadow">
                <Card.Body>
                  <Card.Title>CondiPlant: Root Crop Disease Identification App</Card.Title>
                  <Card.Text className="mb-3">
                    A mobile application designed to help farmers and agricultural professionals easily identify root crop diseases through image recognition powered by machine learning.
                  </Card.Text>
                  <Button
                    variant="outline-light"
                    href="https://github.com/DJohnJomar/CondiPlant"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card bg="secondary" text="light" className="h-100 shadow">
                <Card.Body>
                  <Card.Title>Ecommerce Website</Card.Title>
                  <Card.Text className="mb-3">
                    A minimal e-commerce web application featuring product listings, intuitive navigation, and a clean, user-friendly interface designed for a smooth browsing experience.
                  </Card.Text>
                  <Button
                    variant="outline-light"
                    href="https://github.com/DyamesGH/Ecommerce-Website"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-5 bg-secondary text-center" id="contact">
        <Container>
          <h2 className="fw-semibold mb-4">Contact Details</h2>

          <p className="mb-4">
            I’m open to junior developer roles, and entry-level jobs.
          </p>

          <p className="mb-3">
            📧{" "}
            <a
              href="mailto:james.meneses112603@gmail.com"
              className="contact-link"
            >
              james.meneses112603@gmail.com
            </a>
          </p>

          <div className="d-flex justify-content-center align-items-center gap-4">
            <a
              href="https://github.com/DyamesGH"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaGithub className="github-icon" size={20} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/james-meneses03"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin className="linkedin-icon" size={20} />
              LinkedIn
            </a>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="text-center py-3 bg-black text-secondary">
        <p className="mb-1">Let&apos;s build something together.</p>
        <small>
          © {new Date().getFullYear()} James Meneses. All rights reserved.
        </small>
      </footer>
    </div>
  );
}
