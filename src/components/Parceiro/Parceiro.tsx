import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { parceiros } from "../../mock/parceiros";

export function Parceiro() {
    return (
        <View style={styles.pareceirosContainer}>
            <FlatList
                data={parceiros}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.parceiro}>
                        <Image style={styles.parceiroLogo} source={item.imagem}/>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={4}
                columnWrapperStyle={styles.columnWrapper}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    pareceirosContainer: {
        width: "100%",
        margin: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    parceiro: {
        width: 80,
        height: 80,
        backgroundColor: "#333542",
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#4c4e5b",
        justifyContent: "center",
        alignItems: "center",
        margin: 5, 
    },
    parceiroLogo: {
        width: 45,
        height: 15,
    },
    columnWrapper: {
        justifyContent: 'center',
    },
});
