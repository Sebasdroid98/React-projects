import React from 'react'
import { useThemeContext } from '../context/ThemeContext';
import { useLanguageContext } from '../context/LanguageContext';

export const Settings = () => {

    const {theme, toggleTheme} = useThemeContext();
    const {language, toggleLanguage} = useLanguageContext();

    return (
        <div>
            <h2>Settings Component</h2>
            <div>
                <button onClick={toggleTheme}>
                    Cambiar a {theme === 'light' ? 'dark' : 'light'} mode
                </button>

                <div className='bg-amber-600 dark:bg-gray-800 p-4 mt-4 text-white'>
                    El tema actual es {theme}
                </div>
            </div>
            <div className='mt-6'>
                <button onClick={toggleLanguage}>
                    Cambiar a {language === 'en' ? 'español' : 'english'}
                </button>

                <div className='bg-blue-600 p-4 mt-4 text-white'>
                    El idioma actual es {language}
                </div>
            </div>
        </div>
    )
}
