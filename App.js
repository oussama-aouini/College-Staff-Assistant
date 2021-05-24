import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import TestStack from "./app/navigation/TestStack";
import AppNavigator from "./app/navigation/AppNavigator";
import LibNavigator from "./app/navigation/LibNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <LibNavigator />
    </NavigationContainer>
  );
}
