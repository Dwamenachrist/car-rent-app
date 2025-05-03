import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Screens
import LoginScreen from './components/loginscreen';


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <LoginScreen />
    </>
  );
}

const styles = StyleSheet.create({

});
