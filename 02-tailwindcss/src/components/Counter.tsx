import React, { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(10);

  // funcion para incrementar o decrementar
  // Sintaxis tipo función fecha
  const increaseBy = (value: number) => {
    setCount(count + value);
};
  return (
    <>
      <h3 className="text-3xl font-bold">Counter <small>{count}</small></h3>
      <div className="flex gap-x-4 mt-6">
        <button 
          className="p-2 bg-blue-500 rounded-xl w-10 text-white hover:opacity-80 transition flex-1"
          onClick={()=> increaseBy(+1)}
          >Incrementa</button>
        <button 
          className="p-2 bg-blue-500 rounded-xl w-10 text-white hover:opacity-80 transition flex-1"
          onClick={()=> increaseBy(-1)}
          >Decrementa</button>
      </div>
    </>
  )
}
