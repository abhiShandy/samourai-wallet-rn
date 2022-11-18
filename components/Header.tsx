import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../theme/colors";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { iconColor, standardPadding } from "../theme/theme";
import { About } from "../screens/About";

export default function Header({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userLogo}></View>
      </View>
      <View style={styles.headerRight}>
        <Menu>
          <MenuTrigger>
            <FontAwesomeIcon icon={faEllipsisV} size={20} style={iconColor} />
          </MenuTrigger>
          <MenuOptions customStyles={optionsStyles}>
            <MenuOption
              text="About"
              onSelect={() => navigation.navigate(About)}
            />
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
    padding: standardPadding,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 2,
    paddingHorizontal: standardPadding,
  },
  headerRight: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: standardPadding,
  },
  userLogo: {
    borderRadius: 100,
    backgroundColor: colors.Accent,
    width: 40,
    height: 40,
  },
  menuStyle: {
    margin: -standardPadding,
  },
});

const optionsStyles = {
  optionsContainer: {
    backgroundColor: colors.Window,
    padding: standardPadding,
  },
  optionWrapper: {
    margin: standardPadding,
  },
  optionTouchable: {
    activeOpacity: 70,
    borderRadius: 100,
  },
  optionText: {
    color: colors.TextPrimary,
    fontSize: 16,
  },
};
