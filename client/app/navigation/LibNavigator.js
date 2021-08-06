import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import LendNavigator from "./LendNavigator";
import AddBookScreen from "../screens/AddBookScreen";
import EmpruntsScreen from "../screens/EmpruntsScreen";
import AdminAccScreen from "../screens/AdminAccScreen";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();
const LibNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: colors.primary,
      activeTintColor: colors.white,
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: () => <AntDesign name="qrcode" size={24} color="black" />,
      }}
      name="Scanner"
      component={LendNavigator}
    />
    <Tab.Screen
      options={{
        tabBarIcon: () => (
          <AntDesign name="pluscircleo" size={24} color="black" />
        ),
      }}
      name="AddBook"
      component={AddBookScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: () => (
          <FontAwesome name="history" size={24} color="black" />
        ),
      }}
      name="Emprunts"
      component={EmpruntsScreen}
    />
    <Tab.Screen
      name="Account"
      component={AdminAccScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default LibNavigator;
