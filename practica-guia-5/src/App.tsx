import './App.css'
import { Counter } from './components/Counter'
import { LoginPage } from './components/LoginPage'
import { Settings } from './components/Settings'
import { SwitchTheme } from './components/SwitchTheme'
import { AuthProvider } from './context/AuthContext'
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {

  return (
    // <>
    //   <Counter />
    // </>

    // Usamos el AuthProvider para envolver los componentes que necesiten el contexto
    // <AuthProvider>
    //   <LoginPage />
    // </AuthProvider>

    // Ejercicio 1 y 2
    // <ThemeProvider>
    //   <SwitchTheme/>
    // </ThemeProvider>

    // Ejercicio 3 y 4
    <ThemeProvider>
      <LanguageProvider>
        <Settings />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
