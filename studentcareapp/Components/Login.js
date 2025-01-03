import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { students } from '../data/StudentsDb';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [error, setError] = useState('');

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
    setError('');
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    const student = students.find(
      (s) => s.username.toLowerCase() === username.toLowerCase()
    );

    if (!student) {
      setError('Invalid username');
      return;
    }

    if (student.password !== password) {
      setError('Invalid password');
      return;
    }

    // Successful login
    setError('');
    Alert.alert('Success', 'Login successful!');
    // You can handle successful login here
  };

  return (
    <View style={styles.loginContainer}>
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
        <View style={styles.usernameContainer}>
          <TextInput
            style={[
              styles.input, 
              styles.usernameInput,
              focusedInput === 'username' && styles.inputFocused,
              error && error.includes('username') && styles.inputError
            ]}
            value={username}
            onChangeText={(text) => {
              setUsername(text);
              setError('');
            }}
            onFocus={() => handleFocus('username')}
            onBlur={handleBlur}
            autoCapitalize="none"
          />
        </View>
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
              focusedInput === 'password' && styles.inputFocused,
              error && error.includes('password') && styles.inputError
            ]}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setError('');
            }}
            secureTextEntry={!showPassword}
            onFocus={() => handleFocus('password')}
            onBlur={handleBlur}
            autoCapitalize="none"
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

      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}

      <TouchableOpacity 
        style={styles.loginButton}
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    color: 'black',
    marginBottom: 50,
    fontWeight: '600',
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
    borderColor: '#4b0150',
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
  inputError: {
    borderColor: '#ff3333',
    borderWidth: 1,
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
  errorContainer: {
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  errorText: {
    color: '#ff3333',
    fontSize: 14,
    textAlign: 'center',
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