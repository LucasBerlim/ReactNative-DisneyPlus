import React from 'react';
import { View, StyleSheet } from 'react-native';

interface ProgressBarProps {
  color: string;
}

export const ProgressBar= ({ color }: ProgressBarProps) => {
  return (
    <View style={styles.container}>
      <View  style={styles.barraExterna}>
        <View style={[styles.barraInterna, { backgroundColor: color }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barraExterna: {
    width: '90%',
    height: 4,
    backgroundColor: 'lightgray',
    borderRadius: 10,
  },
  barraInterna: {
    width: '60%',
    height: 4,
    borderRadius: 10,
  },
});
