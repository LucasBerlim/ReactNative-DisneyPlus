import { BlurView } from "expo-blur";
import { StyleSheet, Image } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';
import Fontisto from '@expo/vector-icons/Fontisto';

const fotoPerfil = "https://static.wikia.nocookie.net/happyfeet/images/3/36/Erik%27s_full-body_view.png/revision/latest/scale-to-width-down/300?cb=20140914172204";

export function Footer() {
    return (
        <BlurView  experimentalBlurMethod={"none"} tint="systemMaterialDark"  intensity={2} style={styles.container}>  
            <Fontisto style={styles.iconeExpo} name="home" size={30} color="white" />
            <FontAwesome style={styles.iconeExpo} color={"#a69e9b"} name="search" size={28} />
            <Octicons style={styles.iconeExpo} name="download" size={35} color={"#a69e9b"} />
            <Image style={[styles.icone, styles.profilePicture]} source={{uri: fotoPerfil}} />
        </BlurView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(44, 40, 41, 0.98)',
        height: 90,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-start",
        position: "absolute",
        bottom: 0,
    },
    icone: {
        width: 40,
        height: 40,
        marginTop: 20,
    },
    profilePicture: {
        borderRadius: 20,
    },
    iconeExpo: {
        marginTop: 20,
        textAlign: "center"
    }
});
