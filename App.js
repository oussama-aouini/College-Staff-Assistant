import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigator from "./app/navigation/AppNavigator";
import LibNavigator from "./app/navigation/LibNavigator";
import TechNavigator from "./app/navigation/TechNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";

import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAodJ0YtuS2l05H68UbPRQ-9M6xhveJ8ck",
  authDomain: "smart-life-at-ensi.firebaseapp.com",
  projectId: "smart-life-at-ensi",
  storageBucket: "smart-life-at-ensi.appspot.com",
  messagingSenderId: "9545679012",
  appId: "1:9545679012:web:02ac33d548609bcf18e631",
  measurementId: "G-GLL3QP0D4Q",
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return isAuthenticated ? (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
