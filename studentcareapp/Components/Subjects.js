import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';


const Profile = ()=> {

        const route = useRoute(); 
        const { studentData } = route.params; 

  return (
    <View style={styles.container}>
       <ScrollView style={styles.scrollView}>
        {/* Profile Section */}
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

      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header_text: {
    backgroundColor: '#4b0150',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  footer_text: {
    backgroundColor: '#4b0150',
    width: '90%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: 20
  },
  footer_text_content: {
    color: '#fff',
    fontSize: 12,
    flex: 1,
    marginLeft: 100,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    zIndex: 1,
  },
  header_text_content: {
    color: '#fff',
    fontSize: 22,
    flex: 1,
    textAlign: 'center',
  },
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
    width: '85%',
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
    padding: 1,
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
    marginVertical: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    color: '#4b0150',
    marginTop: 4,
    fontSize: 12,
  },
});

export default Profile;