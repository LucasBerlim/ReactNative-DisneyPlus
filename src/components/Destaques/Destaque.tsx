import React from 'react';
import { StyleSheet, View, Text, Image, FlatList } from "react-native";
import { destaques } from '../../mock/destaques';

type DestaqueProps = {
    titulo: String,
}

export const Destaques = ({ titulo }: DestaqueProps) => {
    return ( 
        <>
            <View style={styles.titulo}>
                <Text style={styles.tituloTexto}>{titulo}</Text>
            </View>

            <View style={styles.itens}>
                <FlatList
                    data={destaques}
                    renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Image style={styles.itemImagem} source={item.imagem}/>
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
        width: 115,
        height: 180,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 6,
        marginBottom: 10,
    },
    itemImagem: {
        width: 115,
        height: 180,
        borderRadius: 6,
    }
});
