import {BackgroundRadialLeft} from "@/app/components/BackgroundRadialLeft/BackgroundRadialLeft";

export default function Skill() {
    return (
        <>
            <section className=" relative min-h-screen flex items-center justify-center bg-black text-white">
                <BackgroundRadialLeft />
                <div className="text-center">
                    <h2 className="text-4xl font-semibold mb-4">Habilidades</h2>
                    <p className="text-lg">
                        Aquí encontraras el nivel y la cantidad de tecnologias que se.
                    </p>
                </div>
            </section>

        </>
    )
}