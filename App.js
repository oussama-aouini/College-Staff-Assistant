import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import AppLoading from "expo-app-loading";

import AuthContext from "./app/auth/context";
import AppNavigator from "./app/navigation/AppNavigator";
import LibNavigator from "./app/navigation/LibNavigator";
import TechNavigator from "./app/navigation/TechNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import authStorage from "./app/auth/storage";
import LibraryScreen from "./app/screens/LibraryScreen";
import AccountScreen from "./app/screens/AccountScreen";
import AddBookScreen from "./app/screens/AddBookScreen";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  };

  // if (!isReady)
  //   return (
  //     <AppLoading startAsync={restoreToken} onFinish={() => setIsReady(true)} />
  //   );

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {user ? <LibNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
