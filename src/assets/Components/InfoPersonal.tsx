export default function InfoPersonal() {
    return (
        <div className="w-full max-w-5xl mx-auto px-6 py-12 text-left animate-fade-in text-slate-300">

            <div className="mb-10">
                <h2 className="text-3xl font-black text-white flex items-center gap-2">
                    <span className="w-1.5 h-7 bg-purple-500 rounded-full"></span>
                    Información Personal
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="md:col-span-2 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md shadow-xl flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 text-purple-400">
                            👤 Mi Historia
                        </h3>
                        <div className="space-y-4 text-slate-400 leading-relaxed text-sm md:text-base">
                            <p>
                                ¡Hola! Soy Alex. Mi camino en el desarrollo de software comenzó por la curiosidad de entender cómo funcionaban los mundos virtuales que tanto disfrutaba jugar. Esto me llevó a cursar el grado superior de <strong className="text-white">Desarrollo de Aplicaciones Multiplataforma (DAM)</strong>.
                            </p>
                            <p>
                                Durante mis estudios descubrí que la programación es el lienzo perfecto para unir la lógica matemática con la creatividad pura. Me especialicé en videojuegos porque considero que es uno de los campos de la ingeniería de software más exigentes y gratificantes, donde la optimización, las físicas y las arquitecturas limpias son vitales.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-4">
                        🔗 Contactos
                    </h3>

                    <div className="flex flex-col gap-3">
                        <a href="mailto:alexredonpravos@gmail.com" className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/50 hover:bg-purple-600/20 border border-white/5 hover:border-purple-500/30 transition-all group">
                            <span className="text-xl">📧</span>
                            <div>
                                <p className="text-xs text-slate-500">Correo Electrónico</p>
                                <p className="text-sm font-semibold text-white group-hover:text-purple-300">alexredonpravos@gmail.com</p>
                            </div>
                        </a>

                        <a href="https://github.com/AlexRedCode" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/50 hover:bg-purple-600/20 border border-white/5 hover:border-purple-500/30 transition-all group">
                            <span className="text-xl">💻</span>
                            <div>
                                <p className="text-xs text-slate-500">GitHub Profile</p>
                                <p className="text-sm font-semibold text-white group-hover:text-purple-300">@AlexRedCode</p>
                            </div>
                        </a>

                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-zinc-800/50 hover:bg-purple-600/20 border border-white/5 hover:border-purple-500/30 transition-all group">
                            <span className="text-xl">💼</span>
                            <div>
                                <p className="text-xs text-slate-500">LinkedIn</p>
                                <p className="text-sm font-semibold text-white group-hover:text-purple-300">Alex Redondo</p>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-4">
                        🗣️ Idiomas
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="font-medium text-white">Español</span>
                                <span className="text-xs text-slate-400">Nativo</span>
                            </div>
                            <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-purple-500 h-full w-[100%] rounded-full"></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="font-medium text-white">Catalán</span>
                                <span className="text-xs text-slate-400">Nativo</span>
                            </div>
                            <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-purple-500 h-full w-[100%] rounded-full"></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-sm mb-1">
                                <span className="font-medium text-white">Inglés</span>
                                <span className="text-xs text-slate-400">Intermedio</span>
                            </div>
                            <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                                <div className="bg-purple-500 h-full w-[50%] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md shadow-xl">
                    <h3 className="text-xl font-bold text-white mb-4">
                        ⭐ Gustos y Aficiones
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-400">
                        <div className="p-3 bg-zinc-800/30 rounded-xl border border-white/5">
                            <h4 className="font-bold text-white mb-1">🎮 Videojuegos</h4>
                            <p>A parte de apasionarme el desarrollo de videojuegos tambien disfruto jugarlos. Soy muy aficionado a los juegos desde que era pequeño.</p>
                        </div>
                        <div className="p-3 bg-zinc-800/30 rounded-xl border border-white/5">
                            <h4 className="font-bold text-white mb-1">🎭 Teatro</h4>
                            <p>Por otro lado también me gusta el mundo de la farandula. Soy actor amateur desde muy temprana edad.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}