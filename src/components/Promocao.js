import React, {useState} from "react";
import { View, Text, ImageBackground, Pressable } from "react-native";
import {setStringAsync} from "expo-clipboard";
import styles from "../styles/Promocao";

export default function Promocao(props){

  const [estadoCodigo, mudarEstadoCodigo] = useState(false)

  async function AlterarEstado(){
    mudarEstadoCodigo(!estadoCodigo)
    await setStringAsync(props.codigo)
  }

  return <Pressable onPress={AlterarEstado}>
    <View style={styles.desconto}>
      <Text style={styles.descontoTitulo}>{props.titulo}</Text>
      <ImageBackground source={props.imagem} style={styles.descontoImagem}>
        <Text style={styles.descontoDados}>{props.promocao}%</Text>
      </ImageBackground>

      {estadoCodigo && <Text style={styles.descontoCodigo}>{props.codigo}</Text>}

    </View>
  </Pressable>
}