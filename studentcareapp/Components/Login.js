import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { students } from '../data/StudentDb';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>STUDENT LOGIN</Text>
      
      <View style={styles.inputContainer}>
        <Text
          style={[
            styles.label,
            (username || focusedInput === 'username') ? styles.labelActive : styles.labelInactive,
          ]}
        >
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
              focusedInput === 'username' && styles.inputFocused
            ]}
            value={username}
            onChangeText={setUsername}
            onFocus={() => handleFocus('username')}
            onBlur={handleBlur}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text
          style={[
            styles.label,
            (password || focusedInput === 'password') ? styles.labelActive : styles.labelInactive,
          ]}
        >
          Password
        </Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[
              styles.input, 
              styles.passwordInput,
              focusedInput === 'password' && styles.inputFocused
            ]}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            onFocus={() => handleFocus('password')}
            onBlur={handleBlur}
          />
          <TouchableOpacity 
            style={styles.eyeIconContainer}
            onPress={togglePasswordVisibility}
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

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
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
    fontSize: 12,
    color: '#4b0150',
  },
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#F9F9F9',
    fontSize: 16,
  },
  inputFocused: {
    borderWidth: 2,
    borderColor: '#4b0150',
    backgroundColor: '#fff',
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
  loginButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#4b0150',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Login;