import { StyleSheet, Platform } from "react-native";

import colors from "./color";

const styles = StyleSheet.create({
  h1: {
    color: colors.black,
    fontSize: 28,
    fontFamily: "HelveticaNeue",
  },
  h1Light:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 28,
        fontFamily: "HelveticaNeue",
        fontWeight: "300",
      }
      : {
        color: colors.black,
        fontSize: 28,
        fontFamily: "HelveticaNeue_Light",
      },
  h1Medium:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 28,
        fontFamily: "HelveticaNeue",
        fontWeight: "500",
      }
      : {
        color: colors.black,
        fontSize: 28,
        fontFamily: "HelveticaNeue_Medium",
      },
  h1Bold:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 28,
        fontFamily: "HelveticaNeue",
        fontWeight: "bold",
      }
      : {
        color: colors.black,
        fontSize: 28,
        fontFamily: "HelveticaNeue_Bold",
      },
  h2: {
    color: colors.black,
    fontSize: 24,
    fontFamily: "HelveticaNeue",
  },
  h2Light:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 24,
        fontFamily: "HelveticaNeue",
        fontWeight: "300",
      }
      : {
        color: colors.black,
        fontSize: 24,
        fontFamily: "HelveticaNeue_Light",
      },
  h2Medium:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 24,
        fontFamily: "HelveticaNeue",
        fontWeight: "500",
      }
      : {
        color: colors.black,
        fontSize: 24,
        fontFamily: "HelveticaNeue_Medium",
      },
  h2Bold:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 24,
        fontFamily: "HelveticaNeue",
        fontWeight: "bold",
      }
      : {
        color: colors.black,
        fontSize: 24,
        fontFamily: "HelveticaNeue_Bold",
      },
  h3: {
    color: colors.black,
    fontSize: 20,
    fontFamily: "HelveticaNeue",
  },
  h3Light:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 20,
        fontFamily: "HelveticaNeue",
        fontWeight: "300",
      }
      : {
        color: colors.black,
        fontSize: 20,
        fontFamily: "HelveticaNeue_Light",
      },
  h3Medium:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 20,
        fontFamily: "HelveticaNeue",
        fontWeight: "500",
      }
      : {
        color: colors.black,
        fontSize: 20,
        fontFamily: "HelveticaNeue_Medium",
      },
  h3Bold:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 20,
        fontFamily: "HelveticaNeue",
        fontWeight: "bold",
      }
      : {
        color: colors.black,
        fontSize: 20,
        fontFamily: "HelveticaNeue_Bold",
      },
  h4: {
    color: colors.black,
    fontSize: 16,
    fontFamily: "HelveticaNeue",
  },
  h4Light:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 16,
        fontFamily: "HelveticaNeue",
        fontWeight: "300",
      }
      : {
        color: colors.black,
        fontSize: 16,
        fontFamily: "HelveticaNeue_Light",
      },
  h4Medium:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 16,
        fontFamily: "HelveticaNeue",
        fontWeight: "500",
      }
      : {
        color: colors.black,
        fontSize: 16,
        fontFamily: "HelveticaNeue_Medium",
      },
  h4Bold:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 16,
        fontFamily: "HelveticaNeue",
        fontWeight: "bold",
      }
      : {
        color: colors.black,
        fontSize: 16,
        fontFamily: "HelveticaNeue_Bold",
      },
  b1: {
    color: colors.black,
    fontSize: 13,
    fontFamily: "HelveticaNeue",
  },
  b1Light:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 13,
        fontFamily: "HelveticaNeue",
        fontWeight: "300",
      }
      : {
        color: colors.black,
        fontSize: 13,
        fontFamily: "HelveticaNeue_Light",
      },
  b1Medium:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 13,
        fontFamily: "HelveticaNeue",
        fontWeight: "500",
      }
      : {
        color: colors.black,
        fontSize: 13,
        fontFamily: "HelveticaNeue_Medium",
      },
  b1Bold:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 13,
        fontFamily: "HelveticaNeue",
        fontWeight: "bold",
      }
      : {
        color: colors.black,
        fontSize: 13,
        fontFamily: "HelveticaNeue_Bold",
      },
  b2: {
    color: colors.black,
    fontSize: 11,
    fontFamily: "HelveticaNeue",
  },
  b2Light:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 11,
        fontFamily: "HelveticaNeue",
        fontWeight: "300",
      }
      : {
        color: colors.black,
        fontSize: 11,
        fontFamily: "HelveticaNeue_Light",
      },
  b2Medium:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 11,
        fontFamily: "HelveticaNeue",
        fontWeight: "500",
      }
      : {
        color: colors.black,
        fontSize: 11,
        fontFamily: "HelveticaNeue_Medium",
      },
  b2Bold:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 11,
        fontFamily: "HelveticaNeue",
        fontWeight: "bold",
      }
      : {
        color: colors.black,
        fontSize: 11,
        fontFamily: "HelveticaNeue_Bold",
      },
  b3: {
    color: colors.black,
    fontSize: 10,
    fontFamily: "HelveticaNeue",
  },
  b3Light:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 10,
        fontFamily: "HelveticaNeue",
        fontWeight: "300",
      }
      : {
        color: colors.black,
        fontSize: 10,
        fontFamily: "HelveticaNeue_Light",
      },
  b3Medium:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 10,
        fontFamily: "HelveticaNeue",
        fontWeight: "500",
      }
      : {
        color: colors.black,
        fontSize: 10,
        fontFamily: "HelveticaNeue_Medium",
      },
  b3Bold:
    Platform.OS === "ios"
      ? {
        color: colors.black,
        fontSize: 10,
        fontFamily: "HelveticaNeue",
        fontWeight: "bold",
      }
      : {
        color: colors.black,
        fontSize: 10,
        fontFamily: "HelveticaNeue_Bold",
      },
});

export default styles;
