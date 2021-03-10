import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput , TouchableOpacity, Image } from 'react-native';


const Menu = ({navigation}) =>{

    return(
    
        
        <View style={{  backgroundColor: '#012D54', alignItems: 'center', justifyContent: 'center', height: 60, top: 0, position: 'fixed', width: 145 }}>
          <View style={{ flex: 1, flexDirection: 'row', height: 100, }}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#012D54', height: 60, width: 360, flexDirection: 'row', justifyContent: 'space-between'  }}>
              <View>
               
              
          
              </View>
              
            </TouchableOpacity>
            </View>
            </View>
           
           
           
        
    )

    
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9200D6',
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    input : {
        width: '80%',
        height: 40, 
        borderColor: 'white', 
        borderWidth: 1,
        borderRadius: 6,
        padding: 5,
        backgroundColor: '#FFF',
        marginTop:30,
        color: '#9200D6',
        fontSize: 16
    },
    nome : {
        fontSize: 25,
        color: '#FFF',
        marginBottom: 30,
        textTransform: "uppercase"
    },
    button : {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 6,
        width: '80%',
        marginTop:30
    },
    textbuttom : {
        color: '#9200D6',
        textTransform: "uppercase",
        fontSize: 'Titillium Web',
        fontSize: 15,
        textAlign: "center",
        fontWeight: "bold",
    },
    logo : {
        width: 40,
        height: 40,
        marginTop: 10,
        marginRight: 10,
        color: '#FFFFF'
        
    },
    logoText: {
        fontSize: 45,
        color: '#FFF',
        marginBottom: 30,
        fontWeight: "bold",
        fontStyle: "normal",  
        color: 'white',
        Lineheight : 54,
        Align :'Center',
        marginLeft:50,
    },
    edux: {
        fontSize:40,
        marginLeft:50,
        fontStyle:'Titillium Web',
        Weight: 900,
        Style: 'normal',
        Size :36,
        Lineheight : 54,
        Align :'Center',
        color: 'white'
    }
   
  });

export default Menu;