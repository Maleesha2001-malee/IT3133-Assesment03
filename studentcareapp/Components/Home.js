import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomTabNavigator from './BottomTabNavigator'; 

const Home = ({ navigation, route }) => {
  const { studentData } = route.params || {};

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>UoV Student Care</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Logo/UoV_Logo.png')}
          style={styles.image}
        />
      </View>

      {/* BottomTabNavigator */}
      <View style={styles.contentContainer}>
        <BottomTabNavigator studentData={studentData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4b0150',
    height: 60,
    paddingHorizontal: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    flex: 1,
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
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

export default Home;
