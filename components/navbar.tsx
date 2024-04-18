import {Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function NavBar ({color}) { 
    const styles = StyleSheet.create({
        container: {
            marginTop: 35,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            zIndex: 1,
            backgroundColor: color,
            borderColor: '#595959',
            borderBottomWidth: 1,
            
        },
    });
    
    return (
    
    <View style={styles.container}>
        <TouchableOpacity>
            <Ionicons name="menu-sharp" size={24} color="black" />
        </TouchableOpacity>
        <Text>Lista</Text>
        <TouchableOpacity>
            <Fontisto name="zoom" size={24} color="black" />
        </TouchableOpacity>
    </View>
    );
};


export default NavBar;

