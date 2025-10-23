import {useState} from 'react'
import { useAuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const {isChecking, isAuthenticated, user, signIn} = useAuthContext();

  return (
    <div className='flex flex-col items-center h-dvh w-dvw gap-y-10'>
        {isAuthenticated ? 
            <>
                <h1>Bienvenido {user?.name}</h1>
                <div>Su correo es: {user?.email}</div>
            </>
            :
            <>
                <h1>Login</h1>
                <div className='flex gap-4'>
                    <input 
                        value={inputEmail}
                        className='border-gray-400 border-dashed border-2'
                        type="text" 
                        placeholder='email'
                        onChange={(e) => setInputEmail(e.target.value)}
                        />
                    <input 
                        value={inputPassword}
                        className='border-gray-400 border-dashed border-2'
                        type="password" 
                        placeholder='password'
                        onChange={(e) => setInputPassword(e.target.value)}
                        />
                    <button
                        className='bg-blue-400 p-2 rounded-2xl'
                        onClick={() => {
                            signIn(inputEmail, inputPassword);
                        }}
                        >Iniciar sesión</button>
                </div>
            </>
        }
    </div>
  )
}
