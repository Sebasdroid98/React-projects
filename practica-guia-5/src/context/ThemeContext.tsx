import { createContext, type PropsWithChildren, useContext, useEffect, useState } from 'react';

interface ThemeState {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeState);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState<string>('light');

    // Leer tema guardado en localStorage al montar
    useEffect(() => {
        const storedTheme = localStorage.getItem("app-theme");
        if (storedTheme) {
        setTheme(storedTheme);
            document.documentElement.classList.add(storedTheme);
        }
    }, [theme]);

    function toggleTheme() {
        const newTheme = theme === "light" ? "dark" : "light";

        // Remover el tema anterior y aplicar el nuevo
        document.documentElement.classList.remove(theme);
        document.documentElement.classList.add(newTheme);

        setTheme(newTheme);
        localStorage.setItem("app-theme", newTheme);
    }

    return <ThemeContext.Provider
        value={{
            theme: theme,

            // Funciones
            toggleTheme
        }}
    >{children}</ThemeContext.Provider>;
}