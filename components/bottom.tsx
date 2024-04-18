import {Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';

function Bottom1 ({name, color}){ 
    const styles = StyleSheet.create({
        button: {
            backgroundColor: color,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            height: 40,
            marginBottom: 10,

          },



    });



    return(
        <TouchableOpacity style={styles.button}>
            <Text style={styles1.text}>{name}</Text>
        </TouchableOpacity>
    )

    
};



const styles1 = StyleSheet.create({
    text: {
            color: 'white',
            fontSize: 18,
      },
});


export default Bottom1;