import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const standardPadding = 8;

export const iconColor = {
  color: colors.iconColor,
};

export const globalStyles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  paddedContainer: {
    padding: standardPadding * 2,
  },
});
