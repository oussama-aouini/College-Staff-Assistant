import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LendBookScreen from "../screens/LendBookScreen";
import ScannerScreen from "../screens/ScannerScreen";

const Stack = createStackNavigator();
const TestNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="LendBookScreen" component={LendBookScreen} />
    <Stack.Screen
      options={{ headerShown: false }}
      name="ScannerScreen"
      component={ScannerScreen}
    />
  </Stack.Navigator>
);

export default TestNavigator;
