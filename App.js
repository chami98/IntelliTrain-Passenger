import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import UserQR from './screens/UserQR';
import Home from './screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'UserQR') {
            iconName = focused ? 'qr-code-outline' : 'qr-code-outline';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'megaphone-outline' : 'megaphone-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },

        headerShown: false
      })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}

      >
        <Tab.Screen name="Home" component={Home}
        />
        <Tab.Screen name="UserQR" component={UserQR}
        />
      </Tab.Navigator>
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
