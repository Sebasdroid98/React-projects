import './App.css'
import { Counter } from './components/Counter'
import { LoginPage } from './components/LoginPage'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    // <>
    //   <Counter />
    // </>

    // Usamos el AuthProvider para envolver los componentes que necesiten el contexto
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  )
}

export default App
