import {Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';

type NavbarCadastroProps = {
    color: string;
    colorText: string;
    icons: {
        icon1: any;
        icon2: any;
    };
    text: string;
}

function NavbarCadastro ({color, colorText,icons,text}: NavbarCadastroProps) { 
    const styles = StyleSheet.create({
        container: {
            paddingTop: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            zIndex: 1,
            backgroundColor: color,
            borderColor: '#595959',
            borderBottomWidth: 1,
            color: colorText,
            
        },
        Text: {
            color: colorText,
            marginTop: 5,
            fontSize: 14,
        }
    });
    
    return (
    
    <View style={styles.container}>
        <TouchableOpacity>
            {icons.icon1}
        </TouchableOpacity>
        <Text style={styles.Text}>{text}</Text>
        <TouchableOpacity>
           {icons.icon2} 
        </TouchableOpacity>
    </View>
    );
};


export default NavbarCadastro;

