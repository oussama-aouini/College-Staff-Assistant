import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { SearchBar } from "react-native-elements";

import AppText from "../components/AppText";
import BookCard from "../components/BookCard";
import colors from "../config/colors";

const books = [
  {
    id: 1,
    title: "moby dick",
    author: "Herman Melville",
    image: require("../assets/nocover.jpg"),
  },
  {
    id: 2,
    title: "the three musketeers",
    author: "Alexandre Dumas",
    image: require("../assets/cover2.jpg"),
  },
  {
    id: 3,
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    image: require("../assets/cover1.jpg"),
  },
  {
    id: 4,
    title: "Greenlights",
    author: "HMatthew McConaughey",
    image: require("../assets/nocover.jpg"),
  },
  {
    id: 5,
    title: "the three musketeers",
    author: "Alexandre Dumas",
    image: require("../assets/nocover.jpg"),
  },
  {
    id: 6,
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    image: require("../assets/nocover.jpg"),
  },
  {
    id: 7,
    title: "Greenlights",
    author: "HMatthew McConaughey",
    image: require("../assets/cover3.jpg"),
  },
];

function LibraryScreen(props) {
  return (
    <View style={styles.screen}>
      <SearchBar
        searchIcon={{ size: 24 }}
        placeholder="Type Here..."
        lightTheme
        round
        containerStyle={{
          backgroundColor: colors.light,
          borderTopWidth: 0,
          borderBottomWidth: 0,
        }}
      />
      <View style={styles.container}>
        <FlatList
          data={books}
          keyExtractor={(book) => book.id.toString()}
          renderItem={({ item }) => (
            <BookCard
              title={item.title}
              subTitle={item.author}
              image={item.image}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 50,
  },
  screen: {
    padding: 20,
    backgroundColor: colors.light,
    flex: 1,
  },
});

export default LibraryScreen;
