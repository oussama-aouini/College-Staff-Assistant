import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ProblemsScreen from "../screens/ProblemsScreen";
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
      name="Issues"
      component={ProblemsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="report-problem" size={size} color={color} />
        ),
      }}
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
