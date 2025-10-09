import React, { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
        <h1>Counter</h1>
        <h3>{count}</h3>
        <br />
        <button onClick={() => setCount(count+1)}>Aumentar</button>
        <button onClick={() => setCount(count-1)}>Disminuir</button>
    </div>
  )
}
