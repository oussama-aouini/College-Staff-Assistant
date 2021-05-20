import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import TestStack from "./app/navigation/TestStack";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <TestStack />
    </NavigationContainer>
  );
}
