"use client";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface ProjectModalProps {
    title: string;
    description: string;
    website: string;
    github: string;
    onClose: () => void;
}

export default function ProjectModal({
       title,
       description,
       website,
       github,
       onClose,
      }: ProjectModalProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-gray-900 text-white p-6 rounded-2xl max-w-lg w-full shadow-lg relative"
            >
                {/* Botón para cerrar */}
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
                    <X size={24} />
                </button>

                {/* Contenido del modal */}
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-2 text-gray-300">{description}</p>

                <div className="mt-4 flex gap-4">
                    <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition"
                    >
                        Ver Proyecto
                    </a>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
                    >
                        Ver Código
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
