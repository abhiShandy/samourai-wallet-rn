import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export default function ActionButton() {
  return (
    <Pressable style={styles.pressable}>
      <Text style={styles.text}>+</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: colors.Accent,
    borderRadius: 50,
    height: 60,
    width: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
  },
  text: {
    color: "white",
    fontSize: 32,
  },
});
