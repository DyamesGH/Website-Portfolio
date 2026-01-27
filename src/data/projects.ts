export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
}

export const projects: Project[] = [
  {
    title: "CondiPlant: Root Crop Disease Identification App",
    description:
      "A mobile application designed to help farmers and agricultural professionals easily identify root crop diseases through image recognition powered by machine learning.",
    technologies: ["Java", "Python", "Android Studio", "SQLite", "Machine Learning"],
    github: "https://github.com/DJohnJomar/CondiPlant",
  },
  {
    title: "Ecommerce Website",
    description:
      "A minimal e-commerce web application featuring product listings, intuitive navigation, and a clean, user-friendly interface designed for a smooth browsing experience.",
    technologies: ["JavaScript", "TypeScript", "ReactJS", "Bootstrap", "HTML", "CSS"],
    github: "https://github.com/DyamesGH/Ecommerce-Website",
  },
  {
    title: "File Management System Website",
    description:
      "A web-based file management system that allows users to upload and view documents, organized by date and barangay for easy access and retrieval.",
    technologies: ["JavaScript", "ReactJS", "Bootstrap", "HTML", "CSS"],
    github: "https://github.com/JE-Sales/dilg-fms-frontend",
  },
  {
    title: "API Weather App",
    description:
      "A lightweight app that fetches and displays weather data for a city entered by the user using an external API.",
    technologies: ["Python", "API"],
    github: "https://github.com/DyamesGH/API-Weather-App",
  },
];
