import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./screens/Home";
import { colors } from "./theme/colors";
import { MenuProvider } from "react-native-popup-menu";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { About } from "./screens/About";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <MenuProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar
            backgroundColor={colors.SlateGreyAccent}
            barStyle="light-content"
          />
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="About" component={About} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </MenuProvider>
  );
}
