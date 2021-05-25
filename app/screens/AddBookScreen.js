import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(6).label("Title"),
  author: Yup.string().required().min(6).label("Author"),
  number: Yup.number().required().min(1).max(99).label("Number"),
});

function AddBookScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          author: "",
          number: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={8} name="title" placeholder="Title" />
        <AppFormField maxLength={8} name="author" placeholder="Author" />
        <View style={styles.number}>
          <AppFormField
            keyboardType="numeric"
            maxLength={2}
            name="number"
            placeholder="Number"
            width={130}
          />
        </View>
        <View style={styles.button}>
          <SubmitButton title="add" />
        </View>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 70,
  },
  button: {
    padding: 30,
  },
});

export default AddBookScreen;
