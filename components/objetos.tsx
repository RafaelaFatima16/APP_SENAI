import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
type ObjetosProps = {
    color: string;
    number: string;
    text: string;
}


function Objetos ({ color, number, text }: ObjetosProps) { 
    const styles = StyleSheet.create({
        container: {
            height: 66,
            flexDirection: 'column', // Alterado para column
            zIndex: 0,
            backgroundColor: color,
            borderColor: '#F5F5F5',
            borderBottomWidth: 1,
        },
        containerNumber: {
            marginTop: 10,
            marginLeft: 20,
            paddingBottom: 10,
            fontSize: 16, // Ajuste o tamanho conforme necessário
            fontWeight: 'bold',
        },
        containerText: {
            fontSize: 14, // Ajuste o tamanho conforme necessário
            paddingBottom: 10,
            marginLeft: 20,
        }
    });
    
    return (
    
    <View style={styles.container}>
        <Text style={styles.containerNumber}>{number}</Text>
        <Text style={styles.containerText}>{text} SENAI</Text>
    </View>
    );
};


export default Objetos;

