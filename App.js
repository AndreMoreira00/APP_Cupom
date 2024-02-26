import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar } from 'react-native';
import Promocao from './src/components/Promocao';

export default function App() {
  return (
    <ScrollView>
      <StatusBar 
      barStyle={"dark-content"}
      backgroundColor={"#fff"}/>
      <View>
        <Promocao
        titulo="Promocao em Tênis"
        imagem={require("./src/datas/tenis.avif")}
        promocao={8}
        codigo="TENISC"
        />
        <Promocao
        titulo="Promocao para Eletronicos"
        imagem={require("./src/datas/vent.jpg")}
        promocao={5}
        codigo="ELETRO5"
        />
        <Promocao
        titulo="Deconto cremes"
        imagem= {require("./src/datas/creme.webp")}
        promocao={10}
        codigo="PELECUIDAR"
        />
      </View>
    </ScrollView>
  );
}

