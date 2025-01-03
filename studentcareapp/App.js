import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Components/Header';
import Login from './Components/Login';
import Home from './Components/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen 
          name="LoginScreen" 
          options={{ 
            headerShown: false 
          }}
          component={({ navigation }) => (
            <>
              <Header />
              <Login navigation={navigation} />
            </>
          )}
        />
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ 
            headerShown: false,
            // Prevent going back to login
            headerLeft: null,
            gestureEnabled: false
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});