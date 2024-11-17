import { StyleSheet, View, Image } from "react-native";
import { Parceiro } from "../Parceiro/Parceiro";
import { Novidade } from "../Novidade/Novidade";
import { Destaques } from "../Destaques/Destaque";
import { Programa } from "../Programa/Programa";
import { ContinuarAssistindo } from "../ContinuarAssistindo/ContinuarAssistindo";
import { TopDez } from "../TopDez/TopDez"

export function Body() {
    return (

        <View style={styles.container}>
            <Image style={styles.logo} source={require("../../../assets/logo-disneyplus-branca.png")}/>
            <Novidade/>
            <Parceiro/>   
            
            <Destaques titulo={"Destaques"}/>
            <ContinuarAssistindo titulo={"Continue Assistindo"}/>
            <Programa titulo={"ESPN"}/>
            <TopDez titulo={"Top 10 hoje no Brasil"}/>
            <Destaques titulo={"Recomendado para você"}/>
        </View>
    )
}

const styles = StyleSheet.create({ 
    container: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingBottom: "100%",
    },
    logo: {
        width: 90,
        height: 50,
        marginTop: 10,
        marginBottom: 5,
    },
    
});
