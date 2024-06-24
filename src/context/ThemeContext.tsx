import { createContext, useState } from "react";
import { type ThemeContextProviderProps, type ThemeContextProps, type ThemeProps } from "../types";


export const ThemeContext  = createContext<ThemeContextProps | null>(null);

export default function ThemeContextProvider({children}: ThemeContextProviderProps) {
const [theme, setTheme] = useState<ThemeProps>("light");

const toggleTheme = () => {
    return theme === "light" ? setTheme("dark") : setTheme("light");
}

return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
)
}

