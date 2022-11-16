import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { formatSats } from "../lib/formatSats";
import { colors } from "../theme/colors";

interface BalanceProps {
  sats: number;
}

export default function Balance(props: BalanceProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.balance}>{formatSats(props.sats)}</Text>
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
