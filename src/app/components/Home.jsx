import {BackgroundRadialLeft} from "@/app/components/BackgroundRadialLeft/BackgroundRadialLeft";

export default function Home() {
    return (
        <>

            <section className="relative h-screen flex flex-col justify-center items-center bg-black text-white px-6 md:px-20">
                <BackgroundRadialLeft />
                <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 text-focus-in">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            CREATIVE UI <span className="text-cyan-400">DESIGNER</span>
                        </h1>
                        <div className="mt-6 flex space-x-4">
                            <button className="bg-cyan-400 text-black px-6 py-3 rounded-md text-lg font-semibold hover:bg-cyan-500">
                                Hire me
                            </button>
                            <button className="bg-gray-700 px-6 py-3 rounded-md text-lg font-semibold flex items-center space-x-2 hover:bg-gray-600">
                                <span>Download CV</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-3-3m3 3l3-3M6 16h12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Imagen de fondo con pequeños iconos */}
                    <div className="relative flex justify-center">
                        {/* Fondo de la persona sentada */}
                        <div
                            className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-40"
                            style={{ backgroundImage: "url('/icons.svg')" }}
                        ></div>

                        {/* Imagen de la persona */}
                        <img src="/personsit.svg" alt="Illustration" className="relative w- max-w-xs md:max-w-sm" />
                    </div>
                </div>

            </section>

        </>


    );
}