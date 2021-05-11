import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Screen from "../components/Screen";

const books = [
  {
    id: 1,
    title: "moby dick",
    author: "Herman Melville",
  },
  {
    id: 2,
    title: "the three musketeers",
    author: "Alexandre Dumas",
  },
  {
    id: 3,
    title: "A Game of Thrones",
    author: "George R. R. Martin",
  },
  {
    id: 4,
    title: "Greenlights",
    author: "HMatthew McConaughey",
  },
  {
    id: 5,
    title: "the three musketeers",
    author: "Alexandre Dumas",
  },
  {
    id: 6,
    title: "A Game of Thrones",
    author: "George R. R. Martin",
  },
  {
    id: 7,
    title: "Greenlights",
    author: "HMatthew McConaughey",
  },
];

function BookInfoScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.infoBox}>
        <Image source={require("../assets/nocover.jpg")} />
        <View>
          <Text>Title:</Text>
          <Text>Author:</Text>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
  },
  infoBox: {
    flexDirection: "row",
    padding: 10,
  },
});

export default BookInfoScreen;
