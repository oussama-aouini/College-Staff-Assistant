import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ListItemnc from "../components/lists/ListItemnc";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItemnc title="admin" subTitle="admin@ensi-uma.tn" />
      </View>
      <View style={styles.logout}>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#FFE66D" />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
  qrcontainer: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default AccountScreen;
