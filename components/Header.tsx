import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { colors } from "../theme/colors";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { About } from "../screens/About";

export default function Header({ navigation }) {
  return (
    <Menu
      style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingRight: 12,
      }}
    >
      <MenuTrigger>
        <FontAwesomeIcon
          icon={faEllipsisV}
          size={20}
          style={{
            color: "white",
          }}
        />
      </MenuTrigger>
      <MenuOptions customStyles={optionsStyles}>
        <MenuOption text="About" onSelect={() => navigation.navigate(About)} />
      </MenuOptions>
    </Menu>
  );
}

const optionsStyles = {
  optionsContainer: {
    backgroundColor: colors.Window,
    padding: 8,
  },
  optionText: {
    color: colors.TextPrimary,
    fontSize: 16,
  },
};
