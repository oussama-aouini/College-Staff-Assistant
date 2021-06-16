import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ListItemnc from "../components/lists/ListItemnc";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import Icon from "../components/Icon";
import QRCode from "react-native-qrcode-svg";
import useAuth from "../auth/useAuth";

function AccountScreen(props) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItemnc
          title={user.name}
          subTitle={user.email}
          image={require("../assets/account.jpg")}
        />
      </View>
      <View style={styles.logout}>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#FFE66D" />}
          onPress={() => logOut()}
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
