import React from "react";
import { View, StyleSheet, Text } from "react-native";

function MapScreen(props) {
  return (
    <View style={styles.container}>
      <Text>This screen will contain the map in the future</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MapScreen;
