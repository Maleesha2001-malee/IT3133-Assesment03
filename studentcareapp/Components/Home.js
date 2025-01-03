import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Home = ({ route }) => {
  const { studentData } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileSection}>
        <Image source={studentData.profile_pic} style={styles.profileImage} />
        <Text style={styles.nameText}>Welcome, {studentData.name}!</Text>
        <Text style={styles.emailText}>{studentData.email}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
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
