import { Container, Card, Badge, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-dark text-light min-vh-100 py-5">
      <Container>
        <Button
          variant="outline-light"
          className="mb-4"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </Button>

        <h1 className="text-center mb-5">My Projects</h1>

        {projects.map((project: Project, index: number) => (
          <Card
            key={index}
            bg="secondary"
            text="light"
            className="mb-4 shadow project-card"
          >
            <Card.Img
              variant="top"
              src={project.image}
              alt={project.title}
              className={`project-image ${
                project.imageFit === "cover"
                  ? "project-image-cover"
                  : "project-image-contain"
              }`}
            />

            <Card.Body>
              <Card.Title>{project.title}</Card.Title>

              <Card.Text>{project.description}</Card.Text>

              <div className="mb-3">
                {project.technologies.map((tech: string, i: number) => (
                  <Badge bg="dark" className="me-2" key={i}>
                    {tech}
                  </Badge>
                ))}
              </div>

              <Button
                variant="outline-light"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Projects;
