import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput , TouchableOpacity, Image } from 'react-native';
const Rodape = ({}) =>{

    return(
    
        
        <View style={{  backgroundColor: '#012D54', alignItems: 'center', justifyContent: 'center', height: 70, bottom: 0, position: 'fixed', width: 380,textAlign: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row', height: 70, color: 'white' }}>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#012D54', height: 70, width: 90, color: 'white' }}>
              <View>
              <Image style={styles.perfil}
              source={{
                
              uri: 'https://www.flaticon.com/svg/vstatic/svg/1309/1309838.svg?token=exp=1615323434~hmac=da25e2ec434f19e8739e2aae8397a73b',
              }}
              />
                <Text  style={styles.logoText}>
                  Perfil 
              </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#012D54', height: 70, width: 90, color: 'white' }}>
              <View>
              <Image style={styles.carrinho}
              source={{
                
              uri: 'https://www.flaticon.com/svg/vstatic/svg/872/872183.svg?token=exp=1615322593~hmac=4fa5b3de96fe0eb99a4aafc477007dd9',
              }}
              />
                <Text  style={styles.logoText}>
                  Anuncios
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor: '#012D54', height: 70, width: 90, color: 'white'  }}>
              <View>
              <Image style={styles.livro}
              source={{
                
              uri: 'https://www.flaticon.com/svg/vstatic/svg/1613/1613873.svg?token=exp=1615322922~hmac=6747b99556f7c67e8b615ee99876edd5',
              }}
              />
                <Text style={styles.logoText1}>
                  Meus Anúncios
              </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#012D54', height: 70, width: 90, color: 'white' }}>
              <View>
              <Image style={styles.sacola}
              source={{
                
              uri: 'https://www.flaticon.com/svg/vstatic/svg/872/872177.svg?token=exp=1615322994~hmac=0b12812c7d503836086db3fad731e0db',
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
      marginLeft:25,
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