import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Counter } from './components/Counter'
import { BasicTypes } from './components/BasicTypes'

function App() {
  return (
    <>
     <Counter/>
     <BasicTypes/>
    </>
  )
}

export default App
