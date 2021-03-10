import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Rodape from '../LEVO/components/rodape';
import Menu from '../LEVO/components/menu';
import Login from '../LEVO/pages/Login';
import Cadastro from '../LEVO/pages/Cadastro';


export default function App() {
  return (
    <View style={styles.container}>
      <Cadastro/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
