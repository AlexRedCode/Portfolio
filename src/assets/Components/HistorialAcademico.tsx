export default function HistorialAcademico() {
    const estudios = [
        {
            titulo: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma",
            especializacion: "Especialización en Videojuegos",
            centro: "Institut Sabadell",
            descripcion: "Ciclo superior enfocado en arquitecturas de software, gestión de bases de datos y desarrollo de componentes multimedia y mecánicas interactivas para videojuegos.",
            badge: "Grado Superior",
            badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
            icon: "</>"
        },
        {
            titulo: "Técnico en Sistemas Microinformáticos y Redes",
            especializacion: null,
            centro: "Institut La Ferrería",
            descripcion: "Ciclo medio centrado en el montaje y mantenimiento de equipos, configuración de redes locales, seguridad informática y administración de sistemas operativos.",
            badge: "Grado Medio",
            badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
            icon: "🖥️"
        },
        {
            titulo: "Certificado de Nivel A2 en Inglés",
            especializacion: null,
            centro: "Institut La Ferrería / Cambridge English",
            descripcion: "Competencias básicas de comprensión y expresión oral y escrita, con enfoque continuo hacia el inglés técnico para lectura de documentación y código.",
            badge: "Idioma",
            badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
            icon: "🗣️"
        }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto px-6 py-12 text-left animate-fade-in text-slate-300">

            <div className="mb-12">
                <h2 className="text-3xl font-black text-white flex items-center gap-2">
                    <span className="w-1.5 h-7 bg-purple-500 rounded-full"></span>
                    Títulos y Certificados
                </h2>
                <p className="text-slate-400 text-sm mt-1">Mi trayectoria académica y formaciones oficiales.</p>
            </div>

            <div className="relative border-l-2 border-zinc-800 ml-4 md:ml-6 space-y-10">

                {estudios.map((item, idx) => (
                    <div key={idx} className="relative pl-8 group">

                        <div className="absolute w-5 h-5 bg-zinc-900 border-2 border-zinc-700 rounded-full -left-[11px] top-1.5 flex items-center justify-center text-[10px] group-hover:border-purple-500 group-hover:bg-purple-950 transition-all duration-300 shadow-md shadow-black">
                            <span className="opacity-0 group-hover:opacity-100 transition-opacity">✨</span>
                        </div>

                        <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 backdrop-blur-md shadow-xl hover:border-white/10 transition-all duration-300">

                            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${item.badgeColor}`}>
                                  {item.badge}
                                </span>
                                <span className={`text-xl hidden sm:inline text-${item.badgeColor} font-bold`}>{item.icon}</span>
                            </div>

                            <h3 className="text-xl font-bold text-white leading-tight group-hover:text-purple-300 transition-colors">
                                {item.titulo}
                            </h3>

                            {item.especializacion && (
                                <p className="text-sm font-medium text-purple-400 mt-1">
                                    ({item.especializacion})
                                </p>
                            )}

                            <div className="flex items-center gap-2 mt-2 text-xs text-slate-400 font-medium">
                                <span>🏢 Centro:</span>
                                <span className="text-slate-200">{item.centro}</span>
                            </div>
                            <div className="w-full h-[1px] bg-white/5 my-4"></div>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                {item.descripcion}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}