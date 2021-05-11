import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountScreen from "../screens/AccountScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import LibraryScreen from "../screens/LibraryScreen";
import MapScreen from "../screens/MapScreen";

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Library"
      component={LibraryScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="book" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Map"
      component={MapScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="map" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Help"
      component={ListingEditScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="report-problem" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
