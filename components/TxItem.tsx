import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { formatSats } from "../lib/formatSats";
import { colors } from "../theme/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
import { Tx } from "../lib/types";
import { formatTime } from "../lib/formatDate";

interface TransactionItemProps {
  tx: Tx;
}

export default function TransactionItem(props: TransactionItemProps) {
  const { tx } = props;

  return (
    <View>
      <Text style={styles.date}>{tx.date.toDateString()}</Text>
      <View style={styles.separator} />
      <View style={styles.txRow}>
        <View style={styles.txLeft}>
          <FontAwesomeIcon
            icon={tx.isIncoming ? faArrowDown : faArrowUp}
            color={tx.isIncoming ? colors.Success : "white"}
            size={20}
            style={styles.arrowIcon}
          />
          <Text style={styles.time}>{formatTime(tx.date)}</Text>
        </View>
        <View style={styles.txRight}>
          <Text
            style={[
              styles.amt,
              tx.isIncoming ? styles.incomingAmt : styles.outgoingAmt,
            ]}
          >
            {formatSats(tx.sats.toString())}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.TextFieldBg,
  },
  separator: {
    borderWidth: 0.5,
    borderTopColor: colors.SlateGreyAccent,
    borderColor: "transparent",
  },
  txRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingVertical: 20,
  },
  date: {
    color: colors.TextSecondary,
    paddingVertical: 10,
    paddingLeft: 20,
  },
  time: {
    color: colors.TextSecondary,
  },
  txLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginRight: 20,
    height: 50,
  },
  txRight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 50,
  },
  amt: {
    fontSize: 20,
  },
  incomingAmt: {
    color: colors.Success,
  },
  outgoingAmt: {
    color: "white",
  },
  arrowIcon: {
    marginHorizontal: 4,
  },
});
