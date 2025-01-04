import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Components/Header'; // Assuming you have a Header component
import Login from './Components/Login'; // Assuming you have a Login component
import Home from './Components/Home'; // Assuming you have a Home component

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          options={{
            headerShown: false,
          }}
        >
          {({ navigation }) => (
            <View style={styles. loginScreenContainer}>
              <Header />
              <Login navigation={navigation} />
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            gestureEnabled: false, // Disable gestures to prevent going back
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loginScreenContainer: {
    backgroundColor:'#fff',
    height:'100%'
  },
});
