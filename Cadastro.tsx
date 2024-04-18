import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import Input from '../components/input';
import BackgroundColor from '../components/Backgrounds';
import Bottom1 from '../components/bottom';

export default function CadastreSe() {
  return (
    <ScrollView>
      <StatusBar style="auto" />
      <BackgroundColor name="Cadastre-se" color="#FF0000" />
      <View style={styles.container2}>  
        <Input name="Nome:" text='Insira seu nome:' security={false}/>
        <Input name="Sobrenome:" text='Insira seu sobrenome:' security={false}/>
        <Input name="E-mail:" text='Insira seu email' security={false}/>
        <Input name="Telefone:" text='Insira seu telefone:' security={false}/>
        <Input name="Senha:" text='Insira sua senha:' security={true}/>
        <Input name="Confirmar senha:" text='Confirme sua senha:' security={true}/>

        <Bottom1 name="Cadastre-se" color="black"/>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container2: {
    padding: 20,

  },
});
