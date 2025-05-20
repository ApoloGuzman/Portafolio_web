"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
    return (
        <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-2xl bg-white/10 backdrop-blur-md p-2 transition-all duration-300 ease-in-out hover:shadow-2xl cursor-pointer overflow-hidden group"
        >
            {/* Imagen del proyecto */}
            <div className="w-full h-52 md:h-60 lg:h-64 overflow-hidden rounded-xl">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Contenido que aparece al hacer hover */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 p-4">
                <h3 className="text-lg font-semibold text-white mb-4">{project.title}</h3>
                <div className="flex gap-4">
                    <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Ver Proyecto
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Código Fuente
                    </a>
                </div>
            </div>
        </motion.div>
    );
}


