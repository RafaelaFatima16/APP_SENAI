import React from 'react';
import NavbarCadastro from '../components/navbarCadastroItens';
import { Ionicons } from '@expo/vector-icons';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';

export default function Scanner1() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavbarCadastro text='Scanner' color="#FF0000" colorText='#FFFFFF' icons={{
        icon1: <Ionicons name="arrow-back" size={30} color="white" />,
        icon2: <Ionicons name="reload-sharp" size={30} color="white" />
      }}/>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/qrcode.png')} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {

    width: 250,
    height: 250,
    marginTop: 190,
  }
});
