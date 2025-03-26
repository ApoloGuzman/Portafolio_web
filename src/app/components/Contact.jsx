import {BackgroundRadialLeft} from "@/app/components/BackgroundRadialLeft/BackgroundRadialLeft";

export default function Contact() {
    return (
        <section className=" relative h-screen flex items-center justify-center bg-black text-white px-6 md:px-20">
            <BackgroundRadialLeft />
            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Sección Izquierda - Texto + Imagen */}
                <div className="flex flex-col justify-center">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Got a project in <span className="text-cyan-400">mind?</span>
                    </h2>
                    <div className="mt-6 flex justify-center">
                        <img src="/pillarsman.svg" alt="Illustration" className="w-48 md:w-64" />
                    </div>
                </div>

                {/* Sección Derecha - Formulario */}
                <div className="p-8 rounded-lg">
                    <form className="space-y-6">

                        {/* Campos de Nombre y Correo */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block font-bold mb-2">Your name</label>
                                <input type="text" placeholder="Name"
                                       className="w-full p-3 rounded-2xl bg-[#393E46] text-white border-gray-600 focus:ring-2 focus:ring-cyan-400 font-bold" />
                            </div>
                            <div>
                                <label className="block font-bold mb-2">Your email</label>
                                <input type="email" placeholder="Email"
                                       className="w-full p-3 rounded-2xl bg-[#393E46] text-white border-gray-600 focus:ring-2 focus:ring-cyan-400 font-bold" />
                            </div>
                        </div>

                        {/* Campo de Mensaje */}
                        <div>
                            <label className="block font-bold mb-2">Your Message</label>
                            <textarea placeholder="Message" rows="8"
                                      className="w-full p-3 rounded-2xl bg-[#393E46] text-white border-gray-600 focus:ring-2 focus:ring-cyan-400 resize-none font-bold"></textarea>
                        </div>

                        {/* Botón de Envío */}
                        <div className="flex justify-start">
                            <button
                                type="submit"
                                className="px-2 py-3 bg-[#00ADB5] text-[#EEEEEE] rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:ring-2 hover:ring-cyan-300 hover:scale-101 text-shadow">
                                <span style={{ textShadow: "4px 4px 6px rgba(0, 0, 0, 0.4)" }}>Send Message</span>
                                <img src="/botonsend.svg" alt="Icon" className="w-7 h-7" />
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
}
