import { StyleSheet } from "react-native";

import colors from "./color";
import spacing from "./spacing";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.s,
    backgroundColor: colors.white,
  },
  columns: {
    flexDirection: "row",
    marginLeft: -spacing.xs,
    marginRight: -spacing.xs,
  },
  column: {
    flexGrow: 1,
    padding: spacing.xs,
  },
  column1: {
    width: "25%",
    padding: spacing.xs,
  },
  column2: {
    width: "50%",
    padding: spacing.xs,
  },
  column3: {
    width: "75%",
    padding: spacing.xs,
  },
  column4: {
    width: "100%",
    paddingHorizontal: spacing.s,
    paddingVertical: spacing.xs,
  },
});

export default styles;
