import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { List } from './components/List'
import { useCounter } from './hooks/useCounter'

function App() {
  const {count, increaseBy, decreaseBy} = useCounter();

  return (
    <>
      <h1 className='text-blue-600'>Proyecto Blog</h1>
      <div className='bg-amber-400'>Contador {count}</div>
      <Button label='Incrementar contador' color='bg-green-400'  handleClick={() => increaseBy(1)} />
      <Button label='Disminuir contador' color='bg-red-400'  handleClick={() => decreaseBy(1)} />
      <Card/>
      <List/>
    </>
  )
}

export default App
