import React from "react";
import { StyleSheet, TextInput } from "react-native";

const TextInputComponent = ({
  value,
  placeholder,
  secureTextEntry = false,
  style = {},
  onChangeText,
  ...props
}) => (
  <TextInput
    value={value}
    style={[styles.input, style]}
    placeholder={placeholder}
    placeholderTextColor="#212121"
    secureTextEntry={secureTextEntry}
    onChangeText={onChangeText}
    {...props}
  />
);

const styles = StyleSheet.create({
  input: {
    width: 354,
    height: 60,
    borderRadius: 74,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 16,
    color: "#212121",
    borderWidth: 1,
    borderColor: "#ffffff", // if you really want no visible border
  },
});

export default TextInputComponent;
