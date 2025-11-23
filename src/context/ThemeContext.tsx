import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    // En el useEffect aplicamos dinámicamente la clase CSS al <html>
    // para cambiar todo el diseño de la aplicación usando variables CSS.
    useEffect(() => {
        const root = document.documentElement;

        if (theme === "light") {
            root.classList.add("light-theme");
        } else {
            root.classList.remove("light-theme");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Este Context almacena el estado global del tema (light/dark)
//  y permite accederlo desde cualquier componente sin necesidad
//  de pasar props manualmente.
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme debe usarse dentro de un ThemeProvider");
    }
    return context;
}