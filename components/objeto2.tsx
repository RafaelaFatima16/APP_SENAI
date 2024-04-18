import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
type ObjetosProps = {
    color: string;
    tittle: string;
    text: string;
}


function Objetos2 ({ color, tittle, text }: ObjetosProps) { 
    const styles = StyleSheet.create({
        container: {
            height: 66,
            flexDirection: 'column', // Alterado para column
            zIndex: 0,
            backgroundColor: color,
            borderColor: '#F5F5F5',
            

        },
        containerNumber: {
            marginTop: 10,
            marginLeft: 20,
            paddingBottom: 10,
            fontSize: 11, // Ajuste o tamanho conforme necessário
            fontWeight: 'bold',
        },
        containerText: {
            fontSize: 16, // Ajuste o tamanho conforme necessário
            paddingBottom: 10,
            marginLeft: 20,
        }
    });
    
    return (
    
    <View style={styles.container}>
        <Text style={styles.containerNumber}>{tittle}</Text>
        <Text style={styles.containerText}>{text}</Text>
    </View>
    );
};


export default Objetos2;

