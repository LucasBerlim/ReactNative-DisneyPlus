import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, ImageBackground } from "react-native";
import { top10 } from '../../mock/top10';
import { LinearGradient } from 'expo-linear-gradient';

type TopDezProps = {
    titulo: String,
}

export const TopDez = ({ titulo }: TopDezProps) => {
    return ( 
        <>
            <View style={styles.titulo}>
                <Text style={styles.tituloTexto}>{titulo}</Text>
            </View>

            <View style={styles.itens}>
                <FlatList
                    data={top10}
                    renderItem={({ item }) => (
                            <View style={styles.item}>
                                <ImageBackground style={styles.itemImagem} source={item.imagem}>
                                    <ImageBackground style={styles.topOverlay} source={item.top1}>   
                                        <LinearGradient
                                        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)', 'rgba(0,0,0,0.92)', 'rgba(0,0,0,0.93)']}
                                        style={styles.gradient}>           
                                            <View style={styles.logoContainer}>
                                                <Image style={styles.logo} source={item.logo}/>
                                                <View style={styles.textoContainer}>
                                                    {item.statusIcone && <Image style={styles.icone} source={item.classificacaoIcone}/>}
                                                    <Text style={styles.texto}>2024</Text>
                                                </View>
                                            </View>
                                        </LinearGradient>  
                                    </ImageBackground>
                                </ImageBackground>
                            </View>           
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.flatListContainer}
                /> 
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    titulo: {
        width: "92%",
    },
    tituloTexto: {
        textAlign: "left",
        color: "white",
        marginVertical: 10,
        fontSize: 16,
        fontWeight: "400",
    },
    flatListContainer: { 
        paddingLeft: 0,
    },
    itens: {
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "row",
        marginLeft: 20,
    },
    item: {
        width: 270,
        height: 410,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 6,
        borderRadius: 6,
        overflow: 'hidden',
        marginBottom: 10,
    },
    itemImagem: {
        width: 270,
        height: 410,
        borderRadius: 10,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    topOverlay: {
        width: 270,
        height: 410,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    gradient: {
        flex: 1,
        justifyContent: 'flex-end',
        borderRadius: 6,
        width: "100%",
    },
    logoContainer: {
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 10,
    },
    logo: {
        width: 200,
        height: 100,
    },
    textoContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    texto: {
        color: "#fff",
        marginLeft: 4,
    },
    icone: {
        width: 20,
        height: 20,
    },
});
