import { StyleSheet, View, Text, Image, ImageBackground, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { novidades } from "../../mock/novidades";
import Carousel from "react-native-snap-carousel";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export function Novidade() {

    const renderItem = ({ item }: any) => (
        <ImageBackground  source={item.banner} imageStyle={styles.imageStyle} style={styles.imagemBanner}>
            <LinearGradient
                colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)', 'rgba(0,0,0,0.92)', 'rgba(0,0,0,0.93)']}
                style={styles.gradient}>
                <View style={styles.destaque}>
                    <Image style={styles.tituloImagem} source={item.tituloImagem} />
                    <Text style={[styles.texto, { fontWeight: "bold" }]}>{item.mensagem}</Text>
                    <View style={styles.classificacaoContainer}>
                        {item.statusClassificacao && <Image style={styles.iconeClassificacao} source={item.classificacaoIcone} />}
                        <Text style={styles.texto}>{item.ano} &bull; {item.genero}</Text>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
    );

    return (
        <View style={styles.container}>
            <Carousel
                data={novidades}
                renderItem={renderItem}
                sliderWidth={viewportWidth}
                itemWidth={viewportWidth * 0.88}
                contentContainerCustomStyle={styles.carouselContent}
                loop={true}
                keyExtractor={(item, index) => `${item.id}-${index}`} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    imagemBanner: {
        width: viewportWidth * 0.89,
        height: viewportHeight * 0.55,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    imageStyle: {
        borderRadius: 6,
    },
    destaque: {
        marginBottom: 10,
        alignItems: "center",
        gap: 5,
    },
    tituloImagem: {
        width: "60%",
        height: 100,
    },
    texto: {
        textAlign: "center",
        color: "#fff",
        fontSize: 12,
    },
    classificacaoContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    iconeClassificacao: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    gradient: {
        flex: 1,
        justifyContent: 'flex-end',
        borderRadius: 6,
        width: "100%",
    },
    carouselContent: {
        alignItems: "center"
    },
});
