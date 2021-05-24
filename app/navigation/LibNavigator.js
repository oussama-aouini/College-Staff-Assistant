import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import LendNavigator from "./LendNavigator";
import AddBookScreen from "../screens/AddBookScreen";
import EmpruntsScreen from "../screens/EmpruntsScreen";

const Tab = createBottomTabNavigator();
const LibNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      options={{
        tabBarIcon: () => <AntDesign name="qrcode" size={24} color="black" />,
      }}
      name="LendNavigator"
      component={LendNavigator}
    />
    <Tab.Screen
      options={{
        tabBarIcon: () => (
          <AntDesign name="pluscircleo" size={24} color="black" />
        ),
      }}
      name="AddBookScreen"
      component={AddBookScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: () => (
          <FontAwesome name="history" size={24} color="black" />
        ),
      }}
      name="EmpruntsScreen"
      component={EmpruntsScreen}
    />
  </Tab.Navigator>
);

export default LibNavigator;
