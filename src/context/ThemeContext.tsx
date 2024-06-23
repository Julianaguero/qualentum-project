import { createContext, useState } from "react";

type ThemeContextProviderProps = {
    children: React.ReactNode;
}

type ThemeProps = "dark" | "light"

type ThemeContextProps = {
    theme: ThemeProps;
    setTheme: React.Dispatch<React.SetStateAction<ThemeProps>>;
}


export const ThemeContext  = createContext<ThemeContextProps | null>(null);

export default function ThemeContextProvider({children}: ThemeContextProviderProps) {
const [theme, setTheme] = useState<ThemeProps>("light");

return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
)
}

