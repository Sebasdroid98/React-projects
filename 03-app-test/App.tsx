import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, ScrollView, Text, View } from 'react-native';
import FAB from './src/components/FAB';
import { useCounter } from './src/hooks/useCounter';

// Estilos globales de la aplicación
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge: {
    fontSize: 96,
    fontWeight: "bold",
    color: "#000",
    marginTop: 100,
  },
});

export default function App() {
  // Usando deconstrucción del custom hook useCounter
  const {
    count, 
    history, 
    setHistory, 
    incrementar, 
    disminuir, 
    reestablecer
  } = useCounter();

  useEffect(() => {
    if (count >= 0 && count <= 20){
      setHistory([...history, count]);
    }
  }, [count]);

  // Listar el historial
  const listarNumeros = () => {
    return history.map((value, index) => (
      <Text key={index}>Valor antiguo: {value}</Text>
    ));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>
      
      <ScrollView style={{ 
        marginTop: 60,
        marginBottom: 150,
        width: '50%' }}
        >{listarNumeros()}</ScrollView>

      <FAB
        label="+1"
        onPress={incrementar}
        onLongPress={reestablecer}
        position="right"
        backgroundColor='#1316b6c5'
        />
      <FAB
        label="-1"
        onPress={disminuir}
        onLongPress={reestablecer}
        position="left"
        backgroundColor='#a01313c5'
       />
      <FAB
        label="Reset"
        onPress={reestablecer}
        onLongPress={reestablecer}
        position="center"
        backgroundColor="#ec860aff"
        />

      <StatusBar style="auto" />
    </View>
  );
}
