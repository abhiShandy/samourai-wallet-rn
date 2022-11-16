import {
  faEllipsisV,
  faExpand,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { padding } from "../theme/theme";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Logo</Text>
      </View>
      <View style={styles.headerRight}>
        <FontAwesomeIcon icon={faWifi} size={20} style={styles.icon} />
        <FontAwesomeIcon icon={faExpand} size={20} style={styles.icon} />
        <Menu>
          <MenuTrigger>
            <FontAwesomeIcon icon={faEllipsisV} size={20} style={styles.icon} />
          </MenuTrigger>
          <MenuOptions customStyles={optionsStyles}>
            <MenuOption text="Export wallet backup" />
            <MenuOption text="Show unspent outputs" />
            <MenuOption text="Postmix transactions" />
            <MenuOption text="Support" />
          </MenuOptions>
        </Menu>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.SlateGreyAccent,
    flexDirection: "row",
    padding: 5,
  },
  header: {
    flex: 2,
    paddingHorizontal: padding.standard * 3,
  },
  headerRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    color: colors.TextPrimary,
    fontWeight: "300",
  },
});

const optionsStyles = {
  optionsContainer: {
    backgroundColor: colors.Window,
    padding: padding.standard,
  },
  optionsWrapper: {},
  optionWrapper: {
    margin: padding.standard,
  },
  optionTouchable: {
    activeOpacity: 70,
  },
  optionText: {
    color: colors.TextPrimary,
    fontSize: 16,
  },
};
