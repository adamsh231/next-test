"use client"

import {createContext, useState, useEffect} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}: any) => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme") || "light";
        setTheme(storedTheme);
    }, [])

    const changeTheme = (theme: string) => {
        setTheme(theme);
        localStorage.setItem("theme", theme);
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <div data-theme={theme}>{children}</div>
        </ThemeContext.Provider>
    )
}
