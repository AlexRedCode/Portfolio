import { useState } from 'react'
import './App.css'
import WellcomePage from "./assets/Components/WellcomePage.tsx";
import NavBar from "./assets/Components/NavBar.tsx";
import InfoPersonal from "./assets/Components/InfoPersonal.tsx";
import HistorialAcademico from "./assets/Components/HistorialAcademico.tsx";
import Proyectos from "./assets/Components/Proyectos.tsx";

function App() {
    const [page, setPage] = useState(0)
    const sections:string[] = ["Inicio","Información Personal","Historial Académico","Proyectos"]
    return (
        <>
            <div className="flex flex-row w-full p-3 justify-between">
                <p><em>Alex Redondo</em></p>
                <p><em>Portfolio Profesional</em></p>
            </div>
            <NavBar sections={sections} page={page} setPage={setPage}/>
            {page === 0 ? (
                <WellcomePage />
            ) : page === 1 ? (
                <InfoPersonal />
            ) : page === 2 ? (
                <HistorialAcademico/>
            ) :(
                <Proyectos/>
            )
            }
        </>
    )
}

export default App
