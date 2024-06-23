import { createContext, useState } from "react";

type ThemeContextProviderProps = {
    children: React.ReactNode;
}

type ThemeProps = "dark" | "light"

type ThemeContextProps = {
    theme: ThemeProps;
    toggleTheme: () => void;
}


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

