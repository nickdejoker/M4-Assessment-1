import React from 'react';
import { View, Text , StyleSheet , Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Ionicons } from "@expo/vector-icons";

export default function Home ({navigation}) {
  return (
<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "#808000", fontSize: 40 }}>Home Screen!</Text>
      <Ionicons name="md-home" size={80} color="#ff8c00" />
    </View>
  
  );
}

