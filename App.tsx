import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Footer } from './src/components/Footer/Footer';
import { Body } from './src/components/Body/Body';
import { LinearGradient } from 'expo-linear-gradient';

const DATA = [
  { id: '1', content: <Body /> },
];

export default function App() {
  return (
    <LinearGradient 
      colors={[
        'rgba(18,21,30,0.97)',
        'rgba(18,21,30,0.965)',
        'rgba(18,21,30,0.96)',
        'rgba(18,21,30,0.965)',
        'rgba(18,21,30,0.97)'
      ]}
      style={styles.gradient}
    >
      <View style={styles.topo} />
      <FlatList
        data={DATA}
        renderItem={({ item }) => item.content}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatlistContainer}
      />
      <Footer />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: 50,
  },
  gradient: {
    flex: 1,
  },
  flatlistContainer: {
    justifyContent: 'flex-start',
  },
});
