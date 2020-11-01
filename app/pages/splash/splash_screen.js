import React, { useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../../assets/img/logo.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  img: {
    width: 250,
    resizeMode: "contain",
  },
});
