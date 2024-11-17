import { StyleSheet, View, ScrollView } from 'react-native';
import { Footer } from './src/components/Footer/Footer';
import { Body } from './src/components/Body/Body';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topo}/>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Body />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: 50,
    backgroundColor: "#171925",
},
  container: {
    flex: 1,
    backgroundColor: "#171925",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
