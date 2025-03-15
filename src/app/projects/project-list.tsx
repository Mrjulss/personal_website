'use client'

import { useState } from "react";
import ProjectItem from "./project-item";
import Link from "next/link";

function ProjectList() {
  // Sample project data - you would replace this with your actual data
  // This could also come from an API or CMS
  const [projects] = useState([
    {
      id: "project-1",
      title: "GovLearn",
      description: "Training recommendation platform that connects government employees with tailored training programs in the digital space.",
      image: "/placeholder.png",
      tags: ["React", "Spring Boot", "PostgreSQL"],
    },
    {
      id: "project-2",
      title: "Faster Optimizers",
      description: "Tool for visualizing various gradient descent optimizers in real-time.",
      image: "/optimizer.png",
      tags: ["Python", "Machine Learning", "NumPy"],
    },
    {
      id: "project-3",
      title: "Bachelor Thesis",
      description: "Implementation of semantic segmentation for forest maps using a custom deep learning model based on U-Net.",
      image: "/bachelor.png",
      tags: ["Python", "PyTorch", "Deep Learning", "Semantic Segmentation"],
    },
    {
      id: "project-4",
      title: "Online IDE @ TUM",
      description: "A web-based IDE developed for a university project at TUM, offering an interactive coding environment.",
      image: "/placeholder.png",
      tags: ["Angular", "Spring Boot", "Microservices", "CI/CD"],
    },
    {
        id: "project-5",
        title: "Personal Portfolio Website",
        description: "A personal portfolio website built with Tailwind CSS and Next.js to showcase my projects and skills.",
        image: "/placeholder.png",
        tags: ["Tailwind CSS", "Next.js"],
      },
  ]);

  return (
    <div className="w-full max-w-6xl px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link 
            href={`/projects/${project.id}`} 
            key={project.id}
            className="transform transition-transform hover:scale-105"
          >
            <ProjectItem 
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;