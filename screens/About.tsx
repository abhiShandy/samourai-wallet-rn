import React from "react";
import { View, Text, StatusBar } from "react-native";

export function About() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Text>This is a clone of the Samourai wallet in React Native</Text>
    </View>
  );
}
