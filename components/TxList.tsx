import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Tx } from "../lib/types";
import { colors } from "../theme/colors";
import TransactionItem from "./TxItem";

interface TxListProps {
  txs: Tx[];
}

export default function TransactionList(props: TxListProps) {
  return (
    <ScrollView style={styles.container}>
      {props.txs.map((tx, index) => (
        <TransactionItem tx={tx} key={index} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.TextFieldBg,
  },
});
