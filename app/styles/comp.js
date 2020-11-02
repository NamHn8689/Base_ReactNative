import { StyleSheet } from "react-native";
import colors from "./color";
import typo from "./typo";

const buttonWhite = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.white,
    borderColor: colors.grey,
    borderWidth: 1,
    height: 36,
    borderRadius: 0,
  },
  titleStyle: {
    ...typo.b1Bold,
    width: "100%",
  },
  containerStyle: {
    borderRadius: 0,
  },
});

const buttonBlack = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.black,
    borderColor: colors.black,
    borderWidth: 1,
    height: 36,
    borderRadius: 0,
  },
  titleStyle: {
    ...typo.b1Bold,
    width: "100%",
    color: colors.white,
  },
  containerStyle: {
    borderRadius: 0,
  },
});

const buttonUpload = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.white,
    borderColor: colors.grey,
    borderWidth: 1,
    height: 36,
    borderRadius: 0,
  },
  titleStyle: {
    ...typo.b1Light,
    width: "100%",
    textAlign: "left",
  },
  containerStyle: {
    borderRadius: 0,
  },
});

const textInputFocus = StyleSheet.create({
  inputStyle: {
    ...typo.b1Bold,
    padding: 0,
    margin: 0,
  },
  inputContainerStyle: {
    padding: 0,
    margin: 0,
    height: 20,
    borderBottomWidth: 0,
  },
  containerStyle: {
    height: 36,
    padding: 0,
    margin: 0,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  labelStyle: {
    ...typo.b3Medium,
    height: 12,
  },
});

const textInput = StyleSheet.create({
  inputStyle: {
    ...typo.b1Light,
    padding: 0,
    margin: 0,
  },
  inputContainerStyle: {
    padding: 0,
    margin: 0,
    height: 32,
    borderBottomWidth: 0,
  },
  containerStyle: {
    height: 36,
    padding: 0,
    margin: 0,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  labelStyle: {
    ...typo.b3Medium,
    height: 0,
  },
});

const picker = StyleSheet.create({
  style: {
    ...typo.b1Medium,
    borderWidth: 1,
    borderColor: colors.grey,
    height: 36,
  },
  itemStyle: {
    ...typo.b1Medium,
  },
});

const pickerSelect = StyleSheet.create({
  inputIOS: {
    ...typo.b1Bold,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 0,
    paddingRight: 40,
    height: 36,
  },
  inputAndroid: {
    ...typo.b1Bold,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 0,
    paddingRight: 40,
    height: 36,
  },
  placeholder: {
    ...typo.b1Light,
  },
});

export default {
  buttonWhite,
  buttonBlack,
  buttonUpload,
  textInputFocus,
  textInput,
  picker,
  pickerSelect,
};
