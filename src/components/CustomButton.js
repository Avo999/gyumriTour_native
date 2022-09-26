import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from "react-native";

function CustomButton({label, onPress}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}>
            <Text
                style={styles.button_text}>
                {label}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'orange',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
    },
    button_text: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        color: '#fff',
    }
})

export default CustomButton;