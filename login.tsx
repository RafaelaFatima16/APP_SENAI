import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity,  } from 'react-native';
import Input from '../components/input';
import BackgroundColor from '../components/Backgrounds';
import Bottom1 from '../components/bottom';
import Tittle from '../components/tittle';

export default function Login() {
  return (
    <View>
      <StatusBar style="auto" />
      <BackgroundColor name="Login" color="black" />
      <View style={styles.container2}>  
        <Tittle name="Faça Login para Acessar o Sistema!"/>
        <Input name="E-mail:" text='Inisra seu email' security={false}/>
        
        <Input name="Senha:" text='Inisra sua senha:' security={true}/>
        <Bottom1 name="Cadastre-se" color="black"/>
        <TouchableOpacity style={styles.bottomText}>
          <Text style={styles.link}>Cadastre-se</Text>
          
          <Text style={styles.link}>Esqueceu a senha?</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container2: {
        padding: 20,
    
    },
    bottomText: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    link: {
        color: '#011E83',

    },
});