import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Text, TextInput } from "react-native";
import { Octicons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import BookCard from "../components/BookCard";
import colors from "../config/colors";
import booksApi from "../api/books";

function LibraryScreen(props) {
  const [books, setBooks] = useState([]);
  const [filterBooks, setFilterBooks] = useState([]);
  const [search, setsearch] = useState("");

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const response = await booksApi.getBooks();
    setBooks(response.data);
    setFilterBooks(response.data);
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = books.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterBooks(newData);
      setsearch(text);
    } else {
      setFilterBooks(books);
      setsearch(text);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.searchBar}>
        <Octicons name="search" size={24} color="black" />
        <TextInput
          style={styles.searchtext}
          value={search}
          placeholder="Search books"
          onChangeText={(text) => searchFilter(text)}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={filterBooks}
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
  searchBar: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 25,
    height: 45,
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#d3d3d3",
    alignContent: "center",
    padding: 10,
  },
  searchtext: {
    paddingLeft: 10,
    fontSize: 17,
  },
});

export default LibraryScreen;
