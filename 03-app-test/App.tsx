import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, ScrollView, Text, View } from 'react-native';
import FAB from './src/components/FAB';

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
  // Estado del contador
  const [count, setCount] = useState(0);

  // Se guarda el historial de valores del contador
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    if (count >= 0 && count <= 20){
      setHistory([...history, count]);
    }
  }, [count]);

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

  // Listar el historial
  const listarNumeros = () => {
    return history.map((value, index) => (
      <Text key={index}>Valor histórico: {value}</Text>
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
        position="right"
        backgroundColor='#1316b6c5'
        />
      <FAB
        label="-1"
        onPress={disminuir}
        position="left"
        backgroundColor='#a01313c5'
       />
      <FAB
        label="Reset"
        onPress={reestablecer}
        position="center"
        backgroundColor="#ec860aff"
       />

      <StatusBar style="auto" />
    </View>
  );
}
