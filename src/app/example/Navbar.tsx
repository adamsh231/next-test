"use client"
import { ThemeContext } from "@/app/example/ThemeContext"
import Link from "next/link"
import { useContext, useState } from "react"

export default function Navbar() {
    const { theme, changeTheme } = useContext(ThemeContext);
    const [ toggle, setToggle ] = useState(false);

    function toggleTheme() {
        theme == "light" ? changeTheme("dark") : changeTheme("light");
        setToggle(!toggle)
    }
    return (
        <div>
            <ul className="flex justify-between pt-5 items-center">
                <div>
                    <Link href="/">
                        <button className="btn btn-success">Home</button>
                    </Link>
                </div>
                <div className="flex gap-5">
                    <div className="flex items-center">
                        <div onClick={toggleTheme} className="container w-12 h-6 rounded-full bg-slate-300 flex items-center cursor-pointer">
                            <div className={`container w-5 h-5 ml-1 bg-white rounded-full ${toggle ? 'translate-x-5' : ''} transition-all`}></div>
                        </div>
                    </div>
                    <button className="btn btn-secondary" onClick={() => changeTheme("light")}>Light</button>
                    <button className="btn btn-neutral" onClick={() => changeTheme("dark")}>Dark</button>
                    <button className="btn btn-primary" onClick={() => changeTheme("mytheme")}>Custom</button>
                </div>
            </ul>
        </div>
    )
}