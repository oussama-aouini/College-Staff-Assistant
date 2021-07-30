import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.contaier}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color="white" size={40} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={40}
        />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/books.jpeg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 40,
  },
  contaier: {
    backgroundColor: "#000",
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;
