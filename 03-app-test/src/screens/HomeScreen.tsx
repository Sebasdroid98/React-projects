import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackParamList } from '../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Pantalla Home</Text>

      <Button
        title="Ir a Detalles"
        onPress={() => navigation.navigate('Details', {
          id: 42,
          name: 'Producto especial'
        })}
      />
    </View>
  );
}
