import React from "react";
import { StyleSheet, TextInput } from "react-native";


const TextInputComponent = ({ placeholder, secureTextEntry = false, style = {}, onChangeText ,...props }) => {
    return (
        <TextInput
            style={[styles.input, style]}
            placeholder={placeholder}
            placeholderTextColor="#212121"
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            {...props}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: 354,
        height: 60,
        borderColor: "#212121",
        borderWidth: 1,
        borderRadius: 74,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: "#fff",
        textAlign: "center",
        fontSize: 16,
        color: "#212121",
        borderColor: "#ffffff",
    },
});

export default TextInputComponent;