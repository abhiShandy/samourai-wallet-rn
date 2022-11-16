import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { formatSats } from "../lib/formatSats";
import { colors } from "../theme/colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";

export default function Transactions() {
  return (
    <ScrollView style={styles.container}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <View key={i}>
          <Text style={styles.date}>31 Dec 2022</Text>
          <View style={styles.separator} />
          <View style={styles.txRow}>
            <View style={styles.txLeft}>
              <FontAwesomeIcon
                icon={faArrowDown}
                color={colors.Success}
                size={20}
                style={styles.arrowDownIcon}
              />
              <Text style={styles.time}>10:10</Text>
            </View>
            <View style={styles.txRight}>
              <Text style={styles.receivedAmt}>
                {formatSats((1234567).toString())}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
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
  receivedAmt: {
    color: colors.Success,
    fontSize: 24,
    // paddingVertical: 10,
  },
  arrowDownIcon: {
    marginHorizontal: 4,
  },
});
