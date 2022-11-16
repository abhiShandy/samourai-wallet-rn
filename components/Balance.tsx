import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";

interface BalanceProps {
  sats: number;
}

// TODO: verify with Samourai wallet repo
// TODO: add unit test
function formatSats(satStr: string): string {
  const sats = parseInt(satStr);

  if (satStr.length <= 3) {
    return satStr + (sats > 1 ? "  sats" : "  sat");
  }
  if (satStr.length <= 6) {
    return satStr.slice(0, -3) + "  " + satStr.slice(-3) + "  sats";
  }
  if (satStr.length <= 9) {
    return satStr.slice(0, -6) + "  " + formatSats(satStr.slice(-6));
  }
  if (satStr.length <= 12) {
    return satStr.slice(0, -9) + "  " + formatSats(satStr.slice(-9));
  }
  if (satStr.length <= 15) {
    return satStr.slice(0, -12) + "  " + formatSats(satStr.slice(-12));
  }
  if (sats > 2.1e15) return "∞  sats";
  return satStr + "  sats";
}

export default function Balance(props: BalanceProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.balance}>{formatSats(props.sats.toString())}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.SlateGreyAccent,
    height: 215,
  },
  balance: {
    color: "white",
    textAlign: "center",
    fontSize: 32,
    top: 110,
  },
});
