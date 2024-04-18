import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

type InputProps = {
    text: string;
    name: string;
    security: boolean;
}

function Input({ text, name, security }: InputProps) {
    const [hovered, setHovered] = useState("#F39200");

    return (
        <View>
            <Text>{name}</Text>
            <TextInput
                placeholder={text}
                style={[styles.input, { borderColor: hovered }]}
                onFocus={() => {
                    setHovered("#F39200");
                }}
                onBlur={() => {
                    setHovered("#F5F5F5");
                }}
                secureTextEntry={security}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        marginTop: 39,
    },
    input: {
        padding: 10,
        backgroundColor: '#F5F5F5',
        borderBottomColor: 'gray',
        marginBottom: 27,
        height: 40,
        marginTop: 9,
        borderWidth: 1,
        borderRadius: 10,
    },
});

export default Input;
