import {BackgroundRadialRight} from "@/app/components/BackgroundRadialRight/BackgroundRadialRight";

export default function About() {
    return (
        <>
            <section className="relative min-h-screen flex items-center justify-center bg-black text-white">
                <BackgroundRadialRight />
                <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            About <span className="text-cyan-400">Me</span>
                        </h1>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... Read more
                        </p>
                    </div>

                    {/* Imagen de fondo con pequeños iconos */}
                    <div className="relative flex justify-center">
                        {/* Fondo de la persona sentada */}
                        <div
                            className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-40"
                            style={{ backgroundImage: "url('/doodleitems.svg')" }}
                        ></div>

                        {/* Imagen de la persona */}
                        <img src="/wakeperson.svg" alt="Illustration" className="relative w- max-w-xs md:max-w-sm " />
                    </div>
                </div>
            </section>

        </>
    )
}