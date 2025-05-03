import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ children, onPress, style, ...props }) => (
    <TouchableOpacity
        onPress={onPress}
        style={[styles.button, style]}
        {...props}
    >
        <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#212121",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 74,
        alignItems: "center",
        justifyContent: "center",
        width: 354,
        height: 60,
    },
    text: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default Button;