import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import Home from "./screens/Home";
import { colors } from "./theme/colors";

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.SlateGreyAccent} />
      <Home />
    </SafeAreaView>
  );
}
