import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Use Ionicons for the back arrow

const Home = ({ route }) => {
  const { studentData } = route.params;
  const navigation = useNavigation(); // Hook for navigation

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={15} color="#fff" style={styles.icontext}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>UoV Student Care</Text>
      </View>

      {/* Content Section */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.profileSection}>
          <Image source={studentData.profile_pic} style={styles.profileImage} />
          <Text style={styles.nameText}>Welcome, {studentData.name}!</Text>
          <Text style={styles.emailText}>{studentData.email}</Text>
        </View>
      </ScrollView>
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
  icontext:{
    marginTop:15
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
    marginLeft:80,
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4b0150',
  },
  emailText: {
    fontSize: 16,
    color: '#555',
  },
});

export default Home;
