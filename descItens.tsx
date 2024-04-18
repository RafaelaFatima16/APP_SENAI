import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Objetos2 from '../components/objeto2';
import Footer from '../components/footer';
import NavbarCadastro from '../components/navbarCadastroItens';
import ButtonPlus from '../components/buttom1'; // Importe o ButtonPlus aqui
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function DescItens() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavbarCadastro
        text='Descrição do item'
        color="#FF0000"
        colorText='#FFFFFF'
        icons={{
          icon1: <Ionicons name="arrow-back" size={30} color="white" />,
          icon2: <Ionicons name="reload-sharp" size={30} color="white" />
        }}
      />
      <ScrollView style={styles.margin}>
      <Objetos2 text="957689" color="#FFFFFF" tittle='Nº do Inventário:'/>
      <Objetos2 text="CADEIRA GIRATÓRIOA" color="#FFFFFF" tittle='Descrição:'/>
      <Objetos2 text="SALA C13" color="#FFFFFF" tittle='Local:'/>
      <Objetos2 text="CARLOS" color="#FFFFFF" tittle='Responsável:'/>
      <Objetos2 text="05/03/2024" color="#FFFFFF" tittle='Data de Registro:'/>


     

      </ScrollView>
      <Footer color='#FFFFFF' iconNav={{
        icon1nav: <FontAwesome name="list-ol" size={30} color="#595959" />,
        icon2nav: <MaterialIcons name="flip-camera-ios" size={30} color="#595959" />
      }}/>
      <ButtonPlus iconAdd={{ // Mova o ButtonPlus para dentro do View principal
        iconButtom: <MaterialCommunityIcons name="pencil-circle" size={50} color="red" />
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
