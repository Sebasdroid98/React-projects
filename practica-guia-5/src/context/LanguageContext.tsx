import { createContext, type PropsWithChildren, useContext, useEffect, useState } from 'react';

interface LanguageState {
    language: string;
    toggleLanguage: () => void;
}

export const LanguageContext = createContext({} as LanguageState);

export const useLanguageContext = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: PropsWithChildren) => {
    const [language, setLanguage] = useState<string>('en');

    // Leer tema guardado en localStorage al montar
    useEffect(() => {
        const storeLanguage = localStorage.getItem("app-language");
        if (storeLanguage) {
            setLanguage(storeLanguage);
            document.documentElement.classList.add(storeLanguage);
        }
    }, [language]);

    function toggleLanguage() {
        const newLanguage = language === 'en' ? 'es' : 'en';

        // Remover el tema anterior y aplicar el nuevo
        document.documentElement.classList.remove(language);
        document.documentElement.classList.add(newLanguage);

        setLanguage(newLanguage);
        localStorage.setItem("app-language", newLanguage);
    }

    return <LanguageContext.Provider
        value={{
            language: language,

            // Funciones
            toggleLanguage
        }}
    >{children}</LanguageContext.Provider>;
}