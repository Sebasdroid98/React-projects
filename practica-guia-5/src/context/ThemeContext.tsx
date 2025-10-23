import { createContext, type PropsWithChildren, useContext, useState } from 'react';

interface ThemeState {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeState);

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState<string>('light');

    function toggleTheme() {
        console.log("Tema actual", theme);
        setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
        console.log("Tema nuevo", theme);
    }

    return <ThemeContext.Provider
        value={{
            theme: theme,

            // Funciones
            toggleTheme
        }}
    >{children}</ThemeContext.Provider>;
}