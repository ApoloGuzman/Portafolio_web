"use client";
import { useState } from "react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";

interface Project {
    id: number;
    title: string;
    image: string;
    description: string;
    website: string;
    github: string;
}

export default function ProjectCard({ project }: { project: Project }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
                onClick={() => setIsOpen(true)}
            >
                {/* Imagen del proyecto */}
                <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Capa de oscurecimiento */}
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold">{project.title}</p>
                </div>
            </div>

            {/* Modal */}
            {isOpen && <ProjectModal project={project} onClose={() => setIsOpen(false)} />}
        </>
    );
}
