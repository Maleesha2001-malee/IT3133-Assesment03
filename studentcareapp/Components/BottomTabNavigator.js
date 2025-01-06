import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet } from 'react-native';
import Profile from './Profile';
import Course from './Course';
import Subjects from './Subjects';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ studentData }) => {
  const ScrollableScreen = (Component) => {
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Component studentData={studentData} />
      </ScrollView>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Courses') {
            iconName = focused ? 'school' : 'school-outline';
          } else if (route.name === 'Subjects') {
            iconName = focused ? 'book' : 'book-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4b0150',
        tabBarInactiveTintColor: '#4b0150',
      })}
    >
      <Tab.Screen name="Profile">
        {() => ScrollableScreen(Profile)}
      </Tab.Screen>
      <Tab.Screen name="Courses">
        {() => ScrollableScreen(Course)}
      </Tab.Screen>
      <Tab.Screen name="Subjects">
        {() => ScrollableScreen(Subjects)}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 16, // Optional padding for a better layout
  },
});

export default BottomTabNavigator;
