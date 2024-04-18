import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import NavbarCadastro from '../components/navbarCadastroItens';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Footer from '../components/footer';
import TextBoxWithTitle from '../components/caixinha';

export default function Editar() {
  return (
  

    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavbarCadastro text='Editar' color="#FF0000" colorText='#FFFFFF' icons={{
        icon1: <Ionicons name="arrow-back" size={30} color="white" />,
        icon2: <AntDesign name="checkcircle" size={30} color="white" />

      }}/>
      <View style={styles.margin}>
        <TextBoxWithTitle title='Nº Inventário *' text='' security={false}/>
        <TextBoxWithTitle title='Descrição *' text='' security={false}/>
        <TextBoxWithTitle title='Local *' text='' security={false}/>
        <TextBoxWithTitle title='Responsável *' text='' security={false}/>
        <TextBoxWithTitle title='Data de registro *' text='' security={false}/>
      </View>
      <Footer color='#FFFFFF' iconNav={{
        icon1nav: <FontAwesome name="list-ol" size={30} color="#595959" />,
        icon2nav: <MaterialIcons name="flip-camera-ios" size={30} color="#595959" />
      }}/>

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

