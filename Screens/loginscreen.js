import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, SafeAreaView, Platform, Image, StatusBar, ImageBackground, Alert } from 'react-native';
import Button from '../components/button';
import TextInputComponent from '../components/textinput';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    if (!username || !password) {
      Alert.alert('Please enter both username and password.');
      return;
    }

    if (username.length < 5 || password.length < 8) {
      Alert.alert('Username must be at least 5 characters and password at least 8.');
      return;
    }

    console.log('Login successful!');
    navigation.navigate('Home');
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked!');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.heading}>
        <Image
          source={require('../assets/images/Drive.png')}
          style={{ width: 122, height: 146, marginBottom: 20 }}
        />
        
        <Image
          source={require('../assets/images/driveit.png')}
          style={{ width: 146, height: 38 }}
        />
      </View>
      <ImageBackground
      source={require('../assets/images/bg.png')}
      style={{ flex: 1, width: '100%', height: '100%' }}
      >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.inputs}>
          <TextInputComponent placeholder="Sahar Soffer" onChangeText={setUsername}/>
          <TextInputComponent placeholder="**************" secureTextEntry={true} onChangeText={setPassword} />
          <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
            Forgot Password?
          </Text>
          <Button onPress={handleLogin}>LOG IN</Button>
        </View>
      </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#304ffe',
  },
  container: {
    flex: 1,
    marginTop: "20%",
    alignItems: 'center',
  },
  heading: {
    alignItems: 'center',
    marginTop: 90,
  },
  inputs: {
    alignItems: 'center',
  },
  forgotPassword: {
    color: '#fff',
    marginBottom: 20,
  },
});