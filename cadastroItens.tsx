import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import ButtonPlus from '../components/buttom1';
import Objetos from '../components/objetos';
import NavbarCadastro from '../components/navbarCadastroItens';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import TextBoxWithTitle from '../components/caixinha';


export default function CadastroItens() {
  return (
  

    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavbarCadastro text='Cadastro de itens' color="#FF0000" colorText='#FFFFFF' icons={{
        icon1: <Ionicons name="arrow-back" size={30} color="white" />,
        icon2: <MaterialIcons name="add-circle-outline" size={30} color="white" />

      }}/>
      <View style={styles.margin}>
        <TextBoxWithTitle title='teste' text='fasd'/>
        <TextBoxWithTitle title='teste' text='fasd'/>
      </View>
      

    </View>       
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  margin: {
    marginTop: 60,
  }

});

