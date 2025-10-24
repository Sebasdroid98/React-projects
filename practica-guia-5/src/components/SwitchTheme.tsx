import React from 'react'

import { useThemeContext } from '../context/ThemeContext';

export const SwitchTheme = () => {

    const {theme, toggleTheme} = useThemeContext();

  return (
    <>
      Switch Theme Component
      <button onClick={toggleTheme}>
          Cambiar a {theme === 'light' ? 'dark' : 'light'} mode
      </button>

      <div className='bg-amber-600 dark:bg-gray-800 p-4 mt-4 text-white'>
        El tema actual es {theme}
      </div>
    </>
  )
}
