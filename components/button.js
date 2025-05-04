import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ children, onPress, style, ...props }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, style]}
    activeOpacity={0.7}
    {...props}
  >
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#212121",
    borderRadius: 74,
    width: 354,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Button;
