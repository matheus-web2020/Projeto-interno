import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';


export default class Cadastro extends Component {

   clicar =() => {
       Alert.alert('Você entrou!!')
   }

    render(){
        return(  
            <View>
                <Menu/>
                <Text style={{ color : '#012D54', fontWeight : 'bold', marginLeft : 25, marginTop : -10, marginBottom : 20}}>LOJA ESPECIALIZADA EM VENDAS ONLINE</Text>
                <View style={styles.fundo}>
                   
                  
                    <View style={styles.container}>

                        <Text style={{fontSize : 20, marginLeft : -220,}}>Nome</Text>

                        <TextInput style={styles.input} placeholder = "Digite seu Nome"/>


                        <Text style={{fontSize : 20, marginLeft : -220, marginTop : 10}}>Email</Text>

                        <TextInput style={styles.input} placeholder = "Digite seu Email"/>

                        <Text style={{fontSize : 20, marginLeft : -210, marginTop : 10}}>Senha</Text>

                        <TextInput style={styles.input} secureTextEntry={true} placeholder = "Digite sua senha"/>

                    </View>
                    

                         <TouchableOpacity style={styles.botao} onPress={ () =>{this.clicar()}}>
                         <Text style={styles.btnEntrar,{color : 'white'}}>Logar</Text>
                         </TouchableOpacity>
           
                         <Rodape/>
            </View>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({

   container:{
       flex:1,
       justifyContent:'center',
       alignItems: 'center',
     
       borderRadius : 4,
       height : 200
       
   },
   input:{
       marginTop : 10,
       padding : 10,
       width : 270,
       backgroundColor : 'white',
       fontSize : 16,
       fontWeight : 'bold',
       borderRadius : 6
   },
   botao:{
       width : 200,
       height : 42,
       borderRadius : 6,
       marginTop : 20,
       backgroundColor : '#012D54',
       alignItems : 'center',
       justifyContent : 'center',
       marginLeft:60,
       marginBottom:40,
    
   },
   fundo:{
    backgroundColor: '#79B4EC',
    borderRadius: 6,
    height:400,
    width:320,

   }

})