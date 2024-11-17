import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, ImageBackground } from "react-native";
import { programas } from '../../mock/programas';
import { ProgressBar } from '../ProgressBar/ProgressBar';

type ProgramaProps = {
    titulo: String,
}

export const Programa = ({ titulo }: ProgramaProps) => {
    return ( 
        <>
            <View style={styles.titulo}>
                <Text style={styles.tituloTexto}>{titulo}</Text>
            </View>

            <View style={styles.itens}>
                <FlatList
                    data={programas}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <ImageBackground source={item.imagem} style={styles.itemImagem} imageStyle={styles.imageStyle}>
                                <Image style={styles.status} source={item.status}/>
                                {item.verificaLive && <ProgressBar color='#ff1a5f'/>}
                            </ImageBackground>
                            <Text style={[styles.horario, styles.texto]}>{item.horario}</Text>
                            <Text style={[styles.tituloItem , styles.texto]}>{item.titulo}</Text>
                            <Text style={styles.subTitulo}>{item.subTitulo}</Text>
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
        marginLeft: 20
        
    },
    item: {
        width: 200,
        height: 200,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginHorizontal: 6,
        
    },
    itemImagem: {
        width: 200,
        height: 120,
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
    subTitulo: {
        color: "lightgray",
        fontSize: 12,
        
    },

});
