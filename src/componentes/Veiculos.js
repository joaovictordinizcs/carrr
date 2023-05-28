import React, { Component } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

 
export default class Menu extends Component {
    
    constructor(props) {
        super(props)
        this.state={
            status:'dispovivel',
            textoBotaoReservar:'reservar'

        }
    }

    reservar(){
 
      if(this.state.status == 'disponivel') {

        this.setState({                        // atualiza os states e chama o render()
            status:'reservado',
            textoBotaoReservar:'liberar'
        })
  }   else{
    this.setState({                        // atualiza os states e chama o render()
      status:'disponivel',
      textoBotaoReservar:'reservar'
  })
        }
  }
    manutencao(){
        this.setState({                     
            status:'em manutencao',
            textoBotaoReservar:'liberar'
        })
        
    }

    remover(){
      this.setState({                     
        status:'item removido'
    })

    }


  render() {
    return (
    
    <View style={estilos.menu}> 
        <View style={estilos.menuInterno}>
        <Text style={[estilos.TextEstilo, { color: 'red' }]}>FAB/MARCA: {this.props.fabricante}</Text>
        <Text style={[estilos.TextEstilo, { color: 'black' }]}>PREÇO: {this.props.preco}</Text>
        <Text style={[estilos.TextEstilo, { color: 'black' }]}>ANO: {this.props.ano}</Text>
        <Text style={[estilos.TextEstilo, { color: 'black' }]}>STATUS: {this.state.status}</Text>
       </View>

              <View style={{flexDirection:'row'}}>
               <TouchableOpacity style={estilos.botao} onPress={() => this.reservar()}>
                 <Text style={estilos.textobotao}>
                    {this.state.textoBotaoReservar}
                 </Text>
               </TouchableOpacity>

               <TouchableOpacity style={estilos.botao} onPress={() => this.manutencao()}>
                 <Text style={estilos.textobotao}>
                    MANUTENÇAO
                 </Text>
               </TouchableOpacity>

               <TouchableOpacity style={estilos.botao} onPress={() => this.props.remover()}>
                 <Text style={estilos.textobotao}>
                    REMOVER
                 </Text>
               </TouchableOpacity>
             </View>

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
      color: "red",
      fontSize: 23,
      fontWeight: 'bold',
      margin: 15,
      alignItems: 'center',
      justifyContent: 'center',

    },

    menuInterno: {
     justifyContent:'flex-start',
     textAlign: 'center'
    },

    textobotao: {
        color: "black",
        fontSize: 23,
        fontWeight: 'bold',
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
  
      },

      botao:{
         alignItems: 'center',
         justifyContent: 'center',
         backgroundColor: 'white',
         borderRadius: 20,
         margin: 10,
      },
    
      
  })  