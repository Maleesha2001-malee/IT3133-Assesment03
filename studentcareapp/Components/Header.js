import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header_text}>
        <Text style={styles.header_text_content}>UoV Student Care</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/Logo/UoV_Logo.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header_text: {
    backgroundColor: '#4b0150',
    width: '100%',
    height: 60,
    justifyContent: 'center',
  },
  header_text_content: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
  },
  imageContainer: {
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: 350,
    height: 100,
    resizeMode: 'contain',
  },
});