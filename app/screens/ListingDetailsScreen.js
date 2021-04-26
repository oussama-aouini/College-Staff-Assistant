import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket</AppText>
        <AppText style={styles.subTitle}>100$</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mypic.jpg")}
            title="Oussama Aouini"
            subTitle="5 Listing"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  subTitle: {
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 30,
  },
});

export default ListingDetailsScreen;
