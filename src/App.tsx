import { useState } from 'react'
import './App.css'
import WellcomePage from "./assets/Components/WellcomePage.tsx";
import NavBar from "./assets/Components/NavBar.tsx";

function App() {
    const [page, setPage] = useState(0)
    const sections:string[] = ["Inicio","Información Personal","Historial Académico","Proyectos"]
    return (
        <>
            <NavBar sections={sections} page={page} setPage={setPage}/>
            {page === 0 ? (<WellcomePage/>):(<h2>WIP ⚠️</h2>)}
        </>
    )
}

export default App
