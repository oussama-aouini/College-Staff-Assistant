import React from "react";
import { StyleSheet } from "react-native";
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
  title: Yup.string().required().min(1).label("Title"),
  class: Yup.number().required().min(1).max(10000).label("Class"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    label: "data show",
    value: 1,
    backgroundColor: "red",
    icon: "projector-screen",
  },
  {
    label: "remote",
    value: 2,
    backgroundColor: "green",
    icon: "remote-tv-off",
  },
  {
    label: "electricity",
    value: 3,
    backgroundColor: "blue",
    icon: "power-plug-off",
  },
  { label: "others", value: 4, backgroundColor: "orange", icon: "apps" },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          class: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="class"
          placeholder="Class"
          width={120}
        />
        <AppFormPicker
          items={categories}
          name="category"
          numberOfColumns={2}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Issue type"
          width="50%"
        />
        <AppFormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Report" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListingEditScreen;
