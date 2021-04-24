import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={2}
      source={require("../assets/bg.jpg")}
      style={styles.container}
    >
      <Image style={styles.logo} source={require("../assets/logo-ensi.png")} />
      <View style={styles.buttonsContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    top: 20,
  },
});

export default WelcomeScreen;
