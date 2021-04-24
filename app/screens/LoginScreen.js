import React from "react";
import { Image, StyleSheet } from "react-native";
import AppTextInput from "../components/AppTextInput";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import { Formik } from "formik";

function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit }) => (
          <>
            <Image
              resizeMode="contain"
              style={styles.logo}
              source={require("../assets/logo-ensi.png")}
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 105,
    height: 105,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default LoginScreen;
