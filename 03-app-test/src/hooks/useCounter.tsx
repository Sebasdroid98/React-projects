import React, { useState } from 'react'
import { Alert } from 'react-native';

export const useCounter = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

  // Funciones para incrementar, disminuir y reestablecer el contador
    const incrementar = () => {
      if (count >= 20) return;
      setCount(count + 1);
    }
    const disminuir = () => {
      if (count <= 0) return;
      setCount(count - 1);
    }
    const reestablecer = () => {
      if (count === 0) return;
      Alert.alert('Alerta', '¿Quiere reestablecer el contador?', [
        {
          text: 'No',
          onPress: () => console.log('Acción cancelada'),
          style: 'cancel',
        },
        {
          text: 'Sí', 
          onPress: () => {
            setCount(0);
            setHistory([0]);
          }
        },
      ]);
    };

  return {
    // Propiedades
    count,
    history,

    // Métodos
    setCount,
    setHistory,
    incrementar,
    disminuir,
    reestablecer,
  };
};
