import {BackgroundRadialRight} from "@/app/components/BackgroundRadialRight/BackgroundRadialRight";

export default function Projects () {
    return (
        <>
            <section className=" relative min-h-screen flex items-center justify-center bg-black text-white">
                <BackgroundRadialRight/>
                <div className="text-center">
                    <h2 className="text-4xl font-semibold mb-4">Proyectos</h2>
                    <p className="text-lg">
                        Aquí encontrarás todos los trabajos qu ehe realizado en mi carrera como programador.
                    </p>
                </div>
            </section>

        </>
    )
}