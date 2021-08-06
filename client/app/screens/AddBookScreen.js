import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button, Image } from "react-native";
import * as Yup from "yup";
import * as ImagePicker from "expo-image-picker";

import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";
import booksApi from "../api/books";
import { result } from "lodash";
import ImageInput from "../components/ImageInput";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(6).label("Title"),
  author: Yup.string().required().min(6).label("Author"),
  number: Yup.number().required().min(1).max(99).label("Number"),
});

function AddBookScreen() {
  const [imageUri, setImageUri] = useState();
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (book) => {
    setUploadVisible(true);
    const result = await booksApi.addBook(book, (progress) =>
      setProgress(progress)
    );
    setUploadVisible(false);

    if (!result.ok) return alert("Could not add the book.");
    alert("Success");
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen progress={progress} visible={uploadVisible} />
      <AppForm
        initialValues={{
          title: "",
          author: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={8} name="title" placeholder="Title" />
        <AppFormField maxLength={8} name="author" placeholder="Author" />
        <ImageInput
          imageUri={imageUri}
          onChangeImage={(uri) => setImageUri(uri)}
        />
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
