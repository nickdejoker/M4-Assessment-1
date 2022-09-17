
import React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function  MySettings({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Text style={{ color: "#808000", fontSize: 40 }}>User Screen!</Text>
    <Ionicons name="md-person-circle-outline" size={80} color="#ff8c00"  />
  </View>
  );
}