import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { students } from '../data/StudentDb';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleLogin = () => {
    const student = students.find(
      (s) => s.username.toLowerCase() === username.toLowerCase()
    );

    if (!student ) {
      setError(true);
      return;
    }

    if (student.password !== password) {
      setError(true);
      return;
    }

    // Successful login
    setError(false);
    Alert.alert('Login Successful!', `Welcome, ${student.name}!`);
    navigation.navigate('Home', { studentData: student });
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <Text style={styles.headerText}>STUDENT LOGIN</Text>

        <View style={styles.inputContainer}>
          <Text style={[styles.label,
          (focusedInput === 'username' || username) ? styles.labelActive : styles.labelInactive,
          
          ]}>
            Username
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.usernameContainer}
          >
            <TextInput
              style={[
                styles.input,
                styles.usernameInput,
                styles.inputFocused,
              ]}
              value={username}
              onChangeText={setUsername}
              onFocus={() => handleFocus('username')}
              onBlur={handleBlur}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputContainer}>
            <Text
              style={[
                styles.label,
                (focusedInput === 'password' || password) ? styles.labelActive : styles.labelInactive,
                
                
              ]}
            >
              Password
            </Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={[
                  styles.input,
                  styles.passwordInput,
                  styles.inputFocused,
                ]}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                onFocus={() => handleFocus('password')}
                onBlur={handleBlur}
              />
              <TouchableOpacity
                style={styles.eyeIconContainer}
                onPress={() => setShowPassword(!showPassword)}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Ionicons
                  name={showPassword ? 'eye-off' : 'eye'}
                  size={24}
                  color="#000"
                  style={styles.eyeIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
         

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.errorWrapper}>
          {error && ( 
            <View style={styles.errorContainer}>
            <Ionicons
              name="alert-circle"
              size={20}
              color="#8a23df"
              style={styles.errorIcon}
            /> <Text style={styles.errorText}> Please check the username and password
            </Text> 
            </View>
          )}
          </View>
          </View>
        </View>
     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 30,
    color: 'black',
    marginBottom: 50,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
    position: 'relative',
  },
  label: {
    position: 'absolute',
    left: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    zIndex: 1,
  },
  labelInactive: {
    top: 12,
    fontSize: 16,
    color: '#aaa',
  },
  labelActive: {
    top: -10,
    fontSize: 15,
    color: '#4b0150',
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  usernameContainer: {
    width: '100%',
  },
  passwordInput: {
    paddingRight: 50,
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 12,
    top: 10,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeIcon: {
    opacity: 0.7,
  },

  inputFocused: {
    borderColor: '#4b0150',
    borderWidth: 2,
  },
  errorWrapper: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5, 
    borderRadius: 10,
    width: '75%',
    backgroundColor: '#e4cdf6',
    marginTop: 40,
    justifyContent:'center',
    textAlign: 'center',
    
  },
  errorIcon: {
    marginRight: 5,
  },
  errorText: {
    color: '#000',
    marginBottom: 5,
    fontSize: 10,
  },
  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#4b0150',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Login;
