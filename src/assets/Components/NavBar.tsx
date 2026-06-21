import {type JSX} from "react";
type props = {
    sections:string[],
    page: number,
    setPage: (page: number)=> void
}
export default function NavBar(props:props) {

    return (
        <div className="navbar navbar-default w-dvw bg-[#28e0daff] text-white">
            <ul className="flex flex-row w-full justify-around">
                {props.sections.map((section, i):JSX.Element => (
                    <li
                        key={i}
                        onClick={() => props.setPage(i)}
                        className="opcionNav font-bold cursor-pointer  transition-colors"
                    >
                        {section}
                    </li>
                ))}
            </ul>
        </div>
    )
}