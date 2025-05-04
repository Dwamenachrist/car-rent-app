import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


// Screens
import LoginScreen from './Screens/loginscreen';
import HomeScreen from './Screens/homescreen';
import BranchesScreen from './Screens/branchesscreen';
import AccountScreen from './Screens/accountscreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Branches') {
            iconName = 'location';
          }else if (route.name === 'Vehicles') {
            iconName = 'car';
          } else if (route.name === 'Account') {
            iconName = 'person';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#304ffe',
        tabBarInactiveTintColor: '#b9c3cd',
        headerShown: false,
      })}
      initialRouteName="Vehicles"
    >
      <Tab.Screen name="Branches" component={BranchesScreen}  />
      <Tab.Screen name="Vehicles" component={HomeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
