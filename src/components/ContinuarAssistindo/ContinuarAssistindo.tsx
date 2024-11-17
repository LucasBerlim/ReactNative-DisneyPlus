import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, ImageBackground } from "react-native";
import { continuarAssistindo } from '../../mock/continuarAssistindo';
import { ProgressBar } from '../ProgressBar/ProgressBar';

type ContinuarAssistindoProps = {
    titulo: String,
}

export const ContinuarAssistindo = ({ titulo }: ContinuarAssistindoProps) => {
    return ( 
        <>
            <View style={styles.titulo}>
                <Text style={styles.tituloTexto}>{titulo}</Text>
            </View>

            <View style={styles.itens}>
                <FlatList
                    data={continuarAssistindo}
                    renderItem={({ item }) => (
                            <View style={styles.item}>
                                <ImageBackground source={item.imagem} style={styles.itemImagem} imageStyle={styles.imageStyle}>
                                    <Image style={styles.status}/>
                                    <ProgressBar color="#3babff"/>
                                </ImageBackground>
                                <Text style={[styles.horario, styles.texto]}>{item.horario}</Text>
                                <Text style={[styles.tituloItem , styles.texto]}>{item.titulo}</Text>
                                <View style={styles.subTituloContainer}>
                                    <Image style={styles.iconeClassificacao} source={item.classificacao}/>
                                    <Text style={styles.subTitulo}>{item.subTitulo}</Text>
                                </View>
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
        width: "92%"
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
        width: 250,
        height: 200,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginHorizontal: 6,
        marginBottom: 10,
        
    },
    itemImagem: {
        width: 250,
        height: 130,
        borderRadius: 10,
        backgroundColor: "#fff",
        justifyContent: "flex-end",
    },
    imageStyle: {
        borderRadius: 8
    },
    status: {
        width: 80,
        height: 30,
        marginLeft: 10,
        marginBottom: 4,
        borderRadius: 10,
    },
    texto: {
        color: "#fff",
    },
    horario: {
        fontSize: 12,
        marginTop: 4,
    },
    tituloItem: {
        fontWeight: "600",
        fontSize: 14,
        marginVertical: 4
    },
    subTituloContainer: {
        flexDirection: "row",
        alignItems: "flex-start"
    },
    iconeClassificacao: {
        width: 20,
        height: 20,
        marginRight: 6,
    },
    subTitulo: {
        color: "lightgray",
        fontSize: 12,
    },
    
});
