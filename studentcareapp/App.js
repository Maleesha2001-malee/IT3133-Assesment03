import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Components/Header'; 
import Login from './Components/Login'; 
import Home from './Components/Home';
import Footer from './Components/Footer'; 

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
            <View style={styles.loginScreenContainer}>
              <Header />
              <Login navigation={navigation} />
              <Footer style={styles.footerContainer}/> 
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            gestureEnabled: false, 
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loginScreenContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    height: '100%',
  },
  footerContainer:{
    position: 'absolute',
    alignItems: 'center',
    justifyContent:'center',
    
  },
});
