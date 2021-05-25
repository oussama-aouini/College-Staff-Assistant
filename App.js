import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import TestStack from "./app/navigation/TestStack";
import AppNavigator from "./app/navigation/AppNavigator";
import LibNavigator from "./app/navigation/LibNavigator";
import AddBookScreen from "./app/screens/AddBookScreen";
import EmpruntsScreen from "./app/screens/EmpruntsScreen";
import ProblemsScreen from "./app/screens/ProblemsScreen";

export default function App() {
  return (
    <NavigationContainer>
      <LibNavigator />
    </NavigationContainer>
  );
}
