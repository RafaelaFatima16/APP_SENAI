import { View, Text, Image, StyleSheet } from "react-native";

type BackgroundColorProps = {
    name: string,
    color: string
}

function BackgroundColor ({name, color}: BackgroundColorProps){ 
    const styles = StyleSheet.create({
        container: {
            backgroundColor: color,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            height: 200,
            borderBottomStartRadius: 8,
            borderBottomEndRadius: 8,
        },
    });
    
    return (
        <View style={styles.container}>
            <Image style={styles1.image} source={require('../assets/Logo.png')} />
            <Text style={styles1.text}>{name}</Text>


            
        </View>
        
    );
}

const styles1= StyleSheet.create({
        image: {
            width: 200,
            height: 51,
            margin: 0,
            

      },
      text: {
        color: '#FFFFFF',
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,       


        textAlign: 'center',
      },
      
});

export default BackgroundColor; 