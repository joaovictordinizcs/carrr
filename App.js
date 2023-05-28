import React, { Component } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import Menu from './src/componentes/Menu'
import Veiculos from './src/componentes/Veiculos'
import carros from './src/Model/carros'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state ={
      preco: 0.0,
      ano: 0,
      status:'disponivel',
      lista: [],
    }
  }



// CONTROLLER mvc remenber

Inserir = (fabricante, preco, ano, status) => {
  const NovoCarros = new carros(fabricante, preco, ano, status)
  this.state.lista.push(NovoCarros)
  this.forceUpdate()

}
Remover = () => {
 this.state.lista.pop()
 this.forceUpdate()
}





  render() {
    return (
      <ScrollView>
        <View style={estilos.menu}>
          <Menu />
          <View style={estilos.menu}>
            <Text style={estilos.TextEstilo}>Cadastro De Veiculos</Text>
            <TextInput
              onChangeText={(valor) => { this.setState({ fabricante: valor }) }}
              placeholder='digite o fabricante e modelo'
              style={estilos.EntradaTexto}
            />
            <TextInput
              onChangeText={(valor) => { this.setState({ preco: valor }) }}
              placeholder='digite o preco e modelo'
              style={estilos.EntradaTexto}
            />
            <TextInput
              onChangeText={(valor) => { this.setState({ ano: valor }) }}
              placeholder='digite o ano e modelo'
              style={estilos.EntradaTexto}
            />
            <TouchableOpacity 
             onPress={() => this.Inserir(this.state.fabricante, this.state.preco, this.state.ano, this.state.status)}
            style={estilos.BotaoSalvar}>
              <Text style= {{fontWeight: 'bold', fontSize: 20}}>SALVAR</Text>
            </TouchableOpacity>
          </View>
          <Text style={estilos.TextEstilo}>LISTA de Veiculos</Text>
          
          {/*
          <Veiculos
            fabricante="carros de corridas"
            preco={50000}
            ano={2010}
          />
        */}


        {
          this.state.lista.map(l => {
            <Veiculos>
              fabricante={l.fabricante}
              preco={l.preco}
              status={l.status}
              ano:{l.ano}
              Remover={this.Remover}

            </Veiculos>
          }

          )
        }

        </View>
      </ScrollView>
    )
  }
}

const estilos = StyleSheet.create({
  imagem: {
    width: 500,
    height: 350,
    margin: 10,
  },

  menu: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: 'lightblue'
  },

  TextEstilo: {
    color: "black",
    fontSize: 35,
    fontWeight: 'bold',
    margin: 15,
  },

  EntradaTexto: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 16,
    width: 300,
    height: 40,
    margin: 10,
  },

  BotaoSalvar: {
    backgroundColor: 'lightgreen',
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
});