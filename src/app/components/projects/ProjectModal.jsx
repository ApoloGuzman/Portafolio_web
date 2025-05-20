"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white text-black rounded-2xl max-w-xl w-full shadow-xl relative overflow-hidden"
            >
                {/* Botón de cierre */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 hover:text-black z-10"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Contenido del modal */}
                <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <p className="mb-4 text-gray-700">{project.description}</p>

                    <div className="flex gap-4">
                        <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Ver proyecto
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                        >
                            Código fuente
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
