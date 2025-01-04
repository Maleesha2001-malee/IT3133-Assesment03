import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigationState} from '@react-navigation/native';
import Profile from './Profile'; 

const Home = ({ navigation, route }) => {
  const { studentData } = route.params;
  const currentRoute = useNavigationState(state => state.routes[state.index].name);
  const isProfileActive = route.name === 'Profile';

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header_text}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.header_text_content}>UoV Student Care</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Logo/UoV_Logo.png')}
          style={styles.image}
        />
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Profile Section */}
        <Profile studentData={studentData} />
        {/*footer*/}
        <View style={styles.footer_text}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.footer_text_content}>UOV@2024</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigation.navigate('Profile')}
      >
        <Ionicons
          name={isProfileActive ? "person" : "person-outline"} 
          size={24}
          color={currentRoute === 'Profile' ? '4b0150' : '#4b0150'} 
        />
        <Text style={styles.footerText}>
          Profile
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigation.navigate('Course')}
      >
        <Ionicons
          name="school-outline"
          size={24}
          color={currentRoute === 'course' ? '4b0150' : '#4b0150'} 
        />
        <Text style={styles.footerText}>Course</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigation.navigate('Subject')}
      >
        <Ionicons
          name="book-outline"
          size={24}
          color={currentRoute === 'Subject' ? 'transparent' : '#4b0150'} 
        />
        <Text style={styles.footerText}>Subjects</Text>
      </TouchableOpacity>
      </View>
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
  footer_text_content:{
    color: '#fff',
    fontSize: 12,
    flex: 1,
    marginLeft:100,
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

export default Home;