import BgImg from "/BgImg.png";
export default function WellcomePage() {
    return(
        <>
            <Presentacion></Presentacion>
            <div className="min-h-svh flex flex-col PageFormat">
                <div className={"items-center"}>
                    <div className="flex flex-col text-center items-center mt-16 px-4 animate-fade-in w-full">
                        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white mb-3 bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">Alex Redondo</h1>
                        <h2 className="text-xl md:text-2xl font-semibold text-purple-400 tracking-wide uppercase mb-4">Técnico Superior en Desarrollo de Aplicaciones Multiplataformas</h2>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-medium text-sm md:text-base backdrop-blur-sm shadow-sm">
                            <span>Especialización en videojuegos</span>
                            <span className="animate-pulse">🎮</span>
                        </div>
                        <hr className="border-b border-indigo-500 w-3/4 mt-5.5 mb-5.5" />
                        <h2></h2>
                    </div>
                </div>
                <Conocimientos></Conocimientos>
            </div>
        </>
    )
}
function Presentacion(){
    return(
        <div className="bg-cover bg-center BackgroundIcon" style={{ backgroundImage: `url(${BgImg})` }}>
            <div className={"relative group"}>
                <div className="absolute inset-0 bg-purple-500 rounded-full blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-300 ml-4 mb-4"></div>
                <img className="relative w-28 h-28 md:w-32 md:h-32 rounded-full object-cover bg-zinc-700 shadow-xl ml-4 mb-4" src="/PlaceHolderIcon.png" alt="Icono"/>
            </div>
        </div>
    )
}
function Conocimientos() {
    // Organizados por categorías con colores neón sutiles para el diseño gamer/oscuro
    const habilidades = [
        {
            title: "Front-end",
            techs: ["React", "Angular", "HTML / CSS"],
            borderColor: "border-cyan-500/20",
            textColor: "text-cyan-400",
            bgColor: "bg-cyan-500/5",
        },
        {
            title: "Back-end",
            techs: ["Laravel", "Spring", "PHP"],
            borderColor: "border-emerald-500/20",
            textColor: "text-emerald-400",
            bgColor: "bg-emerald-500/5",
        },
        {
            title: "Datos",
            techs: ["MySQL", "MongoDB", "JSON"],
            borderColor: "border-purple-500/20",
            textColor: "text-purple-400",
            bgColor: "bg-purple-500/5",
        },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto px-6 py-12 text-left animate-fade-in">
            {/* Título de la sección con una pequeña línea guía */}
            <div className="mb-8">
                <h2 className="text-3xl font-black text-white flex items-center gap-2">
                    <span className="w-1.5 h-7 bg-indigo-500 rounded-full"></span>
                    Conocimientos En
                </h2>
            </div>

            {/* Contenedor Grid: 1 columna en móvil, 3 en pantallas medianas/grandes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {habilidades.map((cat, idx) => (
                    <div
                        key={idx}
                        className={`p-6 rounded-2xl bg-zinc-900/40 border ${cat.borderColor} backdrop-blur-md shadow-xl hover:scale-[1.02] transition-transform duration-300`}
                    >
                        {/* Título de la Categoría */}
                        <h3 className={`text-xl font-bold ${cat.textColor} mb-4 pb-2 border-b border-white/5`}>
                            {cat.title}
                        </h3>

                        {/* Lista de Tecnologías en formato "Píldoras/Tags" */}
                        <ul className="flex flex-col gap-2">
                            {cat.techs.map((tech, i) => (
                                <li
                                    key={i}
                                    className={`px-3 py-2 rounded-xl ${cat.bgColor} border ${cat.borderColor} text-slate-300 text-sm font-medium hover:text-white transition-colors cursor-default`}
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}