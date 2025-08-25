"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "./projectsData";
import ProjectModal from "./ProjectModal";
import { BackgroundRadialRight } from "../BackgroundRadialRight/BackgroundRadialRight";


export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section
            id="projects"
            className="relative w-full min-h-screen py-24 px-6 flex flex-col items-center justify-center text-white bg-black overflow-hidden"
        >
            <BackgroundRadialRight />

            <div className="relative z-10 max-w-7xl w-full flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-bold text-center">
                    My recent <span className="text-cyan-400">works</span>
                </h2>

                {/* Categorías (estáticas por ahora) */}
                <div className="flex gap-4 mt-10">
                    <button className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:bg-cyan-600 transition">All</button>
                    <button className="bg-zinc-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-zinc-700 transition">UI</button>
                    <button className="bg-zinc-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-zinc-700 transition">UX</button>
                </div>

                {/* Grid de proyectos */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full px-6 md:px-0">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} onHover={() => setSelectedProject(project)} onLeave={() => setSelectedProject(null)} />
                    ))}
                </div>

             as
            </div>
        </section>
    );
}
