import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

function BookCard({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      {image && (
        <Image resizeMode="contain" style={styles.image} source={image} />
      )}
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
    flexDirection: "row",
    height: 100,
    alignItems: "center",
  },
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: 80,
    height: 90,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    marginBottom: 7,
    fontWeight: "bold",
  },
});

export default BookCard;
