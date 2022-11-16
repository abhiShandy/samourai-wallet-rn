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
import { iconColor, standardPadding } from "../theme/theme";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Logo</Text>
      </View>
      <View style={styles.headerRight}>
        <FontAwesomeIcon icon={faWifi} size={20} style={iconColor} />
        <FontAwesomeIcon icon={faExpand} size={20} style={iconColor} />
        <Menu>
          <MenuTrigger>
            <FontAwesomeIcon icon={faEllipsisV} size={20} style={iconColor} />
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
    paddingHorizontal: standardPadding * 3,
  },
  headerRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const optionsStyles = {
  optionsContainer: {
    backgroundColor: colors.Window,
    padding: standardPadding,
  },
  optionsWrapper: {},
  optionWrapper: {
    margin: standardPadding,
  },
  optionTouchable: {
    activeOpacity: 70,
  },
  optionText: {
    color: colors.TextPrimary,
    fontSize: 16,
  },
};
