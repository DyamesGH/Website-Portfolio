import { Container, Card, Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="bg-dark text-light min-vh-100 py-5">
      <Container>

        {/* Back Button */}
        <Button
          variant="outline-light"
          className="mb-4"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </Button>

        <h1 className="text-center mb-5">My Projects</h1>

        {projects.map((project, index) => (
          <Card
            key={index}
            bg="secondary"
            text="light"
            className="mb-4 shadow"
          >
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>

              <Card.Text>{project.description}</Card.Text>

              <div className="mb-3">
                {project.technologies.map((tech, i) => (
                  <Badge bg="dark" className="me-2" key={i}>
                    {tech}
                  </Badge>
                ))}
              </div>

              <Button
                variant="outline-light"
                href={project.github}
                target="_blank"
              >
                View on GitHub
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
}
