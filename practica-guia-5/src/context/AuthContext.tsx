import { createContext, type PropsWithChildren, useContext, useState } from 'react';

// Lista de usuarios existentes
const USER_LIST: User[] = [
    {id: 1998, name: "Sebastian", email: "sebas@gmail.com", password: "123456"}
];

// Parte 1: Plantilla para los datos del contexto
type AuthStatus = 'checking' | 'authenticated' | 'unauthenticated';

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

interface AuthState {
    status: AuthStatus;
    token?: string;
    user?: User;
    isAuthenticated: boolean;
    isChecking: boolean;
    signIn: (email: string, password: string) => void;
}


// Parte 2: Plantilla para los datos del contexto
export const AuthContext = createContext({} as AuthState);

// Custom hook para exponer el contexto creado llamado "AuthContext"
export const useAuthContext = () => useContext(AuthContext);

// Recibe los hijos html y los pasa al "AuthContext.Provider"
export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [status, setStatus] = useState<AuthStatus>('unauthenticated');
    const [user, setUser] = useState<User>();

    function signIn(email: string, password: string) {
        const usersFound = USER_LIST.filter(user => user.email === email && user.password === password);

        console.log(usersFound);

        setStatus('checking');

        if (usersFound.length > 0) {
            setUser(usersFound[0]);
            setTimeout(() => {
                setStatus('authenticated');
            }, 3000);
        }else{
            setTimeout(() => {
                setStatus('unauthenticated');
            }, 3000);
        }
    }

    return <AuthContext.Provider
        value={{
            status: status,
            isChecking: status === 'checking',
            isAuthenticated: status === 'authenticated',
            user: user,

            // Funciones
            signIn
        }}
    >{children}</AuthContext.Provider>;
}