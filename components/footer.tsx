import {Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';


type FooterProps = {
    color: string;
    iconNav: {
        icon1nav: any;
        icon2nav: any;
    };
}

function Footer ({color, iconNav}: FooterProps) { 
    const styles = StyleSheet.create({
        container: {    
            flexDirection: 'row',
            justifyContent: 'center',
            padding: 20,
            backgroundColor: color,
            width: '100%',
            position: 'absolute',
            bottom: 0,
            gap: 24,
            borderTopWidth: 0.2, // Adiciona uma borda superior
        },
    });
    
    return (
    
    <View style={styles.container}>
        <TouchableOpacity>
            {iconNav.icon1nav}
        </TouchableOpacity>
        <TouchableOpacity>
            {iconNav.icon2nav} 
        </TouchableOpacity>
    </View>
    );
};


export default Footer;
