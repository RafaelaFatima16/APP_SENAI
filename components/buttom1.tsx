import {Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';

function ButtonPlus ({iconAdd}: {iconAdd: {iconButtom: any}}) { 
    const btnAddStyles = StyleSheet.create({
        btnAdd: {
            position: 'absolute',
            bottom: 100,
            right: 20,
        },
    });
    
    return ( 
        <View >
            <TouchableOpacity style={btnAddStyles.btnAdd}>
                {iconAdd.iconButtom}
            </TouchableOpacity>
        </View>
    );
}

export default ButtonPlus;
