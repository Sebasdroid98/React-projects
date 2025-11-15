import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackParamList } from '../navigation/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;

type DetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

type Props = {
  route: DetailsRouteProp;
  navigation: DetailsNavigationProp;
};

export default function DetailsScreen({ route, navigation }: Props) {
  const { id, name } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>Pantalla Details</Text>

      <Text>ID recibido: {id}</Text>
      <Text>Nombre recibido: {name}</Text>

      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}
