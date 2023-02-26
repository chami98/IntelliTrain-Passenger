
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import HomeNavigator from './navigators/HomeNavigator';
import Signup from './screens/Signup';
import { useEffect } from 'react';
import { getAuth, signOut } from "firebase/auth";
import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config/firebaseConfig';



export default function App() {


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const user = auth.currentUser;


  //check whether user sign in or not
  useEffect(() => {
    if (user) {
      console.log('sign in');
    } else {
      console.log('not sign in');
    }

  }, [])

  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
        <Stack.Screen options={{ headerShown: false }} name='Signup' component={Signup} />
        <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
        <Stack.Screen options={{ headerShown: false }} name='HomeNavigator' component={HomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, text: {
    marginBottom: 10,
    fontSize: 20
  }
});
