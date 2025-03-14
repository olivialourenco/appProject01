 import React from "react";
import {StatusBar, StyleSheet, ScrollView, Image} from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";

import Texto from "../componentes/Texto";

export default function SobreNos(){

    //Indica o video e coloca ele em loop
    const player = useVideoPlayer('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', 
    player => {
        player.loop = true,
        player.play()
    })

    return <ScrollView style={estilos.fundo}>
        <StatusBar />
        <Image source={require('../../assets/logo.png')} style={estilos.logo} resizeMode="contain"/>
        <Texto style={estilos.texto_sobre}>
            Hello 
            {'\n'}{'\n'}
            world!
            {'\n'}{'\n'}
            world!
            {'\n'}{'\n'}
            world!
            {'\n'}{'\n'}
            world!
        </Texto>
        <Image source={require('../../assets/escolha_fitas.jpeg')} style={estilos.img_sobre}/>
        <Texto style={estilos.texto_sobre}> DEpois disso ela é </Texto>
        <VideoView player={player} style={estilos.video} allowsFullscreen allowsPictureInPicture/>
    </ScrollView>
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: "purple",
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    logo: {
        width: 300,
        height: 300,
        alignSelf: "center",
    },
    texto_sobre:{
        color: "white",
    },
    img_sobre: {
        height: 550,
        alignSelf: "center",
        width: 350,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 15,
    },
    video:{
        width: 350,
        height: 275,
        alignSelf: "center",
    }
})

