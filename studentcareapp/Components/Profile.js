// Profile.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile = ({ studentData }) => {
  return (
    <View style={styles.profile}>
    <View style={styles.profileContainer}>
      <Image
        source={studentData.profile_pic}
        style={styles.profileImage}
      />

      <Text style={styles.name}>{studentData.name}</Text>
      <Text style={styles.basicInfo}>
        Age: {studentData.age} | Gender: {studentData.gender}
      </Text>
    </View>

    {/* Contact Information */}
    <View style={styles.infoSection}>
      <Text style={styles.sectionTitle}>Contact Information</Text>
      <View style={styles.infoContent}>
        <Text style={styles.infoText}>Email: {studentData.email}</Text>
        <Text style={styles.infoText}>Phone: {studentData.phone}</Text>
        <Text style={styles.infoText}>Address: {studentData.address}</Text>
      </View>
    </View>

    {/* Biological Information */}
    <View style={styles.infoSection}>
      <Text style={styles.sectionTitle}>Biological Information</Text>
      <View style={styles.infoContent}>
        <Text style={styles.infoText}>Gender: {studentData.gender}</Text>
        <Text style={styles.infoText}>Age: {studentData.age}</Text>
        <Text style={styles.infoText}>Blood Group: {studentData.bloodGroup}</Text>
      </View>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  profile: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 0.3, 
    shadowRadius: 8, 
    elevation: 5, 
    width: '87%',
    marginLeft: 30,
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
  scrollView: {
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  placeholderImage: {
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  basicInfo: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  infoSection: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  infoContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 1,
  },
});

export default Profile;