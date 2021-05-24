import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LendBookScreen from "../screens/LendBookScreen";
import QRScannerScreen from "../screens/QRScannerScreen";
import BarScannerScreen from "../screens/BarScannerScreen";

const Stack = createStackNavigator();
const LendNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="LendBookScreen" component={LendBookScreen} />
    <Stack.Screen name="QRScannerScreen" component={QRScannerScreen} />
    <Stack.Screen name="BarScannerScreen" component={BarScannerScreen} />
  </Stack.Navigator>
);

export default LendNavigator;
