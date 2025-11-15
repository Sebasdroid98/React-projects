import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Inicio' }}
      />
      <Stack.Screen 
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Detalles' }}
      />
    </Stack.Navigator>
  );
}
