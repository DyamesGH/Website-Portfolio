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
      <section className="py-5 bg-dark">
        <Container className="text-center">
          <h1 className="display-4 fw-bold mb-4">Hi, I’m James 👋</h1>

          <p className="lead mx-auto mb-4" style={{ maxWidth: "700px" }}>
            A fresh Computer Science graduate passionate about software
            development, problem-solving, and building impactful digital
            experiences.
          </p>

          <div className="d-flex justify-content-center gap-3">
            <Button
              variant="primary"
              onClick={() => window.open("/projects", "_blank")}
            >
              View Projects
            </Button>

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

      {/* Projects Section */}
      <section className="py-5 bg-dark" id="projects">
        <Container>
          <h2 className="text-center fw-semibold mb-5">Projects</h2>

          <Row className="justify-content-center g-4">
            <Col md={6}>
              <Card bg="secondary" text="light" className="h-100 shadow">
                <Card.Body>
                  <Card.Title>Game Systems Architecture</Card.Title>
                  <Card.Text className="mb-3">
                    A Unity project implementing Dependency Injection, Service
                    Locator, and Event-Driven architecture with scalability
                    experiments using ECS.
                  </Card.Text>
                  <Button
                    variant="outline-light"
                    href="https://github.com/your-username/project-1"
                    target="_blank"
                  >
                    View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card bg="secondary" text="light" className="h-100 shadow">
                <Card.Body>
                  <Card.Title>Portfolio Website</Card.Title>
                  <Card.Text className="mb-3">
                    A responsive personal portfolio built with React,
                    TypeScript, and Bootstrap.
                  </Card.Text>
                  <Button
                    variant="outline-light"
                    href="https://github.com/your-username/project-2"
                    target="_blank"
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
        © {new Date().getFullYear()} James Meneses. All rights reserved.
      </footer>
    </div>
  );
}
