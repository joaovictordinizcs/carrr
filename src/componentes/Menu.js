import React, { Component } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default class veiculos extends Component {
  render() {
    return (
    <View style={estilos.menu}>
      <Image style={estilos.imagem} source={require('../imagens/carro1.jpg')}></Image>
      <Text style={estilos.TextEstilo}>REVENDA ESPORTIVOS!</Text>
   
    </View>
    )
   }
  }
 
  const estilos = StyleSheet.create({
    imagem:{
      width:500,
      height:240,
    },

    menu:{
      alignItems:'center',
      justifyContent:'center',
      margin: 10

    },

    TextEstilo: {
      color: "blue",
      fontSize: 43,
      fontWeight: 'bold',
      margin: 15,

    },

  })