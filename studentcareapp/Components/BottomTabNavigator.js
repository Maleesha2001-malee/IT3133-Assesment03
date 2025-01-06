import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Profile from './Profile';
import Course from './Course';
import Subjects from './Subjects';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ({ studentData }) => {
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
        {() => <Profile studentData={studentData} />}
      </Tab.Screen>
      <Tab.Screen name="Courses">
        {() => <Course studentData={studentData} />}
      </Tab.Screen>
      <Tab.Screen name="Subjects">
        {() => <Subjects studentData={studentData} />}
      </Tab.Screen>
    </Tab.Navigator>

  );
};

export default BottomTabNavigator;
