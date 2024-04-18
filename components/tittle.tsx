import { View, Text, StyleSheet } from "react-native";

type TittleProps = {
    name: string;
}

function Tittle({name}: TittleProps){
    return(
        <View>
            <Text style={styles.text}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 43,
        marginBottom: 40,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})

export default Tittle;