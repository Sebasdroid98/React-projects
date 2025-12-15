import React, { useState } from 'react'

export const useCounter = () => { 
  const [count, setCount] = useState(10); 
  const increaseBy = (value: number) => { 
    setCount(count + value); 
  }; 
  const decreaseBy = (value: number) => { 
    setCount(count - value); 
  }; 
  return { 
    //Propiedades 
    count, 
 
    //Funciones
    increaseBy,
    decreaseBy
  }; 
}; 