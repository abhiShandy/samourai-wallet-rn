import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Balance from "../components/Balance";
import Header from "../components/Header";
import Transactions from "../components/TxList";
import { Tx } from "../lib/types";
import { colors } from "../theme/colors";

// TODO: replace this with a real API call
const txs: Tx[] = [
  {
    sats: 12345678,
    isIncoming: true,
    date: new Date(1483228800000),
  },
  {
    sats: 46896347,
    isIncoming: false,
    date: new Date(1262304000000),
  },
];

export function Home({ navigation }) {
  const totalSats = txs.reduce((acc, tx) => acc + tx.sats, 0);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={colors.SlateGreyAccent}
        barStyle="light-content"
      />
      <Header navigation={navigation} />
      <Balance sats={totalSats} />
      <Transactions txs={txs} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    backgroundColor: colors.SlateGreyAccent,
  },
});
