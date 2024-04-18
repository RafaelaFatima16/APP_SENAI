import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import Input from '../components/input';
import BackgroundColor from '../components/Backgrounds';
import Bottom1 from '../components/bottom';
import Tittle from '../components/tittle';

export default function RecuperarSenha() {
  return (
    <View>
      <StatusBar style="auto" />
      <BackgroundColor name="Recuperação de senha" color="#011E83" />
      <View style={styles.container2}>  
        <Tittle name="Insira seu e-mail para recuperar 
a senha!"/>
        <Input name="Email:" text='Inisra seu email:' security={false}/>
        <Bottom1 name="Cadastre-se" color="black"/>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container2: {
        padding: 20,
    
    },


});