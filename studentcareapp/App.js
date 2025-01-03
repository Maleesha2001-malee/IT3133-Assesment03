import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import Header from './Components/Header';
import Login from './Components/Login';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header></Header>
      <Login></Login>
    </ScrollView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
},
});
