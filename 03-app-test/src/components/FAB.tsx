import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
  label: string;
  position?: "left" | "right" | "center";
  backgroundColor?: string;
  // Acciones
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({ 
  label,
  position = "right",
  backgroundColor = "#007AFF",
  onPress,
  onLongPress,
}: Props)
{
  // Estilos del componente
  const styles = StyleSheet.create({
    floattingButton: {
      position: "absolute",
      bottom: 50,
      backgroundColor: "#007AFF",
      borderRadius: 15,
      padding: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      elevation: 3,
    },
    positionRight: {
      right: 20,
    },
    positionLeft: {
      left: 20,
    },
    positionCenter: {
      left: '43%',
    },
  });

  return (
    <Pressable
      style={({pressed}) => [
        styles.floattingButton,
        {backgroundColor},
        position === "right" && styles.positionRight,
        position === "left" && styles.positionLeft,
        position === "center" && styles.positionCenter,
        pressed && { opacity: 0.7 },
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
    </Pressable>
  )
}