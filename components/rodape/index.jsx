import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput , TouchableOpacity, Image } from 'react-native';
const Rodape = ({}) =>{

    return(
    
        
        <View style={{  backgroundColor: '#012D54', alignItems: 'center', justifyContent: 'center', height: 70, bottom: 0, position: 'fixed', width: 145,textAlign: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row', height: 70, color: 'white' }}>
            <TouchableOpacity src="/perfil" style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#012D54', height: 70, width: 90, color: 'white' }}>
              <View>
              <Image style={styles.perfil}
              source={{
                
              uri: 'https://www.flaticon.com/svg/vstatic/svg/1736/1736514.svg?token=exp=1615400043~hmac=ef912df5253395d20cadd3a439af9078',
              }}
              />
                <Text  style={styles.logoText}>
                  Perfil 
              </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity src="/anuncios" style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#012D54', height: 70, width: 90, color: 'white' }}>
              <View>
              <Image style={styles.carrinho}
              source={{
                
              uri: 'https://www.flaticon.com/svg/vstatic/svg/872/872183.svg?token=exp=1615399836~hmac=27c73b68174e357e97b5ead8bae085d5',
              }}
              />
                <Text  style={styles.logoText}>
                  Anuncios
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity src="/meusAnuncios" style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#012D54', height: 90, width: 90, color: 'white'  }}>
              <View>
              <Image style={styles.livro}
              source={{
                
              uri: 'https://www.flaticon.com/svg/vstatic/svg/1613/1613873.svg?token=exp=1615399814~hmac=efefdccc7529b76bc1fde69ac3de119d',
              }}
              />
                <Text style={styles.logoText1}>
                  Meus Anúncios
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity src="/produtos" style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#012D54', height: 70, width: 90, color: 'white' }}>
              <View>
              <Image style={styles.sacola}
              source={{
                
              uri: 'https://www.flaticon.com/svg/vstatic/svg/872/872177.svg?token=exp=1615399774~hmac=bff9dc2520ba501dc4c1f08880412092',
              }}
              />
                <Text style={styles.logoText}>
                  Produtos
                </Text>
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
    carrinho: {
      width: 40,
      height:40,
      marginLeft:10,
    },
    livro: {
      width: 40,
      height:40,
      marginLeft:18,
    },
    sacola: {
      width: 40,
      height:40,
      marginLeft:10,
    },
    perfil: {
      width: 40,
      height:40,
      marginLeft:10,
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
        width: 32,
        height: 32,
        marginBottom: 4,
        justifyContent: 'center',
        color: 'white',
        marginLeft: 10
    },
    logoText: {
        
        fontWeight: "bold",
        fontStyle: "normal",
        color: 'white'
        
        
    },
    logoText1: {
        
      fontWeight: "bold",
      fontStyle: "normal",
      color: 'white',
      marginLeft:5,
      height: 70,
      width : 70
      
      
  }
   
  });

export default Rodape;