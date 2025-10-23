import './App.css'
import { Counter } from './components/Counter'
import { LoginPage } from './components/LoginPage'
import { SwitchTheme } from './components/SwitchTheme'
import { AuthProvider } from './context/AuthContext'
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

    // Ejercicio 1
    <ThemeProvider>
      <SwitchTheme/>
    </ThemeProvider>
  )
}

export default App
