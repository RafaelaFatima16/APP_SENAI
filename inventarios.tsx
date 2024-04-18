import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Footer from '../components/footer';
import ButtonPlus from '../components/buttom1';
import Objetos from '../components/objetos';
import NavbarCadastro from '../components/navbarCadastroItens';
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Inventarios() {
  return (
  

    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavbarCadastro color="#FFFFFF" colorText='black' text='Lista'icons={{
        icon1: <Ionicons name="menu-sharp" size={24} color="black" />,
        icon2: <Fontisto name="zoom" size={24} color="black" />
      }}/>
      <ScrollView>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
        <Objetos text="CADEIRA" color="#FFFFFF" number='956389'/>
      </ScrollView>
      <Footer color='#FF0000' iconNav={{
        icon1nav: <FontAwesome name="list-ol" size={30} color="white" />,
        icon2nav: <MaterialIcons name="flip-camera-ios" size={30} color="white" />
      }}/>
      <ButtonPlus iconAdd={{
        iconButtom: <Entypo name="circle-with-plus" size={50} color="red" />
      }}/>
    </View>       
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
