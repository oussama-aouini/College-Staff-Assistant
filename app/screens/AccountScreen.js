import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ListItemnc from "../components/lists/ListItemnc";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import QRCode from "react-native-qrcode-svg";

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItemnc
          title="oussama aouini"
          subTitle="aouiniou@gmail.com"
          image={require("../assets/mypic.jpg")}
        />
      </View>
      <View style={styles.logout}>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#FFE66D" />}
        />
      </View>
      <View style={styles.qrcontainer}>
        <QRCode
          size={200}
          value={JSON.stringify({ email: "aouiniou@gmail.com" })}
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
