"use client"
import { ThemeContext } from "@/context/ThemeContext"
import Link from "next/link"
import { useContext } from "react"

export default function Navbar() {
    const { changeTheme } = useContext(ThemeContext);
    return (
        <div>
            <ul className="flex justify-between pt-5 items-center">
                <div>
                    <Link href="/">
                        <button className="btn btn-success">Home</button>
                    </Link>
                </div>
                <div className="flex gap-5">
                    <button className="btn btn-secondary" onClick={() => changeTheme("light")}>Light</button>
                    <button className="btn btn-neutral" onClick={() => changeTheme("dark")}>Dark</button>
                    <button className="btn btn-primary" onClick={() => changeTheme("mytheme")}>Custom</button>
                </div>
            </ul>
        </div>
    )
}