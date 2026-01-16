export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
}

export const projects: Project[] = [
  {
    title: "Game Systems Architecture",
    description:
      "A Unity-based project implementing Dependency Injection, Service Locator, and Event-Driven Architecture with scalability experiments using ECS.",
    technologies: ["C#", "Unity", "OOP", "ECS"],
    github: "https://github.com/DyamesGH/game-systems-architecture",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with React, TypeScript, and Bootstrap to showcase projects and skills.",
    technologies: ["React", "TypeScript", "Bootstrap", "Vite"],
    github: "https://github.com/DyamesGH/website-portfolio",
  },
];
