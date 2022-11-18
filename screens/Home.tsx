import React from "react";
import { View, StyleSheet } from "react-native";
import Balance from "../components/Balance";
import Header from "../components/Header";
import Transactions from "../components/TxList";
import { Tx } from "../lib/types";

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

export default function Home({ navigation }) {
  const totalSats = txs.reduce((acc, tx) => acc + tx.sats, 0);
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Balance sats={totalSats} />
      <Transactions txs={txs} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
});
