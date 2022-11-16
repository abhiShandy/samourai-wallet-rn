import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./screens/Home";
import { colors } from "./theme/colors";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={colors.SlateGreyAccent}
        barStyle="light-content"
      />
      <Home />
    </SafeAreaProvider>
  );
}
