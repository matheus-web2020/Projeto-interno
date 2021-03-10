import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';


export default class Login extends Component {
    render(){
        return(  
            <View>
           <Menu/>
           <TextInput  placeholder = "Digite seu Email"/>

           <TextInput secureTextEntry={true} placeholder = "Digite sua senha"/>
           <Rodape/>
            </View>
        )
    }
    
}