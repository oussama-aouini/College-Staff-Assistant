import React, { useState } from "react";
import { View, StyleSheet, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import Screen from "../components/Screen";

function LendBookScreen({ navigation, data }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <Screen style={styles.container}>
      <AppButton
        title="Scan QRCode"
        onPress={() => navigation.navigate("QRScannerScreen")}
      />
      <AppButton
        title="Scan BarCode"
        onPress={() => navigation.navigate("BarScannerScreen")}
      />
      <View>
        <View>
          <AppButton onPress={showDatepicker} title="Select return date" />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      <View style={styles.submit}>
        <AppButton title="submit" onPress={() => console.log("nothing")} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: "center",
  },
  submit: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
  },
});

export default LendBookScreen;
