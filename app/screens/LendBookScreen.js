import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";

import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

function LendBookScreen({ navigation, data }) {
  return (
    <Screen style={styles.container}>
      <AppButton
        title="Scan QRCode"
        onPress={() => navigation.navigate("ScannerScreen")}
      />
      <AppButton
        title="Scan BarCode"
        onPress={() => navigation.navigate("ScannerScreen")}
      />
      <AppTextInput placeholder="Number of days" />
      <AppButton title="submit" onPress={() => console.log("nothing")} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default LendBookScreen;
