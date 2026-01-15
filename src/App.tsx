import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Portfolio() {
  return (
    <div className="bg-light text-dark">
      {/* Hero Section */}
      <section className="d-flex align-items-center justify-content-center text-center py-5 bg-white">
        <Container>
          <h1 className="display-4 fw-bold mb-4">Hi, I’m James 👋</h1>
          <p className="lead mx-auto mb-4" style={{ maxWidth: "700px" }}>
            A fresh Computer Science graduate passionate about software
            development, problem-solving, and building impactful digital
            experiences.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="#contact" variant="outline-primary">
              Contact Me
            </Button>
          </div>
        </Container>
      </section>

      {/* Skills Section */}
      <section className="py-5 bg-light" id="skills">
        <Container>
          <h2 className="text-center fw-semibold mb-5">Skills</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Programming</Card.Title>
                  <Card.Text>
                    Java, C#, Python, TypeScript, JavaScript
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Frameworks & Tools</Card.Title>
                  <Card.Text>
                    React, Unity, Node.js, Git, GitHub
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Concepts</Card.Title>
                  <Card.Text>
                    OOP, Data Structures, Algorithms, Software Design
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Section */}
      <section className="py-5 bg-white" id="projects">
        <Container>
          <h2 className="text-center fw-semibold mb-5">Projects</h2>
          <Row>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Game Systems Architecture</Card.Title>
                  <Card.Text className="mb-3">
                    A Unity project implementing Dependency Injection, Service
                    Locator, and Event-Driven architecture with scalability
                    experiments using ECS.
                  </Card.Text>
                  <Button
                    variant="outline-primary"
                    href="https://github.com/your-username/project-1"
                    target="_blank"
                  >
                    View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Portfolio Website</Card.Title>
                  <Card.Text className="mb-3">
                    A responsive personal portfolio built with React,
                    TypeScript, and Bootstrap.
                  </Card.Text>
                  <Button
                    variant="outline-primary"
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
      <section className="py-5 bg-light text-center" id="contact">
        <Container>
          <h2 className="fw-semibold mb-4">Contact</h2>
          <p className="mb-4">
            I’m open to junior developer roles, internships, and collaborations.
          </p>
          <p className="mb-2">
            📧 <a href="mailto:your.email@example.com">your.email@example.com</a>
          </p>
          <p>
            💻{" "}
            <a href="https://github.com/your-username" target="_blank">
              GitHub
            </a>{" "}
            |{" "}
            <a href="https://linkedin.com/in/your-profile" target="_blank">
              LinkedIn
            </a>
          </p>
        </Container>
      </section>

      {/* Footer */}
      <footer className="text-center py-3 bg-dark text-light">
        © {new Date().getFullYear()} James Meneses. All rights reserved.
      </footer>
    </div>
  );
}
